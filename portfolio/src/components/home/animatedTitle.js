import React, { useEffect, useState } from 'react';
import styles from '../../pages/index.module.css';
import { titles } from '../../data/titles';

export default function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[currentIndex].text;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          setTypeSpeed(100 + Math.random() * 50); // Variable typing speed for realism
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          setTypeSpeed(50); // Faster deletion
        } else {
          // Move to next title
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setTypeSpeed(500); // Pause before starting new word
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typeSpeed, titles]);

  return (
    <h2 className={`${styles.heroSubtitle} ${styles.animatedTitle}`}>
      <span className={styles.titleIcon}>
        {titles[currentIndex].icon}
      </span>
      <span className={styles.titleText}>
        {displayText}
        <span className={styles.cursor}>|</span>
      </span>
    </h2>
  );
}
