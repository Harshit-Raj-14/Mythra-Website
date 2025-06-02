'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

    //for seperate pages link
  // const navItems = [
  //   { name: 'Home', href: '/' },
  //   { 
  //     name: 'Services', 
  //     href: '/services',
  //     dropdown: [
  //       { name: 'Web Development', href: '/services/web-development' },
  //       { name: 'Mobile Apps', href: '/services/mobile-apps' },
  //       { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
  //       { name: 'AI & Machine Learning', href: '/services/ai-ml' }
  //     ]
  //   },
  //   { name: 'Projects', href: '/projects' },
  //   { name: 'About', href: '/about' },
  //   { name: 'Contact', href: '/contact' }
  // ]

  //for navigating to the same section on homepage
  const navItems = [
    { name: 'Home', href: '#hero' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Cloud Solutions', href: '#services' },
        { name: 'AI & Machine Learning', href: '#services' }
      ]
    },
    { name: 'About', href: '#goals-section' },
    { name: 'Portfolio', href: '#portfolio-section' },
    { name: 'Testimonials', href: '#testimonials-section' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>M</span>
            </div>
            <div className={styles.logoContent}>
              <span className={`${styles.companyName} ${isScrolled ? styles.scrolledText : ''}`}>
                Myhra Global
              </span>
              <span className={`${styles.tagline} ${isScrolled ? styles.scrolledTagline : ''}`}>
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <div key={item.name} className={styles.navItem}>
                {item.dropdown ? (
                  <div className={styles.dropdown}>
                    <button
                      className={`${styles.navLink} ${isScrolled ? styles.scrolledLink : ''}`}
                      onClick={() => handleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                    
                    <div className={`${styles.dropdownMenu} ${activeDropdown === item.name ? styles.dropdownVisible : ''}`}>
                      <div className={styles.dropdownContent}>
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className={styles.dropdownLink}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isScrolled ? styles.scrolledLink : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link href="#contact" className={styles.ctaButton}>
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`${styles.mobileToggle} ${isScrolled ? styles.scrolledToggle : ''}`}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 6-12 12"/>
                <path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            {navItems.map((item) => (
              <div key={item.name} className={styles.mobileNavItem}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className={styles.mobileNavLink}
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={`${styles.mobileChevron} ${activeDropdown === item.name ? styles.mobileChevronRotated : ''}`} 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className={styles.mobileDropdown}>
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className={styles.mobileDropdownLink}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className={styles.mobileCta}>
              <Link
                href="/contact"
                className={styles.mobileCtaButton}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar