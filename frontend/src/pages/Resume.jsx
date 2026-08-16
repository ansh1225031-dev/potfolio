import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { personalInfo, educationData } from '../data/personal';
import { projects } from '../data/projects';
import { skills, skillCategories } from '../data/skills';

export default function Resume() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const resumePdfPath = '/assets/Ansh_Kapoor_Resume.pdf';

  // Group skills by category for resume display
  const groupedSkills = {};
  skillCategories.forEach(cat => {
    if (cat.id !== 'all') {
      const catSkills = skills.filter(s => s.category === cat.id);
      if (catSkills.length > 0) {
        groupedSkills[cat.label] = catSkills.map(s => s.name);
      }
    }
  });

  return (
    <>
      <Helmet>
        <title>Resume — {personalInfo.name}</title>
        <meta name="description" content="Resume of Ansh Kapoor — B.Tech CSE Student, Aspiring Full-Stack Developer." />
      </Helmet>

      <div className="resume-page-wrapper">
        <div className="container">
          <div className="resume-hero">
            <div>
              <div className="text-label">// CREDENTIALS & EXPERIENCE</div>
              <h1 className="heading-display" style={{ marginTop: '0.3em' }}>RESUME</h1>
              <p className="text-body--lg" style={{ marginTop: '0.8rem', maxWidth: '600px' }}>
                Computer Science & Engineering Student (2nd Year) · Aspiring Full-Stack Developer
              </p>
            </div>

            {/* Direct Professional Resume Actions */}
            <div className="resume-actions-group">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                id="view-resume-btn"
              >
                <span>📄</span> VIEW RESUME
              </a>
              <a
                href={resumePdfPath}
                download="Ansh_Kapoor_Resume.pdf"
                className="btn btn--outline"
                id="download-resume-btn"
              >
                <span>⬇️</span> DOWNLOAD PDF
              </a>
            </div>
          </div>

          {/* Professional Resume Glass Document Card */}
          <div className="resume-document-container" style={{ marginTop: 'var(--space-xl)' }}>
            <ScrollReveal>
              <TiltCard maxTilt={2} scale={1.008}>
                <div className="resume-document-card">
                  {/* Document Header */}
                  <div className="resume-doc-header">
                    <div className="resume-doc-name">{personalInfo.name.toUpperCase()}</div>
                    <div className="resume-doc-subtitle">
                      B.Tech Computer Science & Engineering Student | Student Developer | Aspiring Full-Stack Developer
                    </div>
                    <div className="resume-doc-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                      <span>📍 {personalInfo.location}</span>
                      <span>📞 <a href={`tel:${personalInfo.phone.replace(/[\s+]/g, '')}`}>{personalInfo.phone}</a></span>
                      <span>✉️ <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                      <span>🔗 <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                      <span>💻 <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="resume-doc-section">
                    <h3 className="resume-doc-section-title">PROFILE</h3>
                    <p className="resume-doc-text">
                      2nd-year Computer Science & Engineering student focused on programming, web development, data structures and practical software projects. Building full-stack applications with React, Node.js, Express and MongoDB while strengthening C++ and DSA foundations.
                    </p>
                  </div>

                  {/* Education Section */}
                  <div className="resume-doc-section">
                    <h3 className="resume-doc-section-title">EDUCATION</h3>
                    <div className="resume-doc-entry">
                      <div className="resume-doc-entry-top">
                        <span className="resume-doc-entry-title">{educationData.degree}</span>
                        <span className="resume-doc-entry-date">2024 – 2028</span>
                      </div>
                      <div className="resume-doc-entry-sub">
                        {educationData.institution} · {educationData.year}
                      </div>
                      <div className="resume-doc-entry-location">
                        {educationData.university} | {educationData.location}
                      </div>
                    </div>
                  </div>

                  {/* Technical Skills Section */}
                  <div className="resume-doc-section">
                    <h3 className="resume-doc-section-title">TECHNICAL SKILLS</h3>
                    <div className="resume-skills-list">
                      <div className="resume-skill-row">
                        <strong>Languages:</strong> C, C++, Python, JavaScript
                      </div>
                      <div className="resume-skill-row">
                        <strong>Frontend:</strong> HTML5, CSS3, React.js, Responsive Design
                      </div>
                      <div className="resume-skill-row">
                        <strong>Backend:</strong> Node.js, Express.js, REST APIs
                      </div>
                      <div className="resume-skill-row">
                        <strong>Databases:</strong> MySQL, SQL, MongoDB
                      </div>
                      <div className="resume-skill-row">
                        <strong>CS Fundamentals:</strong> DSA, OOP, Recursion, Sorting, Searching, Arrays, Linked Lists, Stacks, Queues
                      </div>
                      <div className="resume-skill-row">
                        <strong>Tools:</strong> Git, GitHub, VS Code, npm, Vite
                      </div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="resume-doc-section">
                    <h3 className="resume-doc-section-title">PROJECTS</h3>
                    {projects.map((project) => (
                      <div key={project.id} className="resume-doc-entry" style={{ marginBottom: '1.2rem' }}>
                        <div className="resume-doc-entry-top">
                          <span className="resume-doc-entry-title">{project.title}</span>
                          <span className="resume-doc-entry-tag">{project.techs.slice(0, 3).join(', ')}</span>
                        </div>
                        <div className="resume-doc-entry-sub">{project.techs.join(', ')}</div>
                        <ul className="resume-doc-bullets">
                          {project.features ? (
                            project.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)
                          ) : (
                            <li>{project.shortDesc}</li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Hackathon & Highlights */}
                  <div className="resume-doc-section">
                    <h3 className="resume-doc-section-title">HACKATHON & DEVELOPMENT HIGHLIGHTS</h3>
                    <ul className="resume-doc-bullets">
                      <li>
                        <strong>First Hackathon Participant</strong> – Contributed as a full-stack developer across frontend UI, backend/API integration, and database work under time constraints.
                      </li>
                      <li>
                        <strong>Version Control</strong> – Adopted Git and GitHub for code management, branching, and collaborative development.
                      </li>
                      <li>
                        <strong>Current Focus</strong> – Strengthening DSA in C++, building full-stack applications, and exploring authentication, cloud deployment, and modern developer workflows.
                      </li>
                      <li>
                        <strong>Relevant Coursework</strong> – Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Discrete Mathematics.
                      </li>
                    </ul>
                  </div>

                  {/* Bottom Actions inside Card */}
                  <div className="resume-card-bottom-actions">
                    <a href={resumePdfPath} target="_blank" rel="noopener noreferrer" className="btn btn--pill">
                      Open PDF in Full Tab ↗
                    </a>
                    <a href={resumePdfPath} download="Ansh_Kapoor_Resume.pdf" className="btn btn--pill">
                      Download Copy ↓
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
