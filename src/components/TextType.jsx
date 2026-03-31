import { useEffect, useState } from 'react';

const TextType = ({
  text = '',
  speed = 100,
  cursor = true,
  cursorChar = '|',
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentText = '';
    let i = 0;
    setDisplayText('');
    setIsComplete(false);

    if (!text) return;

    const interval = setInterval(() => {
      if (i < text.length) {
        currentText += text[i];
        setDisplayText(currentText);
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {cursor && !isComplete && (
        <span className="animate-pulse">{cursorChar}</span>
      )}
    </span>
  );
};

export default TextType;
