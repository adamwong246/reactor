import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import config from './.storyboardrc.js';

function App() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [storiesTree, setStoriesTree] = useState({});
    const [CurrentStoryComponent, setCurrentStoryComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    // Build the tree structure from the flat list of stories
    useEffect(() => {
        const tree = {};
        
        config.stories.forEach(storyPath => {
            // Split the path to build the tree structure
            const parts = storyPath.split('/');
            let current = tree;
            
            // Build the directory structure
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (i === parts.length - 1) {
                    // It's the story file - store the full path
                    current[part] = { 
                        path: storyPath
                    };
                } else {
                    // It's a directory
                    if (!current[part]) {
                        current[part] = {};
                    }
                    current = current[part];
                }
            }
        });
        
        setStoriesTree(tree);
        // Set the first story as selected
        if (config.stories.length > 0 && !selectedStory) {
            setSelectedStory(config.stories[0]);
        }
    }, []);
    
    // Load the selected story dynamically
    useEffect(() => {
        if (selectedStory) {
            setIsLoading(true);
            console.log("wtf", selectedStory);
            // Dynamically import the story
            import(`http://localhost:8000/dist/${selectedStory}`)
                .then(module => {
                    setCurrentStoryComponent(() => module.default);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error loading story:', error);
                    setIsLoading(false);
                });
        }
    }, [selectedStory]);
    
    // Helper function to find a story in the tree by path
    const findStoryInTree = (tree, path) => {
        const parts = path.split('/');
        let current = tree;
        
        for (const part of parts) {
            current = current[part];
            if (!current) return null;
        }
        
        return current;
    };

    // Recursive function to render the tree
    const renderTree = (node, path = '') => {
        return Object.keys(node).map(key => {
            const currentPath = path ? `${path}/${key}` : key;
            
            if (node[key].path) {
                // It's a story
                const storyPath = node[key].path;
                const displayName = key.replace('.stories.js', '').replace('.js', '');
                
                return (
                    <div
                        key={storyPath}
                        onClick={() => setSelectedStory(storyPath)}
                        style={{
                            padding: '8px 12px 8px 20px',
                            margin: '2px 0',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            backgroundColor: selectedStory === storyPath ? '#1ea7fd' : 'transparent',
                            color: selectedStory === storyPath ? 'white' : '#333',
                            fontWeight: selectedStory === storyPath ? 'bold' : 'normal',
                            fontSize: '14px',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {displayName}
                    </div>
                );
            } else {
                // It's a directory
                return (
                    <div key={currentPath} style={{ marginLeft: '0px' }}>
                        <div style={{ 
                            fontWeight: 'bold', 
                            margin: '8px 0 4px 0',
                            padding: '6px 12px',
                            fontSize: '14px',
                            color: '#666',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {key}
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                            {renderTree(node[key], currentPath)}
                        </div>
                    </div>
                );
            }
        });
    };

    const displayName = selectedStory ? selectedStory.split('/').pop().replace('.stories.js', '').replace('.js', '') : '';
    
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left Column - Tree View */}
            <div style={{ 
                width: '280px', 
                borderRight: '1px solid #ddd',
                backgroundColor: '#f8f9fa',
                padding: '20px',
                overflow: 'auto'
            }}>
                <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>Stories</h3>
                {renderTree(storiesTree)}
            </div>
            
            {/* Right Column - Component Display */}
            <div style={{ 
                flex: 1, 
                padding: '20px',
                overflow: 'auto',
                backgroundColor: '#fff'
            }}>
                <h1 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>
                    {displayName || 'Select a Story'}
                </h1>
                {isLoading && <div>Loading story...</div>}
                {!isLoading && CurrentStoryComponent && <CurrentStoryComponent />}
                {!isLoading && selectedStory && !CurrentStoryComponent && (
                    <div>Error loading story: {selectedStory}</div>
                )}
            </div>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
