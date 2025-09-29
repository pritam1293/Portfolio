import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault(); // Stops the default link behavior
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar height

        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const elementTop = element.offsetTop;
                const elementHeight = element.offsetHeight;

                if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        // Add scroll event listener when component loads
        window.addEventListener('scroll', handleScroll);
        
        // Call once to set initial active section
        handleScroll();
        
        // Cleanup: remove event listener when component is removed
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty array means this runs once when component loads

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
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {navLinks.map(link => {
                            const linkName = link.label.toLowerCase();
                            const isActive = activeSection === linkName;
                            const isHovered = hoveredLink === linkName;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, linkName)}
                                    onMouseEnter={() => setHoveredLink(linkName)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    style={{
                                        fontSize: '20px',
                                        color: isActive ? '#f59e0b' : (isHovered ? '#cbd5e0' : 'white'),
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        cursor: 'pointer',
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    }}>
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;