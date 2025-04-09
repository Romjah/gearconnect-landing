import Link from "next/link";

export default function Download() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Télécharger GearConnect</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Disponible sur iOS et Android. Téléchargez gratuitement l&apos;application et rejoignez la communauté automobile dès aujourd&apos;hui.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* App Store */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-black-100">
              <div className="bg-black rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 384 512" className="h-12 w-12 text-white">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">iOS App Store</h2>
              <p className="text-black mb-8">
                Téléchargez GearConnect pour iPhone et iPad depuis l&apos;App Store et connectez-vous avec la communauté automobile.
              </p>
              <a 
                href="#" 
                className="bg-black text-white hover:bg-black-800 py-3 px-8 rounded-lg font-medium inline-flex items-center justify-center shadow-md"
              >
                <svg viewBox="0 0 384 512" className="h-5 w-5 mr-2">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store
              </a>
            </div>
            
            {/* Google Play */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-black-100">
              <div className="bg-indigo-700 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 512 512" className="h-12 w-12 text-white">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">Google Play Store</h2>
              <p className="text-black mb-8">
                Téléchargez GearConnect pour Android depuis le Google Play Store et partagez votre passion automobile.
              </p>
              <a 
                href="#" 
                className="bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium inline-flex items-center justify-center shadow-md"
              >
                <svg viewBox="0 0 512 512" className="h-5 w-5 mr-2">
                  <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
          
          {/* QR Code Section */}
          <div className="mt-20 bg-indigo-50 p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-black">Scannez pour télécharger</h2>
              <p className="text-black">
                Utilisez votre appareil mobile pour scanner le QR code et télécharger directement l&apos;application GearConnect.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-lg inline-block mb-3">
                  <div className="h-36 w-36 bg-black-200 flex items-center justify-center">
                    <span className="text-sm text-black">QR Code iOS</span>
                  </div>
                </div>
                <p className="text-sm font-medium">iOS</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-lg inline-block mb-3">
                  <div className="h-36 w-36 bg-black-200 flex items-center justify-center">
                    <span className="text-sm text-black">QR Code Android</span>
                  </div>
                </div>
                <p className="text-sm font-medium">Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Ce que disent nos utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-700 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl font-bold">M</span>
                </div>
                <div>
                  <h3 className="font-medium">Marc D.</h3>
                  <p className="text-black text-sm">Passionné Porsche</p>
                </div>
              </div>
              <p className="italic text-black">
                J&apos;ai rencontré d&apos;autres passionnés de Porsche dans ma région grâce à GearConnect. Les événements organisés sont toujours de grande qualité !
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-700 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl font-bold">S</span>
                </div>
                <div>
                  <h3 className="font-medium">Sophie L.</h3>
                  <p className="text-black text-sm">Collectionneuse</p>
                </div>
              </div>
              <p className="italic text-black">
                La marketplace entre passionnés est une réelle plus-value. J&apos;ai trouvé des pièces rares pour ma collection grâce à GearConnect.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-700 rounded-full flex items-center justify-center mr-4 text-white">
                  <span className="text-xl font-bold">T</span>
                </div>
                <div>
                  <h3 className="font-medium">Thomas R.</h3>
                  <p className="text-black text-sm">Club automobile</p>
                </div>
              </div>
              <p className="italic text-black">
                Notre club utilise GearConnect pour organiser tous nos événements. C&apos;est devenu un outil indispensable pour notre communauté !
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Help Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;aide ?</h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-8">
            Notre équipe est disponible pour vous aider à rejoindre la communauté automobile GearConnect.
          </p>
          <Link 
            href="/contact" 
            className="bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium inline-block shadow-md"
          >
            Contacter le support
          </Link>
        </div>
      </section>
    </main>
  );
} 