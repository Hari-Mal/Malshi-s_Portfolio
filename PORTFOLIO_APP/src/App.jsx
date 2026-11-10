
import { useState, useEffect, useRef } from 'react'
import './App.css'

import profileImage from './assets/profile.jpg'

import introCImage from './assets/Introduction to C.png'
import introJavaImage from './assets/Introduction to java.png'
import introPythonImage from './assets/Introduction to python.png'
import introSQLImage from './assets/Introduction to SQL.png'
import pythonIntermediateImage from './assets/Python intermidiate.png'
import javaIntermediateImage from './assets/Java intermidiate.png'

import inventorymanagement from './assets/Inventory Management_page-0001.jpg'
import effectiveleadership from './assets/Effective Leadership_page-0001.jpg'
import socialmediamarketing from './assets/Social Media Marketing_page-0001.jpg'
import yourtargetaudience from './assets/Your Target Audience_page-0001.jpg'

import apitestautomation from './assets/API test automation.png'
import codelesstestautomation from './assets/codeless test automation.png'
import settingafoundation from './assets/setting a foundation.png'
import thewholeteam from './assets/the-whole-team.png'
import webelementlocators from './assets/web element locator.png'
import webdesignforbeginners from './assets/Web_Design_for_Beginners_E-Certificate.pdf2_page-0001.jpg'

import {
  GraduationCap,
  Sparkles,
  Target,
  Code,
  Globe,
  Database,
  Wrench,
  ChevronDown,
  Award,
  Calendar,
  ExternalLink,
  Plus,
  Upload,
  X,
  Download,
  Eye,
  FileText
} from 'lucide-react'

// Storage keys
const CERT_STORAGE_KEY = 'portfolio_certificates_v2'
const RESUME_STORAGE_KEY = 'portfolio_resume'

// Default certificates
const defaultCertificates = [
  {
    id: 'c-intro',
    title: 'Introduction to C',
    issuer: 'Sololearn',
    date: '2024-02-20',
    color: '#4dddd6',
    imageUrl: introCImage
  },
  {
    id: 'java-intro',
    title: 'Introduction to Java',
    issuer: 'Sololearn',
    date: '2024-10-24',
    color: '#4dddd6',
    imageUrl: introJavaImage
  },
  {
    id: 'python-intro',
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: '2024-03-21',
    color: '#4dddd6',
    imageUrl: introPythonImage
  },
  {
    id: 'sql-intro',
    title: 'Introduction to SQL',
    issuer: 'Sololearn',
    date: '2024-04-24',
    color: '#4dddd6',
    imageUrl: introSQLImage
  },
  {
    id: 'python-intermediate',
    title: 'Python Intermediate',
    issuer: 'Sololearn',
    date: '2024-05-10',
    color: '#4dddd6',
    imageUrl: pythonIntermediateImage
  },
  {
    id: 'java-intermediate',
    title: 'Java Intermediate',
    issuer: 'Sololearn',
    date: '2024-11-25',
    color: '#4dddd6',
    imageUrl: javaIntermediateImage
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    issuer: 'HP LIFE online course',
    date: '2024-04-02',
    color: '#3257c5',
    imageUrl: inventorymanagement
  },
  {
    id: 'effective-leadership',
    title: 'Effective Leadership',
    issuer: 'HP LIFE online course',
    date: '2024-03-20',
    color: '#3257c5',
    imageUrl: effectiveleadership
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    issuer: 'HP LIFE online course',
    date: '2024-04-02',
    color: '#3257c5',
    imageUrl: socialmediamarketing
  },
  {
    id: 'your-target-audience',
    title: 'Your Target Audience',
    issuer: 'HP LIFE online course',
    date: '2024-04-02',
    color: '#3257c5',
    imageUrl: yourtargetaudience
  },
  {
    id: 'api-test-automation',
    title: 'API Test Automation with Postman',
    issuer: 'Applitools',
    date: '2025-02-05',
    color: '#6c42ac',
    imageUrl: apitestautomation
  },
  {
    id: 'code-less-test-automation',
    title: 'Codeless Test Automation With Selenium IDE',
    issuer: 'Applitools',
    date: '2025-03-05',
    color: '#6c42ac',
    imageUrl: codelesstestautomation
  },
  {
    id: 'setting-a-foundation',
    title: 'Setting a Foundation For Successful Test Automation',
    issuer: 'Applitools',
    date: '2025-02-05',
    color: '#6c42ac',
    imageUrl: settingafoundation
  },
  {
    id: 'the-whole-team',
    title: 'The Whole Team Approach to Continuous Testing',
    issuer: 'Applitools',
    date: '2025-02-05',
    color: '#6c42ac',
    imageUrl: thewholeteam
  },
  {
    id: 'web-element-locators',
    title: 'Web Element Locators Strategies',
    issuer: 'Applitools',
    date: '2025-03-05',
    color: '#6c42ac',
    imageUrl: webelementlocators
  },
  {
    id: 'web-design-for-beginners',
    title: 'Web Design for Beginners',
    issuer: 'Center for Open and Distance Learning (CODL), University of Moratuwa',
    date: '2024',
    color: '#822a86',
    imageUrl: webdesignforbeginners
  }
]

// Load saved certificates safely
const getInitialCertificates = () => {
  try {
    const saved = localStorage.getItem(CERT_STORAGE_KEY)

    if (saved) {
      const parsed = JSON.parse(saved)

      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (error) {
    console.error('Certificate loading error:', error)
  }

  return defaultCertificates
}

// Load saved resume safely
const getInitialResume = () => {
  try {
    const saved = localStorage.getItem(RESUME_STORAGE_KEY)

    if (saved) {
      const parsed = JSON.parse(saved)

      if (parsed && parsed.dataURL) {
        return parsed
      }
    }
  } catch (error) {
    console.error('Resume loading error:', error)
  }

  return null
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState({})
  const [certificatesVisible, setCertificatesVisible] = useState(false)

  const [certificatesData, setCertificatesData] = useState(
    getInitialCertificates
  )

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

  const [resumeData, setResumeData] = useState(getInitialResume)
  const [showResumeUploadModal, setShowResumeUploadModal] = useState(false)
  const [resumePreviewUrl, setResumePreviewUrl] = useState(
    getInitialResume()?.dataURL || ''
  )
  const [resumeFile, setResumeFile] = useState(null)
  const resumeFileInputRef = useRef(null)

  // Save certificates whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(
        CERT_STORAGE_KEY,
        JSON.stringify(certificatesData)
      )
    } catch (error) {
      console.error('Certificate saving error:', error)
      alert('Unable to save certificates. Browser storage may be full.')
    }
  }, [certificatesData])

  // Save resume whenever it changes
  useEffect(() => {
    try {
      if (resumeData) {
        localStorage.setItem(
          RESUME_STORAGE_KEY,
          JSON.stringify(resumeData)
        )
      } else {
        localStorage.removeItem(RESUME_STORAGE_KEY)
      }
    } catch (error) {
      console.error('Resume saving error:', error)
      alert('Unable to save resume. The file may be too large.')
    }
  }, [resumeData])

  // Skills data
  const skillsData = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'C', level: 75 }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 85 }
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
        { name: 'Figma', level: 80 }
      ]
    }
  ]

  // Projects data
  const projectsData = [
    {
      id: 1,
      title: 'Eco-Friendly-Awareness-Website',
      githubUrl: 'https://github.com/Hari-Mal/Eco-Friendly-Awareness-Website-Vue.js-CSS-JavaScript-.git',
      techStack: ['Vue.js', 'JavaScript', 'HTML5', 'CSS'],
      description: 'An eco-friendly awareness website that educates users about sustainable living practices. Built using Vue.js, JavaScript, HTML5 and CSS with a responsive user interface.'
    },
    {
      id: 2,
      title: 'Bank-Account-Management-System',
      githubUrl: 'https://github.com/Hari-Mal/Bank-Account-Management-System-Python-.git',
      techStack: ['Python'],
      description: 'A console-based Bank Account Management System developed using Python and object-oriented programming. It supports account creation, deposits, withdrawals, balance checking and fund transfers with input validation.'
    },
    {
      id: 3,
      title: 'Student-Performance-Analysis',
      githubUrl: 'https://github.com/Hari-Mal/Student-Performance-Analysis-EDA-Statistical-Testing-.git',
      techStack: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib', 'Seaborn', 'SciPy'],
      description: 'A student performance analysis project using exploratory data analysis, data visualization and statistical tests such as t-test, ANOVA and chi-square.'
    },
    {
      id: 4,
      title: 'Hospital-Management-Database',
      githubUrl: 'https://github.com/Hari-Mal/Hospital-Management-Database-SQL-.git',
      techStack: ['MySQL', 'SQL'],
      description: 'A relational Hospital Management Database designed using MySQL. It manages staff, patients, treatments, surgeries, medications and allergies using primary keys, foreign keys and relational constraints.'
    },
    {
      id: 5,
      title: 'Student-Management-System-Java',
      githubUrl: 'https://github.com/Hari-Mal/Student-Management-System-Java-OOP-Implementation-.git',
      techStack: ['Java', 'NetBeans IDE', 'OOP'],
      description: 'A Student Management System developed using Java. It manages undergraduate and postgraduate student details and demonstrates encapsulation, inheritance and polymorphism.'
    },
    {
      id: 6,
      title: 'University-Management-System',
      githubUrl: 'https://github.com/Hari-Mal/University-Management-System-using-Hibernate-Java-Maven-Project-.git',
      techStack: ['Java', 'Hibernate ORM', 'Maven', 'MySQL'],
      description: 'A University Management System developed using Java and Hibernate ORM. It manages university data and supports CRUD operations with database integration.'
    },
    {
      id: 7,
      title: 'Multi-Currency-Digital-Wallet-Java-Application',
      githubUrl: 'https://github.com/Hari-Mal/Multi-Currency-Digital-Wallet-Java-Application-.git',
      techStack: ['Java', 'JSON'],
      description: 'A Java digital wallet application that demonstrates object-oriented programming concepts such as abstract classes, interfaces, inheritance and polymorphism.'
    },
    {
      id: 8,
      title: 'GN-QuickCheck',
      githubUrl: 'https://github.com/Hari-Mal/GN-QuickCheck-A-Mindful-Digital-Platform-for-Accessing-Grama-Niladhari-Services.git',
      techStack: ['Figma', 'UI/UX Design'],
      description: 'A digital platform designed to help citizens access Grama Niladhari services. The project uses user-centered design, personas, usability testing and high-fidelity mobile and web prototypes.'
    }
  ]

  // Navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills')
      const certSection = document.getElementById('achievements')

      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.8) {
          setSkillsVisible(true)
        }
      }

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

  useEffect(() => {
    if (skillsVisible && expandedCategory) {
      const timer = setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [expandedCategory]: true
        }))
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [skillsVisible, expandedCategory])

  const toggleCategory = (categoryId) => {
    setExpandedCategory(
      expandedCategory === categoryId ? null : categoryId
    )
  }

  // Certificate upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (
      !file.type.startsWith('image/') &&
      file.type !== 'application/pdf'
    ) {
      alert('Please select an image or PDF file.')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.')
      e.target.value = ''
      return
    }

    setImageFile(file)

    const reader = new FileReader()

    reader.onloadend = () => {
      setPreviewUrl(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target

    setUploadForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const addSkill = (e) => {
    e.preventDefault()

    const skill = skillInputRef.current?.value.trim()

    if (skill && !newSkills.includes(skill)) {
      setNewSkills(prev => [...prev, skill])

      if (skillInputRef.current) {
        skillInputRef.current.value = ''
      }
    }
  }

  const removeSkill = (indexToRemove) => {
    setNewSkills(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    )
  }

  const resetUploadForm = () => {
    setShowUploadModal(false)

    setUploadForm({
      title: '',
      issuer: '',
      date: '',
      description: '',
      color: '#ff6b6b'
    })

    setNewSkills([])
    setPreviewUrl('')
    setImageFile(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !uploadForm.title.trim() ||
      !uploadForm.issuer.trim() ||
      newSkills.length === 0 ||
      !imageFile ||
      !previewUrl
    ) {
      alert('Please complete all required fields and select a certificate.')
      return
    }

    const newCert = {
      id: `custom-${Date.now()}`,
      ...uploadForm,
      skills: newSkills,
      imageUrl: previewUrl
    }

    setCertificatesData(prev => [newCert, ...prev])

    resetUploadForm()
  }

  const deleteCert = (id) => {
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      setCertificatesData(prev =>
        prev.filter(cert => cert.id !== id)
      )
    }
  }

  // Resume upload
  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file.')
      e.target.value = ''
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Resume file must be less than 5MB.')
      e.target.value = ''
      return
    }

    setResumeFile(file)

    const reader = new FileReader()

    reader.onloadend = () => {
      setResumePreviewUrl(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const resetResumeForm = () => {
    setShowResumeUploadModal(false)
    setResumeFile(null)

    if (resumeFileInputRef.current) {
      resumeFileInputRef.current.value = ''
    }

    setResumePreviewUrl(resumeData?.dataURL || '')
  }

  const handleResumeSubmit = (e) => {
    e.preventDefault()

    if (!resumeFile || !resumePreviewUrl) {
      alert('Please select a PDF resume.')
      return
    }

    const newResume = {
      dataURL: resumePreviewUrl,
      name: resumeFile.name,
      uploadDate: new Date().toISOString()
    }

    setResumeData(newResume)
    setShowResumeUploadModal(false)
    setResumeFile(null)
  }

  const deleteResume = () => {
    if (window.confirm('Are you sure you want to delete your resume?')) {
      setResumeData(null)
      setResumePreviewUrl('')
    }
  }

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">HM</div>

          <ul className="nav-links">
            {[
              'home',
              'about',
              'skills',
              'projects',
              'education',
              'achievements',
              'resume',
              'contact'
            ].map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Harini Malshini</h1>

            <h2 className="hero-title">
              Software Engineering Undergraduate
            </h2>

            <p className="hero-summary">
              I'm a passionate Software Engineering undergraduate who
              enjoys transforming ideas into real-world digital solutions.
              I love exploring modern technologies, building clean user
              interfaces, and solving problems through code.
            </p>

            <div className="hero-links">
              <a
                href="https://github.com/Hari-Mal"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn"
              >
                <span className="btn-icon">⌘</span> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/harini-malshini-23a175385/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn"
              >
                <span className="btn-icon">in</span> LinkedIn
              </a>

              <a
                href="mailto:harinimalshini@gmail.com"
                className="hero-btn"
              >
                <span className="btn-icon">✉</span> Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-frame">
                <img
                  src={profileImage}
                  alt="Harini Malshini"
                  className="profile-image"
                />
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
              <p>
                I am a dedicated Software Engineering undergraduate with
                a strong foundation in programming and software development.
                I actively seek opportunities to apply my knowledge to
                real-world projects.
              </p>
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
              <p>
                My goal is to become a skilled Software Engineer who builds
                reliable and user-friendly software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Click to expand categories
          </p>

          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div
                key={category.id}
                className={`skill-card ${
                  expandedCategory === category.id ? 'expanded' : ''
                } ${skillsVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="skill-card-header"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>

                  <span className="skill-count">
                    {category.skills.length} skills
                  </span>

                  <ChevronDown
                    className={`chevron ${
                      expandedCategory === category.id ? 'rotated' : ''
                    }`}
                    size={20}
                  />
                </div>

                <div
                  className={`skill-card-content ${
                    expandedCategory === category.id ? 'open' : ''
                  }`}
                >
                  <div className="skill-tags-interactive">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`skill-pill ${
                          animatedSkills[category.id] ? 'animate' : ''
                        }`}
                        style={{
                          animationDelay: `${skillIndex * 0.08}s`
                        }}
                      >
                        <span className="skill-pill-name">
                          {skill.name}
                        </span>
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
            {projectsData.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
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
              <h3>
                Bachelor of Software Engineering (Hons) –
                The Open University of Sri Lanka
              </h3>

              <p>
                Advanced Certificate in English, British Way English
                Academy, Gampaha (2023)
              </p>

              <p>
                GCE Advanced Level Examination – Mathematics Stream,
                Sri Sumangala Girls' School, Panadura (2022/2023).
                Combined Mathematics – S, Chemistry – S, Physics – S.
              </p>

              <p>
                GCE Ordinary Level Examination, Sri Sumangala Girls'
                School, Panadura (2018). A – 1, B – 5, C – 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Certifications */}
      <section id="achievements" className="section achievements">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Achievements & Certifications
            </h2>

            <p className="section-subtitle">
              View your certificates and add new achievements.
            </p>

            <button
              className="add-cert-btn"
              onClick={() => setShowUploadModal(true)}
              type="button"
            >
              <Plus size={20} />
              Add Certificate
            </button>
          </div>

          <div
            className={`certificates-grid ${
              certificatesVisible ? 'visible' : ''
            }`}
          >
            {certificatesData.map((cert, index) => (
              <div
                key={cert.id}
                className="certificate-card"
                style={{
                  '--cert-color': cert.color || '#4dddd6',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {cert.imageUrl && (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="cert-image"
                    loading="lazy"
                  />
                )}

                <div
                  className="certificate-badge"
                  style={{
                    background: `linear-gradient(135deg, ${
                      cert.color || '#4dddd6'
                    } 0%, ${cert.color || '#4dddd6'}cc 100%)`
                  }}
                >
                  <Award size={32} />
                </div>

                <div className="certificate-content">
                  <h3>{cert.title}</h3>

                  <p className="certificate-issuer">
                    {cert.issuer}
                  </p>

                  {cert.description && (
                    <p>{cert.description}</p>
                  )}

                  <div className="certificate-footer">
                    <span>
                      <Calendar size={14} />
                      {cert.date || 'Date not specified'}
                    </span>

                    <div>
                      <button
                        className="view-cert-btn"
                        type="button"
                        onClick={() => setViewingCert(cert)}
                      >
                        <Eye size={14} />
                        View
                      </button>

                      <button
                        className="delete-cert-btn"
                        type="button"
                        onClick={() => deleteCert(cert.id)}
                        aria-label="Delete certificate"
                      >
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

      {/* Certificate Details Modal */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal"
            onClick={e => e.stopPropagation()}
            style={{ '--cert-color': selectedCert.color }}
          >
            <button
              className="cert-modal-close"
              type="button"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-badge">
                <Award size={48} />
              </div>

              <h2>{selectedCert.title}</h2>
              <p>{selectedCert.issuer}</p>
            </div>

            <div className="cert-modal-body">
              <div>
                <Calendar size={18} />
                {selectedCert.date}
              </div>

              <p>{selectedCert.description}</p>

              {selectedCert.skills?.length > 0 && (
                <div>
                  <h4>Skills Learned:</h4>

                  <div className="cert-skills-list">
                    {selectedCert.skills.map((skill, index) => (
                      <span key={index} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Viewer */}
      {viewingCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setViewingCert(null)}
        >
          <div
            className="cert-view-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              type="button"
              onClick={() => setViewingCert(null)}
            >
              ×
            </button>

            <div className="cert-view-content">
              {viewingCert.imageUrl?.startsWith('data:application/pdf') ? (
                <iframe
                  src={viewingCert.imageUrl}
                  className="full-cert-pdf"
                  title={viewingCert.title}
                />
              ) : (
                <img
                  src={viewingCert.imageUrl}
                  alt={viewingCert.title}
                  className="full-cert-image"
                />
              )}

              <div className="cert-view-info">
                <h3>{viewingCert.title}</h3>

                <p>
                  {viewingCert.issuer} • {viewingCert.date}
                </p>

                {viewingCert.imageUrl && (
                  <a
                    href={viewingCert.imageUrl}
                    download={`${viewingCert.title}-certificate`}
                    className="download-btn"
                    title="Download certificate"
                  >
                    <Download size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Certificate Modal */}
      {showUploadModal && (
        <div
          className="upload-modal-overlay"
          onClick={resetUploadForm}
        >
          <div
            className="upload-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="upload-modal-close"
              type="button"
              onClick={resetUploadForm}
            >
              ×
            </button>

            <h2>Add New Certificate</h2>

            <form onSubmit={handleSubmit} className="upload-form">
              <div className="upload-form-group">
                <label>Certificate Title *</label>

                <input
                  name="title"
                  value={uploadForm.title}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="upload-form-group">
                <label>Issuer / Organization *</label>

                <input
                  name="issuer"
                  value={uploadForm.issuer}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="upload-form-group">
                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  value={uploadForm.date}
                  onChange={handleFormChange}
                />
              </div>

              <div className="upload-form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  value={uploadForm.description}
                  onChange={handleFormChange}
                />
              </div>

              <div className="upload-form-group">
                <label>Certificate Image / PDF *</label>

                <div
                  className="file-upload-area"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload size={32} />

                  <label>Click to upload certificate</label>

                  {imageFile && (
                    <p>{imageFile.name}</p>
                  )}

                  {previewUrl && (
                    <div className="file-preview">
                      {imageFile?.type === 'application/pdf' ? (
                        <iframe
                          src={previewUrl}
                          title="Certificate preview"
                          style={{
                            width: '200px',
                            height: '250px'
                          }}
                        />
                      ) : (
                        <img
                          src={previewUrl}
                          alt="Certificate preview"
                        />
                      )}
                    </div>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  className="file-input"
                  accept="image/*,application/pdf"
                  onChange={handleImageUpload}
                  required
                />
              </div>

              <div className="upload-form-group">
                <label>Accent Color</label>

                <div className="color-picker">
                  <input
                    type="color"
                    name="color"
                    value={uploadForm.color}
                    onChange={handleFormChange}
                  />

                  <span>{uploadForm.color}</span>
                </div>
              </div>

              <div className="upload-form-group">
                <label>Skills Learned *</label>

                <div className="skills-input">
                  <input
                    ref={skillInputRef}
                    id="skill-input"
                    placeholder="Enter a skill"
                  />

                  <button
                    type="button"
                    className="add-skill-btn"
                    onClick={addSkill}
                  >
                    Add
                  </button>
                </div>

                <div className="skills-tags">
                  {newSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}

                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>

                {newSkills.length === 0 && (
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Add at least one skill.
                  </p>
                )}
              </div>

              <div className="upload-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetUploadForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="upload-btn"
                  disabled={
                    !imageFile ||
                    !uploadForm.title.trim() ||
                    !uploadForm.issuer.trim() ||
                    newSkills.length === 0
                  }
                >
                  Add Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Resume Upload Modal */}
      {showResumeUploadModal && (
        <div
          className="upload-modal-overlay"
          onClick={resetResumeForm}
        >
          <div
            className="upload-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="upload-modal-close"
              type="button"
              onClick={resetResumeForm}
            >
              ×
            </button>

            <h2>Upload Resume</h2>

            <form
              onSubmit={handleResumeSubmit}
              className="upload-form"
            >
              <div className="upload-form-group">
                <label>Resume PDF *</label>

                <div
                  className="file-upload-area"
                  onClick={() => resumeFileInputRef.current?.click()}
                >
                  <Upload size={32} />

                  <label>Click to upload PDF resume</label>

                  {resumeFile && (
                    <p>{resumeFile.name}</p>
                  )}

                  {resumePreviewUrl && resumeFile && (
                    <div className="file-preview">
                      <iframe
                        src={resumePreviewUrl}
                        title="Resume preview"
                        style={{
                          width: '200px',
                          height: '250px'
                        }}
                      />
                    </div>
                  )}
                </div>

                <input
                  ref={resumeFileInputRef}
                  type="file"
                  className="file-input"
                  accept="application/pdf"
                  onChange={handleResumeUpload}
                  required
                />
              </div>

              <div className="upload-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetResumeForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="upload-btn"
                  disabled={!resumeFile}
                >
                  Upload Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section id="resume" className="section resume">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Resume</h2>

            <button
              className="add-cert-btn"
              style={{
                fontSize: '0.9rem',
                padding: '0.6rem 1.2rem'
              }}
              onClick={() => setShowResumeUploadModal(true)}
            >
              {resumeData ? (
                <>
                  <Upload size={16} /> Update Resume
                </>
              ) : (
                <>
                  <Plus size={16} /> Upload Resume
                </>
              )}
            </button>
          </div>

          {resumeData ? (
            <div className="resume-card">
              <div className="resume-preview">
                <iframe
                  src={resumeData.dataURL}
                  className="resume-viewer"
                  title="Resume Preview"
                />
              </div>

              <div className="resume-actions">
                <a
                  href={resumeData.dataURL}
                  download={resumeData.name}
                  className="resume-download-btn"
                >
                  <Download size={20} />
                  Download Resume
                </a>

                <button
                  className="resume-delete-btn"
                  onClick={deleteResume}
                >
                  <X size={20} />
                  Delete
                </button>
              </div>

              <p className="resume-info">
                Uploaded: {new Date(
                  resumeData.uploadDate
                ).toLocaleDateString()} • {resumeData.name}
              </p>
            </div>
          ) : (
            <div className="resume-placeholder">
              <FileText
                size={64}
                className="resume-placeholder-icon"
              />

              <p>
                No resume uploaded yet. Upload your PDF resume to
                make it available to visitors.
              </p>

              <button
                className="resume-upload-btn"
                onClick={() => setShowResumeUploadModal(true)}
              >
                <Upload size={18} />
                Upload PDF Resume
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-grid">
            <a
              href="mailto:harinimalshini@gmail.com"
              className="contact-card"
            >
              <div>✉</div>
              <h3>Email</h3>
              <p>harinimalshini@gmail.com</p>
            </a>

            <a
              href="tel:+94710663584"
              className="contact-card"
            >
              <div>📱</div>
              <h3>Phone</h3>
              <p>+94 71 066 3584</p>
            </a>

            <a
              href="https://github.com/Hari-Mal"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div>⌘</div>
              <h3>GitHub</h3>
              <p>Harini</p>
            </a>

            <a
              href="https://www.linkedin.com/in/harini-malshini-23a175385/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div>in</div>
              <h3>LinkedIn</h3>
              <p>Harini</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Harini Malshini.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
