'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "CEO, TechStart Solutions",
      image: "/images/testimonials/rajesh-kumar.jpg",
      quote: "Myhra Global Technologies transformed our digital presence completely. Their web development team created an outstanding e-commerce platform that increased our sales by 300%. Professional, reliable, and innovative!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Founder, Creative Studio",
      image: "/images/testimonials/priya-sharma.jpg",
      quote: "The graphic design work they delivered was beyond our expectations. From our brand identity to marketing materials, everything was crafted with attention to detail. Highly recommend their creative services!",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "Director, HealthCare Plus",
      image: "/images/testimonials/amit-patel.jpg",
      quote: "Our mobile app project was delivered on time and within budget. The team's expertise in React Native helped us launch across both iOS and Android platforms simultaneously. Excellent communication throughout!",
      rating: 5
    },
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Marketing Head, GlobalTech",
      image: "/images/testimonials/sarah-johnson.jpg",
      quote: "Their digital marketing strategies helped us reach our target audience effectively. Our social media engagement increased by 400% and lead generation improved significantly. True professionals!",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Chen",
      title: "CTO, FinanceFlow",
      image: "/images/testimonials/michael-chen.jpg",
      quote: "The software solution they developed streamlined our entire workflow. Clean code, robust architecture, and seamless integration with our existing systems. Couldn't be happier with the results!",
      rating: 5
    },
    {
      id: 6,
      name: "Anjali Desai",
      title: "Owner, FoodieDelight",
      image: "/images/testimonials/anjali-desai.jpg",
      quote: "From concept to launch, they handled our food delivery app project brilliantly. The user interface is intuitive and the backend is solid. Our customers love the app experience!",
      rating: 5
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
          <div className={styles.navigationDots}>
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.navDot} ${
                  currentSlide === index ? styles.activeDot : ''
                }`}
              />
            ))}
          </div>

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