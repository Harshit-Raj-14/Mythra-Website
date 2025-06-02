'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [filteredProjects, setFilteredProjects] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const filters = [
    { id: 'ALL', label: 'ALL', count: 12 },
    { id: 'WEB_DEVELOPMENT', label: 'WEB DEVELOPMENT', count: 5 },
    { id: 'MOBILE_APPS', label: 'MOBILE APPS', count: 3 },
    { id: 'GRAPHIC_DESIGN', label: 'GRAPHIC DESIGN', count: 4 }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Modern Online Store",
      description: "A complete e-commerce solution with advanced features including payment integration, inventory management, and responsive design.",
      category: "WEB_DEVELOPMENT",
      image: "/projects/img (1).png",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["React", "Node.js", "MongoDB"],
      client: "TechMart Solutions",
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      subtitle: "Secure Financial Platform",
      description: "Cross-platform mobile banking application with biometric authentication, real-time transactions, and intuitive user interface.",
      category: "MOBILE_APPS",
      image: "/images/projects/banking-app.jpg",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["React Native", "Firebase", "Blockchain"],
      client: "SecureBank Corp",
      year: "2024"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      subtitle: "Complete Visual Identity",
      description: "Comprehensive brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      category: "GRAPHIC_DESIGN",
      image: "/images/projects/brand-identity.jpg",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["Illustrator", "Photoshop", "Branding"],
      client: "InnovateTech",
      year: "2023"
    },
    {
      id: 4,
      title: "Hospital Management System",
      subtitle: "Healthcare Solution",
      description: "Comprehensive hospital management web application with patient records, appointment scheduling, and staff management features.",
      category: "WEB_DEVELOPMENT",
      image: "/images/projects/hospital-system.jpg",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tags: ["Vue.js", "Laravel", "MySQL"],
      client: "CityHealth Hospital",
      year: "2024"
    },
    {
      id: 5,
      title: "Food Delivery App",
      subtitle: "On-Demand Delivery",
      description: "Feature-rich food delivery mobile application with real-time tracking, multiple payment options, and restaurant management.",
      category: "MOBILE_APPS",
      image: "/images/projects/food-delivery.jpg",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      tags: ["Flutter", "Firebase", "Google Maps"],
      client: "QuickEats",
      year: "2023"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      subtitle: "Digital Marketing Assets",
      description: "Creative social media graphics and promotional materials for a product launch campaign across multiple platforms.",
      category: "GRAPHIC_DESIGN",
      image: "/images/projects/social-media-campaign.jpg",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      tags: ["Social Media", "Campaigns", "Creative"],
      client: "BrandBoost Agency",
      year: "2024"
    },
    {
      id: 7,
      title: "Real Estate Platform",
      subtitle: "Property Management",
      description: "Advanced real estate platform with property listings, virtual tours, agent profiles, and integrated CRM system.",
      category: "WEB_DEVELOPMENT",
      image: "/images/projects/real-estate.jpg",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      tags: ["Angular", "Express", "PostgreSQL"],
      client: "PropertyPro",
      year: "2023"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      subtitle: "Health & Wellness",
      description: "Comprehensive fitness application with workout plans, nutrition tracking, progress analytics, and social features.",
      category: "MOBILE_APPS",
      image: "/images/projects/fitness-app.jpg",
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      tags: ["React Native", "HealthKit", "Analytics"],
      client: "FitLife Studios",
      year: "2024"
    },
    {
      id: 9,
      title: "Corporate Brochure Design",
      subtitle: "Print & Digital Assets",
      description: "Professional corporate brochure design with modern layout, infographics, and consistent brand messaging.",
      category: "GRAPHIC_DESIGN",
      image: "/images/projects/corporate-brochure.jpg",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      tags: ["InDesign", "Print Design", "Corporate"],
      client: "GlobalTech Corp",
      year: "2023"
    }
  ]

  useEffect(() => {
    if (activeFilter === 'ALL') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])

  useEffect(() => {
    setFilteredProjects(projects)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('portfolio-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
  }

  return (
    <section id="portfolio-section" className={styles.portfolio}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>🚀 Our Work</span>
          </div>
          <h2 className={styles.title}>
            PORTFOLIO
          </h2>
          <p className={styles.subtitle}>
            Discover our latest projects and see how we transform ideas into digital reality
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterContainer}>
          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`${styles.filterButton} ${
                  activeFilter === filter.id ? styles.activeFilter : ''
                }`}
              >
                {filter.label}
                <span className={styles.filterCount}>({filter.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section - Pure image only */}
              <div className={styles.projectImageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
              
              {/* Content Section - All details below image */}
              <div className={styles.projectContent}>
                <div className={styles.categoryTag}>
                  {project.category.replace('_', ' ')}
                </div>

                <h4 className={styles.projectTitle}>{project.title}</h4>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectFooter}>
                  <a href="#" className={styles.seeProjectLink}>
                    See project
                    <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>

                  <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className={styles.loadMoreSection}>
          <p className={styles.loadMoreText}>
            Want to see more of our work?
          </p>
          <Link href="/projects" className={styles.loadMoreButton}>
            View All Projects
            <svg className={styles.buttonIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio