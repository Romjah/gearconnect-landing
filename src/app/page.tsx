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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Connect with motorsport enthusiasts
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                GearConnect, the first social network dedicated to motorsport enthusiasts. Share your track experiences, discover events, and connect with other passionate drivers!
              </p>
              <div className="mb-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">Join the Waitlist</span>
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
                  Be among the first to join and unlock exclusive features when we launch!
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
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
                {message && (
                  <p className={`text-sm mt-3 ${status === "error" ? "text-red-300" : "text-green-300"}`}>
                    {message}
                  </p>
                )}
                <p className="text-xs mt-3 text-indigo-100/80">
                  We&apos;ll notify you when we launch and you&apos;ll get early access to all features.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/download" 
                  className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium text-center shadow-md"
                >
                  Download the app
                </Link>
                <Link 
                  href="/features" 
                  className="bg-transparent hover:bg-indigo-800 border border-white py-3 px-6 rounded-lg font-medium text-center"
                >
                  Discover features
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Main Features</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Discover how GearConnect redefines the automotive social experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">News Feed</h3>
              <p className="text-black">
                Exchange and share your passions in a news feed dedicated to automotive enthusiasts.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Automotive Events</h3>
              <p className="text-black">
                Discover and participate in events near you to meet other enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              A few simple steps to join the GearConnect community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Download the app</h3>
              <p className="text-black">Available on iOS and Android, download the GearConnect app for free.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Create your profile</h3>
              <p className="text-black">Customize your profile with your interests and favorite vehicles for a tailored experience.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Connect with others</h3>
              <p className="text-black">Start interacting with the community, share photos, and join events.</p>
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
                <h2 className="text-3xl font-bold mb-6">Ready to join the automotive community?</h2>
                <p className="text-indigo-100 mb-8">
                  Download GearConnect now and connect with thousands of automotive enthusiasts.
                </p>
                <Link 
                  href="/download" 
                  className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium shadow-md"
                >
                  Download for free
                </Link>
              </div>
              <div className="md:w-1/2 p-12 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What our users say</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-700 pl-4 py-2">
                    <p className="italic text-black mb-2">
                      &quot;GearConnect allowed me to meet other BMW M3 enthusiasts in my area. A true community of passionate people!&quot;
                    </p>
                    <p className="text-gray-900 font-medium">- Tom L., Collector</p>
                  </div>
                  <div className="border-l-4 border-indigo-700 pl-4 py-2">
                    <p className="italic text-black mb-2">
                      &quot;I discovered amazing car meets thanks to GearConnect. The best social network for car enthusiasts.&quot;
                    </p>
                    <p className="text-gray-900 font-medium">- Mary D., Amateur Driver</p>
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
