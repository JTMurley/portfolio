import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import components
import ProgressBar from '../components/home/progressBar';
import HeroSection from '../components/home/heroSection';
import SkillsSection from '../components/home/skillsSection';
import ProjectsSection from '../components/home/projectsSection';
import ExperienceSection from '../components/home/experienceSection';
import ContactSection from '../components/home/contactSection';

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