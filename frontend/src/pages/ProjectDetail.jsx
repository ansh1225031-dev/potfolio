import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ProjectVisual from '../components/ProjectVisual';
import { getProjectById, projects } from '../data/projects';

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed': return 'pill--status-completed';
    case 'In Progress': return 'pill--status-progress';
    default: return 'pill--status-planned';
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <div className="not-found">
          <h2 className="heading-lg">Project Not Found</h2>
          <p className="text-body--lg" style={{ margin: 'var(--space-md) 0 var(--space-xl)' }}>
            This project doesn't exist or has been removed.
          </p>
          <Link to="/projects" className="btn btn--primary">← Back to Projects</Link>
        </div>
      </PageTransition>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== id).slice(0, 2);

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} — Ansh Kapoor</title>
        <meta name="description" content={project.shortDesc} />
      </Helmet>

      <div className="project-detail">
        <div className="container">
          <section className="project-detail__hero">
            <Link to="/projects" className="project-detail__back">
              ← Back to Projects
            </Link>

            <ScrollReveal>
              <div className="project-detail__number">{project.number}</div>
              <h1 className="project-detail__title">{project.title}</h1>

              <div className="project-detail__meta">
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Status</span>
                  <span className={`pill pill--status ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Type</span>
                  <span className="project-detail__meta-value">Web Application</span>
                </div>
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Year</span>
                  <span className="project-detail__meta-value">2025</span>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <ScrollReveal delay={0.2}>
            <div className="project-detail__visual" style={{ padding: 0 }}>
              <ProjectVisual id={project.id} />
            </div>
          </ScrollReveal>

          <div className="project-detail__body">
            <main>
              {project.overview && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">Overview</h3>
                    <p>{project.overview}</p>
                  </section>
                </ScrollReveal>
              )}

              {project.problem && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">Problem</h3>
                    <p>{project.problem}</p>
                  </section>
                </ScrollReveal>
              )}

              {project.solution && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">Solution</h3>
                    <p>{project.solution}</p>
                  </section>
                </ScrollReveal>
              )}

              {project.features?.length > 0 && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">Key Features</h3>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {project.challenges && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">Challenges</h3>
                    <p>{project.challenges}</p>
                  </section>
                </ScrollReveal>
              )}

              {project.learned && (
                <ScrollReveal>
                  <section className="project-detail__section">
                    <h3 className="project-detail__section-title">What I Learned</h3>
                    <p>{project.learned}</p>
                  </section>
                </ScrollReveal>
              )}
            </main>

            <aside className="project-detail__sidebar">
              <div className="project-detail__sidebar-section">
                <h3 className="project-detail__sidebar-title">Tech Stack</h3>
                <div className="project-detail__tech-list">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-detail__sidebar-section">
                <h3 className="project-detail__sidebar-title">Links</h3>
                <div className="project-detail__links">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                      → GitHub Repository
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                      → Live Demo
                    </a>
                  )}
                  {(!project.github || project.github === '#') && (!project.live || project.live === '#') && (
                    <span className="text-label" style={{ color: 'var(--text-tertiary)' }}>Links coming soon</span>
                  )}
                </div>
              </div>

              {project.future?.length > 0 && (
                <div className="project-detail__sidebar-section">
                  <h3 className="project-detail__sidebar-title">Future Plans</h3>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.2em' }}>
                    {project.future.map((plan, i) => (
                      <li key={i} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '0.5em' }}>{plan}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          {relatedProjects.length > 0 && (
            <ScrollReveal>
              <section className="project-detail__related">
                <h3 className="heading-sm" style={{ marginBottom: 'var(--space-lg)' }}>Other Projects</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {relatedProjects.map(p => (
                    <Link key={p.id} to={`/projects/${p.id}`} className="btn btn--outline">
                      {p.title} →
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
