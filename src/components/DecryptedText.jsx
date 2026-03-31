import { useEffect, useState, useRef, useCallback } from "react";

/**
 * DecryptedText component that mimics the "decryption" effect.
 */
const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  animateOnHover = false,
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const iterationRef = useRef(0);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    iterationRef.current = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iterationRef.current >= maxIterations) return text[index];
            if (sequential && iterationRef.current > index) return text[index];
            
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterationRef.current += 1;
      
      if (iterationRef.current > maxIterations + (sequential ? text.length : 0)) {
        setDisplayText(text);
        setIsAnimating(false);
        clearInterval(intervalRef.current);
      }
    }, speed);
  }, [text, characters, maxIterations, sequential, speed]);

  useEffect(() => {
    if (!animateOnHover) {
      startAnimation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateOnHover, startAnimation]);

  const handleMouseEnter = () => {
    if (animateOnHover && !isAnimating) {
      startAnimation();
    }
  };

  return (
    <span 
      className={parentClassName} 
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;

