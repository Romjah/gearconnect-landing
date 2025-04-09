import "../styles";

// Importer les composants
import FeaturesHero from "../components/feature/FeaturesHero";
import FeatureSection from "../components/feature/FeatureSection";
import FeaturesCta from "../components/feature/FeaturesCta";

export default async function Features() {
  // Contenu statique
  const hero = {
    title: "Découvrez GearConnect",
    description: "Une plateforme complète pour les passionnés d'automobile"
  };
  
  const events = {
    title: "Événements",
    description: "Restez informé des événements automobiles à venir dans votre région",
    features: [
      "Salons automobiles",
      "Expositions de voitures classiques",
      "Courses et rallyes",
      "Rencontres de clubs"
    ],
    ctaText: "Explorer les événements"
  };
  
  const jobs = {
    title: "Opportunités d'emploi",
    description: "Trouvez votre prochain poste dans l'industrie automobile",
    features: [
      "Mécanicien",
      "Vendeur",
      "Design automobile",
      "Ingénierie"
    ],
    ctaText: "Voir les offres"
  };
  
  const feed = {
    title: "Fil d'actualité",
    description: "Restez à jour avec les dernières nouvelles et tendances du monde automobile",
    features: [
      "Actualités",
      "Critiques de véhicules",
      "Innovations technologiques",
      "Conseils d'entretien"
    ],
    ctaText: "Lire les dernières actualités"
  };
  
  const cta = {
    title: "Prêt à rejoindre la communauté?",
    description: "Téléchargez l'application GearConnect dès aujourd'hui et connectez-vous avec d'autres passionnés d'automobile.",
    buttonText: "Télécharger maintenant"
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