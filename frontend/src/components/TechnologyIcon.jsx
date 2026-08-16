import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
} from 'react-icons/si';

import {
  TbBrandVscode,
  TbDeviceMobile,
  TbApi,
  TbDatabase,
  TbBinaryTree,
  TbCube,
  TbRepeat,
  TbArrowsSort,
  TbSearch,
  TbBracketsContain,
  TbCirclesRelation,
  TbStack2,
  TbArrowRightTail,
  TbLayersIntersect,
  TbShieldLock,
  TbCloudComputing,
  TbBrain,
  TbGitBranch,
} from 'react-icons/tb';

// Comprehensive, reliable mapping of official and dedicated technology icons & brand colors
const iconMapping = {
  // Programming Languages
  'C': {
    Icon: SiC,
    color: '#A8B9CC',
    lightColor: '#00599C',
    glow: 'rgba(168, 185, 204, 0.35)',
  },
  'C++': {
    Icon: SiCplusplus,
    color: '#00599C',
    lightColor: '#004482',
    glow: 'rgba(0, 89, 156, 0.4)',
  },
  'Python': {
    Icon: SiPython,
    color: '#3776AB',
    lightColor: '#2b5b84',
    glow: 'rgba(55, 118, 171, 0.4)',
  },
  'JavaScript': {
    Icon: SiJavascript,
    color: '#F7DF1E',
    lightColor: '#d4be11',
    glow: 'rgba(247, 223, 30, 0.4)',
  },

  // Frontend
  'HTML5': {
    Icon: SiHtml5,
    color: '#E34F26',
    lightColor: '#E34F26',
    glow: 'rgba(227, 79, 38, 0.4)',
  },
  'CSS3': {
    Icon: SiCss,
    color: '#1572B6',
    lightColor: '#1572B6',
    glow: 'rgba(21, 114, 182, 0.4)',
  },
  'React.js': {
    Icon: SiReact,
    color: '#61DAFB',
    lightColor: '#00b4d8',
    glow: 'rgba(97, 218, 251, 0.45)',
  },
  'Responsive Design': {
    Icon: TbDeviceMobile,
    color: '#38BDF8',
    lightColor: '#0284c7',
    glow: 'rgba(56, 189, 248, 0.35)',
  },

  // Backend
  'Node.js': {
    Icon: SiNodedotjs,
    color: '#5FA04E',
    lightColor: '#4d833f',
    glow: 'rgba(95, 160, 78, 0.4)',
  },
  'Express.js': {
    Icon: SiExpress,
    color: '#F3F4F6', // Crisp in dark mode
    lightColor: '#111827', // Crisp in light mode
    glow: 'rgba(243, 244, 246, 0.3)',
  },
  'REST APIs': {
    Icon: TbApi,
    color: '#00F0FF',
    lightColor: '#0891b2',
    glow: 'rgba(0, 240, 255, 0.4)',
  },

  // Database
  'MySQL': {
    Icon: SiMysql,
    color: '#4479A1',
    lightColor: '#336184',
    glow: 'rgba(68, 121, 161, 0.4)',
  },
  'SQL': {
    Icon: TbDatabase,
    color: '#38BDF8',
    lightColor: '#0369a1',
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  'MongoDB': {
    Icon: SiMongodb,
    color: '#47A248',
    lightColor: '#39843a',
    glow: 'rgba(71, 162, 72, 0.4)',
  },

  // CS Fundamentals
  'DSA': {
    Icon: TbBinaryTree,
    color: '#A855F7',
    lightColor: '#7e22ce',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
  'OOP': {
    Icon: TbCube,
    color: '#EC4899',
    lightColor: '#be185d',
    glow: 'rgba(236, 72, 153, 0.4)',
  },
  'Recursion': {
    Icon: TbRepeat,
    color: '#F59E0B',
    lightColor: '#b45309',
    glow: 'rgba(245, 158, 11, 0.4)',
  },
  'Sorting': {
    Icon: TbArrowsSort,
    color: '#10B981',
    lightColor: '#047857',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
  'Searching': {
    Icon: TbSearch,
    color: '#3B82F6',
    lightColor: '#1d4ed8',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  'Arrays': {
    Icon: TbBracketsContain,
    color: '#6366F1',
    lightColor: '#4338ca',
    glow: 'rgba(99, 102, 241, 0.4)',
  },
  'Linked Lists': {
    Icon: TbCirclesRelation,
    color: '#14B8A6',
    lightColor: '#0f766e',
    glow: 'rgba(20, 184, 166, 0.4)',
  },
  'Stacks': {
    Icon: TbStack2,
    color: '#F43F5E',
    lightColor: '#be123c',
    glow: 'rgba(244, 63, 94, 0.4)',
  },
  'Queues': {
    Icon: TbArrowRightTail,
    color: '#06B6D4',
    lightColor: '#0e7490',
    glow: 'rgba(6, 182, 212, 0.4)',
  },

  // Tools
  'Git': {
    Icon: SiGit,
    color: '#F05032',
    lightColor: '#F05032',
    glow: 'rgba(240, 80, 50, 0.4)',
  },
  'GitHub': {
    Icon: SiGithub,
    color: '#F3F4F6', // Crisp in dark mode
    lightColor: '#181717', // Crisp in light mode
    glow: 'rgba(243, 244, 246, 0.3)',
  },
  'VS Code': {
    Icon: TbBrandVscode,
    color: '#007ACC',
    lightColor: '#007ACC',
    glow: 'rgba(0, 122, 204, 0.4)',
  },
  'npm': {
    Icon: SiNpm,
    color: '#CB3837',
    lightColor: '#CB3837',
    glow: 'rgba(203, 56, 55, 0.4)',
  },
  'Vite': {
    Icon: SiVite,
    color: '#646CFF',
    lightColor: '#4f46e5',
    glow: 'rgba(100, 108, 255, 0.4)',
  },

  // Exploring Skills Topics
  'Full-Stack Development': {
    Icon: TbLayersIntersect,
    color: '#0055FF',
    lightColor: '#0044CC',
    glow: 'rgba(0, 85, 255, 0.4)',
  },
  'React Ecosystem': {
    Icon: SiReact,
    color: '#61DAFB',
    lightColor: '#00b4d8',
    glow: 'rgba(97, 218, 251, 0.4)',
  },
  'Node.js & Express': {
    Icon: SiNodedotjs,
    color: '#5FA04E',
    lightColor: '#4d833f',
    glow: 'rgba(95, 160, 78, 0.4)',
  },
  'MongoDB & Mongoose': {
    Icon: SiMongodb,
    color: '#47A248',
    lightColor: '#39843a',
    glow: 'rgba(71, 162, 72, 0.4)',
  },
  'REST API Design': {
    Icon: TbApi,
    color: '#00F0FF',
    lightColor: '#0891b2',
    glow: 'rgba(0, 240, 255, 0.4)',
  },
  'Authentication': {
    Icon: TbShieldLock,
    color: '#EAB308',
    lightColor: '#ca8a04',
    glow: 'rgba(234, 179, 8, 0.4)',
  },
  'Cloud Deployment': {
    Icon: TbCloudComputing,
    color: '#06B6D4',
    lightColor: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.4)',
  },
  'AI-assisted Development': {
    Icon: TbBrain,
    color: '#A855F7',
    lightColor: '#7e22ce',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
  'Modern Dev Workflows': {
    Icon: TbGitBranch,
    color: '#3B82F6',
    lightColor: '#2563eb',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
};

export default function TechnologyIcon({ name, size = 28, className = '' }) {
  const item = iconMapping[name];

  if (!item || !item.Icon) {
    return (
      <span className={`tech-icon-fallback ${className}`} aria-label={name}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  const { Icon, color, lightColor } = item;

  return (
    <span
      className={`tech-icon-wrapper ${className}`}
      data-tech={name}
      style={{
        '--brand-color': color,
        '--brand-color-light': lightColor,
      }}
      aria-label={`${name} logo`}
      role="img"
    >
      <Icon size={size} className="tech-icon-svg" />
    </span>
  );
}

export function getTechnologyBrandColor(name) {
  return iconMapping[name]?.color || '#0055ff';
}

export function getTechnologyGlowColor(name) {
  return iconMapping[name]?.glow || 'rgba(0, 85, 255, 0.35)';
}
