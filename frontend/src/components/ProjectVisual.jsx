import React from 'react';

export default function ProjectVisual({ id }) {
  // Use abstract geometric/premium CSS background patterns based on the project ID.
  // These use currentColor or specific CSS variables to automatically theme themselves 
  // perfectly in Dark (Obsidian/Teal/Magenta) and Light (White/Blue/Mint) modes.

  const getStyle = () => {
    switch(id) {
      case 'developer-portfolio':
        return {
          background: `
            linear-gradient(135deg, var(--bg-card) 25%, transparent 25%),
            linear-gradient(225deg, var(--bg-card) 25%, transparent 25%),
            linear-gradient(45deg, var(--bg-card) 25%, transparent 25%),
            linear-gradient(315deg, var(--bg-card) 25%, var(--bg-primary) 25%)
          `,
          backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat',
          position: 'relative'
        };
      case 'student-task-manager':
        return {
          background: `
            radial-gradient(circle at 100% 50%, transparent 20%, var(--bg-card) 21%, var(--bg-card) 34%, transparent 35%, transparent),
            radial-gradient(circle at 0% 50%, transparent 20%, var(--bg-card) 21%, var(--bg-card) 34%, transparent 35%, transparent)
          `,
          backgroundColor: 'var(--bg-primary)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        };
      case 'expense-tracker':
        return {
          background: `
            repeating-linear-gradient(
              45deg,
              var(--bg-primary),
              var(--bg-primary) 10px,
              var(--bg-card) 10px,
              var(--bg-card) 20px
            )
          `
        };
      case 'weather-app':
        return {
          background: `
            radial-gradient(var(--bg-card) 15%, transparent 16%),
            radial-gradient(var(--bg-card) 15%, transparent 16%)
          `,
          backgroundColor: 'var(--bg-primary)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        };
      case 'dsa-repository':
        return {
          background: `
            linear-gradient(var(--bg-card) 2px, transparent 2px),
            linear-gradient(90deg, var(--bg-card) 2px, transparent 2px),
            linear-gradient(var(--bg-card) 1px, transparent 1px),
            linear-gradient(90deg, var(--bg-card) 1px, transparent 1px)
          `,
          backgroundColor: 'var(--bg-primary)',
          backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
        };
      default:
        return {
          background: 'var(--bg-card)'
        };
    }
  };

  return (
    <div 
      className="project-visual-wrapper" 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...getStyle()
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 120%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Decorative accent orb */}
      <div 
        style={{
          position: 'absolute',
          top: id === 'developer-portfolio' ? '20%' : 'auto',
          bottom: id !== 'developer-portfolio' ? '20%' : 'auto',
          right: '20%',
          width: '40%',
          height: '40%',
          background: 'var(--text-accent)',
          filter: 'blur(40px)',
          opacity: 0.15,
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
