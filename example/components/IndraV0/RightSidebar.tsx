import React, { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend';
import { useDB } from './DBContext';
import { User, ChatRoom } from './store';

interface RightSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ activeTab, setActiveTab }) => {
    const [isActiveChatsOpen, setIsActiveChatsOpen] = useState<boolean>(true);
    const [isOnlineFriendsOpen, setIsOnlineFriendsOpen] = useState<boolean>(true);
    const [isOfflineFriendsOpen, setIsOfflineFriendsOpen] = useState<boolean>(true);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const backend = useContext(BackendContext);
    const { currentUser, chatRooms, users } = useDB();

    // Filter out blocked users
    useEffect(() => {
        const filterUsers = async () => {
            if (!currentUser) return;
            
            try {
                const filtered = await Promise.all(
                    users.map(async (userItem) => {
                        // Check if there's a blocking relationship in either direction
                        const relationship = await backend.getRelationship(currentUser.uid, userItem.uid);
                        // If current user blocks this user or is blocked by this user, exclude them
                        if (relationship === 'blocked' || relationship === 'blocked-by') {
                            return null;
                        }
                        return userItem;
                    })
                );
                setFilteredUsers(filtered.filter(Boolean) as User[]);
            } catch (error) {
                console.error('Error filtering users:', error);
                setFilteredUsers(users);
            }
        };
        
        filterUsers();
    }, [backend, users, currentUser]);

    const filteredChatRooms = chatRooms.filter((room: ChatRoom) => {
        // For private 1-1 chats, check if the other participant is blocked
        if (room.type === "private-1-1") {
            // Find the other participant (not current user)
            const otherParticipant = room.participants.find(uid => uid !== (currentUser?.uid || "0"));
            // Check if this user is in the filteredUsers list
            const isBlocked = !filteredUsers.some(user => user.uid === otherParticipant);
            return !isBlocked;
        }
        // For group chats, always show them for now
        return true;
    });

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, roomId: string) => {
        if (activeTab !== roomId) {
            const target = e.currentTarget;
            target.style.backgroundColor = '#611f69';
            target.style.borderLeftColor = '#ffffff';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, roomId: string) => {
        if (activeTab !== roomId) {
            const target = e.currentTarget;
            target.style.backgroundColor = 'transparent';
            target.style.borderLeftColor = 'transparent';
        }
    };

    return (
        <div style={{ 
            backgroundColor: '#4A154B', 
            padding: '20px 0', 
            borderLeft: '1px solid #611f69',
            overflowY: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            
            {/* Active Chats */}
            <div style={{ marginBottom: '30px' }}>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsActiveChatsOpen(!isActiveChatsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Active Chats</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isActiveChatsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isActiveChatsOpen && filteredChatRooms.slice(0, 3).map(room => (
                    <div 
                        key={room.id} 
                        style={{
                            padding: '10px 20px',
                            marginBottom: '5px',
                            backgroundColor: activeTab === room.id ? '#611f69' : 'transparent',
                            cursor: 'pointer',
                            borderLeft: activeTab === room.id ? '3px solid #ffffff' : '3px solid transparent'
                        }}
                        onClick={() => setActiveTab(room.id)}
                        onMouseEnter={(e) => handleMouseEnter(e, room.id)}
                        onMouseLeave={(e) => handleMouseLeave(e, room.id)}
                    >
                        <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'white' }}>
                            {room.type === "private-1-1" ? "💬" : 
                             room.type === "private-group" ? "👥" : "🌐"} {room.name}
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                            Last message: Just now
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Online Friends */}
            <div style={{ marginBottom: '30px' }}>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsOnlineFriendsOpen(!isOnlineFriendsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Online Friends</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isOnlineFriendsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isOnlineFriendsOpen && filteredUsers.slice(0, 4).map(user => {
                    // Find or create a private chat room ID for this user
                    const privateChatRoom = chatRooms.find(room => 
                        room.type === "private-1-1" && 
                        room.participants.includes(user.uid)
                    );
                    const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
                    
                    return (
                        <div 
                            key={user.uid} 
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 20px',
                                marginBottom: '5px',
                                backgroundColor: activeTab === roomId ? '#611f69' : 'transparent',
                                cursor: 'pointer',
                                borderLeft: activeTab === roomId ? '3px solid #ffffff' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab(roomId)}
                            onMouseEnter={(e) => handleMouseEnter(e, roomId)}
                            onMouseLeave={(e) => handleMouseLeave(e, roomId)}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#28a745',
                                marginRight: '10px'
                            }}></div>
                            <div style={{ fontSize: '14px', color: 'white' }}>
                                {user.name}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Offline Friends */}
            <div>
                <div 
                    style={{ 
                        padding: '0 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => setIsOfflineFriendsOpen(!isOfflineFriendsOpen)}
                >
                    <h6 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>Offline Friends</h6>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {isOfflineFriendsOpen ? '▼' : '▶'}
                    </span>
                </div>
                {isOfflineFriendsOpen && filteredUsers.slice(4, 8).map(user => {
                    // Find or create a private chat room ID for this user
                    const privateChatRoom = chatRooms.find(room => 
                        room.type === "private-1-1" && 
                        room.participants.includes(user.uid)
                    );
                    const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
                    
                    return (
                        <div 
                            key={user.uid} 
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px 20px',
                                marginBottom: '5px',
                                backgroundColor: activeTab === roomId ? '#611f69' : 'transparent',
                                cursor: 'pointer',
                                borderLeft: activeTab === roomId ? '3px solid #ffffff' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab(roomId)}
                            onMouseEnter={(e) => handleMouseEnter(e, roomId)}
                            onMouseLeave={(e) => handleMouseLeave(e, roomId)}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#6c757d',
                                marginRight: '10px'
                            }}></div>
                            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                                {user.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
