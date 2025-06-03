// Import components
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFaq from "../components/contact/ContactFaq";

export default async function Contact() {
  // Static content
  const hero = {
    title: "Contact Us",
    description: "Have questions? We're here to help"
  };

  const form = {
    title: "Send us a message",
    description: "We'll get back to you as soon as possible",
    submitButtonText: "Send"
  };

  const info = {
    title: "Contact Information",
    description: "Multiple ways to reach us",
    email: {
      title: "Email",
      address: "contact@gearconnect.fr",
      description: "Our team responds within 24 hours"
    },
    social: {
      title: "Social Media"
    }
  };

  const faq = {
    title: "Program FAQ",
    items: [
      {
        question: "What is the GearConnect program?",
        answer: "Our program is an exclusive community where racing pilots help us build the first career acceleration platform for motorsport. Members get early access to features and help shape the platform's development."
      },
      {
        question: "How does the program work?",
        answer: "As a member, you'll test early features, provide feedback, and help us understand what pilots need most. We're building the platform together based on real user input and racing community insights."
      },
      {
        question: "When will the full platform launch?",
        answer: "We're focused on building the right features. The timeline depends on community feedback and development progress. Members will be the first to access the full platform when it's ready."
      },
      {
        question: "Is the program free?",
        answer: "Yes, the program is completely free. We're looking for dedicated pilots who want to help build the future of racing career development, not paying customers at this stage."
      },
      {
        question: "How can I provide feedback?",
        answer: "You can share feedback using the contact form on this page, through our community channels, or directly with our development team. Your input directly influences what we build next."
      }
    ],
    ctaText: "Ready to join the community?",
    ctaButtonText: "Join Early Access Program"
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