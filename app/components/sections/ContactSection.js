'use client'

import { useState } from 'react'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
    services: []
  })

  const services = [
    'Custom Website Development',
    'E-Commerce Development',
    'Mobile App Development',
    'Software Development for Startups',
    'Business Automation Solutions',
    'IT Solutions Consulting',
    'Graphic Design Services',
    'Digital Marketing Solutions'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className={styles.contactSection}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>📞 CONTACT US</span>
          </div>
          <h2 className={styles.title}>
            Your Ideas, Our Expertise —<br />
            Let's Connect with Our Experts
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's build something amazing together!<br />
            Fill out the form below, and our team will get back to you soon. 🚀
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Left Side - Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactTitle}>Dial & Connect</h3>
                  <p className={styles.contactText}>+91 96692 31006 | +91 94790 47655</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactTitle}>Send Queries</h3>
                  <p className={styles.contactText}>info@myhraglobal.com | projects@myhraglobal.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactTitle}>Visit Us</h3>
                  <p className={styles.contactText}>
                    Patna, Bihar, India<br />
                    Business Hub - 800001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Get in touch</h3>
                <p className={styles.formSubtitle}>If you want to know more, contact us?</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.inputIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Remarks"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows={4}
                  />
                </div>

                <div className={styles.servicesSection}>
                  <h4 className={styles.servicesTitle}>Choose Your Service Preference</h4>
                  <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                      <label key={index} className={styles.serviceItem}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className={styles.serviceCheckbox}
                        />
                        <span className={styles.serviceLabel}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                  <svg className={styles.submitIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection