import React from 'react'

const Navbar = () => {
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

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
                    {navLinks.map(link => (
                        <a 
                        key={link.href} 
                        href={link.href} 
                        style={{ fontSize: '20px', color: 'white', textDecoration: 'none' 
                        }}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;