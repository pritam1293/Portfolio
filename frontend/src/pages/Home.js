import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
    const [animateElements, setAnimateElements] = useState({
        greeting: false,
        heading: false,
        subtitle: false,
        description: false,
        buttons: false,
        social: false,
        image: false
    });

    const homeRef = useRef();

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger staggered animations
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, greeting: true })), 200);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, heading: true })), 400);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, subtitle: true })), 600);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, description: true })), 800);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, buttons: true })), 1000);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, social: true })), 1200);
                        setTimeout(() => setAnimateElements(prev => ({ ...prev, image: true })), 600);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentRef = homeRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={homeRef}
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-8 py-20 relative overflow-hidden"
        >

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Side - Text Content */}
                    <div className="flex-1 text-left space-y-8">

                        {/* Greeting Badge */}
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-4 transition-all duration-700 transform ${animateElements.greeting ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-purple-300 text-sm font-medium">Available for work</span>
                        </div>

                        {/* Main Heading with Gradient */}
                        <div className={`space-y-4 transition-all duration-700 transform ${animateElements.heading ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <h1 className="text-7xl font-bold leading-tight">
                                <span className="text-white">Hi, I'm </span>
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                                    Pritam
                                </span>
                            </h1>

                            {/* Animated typing effect subtitle */}
                            <div className={`h-12 flex items-center transition-all duration-700 delay-200 transform ${animateElements.subtitle ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}>
                                <h2 className="text-2xl text-slate-300 font-light">
                                    <span className="text-purple-400 font-semibold">Full Stack Developer</span>
                                    <span className="text-slate-400"> & </span>
                                    <span className="text-pink-400 font-semibold">Creative Problem Solver</span>
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className={`text-xl text-slate-400 leading-relaxed max-w-2xl transition-all duration-700 transform ${animateElements.description ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            I create beautiful, functional web applications using modern technologies.
                            <br />
                            <span className="text-500">Welcome to my digital portfolio where creativity meets code.</span>
                        </p>

                        {/* Stats Row
            <div className="flex gap-8 py-4">
              <div className="text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">9+</div>
                <div className="text-slate-400 text-sm mt-1">Technologies</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div className="text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">500+</div>
                <div className="text-slate-400 text-sm mt-1">Problems Solved</div>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div className="text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">10+</div>
                <div className="text-slate-400 text-sm mt-1">Projects Built</div>
              </div>
            </div> */}

                        {/* CTA Buttons */}
                        <div className={`flex gap-4 flex-wrap pt-4 transition-all duration-700 transform ${animateElements.buttons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                                <span className="relative z-10 flex items-center gap-2">
                                    View My Work
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>

                            <button className="group px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30">
                                <span className="flex items-center gap-2">
                                    Contact Me
                                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className={`flex gap-4 pt-8 transition-all duration-700 transform ${animateElements.social ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}>
                            <a href="https://github.com/pritam1293" className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/pritam-behera" className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://x.com/Halandowski" className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Profile Image with 3D Effect */}
                    <div className={`flex-shrink-0 relative group transition-all duration-1000 transform ${animateElements.image ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
                        }`}>
                        {/* Glowing rings */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-20 animate-spin-slow"></div>

                        {/* Main image container */}
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            {/* Gradient border */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-1 group-hover:scale-105 transition-transform duration-500">
                                <div className="w-full h-full bg-slate-900 rounded-full p-2">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500">
                                        <img
                                            src="/images/profile-photo.png"
                                            alt="Pritam"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl shadow-purple-500/50 animate-float animate-glow">
                                🚀 Available
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-orange-600 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl shadow-orange-500/50 animate-float" style={{ animationDelay: '0.5s' }}>
                                💻 Developer
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.3); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        /* Staggered fade in animations */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
}