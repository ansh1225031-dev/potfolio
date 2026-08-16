import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/personal';
import { staggerContainer, staggerItem } from '../animations/variants';

const heroWords = [
  { text: 'CURIOUS', serif: false },
  { text: 'BUILDING', serif: true },
  { text: 'LEARNING', serif: false },
];

export default function About() {
  return (
    <>
      <div className="about-hero container">
        <ScrollReveal>
          <motion.div
            className="about-hero__words"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {heroWords.map((word) => (
              <motion.span
                key={word.text}
                className={`about-hero__word ${word.serif ? 'about-hero__word--serif' : ''}`}
                variants={staggerItem}
              >
                {word.text}<span className="dot">.</span>
              </motion.span>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>

      <div className="container">
        <div className="about-content">
          <ScrollReveal>
            <div className="about-content__text">
              {personalInfo.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="about-content__visual">
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="about-stat">
                  <div className="about-stat__value">{stat.value}</div>
                  <div className="about-stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="about-interests container">
        <ScrollReveal>
          <h2 className="heading-sm">What Drives Me</h2>
          <div className="about-interests__grid">
            {personalInfo.interests.map((interest, index) => (
              <motion.div
                key={index}
                className="about-interest-card"
                whileHover={{ y: -4, borderColor: 'var(--blue)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="about-interest-card__icon">{interest.icon}</div>
                <div className="about-interest-card__title">{interest.title}</div>
                <div className="about-interest-card__desc">{interest.desc}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
