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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 Alpha Version Coming Soon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Get discovered by the right people through your performances
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            GearConnect Alpha - The platform we're building where your track performances will get you noticed by teams, sponsors, and mentors. Join us to help create the tracking system that will showcase talent to the motorsport community.
          </p>
          <div id="waitlist" className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Join the Alpha Program</span>
              <span className="text-lg font-bold">
                {isLoading ? "..." : `${waitlistCount}/${TARGET_COUNT}`}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2.5 mb-4">
              <div 
                className="bg-white h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm mb-4 text-indigo-100">
              Join the community where your performances get noticed by industry professionals who can fast-track your racing career.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={status === "loading"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-indigo-700 hover:bg-indigo-50 py-2 px-4 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Joining..." : "Accelerate My Career"}
              </button>
            </form>
            {message && (
              <p className={`text-sm mt-3 ${status === "error" ? "text-red-300" : "text-green-300"}`}>
                {message}
              </p>
            )}
            <p className="text-xs mt-3 text-indigo-100/80">
              Alpha members get their performances showcased to teams, sponsors, and mentors looking for new talent.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/features" 
              className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium text-center shadow-md"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Alpha Features Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We're Building Together</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Join our alpha community to help shape the platform that will connect talented pilots with teams, sponsors, and mentors actively looking for new talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature 1 - Performance Visibility */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Performance Tracking Vision</h3>
              <p className="text-black">
                We'll develop a tracking system that automatically highlights your best performances, improvements, and achievements to make you visible to industry professionals scouting for talent.
              </p>
            </div>
            
            {/* Feature 2 - Community Discovery */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Industry Network Building</h3>
              <p className="text-black">
                We're building connections with teams, sponsors, and mentors who want to discover rising talents. Alpha members will help us create the community feed and performance discovery systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alpha Development Roadmap */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alpha Development Roadmap</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Here's how we'll build the career acceleration platform together during the alpha phase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">🏁</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Performance Tracking</h3>
              <p className="text-black">We'll develop systems to automatically capture and highlight your best lap times, improvements, and standout performances.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Discovery Network</h3>
              <p className="text-black">Build a community where teams, sponsors, and mentors can follow and discover emerging talent through performance feeds and rankings.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Career Acceleration</h3>
              <p className="text-black">Create the connections and visibility needed for industry professionals to reach out with sponsorship deals, team positions, and mentorship opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to help build the future of racing careers?</h2>
                <p className="text-indigo-100 mb-8">
                  Join our exclusive alpha community where we're building the platform that will get track performances noticed by teams, sponsors, and mentors. Help us create the visibility system that racing talent deserves.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/#waitlist"
                    className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium shadow-md text-center"
                  >
                    Join Alpha Program
                  </Link>
                  <Link 
                    href="/features" 
                    className="bg-transparent hover:bg-indigo-800 border border-white py-3 px-6 rounded-lg font-medium text-center"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 p-12 bg-indigo-800/30">
                <h3 className="text-xl font-bold text-white mb-4">Who We're Inviting</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-indigo-100 text-sm">Racing team managers seeking new talent</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-indigo-100 text-sm">Sponsors interested in supporting emerging pilots</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-indigo-100 text-sm">Experienced mentors ready to guide new talent</p>
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
