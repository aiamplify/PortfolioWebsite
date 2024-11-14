import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SecuritySection from './components/SecuritySection';
import ProductSection from './components/ProductSection';
import ResourcesSection from './components/ResourcesSection';
import CustomersSection from './components/CustomersSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.1),transparent_50%)]" />
      <Navbar />
      <div className="max-w-7xl mx-auto relative pt-20">
        <main className="px-6">
          <Hero />
          <Stats />
          <SecuritySection />
          <ProductSection />
          <ResourcesSection />
          <CustomersSection />
          <Features />
          <Testimonials />
          <CTA />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}

export default App;