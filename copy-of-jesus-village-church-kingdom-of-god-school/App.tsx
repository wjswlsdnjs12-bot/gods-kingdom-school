
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutDetailed from './components/AboutDetailed';
import Programs from './components/Programs';
import AdmissionForm from './components/AdmissionForm';
import Footer from './components/Footer';
import AdminView from './components/AdminView';
import SocialFeed from './components/SocialFeed';

const App: React.FC = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen selection:bg-[#00FF00] selection:text-black">
      <Header />
      
      <main>
        <Hero />
        <AboutDetailed />
        <Programs />
        <SocialFeed />
        <AdmissionForm />
      </main>

      <Footer />

      {/* Admin Toggle Button (Secret Floating Button for Preview) */}
      <button 
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#00FF00] hover:text-black backdrop-blur-md rounded-full flex items-center justify-center transition-all z-[90] border border-white/10 shadow-xl"
        title="Admin Concept View"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {showAdmin && <AdminView onClose={() => setShowAdmin(false)} />}
    </div>
  );
};

export default App;
