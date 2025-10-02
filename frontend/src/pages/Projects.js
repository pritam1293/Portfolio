import React, { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [headerAnimations, setHeaderAnimations] = useState({
    title: false,
    underline: false,
    description: false
  });

  const headerRef = useRef(null);

  const projectsData = [
    {
      id: 'algoboard',
      title: 'AlgoBoard',
      subtitle: 'Competitive Programming Analytics Platform',
      date: 'August 2025',
      githubLink: 'https://github.com/pritam1293/AlgoBoard/',
      techStack: ['Spring Boot', 'Java', 'MongoDB', 'REST API', 'JWT', 'React.js', 'Tailwind CSS'],
      highlights: [
        'Developed a full-stack platform (React.js + Spring Boot) aggregating real-time stats from 4 coding platforms (Codeforces, Codechef, Leetcode, Atcoder), scalable to 1000+ users.',
        'Implemented secure JWT authentication, OTP-based password resets, and email verification, preventing 7 potential security vulnerabilities and protecting data for over 1000+ users on the platform.',
        'Designed responsive dashboards with more than 5 Chart.js visualizations for rating progression and analytics, improving insights by 60%.',
        'Optimized more than 15 REST APIs with robust validation and error handling, achieving 75% faster response times.'
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
      title: 'Parking Lot Management Application',
      subtitle: 'Smart Parking System',
      date: 'February 2025',
      githubLink: 'https://github.com/pritam1293/ParkingLot',
      techStack: ['Spring Boot', 'Java', 'MongoDB', 'REST API', 'HTML5', 'CSS', 'JavaScript'],
      highlights: [
        'Engineered a full-stack smart parking system using Spring Boot and MongoDB, managing 200+ vehicles simultaneously with seamless REST API integration.',
        'Implemented real-time availability, automated ticketing with unique IDs, and dynamic billing, reducing manual errors by 90%.',
        'Engineered a secure Admin Dashboard featuring advanced search and filter capabilities, enabling staff to identify the three biggest causes of parking system slowdowns using dashboard data.',
        'Developed a role-based Admin Dashboard with Spring Boot and MongoDB, enabling secure access to parking logs and improving gate status monitoring for 200+ vehicles in real-time.'
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

  const projectRefs = useRef([]);

  // Header animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setHeaderAnimations(prev => ({ ...prev, title: true })), 100);
            setTimeout(() => setHeaderAnimations(prev => ({ ...prev, underline: true })), 400);
            setTimeout(() => setHeaderAnimations(prev => ({ ...prev, description: true })), 700);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    const currentHeaderRef = headerRef.current;

    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  // Projects animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRefs = projectRefs.current;

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
        <div ref={headerRef} className="text-center mb-20">
          <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent transition-all duration-700 transform ${headerAnimations.title
            ? 'translate-y-0 opacity-100'
            : '-translate-y-8 opacity-0'
            }`}>
            My Projects
          </h1>
          <div className={`w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto mb-8 shadow-lg shadow-purple-500/50 transition-all duration-700 transform ${headerAnimations.underline
            ? 'scale-x-100 opacity-100'
            : 'scale-x-0 opacity-0'
            }`}></div>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${headerAnimations.description
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
            }`}>
            Full-stack applications showcasing my expertise in modern web technologies
            <br />
            <span className="text-slate-400">Built with passion and attention to detail</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-project-id={project.id}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-3xl p-8 border ${project.borderColor} shadow-2xl transition-all duration-700 transform ${visibleProjects.has(project.id)
                ? 'translate-y-0 translate-x-0 opacity-100 scale-100'
                : `${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'} translate-y-8 opacity-0 scale-95`
                }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div className={`bg-${project.accentColor}-500/20 p-4 rounded-2xl text-${project.accentColor}-400`}>
                    {project.icon}
                  </div>

                  {/* Title and Date */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className={`text-lg text-${project.accentColor}-300 mb-2`}>
                      {project.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-${project.accentColor}-500 to-${project.accentColor}-600 hover:from-${project.accentColor}-600 hover:to-${project.accentColor}-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${project.accentColor}-500/30 flex items-center gap-2 group`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 transition-all duration-200 cursor-default shadow-lg hover:shadow-xl hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-${project.accentColor}-400 to-${project.accentColor}-500 flex-shrink-0 group-hover:scale-150 transition-transform`}></div>
                      <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className={`mt-16 text-center transition-all duration-1000 transform ${visibleProjects.size > 0
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
          }`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl px-8 py-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 max-w-3xl mx-auto">
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              These are my two flagship projects that showcase full-stack development at scale.
              <br />
              I've built several other interesting projects ranging from smaller utilities to experimental applications.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-400">Explore my all projects on</span>
              <a
                href="https://github.com/pritam1293?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="border-b-2 border-purple-400/50 group-hover:border-purple-300 transition-colors">
                  GitHub Repositories
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects