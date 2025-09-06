'use client';

import { useState, useEffect, useRef } from 'react';
import { Trophy, Calendar, Briefcase, Users, Code2, Zap } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    {
      id: 'experience',
      label: 'Опыт работы',
      value: 1,
      suffix: '+ год',
      icon: Calendar,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'projects',
      label: 'Завершено проектов',
      value: 5,
      suffix: '+',
      icon: Briefcase,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'technologies',
      label: 'Изучено технологий',
      value: 12,
      suffix: '+',
      icon: Code2,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: 'satisfaction',
      label: 'Довольных клиентов',
      value: 100,
      suffix: '%',
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(
    stats.reduce((acc, stat) => ({ ...acc, [stat.id]: 0 }), {})
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Анимация счетчиков
          const timers: NodeJS.Timeout[] = [];
          
          stats.forEach((stat, statIndex) => {
            let currentValue = 0;
            const increment = stat.value / 50; // 50 шагов анимации
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= stat.value) {
                currentValue = stat.value;
                clearInterval(timer);
              }
              
              setAnimatedValues(prev => ({
                ...prev,
                [stat.id]: Math.floor(currentValue)
              }));
            }, 40);
            
            timers.push(timer);
          });

          // Очистка таймеров при размонтировании
          return () => {
            timers.forEach(timer => clearInterval(timer));
          };
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible, stats]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Мои достижения
            </h2>
            <Zap className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Несколько цифр, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`group bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`inline-flex p-4 ${stat.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-foreground">
                  {animatedValues[stat.id] || 0}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-secondary-foreground font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Декоративная анимированная линия */}
              <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200 + 500}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Готов к новым вызовам!
              </h3>
            </div>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Каждый проект для меня — это возможность изучить что-то новое и 
              создать решение, которое действительно работает. Готов присоединиться 
              к вашей команде и внести свой вклад в успех проекта!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
