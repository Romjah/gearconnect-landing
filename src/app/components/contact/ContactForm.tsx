import React from 'react';

interface ContactFormProps {
  title: string;
  description: string;
  submitButtonText: string;
}

export default function ContactForm({ title, description, submitButtonText }: ContactFormProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <p className="text-black mb-8">
        {description}
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
            className="mt-1 h-4 w-4 focus:ring-indigo-700 border-gray-300 rounded text-black"
          />
          <label htmlFor="privacy" className="ml-2 block text-black">
            J&apos;accepte que GearConnect utilise mes données conformément à la politique de confidentialité.
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-indigo-700 text-white hover:bg-indigo-800 py-3 px-8 rounded-lg font-medium shadow-md"
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
} 