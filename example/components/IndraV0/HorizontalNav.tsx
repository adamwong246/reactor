import React from 'react';

export function HorizontalNav({ activeTab, setActiveTab, onMyProfileClick }) {
    return (
        <div style={{
            backgroundColor: '#4A154B',
            padding: '10px 20px',
            borderBottom: '1px solid #611f69'
        }}>
            <div style={{
                display: 'flex',
                gap: '15px',
                overflowX: 'auto'
            }}>
                <button 
                    style={{
                        background: activeTab === 'profile' ? '#611f69' : 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        fontSize: '14px',
                        transition: 'background-color 0.2s ease'
                    }}
                    onClick={() => {
                        setActiveTab('profile');
                        if (onMyProfileClick) {
                            onMyProfileClick();
                        }
                    }}
                    onMouseEnter={(e) => {
                        if (activeTab !== 'profile') {
                            e.target.style.backgroundColor = '#611f69';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeTab !== 'profile') {
                            e.target.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    👤 My Profile
                </button>
                <button 
                    style={{
                        background: activeTab === 'search' ? '#611f69' : 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        fontSize: '14px',
                        transition: 'background-color 0.2s ease'
                    }}
                    onClick={() => {
                        console.log("Search tab clicked directly");
                        setActiveTab('search');
                    }}
                    onMouseEnter={(e) => {
                        if (activeTab !== 'search') {
                            e.target.style.backgroundColor = '#611f69';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeTab !== 'search') {
                            e.target.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    🔍 Search
                </button>
                <button 
                    style={{
                        background: activeTab === 'notifications' ? '#611f69' : 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        fontSize: '14px',
                        transition: 'background-color 0.2s ease'
                    }}
                    onClick={() => setActiveTab('notifications')}
                    onMouseEnter={(e) => {
                        if (activeTab !== 'notifications') {
                            e.target.style.backgroundColor = '#611f69';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeTab !== 'notifications') {
                            e.target.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    🔔 Notifications
                </button>
                <button 
                    style={{
                        background: activeTab === 'settings' ? '#611f69' : 'transparent',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        fontSize: '14px',
                        transition: 'background-color 0.2s ease'
                    }}
                    onClick={() => setActiveTab('settings')}
                    onMouseEnter={(e) => {
                        if (activeTab !== 'settings') {
                            e.target.style.backgroundColor = '#611f69';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeTab !== 'settings') {
                            e.target.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    ⚙️ Settings
                </button>
            </div>
        </div>
    );
}
