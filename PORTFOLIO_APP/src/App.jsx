import { useState, useEffect } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import { GraduationCap, Sparkles, Target, Code, Globe, Smartphone, Database, Wrench, ChevronDown, Award, Calendar, ExternalLink } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState({})
  const [certificatesVisible, setCertificatesVisible] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  // Add your certificates here - easy to modify!
  const certificatesData = [
    {
      id: 1,
      title: "Web Development Certification",
      issuer: "Complete Web Development Bootcamp",
      date: "2023",
      description: "Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks.",
      color: "#ff6b6b",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      title: "React Development Course",
      issuer: "Modern React with Hooks",
      date: "2023",
      description: "Advanced React programming with hooks, context API, and best practices.",
      color: "#a29bfe",
      skills: ["React", "Hooks", "Context API", "Redux"]
    },
    {
      id: 3,
      title: "Java Programming",
      issuer: "Object-Oriented Programming Certification",
      date: "2022",
      description: "Core Java programming with OOP concepts, data structures, and algorithms.",
      color: "#00b894",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"]
    },
    {
      id: 4,
      title: "Hack Like A Girl 3.0",
      issuer: "Tech Hackathon",
      date: "2023",
      description: "Participant in women's technology hackathon focusing on innovative solutions.",
      color: "#fdcb6e",
      skills: ["Teamwork", "Problem Solving", "Innovation"]
    },
    {
      id: 5,
      title: "Python for Data Science",
      issuer: "Data Science Academy",
      date: "2023",
      description: "Learn Python programming for data analysis, visualization, and machine learning basics.",
      color: "#74b9ff",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      issuer: "Design Institute",
      date: "2023",
      description: "User interface and user experience design principles, wireframing, and prototyping.",
      color: "#fd79a8",
      skills: ["Figma", "Wireframing", "Prototyping", "User Research"]
    },
    {
      id: 7,
      title: "Mobile App Development",
      issuer: "React Native Workshop",
      date: "2023",
      description: "Cross-platform mobile app development using React Native and Expo.",
      color: "#00cec9",
      skills: ["React Native", "Expo", "Mobile UI", "API Integration"]
    },
    {
      id: 8,
      title: "Database Management",
      issuer: "SQL Fundamentals Course",
      date: "2022",
      description: "Comprehensive database design, SQL queries, and MySQL database management.",
      color: "#e17055",
      skills: ["MySQL", "SQL", "Database Design", "Query Optimization"]
    }
  ]

  // How to add more certificates:
  // Simply add a new object to certificatesData array with:
  // {
  //   id: 9,
  //   title: "Your Certificate Title",
  //   issuer: "Issuing Organization",
  //   date: "2024",
  //   description: "Description of what you learned",
  //   color: "#hexcolor",
  //   skills: ["Skill 1", "Skill 2"]
  // }

  const skillsData = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'C', level: 75 },
        { name: 'C++', level: 70 }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'CodeIgniter', level: 70 }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Android Development', level: 75 }
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Cisco Packet Tracer', level: 75 },
        { name: 'Figma', level: 80 }
      ]
    }
  ]

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setSkillsVisible(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (skillsVisible && expandedCategory) {
      const timer = setTimeout(() => {
        setAnimatedSkills(prev => ({ ...prev, [expandedCategory]: true }))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [skillsVisible, expandedCategory])

  useEffect(() => {
    const handleScroll = () => {
      const certSection = document.getElementById('achievements')
      if (certSection) {
        const rect = certSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setCertificatesVisible(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">HM</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#achievements" onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home / Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Harini Malshini</h1>
            <h2 className="hero-title">Software Engineering Undergraduate</h2>
            <p className="hero-summary">
              I’m a passionate Software Engineering undergraduate who enjoys 
              transforming ideas into real-world digital solutions. 
              I love exploring modern technologies, building clean user interfaces,
              and solving problems through code. Currently expanding my skills 
              in web development, programming, and software design while working 
              on practical projects. Welcome to my portfolio—take a look at my 
                              work and journey in tech.
            </p>
            <div className="hero-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-btn">
                <span className="btn-icon">⌘</span> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-btn">
                <span className="btn-icon">in</span> LinkedIn
              </a>
              <a href="mailto:nadeesha.samanmali@gmail.com" className="hero-btn">
                <span className="btn-icon">✉</span> Email
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-frame">
                <img src={profileImage} alt="Profile" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="about-icon">
                <GraduationCap size={40} />
              </div>
              <h3>Background</h3>
              <p>I am a dedicated Software Engineering undergraduate with a strong foundation in programming and software development. I actively seek opportunities to apply my knowledge to real-world projects and contribute to innovative solutions.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Sparkles size={40} />
              </div>
              <h3>Interests</h3>
              <ul className="interest-list">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Database Systems</li>
                <li>UI/UX Design</li>
                <li>Software Application Development</li>
                <li>Exploring Modern Software Frameworks</li>
                <li>Technology Trends and Innovation</li>
                <li>Building Practical Software Projects</li>
              </ul>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Target size={40} />
              </div>
              <h3>Career Goals</h3>
              <p>My goal is to become a skilled Software Engineer who builds reliable and user-friendly software solutions. I aim to continuously improve my knowledge in programming, web technologies, and modern development frameworks. I am passionate about solving real-world problems through innovative and efficient code. I also strive to collaborate with professional teams and gain industry experience through challenging projects. Ultimately, I hope to contribute to impactful technology that improves people’s daily lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Click on a category to explore my skills</p>
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div 
                key={category.id} 
                className={`skill-card ${expandedCategory === category.id ? 'expanded' : ''} ${skillsVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="skill-card-header"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <span className="skill-count">{category.skills.length} skills</span>
                  <ChevronDown className={`chevron ${expandedCategory === category.id ? 'rotated' : ''}`} size={20} />
                </div>
                <div className={`skill-card-content ${expandedCategory === category.id ? 'open' : ''}`}>
                  <div className="skill-tags-interactive">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name} 
                        className={`skill-pill ${animatedSkills[category.id] ? 'animate' : ''}`}
                        style={{ animationDelay: `${skillIndex * 0.08}s` }}
                      >
                        <span className="skill-pill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Real-world applications demonstrating practical skills</p>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="project-header">
                <h3>🚚 Transportation & Logistics Mobile App</h3>
              </div>
              <p className="project-description">
                A comprehensive mobile application for transportation and logistics management. 
                Features include user authentication, real-time tracking, and booking functionality.
              </p>
              <div className="project-tech">
                <span>React Native</span>
                <span>React Navigation</span>
                <span>Expo</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code →
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>🎨 Ceylon Arts & Crafts Website</h3>
              </div>
              <p className="project-description">
                An elegant e-commerce platform for showcasing and selling traditional Sri Lankan 
                arts and crafts. Includes navigation, product catalog, and social media integration.
              </p>
              <div className="project-tech">
                <span>CodeIgniter</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code →
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>🌐 Network Configuration Lab</h3>
              </div>
              <p className="project-description">
                Designed and configured enterprise-level network infrastructure using Cisco 
                Packet Tracer. Implemented routers, switches, and firewall configurations.
              </p>
              <div className="project-tech">
                <span>Cisco Packet Tracer</span>
                <span>Network Security</span>
                <span>Routing & Switching</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code →
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>🦁 Zoo Management System</h3>
              </div>
              <p className="project-description">
                A comprehensive zoo management system built using Java OOP concepts. 
                Implements inheritance, encapsulation, and polymorphism for efficient animal management.
              </p>
              <div className="project-tech">
                <span>Java</span>
                <span>OOP Concepts</span>
                <span>GUI Development</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-content">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-details">
                <h3>BSc (Hons) Software Engineering</h3>
                <p className="education-university">University of Sri Lanka</p>
                <p className="education-year">Currently Studying</p>
              </div>
            </div>
            <div className="coursework">
              <h3>Relevant Coursework</h3>
              <div className="course-tags">
                <span className="course-tag">Data Structures</span>
                <span className="course-tag">Database Systems</span>
                <span className="course-tag">Software Engineering</span>
                <span className="course-tag">Computer Networks</span>
                <span className="course-tag">Algorithms</span>
                <span className="course-tag">Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle">Click on a certificate to view details</p>
          <div className={`certificates-grid ${certificatesVisible ? 'visible' : ''}`}>
            {certificatesData.map((cert, index) => (
              <div 
                key={cert.id} 
                className="certificate-card"
                onClick={() => setSelectedCert(cert)}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  '--cert-color': cert.color 
                }}
              >
                <div className="certificate-badge" style={{ background: `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}99 100%)` }}>
                  <Award size={32} />
                </div>
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-description">{cert.description}</p>
                  <div className="certificate-footer">
                    <span className="certificate-date">
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                    <span className="view-more">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()} style={{ '--cert-color': selectedCert.color }}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
            <div className="cert-modal-header">
              <div className="cert-modal-badge" style={{ background: `linear-gradient(135deg, ${selectedCert.color} 0%, ${selectedCert.color}99 100%)` }}>
                <Award size={48} />
              </div>
              <h2 className="cert-modal-title">{selectedCert.title}</h2>
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
            </div>
            <div className="cert-modal-body">
              <div className="cert-modal-info">
                <Calendar size={18} />
                <span>{selectedCert.date}</span>
              </div>
              <p className="cert-modal-description">{selectedCert.description}</p>
              <div className="cert-modal-skills">
                <h4>Skills Learned</h4>
                <div className="cert-skills-list">
                  {selectedCert.skills && selectedCert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section id="resume" className="section resume">
        <div className="container">
          <div className="resume-content">
            <h2 className="section-title">Download My Resume</h2>
            <p className="resume-text">
              Get a detailed overview of my academic background, skills, and experience.
            </p>
            <a href="/resume.pdf" download className="resume-btn">
              <span className="btn-icon">📄</span> Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="contact-grid">
            
            <a href="mailto:nadeesha.samanmali@gmail.com" className="contact-card">
              <div className="contact-icon">✉</div>
              <h3>Email</h3>
              <p>nadeesha.samanmali@gmail.com</p>
            </a>

            <a href="tel:+94771234567" className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>+94 771 234 567</p>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">⌘</div>
              <h3>GitHub</h3>
              <p>github.com/nadeesha</p>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">in</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/nadeesha</p>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2024 Nadeesha Samanmali. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:nadeesha.samanmali@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

