import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ResearchSection from '../components/ResearchSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ResearchSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
