import React from 'react';
import styles from '../../pages/index.module.css';
import { techIcons } from '../../data/floatingIcons';

export default function FloatingElements() {
  return (
    <div className={styles.floatingElements}>
      {techIcons.map((icon, index) => (
        <div
          key={index}
          className={styles.floatingIcon}
          style={{
            '--delay': `${index * 0.5}s`,
            '--duration': `${8 + index * 0.5}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
