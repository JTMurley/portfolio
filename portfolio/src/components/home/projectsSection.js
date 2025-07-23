import React from 'react';
import styles from '../../pages/index.module.css';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTech}>
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link || project.github) && (
                <div className={styles.projectLinks}>
                  {project.link && (
                    <a href={project.link} className={styles.projectLink}>
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className={styles.projectLink}>
                      GitHub →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
