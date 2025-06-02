'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [filteredProjects, setFilteredProjects] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Pharmaceuticals Inventory Management and Billing System",
      subtitle: "Inventory and Billing Software",
      description: "A full-fledged system to manage pharmaceutical stock, billing, and customer records with real-time updates and invoicing capabilities.",
      category: "WEB_DEVELOPMENT",
      image: "/projects/kanha.png",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["React", "Node.js", "MongoDB"],
      client: "Kanha Enterprises",
      year: "2024"
    },
    {
      id: 2,
      title: "Baranwal Ekta Sanstha - Community Website",
      subtitle: "Non-profit Organization Portal",
      description: "A responsive website for a community organization featuring event management, donation modules, member directories, and blog sections.",
      category: "WEB_DEVELOPMENT",
      image: "/projects/baranwal.png",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["React Native", "Firebase", "Blockchain"],
      client: "Baranwal Ekta Sanstha",
      year: "2024"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      subtitle: "Complete Visual Identity",
      description: "Comprehensive brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      category: "GRAPHIC_DESIGN",
      image: "/images/projects/brand-identity.png",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["Illustrator", "Photoshop", "Branding"],
      client: "InnovateTech",
      year: "2023"
    },
    {
      id: 4,
      title: "School Management System",
      subtitle: "Educational ERP Platform",
      description: "A comprehensive school management system handling student records, attendance, fee payments, staff data, and academic results.",
      category: "WEB_DEVELOPMENT",
      image: "/projects/school-management.png",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tags: ["Vue.js", "Laravel", "MySQL"],
      client: "Springfield Academy",
      year: "2024"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      subtitle: "Digital Marketing Assets",
      description: "Creative social media graphics and promotional materials for a product launch campaign across multiple platforms.",
      category: "GRAPHIC_DESIGN",
      image: "/images/projects/social-media-campaign.png",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      tags: ["Social Media", "Campaigns", "Creative"],
      client: "BrandBoost Agency",
      year: "2024"
    },
  ];



  // Calculate filter counts dynamically
  const getFilterCounts = () => {
    const counts = {
      ALL: projects.length,
      WEB_DEVELOPMENT: projects.filter(p => p.category === 'WEB_DEVELOPMENT').length,
      MOBILE_APPS: projects.filter(p => p.category === 'MOBILE_APPS').length,
      GRAPHIC_DESIGN: projects.filter(p => p.category === 'GRAPHIC_DESIGN').length
    }
    return counts
  }

  const filterCounts = getFilterCounts()

  const filters = [
    { id: 'ALL', label: 'ALL', count: filterCounts.ALL },
    { id: 'WEB_DEVELOPMENT', label: 'WEB DEVELOPMENT', count: filterCounts.WEB_DEVELOPMENT },
    { id: 'MOBILE_APPS', label: 'MOBILE APPS', count: filterCounts.MOBILE_APPS },
    { id: 'GRAPHIC_DESIGN', label: 'GRAPHIC DESIGN', count: filterCounts.GRAPHIC_DESIGN }
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
        {/* <div className={styles.loadMoreSection}>
          <p className={styles.loadMoreText}>
            Want to see more of our work?
          </p>
          <Link href="/projects" className={styles.loadMoreButton}>
            View All Projects
            <svg className={styles.buttonIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default Portfolio