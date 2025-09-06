'use client';

import { useState, useEffect } from 'react';
import { Hand, Github, Linkedin, Mail, Download, ExternalLink, Code, Brain, Sparkles } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Разработчик современных веб-приложений';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Привет!
            </h1>
            <Hand className="text-primary w-12 h-12 md:w-16 md:h-16 animate-bounce" />
          </div>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-secondary-foreground font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Специализируюсь на <span className="text-primary font-semibold">React</span>, 
            {' '}<span className="text-primary font-semibold">Next.js</span> и 
            {' '}<span className="text-primary font-semibold">TypeScript</span>. 
            Работаю с нейросетями и создаю инновационные решения.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Посмотреть проекты
          </a>
          <button
            onClick={() => {
              // Имитация скачивания резюме
              const link = document.createElement('a');
              link.href = '#';
              link.download = 'resume.pdf';
              alert('Резюме будет скачано (демо-версия)');
            }}
            className="group px-8 py-4 bg-gradient-to-r from-accent to-primary-light text-white font-semibold rounded-full hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Скачать резюме
          </button>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Связаться со мной
          </a>
        </div>

        {/* Социальные ссылки */}
        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:your@email.com"
            className="group p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://anicat.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
          >
            <ExternalLink className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <div className="animate-bounce delay-100">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          <div className="animate-bounce delay-200">
            <div className="w-3 h-3 bg-primary-light rounded-full"></div>
          </div>
          <div className="animate-bounce delay-300">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
