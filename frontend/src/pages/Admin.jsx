import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

const adminCards = [
  { icon: '📁', title: 'Manage Projects', desc: 'Add, edit, and delete portfolio projects' },
  { icon: '⚡', title: 'Manage Skills', desc: 'Update technical skills and proficiency levels' },
  { icon: '🏆', title: 'Manage Achievements', desc: 'Track and update milestones' },
  { icon: '✉️', title: 'Contact Messages', desc: 'View messages from the contact form' },
];

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Authentication not yet implemented. This is a protected area.');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Admin — Ansh Kapoor Portfolio</title>
      </Helmet>

      <div className="page">
        <div className="container">
          <section className="admin-hero">
            <h1 className="heading-lg">ADMIN</h1>
          </section>

          <div className="admin-login">
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🔒</div>
            <h2 className="admin-login__title">Admin Dashboard</h2>
            <p className="admin-login__desc">Authentication required. This area is protected.</p>

            <form onSubmit={handleLogin} className="contact-form" style={{ textAlign: 'left' }}>
              <div className="form-group">
                <label className="form-group__label" htmlFor="admin-email">Email</label>
                <input
                  className="form-group__input"
                  type="email"
                  id="admin-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-group__label" htmlFor="admin-password">Password</label>
                <input
                  className="form-group__input"
                  type="password"
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                Login
              </button>
            </form>
          </div>

          <div className="admin-grid">
            {adminCards.map((card, i) => (
              <div key={i} className="admin-card">
                <div className="admin-card__icon">{card.icon}</div>
                <h3 className="admin-card__title">{card.title}</h3>
                <p className="admin-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
