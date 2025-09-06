import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Settings from '../components/Settings';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Settings />
      <Navigation />
      <ScrollToTop />
      
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-secondary-foreground">
              © 2024 Портфолио Разработчика. Создано с
            </p>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <p className="text-secondary-foreground">и React</p>
          </div>
          <p className="text-sm text-secondary-foreground mt-2">
            Всегда готов услышать критику и доработать проект! 
          </p>
        </div>
      </footer>
    </div>
  );
}
