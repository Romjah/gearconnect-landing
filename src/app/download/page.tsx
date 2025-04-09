// Import components
import DownloadHero from "../components/download/DownloadHero";
import DownloadOption from "../components/download/DownloadOption";
import QrCodeSection from "../components/download/QrCodeSection";
import Testimonials from "../components/contact/Testimonials";
import HelpSection from "../components/contact/HelpSection";

export default async function Download() {
  // Static content
  const hero = {
    title: "Download GearConnect",
    description: "Available on iOS and Android"
  };
  
  const iosApp = {
    title: "iOS App",
    description: "Download GearConnect for iPhone and iPad from the App Store",
    buttonText: "Download on the App Store"
  };
  
  const androidApp = {
    title: "Android App",
    description: "Download GearConnect for your Android device from Google Play",
    buttonText: "Download on Google Play"
  };
  
  const qrCode = {
    title: "Scan to download",
    description: "Scan this QR code with your phone to directly download the app"
  };
  
  const testimonials = {
    title: "What our users say",
    items: [
      {
        initial: "M",
        name: "Mike Johnson",
        role: "Garage Owner",
        text: "GearConnect has transformed how I manage my garage. I can easily find parts, communicate with customers, and stay updated on market trends."
      },
      {
        initial: "S",
        name: "Sarah Williams",
        role: "Automotive Enthusiast",
        text: "I love being able to connect with other enthusiasts and discover automotive events in my area. The interface is intuitive and the features are exactly what I needed."
      },
      {
        initial: "L",
        name: "Luke Parker",
        role: "Mechanic",
        text: "As a mechanic, GearConnect has become my indispensable tool. I can easily find technical information and exchange with my peers."
      }
    ]
  };
  
  const help = {
    title: "Need help?",
    description: "Our team is here to help you get the most out of GearConnect",
    buttonText: "Contact Us"
  };

  // Create SVG icon components for iOS and Android
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