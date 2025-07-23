import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from '../../pages/index.module.css';
import ParticleSystem from './ParticleSystem';
import FloatingElements from './floatingElements';
import AnimatedTitle from './animatedTitle';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 996);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.hero}>
      <ParticleSystem />
      <FloatingElements />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.nameHighlight}>Jack</span>
            </h1>
            <AnimatedTitle />
            <p className={styles.heroDescription}>
              Expertise in both Microsoft and AWS ecosystems, utilising cutting-edge technologies to develop and deploy bespoke software solutions and scalable serverless microservices.
              {!isMobile && " Can you find the easter egg in the background 🥸."}
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={clsx('button button--primary button--lg', styles.ctaButton)}>
                View My Work
              </a>
              <a href="#contact" className={clsx('button button--outline button--lg', styles.ctaButton)}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>
                  <span className={styles.codeVariable}> engineer</span>
                  <span className={styles.codeOperator}> = </span>
                  <span className={styles.codeString}>{`{`}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeProperty}>  name</span>
                  <span className={styles.codeOperator}>: </span>
                  <span className={styles.codeString}>'Jack'</span>
                  <span className={styles.codeOperator}>,</span>
                </div>
                {!isMobile ? (
                  <>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  specialities</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeString}>['.NET', 'AWS', 'Docker', 'IAC', 'Client and Stakeholder management']</span>
                      <span className={styles.codeOperator}>,</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  willMakeYouLaugh</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeBoolean}>true</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  funFact</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeString}>'Ran a marathon with only 2 weeks training'</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  specialities</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeString}>['.NET', 'AWS', 'Docker', 'IAC', 'Client and Stakeholder management']</span>
                      <span className={styles.codeOperator}>,</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  willMakeYouLaugh</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeBoolean}>true</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  funFact</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeString}>'Ran a marathon with only 2 weeks training'</span>
                    </div>
                  </>
                )}
                <div className={styles.codeLine}>
                  <span className={styles.codeString}>{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
