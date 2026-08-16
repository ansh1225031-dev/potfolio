import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/personal';

export default function Contact() {
  return (
    <>
      <div className="contact-hero container">
        <ScrollReveal>
          <h2 className="heading-display">GET IN<br />TOUCH</h2>
          <p className="text-body--lg" style={{ marginTop: 'var(--space-md)', maxWidth: '500px' }}>
            Open to new opportunities, collaborations, and discussions. Feel free to reach out through any of the platforms below.
          </p>
        </ScrollReveal>
      </div>

      <div className="container" style={{ paddingBottom: '10vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)', width: '100%', maxWidth: '1000px' }}>
          
          <ScrollReveal delay={0.1}>
            <div className="contact-info__item">
              <span className="contact-info__label">Email</span>
              <span className="contact-info__value" style={{ fontSize: 'var(--text-lg)', fontWeight: '400' }}>
                <a href={`mailto:${personalInfo.email}`} className="hover-link">{personalInfo.email}</a>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="contact-info__item">
              <span className="contact-info__label">Phone</span>
              <span className="contact-info__value" style={{ fontSize: 'var(--text-lg)', fontWeight: '400' }}>
                <a href={`tel:${personalInfo.phone.replace(/[\s+]/g, '')}`} className="hover-link">{personalInfo.phone}</a>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="contact-info__item">
              <span className="contact-info__label">LinkedIn</span>
              <span className="contact-info__value" style={{ fontSize: 'var(--text-lg)', fontWeight: '400' }}>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover-link">linkedin.com/in/ansh-kapoor-1ba912378</a>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="contact-info__item">
              <span className="contact-info__label">GitHub</span>
              <span className="contact-info__value" style={{ fontSize: 'var(--text-lg)', fontWeight: '400' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover-link">github.com/ansh1225031-dev</a>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="contact-info__item">
              <span className="contact-info__label">Location</span>
              <span className="contact-info__value" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                {personalInfo.location}
              </span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
