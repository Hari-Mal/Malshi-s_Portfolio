import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import { GraduationCap, Sparkles, Target, Code, Globe, Smartphone, Database, Wrench, ChevronDown, Award, Calendar, ExternalLink, Plus, Upload, Image as ImageIcon, X, Palette, Download, Eye } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState({})
  const [certificatesVisible, setCertificatesVisible] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)
  const [viewingCert, setViewingCert] = useState(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadForm, setUploadForm] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    color: '#ff6b6b'
  })
  const [newSkills, setNewSkills] = useState([])
  const [previewUrl, setPreviewUrl] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const fileInputRef = useRef(null)
  const skillInputRef = useRef(null)

  const [certificatesData, setCertificatesData] = useState([
    
  ])

  const [projectsData] = useState([
    {
      id: 1,
      title: "Student Management System",
      githubUrl: "https://github.com/harinimalshini/student-management-java",
      techStack: ["Java", "OOP", "NetBeans", "Swing"],
      description: "Complete student management system with CRUD operations, user authentication, and reporting features. Implements OOP principles with clean architecture and GUI interface."
    },
    {
      id: 2,
      title: "Portfolio Website",
      githubUrl: "https://github.com/harinimalshini/portfolio-react",
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      description: "This very portfolio website built with modern React 19, Vite build tool, custom CSS animations, and responsive design using CSS Grid and Flexbox."
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      githubUrl: "https://github.com/harinimalshini/ecommerce-php",
      techStack: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
      description: "Full-stack e-commerce application with shopping cart, payment gateway integration, admin dashboard, and order management system."
    },
    {
      id: 4,
      title: "Task Management App",
      githubUrl: "https://github.com/harinimalshini/task-manager-react",
      techStack: ["React Native", "Expo", "Firebase", "Redux"],
      description: "Mobile task management app with real-time sync, offline support, drag & drop UI, and push notifications using cross-platform React Native."
    },
    {
      id: 5,
      title: "Inventory Management",
      githubUrl: "https://github.com/harinimalshini/inventory-python",
      techStack: ["Python", "Tkinter", "SQLite", "Pandas"],
      description: "Desktop inventory system with barcode scanning, stock tracking, sales reporting, and data analytics dashboard using Python GUI framework."
    }
  ])


  const STORAGE_KEY = 'portfolio_certificates'

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      setCertificatesData(parsed)
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certificatesData))
  }, [certificatesData])

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

  // Scroll effects
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

  // Upload handlers
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => setPreviewUrl(reader.result)
      reader.readAsDataURL(file)
    } else {
      alert('Please select an image or PDF file.')
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setUploadForm(prev => ({ ...prev, [name]: value }))
  }

  const addSkill = (e) => {
    e.preventDefault()
    const skill = skillInputRef.current.value.trim()
    if (skill && !newSkills.includes(skill)) {
      setNewSkills(prev => [...prev, skill])
      skillInputRef.current.value = ''
    }
  }

  const removeSkill = (indexToRemove) => {
    setNewSkills(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!uploadForm.title.trim() || !uploadForm.issuer.trim() || newSkills.length === 0 || !imageFile) {
      alert('Please fill all required fields (title, issuer, skills) and select an image/PDF.')
      return
    }

    const newCert = {
      id: Date.now(), // Unique ID
      ...uploadForm,
      skills: newSkills,
      imageUrl: previewUrl
    }

    setCertificatesData(prev => [newCert, ...prev]) // Add to top
    setShowUploadModal(false)
    // Reset form
    setUploadForm({ title: '', issuer: '', date: '', description: '', color: '#ff6b6b' })
    setNewSkills([])
    setPreviewUrl('')
    setImageFile(null)
  }

  const resetUploadForm = () => {
    setShowUploadModal(false)
    setUploadForm({ title: '', issuer: '', date: '', description: '', color: '#ff6b6b' })
    setNewSkills([])
    setPreviewUrl('')
    setImageFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const deleteCert = (id) => {
    if (confirm('Delete this certificate?')) {
      setCertificatesData(prev => prev.filter(cert => cert.id !== id))
    }
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">HM</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about')}} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={(e) => {e.preventDefault(); scrollToSection('skills')}} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects')}} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#education" onClick={(e) => {e.preventDefault(); scrollToSection('education')}} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#achievements" onClick={(e) => {e.preventDefault(); scrollToSection('achievements')}} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
            <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Harini Malshini</h1>
            <h2 className="hero-title">Software Engineering Undergraduate</h2>
            <p className="hero-summary">
              I'm a passionate Software Engineering undergraduate who enjoys transforming ideas into real-world digital solutions.
              I love exploring modern technologies, building clean user interfaces, and solving problems through code.
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

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="about-icon">
                <GraduationCap size={40} />
              </div>
              <h3>Background</h3>
              <p>I am a dedicated Software Engineering undergraduate with a strong foundation in programming and software development. I actively seek opportunities to apply my knowledge to real-world projects.</p>
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
              </ul>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <Target size={40} />
              </div>
              <h3>Career Goals</h3>
              <p>My goal is to become a skilled Software Engineer who builds reliable and user-friendly software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Click to expand categories</p>
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div 
                key={category.id} 
                className={`skill-card ${expandedCategory === category.id ? 'expanded' : ''} ${skillsVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-card-header" onClick={() => toggleCategory(category.id)}>
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <span className="skill-count">{category.skills.length} skills</span>
                  <ChevronDown className={`chevron ${expandedCategory === category.id ? 'rotated' : ''}`} size={20} />
                </div>
                <div className={`skill-card-content ${expandedCategory === category.id ? 'open' : ''}`}>
                  <div className="skill-tags-interactive">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className={`skill-pill ${animatedSkills[category.id] ? 'animate' : ''}`} style={{ animationDelay: `${skillIndex * 0.08}s` }}>
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

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    <ExternalLink size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Education */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div>
              <h3>BSc (Hons) Software Engineering</h3>
              <p>University of Sri Lanka</p>
              <p>Currently Studying</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications - INTERACTIVE */}
      <section id="achievements" className="section achievements">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">Click certificate for details, "View" to open full document</p>
            <button className="add-cert-btn" onClick={() => setShowUploadModal(true)}>
              <Plus size={20} /> Add Certificate
            </button>
          </div>
          <div className={`certificates-grid ${certificatesVisible ? 'visible' : ''}`}>
            {certificatesData.map((cert, index) => (
              <div key={cert.id} className="certificate-card" style={{ '--cert-color': cert.color, animationDelay: `${index * 0.15}s` }}>
                {cert.imageUrl && (
                  <img src={cert.imageUrl} alt={cert.title} className="cert-image" />
                )}
                <div className="certificate-badge" style={{ background: `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}cc 100%)` }}>
                  <Award size={32} />
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p>{cert.description}</p>
                  <div className="certificate-footer">
                    <span><Calendar size={14} /> {cert.date}</span>
                    <div>
                      <button className="view-cert-btn" onClick={(e) => { e.stopPropagation(); setViewingCert(cert) }}>
                        <Eye size={14} /> View
                      </button>
                      <button className="delete-cert-btn" onClick={(e) => { e.stopPropagation(); deleteCert(cert.id) }}>
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Cert Details Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()} style={{ '--cert-color': selectedCert.color }}>
<button className="cert-modal-close" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedCert(null); window.focus(); }} type="button">×</button>
            <div className="cert-modal-header">
              <div className="cert-modal-badge" style={{ background: `linear-gradient(135deg, ${selectedCert.color} 0%, ${selectedCert.color}cc 100%)` }}>
                <Award size={48} />
              </div>
              <h2>{selectedCert.title}</h2>
              <p>{selectedCert.issuer}</p>
            </div>
            <div className="cert-modal-body">
              <div><Calendar size={18} /> {selectedCert.date}</div>
              <p>{selectedCert.description}</p>
              <div>
                <h4>Skills Learned:</h4>
                <div className="cert-skills-list">
                  {selectedCert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate View Modal (Full Image/PDF) */}
      {viewingCert && (
        <div className="cert-modal-overlay" onClick={() => setViewingCert(null)}>
          <div className="cert-view-modal" onClick={e => e.stopPropagation()}>
<button className="cert-modal-close" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setViewingCert(null); window.focus(); }} type="button">×</button>
            <div className="cert-view-content">
              {viewingCert.imageUrl && viewingCert.imageUrl.startsWith('data:image/') ? (
                <img src={viewingCert.imageUrl} alt={viewingCert.title} className="full-cert-image" />
              ) : (
                <iframe src={viewingCert.imageUrl} className="full-cert-pdf" title={viewingCert.title} />
              )}
              <div className="cert-view-info">
                <h3>{viewingCert.title}</h3>
                <p>{viewingCert.issuer} • {viewingCert.date}</p>
                {viewingCert.imageUrl && (
                  <a href={viewingCert.imageUrl} download className="download-btn" title="Download">
                    <Download size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Certificate Modal */}
      {showUploadModal && (
        <div className="upload-modal-overlay" onClick={resetUploadForm}>
          <div className="upload-modal" onClick={e => e.stopPropagation()}>
<button className="upload-modal-close" onClick={(e) => { e.preventDefault(); e.stopPropagation(); resetUploadForm(); window.focus(); }} type="button">×</button>
            <h2>Add New Certificate</h2>
            <form onSubmit={handleSubmit} className="upload-form">
              <div className="upload-form-group">
                <label>Title *</label>
                <input 
                  name="title" 
                  value={uploadForm.title} 
                  onChange={handleFormChange}
                  required 
                />
              </div>
              <div className="upload-form-group">
                <label>Issuer/Organization *</label>
                <input 
                  name="issuer" 
                  value={uploadForm.issuer} 
                  onChange={handleFormChange}
                  required 
                />
              </div>
              <div className="upload-form-group">
                <label>Date</label>
                <input type="date" name="date" value={uploadForm.date} onChange={handleFormChange} />
              </div>
              <div className="upload-form-group">
                <label>Description</label>
                <textarea name="description" value={uploadForm.description} onChange={handleFormChange} />
              </div>
              <div className="upload-form-group">
                <label>Certificate Image/PDF *</label>
                <div className="file-upload-area" onClick={() => fileInputRef.current?.click()}>
                  <Upload size={32} />
                  <label>Click to upload certificate</label>
                  {previewUrl && (
                    <div className="file-preview">
                      <img src={previewUrl} alt="Preview" />
                    </div>
                  )}
                </div>
                <input ref={fileInputRef} type="file" className="file-input" accept="image/*,application/pdf" onChange={handleImageUpload} required />
              </div>
              <div className="upload-form-group">
                <label>Accent Color</label>
                <div className="color-picker">
                  <input type="color" name="color" value={uploadForm.color} onChange={handleFormChange} />
                  <span>{uploadForm.color}</span>
                </div>
              </div>
              <div className="upload-form-group">
                <label>Skills Learned *</label>
                <div className="skills-input">
                  <input ref={skillInputRef} id="skill-input" placeholder="Add skill" />
                  <button type="button" className="add-skill-btn" onClick={addSkill}>Add</button>
                </div>
                <div className="skills-tags">
                  {newSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                      <button type="button" onClick={() => removeSkill(index)}><X size={12} /></button>
                    </span>
                  ))}
                </div>
                {newSkills.length === 0 && <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Add at least one skill</p>}
              </div>
              <div className="upload-actions">
                <button type="button" className="cancel-btn" onClick={resetUploadForm}>Cancel</button>
                <button type="submit" className="upload-btn" disabled={!imageFile || !uploadForm.title || !uploadForm.issuer || newSkills.length === 0}>
                  Add Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Resume */}
      <section id="resume" className="section resume">
        <div className="container">
          <h2 className="section-title">Download Resume</h2>
          <a href="/resume.pdf" download className="resume-btn">
            📄 Download PDF
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <a href="mailto:nadeesha.samanmali@gmail.com" className="contact-card">
              <div>✉</div>
              <h3>Email</h3>
              <p>nadeesha.samanmali@gmail.com</p>
            </a>
            <a href="tel:+94771234567" className="contact-card">
              <div>📱</div>
              <h3>Phone</h3>
              <p>+94 771 234 567</p>
            </a>
            <a href="https://github.com" className="contact-card">
              <div>⌘</div>
              <h3>GitHub</h3>
              <p>/nadeesha</p>
            </a>
            <a href="https://linkedin.com" className="contact-card">
              <div>in</div>
              <h3>LinkedIn</h3>
              <p>/in/nadeesha</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Nadeesha Samanmali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

