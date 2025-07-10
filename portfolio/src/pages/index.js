import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const skills = [
  '.NET', 'Microservices', 'AWS', 'Serverless', 'Auth0', 'Docusaurus', 'IAC', 'Lambda', 'DynamoDB', 'CI/CD - Gitlab, Github Actions, Jenkins'
];

// Progress Bar Component
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Particle System
function ParticleSystem() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x, y) => ({
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      life: 1,
      decay: Math.random() * 0.005 + 0.001
    });

    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < 100; i++) {
        particles.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      particles.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.decay;

        // Mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.vx += dx * 0.00005;
          particle.vy += dy * 0.00005;
        }

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.current.splice(index, 1);
          particles.current.push(createParticle());
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity * particle.life;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections
      particles.current.forEach((particle, i) => {
        particles.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary');
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}

// 3D Floating Elements
function FloatingElements() {
  const techIcons = ['⚛️', '🔧', '⚡', '🚀', '💻', '🌐', '🔗', '🎯', '🥸'];
  
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

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This website, built with 💖',
    tech: ['React', 'Docusaurus ', 'Decap CMS', 'Algolia', 'PostHog Cloud'],
    link: '#',
    github: '#' //TODO come back and add
  },
  {
    title: 'Track That Mate - TTM',
    description: 'Re-thinking how calorie tracking is done, peer pressure never felt so good',
    tech: ['.NET', 'AWS', 'Lambda', 'DynamoDB', "API Gateway"],
    link: '#',
    github: '#' ////TODO come back and add
  }
];

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
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
            <h2 className={styles.heroSubtitle}>Full-Stack Engineer</h2>
            <p className={styles.heroDescription}>
              Expertise in both Microsoft and AWS ecosystems, utilising cutting-edge technologies to develop and deploy not only bespoke software solutions but also modular and scalable serverless and microservices to support existing monolithic applications.
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
                <div className={styles.codeLine}>
                  <span className={styles.codeProperty}>  skills</span>
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

function SkillsSection() {
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Tech I Like</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillTag}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
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
              <div className={styles.projectLinks}>
                <a href={project.link} className={styles.projectLink}>
                  Live Demo →
                </a>
                <a href={project.github} className={styles.projectLink}>
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
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
              Send Email
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Full-stack developer specializing in .NET, AWS, and modern web technologies">
      <ProgressBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

//TODO, Add an job history roadmap