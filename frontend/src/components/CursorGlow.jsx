import { useEffect, useState } from 'react';

/**
 * CursorGlow Component:
 * Renders a subtle, non-intrusive radial lighting glow trailing the cursor on desktop.
 * Disabled on touch/mobile devices. Pointer-events are set to none.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow-ambient"
      style={{
        transform: `translate3d(${position.x - 150}px, ${position.y - 150}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}
