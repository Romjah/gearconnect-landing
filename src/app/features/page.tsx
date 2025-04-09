import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Des fonctionnalités pour tous les passionnés
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
            Découvrez comment GearConnect transforme votre expérience automobile
            avec des outils conçus pour les véritables passionnés.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Feature 1 - Events */}
          <div className="flex flex-col-reverse md:flex-row items-center mb-20">
            <div className="md:w-1/2 md:pr-12 mt-10 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Participez à des événements automobiles
              </h2>
              <p className="text-black mb-6">
                Créez et participez à des rencontres, rallyes, expositions et
                journées circuit. GearConnect vous permet de découvrir des événements
                près de chez vous et de rencontrer d&apos;autres passionnés en personne.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Découverte d&apos;événements près de chez vous
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Organisation et participation aux rencontres
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Partage de souvenirs après les événements
                  </span>
                </li>
              </ul>
              <Link
                href="/download"
                className="inline-block bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
              >
                Découvrir les événements
              </Link>
            </div>
            <div className="md:w-1/2 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="/images/events.jpg"
                  alt="Événements automobiles"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Jobs */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="/images/jobs.jpg"
                  alt="Opportunités d'emploi automobile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trouvez un emploi dans l&apos;automobile
              </h2>
              <p className="text-black mb-6">
                Passez de la passion au métier! Notre section emploi vous met en relation 
                avec des entreprises du secteur automobile qui recrutent. Consultez les 
                offres d&apos;emploi et faites décoller votre carrière dans l&apos;univers automobile.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Offres d&apos;emploi exclusives dans le secteur automobile
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Mise en relation directe avec les recruteurs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Conseils pour postuler dans le secteur automobile
                  </span>
                </li>
              </ul>
              <Link
                href="/download"
                className="inline-block bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
              >
                Explorer les offres d&apos;emploi
              </Link>
            </div>
          </div>

          {/* Feature 3 - Fil d'actualité */}
          <div className="flex flex-col-reverse md:flex-row items-center mb-20">
            <div className="md:w-1/2 md:pr-12 mt-10 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fil d&apos;actualité entre passionnés
              </h2>
              <p className="text-black mb-6">
                Échangez avec d&apos;autres passionnés d&apos;automobile sur un fil d&apos;actualité
                dédié. Partagez vos expériences, photos de vos véhicules et sujets qui
                vous passionnent avec une communauté qui partage votre passion.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Publications et discussions en temps réel
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Partage de photos et vidéos de vos véhicules
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-indigo-700 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-black">
                    Actualités du monde automobile personnalisées
                  </span>
                </li>
              </ul>
              <Link
                href="/download"
                className="inline-block bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
              >
                Découvrir le fil d&apos;actualité
              </Link>
            </div>
            <div className="md:w-1/2 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="/images/filActu.jpg"
                  alt="Fil d'actualité automobile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à rejoindre la communauté automobile ?
          </h2>
          <p className="text-black text-xl mb-10 max-w-3xl mx-auto">
            Téléchargez GearConnect dès maintenant et connectez-vous avec des
            milliers de passionnés d&apos;automobile. L&apos;application est gratuite et
            disponible sur iOS et Android.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
            >
              Télécharger
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 