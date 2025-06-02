'use client'

import { useState, useEffect } from 'react'
import styles from './Goals.module.css'

const Goals = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('goals-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const goals = [
    {
      id: 1,
      icon: "💡",
      title: "Innovative Solutions at One Place",
      description: "We bring together cutting-edge technology and creative thinking to deliver comprehensive digital solutions under one roof.",
      color: "cyan"
    },
    {
      id: 2,
      icon: "🎯",
      title: "Attention to Details",
      description: "Every pixel, every line of code, and every user interaction is carefully crafted to ensure perfection in execution.",
      color: "blue"
    },
    {
      id: 3,
      icon: "📈",
      title: "Result Driven Service",
      description: "Our focus is on delivering measurable results that drive your business growth and exceed your expectations.",
      color: "green"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Consistent Client Support",
      description: "We provide 24/7 support and maintain long-term partnerships to ensure your continued success and satisfaction.",
      color: "red"
    }
  ]

  return (
    <section id="goals-section" className={styles.goals}>
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>🎯 Our Mission</span>
            </div>
        </div>
        <div className={styles.content}>
          {/* Left Content - Illustration */}
          <div className={styles.leftContent}>
            <div className={styles.header}>
              {/* <div className={styles.badge}>
                <span className={styles.badgeText}>🎯 Our Mission</span>
              </div> */}
              <h2 className={styles.title}>
                Reasons To Count On Us
              </h2>
              <p className={styles.subtitle}>
                We are goal-driven in converting innovative ideas into real-life business solutions that drive success and growth.
              </p>
            </div>
            <div className={styles.illustrationContainer}>
              {/* Main Illustration Elements */}
              <div className={styles.raceTrack}>
                <div className={styles.trackLine}></div>
                <div className={styles.trackLine}></div>
                <div className={styles.trackLine}></div>
              </div>
              
              {/* Finish Flag */}
              <div className={styles.finishFlag}>
                <div className={styles.flagPole}></div>
                <div className={styles.flag}>
                  <div className={styles.flagPattern}></div>
                </div>
              </div>

              {/* Runner Character */}
              <div className={`${styles.runner} ${isVisible ? styles.runnerAnimation : ''}`}>
                <div className={styles.runnerBody}>
                  <div className={styles.runnerHead}></div>
                  <div className={styles.runnerTorso}></div>
                  <div className={styles.runnerArms}>
                    <div className={styles.runnerArm}></div>
                    <div className={styles.runnerArm}></div>
                  </div>
                  <div className={styles.runnerLegs}>
                    <div className={styles.runnerLeg}></div>
                    <div className={styles.runnerLeg}></div>
                  </div>
                </div>
                <div className={styles.megaphone}>
                  <div className={styles.megaphoneBase}></div>
                  <div className={styles.megaphoneTop}></div>
                </div>
              </div>

              {/* Geometric Shapes */}
              <div className={styles.geometricShapes}>
                <div className={`${styles.shape} ${styles.triangle1}`}></div>
                <div className={`${styles.shape} ${styles.triangle2}`}></div>
                <div className={`${styles.shape} ${styles.circle1}`}></div>
                <div className={`${styles.shape} ${styles.rectangle1}`}></div>
                <div className={`${styles.shape} ${styles.diamond1}`}></div>
              </div>

              {/* Floating Elements */}
              <div className={styles.floatingElements}>
                <div className={`${styles.floatingElement} ${styles.element1}`}>💻</div>
                <div className={`${styles.floatingElement} ${styles.element2}`}>🚀</div>
                <div className={`${styles.floatingElement} ${styles.element3}`}>⚡</div>
                <div className={`${styles.floatingElement} ${styles.element4}`}>🎯</div>
              </div>
            </div>
          </div>

          {/* Right Content - Goals List */}
          <div className={styles.rightContent}>
            <div className={styles.goalsList}>
              {goals.map((goal, index) => (
                <div
                  key={goal.id}
                  className={`${styles.goalItem} ${styles[`goal${goal.color}`]} ${
                    isVisible ? styles.goalVisible : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.goalIcon}>
                    <span className={styles.iconEmoji}>{goal.icon}</span>
                  </div>
                  <div className={styles.goalContent}>
                    <h3 className={styles.goalTitle}>{goal.title}</h3>
                    <p className={styles.goalDescription}>{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div className={styles.ctaSection}>
              <a href="/about" className={styles.ctaButton}>
                Learn More About Us
                <svg className={styles.ctaIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgShape} ${styles.bgShape1}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape2}`}></div>
        <div className={`${styles.bgShape} ${styles.bgShape3}`}></div>
      </div>
    </section>
  )
}

export default Goals