import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const isActiveLink = (href) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname === href;
    };

    return (
        <nav style={{
            backgroundColor: '#36454F',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 15px rgba(0, 0, 0, 0.1)',
            borderBottom: '4px solid #4a5568',
            position: 'fixed',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '50'
        }}>
            <div style={{ color: 'white', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo/Name Section */}
                    <Link
                        to="/"
                        style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#F9AFBB'}
                        onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                        Portfolio
                    </Link>

                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            color: 'white',
                            fontSize: '28px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            transition: 'transform 0.3s ease'
                        }}
                        className="lg:hidden"
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    {/* Desktop Links (Hidden on Mobile) */}
                    <div className="hidden lg:flex" style={{ gap: '32px' }}>
                        {navLinks.map(link => {
                            const linkName = link.label.toLowerCase();
                            const isHovered = hoveredLink === linkName;
                            const isActive = isActiveLink(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onMouseEnter={() => setHoveredLink(linkName)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{
                                        fontSize: '20px',
                                        color: isActive ? '#6A6B1A' : (isHovered ? '#F9AFBB' : '#FFFFFF'),
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                        cursor: 'pointer',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        borderBottom: isActive ? '2px solid #6A6B1A' : '2px solid transparent',
                                        paddingBottom: '4px',
                                        display: 'inline-block'
                                    }}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        style={{
                            backgroundColor: '#36454F',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            marginTop: '16px',
                            borderTop: '2px solid #4a5568',
                            animation: 'slideDown 0.3s ease-out'
                        }}
                        className="lg:hidden"
                    >
                        {navLinks.map(link => {
                            const isActive = isActiveLink(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        fontSize: '18px',
                                        color: isActive ? '#6A6B1A' : '#FFFFFF',
                                        textDecoration: 'none',
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        transition: 'background-color 0.2s ease',
                                        display: 'block'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                                    onMouseLeave={(e) => !isActive && (e.target.style.backgroundColor = 'transparent')}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar;