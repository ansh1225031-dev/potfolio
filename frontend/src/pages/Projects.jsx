import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { projects } from '../data/projects';

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed': return 'pill--status-completed';
    case 'In Progress': return 'pill--status-progress';
    default: return 'pill--status-planned';
  }
};

export default function Projects() {
  return (
    <>
      <div className="projects-hero container">
        <ScrollReveal>
          <div className="text-label">// SELECTED WORKS</div>
          <h2 className="heading-display" style={{ marginTop: '0.3em' }}>WORK</h2>
          <p className="text-body--lg" style={{ marginTop: 'var(--space-md)', maxWidth: '600px' }}>
            A collection of things I've built — focusing on learning, practical utility, and clean code.
          </p>
        </ScrollReveal>
      </div>

      <div className="container">
        <div className="project-list">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
              <TiltCard maxTilt={3.5} scale={1.012}>
                <Link to={`/projects/${project.id}`} className="project-card">
                  <div className="project-card__number">{project.number}</div>
                  <div className="project-card__info">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.shortDesc}</p>
                    <div className="project-card__meta">
                      {project.techs.slice(0, 4).map(tech => (
                        <span key={tech} className="pill">{tech}</span>
                      ))}
                      <span className={`pill pill--status ${getStatusClass(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="project-card__arrow">→</div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
