import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(34, 211, 238, 0.15)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-px ${className}`}
    >
      {/* Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: opacity * 0.5,
          background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${spotlightColor.replace('0.15', '0.05')}, transparent 40%)`,
        }}
      />
      
      <div className="relative h-full w-full rounded-[23px] bg-[#0A0A0B] p-6 sm:p-8 z-10 transition-colors">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;

