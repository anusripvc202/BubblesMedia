"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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

function HomeContent() {
  const searchParams = useSearchParams();

  // Global App States
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Read search term from URL query parameters if present (e.g. /?search=websites)
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

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
      title: 'Quote from Calculator',
      price: `Estimate: ${specs.totalPrice}`,
      description: `Selected specifications:\n- Technology: ${specs.tech}\n- Pages: ${specs.pages}\n- Custom Graphics: ${specs.graphics ? 'Yes' : 'No'}\n- SEO Setup: ${specs.seo ? 'Yes' : 'No'}\n- Maintenance: ${specs.maintenance ? 'Yes' : 'No'}`
    });
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header component */}
      <Header
        cartCount={0}
        wishlistCount={wishlistCount}
        onQuoteOpen={() => {
          setQuoteInitialData(null);
          setIsQuoteOpen(true);
        }}
        onSearch={(term) => setSearchTerm(term)}
      />

      {/* Main Container Layout */}
      <main className="container-layout" style={{ flex: 1 }}>
        <div className="main-wrapper">
          {/* Sidebar Area */}
          <Sidebar
            selectedCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />

          {/* Core Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Hero
              onSearch={(term) => setSearchTerm(term)}
              onExploreOffers={() => window.location.href = '/offers'}
            />
            <TrustBanner />
            <SolutionsGrid
              searchTerm={searchTerm}
              activeCategory={activeCategory}
              onEnquire={handleEnquire}
            />
            <PromoBanners
              onSelectPackage={handleSelectPackage}
            />
            <IndustriesRow
              onSelectIndustry={(indName) => {
                setQuoteInitialData({
                  title: `Enquiry: Industry Specific for ${indName}`,
                  price: 'Request Custom Proposal'
                });
                setIsQuoteOpen(true);
              }}
            />

            {/* Sub Info grids */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <WhyChooseUs />
              <FreeTools
                onOpenCalculator={() => setIsCalculatorOpen(true)}
                onOpenSEOAudit={() => {
                  setQuoteInitialData({
                    title: 'Free SEO Audit Request',
                    price: 'Free Service'
                  });
                  setIsQuoteOpen(true);
                }}
              />
              <Testimonials />
            </div>

            <ReadyToGrow
              onOpenQuote={() => {
                setQuoteInitialData(null);
                setIsQuoteOpen(true);
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer style={{
        background: 'var(--secondary)',
        color: 'white',
        borderTop: '1px solid var(--border-color)',
        padding: '48px 0 32px 0',
        marginTop: 'auto'
      }}>
        <div className="container-layout" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '32px' }} className="footer-links-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white', letterSpacing: '-0.5px' }}>
                BUBBLES <span style={{ color: 'var(--primary)' }}>MEDIA</span>
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                India's largest digital solutions marketplace. Delivering high-quality websites, SEO, automation, and tech tools with fixed transparent pricing.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/offers">Mega Offers</a>
                <a href="/help">Help Center</a>
                <a href="/track">Track Order Roadmap</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white' }}>Support Office</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                Bubbles Media Tech Tower<br />
                HSR Layout Sector 4, Bangalore, India<br />
                Email: sales@bubblesmedia.in<br />
                Phone: +91 93815 66798
              </p>
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

export default function Home() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-base)' }}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

