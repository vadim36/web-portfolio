import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="px-5 pb-10">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}