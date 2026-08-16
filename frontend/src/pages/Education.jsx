import ScrollReveal from '../components/ScrollReveal';
import { educationData } from '../data/personal';

export default function Education() {
  return (
    <>
      <div className="education-hero container">
        <ScrollReveal>
          <h2 className="heading-display">EDUCATION</h2>
        </ScrollReveal>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="education-card">
            <div className="education-card__accent"></div>
            <h3 className="education-card__degree">{educationData.degree}</h3>
            <div className="education-card__institution">{educationData.institution}</div>
            <div className="education-card__details">
              <span>{educationData.shortName}</span>
              <span>Affiliated with {educationData.university}</span>
              <span>{educationData.location}</span>
              <span>{educationData.duration}</span>
              <span>{educationData.year}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="education-subjects container">
        <ScrollReveal>
          <h3 className="heading-sm">Key Subjects</h3>
          <div className="education-subjects__grid">
            {educationData.subjects.map((subject, index) => (
              <div key={index} className="education-subject">
                {subject}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
