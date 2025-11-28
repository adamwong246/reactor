// import React, { useState, useEffect } from 'react';

// export function Storyboard({ components }) {
//     const [selectedComponent, setSelectedComponent] = useState(null);
    
//     // Build directory structure
//     const buildDirectoryStructure = (filePaths) => {
//         const structure = {};
        
//         filePaths.forEach(filePath => {
//             const parts = filePath.split('/');
//             let current = structure;
            
//             for (let i = 0; i < parts.length; i++) {
//                 const part = parts[i];
//                 if (i === parts.length - 1) {
//                     // It's a file
//                     current[part] = filePath;
//                 } else {
//                     // It's a directory
//                     if (!current[part]) {
//                         current[part] = {};
//                     }
//                     current = current[part];
//                 }
//             }
//         });
        
//         return structure;
//     };

//     const renderStructure = (structure, path = '') => {
//         return Object.keys(structure).map(key => {
//             const currentPath = path ? `${path}/${key}` : key;
//             if (typeof structure[key] === 'string') {
//                 // It's a file
//                 return (
//                     <div 
//                         key={currentPath}
//                         style={{
//                             cursor: 'pointer',
//                             padding: '5px 10px',
//                             margin: '2px 0',
//                             backgroundColor: selectedComponent === structure[key] ? '#e6f3ff' : 'transparent',
//                             borderRadius: '3px',
//                             fontSize: '14px'
//                         }}
//                         onClick={() => setSelectedComponent(structure[key])}
//                     >
//                         {key}
//                     </div>
//                 );
//             } else {
//                 // It's a directory
//                 return (
//                     <div key={currentPath} style={{ marginLeft: '10px' }}>
//                         <div style={{ 
//                             fontWeight: 'bold', 
//                             margin: '5px 0',
//                             cursor: 'pointer',
//                             padding: '5px'
//                         }}>
//                             {key}
//                         </div>
//                         <div style={{ marginLeft: '15px' }}>
//                             {renderStructure(structure[key], currentPath)}
//                         </div>
//                     </div>
//                 );
//             }
//         });
//     };

//     const structure = buildDirectoryStructure(components);
    
//     // Set the first component as selected when the component mounts
//     useEffect(() => {
//         if (components.length > 0 && !selectedComponent) {
//             setSelectedComponent(components[0]);
//         }
//     }, [components, selectedComponent]);

//     const [Component, setComponent] = useState(null);
    
//     // Dynamically import and render the selected component
//     useEffect(() => {
//         if (selectedComponent) {
//             import(`../${selectedComponent}`)
//                 .then(module => {
//                     // Get the default export or the first named export
//                     const ComponentToRender = module.default || Object.values(module)[0];
//                     setComponent(() => ComponentToRender);
//                 })
//                 .catch(error => {
//                     console.error('Error loading component:', error);
//                     setComponent(null);
//                 });
//         }
//     }, [selectedComponent]);

//     return (
//         <div style={{ display: 'flex', height: 'calc(100vh - 100px)' }}>
//             {/* Sidebar */}
//             <div style={{ 
//                 width: '300px', 
//                 borderRight: '1px solid #ccc',
//                 padding: '10px',
//                 overflow: 'auto',
//                 backgroundColor: '#fafafa'
//             }}>
//                 <h3 style={{ margin: '10px 0' }}>Components</h3>
//                 {renderStructure(structure)}
//             </div>
            
//             {/* Preview Area */}
//             <div style={{ 
//                 flex: 1, 
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 backgroundColor: '#f5f5f5'
//             }}>
//                 {selectedComponent && Component && (
//                     <div>
//                         <h3 style={{ marginBottom: '20px' }}>
//                             {selectedComponent.split('/').pop().replace('.js', '')}
//                         </h3>
//                         <div style={{ 
//                             padding: '20px', 
//                             border: '1px solid #ddd', 
//                             borderRadius: '5px',
//                             backgroundColor: 'white',
//                             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                         }}>
//                             <Component />
//                         </div>
//                     </div>
//                 )}
//                 {selectedComponent && !Component && (
//                     <div>Loading component...</div>
//                 )}
//             </div>
//         </div>
//     );
// }
