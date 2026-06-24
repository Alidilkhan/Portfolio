import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { TestimonialSection } from "../sections/TestimonialSection";
import { ContactSection } from "../sections/ContactSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
     
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
