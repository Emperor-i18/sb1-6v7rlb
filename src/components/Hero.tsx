import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="text-center px-4">
        <img
          src="/storage/emulated/0/Pictures/Canva/Red Painting Silhouette Illustration Phone Wallpaper_20241019_181016_0000.png"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">V RAKSHITH</h1>
        <p className="text-xl text-gray-600 mb-8">WEB DEVELOPER & UI/UX DESIGNER r</p>
        <a href="#about" className="animate-bounce inline-block">
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </a>
      </div>
    </section>
  );
}