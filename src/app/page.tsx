import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Connectez-vous avec les passionnés d&apos;automobile
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                GearConnect, le premier réseau social dédié aux passionnés d&apos;automobile. Partagez, échangez et découvrez des véhicules d&apos;exception.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/download" 
                  className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium text-center shadow-md"
                >
                  Télécharger l&apos;application
                </Link>
                <Link 
                  href="/features" 
                  className="bg-transparent hover:bg-indigo-800 border border-white py-3 px-6 rounded-lg font-medium text-center"
                >
                  Découvrir les fonctionnalités
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full md:h-96 md:w-96 mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-md shadow-xl p-4">
                  <div className="h-full w-full bg-gradient-to-tr from-indigo-800/80 to-blue-800/80 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">GearConnect App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fonctionnalités principales</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Découvrez comment GearConnect redéfinit l&apos;expérience sociale automobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Fil d&apos;actualité</h3>
              <p className="text-black">
                Échangez et partagez vos passions dans un fil d&apos;actualité dédié aux enthousiastes de l&apos;automobile.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Événements automobiles</h3>
              <p className="text-black">
                Découvrez et participez à des événements près de chez vous pour rencontrer d&apos;autres passionnés.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Emplois automobiles</h3>
              <p className="text-black">
                Transformez votre passion en métier grâce à notre section emploi dédiée au secteur automobile.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Quelques étapes simples pour rejoindre la communauté GearConnect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Téléchargez l&apos;application</h3>
              <p className="text-black">Disponible sur iOS et Android, téléchargez gratuitement l&apos;application GearConnect.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Créez votre profil</h3>
              <p className="text-black">Personnalisez votre profil avec vos intérêts et vos véhicules préférés pour une expérience sur mesure.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Connectez-vous</h3>
              <p className="text-black">Commencez à interagir avec la communauté, partagez des photos et rejoignez des événements.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre la communauté automobile ?</h2>
                <p className="text-indigo-100 mb-8">
                  Téléchargez GearConnect dès maintenant et connectez-vous avec des milliers de passionnés d&apos;automobile.
                </p>
                <Link 
                  href="/download" 
                  className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium shadow-md"
                >
                  Télécharger gratuitement
                </Link>
              </div>
              <div className="md:w-1/2 p-12 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ce que disent nos utilisateurs</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-700 pl-4 py-2">
                    <p className="italic text-black mb-2">
                      &quot;GearConnect m&apos;a permis de rencontrer d&apos;autres passionnés de BMW M3 dans ma région. Une véritable communauté de passionnés !&quot;
                    </p>
                    <p className="text-gray-900 font-medium">- Thomas L., Collectionneur</p>
                  </div>
                  <div className="border-l-4 border-indigo-700 pl-4 py-2">
                    <p className="italic text-black mb-2">
                      &quot;J&apos;ai découvert des rassemblements automobiles incroyables grâce à GearConnect. Le meilleur réseau social pour les amateurs d&apos;automobile.&quot;
                    </p>
                    <p className="text-gray-900 font-medium">- Marie D., Pilote amateur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
