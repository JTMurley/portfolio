import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import components
import ProgressBar from '../components/home/ProgressBar';
import HeroSection from '../components/home/HeroSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ExperienceSection from '../components/home/ExperienceSection';
import ContactSection from '../components/home/ContactSection';

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