"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import QuoteModal from '../../../components/QuoteModal';
import Link from 'next/link';

// Load our centralized data
import { categories, serviceDatabase, calculatorConfigs, faqsDatabase, testimonialsDatabase } from '../../../data/servicesData';
import { supabase } from '../../../lib/supabaseClient';

// central graphic illustration image mappings for each category
const categoryIllustrations = {
  'websites': '/cat-websites.png',
  'mobile-apps': '/cat-mobile-apps.png',
  'digital-marketing': '/cat-digital-marketing.png',
  'whatsapp-marketing': '/cat-whatsapp-marketing.png',
  'gmb': '/cat-gmb.png',
  'branding-graphics': '/cat-branding-graphics.png',
  'ai-solutions': '/cat-ai-solutions.png',
  'business-software': '/cat-business-software.png',
  'industry-solutions': '/cat-industry-solutions.png',
  'hosting-domain': '/cat-hosting-domain.png',
};

// Key highlights for each category shown in hero
const categoryHighlights = {
  'websites': [
    'Custom responsive design for all devices',
    'Lightning-fast load times under 2 seconds',
    'SEO-ready structure from day one',
    'Secure HTTPS & daily backups included',
  ],
  'mobile-apps': [
    'Native Android & iOS development',
    'Offline-first architecture support',
    'Push notifications & in-app payments',
    'App Store & Play Store submission',
  ],
  'digital-marketing': [
    'Data-driven Google & Meta ad campaigns',
    'Organic SEO ranking strategies',
    'Weekly performance reports & analytics',
    'Dedicated campaign manager assigned',
  ],
  'whatsapp-marketing': [
    'Official WhatsApp Business API integration',
    'AI chatbot for 24/7 auto-replies',
    'Bulk broadcast to unlimited contacts',
    'CRM & lead tracking built-in',
  ],
  'gmb': [
    'Complete GMB profile setup & verification',
    'Review management & reputation building',
    'Local SEO optimization for map rankings',
    'Monthly insights & competitor analysis',
  ],
  'branding-graphics': [
    'Custom logo with unlimited revisions',
    'Full brand identity kit included',
    'Social media design templates',
    'Print-ready files in all formats',
  ],
  'ai-solutions': [
    'Custom GPT-4 agents for your workflow',
    'WhatsApp & website chatbot integration',
    'Automated lead capture & follow-up',
    '99%+ task automation accuracy',
  ],
  'business-software': [
    'Tailored ERP, CRM & billing systems',
    'Cloud-based with role-based access',
    'API integrations with 100+ platforms',
    '24/7 support & free annual maintenance',
  ],
  'industry-solutions': [
    'Sector-specific website & app packages',
    'Pre-built templates for 50+ industries',
    'Compliance-ready (HIPAA, GDPR etc.)',
    'Quick 7-day launch guarantee',
  ],
  'hosting-domain': [
    '99.9% uptime SLA guaranteed',
    'Free SSL certificate & daily backups',
    'One-click WordPress & app installers',
    '24/7 technical support & monitoring',
  ],
};

export default function CategoryPage() {
  const { id } = useParams();
  const router = useRouter();

  // Dynamic Catalog States (falling back to static lists immediately)
  const [currentCategory, setCurrentCategory] = useState(() => categories.find(cat => cat.id === id) || null);
  const [calcConfig, setCalcConfig] = useState(() => calculatorConfigs[id] || null);
  const [matchingServices, setMatchingServices] = useState(() => {
    return Object.entries(serviceDatabase)
      .filter(([_, service]) => service.category === id)
      .map(([key, service]) => ({ id: key, ...service }));
  });
  const [faqs, setFaqs] = useState(() => faqsDatabase[id] || []);
  const [testimonials, setTestimonials] = useState(() => testimonialsDatabase[id] || []);

  // Modals Visibility
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Calculator Inputs State
  const [sliderVals, setSliderVals] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  // Comparison Tier State
  const [activeTier, setActiveTier] = useState('Gold'); // Default tier view

  // Hover states for services cards
  const [hoveredCard, setHoveredCard] = useState(null);

  // Fetch full category catalog dynamically from Supabase
  useEffect(() => {
    async function fetchDatabaseCatalog() {
      try {
        // 1. Fetch category from database
        const { data: catData } = await supabase
          .from('categories')
          .select('*')
          .eq('id', id)
          .single();
        if (catData) {
          setCurrentCategory({
            id: catData.id,
            name: catData.name,
            desc: catData.desc,
            tagline: catData.tagline,
            colorTheme: catData.color_theme,
            accentColor: catData.accent_color,
            stats: catData.stats || [],
            icon: null
          });
        }

        // 2. Fetch services from database
        const { data: srvData } = await supabase
          .from('services')
          .select('*')
          .eq('category_id', id);
        if (srvData && srvData.length > 0) {
          setMatchingServices(srvData.map(s => ({
            id: s.id,
            title: s.title,
            tagline: s.tagline,
            desc: s.desc,
            price: s.price,
            features: s.features || [],
            plans: s.plans || [],
            popular: s.popular || false
          })));
        }

        // 3. Fetch calculator config from database
        const { data: calcData } = await supabase
          .from('calculator_configs')
          .select('*')
          .eq('category_id', id)
          .single();
        if (calcData) {
          setCalcConfig({
            category_id: calcData.category_id,
            title: calcData.title,
            basePrice: Number(calcData.base_price),
            sliders: calcData.sliders || [],
            checkboxes: calcData.checkboxes || []
          });
        }

        // 4. Fetch FAQs from database
        const { data: faqData } = await supabase
          .from('faqs')
          .select('*')
          .eq('category_id', id);
        if (faqData && faqData.length > 0) {
          setFaqs(faqData.map(f => ({
            q: f.question,
            a: f.answer
          })));
        }

        // 5. Fetch Testimonials from database
        const { data: testData } = await supabase
          .from('testimonials')
          .select('*')
          .eq('category_id', id);
        if (testData && testData.length > 0) {
          setTestimonials(testData.map(t => ({
            name: t.name,
            role: t.role,
            content: t.content
          })));
        }
      } catch (err) {
        console.error('Error fetching dynamic category catalog:', err);
      }
    }
    fetchDatabaseCatalog();
  }, [id]);

  // Initialize calculator defaults when config shifts
  useEffect(() => {
    if (calcConfig) {
      const initialSliders = {};
      calcConfig.sliders.forEach(s => {
        initialSliders[s.id] = s.defaultValue;
      });
      setSliderVals(initialSliders);

      const initialChecked = {};
      calcConfig.checkboxes.forEach(c => {
        initialChecked[c.id] = false;
      });
      setCheckedItems(initialChecked);
    }
  }, [id, calcConfig]);

  // Recalculate price in real-time
  useEffect(() => {
    if (!calcConfig) return;
    let total = calcConfig.basePrice;

    // Sliders math
    calcConfig.sliders.forEach(s => {
      const val = sliderVals[s.id] || s.defaultValue;
      total += val * s.pricePerUnit;
    });

    // Checkboxes math
    calcConfig.checkboxes.forEach(c => {
      if (checkedItems[c.id]) {
        total += c.price;
      }
    });

    setEstimatedPrice(Math.round(total));
  }, [sliderVals, checkedItems, id, calcConfig]);

  if (!currentCategory) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-base)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Category Not Found</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px' }}>The category ID "{id}" does not exist in our system.</p>
        <Link href="/" className="btn-primary" style={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>Go to Home</Link>
      </div>
    );
  }

  // Calculator helpers
  const handleSliderChange = (sliderId, val) => {
    setSliderVals(prev => ({ ...prev, [sliderId]: parseInt(val) }));
  };

  const handleCheckboxChange = (checkboxId, isChecked) => {
    setCheckedItems(prev => ({ ...prev, [checkboxId]: isChecked }));
  };

  const handleCalculatorEnquire = () => {
    const specDetails = [];
    calcConfig.sliders.forEach(s => {
      specDetails.push(`${s.label}: ${sliderVals[s.id] || s.defaultValue} ${s.unit}`);
    });
    calcConfig.checkboxes.forEach(c => {
      if (checkedItems[c.id]) {
        specDetails.push(`+ ${c.label} (₹${c.price.toLocaleString('en-IN')})`);
      }
    });

    const subjectStr = `Calculator Estimate for ${currentCategory.name} (₹${estimatedPrice.toLocaleString('en-IN')}) - Specs: ${specDetails.join(', ')}`;
    router.push(`/contact?subject=${encodeURIComponent(subjectStr)}`);
  };

  const handleEnquireService = (service) => {
    router.push(`/contact?subject=${encodeURIComponent(service.title + ' (' + service.price + ')')}`);
  };

  const handleEnquirePlan = (serviceTitle, plan) => {
    router.push(`/contact?subject=${encodeURIComponent(serviceTitle + ' - ' + plan.name + ' Plan (' + plan.price + ')')}`);
  };

  const accentColor = currentCategory.accentColor || 'var(--primary)';
  const lightBg = `${accentColor}10`; // 10% opacity hex representation

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-base)' }}>
      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={0}
        onQuoteOpen={() => {
          setQuoteInitialData(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Main layout wrapper */}
      <main className="container-layout" style={{ flex: 1, marginTop: '0px', marginBottom: '64px' }}>
        <div className="main-wrapper">
          {/* Left Sidebar */}
          <Sidebar selectedCategory={id} />

          {/* Right Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Dynamic visual category hero header */}
            <div style={{
              background: currentCategory.colorTheme || 'var(--bg-gradient-orange)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              color: 'white',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle background abstract shapes */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none'
              }}></div>
                          {/* Category graphic illustration */}
              <div 
                className="category-hero-illustration"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '24px',
                  transform: 'translateY(-50%)',
                  width: id === 'industry-solutions' ? '230px' : '200px',
                  height: id === 'industry-solutions' ? '160px' : '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              >
                {categoryIllustrations[id] && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={categoryIllustrations[id]} 
                    alt=""
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                    }}
                  />
                )}
              </div>

              <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
                <span 
                  className="badge badge-dark" 
                  style={{ 
                    marginBottom: '8px', 
                    display: 'inline-block', 
                    fontSize: '0.62rem', 
                    background: 'rgba(0,0,0,0.3)', 
                    color: 'white',
                    transition: 'transform 0.2s ease, background 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
                  }}
                >
                  Premium Category Solution
                </span>
                <h1 style={{ fontSize: '1.9rem', fontWeight: '900', color: 'white', lineHeight: '1.1', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                  {currentCategory.name}
                </h1>
                <p style={{ fontSize: '0.88rem', opacity: 0.95, lineHeight: '1.5', marginBottom: '12px' }}>
                  {currentCategory.tagline}
                </p>

                {/* Key highlights bullet list */}
                {categoryHighlights[id] && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px', marginBottom: '14px' }}>
                    {categoryHighlights[id].map((point, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.4', fontWeight: '500' }}>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Category statistics */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  {currentCategory.stats && currentCategory.stats.map((st, i) => (
                    <div key={i} style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '900', color: 'white', fontFamily: 'var(--font-display)' }}>{st.value}</span>
                      <span style={{ fontSize: '0.58rem', opacity: 0.8, textTransform: 'uppercase', fontWeight: '700', marginTop: '1px', letterSpacing: '0.2px' }}>{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bespoke Interactive Pricing Estimator Calculator */}
            {calcConfig && (
              <section style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
                  <div style={{ maxWidth: '480px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: accentColor }}>🧮</span> {calcConfig.title}
                    </h2>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-medium)', marginTop: '4px' }}>
                      {calcConfig.description}
                    </p>
                  </div>
                  <div style={{
                    background: lightBg,
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${accentColor}25`
                  }}>
                    <span style={{ fontSize: '0.6rem', color: accentColor, fontWeight: '700', textTransform: 'uppercase', display: 'block' }}>Real-time Quote</span>
                    <span style={{ fontSize: '1.6rem', fontWeight: '900', color: accentColor, fontFamily: 'var(--font-display)' }}>
                      ₹{estimatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }} className="pricing-grid-responsive">
                  {/* Left Controls Inputs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Sliders */}
                    {calcConfig.sliders.map(s => {
                      const currentVal = sliderVals[s.id] || s.defaultValue;
                      return (
                        <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                            <span>{s.label}</span>
                            <span style={{ color: accentColor, fontFamily: 'var(--font-display)', fontWeight: '800' }}>
                              {currentVal} {s.unit}
                            </span>
                          </div>
                          <input
                            type="range"
                            min={s.min}
                            max={s.max}
                            step={s.step}
                            value={currentVal}
                            onChange={(e) => handleSliderChange(s.id, e.target.value)}
                            style={{
                              width: '100%',
                              accentColor: accentColor,
                              cursor: 'pointer',
                              height: '5px',
                              background: '#E2E8F0',
                              borderRadius: '4px'
                            }}
                          />
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.58rem', color: 'var(--text-light)', fontWeight: '600' }}>
                            <span>{s.min} {s.unit}</span>
                            <span>{s.max} {s.unit}</span>
                          </div>
                        </div>
                      );
                    })}

                    {/* Checkboxes List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--secondary)' }}>Custom Add-on Features</span>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
                        {calcConfig.checkboxes.map(c => (
                          <label
                            key={c.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '10px 12px',
                              borderRadius: 'var(--radius-sm)',
                              border: `1px solid ${checkedItems[c.id] ? accentColor : 'var(--border-color)'}`,
                              background: checkedItems[c.id] ? lightBg : 'transparent',
                              cursor: 'pointer',
                              fontSize: '0.73rem',
                              fontWeight: '600',
                              color: checkedItems[c.id] ? 'var(--text-dark)' : 'var(--text-medium)',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={checkedItems[c.id] || false}
                              onChange={(e) => handleCheckboxChange(c.id, e.target.checked)}
                              style={{ accentColor: accentColor, cursor: 'pointer' }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                              <span>{c.label}</span>
                              <span style={{ fontSize: '0.58rem', color: accentColor, fontWeight: '700', marginTop: '1px' }}>
                                + ₹{c.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Summary Panel Card */}
                  <div style={{
                    background: 'var(--bg-base)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                        Estimator Breakdown
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.73rem', color: 'var(--text-medium)', padding: 0 }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Base Plan Fee</span>
                          <span style={{ fontWeight: '700' }}>₹{calcConfig.basePrice.toLocaleString('en-IN')}</span>
                        </li>
                        
                        {calcConfig.sliders.map(s => {
                          const val = sliderVals[s.id] || s.defaultValue;
                          const calculatedPrice = val * s.pricePerUnit;
                          return (
                            <li key={s.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span>{s.label} ({val})</span>
                              <span style={{ fontWeight: '700' }}>+ ₹{calculatedPrice.toLocaleString('en-IN')}</span>
                            </li>
                          );
                        })}

                        {calcConfig.checkboxes.map(c => {
                          if (checkedItems[c.id]) {
                            return (
                              <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>{c.label}</span>
                                <span style={{ fontWeight: '700' }}>+ ₹{c.price.toLocaleString('en-IN')}</span>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    </div>

                    <div style={{ marginTop: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary)' }}>Estimated Total</span>
                        <span style={{ fontSize: '1rem', fontWeight: '900', color: accentColor, fontFamily: 'var(--font-display)' }}>
                          ₹{estimatedPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <button
                        onClick={handleCalculatorEnquire}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          background: accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        ⚡ Enquire with this Estimate
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Grid of matching services */}
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '18px' }}>
                Browse {currentCategory.name} Blueprints
              </h2>
              {matchingServices.length === 0 ? (
                <div style={{
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '48px',
                  textAlign: 'center',
                  color: 'var(--text-light)'
                }}>
                  <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Catalog items loading shortly</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                  {matchingServices.map(service => (
                    <div
                      key={service.id}
                      style={{
                        background: 'var(--bg-white)',
                        borderRadius: 'var(--radius-lg)',
                        border: `1px solid ${hoveredCard === service.id ? accentColor : 'var(--border-color)'}`,
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: hoveredCard === service.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                        transform: hoveredCard === service.id ? 'translateY(-2px)' : 'none',
                        transition: 'all 0.2s ease-in-out'
                      }}
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span className="badge badge-orange" style={{ background: lightBg, color: accentColor }}>
                            Verified Blueprint
                          </span>
                          <span style={{ fontSize: '0.85rem', fontWeight: '900', color: accentColor, fontFamily: 'var(--font-display)' }}>
                            {service.price}
                          </span>
                        </div>
                        
                        <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '8px' }}>
                          {service.title}
                        </h3>
                        
                        <p style={{ fontSize: '0.73rem', color: 'var(--text-medium)', lineHeight: '1.4', marginBottom: '16px' }}>
                          {service.desc}
                        </p>

                        <h4 style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.2px', marginBottom: '8px' }}>
                          What's Included:
                        </h4>
                        
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.features.map((feat, fIdx) => (
                            <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.7rem', color: 'var(--text-medium)', lineHeight: '1.3' }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Link
                          href={`/services/${service.id}`}
                          style={{
                            flex: 1,
                            padding: '10px',
                            textAlign: 'center',
                            borderRadius: 'var(--radius-md)',
                            border: `1.5px solid ${accentColor}`,
                            color: accentColor,
                            fontSize: '0.73rem',
                            fontWeight: '700',
                            transition: 'all 0.15s ease'
                          }}
                          className="hover-card"
                        >
                          View Tiers
                        </Link>
                        <button
                          onClick={() => handleEnquireService(service)}
                          style={{
                            flex: 1,
                            padding: '10px',
                            background: accentColor,
                            color: 'white',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '0.73rem',
                            fontWeight: '700',
                            textAlign: 'center'
                          }}
                          className="btn-primary"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Interactive Feature Comparison Matrix Accordion/Tabs */}
            {matchingServices.length > 0 && matchingServices[0].plans && (
              <section style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)' }}>
                    Plan Level Comparison Matrix
                  </h2>
                  <p style={{ fontSize: '0.73rem', color: 'var(--text-light)', marginTop: '2px' }}>
                    Compare standard parameters included in our different pricing structures.
                  </p>

                  {/* Tier selector tabs */}
                  <div style={{ display: 'inline-flex', background: 'var(--bg-base)', padding: '4px', borderRadius: 'var(--radius-md)', marginTop: '16px' }}>
                    {['Silver', 'Gold', 'Platinum'].map(tier => {
                      const isActive = activeTier === tier;
                      return (
                        <button
                          key={tier}
                          onClick={() => setActiveTier(tier)}
                          style={{
                            padding: '6px 18px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            borderRadius: 'var(--radius-sm)',
                            background: isActive ? accentColor : 'transparent',
                            color: isActive ? 'white' : 'var(--text-medium)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {tier} Plan
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Compare tiers content cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  {matchingServices.map(service => {
                    const plan = service.plans.find(p => p.name.includes(activeTier)) || service.plans[0];
                    if (!plan) return null;
                    return (
                      <div key={service.id} style={{
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <h4 style={{ fontSize: '0.65rem', color: 'var(--text-light)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2px' }}>
                            {service.title}
                          </h4>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', margin: '8px 0' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: '900', color: accentColor, fontFamily: 'var(--font-display)' }}>
                              {plan.price}
                            </span>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>
                              / {plan.name}
                            </span>
                          </div>
                          <p style={{ fontSize: '0.68rem', color: 'var(--text-medium)', fontStyle: 'italic', marginBottom: '14px' }}>
                            "{plan.desc}"
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {plan.features.map((feat, fIdx) => (
                              <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.68rem', color: 'var(--text-medium)', lineHeight: '1.3' }}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => handleEnquirePlan(service.title, plan)}
                          className="btn-primary"
                          style={{
                            width: '100%',
                            background: accentColor,
                            marginTop: '16px',
                            padding: '8px',
                            fontSize: '0.68rem',
                            fontWeight: '700'
                          }}
                        >
                          Book {activeTier}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Custom Accordion FAQ list */}
            {faqs && faqs.length > 0 && (
              <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '18px', textAlign: 'center' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '720px', margin: '0 auto', width: '100%' }}>
                  {faqs.map((faq, index) => {
                    const isOpen = activeFaq === index;
                    return (
                      <div
                        key={index}
                        style={{
                          background: 'var(--bg-white)',
                          border: `1.5px solid ${isOpen ? accentColor : 'var(--border-color)'}`,
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : index)}
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            textAlign: 'left',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            color: isOpen ? accentColor : 'var(--secondary)'
                          }}
                        >
                          <span>{faq.q}</span>
                          <span style={{ fontSize: '1rem', color: accentColor, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }}>
                            ▼
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div style={{
                            padding: '0 20px 16px 20px',
                            fontSize: '0.73rem',
                            color: 'var(--text-medium)',
                            lineHeight: '1.5',
                            borderTop: '1px dashed var(--border-color)'
                          }}>
                            <div style={{ paddingTop: '12px' }}>
                              {faq.a}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Testimonials local to this category */}
            {testimonials && testimonials.length > 0 && (
              <section style={{
                background: lightBg,
                border: `1px dashed ${accentColor}30`,
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--secondary)', margin: '8px 0 20px 0' }}>
                  What Our {currentCategory.name} Clients Say
                </h3>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  {testimonials.map((test, index) => (
                    <div key={index} style={{
                      background: 'var(--bg-white)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px',
                      maxWidth: '450px',
                      textAlign: 'left',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <p style={{ fontSize: '0.73rem', fontStyle: 'italic', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                        "{test.content}"
                      </p>
                      <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                          {test.name}
                        </span>
                        <span style={{ fontSize: '0.62rem', color: accentColor, fontWeight: '700', marginTop: '1px' }}>
                          {test.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteInitialData}
      />
    </div>
  );
}
