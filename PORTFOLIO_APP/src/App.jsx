import { useState } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import { GraduationCap, Sparkles, Target } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

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
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">CodeIgniter</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Mobile Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Android Development</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Cisco Packet Tracer</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
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
          <div className="achievements-grid">
            
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Hack Like A Girl 3.0</h3>
              <p>Participant - Tech Hackathon</p>
              <span className="achievement-date">2023</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📜</div>
              <h3>Web Development Certification</h3>
              <p>Complete Web Development Bootcamp</p>
              <span className="achievement-date">2023</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">⚛️</div>
              <h3>React Development Course</h3>
              <p>Modern React with Hooks</p>
              <span className="achievement-date">2023</span>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">💻</div>
              <h3>Java Programming</h3>
              <p>Object-Oriented Programming Certification</p>
              <span className="achievement-date">2022</span>
            </div>

          </div>
        </div>
      </section>

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

