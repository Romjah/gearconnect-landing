import React from 'react';
import Link from 'next/link';

interface FeatureCtaProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function FeaturesCta({ title, description, buttonText }: FeatureCtaProps) {
  return (
    <section className="features-cta">
      <div className="features-cta-container">
        <h2 className="features-cta-title">
          {title}
        </h2>
        <p className="features-cta-description">
          {description}
        </p>
        <div className="features-cta-button-container">
          <Link
            href="/#waitlist"
            className="features-cta-button"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
} 