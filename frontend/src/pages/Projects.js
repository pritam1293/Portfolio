import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      id: 'algoboard',
      title: 'AlgoBoard',
      subtitle: 'Competitive Programming Analytics Platform',
      date: 'August 2025',
      githubLink: 'https://github.com/pritam1293/AlgoBoard/',
      techStack: ['Spring Boot', 'Java', 'MongoDB', 'REST API', 'JWT', 'React.js', 'Tailwind CSS'],
      highlights: [
        'Built a full-stack platform aggregating real-time competitive programming statistics from Codeforces, CodeChef, LeetCode, and AtCoder into a unified analytics dashboard.',
        'Implemented secure authentication and account workflows using JWT, OTP-based password recovery, and automated email verification to ensure strong data protection.',
        'Designed and optimized REST APIs and an interactive Chart.js-based dashboard to deliver fast data processing, clear rating progression insights, and smooth user experience.'
      ],
      gradient: 'from-purple-900/40 to-purple-800/40',
      borderColor: 'border-purple-500/30',
      accentColor: 'purple',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'parking-lot',
      title: 'Parking Lot Management',
      subtitle: 'Smart Parking System',
      date: 'February 2025',
      githubLink: 'https://github.com/pritam1293/ParkingLot',
      techStack: ['Spring Boot', 'Java', 'MongoDB', 'REST API', 'JWT', 'React.js', 'Tailwind CSS'],
      highlights: [
        'Developed a full-stack smart parking management system enabling real-time vehicle tracking and efficient management across multiple parking zones.',
        'Implemented an automated ticketing and billing system with unique ticket generation and dynamic pricing based on parking duration and zone availability, minimizing manual effort and errors.',
        'Built a secure, role-based Admin Dashboard with advanced search, analytics, and real-time monitoring of vehicles, gates, and entry–exit logs to optimize parking operations.'
      ],
      gradient: 'from-cyan-900/40 to-cyan-800/40',
      borderColor: 'border-cyan-500/30',
      accentColor: 'cyan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1116] relative overflow-hidden" style={{
      paddingTop: '96px',
      padding: '96px 40px 40px 40px'
    }}>

      <div style={{
        maxWidth: '1600px',
        margin: '0 auto'
      }} className="relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 text-white">
            My Projects
          </h1>
          <div className="w-40 h-2 bg-white/20 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Full-stack applications showcasing my expertise in modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1e293b]/70 backdrop-blur-xl rounded-3xl p-5 border border-white/20 hover:border-white/40 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

              {/* Project Header */}
              <div className="mb-4 relative z-10">
                {/* Icon - Centered on mobile, left on desktop */}
                <div className="flex justify-center md:justify-start mb-3">
                  <div className="bg-white/20 hover:bg-white/30 p-3 rounded-2xl text-white">
                    {project.icon}
                  </div>
                </div>

                {/* Title/Date and GitHub Button - Flex container */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  {/* Title and Subtitle - Left side on desktop */}
                  <div className="text-center md:text-left relative z-10 flex-1">
                    <h2 className="text-3xl font-bold text-white mb-1.5">
                      {project.title}
                    </h2>
                    <p className="text-base text-white mb-1.5">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* GitHub Link - Right side on desktop */}
                  <div className="flex justify-center md:justify-end relative z-10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:w-auto bg-white hover:bg-white/90 text-[#0f172a] font-bold py-2 px-5 rounded-xl hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>View on GitHub</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4 relative z-10">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full text-sm font-medium text-white bg-[#1e293b]/80 border border-white/30 hover:bg-[#1e293b] hover:border-white/60 cursor-default shadow-lg hover:shadow-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="relative z-10">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2.5">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-lg"></div>
                        <p className="text-white leading-relaxed">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="bg-[#1e293b]/60 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20 hover:border-white/40 hover:shadow-2xl max-w-3xl mx-auto group relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <p className="text-white leading-relaxed text-lg mb-4">
                These are my two flagship projects that showcase full-stack development at scale.
                <br />
                I've built several other interesting projects ranging from smaller utilities to experimental applications.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <span className="text-white">Explore my all projects on</span>
                <a
                  href="https://github.com/pritam1293?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold group/link"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="border-b-2 border-white/50 group-hover/link:border-white/80">
                    GitHub Repositories
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
