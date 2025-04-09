import { getDictionary } from "@/dictionaries";
import { i18n } from "@/app/i18n-config";

// Importer les composants
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFaq from "../components/contact/ContactFaq";

export default async function Contact() {
  // Utiliser la langue par défaut pour cette démo
  const locale = i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const { hero, form, info, faq } = dict.contact;

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