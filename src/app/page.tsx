"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const TARGET_COUNT = 1000;

  const fetchWaitlistCount = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log('Client: Fetching count...');
      
      const response = await fetch("/api/waitlist/count", {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
      });

      console.log('Client: Response status:', response.status);
      
      if (!response.ok) {
        const text = await response.text();
        console.error('Client: Error response:', text);
        throw new Error('Failed to fetch count');
      }

      const data = await response.json();
      console.log('Client: Count received:', data);
      setWaitlistCount(data.count);
    } catch (error) {
      console.error("Client: Failed to fetch waitlist count:", error);
      // Keep the previous count if available
      if (waitlistCount === 0) {
        setWaitlistCount(0);
      }
    } finally {
      setIsLoading(false);
    }
  }, [waitlistCount]);

  useEffect(() => {
    // Fetch initial count
    fetchWaitlistCount();
    
    // Set up polling every 30 seconds
    const interval = setInterval(fetchWaitlistCount, 30000);
    
    return () => clearInterval(interval);
  }, [fetchWaitlistCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Update the count after successful submission
      await fetchWaitlistCount();
      
      setStatus("success");
      setMessage("Thanks for joining! We'll keep you updated.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to join waitlist");
    }
  };

  const progressPercentage = (waitlistCount / TARGET_COUNT) * 100;

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero_image.jpg')",
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-2xl">
            Accelerate your racing career
          </h1>
          <p className="text-xl sm:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Track your progress. Get discovered by pros.
          </p>
          
          {/* Call to Action */}
          <div className="mb-12">
            <Link 
              href="/#waitlist" 
              className="group relative inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Join Early Access</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Early Access Community</h2>
          <p className="text-xl mb-12 text-indigo-100">
            Help us create the tracking system that will showcase talent to the motorsport community.
          </p>
          
          <div className="mb-8 bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-medium">Early Access Program Members</span>
              <span className="text-2xl font-bold">
                {isLoading ? "..." : `${waitlistCount}/${TARGET_COUNT}`}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-6">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-lg mb-6 text-indigo-100">
              Join the community where your performances get noticed by industry professionals who can fast-track your racing career.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                  disabled={status === "loading"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === "loading" ? "Joining..." : "Accelerate My Career"}
              </button>
            </form>
            {message && (
              <p className={`text-sm mt-4 ${status === "error" ? "text-red-300" : "text-green-300"}`}>
                {message}
              </p>
            )}
            <p className="text-sm mt-4 text-indigo-100/80">
              Early Access members get their performances showcased to teams, sponsors, and mentors looking for new talent.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/features" 
              className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-8 rounded-lg font-semibold text-center shadow-lg transition-colors duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Vision */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We're Building Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community to help shape the platform that connects racing talent with industry professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 - Performance Tracking */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/images/telemetrie.png" 
                  alt="Performance analytics dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">Performance Tracking</h3>
                <p className="text-gray-100 leading-relaxed drop-shadow-md">
                  Quick and intuitive system to log your lap times, race results, and track your racing progress with professional analytics.
                </p>
              </div>
            </div>
            
            {/* Feature 2 - Industry Network */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/images/network.jpg" 
                  alt="Racing mentor and pilot networking" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">Industry Network</h3>
                <p className="text-gray-100 leading-relaxed drop-shadow-md">
                  Connect with teams, sponsors, and mentors actively looking for new racing talent to accelerate your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Inviting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We're Inviting</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building a community of passionate racing professionals and emerging talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Racing Team Managers</h3>
              <p className="text-gray-600">
                Seeking new talent and looking to discover promising pilots for your racing programs
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sponsors & Investors</h3>
              <p className="text-gray-600">
                Interested in supporting emerging pilots and investing in the future of motorsport
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border border-gray-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Mentors</h3>
              <p className="text-gray-600">
                Ready to guide new talent and share your expertise with the next generation of racers
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simplified CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-2xl shadow-xl overflow-hidden p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to help build the future of racing careers?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Join our exclusive community where we're building the platform that will get track performances noticed by teams, sponsors, and mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/#waitlist"
                className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-8 rounded-lg font-semibold shadow-md transition-colors duration-200"
              >
                Join Early Access Program
              </Link>
              <Link 
                href="/features" 
                className="bg-transparent hover:bg-indigo-800 border border-white text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
