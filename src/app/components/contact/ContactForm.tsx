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
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-black font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
              placeholder="Your last name"
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
            placeholder="contact@gearconnect.fr"
          />
        </div>
        
        <div>
          <label htmlFor="vehicle" className="block text-black font-medium mb-2">
            Your vehicle (optional)
          </label>
          <input
            type="text"
            id="vehicle"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 text-black"
            placeholder="Make, model and year"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-black font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-700 focus:border-indigo-700 bg-white text-black"
          >
            <option value="">Select a subject</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership Proposal</option>
            <option value="events">Event Organization</option>
            <option value="other">Other</option>
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
            placeholder="Describe your request in detail..."
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            className="mt-1 h-4 w-4 focus:ring-indigo-700 border-gray-300 rounded text-black"
          />
          <label htmlFor="privacy" className="ml-2 block text-black">
            I agree that GearConnect may use my data in accordance with the privacy policy.
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