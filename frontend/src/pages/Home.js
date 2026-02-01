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
      className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#1e3a3a] to-[#2d9688] flex items-center justify-center px-4 md:px-8 pt-32 md:pt-28 pb-20 relative overflow-hidden"
    >

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#4ade80]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#22c55e]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.08),transparent_70%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Right Side - Profile Image with 3D Effects */}
          <div className={`flex-shrink-0 relative group transition-all duration-1000 transform order-1 lg:order-2 perspective-1000 ${animateElements.image ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
            }`}>
            {/* Enhanced Glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-[#22c55e] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-spin-slow"></div>

            {/* Main image container with 3D transform */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group-hover:rotate-y-6 transition-transform duration-700">
              {/* Gradient border with glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80] via-emerald-500 to-[#22c55e] rounded-full p-1 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-emerald-500/50">
                <div className="w-full h-full bg-[#0f172a] rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[#4ade80]/40 transition-all duration-500 shadow-inner">
                    <img
                      src="/images/profile-photo.png"
                      alt="Pritam"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges with enhanced styling */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-[#4ade80] to-[#22c55e] text-[#0f172a] px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-2xl shadow-emerald-500/60 animate-float border-2 border-white/20">
                🚀 Available
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-br from-emerald-600 to-teal-600 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-2xl shadow-teal-500/60 animate-float border-2 border-white/20" style={{ animationDelay: '0.5s' }}>
                💻 Developer
              </div>
            </div>
          </div>

          {/* Left Side - Text Content (Order 2 on mobile, 1 on desktop) */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">

            {/* Greeting Badge - Glassmorphism */}
            <div className={`inline-flex items-center gap-2 bg-[#1e293b]/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#4ade80]/40 mb-4 transition-all duration-700 transform shadow-lg shadow-emerald-500/20 ${animateElements.greeting ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full animate-pulse shadow-lg shadow-emerald-400/80"></div>
              <span className="text-[#4ade80] text-sm font-semibold">Available for work</span>
            </div>

            {/* Main Heading with Enhanced Gradient */}
            <div className={`space-y-3 md:space-y-4 transition-all duration-700 transform ${animateElements.heading ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="text-white drop-shadow-2xl">Hi, I'm </span>
                <span className="bg-gradient-to-r from-[#4ade80] via-emerald-400 to-[#22c55e] bg-clip-text text-transparent drop-shadow-2xl animate-gradient bg-[length:200%_auto]">
                  Pritam
                </span>
              </h1>

              {/* Subtitle */}
              <div className={`min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center lg:justify-start transition-all duration-700 delay-200 transform ${animateElements.subtitle ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
                  <span className="text-[#4ade80] font-bold">Full Stack Developer</span>
                  <span className="text-gray-400"> & </span>
                  <span className="text-[#22c55e] font-bold">Creative Problem Solver</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-700 transform ${animateElements.description ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
              I create beautiful, functional web applications using modern technologies.
              <br />
              <span className="text-gray-400">Welcome to my digital portfolio where creativity meets code.</span>
            </p>

            {/* CTA Buttons with 3D Effects */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start transition-all duration-700 transform ${animateElements.buttons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <button
                onClick={() => navigate('/projects')}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-[#0f172a] font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/60 cursor-pointer border-2 border-white/20 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="group w-full sm:w-auto px-8 py-4 bg-[#1e293b]/80 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-[#4ade80]/60 hover:bg-[#4ade80]/20 transition-all duration-500 hover:scale-110 hover:border-[#4ade80] hover:shadow-xl hover:shadow-emerald-500/40 cursor-pointer hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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