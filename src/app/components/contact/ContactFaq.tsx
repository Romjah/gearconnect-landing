import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface ContactFaqProps {
  title: string;
  faqItems: FaqItem[];
  ctaText: string;
  ctaButtonText: string;
}

export default function ContactFaq({ title, faqItems, ctaText, ctaButtonText }: ContactFaqProps) {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {title}
        </h2>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-black">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-black mb-4">
            {ctaText}
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
          >
            {ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
} 