'use client';

import { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight, Award, TrendingUp, Users, Code } from 'lucide-react';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      id: 'freelance',
      position: 'Frontend Разработчик',
      company: 'Фриланс',
      location: 'Удаленно',
      duration: '2023 - настоящее время',
      type: 'Freelance',
      description: 'Разработка современных веб-приложений для различных клиентов',
      achievements: [
        'Создал более 5 успешных проектов',
        'Освоил Next.js, TypeScript и современные инструменты',
        '100% положительных отзывов от клиентов',
        'Работал с командами до 5 человек'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      projects: [
        {
          name: 'anicat.fun',
          description: 'Интерактивный веб-сайт с современным дизайном',
          impact: '1000+ пользователей в месяц'
        }
      ]
    },
    {
      id: 'learning',
      position: 'Студент / Самообразование',
      company: 'Интенсивное изучение технологий',
      location: 'Самостоятельно',
      duration: '2022 - 2023',
      type: 'Education',
      description: 'Интенсивное изучение современных веб-технологий и лучших практик',
      achievements: [
        'Освоил React за 3 месяца',
        'Изучил TypeScript и Next.js',
        'Создал первые коммерческие проекты',
        'Начал работу с нейросетями и ИИ'
      ],
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'Figma'],
      projects: [
        {
          name: 'Учебные проекты',
          description: 'Более 10 проектов для изучения основ',
          impact: 'Solid foundation в веб-разработке'
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Опыт работы
            </h2>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Мой путь в веб-разработке: от первых шагов до профессиональных проектов
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Временная линия */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6">
                {index < experiences.length - 1 && (
                  <div className="absolute top-12 left-0 w-px h-full bg-gradient-to-b from-primary to-transparent" />
                )}
              </div>
              
              {/* Точка на временной линии */}
              <div className="absolute left-0 top-6 w-12 h-12 bg-card border-4 border-primary rounded-full flex items-center justify-center ml-0 z-10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Карточка опыта */}
              <div className="ml-20 bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 cursor-pointer"
                   onClick={() => setSelectedExperience(exp)}>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-4 text-secondary-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{exp.duration}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Freelance' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-secondary-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-secondary-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-muted text-secondary-foreground rounded-full text-sm">
                      +{exp.technologies.length - 4} еще
                    </span>
                  )}
                </div>

                <div className="text-sm text-secondary-foreground">
                  Нажмите для подробностей
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Итоговая статистика */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ключевые достижения за время работы
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-green-500/10 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5+</div>
              <div className="text-secondary-foreground">Завершенных проектов</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-4">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">12+</div>
              <div className="text-secondary-foreground">Изученных технологий</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-secondary-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>

        {/* Модальное окно опыта */}
        {selectedExperience && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Заголовок */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-card-foreground mb-2">
                      {selectedExperience.position}
                    </h3>
                    <div className="flex items-center gap-4 text-secondary-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{selectedExperience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedExperience.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="p-2 rounded-xl hover:bg-secondary transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Описание */}
                <div className="mb-8">
                  <p className="text-lg text-secondary-foreground leading-relaxed">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Достижения */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Ключевые достижения
                  </h4>
                  <ul className="space-y-3">
                    {selectedExperience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Технологии */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Технологии и инструменты
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedExperience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Проекты */}
                <div>
                  <h4 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Основные проекты
                  </h4>
                  <div className="space-y-4">
                    {selectedExperience.projects.map((project, idx) => (
                      <div key={idx} className="bg-secondary/50 rounded-xl p-4">
                        <h5 className="font-semibold text-card-foreground mb-2">{project.name}</h5>
                        <p className="text-secondary-foreground mb-2">{project.description}</p>
                        <p className="text-sm text-primary font-medium">{project.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
