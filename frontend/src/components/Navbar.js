import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
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
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        Portfolio
                    </div>
                    {/* Links Section */}
                    <div style={{ display: 'flex', gap: '32px' }}>
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
                                        borderBottom: isActive ? '2px solid #' : '2px solid transparent',
                                        paddingBottom: '4px',
                                        display: 'inline-block'
                                    }}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;