import React from 'react';
import clsx from 'clsx';
import styles from '../../pages/index.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.contactText}>
            I'm always interested in new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className={styles.contactButtons}>
            <a href="mailto:jack.murley@gmail.com" className={clsx('button button--primary button--lg')}>
              Email
            </a>
            <a href="https://www.linkedin.com/in/jackmurley/" className={clsx('button button--outline button--lg')}>
              LinkedIn
            </a>
            <a href="https://github.com/JTMurley" className={clsx('button button--outline button--lg')}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}