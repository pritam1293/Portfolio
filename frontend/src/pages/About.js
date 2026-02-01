import React from 'react'

const About = () => {
  const journeyParagraphs = [
    "I'm currently in my final year of B.Tech at NIT Rourkela, where my passion for technology and problem-solving has led me deep into the world of software development. What started as curiosity about how things work has evolved into a genuine love for creating digital solutions.",

    "My journey spans from foundational programming languages like C++ and Java to modern web technologies like React and Spring Boot. I believe in building robust, user-friendly applications that solve real-world problems.",

    "When I'm not coding, you'll find me on the cricket field, following football matches, or getting excited about tennis during Wimbledon season. I'm also a huge fan of fantasy and sci-fi movies - there's something magical about stories that push the boundaries of imagination!"
  ];

  return (
    <div className="min-h-screen bg-[#0f1116] relative overflow-hidden" style={{
      paddingTop: '96px',
      padding: '96px 40px 40px 40px'
    }}>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }} className="relative z-10">

        {/* About Me Section */}
        <div
          id="hero"
          style={{ marginBottom: '80px' }}
        >
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              About Me
            </h1>
            <div className="w-40 h-2 bg-white/20 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that make a difference.
              <br />
              <span className="text-white">Here's my story and what drives me every day.</span>
            </p>
          </div>

          {/* Main Content Section */}
          <div
            id="story"
            className="flex flex-col lg:flex-row gap-12 items-start"
          >

            {/* Journey Text Content */}
            <div className="flex-1 space-y-6">
              <div className="relative">

                <div className="pl-8">
                  <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="text-white drop-shadow-lg">
                      My Journey
                    </span>
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </h2>

                  <div className="space-y-6">
                    {journeyParagraphs.map((para, index) => {
                      return (
                        <div key={index} className="group">
                          <p className="text-lg text-white leading-relaxed relative pl-6">
                            {/* Bullet point with glow */}
                            <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-white rounded-full"></span>
                            {para}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Call to action with glassmorphism */}
                  <div className="mt-8 p-6 bg-[#1e293b]/60 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white italic flex items-center gap-3">
                      <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-lg font-medium">
                        "Always learning, always building, always pushing boundaries."
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div
          id="skills"
          style={{ marginBottom: '80px' }}
        >
          {/* Section Title */}
          <h2 className="text-6xl font-bold text-center mb-16 text-white drop-shadow-2xl">
            Skills and Fundamentals
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Languages Card with 3D Effects */}
            <div className="group bg-[#1e293b]/70 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white/20 group-hover:bg-white/30 p-2.5 rounded-xl text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Languages</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">C++</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">C</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Java</span>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="group bg-[#0f172a]/70 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white/20 group-hover:bg-white/30 p-2.5 rounded-xl text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Java</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">SpringBoot</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">JavaScript</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Node.js</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Express</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">MongoDB</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">MySQL</span>
                </div>
              </div>
            </div>

            {/* Development Tools Card */}
            <div className="group bg-[#1e293b]/70 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white/20 group-hover:bg-white/30 p-2.5 rounded-xl text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Development Tools</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Git</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">GitHub</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Postman</span>
                </div>
              </div>
            </div>

            {/* Fundamentals Card */}
            <div className="group bg-[#0f172a]/70 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white/20 group-hover:bg-white/30 p-2.5 rounded-xl text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Fundamentals</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Object Oriented Programming</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Database Management System</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-[#0f172a] bg-white hover:bg-white/90 cursor-default shadow-lg hover:shadow-xl">Operating System</span>
                </div>
              </div>
            </div>

          </div>

          {/* Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-[#1e293b]/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                <span className="text-white text-sm font-medium">Constantly learning & exploring new technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div
          id="cp"
          style={{ marginBottom: '60px' }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-2xl">
            Competitive Programming
          </h2>

          {/* Competitive Programming Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">

            {/* LeetCode Card */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-purple-500/20 relative overflow-hidden h-[370px] flex flex-col">
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-center h-[60px]">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/30">
                      <img src="/images/leetcode-logo.png" alt="LeetCode" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center mb-3 text-white h-[32px] flex items-center justify-center">LeetCode</h2>
                  <div className="space-y-1.5">
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Current Rank</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">Guardian</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Problems Solved</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">600+</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth={2} />
                              <circle cx="12" cy="12" r="6" strokeWidth={2} />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Max Rating</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">2236</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a href="https://leetcode.com/u/Pritam1293/" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-white/90 text-[#0f172a] font-semibold py-2 px-4 rounded-2xl hover:shadow-lg flex items-center justify-center gap-2 group h-[52px]">
                      <span>Visit Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Codeforces Card */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-blue-500/20 relative overflow-hidden h-[370px] flex flex-col">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-center h-[60px]">
                    <div className="bg-gradient-to-br from-red-500 to-cyan-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                      <div className="flex items-end justify-center gap-1">
                        <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
                        <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
                        <div className="w-2 h-3.5 bg-red-600 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center mb-3 text-white h-[32px] flex items-center justify-center">Codeforces</h2>
                  <div className="space-y-1.5">
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Current Rank</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">Specialist</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Problems Solved</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">400+</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth={2} />
                              <circle cx="12" cy="12" r="6" strokeWidth={2} />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Max Rating</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">1479</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a href="https://codeforces.com/profile/pritam1293" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-white/90 text-[#0f172a] font-semibold py-2 px-4 rounded-2xl hover:shadow-lg flex items-center justify-center gap-2 group h-[52px]">
                      <span>Visit Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CodeChef Card */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-yellow-500/20 relative overflow-hidden h-[370px] flex flex-col">
                <div className="absolute top-0 right-0 w-28 h-28 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-center h-[60px]">
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-2.5 rounded-xl shadow-lg shadow-yellow-500/30">
                      <img src="/images/codechef-logo.jpg" alt="CodeChef" className="w-8 h-8 object-contain rounded" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center mb-3 text-white h-[32px] flex items-center justify-center">CodeChef</h2>
                  <div className="space-y-1.5">
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Current Rank</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">⭐⭐⭐</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Problems Solved</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">150+</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth={2} />
                              <circle cx="12" cy="12" r="6" strokeWidth={2} />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Max Rating</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">1737</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a href="https://www.codechef.com/users/pritam1293" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-white/90 text-[#0f172a] font-semibold py-2 px-4 rounded-2xl hover:shadow-lg flex items-center justify-center gap-2 group h-[52px]">
                      <span>Visit Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* AtCoder Card */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-indigo-500/20 relative overflow-hidden h-[370px] flex flex-col">
                <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-center h-[60px]">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
                      <img src="/images/atcoder-logo.png" alt="AtCoder" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center mb-3 text-white h-[32px] flex items-center justify-center">AtCoder</h2>
                  <div className="space-y-1.5">
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Current Rank</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">6 Kyu</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Problems Solved</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">100+</span>
                      </div>
                    </div>
                    <div className="group bg-white rounded-xl p-2 hover:bg-white/90 h-[52px] flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 p-2 rounded-xl group-hover:bg-gray-300 flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth={2} />
                              <circle cx="12" cy="12" r="6" strokeWidth={2} />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                          </div>
                          <span className="text-[#0f172a] font-medium text-sm">Max Rating</span>
                        </div>
                        <span className="text-xl font-bold text-[#0f172a]">885</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a href="https://atcoder.jp/users/pritam1293" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-white/90 text-[#0f172a] font-semibold py-2 px-4 rounded-2xl hover:shadow-lg flex items-center justify-center gap-2 group h-[52px]">
                      <span>Visit Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* Content will go here */}
      </div>
    </div>
  )
}

export default About
