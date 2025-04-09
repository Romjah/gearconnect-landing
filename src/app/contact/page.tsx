export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
            L&apos;équipe GearConnect est là pour répondre à vos questions et vous accompagner dans votre passion automobile.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-black mb-8">
                Que vous ayez une question sur notre application, que vous souhaitiez nous proposer un partenariat ou simplement partager votre passion automobile, nous sommes à votre écoute.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-black font-medium mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-black font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="vehicle" className="block text-black font-medium mb-2">
                    Votre véhicule (optionnel)
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
                    placeholder="Marque, modèle et année"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-black font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 bg-white text-black"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="support">Support technique</option>
                    <option value="feedback">Retour d&apos;expérience</option>
                    <option value="partnership">Proposition de partenariat</option>
                    <option value="events">Organisation d&apos;événements</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
                    placeholder="Détaillez votre demande..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 h-4 w-4 text-indigo-700 focus:ring-indigo-700 border-gray-300 rounded text-black"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-black">
                    J&apos;accepte que GearConnect utilise mes données conformément à la politique de confidentialité.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <p className="text-black mb-8">
                Vous préférez nous contacter directement ? Voici nos informations de contact.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-black">support@gearconnect.com</p>
                    <p className="text-black">Pour toute question concernant l&apos;application</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-black">+33 (0)1 23 45 67 89</p>
                    <p className="text-black">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-black">123 Avenue des Passionnés</p>
                    <p className="text-black">75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
                    <p className="text-black">Support en ligne: 24/7</p>
                    <p className="text-black">Bureau: Lun-Ven, 9h-18h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-indigo-100 p-3 rounded-full text-indigo-700 hover:bg-indigo-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-100 p-3 rounded-full text-indigo-700 hover:bg-indigo-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-100 p-3 rounded-full text-indigo-700 hover:bg-indigo-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-100 p-3 rounded-full text-indigo-700 hover:bg-indigo-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions fréquemment posées
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comment puis-je organiser un événement automobile sur GearConnect ?
                </h3>
                <p className="text-black">
                  Pour organiser un événement, accédez à la section &quot;Événements&quot; de l&apos;application, puis cliquez sur &quot;Créer un événement&quot;. Remplissez les détails de votre événement, comme la date, le lieu, le type de véhicules concernés et une description. Après validation, votre événement sera visible par les membres de la communauté.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comment rejoindre des groupes de passionnés spécifiques ?
                </h3>
                <p className="text-black">
                  Dans l&apos;application, rendez-vous dans la section &quot;Groupes&quot;, puis parcourez les groupes disponibles ou utilisez la recherche pour trouver un groupe spécifique (par marque, modèle, ou type de véhicule). Cliquez sur &quot;Rejoindre&quot; pour devenir membre et commencer à interagir avec les autres passionnés.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comment ajouter un véhicule à mon garage virtuel ?
                </h3>
                <p className="text-black">
                  Accédez à votre profil, puis à la section &quot;Mon garage&quot;. Cliquez sur &quot;Ajouter un véhicule&quot; et renseignez les informations de votre voiture (marque, modèle, année, modifications, etc.). Vous pouvez également ajouter des photos pour présenter votre véhicule à la communauté.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Est-il possible de vendre des pièces ou accessoires sur GearConnect ?
                </h3>
                <p className="text-black">
                  Oui, GearConnect propose une marketplace intégrée où vous pouvez vendre et acheter des pièces, accessoires et même des véhicules entre passionnés. Rendez-vous dans la section &quot;Marketplace&quot; pour consulter les annonces ou créer la vôtre.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comment signaler un contenu inapproprié ?
                </h3>
                <p className="text-black">
                  Si vous rencontrez un contenu qui enfreint nos règles communautaires, utilisez la fonction &quot;Signaler&quot; accessible depuis l&apos;icône à trois points à côté de chaque publication. Notre équipe de modération examinera rapidement votre signalement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-black mb-4">
              Vous avez d&apos;autres questions ?
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
            >
              Consulter notre centre d&apos;aide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 