'use client';

import { useState, useEffect, useRef } from 'react';
import { Atom, Rocket, Bot, Monitor, MessageCircle, BookOpen, Lightbulb, X, Star, Clock, Award } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
  icon: any;
  details: {
    experience: string;
    projects: string[];
    technologies: string[];
    achievements: string;
  };
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      id: 'react',
      name: 'React',
      level: 75,
      description: 'Средний уровень',
      icon: Atom,
      details: {
        experience: '1+ год активной разработки',
        projects: ['Интерактивные веб-приложения', 'SPA с маршрутизацией', 'Компонентные библиотеки'],
        technologies: ['Hooks', 'Context API', 'React Router', 'State Management'],
        achievements: 'Создал более 5 проектов с использованием React'
      }
    },
    {
      id: 'nextjs',
      name: 'Next.js + TypeScript',
      level: 90,
      description: 'Отличное знание',
      icon: Rocket,
      details: {
        experience: '1+ год профессиональной разработки',
        projects: ['SSR приложения', 'API Routes', 'Портфолио сайты', 'E-commerce решения'],
        technologies: ['App Router', 'Server Components', 'TypeScript', 'Tailwind CSS'],
        achievements: 'Мой основной стек для современных проектов'
      }
    },
    {
      id: 'ai',
      name: 'Нейросети и ИИ',
      level: 85,
      description: 'Хорошее владение',
      icon: Bot,
      details: {
        experience: 'Активно изучаю и применяю в проектах',
        projects: ['Чат-боты', 'Обработка данных', 'Автоматизация процессов', 'ML интеграции'],
        technologies: ['OpenAI API', 'Prompt Engineering', 'Data Analysis', 'Python basics'],
        achievements: 'Интегрировал ИИ в несколько коммерческих проектов'
      }
    },
    {
      id: 'webdev',
      name: 'Веб-разработка',
      level: 80,
      description: 'Опыт от года',
      icon: Monitor,
      details: {
        experience: '1+ год коммерческой разработки',
        projects: ['Корпоративные сайты', 'Landing pages', 'Веб-приложения', 'API интеграции'],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'PWA'],
        achievements: 'Запустил в продакшн более 5 проектов'
      }
    },
    {
      id: 'communication',
      name: 'Коммуникабельность',
      level: 95,
      description: 'Отличные навыки',
      icon: MessageCircle,
      details: {
        experience: 'Опыт работы в команде и с клиентами',
        projects: ['Командные проекты', 'Клиентские презентации', 'Менторство', 'Code Review'],
        technologies: ['Agile/Scrum', 'Slack/Discord', 'Zoom/Teams', 'Документирование'],
        achievements: '100% положительных отзывов от клиентов'
      }
    },
    {
      id: 'learning',
      name: 'Обучение и ТЗ',
      level: 90,
      description: 'Быстро обучаюсь',
      icon: BookOpen,
      details: {
        experience: 'Постоянное саморазвитие и изучение нового',
        projects: ['Анализ требований', 'Техническая документация', 'Исследование технологий'],
        technologies: ['Research', 'Documentation', 'Learning Paths', 'Best Practices'],
        achievements: 'Освоил Next.js за 2 месяца до продакшн уровня'
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
    <section ref={sectionRef} id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Мои навыки
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Постоянно развиваюсь и изучаю новые технологии для создания лучших решений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-secondary-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-foreground">Уровень</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Индикатор клика */}
              <div className="mt-4 text-center">
                <span className="text-xs text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  Нажмите для подробностей
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Заголовок */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                      <selectedSkill.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-card-foreground">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-secondary-foreground">
                        {selectedSkill.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Уровень */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-secondary-foreground">Уровень навыка</span>
                    <span className="text-primary font-semibold">{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${selectedSkill.level}%` }}
                    />
                  </div>
                </div>

                {/* Детали */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Опыт</h4>
                      <p className="text-secondary-foreground">{selectedSkill.details.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Проекты</h4>
                      <ul className="space-y-1">
                        {selectedSkill.details.projects.map((project, idx) => (
                          <li key={idx} className="text-secondary-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Atom className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Технологии</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.details.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Достижения</h4>
                      <p className="text-secondary-foreground">{selectedSkill.details.achievements}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Всегда открыт для обратной связи!
              </h3>
              <Lightbulb className="w-7 h-7 text-primary" />
            </div>
            <p className="text-lg text-secondary-foreground">
              Готов услышать вашу критику и доделать/переделать проект по вашим требованиям
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

