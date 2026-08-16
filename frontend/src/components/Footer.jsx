import { personalInfo } from '../data/personal';

const footerSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const footerMore = [
  { id: 'education', label: 'Education' },
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'achievements', label: 'Achievements' },
];

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 75;
      const y = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand-name">
              {personalInfo.name}
            </div>
            <p className="footer__brand-role">
              {personalInfo.shortRole}
            </p>
          </div>

          <div>
            <h3 className="footer__col-title">Navigate</h3>
            {footerSections.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="footer__col-link">
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <h3 className="footer__col-title">More</h3>
            {footerMore.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="footer__col-link">
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <h3 className="footer__col-title">Connect</h3>
            <a href={`mailto:${personalInfo.email}`} className="footer__col-link">
              Email
            </a>
            <span className="footer__col-link" style={{ cursor: 'default' }}>
              {personalInfo.location}
            </span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {personalInfo.name}. Built with React, Three.js & Node.js.</span>
          <button onClick={scrollToTop} className="footer__back-top" aria-label="Back to top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
