"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
import Footer from '../components/Footer';
import IndustryServicesDrawer from '../components/IndustryServicesDrawer';

// Modals
import CalculatorModal from '../components/CalculatorModal';
import QuoteModal from '../components/QuoteModal';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

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
  const [selectedIndustry, setSelectedIndustry] = useState(null);

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
          <div className="main-content-col" style={{ display: 'flex', flexDirection: 'column', gap: '32px', minWidth: 0, maxWidth: '100%', overflow: 'hidden' }}>
            <Hero
              onSearch={(term) => setSearchTerm(term)}
              onExploreOffers={() => router.push('/offers')}
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
                setSelectedIndustry(indName);
              }}
            />
            {/* Bottom Statistics Row matching Image 1 exactly */}
            <div className="stats-row-desktop stats-row-scroll" style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {[
                { num: '8+', label: 'Years of Experience' },
                { num: '5000+', label: 'Happy Clients' },
                { num: '15000+', label: 'Projects Completed' },
                { num: '50+', label: 'Team Members' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  borderRight: '1px solid var(--border-color-light)',
                  paddingRight: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} className="trust-item-responsive">
                  <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                    {stat.num}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: '700', marginTop: '4px' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
              {/* Rating block */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
                  4.9/5
                </span>
                <span style={{ color: '#F59E0B', fontSize: '0.75rem', marginTop: '2px' }}>★★★★★</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', fontWeight: '700', marginTop: '2px' }}>
                  Client Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Industry Services Drawer */}
      <IndustryServicesDrawer
        industryName={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
      />

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

