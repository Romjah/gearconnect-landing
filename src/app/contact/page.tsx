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
    phone: {
      title: "Phone",
      number: "+1 (555) 123-4567",
      description: "Monday to Friday, 9am-6pm"
    },
    address: {
      title: "Address",
      line1: "123 Automotive Drive",
      line2: "Detroit, MI 48201, USA"
    },
    hours: {
      title: "Hours",
      line1: "Monday-Friday: 9am-6pm",
      line2: "Saturday: 10am-4pm"
    },
    social: {
      title: "Social Media"
    }
  };

  const faq = {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How do I download the GearConnect app?",
        answer: "The GearConnect app is available on the App Store and Google Play. You can download it by visiting our download page."
      },
      {
        question: "Is the app free to use?",
        answer: "Yes, the GearConnect app is completely free to download and use. Premium features are available through monthly or annual subscriptions."
      },
      {
        question: "How can I report a technical issue?",
        answer: "You can report technical issues using the contact form on this page or directly from the app in the 'Help' section."
      }
    ],
    ctaText: "Have more questions?",
    ctaButtonText: "Contact Us"
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