import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const skillsByCategory = {
  'Programming Languages': [
    {
      name: '.NET',
      level: 4,
      jobsUsed: 3,
      yearsExperience: 4,
      story: "Used .NET my entire carreer, from building microservices at Leidos to developing serverless applications at Champion Data."
    },
    {
      name: 'Python',
      level: 2,
      jobsUsed: 4,
      yearsExperience: 2,
      story: "Used when I was a researcher at Deakin, implementing multi-agent deep reinforcement learning algorithms and also for basic scripting purposes and some light data analytics work. "
    },
    {
      name: 'R',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "Used at Champion data for some light data analytics, but mostly used it when needing to debug packages for the data science team when they couldnt fix the bug."
    },
    {
      name: 'Javascript/TypeScript',
      level: 2,
      jobsUsed: 3,
      yearsExperience: 3,
      story: "Used across multiple projects, including the development of this portfolio website, but im not a frontend developer by trade."
    },
    {
      name: 'C++',
      level: 1,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "Use to be pretty good at C++ when I use to work in robotics, implementing multi-agent deep reinforcement learning algorithms but that was a long time ago."
    }
  ],
  'Database Technology': [
    {
      name: 'DynamoDB',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 2,
      story: "Used within various serverless applications, handling millions of sports data records daily as well as enabling data warehousing."
    },
    {
      name: 'PostgreSQL',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 2,
      story: "Relational database expertise for finance systems and complex business logic at Carsales."
    },
    {
      name: 'SQL Server',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "Enterprise database solutions and performance optimization for misison critical systems at Leidos."
    },
    {
      name: 'Elasticsearch',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 2,
      story: "Search and analytics engine implementation, replacing inefficient SQL queries at Leidos."
    }
  ],
  'Auth and Security': [
    {
      name: 'Auth0',
      level: 3,
      jobsUsed: 1,
      yearsExperience: 2,
      story: "Identity management for sports platforms, securing millions of user interactions daily. Using a mixture of in house auth0 functionality and bespoke scripts"
    },
    {
      name: 'Keycloak',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "SSO implementation replacing legacy Kerberos systems, reducing technical debt significantly."
    },
    {
      name: 'SonarQube',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 2,
      story: "Used for code quality analysis and technical debt management in enterprise applications while at Leidos and at Champion Data used Sonar Lint.",
    }
  ],
  'CI/CD': [
    {
      name: 'GitLab CI/CD',
      level: 3,
      jobsUsed: 1,
      yearsExperience: 2,
      story: "Advanced pipeline orchestration at Champion Data, automating sports platform deployments and release processes, monitoring as well as E2E tests."
    },
    {
      name: 'GitHub Actions',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "Successfully migrated 25+ legacy Jenkins pipelines to modern GitHub Actions at Carsales."
    },
    {
      name: 'Jenkins',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 2,
      story: "Enterprise CI/CD implementation with quality gates and automated testing pipelines.",
    },
    {
      name: 'Git',
      level: 4,
      jobsUsed: 4,
      yearsExperience: 5,
      story: "Used Git my entire career, i'm good at it but i cant make my git commits look like a guitar string"
    }
  ],
  'Architectures': [
    {
      name: 'Microservices',
      level: 3,
      jobsUsed: 3,
      yearsExperience: 4,
      story: "Designed and implemented microservices across Leidos, Carsales, and Champion Data platforms."
    },
    {
      name: 'Serverless',
      level: 3,
      jobsUsed: 2,
      yearsExperience: 3,
      story: "AWS Lambda and serverless architectures powering scalable sports data processing."
    },
    {
      name: 'Monolithic',
      level: 2,
      jobsUsed: 2,
      yearsExperience: 3,
      story: "Maintained and refactored legacy monolithic applications at Leidos and Champion Data."
    },
    {
      name: 'Event-Driven',
      level: 3,
      jobsUsed: 2,
      yearsExperience: 3,
      story: "Asynchronous messaging and event sourcing for real-time sports data systems and mission critical systems."
    },
    {
      name: 'Backend for Frontend (BFF)',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "API design and implementation across multiple applications at carsales (.NET and React)."
    }
  ],
  'Client and Stakeholder Management': [
    {
      name: 'Technical Leadership',
      level: 3,
      jobsUsed: 2,
      yearsExperience: 3,
      story: "Led technical decisions and mentoring at Carsales and Champion Data."
    },
    {
      name: 'Stakeholder Communication',
      level: 3,
      jobsUsed: 3,
      yearsExperience: 5,
      story: "Daily interaction with multiple clients."
    }
  ],
  'Tooling': [
    {
      name: 'Docker',
      level: 3,
      jobsUsed: 3,
      yearsExperience: 4,
      story: "Containerization from basic deployments to complex microservices orchestration to containerized monlithic applications."
    },
    {
      name: 'Kubernetes',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 1,
      story: "Container orchestration for scalable applications and high availability systems. Includes subsets such as MiniKube"
    },
    {
      name: 'AWS CDK',
      level: 2,
      jobsUsed: 1,
      yearsExperience: 2,
      story: "Infrastructure as Code for Champion Data's sports platforms using .NET CDK."
    },
    {
      name: 'Postman',
      level: 3,
      jobsUsed: 3,
      yearsExperience: 4,
      story: "API testing and documentation across all professional roles and projects."
    },
    {
      name: 'Grafana',
      level: 2,
      jobsUsed: 4,
      yearsExperience: 4,
      story: "Dashboarding and monitoring for performance insights and system health"
    },
    {
      name: 'New Relic',
      level: 2,
      jobsUsed: 4,
      yearsExperience: 4,
      story: "Dashboarding and monitoring for performance insights and system health"
    }
  ]
};

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
    tech: ['React', 'Docusaurus ', 'Sveltia CMS', 'Algolia', 'PostHog Cloud', 'Cloudflare'],
    link: 'https://jtmurley.github.io/portfolio/',
    github: 'https://github.com/JTMurley/portfolio'
  },
  {
    title: 'Track That Mate - TTM - WIP',
    description: 'Re-thinking how calorie tracking is done, peer pressure never felt so good',
    tech: ['.NET', 'AWS', 'Lambda', 'DynamoDB', "API Gateway"],
    link: '#',
    github: '#'
  }
];

// Add this experience data array after the projects array (around line 38)
const experiences = [
  {
    id: 1,
    company: 'Champion Data',
    position: 'Senior Software Engineer',
    period: '03/2023 - 06/2025',
    description: 'Senior software Engineer within the cloud services team developing bespoke platforms',
    technologies: ['.NET', 'AWS', 'DynamoDB', 'API Gateway', 'Docker', 'React', 'GitLab CI/CD', 'SNS', 'Auth0', 'Docusaurus', 'Decap CMS', 'ECS', 'EC2', 'S3', '.NET Aspire', 'AWS CDK'],
    achievements: [
      'Spearheaded the creation and implementation of the company\'s first proof-of-concept documentation hub, which has since evolved into the AFL SDP Doc Hub.',
      'Worked with as well as support multiple internal and external clients daily, including Sportsbet, Pointsbet, TAB, Sportcast, Dabble, AFL HQ and Collingwood',
      'Overhauled existing testing processes and created a new automated test harness enabling the creation of 500 new and existing AFL metrics in under 6 months.'
    ]
  },
  {
    id: 2,
    company: 'Carsales',
    position: 'Software Engineer',
    period: '06/2022 - 03/2023',
    description: 'Software Engineer within the Dealer Finance team working directly with FSPs to enable onsite pre-approval using primarily C#, React, AWS and Postgres',
    technologies: ['.NET', 'React', 'AWS', 'Postgres', 'Docker', 'Github Actions', 'Jenkins', 'RabbitMQ'],
    achievements: [
      'Leading and setting Code Review, Development, Release and Maintenance standards',
      'Championing major releases and OKRs',
      'Successful migration of 25+ existing legacy pipelines from Jenkins to Github actions',
      'Running multiple knowledge sharing sessions independently'
    ]
  },
  {
    id: 3,
    company: 'Leidos',
    position: 'Software Engineer',
    period: '01/2021 - 06/2022',
    description: 'Software Engineer within the C4ISR division developing bespoke Microservices and web applications using primarily .NET, Angular, T-SQL, Docker and K8s',
    technologies: ['.NET', 'Angular', 'Jenkins', 'SonarQube', 'Keycloak', 'Docker', 'Kubernetes', 'Microsoft SQL Server', 'Dynamics 365', 'RabbitMQ'],
    achievements: [
      'Creation, implementation and configuration of multiple CI/CD and CA pipelines to not only streamline the software development process but also ensuring a higher code quality',
      'Development of multiple bespoke elasticsearch implementations for existing monolithic applications to replace inefficient and unreliable SQL search queries',
      'Creation and implementation of multiple keycloak SSO instances to replace existing kerberos sidecar implementations to reduce overall tech debt'
    ]
  },
  {
    id: 4,
    company: 'Deakin University',
    position: 'Associate Research Fellow, Swarm Robotics - Contract',
    period: '10/2019 - 03/2020',
    description: 'Associate Research Fellow at Deakin University developing multiple bespoke multi-agent deep reinforcement learning (MADRL) algorithms and simulations using primarily ROS, Python, C++ and Docker',
    technologies: ['ROS', 'TurtleBot3', 'Python', 'C++', 'Docker'],
    achievements: [
      'Implementation and working light maze simulation/reward function to produce a cockroach search and rescue behaviour',
      'Creation of multiple robots using a new hardware platform I designed based off of the TurtleBot3 Waffle Pi platform rapidly prototyped and created 7 weeks ahead of schedule',
      'Optimisation of an existing MADRL reward function to increase operational efficiency by 64%'
    ]
  }
];

// Smooth Animated Title Component
function AnimatedTitle() {
  const titles = [
    { text: 'Full-Stack Engineer', icon: '💻' },
    { text: 'Cloud Architect', icon: '☁️' },
    { text: 'Microservices Developer', icon: '🔧' },
    { text: 'AWS Solutions Builder', icon: '🚀' },
    { text: 'DevOps Engineer', icon: '⚙️' },
    { text: 'Software Architect', icon: '🏗️' },
    { text: '.NET Specialist', icon: '⚡' },
    { text: 'Serverless Expert', icon: '🌐' },
    { text: 'CI/CD Engineer', icon: '🔄' },
    { text: 'More buzz words', icon: '🐝' },
  ];
  
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

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
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
                  </>
                ) : (
                  <>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  skills</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeString}>['.NET', 'AWS', 'Docker']</span>
                      <span className={styles.codeOperator}>,</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.codeProperty}>  mobile</span>
                      <span className={styles.codeOperator}>: </span>
                      <span className={styles.codeBoolean}>true</span>
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

function SkillsSection() {
  // State to track expanded categories and skills
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSkills, setExpandedSkills] = useState({});
  
  // Category color and icon mapping
  const getCategoryColor = (categoryName) => {
    const colors = {
      'Programming Languages': 'var(--ifm-color-primary)',
      'Database Technology': 'var(--ifm-color-secondary)',
      'Auth and Security': 'var(--ifm-color-danger)',
      'CI/CD and Code Management': 'var(--ifm-color-success)',
      'Architectures': 'var(--ifm-color-accent)',
      'Client and Stakeholder Management': 'var(--ifm-color-warning)',
      'Tooling': 'var(--ifm-color-secondary-dark)'
    };
    return colors[categoryName] || 'var(--ifm-color-primary)';
  };

  const getCategoryIcon = (categoryName) => {
    const icons = {
      'Programming Languages': '💻',
      'Database Technology': '🗄️',
      'Auth and Security': '🔒',
      'CI/CD and Code Management': '🚀',
      'Architectures': '🏗️',
      'Client and Stakeholder Management': '🤝',
      'Tooling': '🛠️'
    };
    return icons[categoryName] || '💻';
  };

  // Proficiency display helpers
  const getProficiencyEmojis = (level) => {
    const emojiMap = {
      1: '⭐',
      2: '⭐⭐',
      3: '⭐⭐⭐',
      4: '⭐⭐⭐⭐',
      5: '⭐⭐⭐⭐⭐'
    };
    return emojiMap[level] || '⭐';
  };

  const getProficiencyLabel = (level) => {
    const labelMap = {
      1: 'Beginner',
      2: 'Novice',
      3: 'Intermediate',
      4: 'Advanced',
      5: 'Expert'
    };
    return labelMap[level] || 'Beginner';
  };

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

// Add this ExperienceSection component after the ProjectsSection component (around line 261)
function ExperienceSection() {
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
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
}