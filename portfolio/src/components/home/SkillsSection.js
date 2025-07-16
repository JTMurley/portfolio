import React, { useState } from 'react';
import styles from '../../pages/index.module.css';
import { skillsByCategory } from '../../data/skills';
import { 
  getCategoryColor, 
  getCategoryIcon, 
  getProficiencyEmojis, 
  getProficiencyLabel 
} from '../../data/skillsData';

export default function SkillsSection() {
  // State to track expanded categories and skills
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSkills, setExpandedSkills] = useState({});

  // Toggle functions for expansion/collapse
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const toggleSkill = (skillId) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillId]: !prev[skillId]
    }));
  };

  return (
    <section className={styles.skills}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <p className={styles.skillsIntro}>
          Technologies and skills I've mastered across my career. Tap to explore details.
        </p>
        
        <div className={styles.skillsCategories}>
          {Object.entries(skillsByCategory).map(([categoryName, skills], categoryIdx) => (
            <div
              key={categoryName}
              className={`${styles.skillCategory} ${expandedCategories[categoryName] ? styles.expanded : ''}`}
              style={{
                '--category-color': getCategoryColor(categoryName),
                '--animation-delay': `${categoryIdx * 0.1}s`
              }}
            >
              {/* Category Header */}
              <div
                className={styles.categoryHeader}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategory(categoryName);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleCategory(categoryName);
                    e.preventDefault();
                  }
                }}
              >
                <div className={styles.categoryHeaderContent}>
                  <span className={styles.categoryIcon}>
                    {getCategoryIcon(categoryName)}
                  </span>
                  <h3 className={styles.categoryTitle}>{categoryName}</h3>
                  <span className={styles.skillCount}>({skills.length})</span>
                </div>
                <span className={`${styles.expandIcon} ${expandedCategories[categoryName] ? styles.expanded : ''}`}>
                  ▼
                </span>
              </div>
              
              {/* Category Content - Only render if expanded */}
              {expandedCategories[categoryName] && (
                <div className={styles.categoryContent}>
                  {skills.map((skill, skillIdx) => {
                    const skillId = `${categoryName}-${skill.name}`;
                    
                    return (
                      <div
                        key={skill.name}
                        className={styles.compactSkillCard}
                        style={{
                          '--skill-delay': `${skillIdx * 0.05}s`
                        }}
                      >
                        {/* Skill Header */}
                        <div
                          className={styles.skillCardHeader}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSkill(skillId);
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              toggleSkill(skillId);
                              e.preventDefault();
                            }
                          }}
                        >
                          <div className={styles.skillInfo}>
                            <div className={styles.skillNameRow}>
                              <h4 className={styles.skillName}>{skill.name}</h4>
                              <span className={`${styles.skillExpandIcon} ${expandedSkills[skillId] ? styles.expanded : ''}`}>
                                ▼
                              </span>
                            </div>
                            <div className={styles.skillMeta}>
                              <div className={styles.proficiencyRating}>
                                <span className={styles.proficiencyEmojis}>
                                  {getProficiencyEmojis(skill.level)}
                                </span>
                                <span className={styles.proficiencyLabel}>
                                  {getProficiencyLabel(skill.level)}
                                </span>
                              </div>
                              <span className={styles.skillExperience}>
                                {skill.jobsUsed} companies • {skill.yearsExperience}+ years
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Skill Content - Only render if expanded */}
                        {expandedSkills[skillId] && (
                          <div className={styles.skillContent}>
                            <p className={styles.storyText}>{skill.story}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}