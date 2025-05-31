import "../styles";

// Import components
import FeaturesHero from "../components/feature/FeaturesHero";
import FeatureSection from "../components/feature/FeatureSection";
import FeaturesCta from "../components/feature/FeaturesCta";

export default async function Features() {
  // Static content for Career Acceleration Platform
  const hero = {
    title: "How You Get Discovered",
    description: "See how our performance tracking system makes you visible to the motorsport community that can accelerate your career"
  };
  
  const tracking = {
    title: "Performance Tracking That Will Get You Noticed",
    description: "We're developing a system that will capture and showcase your best performances to industry professionals",
    features: [
      "Quick and intuitive lap time and performance logging",
      "Standout achievement highlighting system", 
      "Performance trend visualization tools",
      "Professional-grade statistics display",
      "Real-time performance feed updates"
    ],
    ctaText: "Join Development"
  };
  
  const community = {
    title: "Industry Community We're Building",
    description: "Help us create connections with teams, sponsors, and mentors who want to discover new talent",
    features: [
      "Team managers interested in scouting drivers",
      "Sponsors seeking promising talent to support",
      "Experienced mentors ready to offer guidance",
      "Racing community engagement features",
      "Direct opportunity notification system"
    ],
    ctaText: "Join Development"
  };
  
  const cta = {
    title: "Ready to help shape the future of racing careers?",
    description: "Join our community where we're building the platform that will showcase track performances you log to teams, sponsors, and mentors looking for talent like yours.",
    buttonText: "Join Development"
  };

  return (
    <main>
      {/* Hero Section */}
      <FeaturesHero 
        title={hero.title} 
        description={hero.description} 
      />

      {/* Community Notice */}
      <section className="bg-yellow-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Community:</strong> Join the exclusive platform where racing performances get discovered by teams, sponsors, and mentors actively looking for new talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="features-grid-container">
          {/* Feature 1 - Performance Tracking */}
          <FeatureSection
            title={tracking.title}
            description={tracking.description}
            features={tracking.features}
            ctaText={tracking.ctaText}
            imageSrc="/images/carInside.jpg"
            imageAlt="Performance tracking system"
          />

          {/* Feature 2 - Community Discovery */}
          <FeatureSection
            title={community.title}
            description={community.description}
            features={community.features}
            ctaText={community.ctaText}
            imageSrc="/images/reunions.jpg"
            imageAlt="Industry professional community"
            reverse={true}
          />
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building the future of racing career development. Join our community to help shape a platform that gives talented pilots the visibility they deserve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Goal</h3>
              <p className="text-gray-600">Build the first platform that showcases racing talent to industry professionals actively seeking new pilots through easy performance logging.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Access</h3>
              <p className="text-gray-600">Community members get exclusive access to features and help shape the platform's development based on real pilot needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">We're starting with a focused community of dedicated pilots and industry professionals who believe in merit-based discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what we're building together to create the future of racing career discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-700 font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Tracking</h3>
              <p className="text-sm text-gray-600">We'll develop systems to make it quick and intuitive for you to log and highlight your best racing performances</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-700 font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Network</h3>
              <p className="text-sm text-gray-600">Build a curated community of teams, sponsors, and mentors actively looking for talent</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-700 font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-sm text-gray-600">Create intelligent systems that connect promising pilots with relevant opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-700 font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scale Success</h3>
              <p className="text-sm text-gray-600">Refine and scale the platform based on community feedback to help more pilots succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FeaturesCta
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
      />
    </main>
  );
} 