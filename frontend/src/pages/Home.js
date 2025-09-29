import React from 'react'

const Home = () => {
    return (
        <div style={{
            paddingTop: '96px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1200px',
                width: '100%',
                padding: '0 40px',
                gap: '60px'
            }}>

                {/* Left Side - Text Content with Animation */}
                <div style={{
                    flex: '1',
                    textAlign: 'left',
                    animation: 'slideInLeft 1s ease-out'
                }}>
                    {/* Main Heading */}
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        color: '#FAFAFA',
                        marginBottom: '1rem',
                        lineHeight: '1.1'
                    }}>
                        Hi, I'm Pritam
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#B9AFBB',
                        marginBottom: '2rem',
                        fontWeight: 'light'
                    }}>
                        Full Stack Developer & Creative Problem Solver
                    </p>

                    {/* Description */}
                    <p style={{
                        fontSize: '1.1rem',
                        fontWeight: 'light',
                        color: '#B9AFBB',
                        marginBottom: '3rem',
                        lineHeight: '1.6',
                        maxWidth: '500px'
                    }}>
                        I create beautiful, functional web applications using modern technologies.
                        Welcome to my digital portfolio where creativity meets code.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            backgroundColor: '#5D27BE',
                            color: '#FAFAFA',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            View My Work
                        </button>

                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#5D27BE',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            border: '2px solid #5D27BE',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                        }}>
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Side - Profile Image with Animation */}
                <div style={{
                    flex: '0 0 300px',
                    display: 'flex',
                    justifyContent: 'center',
                    animation: 'slideInRight 1s ease-out 0.3s both'
                }}>
                    <div style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #5D27BE, #8B6953)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px'
                    }}>
                        <img
                            src="/images/profile-photo.png"
                            alt="Pritam"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid #FAFAFA'
                            }}
                        />
                    </div>
                </div>

            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Home