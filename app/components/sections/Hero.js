'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    { icon: '💻', text: 'Web Development' },
    { icon: '📱', text: 'Mobile Apps' },
    { icon: '☁️', text: 'Graphic Design' },
    { icon: '🧠', text: 'Content Writing' }
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

            {/* CTA Buttons */}
            <div className={styles.ctaSection}>
              <Link href="#contact" className={styles.primaryButton}>
                <span>Get in Touch</span>
                <svg className={styles.arrowIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
              
              <a
                href="https://www.canva.com/design/DAGpY7GGpPA/HBzkUeS4JEGpL1f2ZIyEJQ/view?utm_content=DAGpY7GGpPA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h09cf44222f"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }} 
              >
                <button className={styles.secondaryButton}>
                  <svg
                    className={styles.downloadIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Brochure</span>
                </button>
              </a>

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
                <div className={styles.cardIcon}>🛡️</div>
                <h3 className={styles.cardTitle}>Trusted Partner</h3>
                <p className={styles.cardText}>5+ Years of Excellence</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card2}`}>
                <div className={styles.cardIcon}>⚡</div>
                <h3 className={styles.cardTitle}>Fast Delivery</h3>
                <p className={styles.cardText}>On-Time, Every Time</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card3}`}>
                <div className={styles.cardIcon}>💰</div>
                <h3 className={styles.cardTitle}>Cost Effective</h3>
                <p className={styles.cardText}>Best Value for Money</p>
              </div>

              <div className={`${styles.floatingCard} ${styles.card4}`}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Results Driven</h3>
                <p className={styles.cardText}>Your Success is Our Goal</p>
              </div>

              {/* Central Element */}
              <div className={styles.centralElement}>
                <div className={styles.centralCircle}>
                  <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={60}
                    height={60}
                    className={styles.centralLogo}
                  />
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