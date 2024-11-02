import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          V RAKSHITH
        </h1>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Emperor-i18/Emperor-i18" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rakshith-v-rakshith-v-432b4832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/emperor_i8?igsh=MWhzcXd4bDBkeTF3MA==" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
}