import { useState, useEffect, useRef, useCallback } from 'react'
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
import thewholeteam from './assets/the whole team.png'
import webelementlocators from './assets/web element locator.png'
import webdesignforbeginners from './assets/Web_Design_for_Beginners_E-Certificate.pdf2_page-0001.jpg'
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
    {
      id: 'c-intro',
      title: 'Introduction to C',
      issuer: 'Sololearn',
      date: '2024-02-20',
      color: '#4dddd6',
      imageUrl: introCImage,
    },
    {
      id: 'java-intro',
      title: 'Introduction to Java',
      issuer: 'Sololearn',
      date: '2024-10-24',
      color: '#4dddd6',
      imageUrl: introJavaImage,
    },
    {
      id: 'python-intro',
      title: 'Introduction to Python',
      issuer: 'Sololearn',
      date: '2024-03-21',
      color: '#4dddd6',
      imageUrl: introPythonImage,
    },
    {
      id: 'sql-intro',
      title: 'Introduction to SQL',
      issuer: 'Sololearn',
      date: '2024-04-24',
      color: '#4dddd6',
      imageUrl: introSQLImage,
    },
    {
      id: 'python-intermediate',
      title: 'Python Intermediate',
      issuer: 'Sololearn',
      date: '2024-05-10',
      color: '#4dddd6',
      imageUrl: pythonIntermediateImage,   
    },
    {
      id: 'java-intermediate',
      title: 'Java Intermediate',
      issuer: 'Sololearn',
      date: '2024-11-25',
      color: '#4dddd6',
      imageUrl: javaIntermediateImage,  
     },
      {
      id: 'inventory-management',
      title: 'Inventory Management',
      issuer: 'HP LIFE online course',
      date: '2024-04-02',
      color: '#3257c5',
      imageUrl: inventorymanagement,  
      },
      {
      id: 'effective-leadership',
      title: 'Effective Leadership',
      issuer: 'HP LIFE online course',
      date: '2024-03-20',
      color: '#3257c5',
      imageUrl: effectiveleadership,  
      },
      {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      issuer: 'HP LIFE online course',
      date: '2024-04-02',
      color: '#3257c5',
      imageUrl: socialmediamarketing,  
      },
      {
      id: 'your-target-audience',
      title: 'Your Target Audience',
      issuer: 'HP LIFE online course',
      date: '2024-04-02',
      color: '#3257c5',
      imageUrl: yourtargetaudience,
      },
      {
      id: 'api-test-automation',
      title: 'API Test Automation with Postman',
      issuer: 'Applitools',
      date: '05-02-2025',
      color: '#6c42ac',
      imageUrl: apitestautomation,
      },
      {
      id: 'code-less-test-automation',
      title: 'Codeless Test Automation With Selenium IDE',
      issuer: 'Applitools',
      date: '05-03-2025',
      color: '#6c42ac',
      imageUrl: codelesstestautomation,
      },
      {
      id: 'setting-a-foundation',
      title: 'Setting a Foundation For Successful Test Automation ',
      issuer: 'Applitools',
      date: '05-02-2025',
      color: '#6c42ac',
      imageUrl: settingafoundation,
      },
      {
      id: 'the-whole-team',
      title: 'The Whole Team Approach to Continue Testing',
      issuer: 'Applitools',
      date: '05-02-2025',
      color: '#6c42ac',
      imageUrl: thewholeteam,
      },
      {
      id: 'web-element-locators',
      title: 'Web Element Locators Strategies',
      issuer: 'Applitools',
      date: '05-03-2025',
      color: '#6c42ac',
      imageUrl: webelementlocators,
      },
      {
      id: 'web-design-for-beginners',
      title: 'Web Design for Beginners',
      issuer: 'Center for open and distance learning (CODL) University of Moratuwa Sri Lanka',
      date: '2024',
      color: '#822a86',
      imageUrl: webdesignforbeginners,
      }

  

     

  ])

  const [projectsData] = useState([
    {
      id: 1,
      title: "Eco-Friendly-Awareness-Website",
      githubUrl: "https://github.com/Hari-Mal/Eco-Friendly-Awareness-Website-Vue.js-CSS-JavaScript-.git",
      techStack: ["Vue.js", "JavaScript", "HTML5"," CSS"],
      description: "This project is an eco-friendly awareness website that educates users about sustainable living practices. It is built using Vue.js for a dynamic and reactive user interface. JavaScript is used to add interactivity such as navigation and real-time feedback display. HTML5 structures the website content, while CSS provides a clean green-themed design. The website is also responsive so it works well on different devices."
    },
    {
      id: 2,
      title: "Bank-Account-Management-System",
      githubUrl: "https://github.com/Hari-Mal/Bank-Account-Management-System-Python-.git",
      techStack: ["Python"],
      description: "This project is a console-based Bank Account Management System developed using Python. It uses object-oriented programming with classes such as BankAccount and BankSystem. The system allows users to create accounts, deposit and withdraw money, check balances, and transfer funds. It also includes input validation and error handling to prevent invalid transactions. The project demonstrates basic banking operations and Python programming skills"
    },
    {
      id: 3,
      title: "Student-Performance-Analysis",
      githubUrl: "https://github.com/Hari-Mal/Student-Performance-Analysis-EDA-Statistical-Testing-.git",
      techStack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
      description: "This project analyzes student performance using exploratory data analysis (EDA) techniques. Python libraries are used to visualize score distributions and examine relationships between study factors and results. Data cleaning is performed to remove missing values and duplicates. Statistical tests such as t-test, ANOVA, and chi-square are applied to identify significant patterns. The project demonstrates skills in data analysis, visualization, and statistical testing."
    },
    {
      id: 4,
      title: "Hospital-Management-Database",
      githubUrl: "https://github.com/Hari-Mal/Hospital-Management-Database-SQL-.git",
      techStack: ["MySQL", "SQL"],
      description: "This project is a Hospital Management Database designed using MySQL. It stores and manages data about staff, patients, treatments, surgeries, medications, and allergies. The system uses relational tables with primary keys, foreign keys, and constraints to maintain data integrity. Many-to-many relationships are handled using junction tables. SQL queries are used to retrieve useful information such as doctor assignments and patient records."
    },
    {
      id: 5,
      title: "Student-Management-System-Java",
      githubUrl: "https://github.com/Hari-Mal/Student-Management-System-Java-OOP-Implementation-.git",
      techStack: ["Java", "NetBeans IDE", "Object-Oriented Programming"],
      description: "This project is a Student Management System developed using Java. It manages undergraduate and postgraduate student details and evaluates their academic performance. The system applies OOP concepts such as encapsulation, inheritance, and polymorphism. Different classes are used to represent student types and calculate performance based on GPA and research scores. The project demonstrates practical use of Java OOP concepts in an educational management system."
    },
    {
      id: 6,
      title: "University-Management-System",
      githubUrl: "https://github.com/Hari-Mal/University-Management-System-using-Hibernate-Java-Maven-Project-.git",
      techStack: ["Java", "Hibernate ORM", "Apache Maven", "MySQL", "Eclipse IDE", "WAMP Server"],
      description: "This project is a University Management System developed using Java and Hibernate ORM. It connects to a MySQL database to manage university data such as students, courses, and faculty. Maven is used for dependency management and project building. The system supports CRUD operations through DAO classes and Hibernate configuration. It demonstrates database integration and object-relational mapping in a real-world application."
    },
    {
      id: 7,
      title: "Multi-Currency-Digital-Wallet-Java-Application",
      githubUrl: "https://github.com/Hari-Mal/Multi-Currency-Digital-Wallet-Java-Application-.git",
      techStack: ["Java", "JSON"],
      description: " It applies Object-Oriented Programming concepts such as abstract classes, interfaces, inheritance, and polymorphism. The project demonstrates how a digital wallet can manage multiple currencies and financial transactions."
    },
    {
      id: 8,
      title: "GN-QuickCheck-A-Mindful-Digital-Platform-for-Accessing-Grama-Niladhari-Services",
      githubUrl: "https://github.com/Hari-Mal/GN-QuickCheck-A-Mindful-Digital-Platform-for-Accessing-Grama-Niladhari-Services.git",
      techStack: ["Figma"],
      description: "GN QuickCheck is a digital platform designed to help citizens easily access Grama Niladhari services. The project focuses on reducing confusion and improving access to information about required documents and officer availability. It was developed using a user-centered design process including user research, personas, and usability testing. High-fidelity mobile and web prototypes were created using Figma. The system helps citizens prepare documents and plan visits efficiently."
    }
  ])


  const STORAGE_KEY = 'portfolio_certificates'

  // Load from localStorage with sample data if empty
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    console.log('Loading certificates from localStorage:', saved ? 'Found data' : 'No data - adding sample')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setCertificatesData(parsed)
      } catch (e) {
        console.error('localStorage parse error:', e)
        localStorage.removeItem(STORAGE_KEY)
      }
    } else {
      // Add sample certificate for testing persistence
      const sampleCert = {
        id: 'sample-1',
        title: 'Sample Certificate - Persistence Test',
        issuer: 'Portfolio App',
        date: '2024-10-01',
        description: 'This sample shows certificates persist across refreshes!',
        color: '#00d4ff',
        skills: ['React', 'localStorage', 'Persistence'],
        imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDBkNGZmIi8+PHRleHQgeD0iNTAlIiB5PSI1NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0ZTwvdGV4dD48L3N2Zz4='
      }
      setCertificatesData([sampleCert])
      localStorage.setItem(STORAGE_KEY, JSON.stringify([sampleCert]))
      console.log('Added sample certificate')
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    console.log('Saving certificates to localStorage:', certificatesData.length, 'items')
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
              <h3>BSE.HONS Bachelor of Software Engineering(Undergraduate), OPEN UNIVERSITY SRI LANKA.</h3>
              <p> ADVANCED CERTIFICATED IN ENGLISH, British Way English Academy, GAMPAHA.(2023) </p>
              <p>GCE ADVANCED LEVEL EXAMINATION IN MATHS STREAM (SINHALA MEDIUM), SRI SUMANGALA GIRL SCHOOL, PANADURA.(2022(2023))<b>Combined Maths- S Chemistry- S Physics- S </b></p>
              <p>GCE ORDINARY LEVEL EXAMINATION, SRI SUMANGALA GIRL SCHOOL, PANADURA.(2018)<b>A-1 , B-5 , C-3</b> </p>
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
            <button className="save-cert-btn" onClick={() => {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(certificatesData))
              console.log('Force saved', certificatesData.length, 'certificates')
              alert('Certificates force-saved to localStorage! Refresh to test.')
            }}>
              💾 Force Save & Test
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

