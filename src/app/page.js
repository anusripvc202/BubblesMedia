"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import SolutionsGrid from '../components/SolutionsGrid';
import PromoBanners from '../components/PromoBanners';
import IndustriesRow from '../components/IndustriesRow';
import WhyChooseUs from '../components/WhyChooseUs';
import FreeTools from '../components/FreeTools';
import Testimonials from '../components/Testimonials';
import ReadyToGrow from '../components/ReadyToGrow';

// Modals
import CalculatorModal from '../components/CalculatorModal';
import QuoteModal from '../components/QuoteModal';

export default function Home() {
  // Global App States
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Modals Visibility States
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Handlers
  const handleEnquire = (service) => {
    setQuoteInitialData({
      title: service.title,
      price: `Starting from ${service.price}`
    });
    setIsQuoteOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setQuoteInitialData({
      title: pkg.title,
      price: `Starts from ${pkg.price}`
    });
    setIsQuoteOpen(true);
  };

  const handleCalculatorSubmit = (specs) => {
    setIsCalculatorOpen(false);
    setQuoteInitialData({
      estimatedPrice: specs.estimatedPrice,
      type: specs.type,
      pages: specs.pages,
      design: specs.design,
      integrations: specs.integrations
    });
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={wishlistCount}
        onQuoteOpen={() => {
          setQuoteInitialData(null);
          setIsQuoteOpen(true);
        }}
        onSearch={setSearchTerm}
      />

      {/* Main Grid Wrapper */}
      <main className="container-layout main-wrapper">
        
        {/* Left Category Navigation Sidebar */}
        <Sidebar
          selectedCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Right Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          
          {/* Hero Slider/Toggle */}
          <Hero
            onSearch={setSearchTerm}
            onExploreOffers={() => {
              setQuoteInitialData({ title: 'Mega Offers Explorer', price: 'Up to 50% Off' });
              setIsQuoteOpen(true);
            }}
          />

          {/* Trust points */}
          <TrustBanner />

          {/* Service Cards list (filtered by search and category) */}
          <SolutionsGrid
            searchTerm={searchTerm}
            activeCategory={activeCategory}
            onEnquire={handleEnquire}
          />

          {/* Mid Promos & Packages */}
          <PromoBanners
            onSelectPackage={handleSelectPackage}
          />

          {/* Target Industries */}
          <IndustriesRow
            onSelectIndustry={(industry) => {
              setQuoteInitialData({ title: `Industry Specific Bundle: ${industry}`, price: 'Tailored pricing' });
              setIsQuoteOpen(true);
            }}
          />

          {/* Triple Grid Column Footer details */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '36px'
          }}>
            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Free calculators and tools */}
            <FreeTools
              onOpenCalculator={() => setIsCalculatorOpen(true)}
              onOpenSEOAudit={() => {
                setQuoteInitialData({ title: 'Free SEO Audit Request', price: 'Free' });
                setIsQuoteOpen(true);
              }}
            />

            {/* Client feedback testimonials slider */}
            <Testimonials />
          </div>

          {/* Bottom Rocket Launch CTA */}
          <ReadyToGrow
            onOpenQuote={() => {
              setQuoteInitialData(null);
              setIsQuoteOpen(true);
            }}
          />

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--secondary)',
        color: 'white',
        borderTop: '1px solid var(--border-color)',
        padding: '36px 0 24px 0',
        marginTop: 'auto'
      }}>
        <div className="container-layout" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '24px'
          }}>
            {/* Branding */}
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'white', letterSpacing: '-0.5px' }}>
                BUBBLES <span style={{ color: 'var(--primary)' }}>MEDIA</span>
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                India's Premium Digital Solutions Marketplace.
              </p>
            </div>
            
            {/* Footer menu links */}
            <div style={{ display: 'flex', gap: '24px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              <a href="#about" onClick={(e) => { e.preventDefault(); alert('Bubbles Media is India\'s largest integrated digital agency platform.'); }} style={{ color: 'white' }}>About Us</a>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy policy is standard GDPR compliant.'); }} style={{ color: 'white' }}>Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Standard terms of service apply to all contract blueprint specifications.'); }} style={{ color: 'white' }}>Terms of Service</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsQuoteOpen(true); }} style={{ color: 'white' }}>Contact Us</a>
            </div>
          </div>

          {/* Copyright details */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
            <span>© {new Date().getFullYear()} Bubbles Media. All Rights Reserved.</span>
            <span>Made with ❤️ for Indian Businesses.</span>
          </div>
        </div>
      </footer>

      {/* Floating Modals */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSubmitEnquiry={handleCalculatorSubmit}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteInitialData}
      />
    </div>
  );
}
