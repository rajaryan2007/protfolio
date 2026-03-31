import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  onComplete,
}) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`inline-block overflow-hidden ${className}`}
      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', display: 'flex', flexWrap: 'wrap' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={animationFrom}
          animate={inView ? animationTo : animationFrom}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
             if (index === letters.length - 1 && onComplete) onComplete();
          }}
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </p>
  );
};

export default SplitText;
