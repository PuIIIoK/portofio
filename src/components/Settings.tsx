'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Settings2, Sun, Moon, X } from 'lucide-react';

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 p-3 rounded-full bg-card border border-border hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl z-50"
        aria-label="Настройки"
      >
        <Settings2 className="w-5 h-5 text-foreground" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-card-foreground">Настройки</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-card-foreground mb-3">Тема</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => theme === 'dark' && toggleTheme()}
                    className={`flex-1 p-3 rounded-lg border transition-all ${
                      theme === 'light' 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-muted border-border hover:bg-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Sun className="w-4 h-4" />
                      Светлая
                    </div>
                  </button>
                  <button
                    onClick={() => theme === 'light' && toggleTheme()}
                    className={`flex-1 p-3 rounded-lg border transition-all ${
                      theme === 'dark' 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-muted border-border hover:bg-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Moon className="w-4 h-4" />
                      Темная
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-card-foreground mb-3">Цветовая схема</h3>
                <div className="text-sm text-secondary-foreground">
                  🎨 Зелёная тема активна
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
