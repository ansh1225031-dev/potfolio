import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import TechnologyIcon, { getTechnologyGlowColor } from '../components/TechnologyIcon';
import { skills, skillCategories, exploringSkills } from '../data/skills';

const getLevelClass = (level) => {
  switch (level?.toLowerCase()) {
    case 'comfortable':
      return 'skill-level-pill--comfortable';
    case 'working knowledge':
      return 'skill-level-pill--working';
    case 'currently learning':
      return 'skill-level-pill--learning';
    default:
      return 'skill-level-pill--comfortable';
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  const groupedSkills = {};
  skillCategories.forEach(cat => {
    if (cat.id !== 'all') {
      groupedSkills[cat.id] = skills.filter(s => s.category === cat.id);
    }
  });

  return (
    <>
      <div className="skills-hero container">
        <ScrollReveal>
          <div className="text-label">// EXPERTISE & TOOLKIT</div>
          <h2 className="heading-display" style={{ marginTop: '0.3em' }}>SKILLS</h2>
          <p className="text-body--lg" style={{ marginTop: 'var(--space-md)', maxWidth: '640px' }}>
            Technologies, programming languages, libraries, and foundational computer science concepts I work with.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="skills-filters" role="tablist" aria-label="Skill Categories">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`pill ${activeFilter === category.id ? 'pill--active' : ''}`}
              role="tab"
              aria-selected={activeFilter === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Skills Grid */}
      <div className="container" style={{ marginTop: 'var(--space-xl)' }}>
        <motion.div layout className="skills-grid-layout">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map(skill => {
              const glow = getTechnologyGlowColor(skill.name);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                >
                  <TiltCard maxTilt={5} scale={1.03}>
                    <div
                      className="skill-tech-card"
                      style={{ '--hover-glow': glow }}
                    >
                      {/* Logo Icon */}
                      <div className="skill-tech-card__icon-wrapper">
                        <TechnologyIcon name={skill.name} size={36} />
                      </div>

                      {/* Name & Level */}
                      <div className="skill-tech-card__info">
                        <h3 className="skill-tech-card__name">{skill.name}</h3>
                        <span className={`skill-level-pill ${getLevelClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Categorized Deep-Dive Section */}
      <div className="skills-categories container" style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="text-label" style={{ marginBottom: 'var(--space-md)' }}>// CATEGORY BREAKDOWN</div>
        <div className="skills-category-grid">
          {Object.entries(groupedSkills).map(([catId, catSkills]) => {
            const catLabel = skillCategories.find(c => c.id === catId)?.label || catId;
            return (
              <ScrollReveal key={catId}>
                <div className="skill-category-box">
                  <div className="skill-category__header">
                    <h3 className="skill-category__title">{catLabel}</h3>
                    <span className="skill-category__count">{catSkills.length} skills</span>
                  </div>

                  <div className="skill-category-chips">
                    {catSkills.map(skill => (
                      <div key={skill.name} className="skill-category-chip">
                        <TechnologyIcon name={skill.name} size={18} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Currently Exploring */}
      <div className="container" style={{ marginTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
        <ScrollReveal>
          <div className="skill-category-box" style={{ background: 'var(--card-bg)' }}>
            <div className="skill-category__header">
              <div>
                <span className="text-label">// HORIZON</span>
                <h3 className="skill-category__title" style={{ marginTop: '0.2rem' }}>Currently Exploring</h3>
              </div>
              <span className="skill-category__count">{exploringSkills.length} topics</span>
            </div>

            <div className="skill-category-chips" style={{ marginTop: '1rem' }}>
              {exploringSkills.map((skill, index) => (
                <div key={index} className="skill-category-chip skill-category-chip--exploring">
                  <TechnologyIcon name={skill} size={18} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
