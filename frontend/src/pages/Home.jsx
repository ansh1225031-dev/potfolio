import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import ProjectVisual from '../components/ProjectVisual';
import { personalInfo } from '../data/personal';
import { getFeaturedProjects } from '../data/projects';
import { staggerContainer, heroTitleVariant } from '../animations/variants';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="hero">
        <div className="hero__content container">
          <div className="text-label">// PORTFOLIO 2025</div>
          <motion.h1
            className="hero__title"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="hero__title-line">
              <motion.span variants={heroTitleVariant} className="heading-hero">I'M</motion.span>
            </div>
            <div className="hero__title-line">
              <motion.span variants={heroTitleVariant} className="heading-hero heading-serif">ANSH</motion.span>
            </div>
            <div className="hero__title-line">
              <motion.span variants={heroTitleVariant} className="heading-hero">KAPOOR</motion.span>
            </div>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <button onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="btn btn--primary">VIEW MY WORK <span className="arrow">→</span></button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="btn btn--outline">LET'S CONNECT</button>
            <a href="/assets/Ansh_Kapoor_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">VIEW RESUME</a>
          </motion.div>
        </div>

        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">SCROLL</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      <div className="home-section container">
        <ScrollReveal>
          <div className="home-section__header">
            <div>
              <div className="text-label">// FEATURED CASE STUDIES</div>
              <h2 className="heading-md" style={{ marginTop: '0.3em' }}>Selected Work</h2>
            </div>
            <button onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="btn btn--ghost">View All <span className="arrow">→</span></button>
          </div>
        </ScrollReveal>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <TiltCard maxTilt={3} scale={1.01}>
                <Link to={`/projects/${project.id}`} className="featured-project" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="featured-project__visual" style={{ padding: 0 }}>
                    <ProjectVisual id={project.id} />
                  </div>
                  <div>
                    <div className="featured-project__number">{project.number}</div>
                    <h3 className="featured-project__title">{project.title}</h3>
                    <p className="featured-project__desc">{project.shortDesc}</p>
                    <div className="featured-project__techs">
                      {project.techs.map(tech => (
                        <span key={tech} className="pill">{tech}</span>
                      ))}
                    </div>
                    <div className="featured-project__cta">
                      VIEW CASE STUDY <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
