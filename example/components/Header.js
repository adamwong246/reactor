import React from 'react';

export function Header({ user, onLogin, onLogout, onCreateAccount }) {
    return (
        <header>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px 20px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}>
                <div>
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                                fill="#FFF"
                            />
                            <path
                                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                                fill="#555AB9"
                            />
                            <path
                                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                                fill="#91BAF8"
                            />
                        </g>
                    </svg>
                    <h1 style={{
                        display: 'inline-block',
                        verticalAlign: 'top',
                        margin: '6px 0 6px 10px',
                        fontSize: '20px',
                        fontWeight: 900,
                    }}>
                        Acme
                    </h1>
                </div>
                <div>
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '14px' }}>
                                Welcome, <b>{user.name}</b>!
                            </span>
                            <button 
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    padding: '10px 16px',
                                    border: 0,
                                    borderRadius: '3em',
                                    backgroundColor: '#1ea7fd',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                onClick={onLogout}
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button 
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    padding: '10px 16px',
                                    border: 0,
                                    borderRadius: '3em',
                                    backgroundColor: 'transparent',
                                    color: '#333',
                                    cursor: 'pointer',
                                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
                                }}
                                onClick={onLogin}
                            >
                                Log in
                            </button>
                            <button 
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    padding: '10px 16px',
                                    border: 0,
                                    borderRadius: '3em',
                                    backgroundColor: '#1ea7fd',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                onClick={onCreateAccount}
                            >
                                Sign up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
