import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BackendContext } from './Backend.js';
import {GenderIdentitySquare} from "./GenderIdentitySquare.js"

export function AboutModal({ show, onHide, user }) {
    const backend = useContext(BackendContext);
    const [isEditing, setIsEditing] = useState(false);
    const [aboutMeText, setAboutMeText] = useState('');
    const [username, setUsername] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [genderMetrics, setGenderMetrics] = useState({
        genderIdentityMan: 50,
        genderIdentityWoman: 50,
        anatomicalSexMale: 50,
        anatomicalSexFemale: 50,
        sexuallyAttractedToMen: 50,
        sexuallyAttractedToWomen: 50,
        romanticallyAttractedToMen: 50,
        romanticallyAttractedToWomen: 50
    });
    const [sexAssignedAtBirth, setSexAssignedAtBirth] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [userType, setUserType] = useState('');
    const [loveHateItems, setLoveHateItems] = useState([]);
    const [newItemText, setNewItemText] = useState('');
    const [newItemIsLove, setNewItemIsLove] = useState(true);
    const [subjects, setSubjects] = useState([]);
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
    
    // Check if this is the current user's profile
    useEffect(() => {
        const fetchCurrentUserAndSubjects = async () => {
            try {
                const userData = await backend.getCurrentUser();
                setCurrentUser(userData);
                // Fetch all subjects
                const allSubjects = await backend.getSubjects();
                setSubjects(allSubjects);
                
                // If this is the current user's profile, initialize the about me text and gender metrics
                if (user && user.uid === userData.uid) {
                    setAboutMeText(user.aboutMe || '');
                    setUsername(user.username || '');
                    setGenderMetrics({
                        genderIdentityMan: user.genderIdentityMan || 50,
                        genderIdentityWoman: user.genderIdentityWoman || 50,
                        anatomicalSexMale: user.anatomicalSexMale || 50,
                        anatomicalSexFemale: user.anatomicalSexFemale || 50,
                        sexuallyAttractedToMen: user.sexuallyAttractedToMen || 50,
                        sexuallyAttractedToWomen: user.sexuallyAttractedToWomen || 50,
                        romanticallyAttractedToMen: user.romanticallyAttractedToMen || 50,
                        romanticallyAttractedToWomen: user.romanticallyAttractedToWomen || 50
                    });
                    setSexAssignedAtBirth(user.sexAssignedAtBirth || '');
                    setBirthdate(user.birthdate || '');
                    setUserType(user.userType || '');
                    // Convert loveHateItems to use subject objects
                    const itemsWithSubjects = await Promise.all(
                        (user.loveHateItems || []).map(async (item) => {
                            if (item.subjectId) {
                                try {
                                    const subject = await backend.getSubject(item.subjectId);
                                    return { ...item, subject };
                                } catch (error) {
                                    console.error('Error fetching subject:', error);
                                    return item;
                                }
                            }
                            return item;
                        })
                    );
                    setLoveHateItems(itemsWithSubjects);
                }
            } catch (error) {
                console.error('Error fetching current user or subjects:', error);
            }
        };
        
        if (show) {
            fetchCurrentUserAndSubjects();
        }
    }, [show, user, backend]);

    const isOwnProfile = user && currentUser && user.uid === currentUser.uid;

    const handleSave = async () => {
        if (isOwnProfile) {
            try {
                // Convert loveHateItems to store subject IDs
                const loveHateItemsToSave = loveHateItems.map(item => ({
                    subjectId: item.subject ? item.subject.id : item.subjectId,
                    isLove: item.isLove
                }));
                
                await backend.updateUser(user.uid, { 
                    aboutMe: aboutMeText,
                    username: username.trim(),
                    ...genderMetrics,
                    sexAssignedAtBirth: sexAssignedAtBirth,
                    birthdate: birthdate,
                    userType: userType,
                    loveHateItems: loveHateItemsToSave
                });
                // Update the local user object to reflect the change
                Object.assign(user, { 
                    aboutMe: aboutMeText, 
                    username: username.trim(),
                    ...genderMetrics,
                    sexAssignedAtBirth: sexAssignedAtBirth,
                    birthdate: birthdate,
                    userType: userType,
                    loveHateItems: loveHateItemsToSave
                });
                setIsEditing(false);
            } catch (error) {
                console.error('Error updating about me:', error);
            }
        }
    };

    const handleCancel = async () => {
        setAboutMeText(user?.aboutMe || '');
        setUsername(user?.username || '');
        setGenderMetrics({
            genderIdentityMan: user?.genderIdentityMan || 50,
            genderIdentityWoman: user?.genderIdentityWoman || 50,
            anatomicalSexMale: user?.anatomicalSexMale || 50,
            anatomicalSexFemale: user?.anatomicalSexFemale || 50,
            sexuallyAttractedToMen: user?.sexuallyAttractedToMen || 50,
            sexuallyAttractedToWomen: user?.sexuallyAttractedToWomen || 50,
            romanticallyAttractedToMen: user?.romanticallyAttractedToMen || 50,
            romanticallyAttractedToWomen: user?.romanticallyAttractedToWomen || 50
        });
        setSexAssignedAtBirth(user?.sexAssignedAtBirth || '');
        setBirthdate(user?.birthdate || '');
        setUserType(user?.userType || '');
        
        // Convert loveHateItems to use subject objects
        if (user?.loveHateItems) {
            const itemsWithSubjects = await Promise.all(
                user.loveHateItems.map(async (item) => {
                    if (item.subjectId) {
                        try {
                            const subject = await backend.getSubject(item.subjectId);
                            return { ...item, subject };
                        } catch (error) {
                            console.error('Error fetching subject:', error);
                            return item;
                        }
                    }
                    return item;
                })
            );
            setLoveHateItems(itemsWithSubjects);
        } else {
            setLoveHateItems([]);
        }
        setIsEditing(false);
    };

    const handleGenderMetricChange = (metricMan, metricWoman, manKey, womanKey) => {
        setGenderMetrics(prev => ({
            ...prev,
            [manKey]: metricMan,
            [womanKey]: metricWoman
        }));
    };

    // Handle subject search
    const handleSubjectSearch = (query) => {
        if (query.trim() === '') {
            setFilteredSubjects([]);
            setShowSubjectDropdown(false);
            return;
        }
        const filtered = subjects.filter(subject =>
            subject.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSubjects(filtered);
        setShowSubjectDropdown(true);
    };

    // Add a subject to love/hate list
    const handleAddSubject = (subject) => {
        const newItem = {
            subject: subject,
            subjectId: subject.id,
            isLove: newItemIsLove
        };
        setLoveHateItems([...loveHateItems, newItem]);
        setNewItemText('');
        setShowSubjectDropdown(false);
    };

    // Create a new subject and add it
    const handleCreateNewSubject = async () => {
        if (newItemText.trim()) {
            try {
                const newSubject = await backend.addSubject(newItemText);
                const newItem = {
                    subject: newSubject,
                    subjectId: newSubject.id,
                    isLove: newItemIsLove
                };
                setLoveHateItems([...loveHateItems, newItem]);
                setNewItemText('');
                setShowSubjectDropdown(false);
                // Refresh subjects list
                const allSubjects = await backend.getSubjects();
                setSubjects(allSubjects);
            } catch (error) {
                console.error('Error creating new subject:', error);
            }
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>About {user?.name}</Modal.Title>
                {isOwnProfile && !isEditing && (
                    <Button 
                        variant="outline-primary" 
                        size="sm" 
                        onClick={() => setIsEditing(true)}
                        style={{ marginLeft: '10px' }}
                    >
                        Edit
                    </Button>
                )}
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#4A154B',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    <h4>{user?.name}</h4>
                </div>
                
                <div style={{ padding: '0 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h5 style={{ color: '#4A154B', margin: 0 }}>About Me</h5>
                    </div>
                    
                    {isEditing ? (
                        <div>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={aboutMeText}
                                onChange={(e) => setAboutMeText(e.target.value)}
                                placeholder="Tell us about yourself..."
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    padding: '15px',
                                    borderRadius: '8px'
                                }}
                            />
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <Button variant="primary" onClick={handleSave}>
                                    Save
                                </Button>
                                <Button variant="outline-secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#333',
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '8px'
                        }}>
                            {user?.aboutMe || 'This user hasn\'t written an about me yet.'}
                        </p>
                    )}
                    
                    <div style={{ marginTop: '30px' }}>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Personal Information</h5>
                        <div style={{ 
                            fontSize: '14px',
                            backgroundColor: '#f0f8ff',
                            padding: '15px',
                            borderRadius: '8px'
                        }}>
                            {/* Username Field */}
                            <div style={{ marginBottom: '15px' }}>
                                <strong>Username:</strong>
                                {isEditing ? (
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter your username"
                                        style={{ marginTop: '5px', maxWidth: '300px' }}
                                    />
                                ) : (
                                    ` ${user?.username ? `@${user.username}` : 'Not set'}`
                                )}
                                {isEditing && (
                                    <Form.Text className="text-muted">
                                        This is how other users will find and mention you.
                                    </Form.Text>
                                )}
                            </div>
                            
                            {/* User Type Field */}
                            <div style={{ marginBottom: '15px' }}>
                                <strong>User Type:</strong>
                                {isEditing ? (
                                    <Form.Select
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value)}
                                        style={{ marginTop: '5px', maxWidth: '300px' }}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Human">Human</option>
                                        <option value="Robot">Robot</option>
                                        <option value="Organization">Organization</option>
                                        <option value="Cyborg">Cyborg</option>
                                        <option value="Something else">Something else</option>
                                    </Form.Select>
                                ) : (
                                    ` ${user?.userType || 'Not specified'}`
                                )}
                            </div>
                            
                            {/* Birthdate Field */}
                            <div style={{ marginBottom: '15px' }}>
                                <strong>Birthdate:</strong>
                                {isEditing ? (
                                    <Form.Control
                                        type="date"
                                        value={birthdate}
                                        onChange={(e) => setBirthdate(e.target.value)}
                                        style={{ marginTop: '5px', maxWidth: '300px' }}
                                    />
                                ) : (
                                    ` ${user?.birthdate ? new Date(user.birthdate).toLocaleDateString() : 'Not specified'}`
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '30px' }}>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Gender Identity Information</h5>
                        <div style={{ 
                            fontSize: '14px',
                            backgroundColor: '#f0f8ff',
                            padding: '15px',
                            borderRadius: '8px'
                        }}>
                            {/* Sex Assigned at Birth Field */}
                            <div style={{ marginBottom: '15px' }}>
                                <strong>Sex Assigned at Birth:</strong>
                                {isEditing ? (
                                    <Form.Select
                                        value={sexAssignedAtBirth}
                                        onChange={(e) => setSexAssignedAtBirth(e.target.value)}
                                        style={{ marginTop: '5px', maxWidth: '300px' }}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Intersex">Intersex</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </Form.Select>
                                ) : (
                                    ` ${user?.sexAssignedAtBirth || 'Not specified'}`
                                )}
                            </div>
                            
                            {isEditing ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                    {/* Gender Identity */}
                                    <div style={{ textAlign: 'center' }}>
                                        <h6 style={{ color: '#4A154B', marginBottom: '10px' }}>Gender Identity</h6>
                                        <GenderIdentitySquare
                                            manValue={genderMetrics.genderIdentityMan}
                                            womanValue={genderMetrics.genderIdentityWoman}
                                            onValueChange={(man, woman) => 
                                                handleGenderMetricChange(man, woman, 'genderIdentityMan', 'genderIdentityWoman')
                                            }
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    
                                    {/* Anatomical Sex */}
                                    <div style={{ textAlign: 'center' }}>
                                        <h6 style={{ color: '#4A154B', marginBottom: '10px' }}>Anatomical Sex</h6>
                                        <GenderIdentitySquare
                                            manValue={genderMetrics.anatomicalSexMale}
                                            womanValue={genderMetrics.anatomicalSexFemale}
                                            onValueChange={(man, woman) => 
                                                handleGenderMetricChange(man, woman, 'anatomicalSexMale', 'anatomicalSexFemale')
                                            }
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    
                                    {/* Sexual Attraction */}
                                    <div style={{ textAlign: 'center' }}>
                                        <h6 style={{ color: '#4A154B', marginBottom: '10px' }}>Sexual Attraction</h6>
                                        <GenderIdentitySquare
                                            manValue={genderMetrics.sexuallyAttractedToMen}
                                            womanValue={genderMetrics.sexuallyAttractedToWomen}
                                            onValueChange={(man, woman) => 
                                                handleGenderMetricChange(man, woman, 'sexuallyAttractedToMen', 'sexuallyAttractedToWomen')
                                            }
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    
                                    {/* Romantic Attraction */}
                                    <div style={{ textAlign: 'center' }}>
                                        <h6 style={{ color: '#4A154B', marginBottom: '10px' }}>Romantic Attraction</h6>
                                        <GenderIdentitySquare
                                            manValue={genderMetrics.romanticallyAttractedToMen}
                                            womanValue={genderMetrics.romanticallyAttractedToWomen}
                                            onValueChange={(man, woman) => 
                                                handleGenderMetricChange(man, woman, 'romanticallyAttractedToMen', 'romanticallyAttractedToWomen')
                                            }
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div>
                                        <strong>Gender Identity - Man:</strong> {user?.genderIdentityMan !== undefined ? `${user.genderIdentityMan}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Gender Identity - Woman:</strong> {user?.genderIdentityWoman !== undefined ? `${user.genderIdentityWoman}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Anatomical Sex - Male:</strong> {user?.anatomicalSexMale !== undefined ? `${user.anatomicalSexMale}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Anatomical Sex - Female:</strong> {user?.anatomicalSexFemale !== undefined ? `${user.anatomicalSexFemale}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Sexually Attracted To - Men:</strong> {user?.sexuallyAttractedToMen !== undefined ? `${user.sexuallyAttractedToMen}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Sexually Attracted To - Women:</strong> {user?.sexuallyAttractedToWomen !== undefined ? `${user.sexuallyAttractedToWomen}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Romantically Attracted To - Men:</strong> {user?.romanticallyAttractedToMen !== undefined ? `${user.romanticallyAttractedToMen}%` : 'Not specified'}
                                    </div>
                                    <div>
                                        <strong>Romantically Attracted To - Women:</strong> {user?.romanticallyAttractedToWomen !== undefined ? `${user.romanticallyAttractedToWomen}%` : 'Not specified'}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Love/Hate Items Section */}
                    <div style={{ marginTop: '30px' }}>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Loves & Hates</h5>
                        <div style={{ 
                            backgroundColor: '#f0f8ff',
                            padding: '15px',
                            borderRadius: '8px'
                        }}>
                            {isEditing ? (
                                <div>
                                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                        <div style={{ flex: 1, position: 'relative' }}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search for subjects to love or hate..."
                                                value={newItemText}
                                                onChange={(e) => {
                                                    setNewItemText(e.target.value);
                                                    handleSubjectSearch(e.target.value);
                                                }}
                                                onFocus={() => {
                                                    if (newItemText.trim()) {
                                                        handleSubjectSearch(newItemText);
                                                    }
                                                }}
                                            />
                                            {showSubjectDropdown && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    right: 0,
                                                    backgroundColor: 'white',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '4px',
                                                    maxHeight: '200px',
                                                    overflowY: 'auto',
                                                    zIndex: 1000
                                                }}>
                                                    {filteredSubjects.map(subject => (
                                                        <div
                                                            key={subject.id}
                                                            style={{
                                                                padding: '8px 12px',
                                                                cursor: 'pointer',
                                                                borderBottom: '1px solid #eee'
                                                            }}
                                                            onClick={() => handleAddSubject(subject)}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#f8f9fa';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = 'white';
                                                            }}
                                                        >
                                                            {subject.name}
                                                        </div>
                                                    ))}
                                                    {newItemText.trim() && (
                                                        <div
                                                            style={{
                                                                padding: '8px 12px',
                                                                cursor: 'pointer',
                                                                backgroundColor: '#e9ecef',
                                                                fontWeight: 'bold'
                                                            }}
                                                            onClick={handleCreateNewSubject}
                                                        >
                                                            + Create new subject: "{newItemText}"
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <Form.Select
                                            value={newItemIsLove}
                                            onChange={(e) => setNewItemIsLove(e.target.value === 'true')}
                                            style={{ width: '120px' }}
                                        >
                                            <option value={true}>Love ❤️</option>
                                            <option value={false}>Hate 💔</option>
                                        </Form.Select>
                                    </div>
                                    {loveHateItems.length > 0 && (
                                        <div style={{ marginTop: '10px' }}>
                                            {loveHateItems.map((lhItem, index) => (
                                                <div 
                                                    key={index}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '8px',
                                                        backgroundColor: 'white',
                                                        marginBottom: '5px',
                                                        borderRadius: '4px',
                                                        border: '1px solid #ddd'
                                                    }}
                                                >
                                                    <span>
                                                        {lhItem.isLove ? '❤️' : '💔'} {lhItem.subject?.name || 'Unknown Subject'}
                                                    </span>
                                                    <Button 
                                                        variant="outline-danger" 
                                                        size="sm"
                                                        onClick={() => {
                                                            const newItems = [...loveHateItems];
                                                            newItems.splice(index, 1);
                                                            setLoveHateItems(newItems);
                                                        }}
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    {loveHateItems && loveHateItems.length > 0 ? (
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                            {loveHateItems.map((lhItem, index) => (
                                                <div 
                                                    key={index}
                                                    style={{
                                                        padding: '8px',
                                                        backgroundColor: 'white',
                                                        borderRadius: '4px',
                                                        border: `1px solid ${lhItem.isLove ? '#d4edda' : '#f8d7da'}`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    <span style={{ fontSize: '16px' }}>
                                                        {lhItem.isLove ? '❤️' : '💔'}
                                                    </span>
                                                    <span>{lhItem.subject?.name || 'Unknown Subject'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p style={{ color: '#666', textAlign: 'center' }}>
                                            No loves or hates added yet.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <h5 style={{ color: '#4A154B', marginBottom: '15px' }}>Profile Information</h5>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gap: '15px',
                            fontSize: '14px'
                        }}>
                            <div>
                                <strong>Member since:</strong> January 2024
                            </div>
                            <div>
                                <strong>Last active:</strong> Today
                            </div>
                            <div>
                                <strong>Posts:</strong> 42
                            </div>
                            <div>
                                <strong>Followers:</strong> 128
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
