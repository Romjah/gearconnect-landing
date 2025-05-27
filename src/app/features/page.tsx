import "../styles";

// Import components
import FeaturesHero from "../components/feature/FeaturesHero";
import FeatureSection from "../components/feature/FeatureSection";
import FeaturesCta from "../components/feature/FeaturesCta";

export default async function Features() {
  // Static content
  const hero = {
    title: "Discover GearConnect",
    description: "A complete platform for automotive enthusiasts"
  };
  
  const events = {
    title: "Events",
    description: "Stay informed about upcoming automotive events in your area",
    features: [
      "Auto shows",
      "Classic car exhibitions",
      "Races and rallies",
      "Club meetings"
    ],
    ctaText: "Explore events"
  };
  
  const feed = {
    title: "News Feed",
    description: "Stay up to date with the latest news and trends in the automotive world",
    features: [
      "News",
      "Vehicle reviews",
      "Technological innovations",
      "Maintenance tips"
    ],
    ctaText: "Read the latest news"
  };
  
  const cta = {
    title: "Ready to join the community?",
    description: "Download the GearConnect app today and connect with other automotive enthusiasts.",
    buttonText: "Download now"
  };

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
            imageAlt="Automotive events"
          />

          {/* Feature 2 - News Feed */}
          <FeatureSection
            title={feed.title}
            description={feed.description}
            features={feed.features}
            ctaText={feed.ctaText}
            imageSrc="/images/filActu.jpg"
            imageAlt="Automotive news feed"
            reverse={true}
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