'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    { icon: '💻', text: 'Web Development' },
    { icon: '📱', text: 'Mobile Apps' },
    { icon: '☁️', text: 'Cloud Solutions' },
    { icon: '🧠', text: 'AI & ML' }
  ]

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.background}>
        {/* Animated geometric shapes */}
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        
        {/* Grid pattern overlay */}
        <div className={styles.gridPattern}></div>
        
        {/* Gradient overlay */}
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Badge */}
            {/* <div className={styles.badge}>
              <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <span className={styles.badgeText}>Trusted by 50+ Global Clients</span>
            </div> */}

            {/* Main Heading */}
            <div className={styles.headingSection}>
              <h1 className={styles.mainHeading}>
                Transform Your
                <span className={styles.gradientText}>
                  Digital Future
                </span>
              </h1>
              <p className={styles.subHeading}>
                with Cutting-Edge Technology Solutions
              </p>
            </div>

            {/* Description */}
            <p className={styles.description}>
              At Mythra Global Technologies, we craft innovative digital solutions that propel your business into the future. From web development to AI integration, we're your trusted technology partner.
            </p>

            {/* Service Rotation */}
            {/* <div className={styles.serviceRotation}>
              <span className={styles.rotationLabel}>Specialized in:</span>
              <div className={styles.rotationContainer}>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${styles.serviceItem} ${
                      index === currentSlide ? styles.serviceActive : ''
                    }`}
                  >
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <span className={styles.serviceText}>{service.text}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className={styles.ctaSection}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>Start Your Project</span>
                <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
              
              <button className={styles.secondaryButton}>
                <svg className={styles.playIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="6,3 20,12 6,21"/>
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {stat.number}
                  </div>
                  <div className={styles.statLabel}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className={styles.rightContent}>
            <div className={styles.visualContainer}>
              {/* Floating Cards */}
              <div className={`${styles.floatingCard} ${styles.card1}`}>
                <div className={styles.cardIcon}>💻</div>
                <h3 className={styles.cardTitle}>Clean Code</h3>
                <p className={styles.cardText}>Scalable & Maintainable</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card2}`}>
                <div className={styles.cardIcon}>📱</div>
                <h3 className={styles.cardTitle}>Mobile First</h3>
                <p className={styles.cardText}>Responsive Design</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card3}`}>
                <div className={styles.cardIcon}>☁️</div>
                <h3 className={styles.cardTitle}>Cloud Ready</h3>
                <p className={styles.cardText}>Scalable Infrastructure</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card4}`}>
                <div className={styles.cardIcon}>🧠</div>
                <h3 className={styles.cardTitle}>AI Powered</h3>
                <p className={styles.cardText}>Intelligent Solutions</p>
              </div>

              {/* Central Element */}
              <div className={styles.centralElement}>
                <div className={styles.centralCircle}>
                  <span className={styles.centralText}>MGT</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className={styles.connectingLines} viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 50 Q 150 100 250 80"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.animatedPath}
                />
                <path
                  d="M 300 150 Q 200 200 100 250"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.animatedPath}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero