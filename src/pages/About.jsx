import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AboutShimmer } from '../components/ShimmerUI'; // Import the shimmer

const About = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isProfilePage = location.pathname.includes('profile');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <AboutShimmer />;

  return (
    <div className="min-h-screen bg-white">
      
      <div className="relative h-[400px] flex items-center justify-center text-center px-4 bg-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=99" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Our Mission is to <br/> <span className="text-yellow-300">Fill Every Tummy.</span>
          </h1>
          <p className="text-white text-lg font-medium opacity-90">
            We bridge the gap between your favorite local flavors and your doorstep, 
            one delicious delivery at a time.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FeatureCard emoji="🚀" title="Fast Delivery" desc="Lightning fast delivery in under 30 minutes to keep your hunger at bay." />
          <FeatureCard emoji="📍" title="Live Tracking" desc="Know exactly where your food is with real-time GPS tracking technology." />
          <FeatureCard emoji="🍱" title="Top Restaurants" desc="Partnered with 500+ top-rated local kitchens and global food chains." />
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto pb-20 px-6">
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-10 text-center">
          {!isProfilePage ? (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to know the creator?</h2>
              <p className="text-gray-600 mb-8">Click the button below to see the developer profile.</p>
              <Link 
                to="profile" 
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all hover:scale-105 inline-block"
              >
                View Developer Profile
              </Link>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
               <Link to="/about" className="text-sm text-orange-500 font-bold hover:underline mb-6 inline-block">← Back to About</Link>
               <Outlet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ emoji, title, desc }) => (
  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-500 mt-2">{desc}</p>
  </div>
);

export default About;