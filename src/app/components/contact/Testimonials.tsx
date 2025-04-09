import React from 'react';

interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-700 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl font-bold">{testimonial.initial}</span>
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-black text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-black">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 