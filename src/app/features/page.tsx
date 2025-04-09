import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { i18n } from "@/app/i18n-config";
import "../styles";

export default async function Features() {
  // Utiliser la langue par défaut pour cette démo
  const locale = i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const { hero, events, jobs, feed, cta } = dict.features;

  return (
    <main>
      {/* Hero Section */}
      <section className="features-hero">
        <div className="features-hero-container">
          <h1 className="features-hero-title">
            {hero.title}
          </h1>
          <p className="features-hero-description">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="features-grid-container">

          {/* Feature 1 - Events */}
          <div className="feature-row">
            <div className="feature-content">
              <h2 className="feature-title">
                {events.title}
              </h2>
              <p className="feature-description">
                {events.description}
              </p>
              <ul className="feature-list">
                {events.features.map((feature: string, index: number) => (
                  <li key={index} className="feature-list-item">
                    <svg
                      className="feature-list-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="feature-list-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="feature-cta"
              >
                {events.ctaText}
              </Link>
            </div>
            <div className="feature-image-container">
              <div className="feature-image-wrapper">
                <Image
                  src="/images/events.jpg"
                  alt="Événements automobiles"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Jobs */}
          <div className="feature-row-reverse">
            <div className="feature-image-container">
              <div className="feature-image-wrapper">
                <Image
                  src="/images/jobs.jpg"
                  alt="Opportunités d'emploi automobile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="feature-content-right">
              <h2 className="feature-title">
                {jobs.title}
              </h2>
              <p className="feature-description">
                {jobs.description}
              </p>
              <ul className="feature-list">
                {jobs.features.map((feature: string, index: number) => (
                  <li key={index} className="feature-list-item">
                    <svg
                      className="feature-list-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="feature-list-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="feature-cta"
              >
                {jobs.ctaText}
              </Link>
            </div>
          </div>

          {/* Feature 3 - Fil d'actualité */}
          <div className="feature-row">
            <div className="feature-content">
              <h2 className="feature-title">
                {feed.title}
              </h2>
              <p className="feature-description">
                {feed.description}
              </p>
              <ul className="feature-list">
                {feed.features.map((feature: string, index: number) => (
                  <li key={index} className="feature-list-item">
                    <svg
                      className="feature-list-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="feature-list-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="feature-cta"
              >
                {feed.ctaText}
              </Link>
            </div>
            <div className="feature-image-container">
              <div className="feature-image-wrapper">
                <Image
                  src="/images/filActu.jpg"
                  alt="Fil d'actualité automobile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="features-cta-container">
          <h2 className="features-cta-title">
            {cta.title}
          </h2>
          <p className="features-cta-description">
            {cta.description}
          </p>
          <div className="features-cta-button-container">
            <Link
              href="/download"
              className="features-cta-button"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 