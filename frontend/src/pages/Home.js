import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center px-4 md:px-8 pt-32 md:pt-28 pb-20 relative overflow-hidden"
    >

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Right Side - Profile Image (Order 1 on mobile, 2 on desktop) */}
          <div className={`flex-shrink-0 relative group transition-all duration-1000 transform order-1 lg:order-2 ${animateElements.image ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
            }`}>
            {/* Glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-xl opacity-15 animate-spin-slow"></div>

            {/* Main image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 rounded-full p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-slate-900 rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                    <img
                      src="/images/profile-photo.png"
                      alt="Pritam"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-cyan-500 to-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-2xl shadow-cyan-500/30 animate-float">
                🚀 Available
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-br from-teal-600 to-cyan-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-2xl shadow-teal-500/30 animate-float" style={{ animationDelay: '0.5s' }}>
                💻 Developer
              </div>
            </div>
          </div>

          {/* Left Side - Text Content (Order 2 on mobile, 1 on desktop) */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">

            {/* Greeting Badge */}
            <div className={`inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-4 transition-all duration-700 transform ${animateElements.greeting ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium">Available for work</span>
            </div>

            {/* Main Heading with Gradient */}
            <div className={`space-y-3 md:space-y-4 transition-all duration-700 transform ${animateElements.heading ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Pritam
                </span>
              </h1>

              {/* Animated typing effect subtitle */}
              <div className={`min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center lg:justify-start transition-all duration-700 delay-200 transform ${animateElements.subtitle ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
                  <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
                  <span className="text-gray-400"> & </span>
                  <span className="text-teal-400 font-semibold">Creative Problem Solver</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-700 transform ${animateElements.description ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
              I create beautiful, functional web applications using modern technologies.
              <br />
              <span className="text-gray-500">Welcome to my digital portfolio where creativity meets code.</span>
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start transition-all duration-700 transform ${animateElements.buttons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <button
                onClick={() => navigate('/projects')}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="group w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
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