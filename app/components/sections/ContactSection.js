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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const services = [
    'Custom Website Development',
    'E-Commerce Development',
    'Mobile App Development',
    'Software Development for Schools, businesses, etc.',
    'Business Automation Solutions',
    'Graphic Design Services'
  ]

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation function for 10 digits
  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone.replace(/\D/g, '')) // Remove non-digits and check if exactly 10 digits
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // For phone input, only allow numbers and limit to 10 digits
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '') // Remove all non-digit characters
      if (numbersOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: numbersOnly
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name')
      return
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number')
      return
    }

    if (!isValidPhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit phone number')
      return
    }

    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address')
      return
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare the email content
      const selectedServices = formData.services.length > 0 
        ? formData.services.join(', ') 
        : 'No specific services selected'

      const emailContent = `
New Contact Form Submission from Mythra Global Website

Contact Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- City: ${formData.city || 'Not provided'}

Message/Remarks:
${formData.message || 'No message provided'}

Requested Services:
${selectedServices}

Submission Date: ${new Date().toLocaleString()}
      `.trim()

      // Create a hidden form and submit it directly to FormSubmit.co
      const form = document.createElement('form')
      form.action = 'https://formsubmit.co/mythra.global@gmail.com'
      form.method = 'POST'
      form.style.display = 'none'

      // Add all form fields
      const fields = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city || 'Not provided',
        message: emailContent,
        subject: `New Contact Form Submission from ${formData.name}`,
        _next: window.location.href,
        _captcha: 'false',
        _template: 'table'
      }

      Object.keys(fields).forEach(key => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = fields[key]
        form.appendChild(input)
      })

      // Add form to document, submit, then remove
      document.body.appendChild(form)
      
      // Submit the form
      form.submit()

      // Since we can't wait for the response with this method,
      // we'll assume success after a short delay
      setTimeout(() => {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          message: '',
          services: []
        })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
        
        // Remove the form
        document.body.removeChild(form)
      }, 1000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage('Failed to send message. Please try again later.')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
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
        </div>

        <div className={styles.contactContent}>
          {/* Left Side - Contact Information & Heading */}
          <div className={styles.contactInfo}>
            <div className={styles.leftContent}>
              <h2 className={styles.title}>
                Your Ideas, Our Expertise —<br />
                Let's Connect with Our Experts
              </h2>
              <p className={styles.subtitle}>
                Have a project in mind? Let's build something amazing together!<br />
                Fill out the form below, and our team will get back to you soon. 🚀
              </p>
            </div>
            <br></br>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactTitle}>Dial & Connect</h3>
                  <p className={styles.contactText}>+91 7856008381 |
                    <br></br>+91 6202275294</p>
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
                  <p className={styles.contactText}>mythra.global@gmail.com |
                    <br></br>priyanshu.mythra@gmail.com</p>
                </div>
              </div>

              {/* <div className={styles.contactItem}>
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
              </div> */}
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
                      disabled={isSubmitted}
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
                      placeholder="Your Phone No.*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                      disabled={isSubmitted}
                      maxLength="10"
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
                      disabled={isSubmitted}
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
                      disabled={isSubmitted}
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
                    disabled={isSubmitted}
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
                          disabled={isSubmitted}
                        />
                        <span className={styles.serviceLabel}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <div style={{
                    color: '#22c55e',
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '16px',
                    padding: '12px',
                    backgroundColor: '#dcfce7',
                    borderRadius: '8px',
                    border: '1px solid #22c55e'
                  }}>
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <div style={{
                    color: '#ef4444',
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '16px',
                    padding: '12px',
                    backgroundColor: '#fef2f2',
                    borderRadius: '8px',
                    border: '1px solid #ef4444'
                  }}>
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <svg className={styles.submitIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                    </>
                  ) : isSubmitted ? (
                    <>
                      Message Sent!
                      <svg className={styles.submitIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className={styles.submitIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </>
                  )}
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