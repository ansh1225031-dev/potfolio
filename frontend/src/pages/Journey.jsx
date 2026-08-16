import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { journeyData } from '../data/personal';

export default function Journey() {
  return (
    <>
      <div className="journey-hero container">
        <ScrollReveal>
          <h2 className="heading-display">MY<br />JOURNEY</h2>
          <p className="text-body--lg" style={{ marginTop: 'var(--space-md)' }}>
            From first lines of code to building full-stack applications
          </p>
        </ScrollReveal>
      </div>

      <div className="journey-timeline container">
        {journeyData.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="journey-item">
              <div className={`journey-item__dot ${item.active ? 'journey-item__dot--active' : ''}`}></div>
              <span className="journey-item__period">{item.period}</span>
              <h3 className="journey-item__title">{item.title}</h3>
              <p className="journey-item__desc">{item.desc}</p>
              {item.techs?.length > 0 && (
                <div className="journey-item__techs">
                  {item.techs.map((tech, i) => (
                    <span key={i} className="pill">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
