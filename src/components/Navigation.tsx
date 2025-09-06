'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  
  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'skills', label: 'Навыки' },
    { id: 'experience', label: 'Опыт' },
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id === 'hero' ? '' : section.id);
        if (element) {
          const offsetTop = section.id === 'hero' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section.id === 'hero' ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-card/80 backdrop-blur-sm border border-border hover:bg-primary/10'
            }`}
            title={section.label}
          >
            <span className="text-sm font-medium">{section.label}</span>
            
            {/* Индикатор активной секции */}
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full transition-all duration-300 ${
              activeSection === section.id ? 'opacity-100 -translate-x-6' : 'opacity-0 -translate-x-4'
            }`} />
          </button>
        ))}
      </div>
    </nav>
  );
}
