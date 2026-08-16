import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { staggerContainer, staggerItem } from '../animations/variants';
import { achievementsData } from '../data/personal';

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed': return 'pill--status-completed';
    case 'in progress': return 'pill--status-progress';
    case 'planned':
    case 'coming soon': return 'pill--status-planned';
    default: return 'pill--status-planned';
  }
};

export default function Achievements() {
  return (
    <div className="container">
      <div className="achievements-hero">
        <ScrollReveal>
          <h2 className="heading-display">ACHIEVEMENTS</h2>
          <p className="text-body--lg" style={{ marginTop: 'var(--space-md)' }}>
            Milestones, learning progress, and goals on my development journey.
          </p>
        </ScrollReveal>
      </div>

      {achievementsData.map((section, catIndex) => (
        <ScrollReveal key={catIndex} delay={catIndex * 0.1}>
          <div className="achievement-section">
            <h3 className="achievement-section__title">
              {section.icon} {section.category}
            </h3>

            <motion.div
              className="achievement-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              {section.items.map((item, itemIndex) => (
                <motion.div key={itemIndex} variants={staggerItem} className="achievement-card">
                  <div className="achievement-card__icon">{item.icon}</div>
                  <h4 className="achievement-card__title">{item.title}</h4>
                  <p className="achievement-card__desc">{item.desc}</p>
                  <div className="achievement-card__status">
                    <span className={`pill pill--status ${getStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
