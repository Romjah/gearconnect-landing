// Importer les composants
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFaq from "../components/contact/ContactFaq";

export default async function Contact() {
  // Contenu statique
  const hero = {
    title: "Contactez-nous",
    description: "Vous avez des questions? Nous sommes là pour vous aider"
  };

  const form = {
    title: "Envoyez-nous un message",
    description: "Nous vous répondrons dans les meilleurs délais",
    submitButtonText: "Envoyer"
  };

  const info = {
    title: "Informations de contact",
    description: "Plusieurs façons de nous contacter",
    email: {
      title: "Email",
      address: "contact@gearconnect.com",
      description: "Notre équipe vous répond sous 24h"
    },
    phone: {
      title: "Téléphone",
      number: "+33 1 23 45 67 89",
      description: "Du lundi au vendredi, 9h-18h"
    },
    address: {
      title: "Adresse",
      line1: "123 Avenue des Passionnés",
      line2: "75008 Paris, France"
    },
    hours: {
      title: "Heures d'ouverture",
      line1: "Lundi-Vendredi: 9h-18h",
      line2: "Samedi: 10h-16h"
    },
    social: {
      title: "Réseaux sociaux"
    }
  };

  const faq = {
    title: "Questions fréquentes",
    items: [
      {
        question: "Comment télécharger l'application GearConnect?",
        answer: "L'application GearConnect est disponible sur l'App Store et Google Play. Vous pouvez la télécharger en visitant notre page de téléchargement."
      },
      {
        question: "L'application est-elle gratuite?",
        answer: "Oui, l'application GearConnect est entièrement gratuite à télécharger et à utiliser. Des fonctionnalités premium sont disponibles via un abonnement mensuel ou annuel."
      },
      {
        question: "Comment puis-je signaler un problème technique?",
        answer: "Vous pouvez signaler un problème technique en utilisant le formulaire de contact sur cette page ou directement depuis l'application dans la section 'Aide'."
      }
    ],
    ctaText: "Vous avez d'autres questions?",
    ctaButtonText: "Contactez-nous"
  };

  return (
    <main>
      {/* Hero Section */}
      <ContactHero 
        title={hero.title} 
        description={hero.description} 
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm 
              title={form.title}
              description={form.description}
              submitButtonText={form.submitButtonText}
            />
            
            <ContactInfo 
              title={info.title}
              description={info.description}
              email={info.email}
              phone={info.phone}
              address={info.address}
              hours={info.hours}
              social={info.social}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <ContactFaq 
        title={faq.title}
        faqItems={faq.items}
        ctaText={faq.ctaText}
        ctaButtonText={faq.ctaButtonText}
      />
    </main>
  );
} 