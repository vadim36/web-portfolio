import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Settings } from "./components/Settings";
import { ThemeContext, useLocalStorage } from "./shared";

export function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("isDarkMode", false);

  return (
    <ThemeContext.Provider
      value={{ dark: isDarkMode, toggleDark: () => setIsDarkMode((p) => !p) }}
    >
      <main
        className={`px-5 pb-10 bg-background text-foreground ${
          isDarkMode && "dark"
        }`}
      >
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
        <Settings />
      </main>
    </ThemeContext.Provider>
  );
}
