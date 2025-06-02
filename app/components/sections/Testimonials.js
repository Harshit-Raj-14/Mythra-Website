'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Pradeep Kumar Aggarwal",
      title: "Business Owner, Kanha Enterprises",
      image: "/testimonials/pradeep.jpg",
      quote: "Mythra Global Technologies built an efficient inventory management and billing invoice generation system tailored for our pharmaceutical orthopaedic. It streamlined our operations, reduced manual errors, and improved overall productivity. Also made developed an effective sales analytics report for my business. Very helpful and Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Deepak Kumar Baranwal",
      title: "Baranwal Ekta Sanstha, Mumbai",
      image: "/testimonials/deepak.jpg",
      quote: "Mythra Global Technologies designed a beautiful and functional website for Baranwal Ekta Sanstha, Mumbai. It perfectly showcases our community’s rich heritage, supports matrimony profiles, dharmshala bookings, and event management—all in one platform. A truly transformative digital solution for our samaj.",      
      rating: 5
    },
    {
      id: 3,
      name: "Priyanshu Kumar",
      title: "NGO Worker",
      image: "/testimonials/priyanshu.jpg",
      quote: "Mythra Global Technologies created a powerful and impactful website for our NGO, Quit for Good. With features like a pledge page, seamless donation system, and integrated payment gateways, they helped us reach and engage thousands in the fight against tobacco. Their dedication truly amplified our mission.",      rating: 5
    }
  ]

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * itemsPerSlide
    return testimonials.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section id="testimonials-section" className={styles.testimonials}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>TESTIMONIALS</h2>
          <div className={styles.subtitle}>
            <span className={styles.subtitleLabel}>WHAT</span>
            <span className={styles.subtitleHighlight}>Customers Say</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsContainer}>
          <div 
            className={styles.testimonialsGrid}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={styles.slide}>
                {testimonials
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`${styles.testimonialCard} ${isVisible ? styles.cardVisible : ''}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Quote Icon */}
                      <div className={styles.quoteIcon}>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                          <path d="M0 10.556C0 4.728 2.6 0 8.4 0v3.556c-2.533 0-3.6 1.778-3.6 3.555h3.6V20H0V10.556zm12 0C12 4.728 14.6 0 20.4 0v3.556c-2.533 0-3.6 1.778-3.6 3.555h3.6V20H12V10.556z" fill="#22C55E"/>
                        </svg>
                      </div>

                      {/* Profile Image */}
                      <div className={styles.profileContainer}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className={styles.profileImage}
                        />
                      </div>

                      {/* Testimonial Content */}
                      <div className={styles.testimonialContent}>
                        <p className={styles.quote}>{testimonial.quote}</p>
                        
                        {/* Rating Stars */}
                        <div className={styles.rating}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className={styles.star} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>

                        {/* Client Info */}
                        <div className={styles.clientInfo}>
                          <h4 className={styles.clientName}>{testimonial.name}</h4>
                          <p className={styles.clientTitle}>{testimonial.title}</p>
                        </div>
                      </div>

                      {/* Decorative Dots */}
                      <div className={styles.decorativeDots}>
                        <div className={styles.dotGrid}>
                          {[...Array(9)].map((_, i) => (
                            <span key={i} className={styles.dot}></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          {/* Navigation Dots */}
          {/* <div className={styles.navigationDots}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.navDot} ${
                  currentSlide === index ? styles.activeDot : ''
                }`}
              />
            ))}
          </div> */}

          {/* Arrow Navigation */}
          <div className={styles.arrowNavigation}>
            <button onClick={prevSlide} className={styles.navArrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button onClick={nextSlide} className={styles.navArrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials