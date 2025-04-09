import React from 'react';

interface ContactHeroProps {
  title: string;
  description: string;
}

export default function ContactHero({ title, description }: ContactHeroProps) {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
          {description}
        </p>
      </div>
    </section>
  );
} 