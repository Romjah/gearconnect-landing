// Importer les composants
import DownloadHero from "../components/download/DownloadHero";
import DownloadOption from "../components/download/DownloadOption";
import QrCodeSection from "../components/download/QrCodeSection";
import Testimonials from "../components/contact/Testimonials";
import HelpSection from "../components/contact/HelpSection";

export default async function Download() {
  // Contenu statique
  const hero = {
    title: "Téléchargez GearConnect",
    description: "Disponible sur iOS et Android"
  };
  
  const iosApp = {
    title: "iOS App",
    description: "Téléchargez GearConnect pour iPhone et iPad depuis l'App Store",
    buttonText: "Télécharger sur l'App Store"
  };
  
  const androidApp = {
    title: "Android App",
    description: "Téléchargez GearConnect pour votre appareil Android depuis Google Play",
    buttonText: "Télécharger sur Google Play"
  };
  
  const qrCode = {
    title: "Scanner pour télécharger",
    description: "Scannez ce code QR avec votre téléphone pour télécharger directement l'application"
  };
  
  const testimonials = {
    title: "Ce que disent nos utilisateurs",
    items: [
      {
        initial: "M",
        name: "Michel Dupont",
        role: "Propriétaire de garage",
        text: "GearConnect a transformé la façon dont je gère mon garage. Je peux facilement trouver des pièces, communiquer avec des clients et rester à jour sur les tendances du marché."
      },
      {
        initial: "S",
        name: "Sophie Martin",
        role: "Passionnée d'automobile",
        text: "J'adore pouvoir me connecter avec d'autres passionnés et découvrir des événements automobiles dans ma région. L'interface est intuitive et les fonctionnalités sont exactement ce dont j'avais besoin."
      },
      {
        initial: "L",
        name: "Luc Bernard",
        role: "Mécanicien",
        text: "En tant que mécanicien, GearConnect est devenu mon outil indispensable. Je peux facilement trouver des informations techniques et échanger avec mes pairs."
      }
    ]
  };
  
  const help = {
    title: "Besoin d'aide?",
    description: "Notre équipe est là pour vous aider à tirer le meilleur parti de GearConnect",
    buttonText: "Contactez-nous"
  };

  // Créer des composants d'icônes SVG pour iOS et Android
  const AppleIcon = (
    <svg viewBox="0 0 384 512" className="h-12 w-12 text-white">
      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );

  const AndroidIcon = (
    <svg viewBox="0 0 512 512" className="h-12 w-12 text-white">
      <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
    </svg>
  );

  const AppleButtonIcon = (
    <svg viewBox="0 0 384 512" className="h-5 w-5 mr-2">
      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );

  const AndroidButtonIcon = (
    <svg viewBox="0 0 512 512" className="h-5 w-5 mr-2">
      <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
    </svg>
  );

  return (
    <main>
      {/* Hero Section */}
      <DownloadHero 
        title={hero.title} 
        description={hero.description} 
      />

      {/* Download Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* App Store */}
            <DownloadOption
              title={iosApp.title}
              description={iosApp.description}
              icon={AppleIcon}
              buttonText={iosApp.buttonText}
              buttonIcon={AppleButtonIcon}
              buttonClass="bg-black text-white hover:bg-black-800"
              iconContainerClass="bg-black"
            />
            
            {/* Google Play */}
            <DownloadOption
              title={androidApp.title}
              description={androidApp.description}
              icon={AndroidIcon}
              buttonText={androidApp.buttonText}
              buttonIcon={AndroidButtonIcon}
              buttonClass="bg-indigo-700 text-white hover:bg-indigo-800"
              iconContainerClass="bg-indigo-700"
            />
          </div>
          
          {/* QR Code Section */}
          <QrCodeSection
            title={qrCode.title}
            description={qrCode.description}
          />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials
        title={testimonials.title}
        testimonials={testimonials.items}
      />
      
      {/* Help Section */}
      <HelpSection
        title={help.title}
        description={help.description}
        buttonText={help.buttonText}
        buttonLink="/contact"
      />
    </main>
  );
} 