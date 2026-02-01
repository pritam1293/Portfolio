import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#0f1116] flex items-center justify-center px-4 md:px-8 pt-32 md:pt-28 pb-20 relative overflow-hidden"
    >

      {/* Main Content Container */}
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Right Side - Profile Image with 3D Effects */}
          <div className="flex-shrink-0 relative group order-1 lg:order-2">

            {/* Main image container with 3D transform */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient border with glow */}
              <div className="absolute inset-0 bg-white/20 rounded-full p-1">
                <div className="w-full h-full bg-[#252837] rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                    <img
                      src="/images/profile-photo.png"
                      alt="Pritam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Text Content (Order 2 on mobile, 1 on desktop) */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">

            {/* Greeting Badge - Glassmorphism */}
            <div className="inline-flex items-center gap-2 bg-[#252837]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 mb-4">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              <span className="text-white text-sm font-semibold">Available for work</span>
            </div>

            {/* Main Heading with Enhanced Gradient */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="text-white drop-shadow-2xl">Hi, I'm </span>
                <span className="text-white drop-shadow-2xl">
                  Pritam
                </span>
              </h1>

              {/* Subtitle */}
              <div className="min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center lg:justify-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-medium">
                  <span className="text-white font-bold">Full Stack Developer</span>
                  <span className="text-white"> & </span>
                  <span className="text-white font-bold">Creative Problem Solver</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I create beautiful, functional web applications using modern technologies.
              <br />
              <span className="text-white">Welcome to my digital portfolio where creativity meets code.</span>
            </p>

            {/* CTA Buttons with 3D Effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl border-2 border-white/10 cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-[#252837]/80 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/60 cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}