'use client';

import { useState } from 'react';
import { Briefcase, Rocket, Target, Zap, Send, Handshake, Copy, Check, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedText, setCopiedText] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно быть не менее 10 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очистка ошибки при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Готов обсудить ваш проект или ответить на любые вопросы. 
            Всегда открыт для новых возможностей!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Давайте работать вместе!
              </h3>
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Проекты</h4>
                  <p className="text-secondary-foreground">Разработка современных веб-приложений</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Консультации</h4>
                  <p className="text-secondary-foreground">Помощь с React, Next.js, TypeScript</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Обучение</h4>
                  <p className="text-secondary-foreground">Изучение ТЗ и воплощение идей</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  Контактная информация
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-card rounded-lg">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-secondary-foreground">+7 (999) 123-45-67</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+7 (999) 123-45-67', 'phone')}
                    className="p-1 hover:bg-secondary rounded transition-colors"
                  >
                    {copiedText === 'phone' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-secondary-foreground" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-card rounded-lg">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-primary" />
                    <span className="text-secondary-foreground">dev@example.com</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('dev@example.com', 'email')}
                    className="p-1 hover:bg-secondary rounded transition-colors"
                  >
                    {copiedText === 'email' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-secondary-foreground" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-card rounded-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-secondary-foreground">Россия, UTC+3</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('Россия, UTC+3', 'location')}
                    className="p-1 hover:bg-secondary rounded transition-colors"
                  >
                    {copiedText === 'location' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-secondary-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Как вас зовут?"
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <div className="flex items-center gap-2 mt-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-foreground ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                  maxLength={500}
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.message ? (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className="text-sm text-secondary-foreground">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting || Object.keys(errors).some(key => errors[key])
                    ? 'bg-secondary text-secondary-foreground cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-dark hover:to-primary hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Отправляю...
                  </>
                ) : (
                  <>
                    Отправить сообщение
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
