import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { staggerContainer, staggerItem } from '../animations/variants';
import { hackathonData } from '../data/personal';

export default function Hackathon() {
  return (
    <>
      <div className="container">
        <div className="hackathon-hero">
          <ScrollReveal>
            <span className="hackathon-hero__badge">🎯 First Hackathon</span>
            <h2 className="heading-display">MY FIRST<br />HACKATHON</h2>
            <p className="text-body--lg" style={{ marginTop: 'var(--space-md)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              {hackathonData.description}
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          className="hackathon-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {hackathonData.sections.map((section, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div variants={staggerItem} className="hackathon-section">
                <h3 className="hackathon-section__title">
                  {section.icon} {section.title}
                </h3>
                <p className="hackathon-section__text">{section.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </>
  );
}
