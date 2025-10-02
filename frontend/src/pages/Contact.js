import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [animations, setAnimations] = useState({
    header: false,
    subtitle: false,
    contactCards: false,
    socialCards: false
  });

  const sectionRefs = useRef({
    header: null,
    contact: null,
    social: null
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimations(prev => ({ ...prev, header: true })), 100);
          setTimeout(() => setAnimations(prev => ({ ...prev, subtitle: true })), 400);
        }
      });
    }, observerOptions);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimations(prev => ({ ...prev, contactCards: true }));
        }
      });
    }, observerOptions);

    const socialObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimations(prev => ({ ...prev, socialCards: true }));
        }
      });
    }, observerOptions);

    const currentHeaderRef = sectionRefs.current.header;
    const currentContactRef = sectionRefs.current.contact;
    const currentSocialRef = sectionRefs.current.social;

    if (currentHeaderRef) headerObserver.observe(currentHeaderRef);
    if (currentContactRef) contactObserver.observe(currentContactRef);
    if (currentSocialRef) socialObserver.observe(currentSocialRef);

    return () => {
      if (currentHeaderRef) headerObserver.unobserve(currentHeaderRef);
      if (currentContactRef) contactObserver.unobserve(currentContactRef);
      if (currentSocialRef) socialObserver.unobserve(currentSocialRef);
    };
  }, []);

  const contactInfo = [
    {
      id: 'email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'beherapritam2003@gmail.com',
      link: 'mailto:beherapritam2003@gmail.com',
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/30',
      hoverColor: 'hover:border-red-500/60'
    },
    {
      id: 'phone',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91-8658535505',
      link: 'tel:+918658535505',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-500/60'
    },
    {
      id: 'linkedin',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: 'LinkedIn',
      value: 'pritam-behera',
      link: 'https://www.linkedin.com/in/pritam-behera/',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-500/60'
    }
  ];

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      username: '@pritam1293',
      link: 'https://github.com/pritam1293',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      gradient: 'from-gray-700/40 to-gray-800/40',
      borderColor: 'border-gray-500/30',
      hoverGradient: 'hover:from-gray-600/50 hover:to-gray-700/50'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@pritam__085',
      link: 'https://www.instagram.com/pritam__085',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      gradient: 'from-pink-500/40 to-purple-500/40',
      borderColor: 'border-pink-500/30',
      hoverGradient: 'hover:from-pink-500/50 hover:to-purple-500/50'
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      username: '@Halandowski',
      link: 'https://twitter.com/Halandowski',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      gradient: 'from-slate-700/40 to-slate-800/40',
      borderColor: 'border-slate-500/30',
      hoverGradient: 'hover:from-slate-600/50 hover:to-slate-700/50'
    }
  ];

  return (
    <div style={{
      paddingTop: '96px',
      minHeight: '100vh',
      padding: '96px 40px 40px 40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* Header Section */}
        <div ref={el => sectionRefs.current.header = el} className="text-center mb-16">
          <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 transform ${animations.header
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
            }`}>
            Get In Touch
          </h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed transition-all duration-700 transform ${animations.subtitle
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
            }`}>
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div ref={el => sectionRefs.current.contact = el} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.id === 'linkedin' ? '_blank' : undefined}
                rel={contact.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                className={`bg-gradient-to-br ${contact.gradient} backdrop-blur-xl rounded-2xl p-6 border ${contact.borderColor} ${contact.hoverColor} shadow-xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${animations.contactCards
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-white/10 p-4 rounded-xl text-white">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-slate-300 break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div ref={el => sectionRefs.current.social = el} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${social.gradient} backdrop-blur-xl rounded-2xl p-8 border ${social.borderColor} shadow-xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${social.hoverGradient} group ${animations.socialCards
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {social.name}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {social.username}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-white transition-colors">
                    <span className="text-sm">Visit Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl px-8 py-6 border border-blue-500/20 max-w-2xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              <br />
              <span className="text-blue-400 font-semibold">Let's build something amazing together!</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact