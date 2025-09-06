'use client';

import { useState, useEffect, useRef } from 'react';
import { Cat, Music, ExternalLink, Zap, Rocket, X, Calendar, Users, Eye, Star, Github } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: string;
  link: string;
  type: string;
  icon: any;
  details: {
    duration: string;
    team: string;
    features: string[];
    challenges: string;
    results: string;
    github: string;
    images: string[];
  };
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 'anicat',
      name: 'anicat.fun',
      description: 'Сайт для просмотра мультипликационный анимационых мультфильмов созданных в японии. Для ознакомления и просмотра а так-же делится своим мнением с другими',
      technologies: ['React', 'Next.js', 'TypeScript', 'CSS'],
      status: 'Завершен',
      link: 'https://anicat.fun',
      type: 'live',
      icon: Cat,
      details: {
        duration: '2 месяца разработки',
        team: 'Индивидуальный проект',
        features: [
          'Адаптивный дизайн для всех устройств',
          'Интерактивные анимации',
          'Современный UI/UX дизайн',
          'Высокая производительность',
          'SEO оптимизация'
        ],
        challenges: 'Создание уникального дизайна и оптимизация производительности',
        results: 'Проект только созданный, поэтому там пока-что еще нету пользователей',
        github: '#',
        images: ['screenshot1.jpg', 'screenshot2.jpg']
      }
    },
    {
      id: 'spotify',
      name: 'Spotify Прототип',
      description: 'Разрабатываю современный прототип музыкального стримингового сервиса с интуитивным интерфейсом и продвинутыми функциями.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Web API', 'Tailwind'],
      status: 'В разработке',
      link: '#',
      type: 'development',
      icon: Music,
      details: {
        duration: 'В процессе (1 месяц)',
        team: 'Индивидуальный проект',
        features: [
          'Стриминг музыки с Web Audio API',
          'Плейлисты и избранное',
          'Поиск и фильтрация треков',
          'Адаптивный плеер',
          'Социальные функции',
          'Темная тема'
        ],
        challenges: 'Работа с аудио API и создание плавного UX',
        results: 'Прототип 70% готов, планируется демо-версия',
        github: '#',
        images: ['spotify1.jpg', 'spotify2.jpg']
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Мои проекты
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Практический опыт разработки от года. Каждый проект — это возможность изучить что-то новое
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className={`group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.type === 'live' 
                    ? 'bg-primary text-white' 
                    : 'bg-accent/20 text-primary border border-primary/30'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wider">
                    Технологии
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-secondary border border-border text-secondary-foreground font-semibold py-3 px-6 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Подробнее
                  </button>
                  {project.type === 'live' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-center group-hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Посмотреть
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex-1 bg-accent/20 border border-accent text-primary font-semibold py-3 px-6 rounded-xl text-center cursor-not-allowed flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      В разработке
                    </div>
                  )}
                </div>
              </div>

              {/* Декоративный градиент */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-card-foreground">
                Больше проектов в разработке!
              </h3>
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <p className="text-secondary-foreground text-lg">
              Постоянно работаю над новыми идеями и совершенствую существующие решения
            </p>
          </div>
        </div>

        {/* Модальное окно проекта */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Заголовок */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                      <selectedProject.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-card-foreground">
                        {selectedProject.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedProject.type === 'live' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {selectedProject.status}
                        </span>
                        <div className="flex items-center gap-4 text-secondary-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{selectedProject.details.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{selectedProject.details.team}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Описание */}
                <div className="mb-6">
                  <p className="text-lg text-secondary-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Технологии */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-3">Технологии</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Особенности */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-4">Ключевые особенности</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Вызовы и результаты */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground mb-3">Вызовы</h4>
                    <p className="text-secondary-foreground leading-relaxed">
                      {selectedProject.details.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground mb-3">Результаты</h4>
                    <p className="text-secondary-foreground leading-relaxed">
                      {selectedProject.details.results}
                    </p>
                  </div>
                </div>

                {/* Ссылки */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  {selectedProject.type === 'live' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-4 px-6 rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Открыть проект
                    </a>
                  )}
                  <a
                    href={selectedProject.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-card border-2 border-border text-card-foreground font-semibold py-4 px-6 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Код на GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
