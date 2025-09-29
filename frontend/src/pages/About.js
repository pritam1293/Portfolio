import React from 'react'

const About = () => {
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

        {/* About Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#FAFAFA',
            marginBottom: '1rem'
          }}>
            About Me
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #5D27BE, #8B6953)',
            margin: '0 auto 2rem auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontSize: '1.2rem',
            color: '#B9AFBB',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            I'm a passionate developer who loves creating digital experiences that make a difference.
            Here's my story and what drives me every day.
          </p>
        </div>

        {/* Personal Story Section */}
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px',
          flexWrap: 'wrap'
        }}>
          {/* Text Content */}
          <div style={{ flex: '1', minWidth: '400px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#FAFAFA',
              marginBottom: '1.5rem'
            }}>
              My Journey
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#B9AFBB',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              I'm currently in my final year of B.Tech at NIT Rourkela, where my passion
              for technology and problem-solving has led me deep into the world of software
              development. What started as curiosity about how things work has evolved into
              a genuine love for creating digital solutions.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#B9AFBB',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              My journey spans from foundational programming languages like C++ and Java
              to modern web technologies like React and Spring Boot. I believe in building
              robust, user-friendly applications that solve real-world problems.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#B9AFBB',
              lineHeight: '1.7'
            }}>
              When I'm not coding, you'll find me on the cricket field, following football
              matches, or getting excited about tennis during Wimbledon season. I'm also a
              huge fan of fantasy and sci-fi movies - there's something magical about stories
              that push the boundaries of imagination!
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{ flex: '0 0 300px' }}>
            <div style={{
              background: 'rgba(93, 39, 190, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(93, 39, 190, 0.2)'
            }}>
              <h3 style={{
                color: '#5D27BE',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Quick Stats
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#FAFAFA', fontSize: '2rem', fontWeight: 'bold' }}>Final Year</div>
                <div style={{ color: '#B9AFBB' }}>B.Tech at NIT Rourkela</div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#FAFAFA', fontSize: '2rem', fontWeight: 'bold' }}>9+</div>
                <div style={{ color: '#B9AFBB' }}>Technologies Mastered</div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#FAFAFA', fontSize: '2rem', fontWeight: 'bold' }}>3</div>
                <div style={{ color: '#B9AFBB' }}>Favorite Sports</div>
              </div>

              <div>
                <div style={{ color: '#FAFAFA', fontSize: '2rem', fontWeight: 'bold' }}>∞</div>
                <div style={{ color: '#B9AFBB' }}>Sci-Fi Movies Watched</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#FAFAFA',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Technical Skills
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Programming Languages */}
            <div style={{
              background: 'rgba(139, 105, 83, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(139, 105, 83, 0.2)'
            }}>
              <h3 style={{
                color: '#8B6953',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                Programming Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['C++', 'Java'].map(skill => (
                  <span key={skill} style={{
                    background: 'rgba(139, 105, 83, 0.2)',
                    color: '#FAFAFA',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div style={{
              background: 'rgba(93, 39, 190, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(93, 39, 190, 0.2)'
            }}>
              <h3 style={{
                color: '#5D27BE',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                Frontend Technologies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['React', 'HTML', 'CSS', 'Tailwind'].map(skill => (
                  <span key={skill} style={{
                    background: 'rgba(93, 39, 190, 0.2)',
                    color: '#FAFAFA',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Tools */}
            <div style={{
              background: 'rgba(185, 175, 187, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(185, 175, 187, 0.2)'
            }}>
              <h3 style={{
                color: '#B9AFBB',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                Backend & Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Spring Boot', 'Git', 'GitHub'].map(skill => (
                  <span key={skill} style={{
                    background: 'rgba(185, 175, 187, 0.2)',
                    color: '#FAFAFA',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#FAFAFA',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Competitive Programming
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #5D27BE, #8B6953)',
            margin: '0 auto 3rem auto',
            borderRadius: '2px'
          }}></div>

          {/* Achievement Highlight */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(93, 39, 190, 0.2), rgba(139, 105, 83, 0.2))',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '3rem',
            textAlign: 'center',
            border: '2px solid rgba(93, 39, 190, 0.3)'
          }}>
            <div style={{
              color: '#5D27BE',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              🏆 Top Achievement
            </div>
            <div style={{
              color: '#FAFAFA',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              LeetCode Knight Badge
            </div>
            <div style={{ color: '#B9AFBB', fontSize: '1.1rem' }}>
              Top 2.22% of all users globally
            </div>
          </div>

          {/* Platform Stats Grid - Refactored */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {(() => {
              // Platform data array
              const platforms = [
                {
                  name: 'LeetCode 🗡️',
                  rating: '2022',
                  subtitle: 'Max Rating',
                  badge: 'Knight Badge',
                  color: '#5D27BE',
                  link: 'https://leetcode.com/u/Pritam1293/'
                },
                {
                  name: 'CodeChef 👨‍🍳',
                  rating: '1737',
                  subtitle: 'Max Rating',
                  badge: '3⭐ Star',
                  color: '#8B6953',
                  link: 'https://www.codechef.com/users/pritam1293'
                },
                {
                  name: 'Codeforces 🚀',
                  rating: '1479',
                  subtitle: 'Max Rating',
                  badge: 'Specialist',
                  color: '#B9AFBB',
                  link: 'https://codeforces.com/profile/pritam1293'
                },
                {
                  name: 'AtCoder 🎌',
                  rating: '885',
                  subtitle: 'Rating',
                  badge: '6 Kyu',
                  color: '#5D27BE',
                  link: 'https://atcoder.jp/users/pritam1293'
                }
              ];

              // Reusable card component function
              const createPlatformCard = (platform) => (
                <div
                  key={platform.name}
                  style={{
                    background: `rgba(${hexToRgb(platform.color)}, 0.1)`,
                    borderRadius: '16px',
                    padding: '2rem',
                    border: `1px solid rgba(${hexToRgb(platform.color)}, 0.2)`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    color: platform.color,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}>
                    {platform.name}
                  </div>
                  <div style={{ color: '#FAFAFA', fontSize: '2.5rem', fontWeight: 'bold' }}>
                    {platform.rating}
                  </div>
                  <div style={{ color: '#B9AFBB', marginBottom: '0.5rem' }}>
                    {platform.subtitle}
                  </div>
                  <div style={{
                    background: `rgba(${hexToRgb(platform.color)}, 0.3)`,
                    color: '#FAFAFA',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    {platform.badge}
                  </div>
                  <div>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: platform.color,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        padding: '0.5rem 1rem',
                        border: `1px solid ${platform.color}`,
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = platform.color;
                        e.target.style.color = '#FAFAFA';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = platform.color;
                      }}
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              );

              // Helper function to convert hex to RGB
              function hexToRgb(hex) {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                if (result) {
                  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
                }
                return '93, 39, 190'; // fallback
              }

              // Return all platform cards
              return platforms.map(createPlatformCard);
            })()}
          </div>

          {/* Summary Stats */}
          <div style={{
            background: 'rgba(250, 250, 252, 0.05)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              color: '#FAFAFA',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              1200+
            </div>
            <p style={{ color: '#B9AFBB', fontSize: '1.2rem' }}>
              Problems Solved Across All Platforms
              <br />
              (Platforms include LeetCode, CodeChef, Codeforces, AtCoder, InterviewBit, GeeksforGeeks)
            </p>
          </div>
        </div>

        {/* Content will go here */}

      </div>
    </div>
  )
}

export default About