import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom = { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,5px,0)' },
  animationTo = { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
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
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      <AnimatePresence>
        {elements.map((word, index) => (
          <motion.span
            key={index}
            initial={animationFrom}
            animate={inView ? animationTo : animationFrom}
            transition={{
              duration: 0.8,
              delay: index * (delay / 1000),
              ease: [0.22, 1, 0.36, 1], // easeOutQuart
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {word}{animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </AnimatePresence>
    </p>
  );
};

export default BlurText;


