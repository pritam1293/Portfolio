import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Consolidated animation state for all sections
  const [animations, setAnimations] = useState({
    journey: {
      title: false,
      para1: false,
      para2: false,
      para3: false,
      quote: false
    },
    profile: {
      header: false,
      stat1: false,
      stat2: false,
      stat3: false,
      stat4: false
    },
    skills: {
      skill1: false,
      skill2: false,
      skill3: false,
      skill4: false
    },
    cp: {
      cp1: false,
      cp2: false,
      cp3: false,
      cp4: false
    }
  });

  const journeyParagraphs = [
    "I'm currently in my final year of B.Tech at NIT Rourkela, where my passion for technology and problem-solving has led me deep into the world of software development. What started as curiosity about how things work has evolved into a genuine love for creating digital solutions.",

    "My journey spans from foundational programming languages like C++ and Java to modern web technologies like React and Spring Boot. I believe in building robust, user-friendly applications that solve real-world problems.",

    "When I'm not coding, you'll find me on the cricket field, following football matches, or getting excited about tennis during Wimbledon season. I'm also a huge fan of fantasy and sci-fi movies - there's something magical about stories that push the boundaries of imagination!"
  ];

  // Add this to your data constants at the top
  const profileStats = [
    {
      id: 'education',
      number: 'Final Year',
      description: 'B.Tech at NIT Rourkela',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'technologies',
      number: '9+',
      description: 'Technologies Mastered',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'sports',
      number: 'Cricket, Football',
      description: 'Favorite Sports',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'movies',
      number: '∞',
      description: 'Sci-Fi Movies Watched',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const skillsData = [
    {
      id: 'languages',
      title: 'Languages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['C++', 'C', 'Java', 'JavaScript', 'Python'],
      gradient: 'from-purple-900/40 to-purple-800/40',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400/50',
      hoverShadow: 'hover:shadow-purple-500/20',
      iconBg: 'bg-purple-500/20',
      iconHoverBg: 'group-hover:bg-purple-500/30',
      iconColor: 'text-purple-400',
      tagGradient: 'from-purple-600 to-purple-700',
      tagHover: 'hover:from-purple-500 hover:to-purple-600'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
      gradient: 'from-amber-900/40 to-amber-800/40',
      borderColor: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400/50',
      hoverShadow: 'hover:shadow-amber-500/20',
      iconBg: 'bg-amber-500/20',
      iconHoverBg: 'group-hover:bg-amber-500/30',
      iconColor: 'text-amber-400',
      tagGradient: 'from-amber-600 to-amber-700',
      tagHover: 'hover:from-amber-500 hover:to-amber-600'
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Java', 'SpringBoot', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'MySQL'],
      gradient: 'from-lime-900/40 to-lime-800/40',
      borderColor: 'border-lime-500/30',
      hoverBorder: 'hover:border-lime-400/50',
      hoverShadow: 'hover:shadow-lime-500/20',
      iconBg: 'bg-lime-500/20',
      iconHoverBg: 'group-hover:bg-lime-500/30',
      iconColor: 'text-lime-400',
      tagGradient: 'from-slate-700 to-slate-800',
      tagHover: 'hover:from-slate-600 hover:to-slate-700'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'Postman'],
      gradient: 'from-slate-700/40 to-slate-800/40',
      borderColor: 'border-slate-500/30',
      hoverBorder: 'hover:border-slate-400/50',
      hoverShadow: 'hover:shadow-slate-500/20',
      iconBg: 'bg-slate-500/20',
      iconHoverBg: 'group-hover:bg-slate-500/30',
      iconColor: 'text-slate-400',
      tagGradient: 'from-indigo-700 to-indigo-800',
      tagHover: 'hover:from-indigo-600 hover:to-indigo-700'
    }
  ];

  // Competitive Programming Platforms Data
  const competitiveProgrammingPlatforms = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      borderColor: 'border-purple-500/20',
      decorativeColors: {
        primary: 'bg-purple-500/10',
        secondary: 'bg-pink-500/10'
      },
      logoGradient: 'from-orange-500 to-orange-600',
      logoShadow: 'shadow-orange-500/30',
      titleGradient: 'from-orange-400 via-pink-400 to-purple-400',
      buttonGradient: 'from-orange-500 to-orange-600',
      buttonHover: 'hover:from-orange-600 hover:to-orange-700',
      buttonShadow: 'hover:shadow-orange-500/30',
      profileUrl: 'https://leetcode.com/u/Pritam1293/',
      logo: (
        <img src="/images/leetcode-logo.png" alt="LeetCode" className="w-8 h-8 object-contain" />
      ),
      stats: [
        {
          label: 'Current Rank',
          value: 'Guardian',
          bgGradient: 'from-purple-900/40 to-purple-800/40',
          borderColor: 'border-purple-500/30',
          hoverBorder: 'hover:border-purple-400/50',
          hoverShadow: 'hover:shadow-purple-500/20',
          iconBg: 'bg-purple-500/20',
          iconHoverBg: 'group-hover:bg-purple-500/30',
          valueGradient: 'from-purple-400 to-pink-400',
          icon: (
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        },
        {
          label: 'Problems Solved',
          value: '500+',
          bgGradient: 'from-emerald-900/40 to-emerald-800/40',
          borderColor: 'border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/50',
          hoverShadow: 'hover:shadow-emerald-500/20',
          iconBg: 'bg-emerald-500/20',
          iconHoverBg: 'group-hover:bg-emerald-500/30',
          valueGradient: 'from-emerald-400 to-teal-400',
          icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Max Rating',
          value: '2177',
          bgGradient: 'from-orange-900/40 to-orange-800/40',
          borderColor: 'border-orange-500/30',
          hoverBorder: 'hover:border-orange-400/50',
          hoverShadow: 'hover:shadow-orange-500/20',
          iconBg: 'bg-orange-500/20',
          iconHoverBg: 'group-hover:bg-orange-500/30',
          valueGradient: 'from-orange-400 to-amber-400',
          icon: (
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <circle cx="12" cy="12" r="6" strokeWidth={2} />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'codeforces',
      name: 'Codeforces',
      borderColor: 'border-blue-500/20',
      decorativeColors: {
        primary: 'bg-blue-500/10',
        secondary: 'bg-cyan-500/10'
      },
      logoGradient: 'from-red-500 to-cyan-600',
      logoShadow: 'shadow-blue-500/30',
      titleGradient: 'from-blue-400 via-cyan-400 to-blue-400',
      buttonGradient: 'from-blue-500 to-cyan-600',
      buttonHover: 'hover:from-blue-600 hover:to-cyan-700',
      buttonShadow: 'hover:shadow-blue-500/30',
      profileUrl: 'https://codeforces.com/profile/pritam1293',
      logo: (
        <div className="flex items-end justify-center gap-1">
          <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
          <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
          <div className="w-2 h-3.5 bg-red-600 rounded-sm"></div>
        </div>
      ),
      stats: [
        {
          label: 'Current Rank',
          value: 'Specialist',
          bgGradient: 'from-blue-900/40 to-blue-800/40',
          borderColor: 'border-blue-500/30',
          hoverBorder: 'hover:border-blue-400/50',
          hoverShadow: 'hover:shadow-blue-500/20',
          iconBg: 'bg-blue-500/20',
          iconHoverBg: 'group-hover:bg-blue-500/30',
          valueGradient: 'from-blue-400 to-cyan-400',
          icon: (
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        },
        {
          label: 'Problems Solved',
          value: '400+',
          bgGradient: 'from-emerald-900/40 to-emerald-800/40',
          borderColor: 'border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/50',
          hoverShadow: 'hover:shadow-emerald-500/20',
          iconBg: 'bg-emerald-500/20',
          iconHoverBg: 'group-hover:bg-emerald-500/30',
          valueGradient: 'from-emerald-400 to-teal-400',
          icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Max Rating',
          value: '1479',
          bgGradient: 'from-cyan-900/40 to-cyan-800/40',
          borderColor: 'border-cyan-500/30',
          hoverBorder: 'hover:border-cyan-400/50',
          hoverShadow: 'hover:shadow-cyan-500/20',
          iconBg: 'bg-cyan-500/20',
          iconHoverBg: 'group-hover:bg-cyan-500/30',
          valueGradient: 'from-cyan-400 to-blue-400',
          icon: (
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <circle cx="12" cy="12" r="6" strokeWidth={2} />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'codechef',
      name: 'CodeChef',
      borderColor: 'border-yellow-500/20',
      decorativeColors: {
        primary: 'bg-yellow-500/10',
        secondary: 'bg-orange-500/10'
      },
      logoGradient: 'from-yellow-500 to-orange-600',
      logoShadow: 'shadow-yellow-500/30',
      titleGradient: 'from-yellow-400 via-orange-400 to-red-400',
      buttonGradient: 'from-yellow-500 to-orange-600',
      buttonHover: 'hover:from-yellow-600 hover:to-orange-700',
      buttonShadow: 'hover:shadow-yellow-500/30',
      profileUrl: 'https://www.codechef.com/users/pritam1293',
      logo: (
        <img src="/images/codechef-logo.jpg" alt="CodeChef" className="w-8 h-8 object-contain rounded" />
      ),
      stats: [
        {
          label: 'Current Rank',
          value: '⭐⭐⭐',
          bgGradient: 'from-yellow-900/40 to-yellow-800/40',
          borderColor: 'border-yellow-500/30',
          hoverBorder: 'hover:border-yellow-400/50',
          hoverShadow: 'hover:shadow-yellow-500/20',
          iconBg: 'bg-yellow-500/20',
          iconHoverBg: 'group-hover:bg-yellow-500/30',
          valueGradient: 'from-yellow-400 to-orange-400',
          icon: (
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        },
        {
          label: 'Problems Solved',
          value: '150+',
          bgGradient: 'from-emerald-900/40 to-emerald-800/40',
          borderColor: 'border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/50',
          hoverShadow: 'hover:shadow-emerald-500/20',
          iconBg: 'bg-emerald-500/20',
          iconHoverBg: 'group-hover:bg-emerald-500/30',
          valueGradient: 'from-emerald-400 to-teal-400',
          icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Max Rating',
          value: '1737',
          bgGradient: 'from-orange-900/40 to-orange-800/40',
          borderColor: 'border-orange-500/30',
          hoverBorder: 'hover:border-orange-400/50',
          hoverShadow: 'hover:shadow-orange-500/20',
          iconBg: 'bg-orange-500/20',
          iconHoverBg: 'group-hover:bg-orange-500/30',
          valueGradient: 'from-orange-400 to-red-400',
          icon: (
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <circle cx="12" cy="12" r="6" strokeWidth={2} />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'atcoder',
      name: 'AtCoder',
      borderColor: 'border-indigo-500/20',
      decorativeColors: {
        primary: 'bg-indigo-500/10',
        secondary: 'bg-purple-500/10'
      },
      logoGradient: 'from-indigo-500 to-purple-600',
      logoShadow: 'shadow-indigo-500/30',
      titleGradient: 'from-indigo-400 via-purple-400 to-pink-400',
      buttonGradient: 'from-indigo-500 to-purple-600',
      buttonHover: 'hover:from-indigo-600 hover:to-purple-700',
      buttonShadow: 'hover:shadow-indigo-500/30',
      profileUrl: 'https://atcoder.jp/users/pritam1293',
      logo: (
        <img src="/images/atcoder-logo.png" alt="AtCoder" className="w-8 h-8 object-contain" />
      ),
      stats: [
        {
          label: 'Current Rank',
          value: '6 Kyu',
          bgGradient: 'from-indigo-900/40 to-indigo-800/40',
          borderColor: 'border-indigo-500/30',
          hoverBorder: 'hover:border-indigo-400/50',
          hoverShadow: 'hover:shadow-indigo-500/20',
          iconBg: 'bg-indigo-500/20',
          iconHoverBg: 'group-hover:bg-indigo-500/30',
          valueGradient: 'from-indigo-400 to-purple-400',
          icon: (
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        },
        {
          label: 'Problems Solved',
          value: '100+',
          bgGradient: 'from-emerald-900/40 to-emerald-800/40',
          borderColor: 'border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/50',
          hoverShadow: 'hover:shadow-emerald-500/20',
          iconBg: 'bg-emerald-500/20',
          iconHoverBg: 'group-hover:bg-emerald-500/30',
          valueGradient: 'from-emerald-400 to-teal-400',
          icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Max Rating',
          value: '885',
          bgGradient: 'from-purple-900/40 to-purple-800/40',
          borderColor: 'border-purple-500/30',
          hoverBorder: 'hover:border-purple-400/50',
          hoverShadow: 'hover:shadow-purple-500/20',
          iconBg: 'bg-purple-500/20',
          iconHoverBg: 'group-hover:bg-purple-500/30',
          valueGradient: 'from-purple-400 to-pink-400',
          icon: (
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <circle cx="12" cy="12" r="6" strokeWidth={2} />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )
        }
      ]
    }
  ];

  // Refs for each section
  const heroRef = useRef();
  const storyRef = useRef();
  const skillsRef = useRef();
  const cpRef = useRef();

  // Helper function to trigger staggered animations
  const triggerStaggeredAnimation = (section, animationKeys) => {
    animationKeys.forEach(({ key, delay }) => {
      setTimeout(() => {
        setAnimations(prev => ({
          ...prev,
          [section]: { ...prev[section], [key]: true }
        }));
      }, delay);
    });
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));

            // Trigger staggered animations for Journey section
            if (entry.target.id === 'story') {
              triggerStaggeredAnimation('journey', [
                { key: 'title', delay: 200 },
                { key: 'para1', delay: 400 },
                { key: 'para2', delay: 600 },
                { key: 'para3', delay: 800 },
                { key: 'quote', delay: 1000 }
              ]);

              triggerStaggeredAnimation('profile', [
                { key: 'header', delay: 300 },
                { key: 'stat1', delay: 500 },
                { key: 'stat2', delay: 700 },
                { key: 'stat3', delay: 900 },
                { key: 'stat4', delay: 1100 }
              ]);
            }

            // Trigger staggered animations for Skills section
            if (entry.target.id === 'skills') {
              triggerStaggeredAnimation('skills', [
                { key: 'skill1', delay: 200 },
                { key: 'skill2', delay: 350 },
                { key: 'skill3', delay: 500 },
                { key: 'skill4', delay: 650 }
              ]);
            }

            // Trigger staggered animations for Competitive Programming section
            if (entry.target.id === 'cp') {
              triggerStaggeredAnimation('cp', [
                { key: 'cp1', delay: 200 },
                { key: 'cp2', delay: 350 },
                { key: 'cp3', delay: 500 },
                { key: 'cp4', delay: 650 }
              ]);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    // Observe all sections
    const sections = [heroRef.current, storyRef.current, skillsRef.current, cpRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Helper function to check if section is visible
  const isVisible = (sectionId) => visibleSections.has(sectionId);

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

        {/* About Me Section */}
        <div
          ref={heroRef}
          id="hero"
          style={{ marginBottom: '80px' }}
          className={`scroll-animate ${isVisible('hero') ? 'animate-fadeInUp' : ''}`}
        >
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto mb-8 shadow-lg shadow-purple-500/50"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that make a difference.
              <br />
              <span className="text-slate-400">Here's my story and what drives me every day.</span>
            </p>
          </div>

          {/* Main Content Section */}
          <div
            ref={storyRef}
            id="story"
            className={`flex flex-col lg:flex-row gap-12 items-start scroll-animate ${isVisible('story') ? 'animate-slideInLeft animate-delay-200' : ''}`}
          >

            {/* Journey Text Content */}
            <div className="flex-1 space-y-6">
              <div className="relative">
                {/* Decorative line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>

                <div className="pl-8">
                  <h2 className={`text-4xl font-bold text-white mb-8 flex items-center gap-3 transition-all duration-700 transform ${animations.journey.title ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                    }`}>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      My Journey
                    </span>
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </h2>

                  <div className="space-y-6">
                    {journeyParagraphs.map((para, index) => {
                      const animKey = `para${index + 1}`;
                      return (
                        <div key={index} className={`group transition-all duration-700 transform ${animations.journey[animKey] ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                          }`}>
                          <p className="text-lg text-slate-300 leading-relaxed relative pl-6 transition-all duration-300 hover:text-white">
                            {/* Bullet point */}
                            <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform"></span>
                            {para}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Call to action or highlight */}
                  <div className={`mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30 transition-all duration-700 transform ${animations.journey.quote ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                    }`}>
                    <p className="text-slate-300 italic flex items-center gap-3">
                      <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-lg">
                        "Always learning, always building, always pushing boundaries."
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Profile Card */}
            <div className="lg:w-96 w-full">
              <div className="sticky top-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className={`text-center mb-8 transition-all duration-700 transform ${animations.profile.header ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                    }`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Quick Profile
                    </h3>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    {profileStats.map((stat, index) => {
                      const animKey = `stat${index + 1}`;
                      return (
                        <div
                          key={stat.id}
                          className={`group bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-2xl p-5 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-700 hover:scale-105 transform ${animations.profile[animKey] ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                            }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className={`bg-gradient-to-br ${stat.gradient} p-3 rounded-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <div className="text-white">
                                {stat.icon}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                {stat.number}
                              </div>
                              <div className="text-slate-300 text-sm font-medium leading-tight">
                                {stat.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Skills Section */}
        <div
          ref={skillsRef}
          id="skills"
          style={{ marginBottom: '80px' }}
          className={`scroll-animate ${isVisible('skills') ? 'animate-popIn animate-delay-200' : ''}`}
        >
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {skillsData.map((category, index) => {
              const animKey = `skill${index + 1}`;
              return (
                <div
                  key={category.id}
                  className={`group bg-gradient-to-br ${category.gradient} backdrop-blur-xl rounded-3xl p-6 border ${category.borderColor} ${category.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-xl ${category.hoverShadow} relative overflow-hidden transform ${animations.skills[animKey] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                >
                  {/* Decorative glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`${category.iconBg} ${category.iconHoverBg} p-2.5 rounded-xl transition-colors ${category.iconColor}`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${category.tagGradient} ${category.tagHover} transition-all duration-200 cursor-default shadow-lg hover:shadow-xl hover:scale-105`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl px-6 py-3 border border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">Constantly learning & exploring new technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div
          ref={cpRef}
          id="cp"
          style={{ marginBottom: '80px' }}
          className={`scroll-animate ${isVisible('cp') ? 'animate-bounceIn animate-delay-400' : ''}`}
        >
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Competitive Programming
          </h2>

          {/* Competitive Programming Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {competitiveProgrammingPlatforms.map((platform, index) => {
              const animKey = `cp${index + 1}`;
              return (
                <div key={platform.id} className={`w-full transition-all duration-500 transform ${animations.cp[animKey] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <div className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border ${platform.borderColor} relative overflow-hidden`}>

                    {/* Decorative background elements */}
                    <div className={`absolute top-0 right-0 w-28 h-28 ${platform.decorativeColors.primary} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-0 left-0 w-24 h-24 ${platform.decorativeColors.secondary} rounded-full blur-3xl`}></div>

                    <div className="relative z-10">
                      {/* Header with Logo */}
                      <div className="flex items-center justify-center mb-6">
                        <div className={`bg-gradient-to-br ${platform.logoGradient} p-2.5 rounded-xl shadow-lg ${platform.logoShadow}`}>
                          {platform.logo}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className={`text-3xl font-bold text-center mb-6 bg-gradient-to-r ${platform.titleGradient} bg-clip-text text-transparent`}>
                        {platform.name}
                      </h2>

                      {/* Stats Grid */}
                      <div className="space-y-3">
                        {platform.stats.map((stat, index) => (
                          <div key={index} className={`group bg-gradient-to-r ${stat.bgGradient} rounded-xl p-4 border ${stat.borderColor} ${stat.hoverBorder} transition-all duration-300 hover:scale-105 hover:shadow-lg ${stat.hoverShadow}`}>
                            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                              <div className="flex items-center gap-3">
                                <div className={`${stat.iconBg} p-2.5 rounded-xl ${stat.iconHoverBg} transition-colors flex-shrink-0`}>
                                  {stat.icon}
                                </div>
                                <span className="text-slate-200 font-medium text-base sm:text-lg">{stat.label}</span>
                              </div>
                              <div className="flex items-center justify-center">
                                <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.valueGradient} bg-clip-text text-transparent break-words`}>
                                  {stat.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Profile Link Button */}
                      <div className="mt-6">
                        <a
                          href={platform.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full bg-gradient-to-r ${platform.buttonGradient} ${platform.buttonHover} text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${platform.buttonShadow} flex items-center justify-center gap-2 group`}
                        >
                          <span>Visit Profile</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        {/* Content will go here */}
      </div>
    </div>
  )
}

export default About
