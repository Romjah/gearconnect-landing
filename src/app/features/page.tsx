import { getDictionary } from "@/dictionaries";
import { i18n } from "@/app/i18n-config";
import "../styles";

// Importer les composants
import FeaturesHero from "../components/feature/FeaturesHero";
import FeatureSection from "../components/feature/FeatureSection";
import FeaturesCta from "../components/feature/FeaturesCta";

export default async function Features() {
  // Utiliser la langue par défaut pour cette démo
  const locale = i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const { hero, events, jobs, feed, cta } = dict.features;

  return (
    <main>
      {/* Hero Section */}
      <FeaturesHero 
        title={hero.title} 
        description={hero.description} 
      />

      {/* Features Grid */}
      <section className="features-grid">
        <div className="features-grid-container">
          {/* Feature 1 - Events */}
          <FeatureSection
            title={events.title}
            description={events.description}
            features={events.features}
            ctaText={events.ctaText}
            imageSrc="/images/events.jpg"
            imageAlt="Événements automobiles"
          />

          {/* Feature 2 - Jobs */}
          <FeatureSection
            title={jobs.title}
            description={jobs.description}
            features={jobs.features}
            ctaText={jobs.ctaText}
            imageSrc="/images/jobs.jpg"
            imageAlt="Opportunités d'emploi automobile"
            reverse={true}
          />

          {/* Feature 3 - Fil d'actualité */}
          <FeatureSection
            title={feed.title}
            description={feed.description}
            features={feed.features}
            ctaText={feed.ctaText}
            imageSrc="/images/filActu.jpg"
            imageAlt="Fil d'actualité automobile"
          />
        </div>
      </section>

      {/* CTA Section */}
      <FeaturesCta
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
      />
    </main>
  );
} 