import React from 'react';

interface DownloadHeroProps {
  title: string;
  description: string;
}

export default function DownloadHero({ title, description }: DownloadHeroProps) {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
} 