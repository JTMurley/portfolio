import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import styles from '../../pages/index.module.css';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleExperienceClick = (index) => {
    setActiveExperience(index);
  };

  return (
    <section ref={sectionRef} className={clsx(styles.experience, isVisible && styles.experienceVisible)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Professional Journey</h2>
        <div className={styles.experienceContainer}>
          {/* Timeline Navigation */}
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={clsx(
                  styles.timelineItem,
                  index === activeExperience && styles.timelineItemActive
                )}
                onClick={() => handleExperienceClick(index)}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineMarkerInner}></div>
                </div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineCompany}>{exp.company}</h4>
                  <p className={styles.timelinePeriod}>{exp.period}</p>
                </div>
              </div>
            ))}
            <div 
              className={styles.timelineProgress}
              style={{ 
                height: `${((activeExperience + 1) / experiences.length) * 100}%` 
              }}
            ></div>
          </div>

          {/* Experience Details */}
          <div className={styles.experienceDetails}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experiencePosition}>
                  {experiences[activeExperience].position}
                </h3>
                <div className={styles.experienceCompany}>
                  <span className={styles.companyName}>
                    {experiences[activeExperience].company}
                  </span>
                  <span className={styles.experiencePeriod}>
                    {experiences[activeExperience].period}
                  </span>
                </div>
              </div>
              
              <p className={styles.experienceDescription}>
                {experiences[activeExperience].description}
              </p>

              <div className={styles.experienceTechnologies}>
                <h4 className={styles.techTitle}>Technologies Used</h4>
                <div className={styles.techGrid}>
                  {experiences[activeExperience].technologies.map((tech, index) => (
                    <span key={index} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.experienceAchievements}>
                <h4 className={styles.achievementsTitle}>Key Achievements</h4>
                <ul className={styles.achievementsList}>
                  {experiences[activeExperience].achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}