import React from 'react';
import Link from 'next/link';

interface HelpSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function HelpSection({ title, description, buttonText, buttonLink }: HelpSectionProps) {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-lg text-black max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <Link 
          href={buttonLink}
          className="bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium inline-block shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
} 