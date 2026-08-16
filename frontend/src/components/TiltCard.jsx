import { useState, useRef } from 'react';

/**
 * TiltCard Component:
 * Provides subtle, premium 3D perspective tilt (max 3-5 degrees) on desktop hover.
 * Automatically disabled on touch/mobile devices for peak performance.
 */
export default function TiltCard({ children, className = '', maxTilt = 4, scale = 1.015, style = {} }) {
  const [transformStyle, setTransformStyle] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Skip on touch/mobile
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transformStyle ? 'transform 0.15s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
