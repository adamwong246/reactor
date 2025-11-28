import React from 'react';

export function Button({ primary, size, children, ...props }) {
    const baseStyle = {
        fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
        fontWeight: 700,
        border: 0,
        borderRadius: '3em',
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: 1,
    };
    
    const mode = primary ? {
        color: 'white',
        backgroundColor: '#1ea7fd',
    } : {
        color: '#333',
        backgroundColor: 'transparent',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    };
    
    const sizes = {
        small: {
            fontSize: '12px',
            padding: '10px 16px',
        },
        medium: {
            fontSize: '14px',
            padding: '11px 20px',
        },
        large: {
            fontSize: '16px',
            padding: '12px 24px',
        },
    };
    
    const sizeStyle = sizes[size] || sizes.medium;
    
    return (
        <button
            style={{
                ...baseStyle,
                ...mode,
                ...sizeStyle,
            }}
            {...props}
        >
            {children}
        </button>
    );
}
