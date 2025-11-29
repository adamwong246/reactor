import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { BackendContext } from './Backend';

export function Settings() {
    const backend = useContext(BackendContext);
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');
    const [privacy, setPrivacy] = useState('public');
    const [legalName, setLegalName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const currentUser = await backend.getCurrentUser();
                setLegalName(currentUser.legalName || '');
                setEmail(currentUser.email || '');
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };
        fetchCurrentUser();
    }, [backend]);

    const handleSaveSettings = async () => {
        setIsLoading(true);
        try {
            const currentUser = await backend.getCurrentUser();
            const updates: any = {};
            
            // Update legal name if provided
            if (legalName.trim()) {
                updates.legalName = legalName.trim();
            }
            
            // Update email if provided
            if (email.trim()) {
                updates.email = email.trim();
            }
            
            // Only update if there are changes
            if (Object.keys(updates).length > 0) {
                await backend.updateUser(currentUser.uid, updates);
            }
            
            alert('Settings saved successfully!');
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Settings</h2>
            
            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Notification Preferences</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="notifications-switch"
                            label="Enable push notifications"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                        <Form.Check
                            type="switch"
                            id="email-updates-switch"
                            label="Email updates"
                            checked={emailUpdates}
                            onChange={(e) => setEmailUpdates(e.target.checked)}
                        />
                    </Form>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Appearance</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Theme</Form.Label>
                        <Form.Select 
                            value={theme} 
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Language & Region</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select 
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="chinese">Chinese</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Privacy</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group>
                        <Form.Label>Default Post Privacy</Form.Label>
                        <Form.Select 
                            value={privacy} 
                            onChange={(e) => setPrivacy(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="friends">Friends Only</option>
                            <option value="private">Private</option>
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Profile Information</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group style={{ marginBottom: '15px' }}>
                        <Form.Label>Legal Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={legalName}
                            onChange={(e) => setLegalName(e.target.value)}
                            placeholder="Enter your legal name"
                        />
                        <Form.Text className="text-muted">
                            Your legal name for verification purposes.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group style={{ marginBottom: '15px' }}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <Card.Header>
                    <h5>Account</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button variant="outline-primary" style={{ marginRight: '10px' }}>
                                Change Password
                            </Button>
                            <Button variant="outline-secondary" style={{ marginRight: '10px' }}>
                                Export Data
                            </Button>
                            <Button variant="outline-danger">
                                Delete Account
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button 
                    variant="primary" 
                    onClick={handleSaveSettings} 
                    size="lg"
                    disabled={isLoading}
                >
                    {isLoading ? 'Saving...' : 'Save Settings'}
                </Button>
            </div>
        </div>
    );
}
