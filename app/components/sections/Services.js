'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Services.module.css'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      title: "Website Designing & Development",
      subtitle: "Custom Web Solutions",
      description: "Create stunning, responsive websites that drive results. From simple landing pages to complex web applications, we build digital experiences that engage your audience.",
      icon: "🌐",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "Performance Focused",
        "Mobile-First Approach"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Mobile App Development",
      subtitle: "iOS & Android Apps",
      description: "Transform your ideas into powerful mobile applications. We develop native and cross-platform apps that deliver exceptional user experiences across all devices.",
      icon: "📱",
      features: [
        "Native iOS & Android",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      color: "purple"
    },
    {
      id: 3,
      title: "Graphic Designing",
      subtitle: "Visual Brand Identity",
      description: "Elevate your brand with stunning visual designs. From social media graphics to outdoor advertisements, we create designs that capture attention and communicate your message.",
      icon: "🎨",
      features: [
        "Social Media Design",
        "Pamphlet/Flyer Design",
        "Business Card Design",
        "Outdoor Advertisement",
        "Brand Identity"
      ],
      color: "green"
    },
    {
      id: 4,
      title: "Software Development",
      subtitle: "Custom Software Solutions",
      description: "Build powerful software solutions tailored to your business needs. From desktop applications to enterprise software, we deliver scalable and efficient solutions.",
      icon: "💻",
      features: [
        "Custom Software",
        "Desktop Applications",
        "Enterprise Solutions",
        "System Integration",
        "Legacy Modernization"
      ],
      color: "orange"
    },
    {
      id: 5,
      title: "E-commerce Development",
      subtitle: "Online Store Solutions",
      description: "Launch your online business with robust e-commerce platforms. We create secure, scalable online stores that drive sales and enhance customer experience.",
      icon: "🛒",
      features: [
        "Custom E-commerce",
        "Payment Integration",
        "Inventory Management",
        "Multi-vendor Support",
        "Mobile Commerce"
      ],
      color: "cyan"
    },
    {
      id: 6,
      title: "Digital Marketing",
      subtitle: "Content & Strategy",
      description: "Amplify your digital presence with strategic marketing solutions. We create engaging content and implement data-driven strategies to grow your brand online.",
      icon: "📈",
      features: [
        "Content Creation",
        "Social Media Strategy",
        "SEO & SEM",
        "Analytics & Reporting",
        "Brand Awareness"
      ],
      color: "red"
    }
  ]

  const handleServiceClick = (index) => {
    setActiveService(index)
  }

  return (
    <section id="services" className={styles.services}>
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
            <span className={styles.badgeText}>🚀 Our Expertise</span>
          </div>
          <h2 className={styles.title}>
            OUR <span className={styles.titleHighlight}>SERVICES</span>
          </h2>
          <p className={styles.subtitle}>
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${styles[`card${service.color}`]} ${
                activeService === index ? styles.activeCard : ''
              }`}
              onClick={() => handleServiceClick(index)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.serviceIcon}>
                  <span>{service.icon}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
              
              <div className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <div key={idx} className={styles.feature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.cardFooter}>
                <Link href="#contact" className={styles.serviceButton}>
                  Get Started
                  <svg className={styles.buttonIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h3>
            <p className={styles.ctaDescription}>
              Let's discuss your project and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="#contact" className={styles.primaryCta}>
                Start Your Project
              </Link>
              <Link href="#portfolio-section" className={styles.secondaryCta}>
                View Our Work
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className={styles.statsSection}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Services Offered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>Our Work Process</h3>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Discovery</h4>
                <p className={styles.stepDescription}>
                  We understand your goals, requirements, and vision for the project.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Strategy</h4>
                <p className={styles.stepDescription}>
                  We create a detailed plan and strategy tailored to your needs.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Development</h4>
                <p className={styles.stepDescription}>
                  Our team brings your vision to life with cutting-edge technology.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Launch</h4>
                <p className={styles.stepDescription}>
                  We deploy your solution and provide ongoing support for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services