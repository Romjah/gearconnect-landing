import Link from "next/link";

export default function FAQ() {
  const faqData = [
    {
      question: "What is the GearConnect program?",
      answer: "Our program is an exclusive community where racing pilots help us build the first career acceleration platform for motorsport. Members get early access to features and help shape the platform's development."
    },
    {
      question: "How does the program work?",
      answer: "As a member, you'll test early features, provide feedback, and help us understand what pilots need most. We're building the platform together based on real user input and racing community insights."
    },
    {
      question: "When will the full platform launch?",
      answer: "We're focused on building the right features. The timeline depends on community feedback and development progress. Members will be the first to access the full platform when it's ready."
    },
    {
      question: "Is the program free?",
      answer: "Yes, the program is completely free. We're looking for dedicated pilots who want to help build the future of racing career development, not paying customers at this stage."
    },
    {
      question: "How can I provide feedback?",
      answer: "You can share feedback using the contact form, through our community channels, or directly with our development team. Your input directly influences what we build next."
    },
    {
      question: "What kind of performances can I track?",
      answer: "You'll be able to log lap times, race results, championship standings, personal bests, and improvements across different tracks and racing categories."
    },
    {
      question: "Who will see my performance data?",
      answer: "Only verified teams, sponsors, and mentors in our community will have access to performance data. You control your privacy settings and can choose what to share."
    },
    {
      question: "Do I need to be a professional racer to join?",
      answer: "No! We welcome pilots at all levels - from karting enthusiasts to professional racers. Our platform is designed to help talent at every stage get discovered."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Everything you need to know about GearConnect and our Early Access program
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-16 text-center">
            <div className="bg-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Get in touch and we'll respond as quickly as possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contact" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/#waitlist" 
                  className="bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 