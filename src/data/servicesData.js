import React from 'react';

export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    desc: 'Business, E-commerce, Portfolio',
    tagline: 'Stunning, fast, and secure websites built to convert visitors into loyal customers.',
    colorTheme: 'linear-gradient(135deg, #FF6B00 0%, #FF8E3C 100%)',
    accentColor: '#FF6B00',
    stats: [
      { label: 'Websites Launched', value: '450+' },
      { label: 'Average Speed Index', value: '98%' },
      { label: 'Mobile Optimized', value: '100%' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    desc: 'Android, iOS, Cross Platform',
    tagline: 'Deliver premium native experience directly into your clients’ hands.',
    colorTheme: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
    accentColor: '#4F46E5',
    stats: [
      { label: 'Apps in App Store', value: '80+' },
      { label: 'Active Users', value: '2M+' },
      { label: 'User Rating', value: '4.8★' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    desc: 'SEO, SMM, Ads, Email Marketing',
    tagline: 'Hyper-targeted growth campaigns designed to maximize ROI and customer acquisition.',
    colorTheme: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)',
    accentColor: '#D946EF',
    stats: [
      { label: 'Ad Spend Managed', value: '₹5Cr+' },
      { label: 'Organic Traffic Boost', value: '300%' },
      { label: 'Lead Conversions', value: '150k+' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: 'whatsapp-marketing',
    name: 'WhatsApp Marketing',
    desc: 'Automation, API, Chatbot',
    tagline: 'Engage customers instantly using the official high-throughput WhatsApp API & automated bots.',
    colorTheme: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    accentColor: '#10B981',
    stats: [
      { label: 'Messages Sent/day', value: '500k+' },
      { label: 'API Accounts Setup', value: '120+' },
      { label: 'Support Cost Saved', value: '45%' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 'gmb',
    name: 'Google Business (GMB)',
    desc: 'Profile Setup & Optimization',
    tagline: 'Claim the top spot in local search maps when clients look for services near them.',
    colorTheme: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    accentColor: '#F59E0B',
    stats: [
      { label: 'Ranked in Top 3', value: '92%' },
      { label: 'Local Directions Generated', value: '1M+' },
      { label: 'Review Score Avg', value: '4.9★' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    id: 'branding-graphics',
    name: 'Branding & Graphics',
    desc: 'Logo, Brand Identity, Print',
    tagline: 'Exceptional, memorable graphic designs that shape how the world perceives your brand.',
    colorTheme: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
    accentColor: '#F43F5E',
    stats: [
      { label: 'Logos Crafted', value: '1,200+' },
      { label: 'Complete Brandings', value: '250+' },
      { label: 'Revisions Allowed', value: 'Unlimited' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <path d="M12 6V12L16 14"></path>
      </svg>
    )
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    desc: 'AI Agents, Automation, Chatbot',
    tagline: 'Supercharge operational efficiency and automate user interactions with GPT-4 custom agents.',
    colorTheme: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
    accentColor: '#06B6D4',
    stats: [
      { label: 'Agents Deployed', value: '60+' },
      { label: 'Queries Answered/day', value: '20k+' },
      { label: 'Task Automation Accuracy', value: '99%' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>
        <line x1="6" y1="10" x2="18" y2="10"></line>
        <line x1="10" y1="14" x2="14" y2="14"></line>
      </svg>
    )
  },
  {
    id: 'business-software',
    name: 'Business Software',
    desc: 'CRM, ERP, POS, HRMS',
    tagline: 'Custom business management tools tailored to integrate seamlessly with your offline workflow.',
    colorTheme: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
    accentColor: '#334155',
    stats: [
      { label: 'Active ERP users', value: '10k+' },
      { label: 'Daily Transactions', value: '50k+' },
      { label: 'Client Retention Rate', value: '98%' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    desc: 'Doctors, Schools, Real Estate',
    tagline: 'Highly targeted SaaS and portal setups tailored specifically for niche micro-verticals.',
    colorTheme: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    accentColor: '#7C3AED',
    stats: [
      { label: 'Schools Managed', value: '40+' },
      { label: 'Active Real Estate Sites', value: '110+' },
      { label: 'Doctors Booking Apps', value: '85+' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 'hosting-domain',
    name: 'Hosting & Domain',
    desc: 'Domain, Hosting, SSL, Email',
    tagline: 'Bulletproof, lightning-fast hosting and domain services with 24/7 dedicated system monitoring.',
    colorTheme: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    accentColor: '#0EA5E9',
    stats: [
      { label: 'Server Uptime Guarantee', value: '99.99%' },
      { label: 'Active Domains Hosted', value: '2,500+' },
      { label: 'SSL Keys Configured', value: '100%' }
    ],
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    )
  }
];

export const serviceDatabase = {
  // ─── Doctors & Healthcare ───────────────────────────────────
  'hospital-website-dev': {
    title: 'Hospital Website Development',
    category: 'websites',
    price: '₹14,999',
    desc: 'Professional, responsive websites for hospitals and multi-specialty clinics, optimised for search and patient trust.',
    features: ['Doctor Profiles & Specializations', 'Department & Services Pages', 'OPD Timings & Location Map', 'Online Appointment Request Form', 'SSL Secured & Mobile Optimized'],
    plans: [
      { name: 'Basic Clinic Site', price: '₹14,999', desc: 'Single-branch clinic website', features: ['8 Responsive Pages', 'Doctor Profile Gallery', 'WhatsApp OPD Booking Link', 'Google Maps Embed', '1 Week Delivery'] },
      { name: 'Multi-Dept Hospital', price: '₹29,999', desc: 'Multi-speciality hospital portal', features: ['Unlimited Pages & Departments', 'Individual Doctor Portals', 'Blog / Health Tips Section', 'Admin CMS Dashboard', '2 Weeks Delivery'] }
    ]
  },
  'appointment-booking': {
    title: 'Appointment Booking System',
    category: 'business-software',
    price: '₹19,999',
    desc: 'End-to-end online booking platform for clinics — patients can self-schedule, reschedule, and get automated reminders.',
    features: ['Real-time Slot Availability', 'SMS & WhatsApp Reminders', 'Doctor-wise Calendar Views', 'Patient Account & History Log', 'Admin Dashboard with Reports'],
    plans: [
      { name: 'Basic Scheduler', price: '₹19,999', desc: 'Single-doctor booking flow', features: ['Online Slot Booking Widget', 'SMS Auto-Reminders', 'Patient Appointment History', 'Basic Admin Dashboard', '1 Week Delivery'] },
      { name: 'Multi-Doctor System', price: '₹39,999', desc: 'Full clinic scheduling suite', features: ['Multi-Doctor Calendar Views', 'Payment Collection on Booking', 'WhatsApp + Email Reminders', 'Cancellation & Reschedule Flow', '2 Weeks Delivery'] }
    ]
  },
  'telemedicine-platform': {
    title: 'Telemedicine Platform',
    category: 'business-software',
    price: '₹49,999',
    desc: 'HIPAA-ready online consultation platform with secure video calls, e-prescriptions, and patient records.',
    features: ['HD Video Consultation Rooms', 'Digital Prescription Generator', 'Secure Patient File Uploads', 'Payment Gateway for Consultations', 'Mobile App (Android & iOS)'],
    plans: [
      { name: 'Web Telemedicine', price: '₹49,999', desc: 'Browser-based consultation tool', features: ['WebRTC Video Consultation', 'E-Prescription PDF Generator', 'Patient Portal Login', 'Razorpay Payment Integration', '3 Weeks Delivery'] },
      { name: 'Full App Platform', price: '₹89,999', desc: 'Telemedicine app on Play & App Store', features: ['Native Android + iOS App', 'Live Chat + Video Calls', 'Lab Report Upload System', 'Multi-doctor Support', '5 Weeks Delivery'] }
    ]
  },
  'patient-management': {
    title: 'Patient Management System',
    category: 'business-software',
    price: '₹34,999',
    desc: 'Centralised digital OPD + IPD records system for managing patient history, diagnosis, prescriptions, and billing.',
    features: ['Digital OPD & IPD Records', 'Patient History & Visit Logs', 'Prescription & Diagnosis Tracking', 'Bed Allocation & Ward Management', 'Staff Role-based Access Control'],
    plans: [
      { name: 'OPD System', price: '₹34,999', desc: 'Outpatient management software', features: ['Patient Registration & Queue', 'OPD Prescription Manager', 'Patient Medical History Log', 'Daily Report Generator', '2 Weeks Delivery'] },
      { name: 'Full Hospital HIS', price: '₹74,999', desc: 'Complete Hospital Information System', features: ['OPD + IPD + Lab Management', 'Bed & Ward Tracking', 'Pharmacy Integration', 'Multi-branch Support', '5 Weeks Delivery'] }
    ]
  },
  'medical-billing': {
    title: 'Medical Billing Software',
    category: 'business-software',
    price: '₹24,999',
    desc: 'Automate invoice generation, insurance claim tracking, payment ledger, and GST-compliant billing for hospitals.',
    features: ['Auto Invoice & Receipt PDFs', 'Insurance Claim Management', 'GST-Compliant Billing Engine', 'Outstanding Dues Tracker', 'Daily/Monthly Revenue Reports'],
    plans: [
      { name: 'Clinic Billing', price: '₹24,999', desc: 'Basic clinic billing tool', features: ['Invoice & Receipt Generator', 'Payment Tracking Ledger', 'GST Billing', 'Basic Revenue Reports', '1 Week Delivery'] },
      { name: 'Hospital Billing Suite', price: '₹49,999', desc: 'Multi-dept billing system', features: ['Department-wise Billing', 'Insurance TPA Management', 'OT & Lab Charge Integration', 'Monthly Audit Reports', '3 Weeks Delivery'] }
    ]
  },
  'healthcare-mobile-app': {
    title: 'Healthcare Mobile App',
    category: 'mobile-apps',
    price: '₹59,999',
    desc: 'Feature-rich patient-facing mobile app for booking, teleconsultation, health records, and pharmacy orders.',
    features: ['Doctor Booking & Scheduling', 'In-app Teleconsultation', 'Health Records & Lab Reports', 'Medication & Appointment Reminders', 'Published on Play Store & App Store'],
    plans: [
      { name: 'Patient App', price: '₹59,999', desc: 'Booking + records app', features: ['Appointment Booking Module', 'Patient Health Dashboard', 'Lab Report Upload & View', 'Push Notifications', '4 Weeks Delivery'] },
      { name: 'Full Clinic App Suite', price: '₹99,999', desc: 'Doctor + Patient dual app', features: ['Patient App + Doctor App', 'In-app Video Consultations', 'Prescription Management', 'Pharmacy Order Module', '6 Weeks Delivery'] }
    ]
  },
  'hospital-seo': {
    title: 'SEO for Hospitals',
    category: 'digital-marketing',
    price: '₹9,999/mo',
    desc: 'Rank your hospital or clinic on Google for high-intent medical search keywords in your city and nearby areas.',
    features: ['Medical Keyword Research', 'Google Maps Local Pack Ranking', 'Doctor Profile Schema Markup', 'Health Blog Content Writing', 'Monthly Rankings Report'],
    plans: [
      { name: 'Local Clinic SEO', price: '₹9,999/mo', desc: 'Rank locally for clinic keywords', features: ['15 Medical Keywords', 'GMB Profile Optimisation', 'On-Page Content Fixes', 'Local Citation Building', '3 Month Commit'] },
      { name: 'Hospital Authority SEO', price: '₹19,999/mo', desc: 'City-wide hospital ranking', features: ['40 Medical Keywords', 'Health Blog Articles (4/mo)', 'High-DA Medical Backlinks', 'Doctor Schema & Rich Snippets', 'No Contract'] }
    ]
  },
  'clinic-digital-marketing': {
    title: 'Digital Marketing for Clinics',
    category: 'digital-marketing',
    price: '₹12,999/mo',
    desc: 'Full-funnel digital marketing for clinics and hospitals — social media, Google Ads, and WhatsApp patient engagement.',
    features: ['Facebook & Instagram Health Posts', 'Google Search Ads for Clinics', 'WhatsApp Broadcast Campaigns', 'Patient Review Generation Strategy', 'Monthly ROI Performance Report'],
    plans: [
      { name: 'Growth Package', price: '₹12,999/mo', desc: 'Social + Ads for clinics', features: ['16 Health Content Posts/mo', 'Google Search Ads Campaign', 'Facebook/Instagram Ads', 'WhatsApp Patient Broadcast', 'Cancel Anytime'] },
      { name: 'Authority Package', price: '₹24,999/mo', desc: 'Full-funnel hospital marketing', features: ['Daily Posts + Reels/Videos', 'Multi-platform Ad Campaigns', 'Influencer Tie-up Strategy', 'Review Generation Campaigns', 'Cancel Anytime'] }
    ]
  },
  // Websites segment
  'business-websites': {
    title: 'Business Websites Blueprint',
    category: 'websites',
    price: '₹9,999',

    desc: 'Establish a credible online presence with a clean, responsive, and search-optimized company profile.',
    features: ['5 Pages Responsive Layout', 'SEO Setup & Custom Domains', '1 Year Free Hosting & Email', 'Contact Forms & WhatsApp Link'],
    plans: [
      { name: 'Silver Plan', price: '₹9,999', desc: 'Best for small profiles', features: ['5 Responsive Pages', 'Free .com/.in Domain (1 Yr)', 'Free Shared Hosting (1 Yr)', 'Standard Contact Form', '1 Week Delivery'] },
      { name: 'Gold Plan', price: '₹14,999', desc: 'Best for growing startups', features: ['10 Responsive Pages', 'Free Domain & Premium SSD Hosting', 'WhatsApp & Social Integrations', 'Admin Dashboard CMS (WordPress)', '2 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹24,999', desc: 'Custom React corporate portals', features: ['Unlimited Pages', 'Bespoke Next.js/React Coding', 'Custom SVG Graphics & Illustrations', 'Basic SEO Setup & Speed Fixes', '3 Weeks Delivery'] }
    ]
  },
  'ecommerce-websites': {
    title: 'E-commerce Websites Blueprint',
    category: 'websites',
    price: '₹14,999',
    desc: 'Launch a secure online store to sell products, manage inventory, and process digital payments.',
    features: ['Unlimited Products & Categories', 'Payment Gateway Integration', 'Inventory & Order Tracking', 'Admin Dashboard & Reports'],
    plans: [
      { name: 'Silver Plan', price: '₹14,999', desc: 'Basic shop catalog', features: ['Up to 50 Products', 'Razorpay/UPI Payment Gateway', 'Standard Cart & Checkout', 'Admin Inventory Dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Plan', price: '₹24,999', desc: 'Advanced e-commerce store', features: ['Up to 500 Products', 'Razorpay & Stripe integration', 'Discount Coupon System', 'Automatic Invoice PDF Generator', '3 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹44,999', desc: 'Custom multi-vendor marketplace', features: ['Unlimited Products', 'Vendor Dashboard Panels', 'Advanced Analytics Tracker', 'Custom Search Engine Filtering', '5 Weeks Delivery'] }
    ]
  },
  // Mobile Apps
  'mobile-app-dev': {
    title: 'Mobile App Development',
    category: 'mobile-apps',
    price: '₹49,999',
    desc: 'Build cross-platform Android & iOS applications using Flutter/React Native with custom backend systems.',
    features: ['Android & iOS App Versions', 'Custom UI/UX & Prototypes', 'Push Notifications Integration', 'Google Play & App Store Submit'],
    plans: [
      { name: 'Silver Plan', price: '₹49,999', desc: 'Simple utility apps', features: ['Single App (Android or iOS)', 'Custom Clean UI Design', 'Firebase Auth & Database', 'Push Notifications', '4 Weeks Delivery'] },
      { name: 'Gold Plan', price: '₹79,999', desc: 'Cross-platform apps', features: ['Dual Apps (Android & iOS)', 'Payment Gateway Integration', 'Camera/GPS Device Access', 'Admin panel web portal', '6 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹1,29,999', desc: 'Custom advanced apps', features: ['Android & iOS Apps', 'Real-time Chats / WebSockets', 'Social Media Login Integrations', 'Custom Analytics Dashboard', '8 Weeks Delivery'] }
    ]
  },
  // Digital Marketing
  'seo-services': {
    title: 'SEO Services Plan',
    category: 'digital-marketing',
    price: '₹7,999/mo',
    desc: 'Boost your Google rankings, drive organic search traffic, and optimize technical speed index scores.',
    features: ['On-Page Optimization', 'Keywords & Backlinks Research', 'Monthly Growth Reports', 'Google Search Console Connect'],
    plans: [
      { name: 'Silver Plan', price: '₹7,999/mo', desc: 'Local Search Optimization', features: ['10 Target Keywords', 'On-Page Meta Optimizations', 'Google Maps Listing Rank', 'Monthly Traffic Reports', '3 Month Minimum Commit'] },
      { name: 'Gold Plan', price: '₹14,999/mo', desc: 'National Search Rank', features: ['25 Target Keywords', 'Technical SEO Code Fixes', 'High-DA Backlinks (10/mo)', 'Competitor Analysis Audit', '3 Month Minimum Commit'] },
      { name: 'Platinum Plan', price: '₹24,999/mo', desc: 'Hyper competitive search rank', features: ['50+ Target Keywords', 'Custom Content/Blogs Writing', 'High-DA Backlinks (25/mo)', 'Priority Weekly Audits', 'No Contract - Cancel Anytime'] }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    category: 'digital-marketing',
    price: '₹9,999/mo',
    desc: 'Build brand authority and drive paid leads across Facebook, Instagram, LinkedIn, and Google Ads.',
    features: ['12 Custom Graphics /mo', 'Audience Growth & Analytics', 'Ad Campaign Setup & Spend Management', 'Brand Strategy Planning'],
    plans: [
      { name: 'Silver Plan', price: '₹9,999/mo', desc: 'Brand maintenance', features: ['12 Custom Graphic Posts / Month', 'Facebook & Instagram Management', 'Audience Growth Strategy', 'Basic Ad Campaign Setup', 'Cancel Anytime'] },
      { name: 'Gold Plan', price: '₹19,999/mo', desc: 'Active Lead Generation', features: ['20 Custom Posts + 4 Video Reels', 'FB, Insta & LinkedIn Management', 'Targeted Paid Ad Campaigns', 'Lead Form Integrations', 'Cancel Anytime'] },
      { name: 'Platinum Plan', price: '₹29,999/mo', desc: 'Full Scale Agency Growth', features: ['Daily Posts (30 Custom Graphics)', 'Video/Reels Production Scripts', 'Ad budget optimizations', 'Weekly ROI Reporting Calls', 'Cancel Anytime'] }
    ]
  },
  // WhatsApp Marketing
  'whatsapp-marketing': {
    title: 'WhatsApp Marketing API',
    category: 'whatsapp-marketing',
    price: '₹4,999/mo',
    desc: 'Automate customer support and send broadcast updates using the official WhatsApp Business API.',
    features: ['WhatsApp Business API Setup', 'Bulk Message Senders & Templates', 'Custom Chatbot Workflows & Automation', 'Green Tick Verification Assistance'],
    plans: [
      { name: 'Silver Plan', price: '₹4,999/mo', desc: 'API Broadcast Tool', features: ['Official API Account Setup', 'Green Tick Verification Aid', 'Bulk Broadcast Senders', 'Standard CRM Contact Book', 'Cancel Anytime'] },
      { name: 'Gold Plan', price: '₹9,999/mo', desc: 'Interactive Chatbot Flow', features: ['Official API Account Setup', 'Custom Chatbot Flow Scripts', 'Auto FAQ Auto-responders', 'Team Chat Inbox Dashboard', 'Cancel Anytime'] }
    ]
  },
  // GMB
  'google-business-profile': {
    title: 'Google Business Profile',
    category: 'gmb',
    price: '₹2,999',
    desc: 'Verify and optimize your Google Maps profile to rank first for local search keywords.',
    features: ['Google Maps Listing Setup', 'Profile Verification Assistance', 'Local SEO & Keyword Keywords Optimization', 'Review Management & Citation Boost'],
    plans: [
      { name: 'Standard Setup', price: '₹2,999', desc: 'One-time onboarding setup', features: ['Google Maps Profile Creation', 'Verification Aid Assistance', 'Keyword Rich Description', 'Business Citations (10 directory)', '3 Days Delivery'] },
      { name: 'Growth Setup', price: '₹5,999', desc: 'Advanced optimization setup', features: ['Google Maps Profile Setup', 'Verification Aid', 'Local Competitor Audit', 'Business Citations (30 directories)', 'GMB Review Widget Code', '5 Days Delivery'] }
    ]
  },
  // Branding & Graphics
  'logo-branding': {
    title: 'Logo & Branding',
    category: 'branding-graphics',
    price: '₹2,999',
    desc: 'Establish a modern brand identity with customized vector logo concepts and complete style palettes.',
    features: ['3 Unique Custom Logo Concepts', 'Complete Brand Style Guide (Colors, Fonts)', 'Business Card & Letterhead Layouts', 'Social Media Kit (Banners, Profiles)'],
    plans: [
      { name: 'Silver Design', price: '₹2,999', desc: 'Best for standard branding', features: ['3 Logo Concepts (Vector format)', 'Brand Style Sheet (Hex colors, fonts)', 'High-Res PNG & PDF files', '2 Free Revisions', '3 Days Delivery'] },
      { name: 'Gold Design', price: '₹5,999', desc: 'Complete Startup Identity', features: ['5 Logo Concepts', 'Full Brand Identity Guide (PDF)', 'Business Card & Letterhead layouts', 'Social Media Kit (Banners, Profiles)', 'Unlimited Revisions', '5 Days Delivery'] }
    ]
  },
  // AI Solutions
  'ai-agents': {
    title: 'AI Agents & Automation',
    category: 'ai-solutions',
    price: '₹19,999',
    desc: 'Build intelligent chatbots, auto-responders, and automated workflows using GPT-4 and custom LLM integrations.',
    features: ['Custom Knowledge Base Integration', 'Web & WhatsApp Chatbot Setup', 'LLM Prompt Engineering & Memory', 'Seamless CRM & Google Sheets Sync'],
    plans: [
      { name: 'Silver Plan', price: '₹19,999', desc: 'Single-channel chatbot', features: ['Custom LLM Assistant (GPT-4o)', 'Website Widget Embed', '1,000 Free Chats / Month', 'Standard Context Length', '1 Week Delivery'] },
      { name: 'Gold Plan', price: '₹39,999', desc: 'Multi-channel automation agent', features: ['WhatsApp API + Web Embed', 'Dynamic Function Calling APIs', 'CRM / Calendar Booking Hooks', '5,000 Chats / Month', '2 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹79,999', desc: 'Custom enterprise AI workflows', features: ['Multi-agent Collaborative Flow', 'Private Fine-Tuned Local Server Support', 'Infinite Scale Memory Retainer', 'Dedicated System Monitoring Dashboard', '4 Weeks Delivery'] }
    ]
  },
  // Business Software
  'custom-software': {
    title: 'Custom CRM & ERP Software',
    category: 'business-software',
    price: '₹59,999',
    desc: 'Bespoke corporate management dashboards, inventory tracking, POS systems, and multi-user portal development.',
    features: ['Bespoke Client Portals', 'Integrated Multi-role Access Control', 'Automated Daily Transaction Reports', 'Scalable Cloud Databases & APIs'],
    plans: [
      { name: 'Silver Plan', price: '₹59,999', desc: 'Standard business tracker', features: ['Lead & Customer Manager (CRM)', 'Standard Transaction Sheets', 'User Logs and Dashboards', 'SQLite/MySQL Cloud Setup', '3 Weeks Delivery'] },
      { name: 'Gold Plan', price: '₹99,999', desc: 'Advanced resource planner', features: ['CRM + Basic ERP Capabilities', 'Inventory and Billing Engine', 'Automated Invoice PDF Generates', 'Real-time Analytics Charts', '5 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹1,99,999', desc: 'Fully bespoke software ecosystem', features: ['Custom HRMS, POS & Inventory', 'Bespoke Payment/Gateway Splits', 'Custom API Hook connections', 'High Availability VPS Setup', '8 Weeks Delivery'] }
    ]
  },
  // Industry Solutions
  'clinic-management': {
    title: 'Industry Solutions Suite',
    category: 'industry-solutions',
    price: '₹24,999',
    desc: 'Tailored SaaS and portal configurations for clinic queue management, school fee databases, or real estate listings.',
    features: ['Custom Tailored Industry Workflow', 'Appointment Scheduler & Calendars', 'SMS / Email Notification Hooks', 'Interactive Location Map Views'],
    plans: [
      { name: 'Doctor/Clinic Plan', price: '₹24,999', desc: 'OPD and prescription tool', features: ['Patient Records CRM', 'Prescription PDF Creator', 'OPD Wait Room Queue Monitor', 'Auto SMS Appointment Alerts', '2 Weeks Delivery'] },
      { name: 'School Portal Plan', price: '₹39,999', desc: 'Complete education management', features: ['Student fee account database', 'Attendance tracker log', 'Digital Class Board & Exam schedules', 'Parent Alert notifications', '3 Weeks Delivery'] },
      { name: 'Real Estate Plan', price: '₹29,999', desc: 'Property listing catalog', features: ['Interactive Property Maps', 'Agent Lead Allocator', 'WhatsApp Property Brochure PDF Generator', 'Advanced Filter Engine', '2 Weeks Delivery'] }
    ]
  },
  // Hosting & Domain
  'cloud-hosting': {
    title: 'Hosting & Cloud Setup',
    category: 'hosting-domain',
    price: '₹4,999/yr',
    desc: 'High-speed cloud servers, automated backup retention, business email setups, and SSL configurations.',
    features: ['99.9% Server Uptime Guarantee', 'Free SSL Security Keys (Let’s Encrypt)', 'Daily Automated Offsite Backups', 'Bespoke Cloud Performance Tuning'],
    plans: [
      { name: 'Shared Cloud Host', price: '₹4,999/yr', desc: 'Ideal for standard landing sites', features: ['20GB NVMe SSD Storage Space', 'Free SSL and Custom Domain Link', '10 Enterprise Business Emails', 'Standard CDN Setup', '2 Days Delivery'] },
      { name: 'VPS Hosting Plan', price: '₹9,999/yr', desc: 'Great for high traffic apps', features: ['2 Dedicated vCPU Core & 4GB RAM', 'Managed Webmin Control Panel', '50 Enterprise Business Emails', 'Advanced Redis / Cache Tuning', '3 Days Delivery'] },
      { name: 'Managed AWS Plan', price: '₹24,999/yr', desc: 'Enterprise high scale hosting', features: ['High Availability Failover Nodes', 'Multi-Zone RDS DB Sync', 'Unlimited Enterprise Emails', 'Managed Cloud Security Guardrails', '5 Days Delivery'] }
    ]
  },
  // ─── Schools & Colleges ───────────────────────────────────
  'school-website': {
    title: 'School Website Development',
    category: 'websites',
    price: '₹14,999',
    desc: 'Professional, highly secure websites for schools, colleges, and educational institutes with integrated online admissions.',
    features: ['Online Admission Forms', 'Parent & Student Notice Board', 'Event Gallery & Interactive Calendar', 'Staff Directories', 'Fully Mobile Responsive'],
    plans: [
      { name: 'Standard Portal', price: '₹14,999', desc: 'Single school website', features: ['8 Pages Layout', 'Google Maps & Contact Forms', 'Free Domain & SSD Hosting (1 Yr)', 'WhatsApp OPD Booking Link', '1 Week Delivery'] },
      { name: 'Gold Campus Website', price: '₹24,999', desc: 'High-end college website', features: ['Unlimited Pages', 'Multi-Branch Map Locator', 'Interactive Event Calendar', 'WordPress Admin Dashboard CMS', '2 Weeks Delivery'] }
    ]
  },
  'student-management': {
    title: 'Student Management System',
    category: 'business-software',
    price: '₹24,999',
    desc: 'Complete digital records portal to easily track student directories, grades, timetables, and academic histories.',
    features: ['Detailed Student Profiles', 'Report Card Generator', 'Class Timetables', 'SMS/Email Alerts for Parents', 'Cloud Database Security'],
    plans: [
      { name: 'Standard SMS', price: '₹24,999', desc: 'Standard database tracker', features: ['Student profiles & records', 'Class timetables', 'Teacher-Student assignment logs', 'Secure cloud backup', '2 Weeks Delivery'] },
      { name: 'Gold Campus SMS', price: '₹44,999', desc: 'Enterprise university platform', features: ['Multi-department databases', 'Auto grade & report card generation', 'Roll number auto-allocations', 'Mobile dashboard access', '4 Weeks Delivery'] }
    ]
  },
  'online-exam-portal': {
    title: 'Online Examination Portal',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Scalable examination platform for hosting online exams, MCQ tests, and subjective grading workflows.',
    features: ['Custom Test Maker', 'Automated Instant Grading', 'Anti-cheat Proctoring Aids', 'Performance Analytics Charts', 'Student Login Portals'],
    plans: [
      { name: 'Standard Test Engine', price: '₹19,999', desc: 'Basic quiz & test builder', features: ['MCQ exam configurations', 'Instant PDF results maker', 'Student login panel', 'Admin result spreadsheets', '2 Weeks Delivery'] },
      { name: 'Gold Proctor Engine', price: '₹34,999', desc: 'Secure proctored exam engine', features: ['Anti-cheat screen lock tracking', 'Subjective answer grading flows', 'Leaderboard analytics dashboards', 'Random question pools generator', '3 Weeks Delivery'] }
    ]
  },
  'learning-management-system': {
    title: 'Learning Management System (LMS)',
    category: 'business-software',
    price: '₹29,999',
    desc: 'E-learning platform to easily share video lectures, assignments, and study materials with students.',
    features: ['Video Lecture Hosting', 'Interactive Quizzes', 'Assignment Upload System', 'Progress Tracker Dashboard', 'Student Discussion Forum'],
    plans: [
      { name: 'Standard LMS', price: '₹29,999', desc: 'Perfect for standard institutes', features: ['Video lectures & file shares', 'Student performance logs', 'Quiz/Exam configurations', 'Standard discussion board', '3 Weeks Delivery'] },
      { name: 'Gold LMS Suite', price: '₹49,999', desc: 'Advanced interactive virtual campus', features: ['Zoom live class integrations', 'Assignment feedback & reviews flow', 'Certificate auto-generation PDFs', 'Dynamic student reports', '5 Weeks Delivery'] }
    ]
  },
  'attendance-management': {
    title: 'Attendance Management',
    category: 'business-software',
    price: '₹12,999',
    desc: 'Automated daily class attendance tracking with instant parent SMS/WhatsApp alerts.',
    features: ['Staff & Student Logs', 'Instant Parent Notification Hooks', 'Monthly/Weekly Reports', 'Biometric Integration Support', 'Easy Mobile App Interface'],
    plans: [
      { name: 'Standard Alert System', price: '₹12,999', desc: 'Manual records attendance app', features: ['Daily teacher input dashboard', 'SMS alert templates to parents', 'Monthly CSV export logs', 'Basic attendance dashboard', '1 Week Delivery'] },
      { name: 'Gold Biometric Sync', price: '₹24,999', desc: 'Biometric hardware synced attendance', features: ['Fingerprint/RF card sync system', 'Real-time server check-in reports', 'WhatsApp check-in alerts to parents', 'Salary calculation hooks', '2 Weeks Delivery'] }
    ]
  },
  'fee-management': {
    title: 'Fee Management System',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Cloud billing system for schools to collect fees online, generate receipts, and track dues.',
    features: ['Online Payment Gateways', 'Automatic Invoice Receipts', 'Defaulter Tracker & Alerts', 'GST/Tax Compliant Logs', 'Financial Revenue Reports'],
    plans: [
      { name: 'Standard Billing', price: '₹19,999', desc: 'Basic fee receipt generator', features: ['Student fee ledger logs', 'Standard invoice PDF prints', 'Razorpay & UPI integrations', 'GST compliant billing', '2 Weeks Delivery'] },
      { name: 'Gold Defaulter Engine', price: '₹34,999', desc: 'Auto reminder fee collection suite', features: ['Auto fee SMS/WhatsApp reminders', 'Late fee calculation models', 'Installment payment schedules', 'Detailed bank reconciliation reports', '3 Weeks Delivery'] }
    ]
  },
  'school-mobile-app': {
    title: 'School Mobile App',
    category: 'mobile-apps',
    price: '₹49,999',
    desc: 'Native Android & iOS mobile app for direct parent-teacher communications, notices, fees, and homework.',
    features: ['Direct Parent-Teacher Messages', 'Push Notices Notification Board', 'Online Fee Payment', 'Attendance & Progress Cards', 'Google Play & Apple App Store Publish'],
    plans: [
      { name: 'Standard Parent App', price: '₹49,999', desc: 'Basic info broadcast app', features: ['Push notice notifications', 'Homework & attendance displays', 'Teacher contact catalog', 'Android version publish', '4 Weeks Delivery'] },
      { name: 'Gold Multi-Role Suite', price: '₹79,999', desc: 'Double app suite (Parent + Staff)', features: ['Staff App & Parent App', 'Online payment gateways', 'Live chat channels', 'Play Store + Apple App Store publish', '6 Weeks Delivery'] }
    ]
  },
  'education-marketing': {
    title: 'Education Marketing Services',
    category: 'digital-marketing',
    price: '₹14,999/mo',
    desc: 'Specialized SEO and paid lead generation campaigns to boost admissions and student registrations.',
    features: ['Local Search Term Rankings', 'Targeted FB/Insta Lead Ads', 'Parent Admission WhatsApp Funnels', 'Social Media Branding Posts', 'Google Search Maps Optimization'],
    plans: [
      { name: 'Admission Growth', price: '₹14,999/mo', desc: 'Social + Search ads for school admissions', features: ['Google Search Ads Campaign', 'FB/Insta local targeted ads', 'Lead generation forms integration', '16 Admission branding graphics', 'Cancel Anytime'] },
      { name: 'Campus Authority', price: '₹24,999/mo', desc: 'Full year branding & reputation suite', features: ['SEO authority audit', 'Google Maps top rankings pack', 'Parent review boost campaigns', 'Reels video production scripts', 'Cancel Anytime'] }
    ]
  },
  // ─── Real Estate & Builders ───────────────────────────────
  'property-listing-portal': {
    title: 'Property Listing Portal',
    category: 'websites',
    price: '₹24,999',
    desc: 'Interactive property portals for agencies and developers to catalog apartments, land plots, and commercial spots.',
    features: ['Advanced Filtering Engine', 'Agent Assignment System', 'Interactive Location Map Views', 'WhatsApp Property Brochure PDF Generator', 'Featured Property Banners'],
    plans: [
      { name: 'Agency Catalog', price: '₹24,999', desc: 'Clean listing site for single agency', features: ['Up to 100 Properties listing', 'Advanced filters (price, area, bedroom)', 'Agent contact forms', 'Free Domain & Host (1 Yr)', '2 Weeks Delivery'] },
      { name: 'Gold Multi-Broker Portal', price: '₹49,999', desc: 'Bespoke marketplace property site', features: ['Broker sign up dashboards', 'Interactive local maps embeds', 'PDF brochures auto-generators', 'WhatsApp API contact buttons', '4 Weeks Delivery'] }
    ]
  },
  'crm-for-builders': {
    title: 'CRM for Builders',
    category: 'business-software',
    price: '₹39,999',
    desc: 'Client relations management software for builder lead allocations, installment payment tracking, and site visits.',
    features: ['Lead Assignment Pipeline', 'Site Visit Scheduler', 'Customer Installment Ledger', 'Broker Portal Accounts', 'Automated WhatsApp Promos'],
    plans: [
      { name: 'Builder CRM Standard', price: '₹39,999', desc: 'Standard lead pipeline tracker', features: ['Lead source captures (99acres, Magicbricks)', 'Telecaller dashboards', 'Site visit tracker logs', 'Basic payment ledger', '3 Weeks Delivery'] },
      { name: 'Gold Project ERP', price: '₹74,999', desc: 'All-in-one builder ERP suite', features: ['Interactive floor plan booking grids', 'Installment milestone billings', 'Broker commission pay dashboards', 'Automated WhatsApp reminders', '5 Weeks Delivery'] }
    ]
  },
  'virtual-property-tours': {
    title: 'Virtual Property Tours',
    category: 'branding-graphics',
    price: '₹19,999',
    desc: 'Interactive 360-degree virtual property walkthroughs and high-quality 3D renders.',
    features: ['360 Walkthrough Viewer', 'Figma/3D Render Integration', 'Virtual Floor Plan Links', 'Lead capture popup on tour', 'High speed hosting files'],
    plans: [
      { name: 'Virtual Walkthrough', price: '₹19,999', desc: '3D walkthrough integration service', features: ['Integration of up to 5 panoramic views', 'Web VR responsive viewer', 'Hotspot information boxes', 'Lead capture popups', '1 Week Delivery'] },
      { name: 'Gold HD Tour Suite', price: '₹39,999', desc: 'Full HD multi-room tour + 3D floor plan', features: ['Panoramic views (Up to 15 nodes)', '3D dollhouse floor plan layout', 'Custom logo branding embeds', 'Offline offline VR viewer files', '2 Weeks Delivery'] }
    ]
  },
  'lead-management-system': {
    title: 'Lead Management System',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Automated real estate lead capturing from FB Ads, 99acres, MagicBricks, and Google Forms.',
    features: ['Multi-channel Lead Captures', 'Instant Broker Alerts', 'Lead Status Pipeline Tracker', 'Call Recording Integration', 'Performance Analytics Reports'],
    plans: [
      { name: 'Lead Tracker Basic', price: '₹14,999', desc: 'Single project lead dashboard', features: ['FB/Insta and Google form lead integrations', 'Broker dashboard tables', 'Email & SMS broker alerts', 'Standard CSV export logs', '2 Weeks Delivery'] },
      { name: 'Gold Multi-Project Flow', price: '₹29,999', desc: 'Enterprise automated distribution', features: ['Auto round-robin lead allocation', 'IVR call connection system', 'Real-time sales performance metrics', 'WhatsApp automation integration', '3 Weeks Delivery'] }
    ]
  },
  'property-booking-platform': {
    title: 'Property Booking Platform',
    category: 'business-software',
    price: '₹29,999',
    desc: 'Token payment and slot booking platforms for new residential property launches.',
    features: ['Token Amount Collections', 'Real-time Unit Availability Grid', 'Online Buyer Agreements', 'GST Compliant Receipts', 'Admin Real-time Dashboard'],
    plans: [
      { name: 'Token Payment flow', price: '₹29,999', desc: 'Simple token payment gateway', features: ['Razorpay and UPI token collect', 'Buyer registration forms', 'Standard terms PDF downloads', 'Basic admin transaction dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Builder Inventory Suite', price: '₹59,999', desc: 'Real-time digital layout layout grids', features: ['Interactive project layout map', 'Color coded unit status grid (Available, Booked, Hold)', 'E-Sign buyer agreements', 'SMS ledger confirmations', '4 Weeks Delivery'] }
    ]
  },
  'real-estate-mobile-app': {
    title: 'Real Estate Mobile App',
    category: 'mobile-apps',
    price: '₹59,999',
    desc: 'Native Android & iOS real estate apps for property searching, virtual tours, and chat channels.',
    features: ['Interactive Local Searches', 'Agent Real-time Chats', 'Saved Search Alerts', 'Push Notifications Dashboard', 'Play/App Store Publishing'],
    plans: [
      { name: 'Customer Search App', price: '₹59,999', desc: 'Property finder native app', features: ['Property lists with search filters', 'Interactive Map listings search', 'In-app agent email/call buttons', 'Android version publish', '5 Weeks Delivery'] },
      { name: 'Gold Dual App Suite', price: '₹99,999', desc: 'Agent App + Customer App suite', features: ['Customer App + Broker App', 'Real-time in-app chats with push', 'Saved search push alerts', 'Play Store + Apple App Store publish', '8 Weeks Delivery'] }
    ]
  },
  'seo-for-real-estate': {
    title: 'SEO for Real Estate',
    category: 'digital-marketing',
    price: '₹9,999/mo',
    desc: 'Local property SEO to rank high on maps and search for "flats/plots/apartments for sale near me" keywords.',
    features: ['Local Property Keywords', 'Google Maps Business Optimisation', 'Micro-site SEO Architecture', 'High DA Local Backlinks', 'Monthly Leads Audit'],
    plans: [
      { name: 'Project SEO Growth', price: '₹9,999/mo', desc: 'Local project keywords ranking package', features: ['15 Local project keywords', 'GMB profile local optimizations', 'Project microsite speed checks', 'Standard backlinks (10/mo)', '3 Month Commit'] },
      { name: 'Builder Authority SEO', price: '₹19,999/mo', desc: 'Complete brand authority builder package', features: ['40 High volume local keywords', 'Monthly blogs & project reviews writing', 'High-DA local links (25/mo)', 'Real-time rankings tracking panels', 'No Contract'] }
    ]
  },
  'real-estate-digital-marketing': {
    title: 'Real Estate Digital Marketing',
    category: 'digital-marketing',
    price: '₹14,999/mo',
    desc: 'High conversion Meta & Google Ads campaigns optimized to generate site-visit leads for properties.',
    features: ['Meta Ads (FB/IG) Lead Generation', 'Google Search Ads for Projects', '3D Walkthrough Ad Creatives', 'WhatsApp Lead Nurturing Bots', 'ROI Analysis Reports'],
    plans: [
      { name: 'Property Lead Gen', price: '₹14,999/mo', desc: 'Ad campaigns on FB & Instagram', features: ['Meta targeted lead ads setup', 'High conversion ad graphic designs', 'Lead verification WhatsApp bot integration', 'Daily performance analytics reports', 'Cancel Anytime'] },
      { name: 'Builder Multi-Channel Growth', price: '₹29,999/mo', desc: 'Full scale marketing agency coverage', features: ['Meta Ads + Google Search ads campaigns', '3D walk-through ad video scripts', 'Broker communication automation', 'Bi-weekly performance reporting calls', 'Cancel Anytime'] }
    ]
  },
  // ─── E-commerce Stores ───────────────────────────────────
  'ecommerce-web-dev': {
    title: 'Ecommerce Website Development',
    category: 'websites',
    price: '₹14,999',
    desc: 'Launch a highly optimized online store with secure checkouts, payment integrations, and responsive cart grids.',
    features: ['Unlimited Products Listing', 'Integrated Payment Gateways', 'Inventory & Stock Tracker', 'Customer Orders Dashboard', 'Mobile Commerce Layouts'],
    plans: [
      { name: 'Standard Shop', price: '₹14,999', desc: 'Standard catalog & payment store', features: ['Up to 50 Products', 'Razorpay & UPI gate connections', 'Standard Cart & Checkout', 'Admin stock spreadsheet', '2 Weeks Delivery'] },
      { name: 'Gold Commerce Portal', price: '₹29,999', desc: 'Advanced storefront with coupons', features: ['Up to 500 Products', 'Razorpay & Stripe premium integration', 'Automated GST Invoices generator', 'Custom discount coupon system', '3 Weeks Delivery'] }
    ]
  },
  'multi-vendor-marketplace': {
    title: 'Multi Vendor Marketplace',
    category: 'websites',
    price: '₹44,999',
    desc: 'Power an Amazon/Etsy style multi-seller marketplace where multiple vendors register and sell their goods.',
    features: ['Vendor Registration & Verification', 'Seller Dashboard Panels', 'Automated Commission Splits', 'Vendor-wise Shipping Rules', 'Customer Ratings & Reviews'],
    plans: [
      { name: 'Standard Marketplace', price: '₹44,999', desc: 'Marketplace platform with basic splits', features: ['Vendor onboarding panel', 'Basic admin commission management', 'Individual store profile setups', 'Standard payment splits', '4 Weeks Delivery'] },
      { name: 'Gold Enterprise Hub', price: '₹79,999', desc: 'Advanced multi-seller marketplace suite', features: ['Multi-currency support', 'Advanced payout automation (Razorpay Route)', 'Automated tax billing configuration', 'Vendor mobile dashboards link', '6 Weeks Delivery'] }
    ]
  },
  'shopify-store-dev': {
    title: 'Shopify Store Development',
    category: 'websites',
    price: '₹12,999',
    desc: 'Bespoke Shopify theme configuration, premium app setups, custom product variants, and complete storefront design.',
    features: ['Premium Theme Integrations', 'Variant Setup & Inventory Connect', 'Shopify App Configurations', 'Payment Setup & Taxes', 'Speed Optimization Checks'],
    plans: [
      { name: 'Basic Shopify Launch', price: '₹12,999', desc: 'Standard Shopify setup', features: ['Standard theme customisations', 'Up to 20 products setup', 'Crucial Shopify app setups', 'Shipping & Taxes configuration', '1 Week Delivery'] },
      { name: 'Gold Shopify Store', price: '₹24,999', desc: 'Advanced conversion optimized store', features: ['Premium theme design layouts', 'Advanced product customizer apps', 'E-mail marketing funnel hooks', 'SEO optimize speed packages', '2 Weeks Delivery'] }
    ]
  },
  'woocommerce-dev': {
    title: 'WooCommerce Development',
    category: 'websites',
    price: '₹9,999',
    desc: 'Power your WordPress site into a high-performance, flexible shopping store using WooCommerce.',
    features: ['WordPress WooCommerce Setup', 'Advanced Product Filtering', 'Custom Cart & Checkout Pages', 'Inventory Synchronizations', 'SEO Plugin Configurations'],
    plans: [
      { name: 'Basic WooCommerce', price: '₹9,999', desc: 'Standard WooCommerce store', features: ['WooCommerce setup on WordPress', 'Standard payment configurations', 'Up to 30 products load', 'Standard theme setup', '1 Week Delivery'] },
      { name: 'Gold WooCommerce Suite', price: '₹19,999', desc: 'Custom high-converting layout', features: ['Custom Elementor shop design', 'Bespoke checkout fields editor', 'Auto invoice PDF generation', 'Speed optimization caching checks', '2 Weeks Delivery'] }
    ]
  },
  'payment-gateway-integration': {
    title: 'Payment Gateway Integration',
    category: 'business-software',
    price: '₹4,999',
    desc: 'Securely link local and global payment gateways (Razorpay, Stripe, PayPal, UPI) with your online system.',
    features: ['Multi-Gateway APIs Setup', 'Instant UPI QR Code Collections', 'Auto invoice PDF generator', 'Secure SSL Transaction Logs', 'Recurring Billing Configurations'],
    plans: [
      { name: 'Standard Integration', price: '₹4,999', desc: 'Single gateway integration', features: ['Razorpay or Stripe API hookup', 'Standard success redirect setup', 'Transaction email alerts', 'SSL security configurations', '3 Days Delivery'] },
      { name: 'Gold Smart Payments', price: '₹9,999', desc: 'Multi-gateway with tax splits', features: ['Razorpay + Stripe + UPI QR integration', 'Auto invoice generator PDFs', 'Multi-currency checkout capability', 'Webhooks transaction logs tracking', '5 Days Delivery'] }
    ]
  },
  'inventory-management': {
    title: 'Inventory Management',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Bespoke warehouse stock tracking software with barcode scanners and multi-location inventory alerts.',
    features: ['Real-time Stock Audits', 'Barcode/QR Code Scanning Support', 'Low Stock Automatic Alerts', 'Supplier Directory Management', 'Detailed Stock Reports'],
    plans: [
      { name: 'Standard Tracker', price: '₹19,999', desc: 'Single warehouse stock manager', features: ['Product list catalog databases', 'Low-stock email notifications', 'Bulk inventory CSV imports', 'Purchase order generator', '2 Weeks Delivery'] },
      { name: 'Gold Warehouse ERP', price: '₹34,999', desc: 'Multi-location automated stock planner', features: ['Multi-warehouse support', 'QR code generation tools', 'Supplier price quote audits', 'Integration with shopify/woocommerce APIs', '3 Weeks Delivery'] }
    ]
  },
  'order-management-system': {
    title: 'Order Management System',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Real-time order tracking dashboard from purchase to shipping with automated client notifications.',
    features: ['Order Status Pipeline Tracker', 'Delivery Partner Integrations', 'WhatsApp/SMS Status updates', 'Return/Refund Processing System', 'Sales Performance Analytics'],
    plans: [
      { name: 'Order Tracker Basic', price: '₹14,999', desc: 'Basic order tracking backend', features: ['Order creation and update pipeline', 'SMS status alert templates', 'Invoice print generator', 'Basic analytics dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Delivery Flow', price: '₹29,999', desc: 'Automated ship-partner dashboard', features: ['Integration with Shiprocket/Delhivery', 'WhatsApp auto shipping notifications', 'Return request processing desk', 'Real-time delivery status tracking', '3 Weeks Delivery'] }
    ]
  },
  'product-catalog-management': {
    title: 'Product Catalog Management',
    category: 'branding-graphics',
    price: '₹5,999',
    desc: 'Clean digital catalogs, bulk uploads, high-res graphic editing, and SEO product description writing.',
    features: ['High-Res Product Layouts', 'SEO Copywriting for Descriptions', 'Bulk Import/Export Sheets', 'Standard Category Taxonomies', 'Branded Catalog PDFs'],
    plans: [
      { name: 'Standard Catalog Load', price: '₹5,999', desc: 'Basic catalog setup', features: ['Up to 50 products upload', 'Clean product image edits (basic crop)', 'SEO meta descriptions writing', 'Standard category tag configurations', '1 Week Delivery'] },
      { name: 'Gold Digital Showcase', price: '₹12,999', desc: 'Premium branded catalog assets', features: ['Up to 200 products upload', 'High-end color correction graphic edits', 'Copywritten rich descriptions', 'Digital PDF Catalog design layout', '2 Weeks Delivery'] }
    ]
  },
  'ecommerce-mobile-app': {
    title: 'Ecommerce Mobile App',
    category: 'mobile-apps',
    price: '₹59,999',
    desc: 'Feature-rich native Android & iOS shopping app with fast checkout flows and smart push notification updates.',
    features: ['Native Android & iOS Apps', 'Real-time Cart Synchronizations', 'Push Notification Marketing Module', 'Order Tracking Screens', 'Play/App Store Publishing'],
    plans: [
      { name: 'Customer Shop App', price: '₹59,999', desc: 'Property finder native app', features: ['Property lists with search filters', 'Interactive Map listings search', 'In-app agent email/call buttons', 'Android version publish', '5 Weeks Delivery'] },
      { name: 'Gold Dual App Suite', price: '₹99,999', desc: 'Agent App + Customer App suite', features: ['Customer App + Broker App', 'Real-time in-app chats with push', 'Saved search push alerts', 'Play Store + Apple App Store publish', '8 Weeks Delivery'] }
    ]
  },
  'seo-for-ecommerce': {
    title: 'SEO for Ecommerce',
    category: 'digital-marketing',
    price: '₹12,999/mo',
    desc: 'Rank your product pages first on Google with advanced SEO schema markup, speed fixes, and targeted search keywords.',
    features: ['Ecommerce Rich Snippets (Price, Stock)', 'Product Category Keyword Rank', 'Page Speed Caching Fixes', 'Bespoke Competitor Pricing Audits', 'Monthly Leads Audit'],
    plans: [
      { name: 'Local Shop SEO', price: '₹12,999/mo', desc: 'Local search rankings pack', features: ['20 target product keywords', 'Product schema markup installation', 'GMB profile local optimizations', 'Standard backlinks (15/mo)', '3 Month Commit'] },
      { name: 'Store Authority SEO', price: '₹24,999/mo', desc: 'National high traffic search rank', features: ['50 competitive product keywords', 'Technical site architecture speed improvements', 'Monthly shopping blogs content', 'High DA backlink acquisitions (30/mo)', 'No Contract'] }
    ]
  },
  'marketplace-development': {
    title: 'Marketplace Development',
    category: 'websites',
    price: '₹49,999',
    desc: 'Bespoke online service or product marketplaces with vendor commission models, payouts, and reviews.',
    features: ['Interactive Map Listing Matches', 'Vendor Wallet Pay Systems', 'Admin Central Revenue Dashboards', 'Interactive Location Filters', 'Review Moderation Desks'],
    plans: [
      { name: 'Service Marketplace', price: '₹49,999', desc: 'Listing and lead buy site for services', features: ['Interactive location searching', 'Service provider account setups', 'Razorpay token checkouts', 'Google Maps search integration', '4 Weeks Delivery'] },
      { name: 'Gold Product Marketplace', price: '₹89,999', desc: 'Complete physical goods seller marketplace', features: ['Real-time seller stock integration', 'Auto payout splits API hookups', 'Review moderation console panels', 'Advanced tax config dashboards', '6 Weeks Delivery'] }
    ]
  },
  // ─── Restaurants & Cafes ───────────────────────────────────
  'restaurant-web-dev': {
    title: 'Restaurant Website Development',
    category: 'websites',
    price: '₹9,999',
    desc: 'Stunning, fast, and optimized websites for restaurants and cafes with online menu displays.',
    features: ['Interactive Food Menu Display', 'Online Table Reservation Link', 'Google Maps Location & Hours', 'Social Media Integrations', 'Mobile Optimized Design'],
    plans: [
      { name: 'Standard Cafe Website', price: '₹9,999', desc: 'Clean profile & menu site', features: ['5 Pages Layout', 'Interactive PDF Menu display', 'Contact & Location Maps', 'Free Domain & Host (1 Yr)', '1 Week Delivery'] },
      { name: 'Gold Restaurant Site', price: '₹19,999', desc: 'Premium multi-page custom portal', features: ['10 Pages Custom Layout', 'Interactive filterable food menus', 'SEO optimize local pack maps', 'WordPress Admin Dashboard CMS', '2 Weeks Delivery'] }
    ]
  },
  'table-reservation-system': {
    title: 'Online Table Reservation System',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Allow guests to reserve tables online, choose seating preferences, and receive automatic confirmation alerts.',
    features: ['Interactive Floor Plan Selections', 'SMS & WhatsApp Reservation Alerts', 'Real-time Table Status Grids', 'Peak Hours Management Mod', 'Customer Feedback Logs'],
    plans: [
      { name: 'Standard Booking Portal', price: '₹14,999', desc: 'Standard slot reservation system', features: ['Online booking form widget', 'SMS auto confirmations', 'Table list management logs', 'Standard admin calendar', '2 Weeks Delivery'] },
      { name: 'Gold Floor Plan Suite', price: '₹29,999', desc: 'Advanced reservation system with layouts', features: ['Interactive seat selection grids', 'WhatsApp API notifications', 'Payment integration for reservation deposits', 'Defaulter/No-show logs tracking', '3 Weeks Delivery'] }
    ]
  },
  'food-ordering-system': {
    title: 'Food Ordering System',
    category: 'websites',
    price: '₹19,999',
    desc: 'Direct restaurant food ordering system to accept pickup and home delivery orders with no commission fees.',
    features: ['Direct Stripe/Razorpay Payments', 'Custom Discount Coupon Engine', 'Delivery Radius Configuration Map', 'Kitchen Receipt Printer Sync', 'Real-time Order Tracker Dashboard'],
    plans: [
      { name: 'Ordering Web Flow', price: '₹19,999', desc: 'Standard direct ordering store', features: ['Filterable menu ordering flow', 'Razorpay & UPI payment checkouts', 'SMS status updates', 'Kitchen receipt generator', '2 Weeks Delivery'] },
      { name: 'Gold Order Dispatch Suite', price: '₹34,999', desc: 'Advanced delivery & checkout hub', features: ['Delivery radius calculations map', 'Advanced order pipeline dashboards', 'WhatsApp catalogue matching', 'Defaulter logs tracking', '4 Weeks Delivery'] }
    ]
  },
  'restaurant-pos-system': {
    title: 'Restaurant POS System',
    category: 'business-software',
    price: '₹24,999',
    desc: 'All-in-one restaurant billing, kitchen display sync, and table order tracking software.',
    features: ['Quick Billing & Invoice PDFs', 'Kitchen Order Ticket (KOT) Sync', 'Table-wise Order Logs', 'Multi-payment Splits Methods', 'Detailed Sales Analytics Reports'],
    plans: [
      { name: 'Standard Billing POS', price: '₹24,999', desc: 'Standard billing terminal software', features: ['Table billing ledger', 'KOT thermal prints', 'GST compliant billing', 'Basic revenue reports', '2 Weeks Delivery'] },
      { name: 'Gold Kitchen ERP Suite', price: '₹44,999', desc: 'Complete multi-terminal restaurant suite', features: ['Kitchen display system (KDS) sync', 'Inventory stock tracking sync', 'Staff shifts logs tracking', 'Multi-payment ledger splits', '3 Weeks Delivery'] }
    ]
  },
  'qr-menu-solution': {
    title: 'QR Menu Solution',
    category: 'whatsapp-marketing',
    price: '₹4,999',
    desc: 'Contactless digital QR menus where guests can scan, browse, order, and pay from their table.',
    features: ['QR Code Poster Generators', 'Self-ordering Digital Cart', 'Table-wise Order Auto Allocator', 'WhatsApp Order Notifications', 'Payment at Table Gateway'],
    plans: [
      { name: 'Scan Only Menu', price: '₹4,999', desc: 'Basic QR scan menu catalog', features: ['Filterable mobile digital menu', 'Unique QR poster layout PDF', 'Admin menu manager panel', 'Standard WhatsApp links', '3 Days Delivery'] },
      { name: 'Gold Self-Order QR', price: '₹12,999', desc: 'Interactive table self-order suite', features: ['Scan-to-order web checkout', 'Table-wise order notifications dashboard', 'Integrated digital pay-at-table gateways', 'Review collection popup widgets', '1 Week Delivery'] }
    ]
  },
  'delivery-management-system': {
    title: 'Delivery Management System',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Real-time delivery driver tracking, order dispatching dashboard, and estimated arrival updates.',
    features: ['Driver Mobile Tracking Maps', 'Auto Order Dispatch Rules', 'Customer Live Status Trackers', 'Delivery Partner API Syncs', 'Driver Payment Ledgers'],
    plans: [
      { name: 'Standard Dispatch', price: '₹14,999', desc: 'Basic driver dispatch panel', features: ['Manual order dispatch tracker', 'Driver assignment records', 'SMS tracking links to customers', 'Driver daily logs', '2 Weeks Delivery'] },
      { name: 'Gold GPS Live Flow', price: '₹29,999', desc: 'Advanced automated mapping suite', features: ['Real-time GPS tracker dashboard', 'Auto-allocation round-robin dispatch', 'WhatsApp API live updates', 'Integration with Dunzo/Shadowfax', '3 Weeks Delivery'] }
    ]
  },
  'loyalty-program': {
    title: 'Loyalty Program',
    category: 'business-software',
    price: '₹9,999',
    desc: 'Customer loyalty cards, rewards points, discount coupons, and birthday promotion automation.',
    features: ['Customer Points Balance Accounts', 'Digital Membership Card PDFs', 'Loyalty Tier Rules (Bronze, Gold)', 'Auto Promo SMS Campaigns', 'Detailed Engagement Analytics'],
    plans: [
      { name: 'Points Wallet Standard', price: '₹9,999', desc: 'Standard point credit tracker', features: ['Point deposit/redeem panels', 'SMS transaction reports', 'Standard member directory', 'Basic analytics dashboard', '1 Week Delivery'] },
      { name: 'Gold Loyalty Automation', price: '₹19,999', desc: 'Advanced multi-tier marketing engine', features: ['Multi-tier membership settings', 'Automated Birthday WhatsApp/SMS campaigns', 'Digital card passbook downloads', 'Broker engagement insights', '2 Weeks Delivery'] }
    ]
  },
  'restaurant-mobile-app': {
    title: 'Restaurant Mobile App',
    category: 'mobile-apps',
    price: '₹49,999',
    desc: 'Native Android & iOS apps for food delivery, table booking, and instant push promotions.',
    features: ['In-app Menu & Order Cart', 'Table Reservation Scheduler', 'Push Notice Promotions Widget', 'Live Driver GPS Tracking', 'Google Play & Apple App Store Publish'],
    plans: [
      { name: 'Standard Food App', price: '₹49,999', desc: 'Direct order customer native app', features: ['Custom category food menus', 'In-app Razorpay and UPI checkout', 'SMS order status alert integrations', 'Android version publish', '4 Weeks Delivery'] },
      { name: 'Gold Full Campus Suite', price: '₹79,999', desc: 'Double app suite (Customer + Driver)', features: ['Customer App + Driver App', 'Live map route tracking', 'Zoom menu layouts', 'Play Store + Apple App Store publish', '6 Weeks Delivery'] }
    ]
  },
  'restaurant-crm': {
    title: 'Restaurant CRM',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Track guest databases, order history profiles, dining preferences, and feedback logs.',
    features: ['Detailed Guest Profiles Directory', 'Order History & Ticket Value logs', 'Dining Preference Trackers', 'Auto review collector SMS', 'Customer Segmentation Models'],
    plans: [
      { name: 'Standard Guest CRM', price: '₹14,999', desc: 'Standard client directory tool', features: ['Profile database sheets', 'Standard transaction history', 'Auto email promotions alerts', 'Detailed segmentation tags', '2 Weeks Delivery'] },
      { name: 'Gold Smart Guest Suite', price: '₹29,999', desc: 'AI customer profiling dashboard', features: ['Average order value (AOV) metrics', 'WhatsApp automation feedback collection', 'Birthday auto campaign engines', 'Bespoke marketing triggers', '3 Weeks Delivery'] }
    ]
  },
  'restaurant-digital-marketing': {
    title: 'Restaurant Digital Marketing',
    category: 'digital-marketing',
    price: '₹12,999/mo',
    desc: 'High-ROI digital marketing campaigns - Instagram food photography, local SEO, and Meta ads.',
    features: ['High quality Food Graphic Designs', 'Meta Local Food Lead Ads', 'Google Maps Local search ranking', 'Influencer Tie-up Strategy', 'Monthly ROI Analytics Audits'],
    plans: [
      { name: 'Cafe Growth Pack', price: '₹12,999/mo', desc: 'Social + maps local rankings pack', features: ['16 Custom branding food graphics', 'GMB profile local optimizations', 'Local meta ads setup', 'Standard review boost campaign', 'Cancel Anytime'] },
      { name: 'Restaurant Authority Pack', price: '₹24,999/mo', desc: 'Complete brand authority marketing', features: ['30 Custom posts (daily graphics/reels)', 'Paid local google search ads campaign', 'Influencer partnership outreach', 'WhatsApp lead verification integrations', 'Cancel Anytime'] }
    ]
  },
  // ─── Salons & Wellness ─────────────────────────────────────
  'salon-web-dev': {
    title: 'Salon Website Development',
    category: 'websites',
    price: '₹9,999',
    desc: 'Stunning, fast, and optimized websites for salons, spas, and wellness centers showcasing lists of services.',
    features: ['Service List & Price Menus', 'Google Maps Local Embed', 'Staff Profile Portfolios', 'Appointment Request Callouts', 'Responsive Mobile Designs'],
    plans: [
      { name: 'Standard Salon Site', price: '₹9,999', desc: 'Clean page listing services & team', features: ['5 Pages Layout', 'Online service menu display', 'WhatsApp booking redirect links', 'Free Domain & Host (1 Yr)', '1 Week Delivery'] },
      { name: 'Gold Salon Portal', price: '₹19,999', desc: 'Premium multi-page custom portal', features: ['10 Pages Custom Layout', 'Stylist portfolio slider widget', 'Local search map citation boost', 'WordPress Admin Dashboard CMS', '2 Weeks Delivery'] }
    ]
  },
  'salon-appointment-booking': {
    title: 'Appointment Booking System',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Easy online booking software for salons so clients can self-schedule appointments and get reminders.',
    features: ['Stylist Calendar Views', 'Real-time Slot Bookings', 'WhatsApp/SMS Automated Reminders', 'Reschedule & Cancellation Logs', 'Payment Deposit Collection'],
    plans: [
      { name: 'Standard Booking Portal', price: '₹14,999', desc: 'Standard slot reservation system', features: ['Online booking form widget', 'SMS auto confirmations', 'Table list management logs', 'Standard admin calendar', '2 Weeks Delivery'] },
      { name: 'Gold Stylist Suite', price: '₹24,999', desc: 'Advanced reservation system with staff profiles', features: ['Stylist wise profile bookings', 'WhatsApp API confirmations', 'Deposit collections on checkout', 'Automatic queue distribution', '3 Weeks Delivery'] }
    ]
  },
  'salon-management-software': {
    title: 'Salon Management Software',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Manage salon operations, staff calendars, service commissions, and daily check-ins easily.',
    features: ['Stylist Rota Calendars', 'Commission Billing Calculators', 'Quick Check-in Desk', 'Retail Product Stock Sync', 'Revenue Performance Tracker'],
    plans: [
      { name: 'Standard Management Panel', price: '₹19,999', desc: 'Basic booking & check-in software', features: ['Daily stylist schedule tables', 'Commission calculation sheet', 'Standard sales reports', 'Retail sales logging', '2 Weeks Delivery'] },
      { name: 'Gold Multi-Chair Suite', price: '₹39,999', desc: 'Complete enterprise salon management', features: ['Unlimited chair allocation grids', 'Staff check-in biometric hooks', 'Inventory low-stock alerts', 'Multi-payment ledger splits', '4 Weeks Delivery'] }
    ]
  },
  'spa-management-system': {
    title: 'Spa Management System',
    category: 'business-software',
    price: '₹24,999',
    desc: 'Complete billing, cabin allocations, therapist schedules, and feedback logs software for spas.',
    features: ['Room & Cabin Grid Allocation', 'Therapist Shift Planners', 'Therapy Service Billing', 'Consent Form Digital Signature', 'Detailed Performance Insights'],
    plans: [
      { name: 'Spa Dispatch Basic', price: '₹24,999', desc: 'Standard room allocation portal', features: ['Room assignment log tables', 'Therapist schedules grids', 'Standard billing receipts', 'Basic feedback collector', '2 Weeks Delivery'] },
      { name: 'Gold Wellness ERP', price: '₹44,999', desc: 'Complete spa booking & resource planning', features: ['Digital client consent forms e-sign', 'Product consumption logging', 'WhatsApp notifications on booking', 'Commissions allocation engine', '3 Weeks Delivery'] }
    ]
  },
  'membership-management': {
    title: 'Membership Management',
    category: 'business-software',
    price: '₹9,999',
    desc: 'Configure monthly subscriptions, prepaid package logs, and loyalty points balances for salon VIP members.',
    features: ['Prepaid Services Wallets', 'Loyalty Tier Rules (Bronze, VIP)', 'Recurring Subscription Gateways', 'Digital membership pass PDFs', 'Points Ledger Audit Logs'],
    plans: [
      { name: 'Membership Tracker Standard', price: '₹9,999', desc: 'Prepaid package logs tracker', features: ['Prepaid credits directory database', 'SMS points transaction notifications', 'Standard subscriber tag tags', 'Basic usage stats dashboard', '1 Week Delivery'] },
      { name: 'Gold VIP Subscription Suite', price: '₹19,999', desc: 'Advanced recurring billing suite', features: ['Monthly auto billing integration (Stripe)', 'Custom loyalty tier calculations', 'Auto promotional WhatsApp campaigns', 'Digital wallet passbooks', '2 Weeks Delivery'] }
    ]
  },
  'customer-crm': {
    title: 'Customer CRM',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Keep complete customer profiles containing service logs, hair/skin preferences, and contact details.',
    features: ['Detailed Client Profile History', 'Hair/Skin Preference Files', 'Average spend & visit records', 'Review auto-collect SMS widgets', 'Audience Segmentation Tag Tags'],
    plans: [
      { name: 'Standard Client CRM', price: '₹14,999', desc: 'Standard client directory tool', features: ['Profile database sheets', 'Standard transaction history', 'Auto email promotions alerts', 'Detailed segmentation tags', '2 Weeks Delivery'] },
      { name: 'Gold Client Profiler', price: '₹29,999', desc: 'AI customer profiling dashboard', features: ['Average order value (AOV) metrics', 'WhatsApp automation feedback collection', 'Birthday auto campaign engines', 'Bespoke marketing triggers', '3 Weeks Delivery'] }
    ]
  },
  'billing-software': {
    title: 'Billing Software',
    category: 'business-software',
    price: '₹12,999',
    desc: 'Generate fast invoices, track retail product inventory, and calculate GST logs.',
    features: ['Fast Thermal Receipt Printing', 'GST Compliant Tax billing', 'Retail product inventory track', 'Cash/Card/UPI transaction logger', 'Daily cash drawer balancing'],
    plans: [
      { name: 'Standard Billing POS', price: '₹12,999', desc: 'Standard billing terminal software', features: ['Service billing ledger', 'KOT thermal prints', 'GST compliant billing', 'Basic revenue reports', '1 Week Delivery'] },
      { name: 'Gold Inventory Billing Suite', price: '₹24,999', desc: 'Advanced inventory-synced billing', features: ['Bar-code scanning inventory tracking', 'Automatic tax billing configurations', 'Supplier inventory checks', 'Advanced digital payment links', '2 Weeks Delivery'] }
    ]
  },
  'wellness-mobile-app': {
    title: 'Wellness Mobile App',
    category: 'mobile-apps',
    price: '₹49,999',
    desc: 'Native Android & iOS app for online booking, service catalogs, digital membership passes, and push updates.',
    features: ['Filterable Service Menu Catalog', 'Stylist Booking Calendar Widget', 'In-app Razorpay and UPI checkout', 'Push Notice Promotions Widget', 'Play/App Store Publishing'],
    plans: [
      { name: 'Standard Salon App', price: '₹49,999', desc: 'Direct order customer native app', features: ['Custom category services list', 'In-app booking & payments', 'SMS order status alert integrations', 'Android version publish', '5 Weeks Delivery'] },
      { name: 'Gold Dual App Suite', price: '₹79,999', desc: 'Double app suite (Customer + Staff)', features: ['Customer App + Stylist App', 'Live push alerts notification board', 'Saved booking logs tracking', 'Play Store + Apple App Store publish', '7 Weeks Delivery'] }
    ]
  },
  'marketing-automation': {
    title: 'Marketing Automation',
    category: 'whatsapp-marketing',
    price: '₹9,999',
    desc: 'Auto reminders for appointments, birthday greeting promotions, and feedback collection via WhatsApp.',
    features: ['Official WhatsApp Business API setup', 'Bulk SMS/WhatsApp broadcast tools', 'Automated Birthday discount engines', 'Auto feedback review collection', 'Campaign performance statistics'],
    plans: [
      { name: 'Standard Auto Broadcast', price: '₹9,999', desc: 'Manual broadcast scheduler portal', features: ['API broadcast portal', 'SMS templates scheduler panel', 'GMB review collection widget', 'Standard contact tags', '1 Week Delivery'] },
      { name: 'Gold Lead Nurturing Engine', price: '₹19,999', desc: 'AI automated broadcast triggers', features: ['WhatsApp API automated alerts triggers', 'Monthly campaigns analysis reports', 'Automated birthday discount engines', 'Review collections templates sync', '2 Weeks Delivery'] }
    ]
  },
  'salon-seo-services': {
    title: 'Salon SEO Services',
    category: 'digital-marketing',
    price: '₹9,999/mo',
    desc: 'Local salon SEO to rank high on maps search and keywords like "best haircut/salon near me".',
    features: ['Local Stylist Keywords', 'Google Maps Business Optimisation', 'Location Specific SEO Setup', 'High DA local citations', 'Monthly GMB reports audit'],
    plans: [
      { name: 'Salon Local Rank', price: '₹9,999/mo', desc: 'Local project keywords ranking package', features: ['15 Local project keywords', 'GMB profile local optimizations', 'Project microsite speed checks', 'Standard backlinks (10/mo)', '3 Month Commit'] },
      { name: 'Beauty Authority SEO', price: '₹19,999/mo', desc: 'Complete brand authority builder package', features: ['40 High volume local keywords', 'Monthly blogs & project reviews writing', 'High-DA local links (25/mo)', 'Real-time rankings tracking panels', 'No Contract'] }
    ]
  },
  // ─── Travel & Tourism ─────────────────────────────────────
  'travel-booking-website': {
    title: 'Travel Booking Website',
    category: 'websites',
    price: '₹14,999',
    desc: 'Stunning travel booking portals with destination galleries, itinerary displays, and secure online reservations.',
    features: ['Tour Package Listings', 'Destination Photo Galleries', 'Itinerary Day-by-Day View', 'Online Enquiry & Booking Forms', 'WhatsApp Chat Integration'],
    plans: [
      { name: 'Standard Travel Site', price: '₹14,999', desc: 'Basic travel agency website', features: ['10 Pages Layout', 'Package listing catalogs', 'Enquiry form integrations', 'Gallery photo carousels', '1 Week Delivery'] },
      { name: 'Gold Travel Portal', price: '₹29,999', desc: 'Premium booking portal', features: ['Unlimited package pages', 'Itinerary day planner pages', 'Blog & travel guides CMS', 'Review testimonial widgets', '2 Weeks Delivery'] }
    ]
  },
  'tour-package-management': {
    title: 'Tour Package Management',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Complete tour package management system with seat availability, pricing tiers, and automated booking confirmations.',
    features: ['Package Builder Dashboard', 'Seat Availability Calendar', 'Advance Payment Collection', 'Booking Confirmation PDFs', 'Agent B2B Portal'],
    plans: [
      { name: 'Standard Package Manager', price: '₹19,999', desc: 'Basic package management tool', features: ['Package creation builder', 'Online booking acceptance', 'Payment gateway checkout', 'Confirmation PDF exports', '2 Weeks Delivery'] },
      { name: 'Gold Tour Operations Suite', price: '₹39,999', desc: 'Full tour operations platform', features: ['Live availability calendar', 'Agent commission portal', 'Cancellation refund module', 'Revenue analytics reports', '3 Weeks Delivery'] }
    ]
  },
  'hotel-booking-system': {
    title: 'Hotel Booking System',
    category: 'business-software',
    price: '₹24,999',
    desc: 'Online hotel reservation system with room availability calendars, rate management, and guest check-in portals.',
    features: ['Room Availability Calendar', 'Rate & Season Management', 'Guest Self Check-in Portal', 'Multi-room Type Listing', 'Booking Confirmation SMS'],
    plans: [
      { name: 'Standard Hotel Booking', price: '₹24,999', desc: 'Standard reservation system', features: ['Room listing & calendars', 'Online booking acceptance', 'Payment gateway checkout', 'Email confirmations setup', '2 Weeks Delivery'] },
      { name: 'Gold Hotel Management Suite', price: '₹49,999', desc: 'Complete hotel management system', features: ['Dynamic rate management', 'OTA channel integrations', 'Guest check-in dashboard', 'Revenue analytics reports', '4 Weeks Delivery'] }
    ]
  },
  'flight-booking-integration': {
    title: 'Flight Booking Integration',
    category: 'business-software',
    price: '₹34,999',
    desc: 'Integrate real-time flight search, comparison, and booking APIs into your travel portal for direct ticketing.',
    features: ['Real-time Flight Search API', 'Fare Comparison Engine', 'PNR Booking Generation', 'E-ticket PDF Downloads', 'Multi-airline Support'],
    plans: [
      { name: 'Standard Flight Module', price: '₹34,999', desc: 'Basic flight search integration', features: ['Single GDS API integration', 'Flight search widgets', 'Basic fare comparison tool', 'Booking confirmation PDFs', '3 Weeks Delivery'] },
      { name: 'Gold Flight Booking Suite', price: '₹64,999', desc: 'Full flight booking platform', features: ['Multi-GDS API connections', 'Dynamic fare comparison', 'PNR management dashboard', 'Ancillary service add-ons', '5 Weeks Delivery'] }
    ]
  },
  'travel-crm': {
    title: 'Travel CRM',
    category: 'business-software',
    price: '₹14,999',
    desc: 'Dedicated CRM for travel agencies to track leads, manage follow-ups, and convert inquiries into confirmed bookings.',
    features: ['Lead Capture Pipeline', 'Follow-up Task Scheduler', 'WhatsApp & Email Integration', 'Booking Status Tracking', 'Agent Performance Dashboard'],
    plans: [
      { name: 'Standard Travel CRM', price: '₹14,999', desc: 'Basic lead tracking tool', features: ['Lead pipeline management', 'Follow-up task reminders', 'Email integration setup', 'Basic analytics dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Travel CRM Suite', price: '₹29,999', desc: 'Full travel CRM system', features: ['WhatsApp API integrations', 'Booking conversion tracking', 'Agent commission reports', 'Client travel history logs', '3 Weeks Delivery'] }
    ]
  },
  'travel-mobile-app': {
    title: 'Travel Mobile App',
    category: 'mobile-apps',
    price: '₹49,999',
    desc: 'Branded Android & iOS travel app with package browsing, bookings, live itineraries, and push trip updates.',
    features: ['Package Browse & Booking', 'Live Trip Itinerary View', 'Push Trip Update Alerts', 'Offline Itinerary Access', 'Play/App Store Publishing'],
    plans: [
      { name: 'Standard Travel App', price: '₹49,999', desc: 'Basic travel booking app', features: ['Package catalog browsing', 'In-app booking checkout', 'Push notification setup', 'Android version publish', '5 Weeks Delivery'] },
      { name: 'Gold Dual Travel App', price: '₹89,999', desc: 'Full travel companion app', features: ['Android + iOS dual publish', 'Live itinerary tracker', 'Offline mode access', 'Review submission portal', '7 Weeks Delivery'] }
    ]
  },
  'visa-management-system': {
    title: 'Visa Management System',
    category: 'business-software',
    price: '₹19,999',
    desc: 'Track visa applications, document checklists, appointment schedules, and approval status for travel clients.',
    features: ['Application Status Tracker', 'Document Checklist Manager', 'Appointment Schedule Calendar', 'Client Notification Alerts', 'Country Visa Rules Database'],
    plans: [
      { name: 'Standard Visa Tracker', price: '₹19,999', desc: 'Basic visa tracking portal', features: ['Application status board', 'Document checklist forms', 'SMS appointment reminders', 'Standard admin dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Visa Management Suite', price: '₹39,999', desc: 'Complete visa operations system', features: ['Multi-country visa rules DB', 'Auto document verification', 'Client self-service portal', 'Revenue analytics reports', '4 Weeks Delivery'] }
    ]
  },
  'tour-guide-portal': {
    title: 'Tour Guide Portal',
    category: 'websites',
    price: '₹14,999',
    desc: 'Online portal for listing tour guides, booking local experiences, and managing guide availability calendars.',
    features: ['Guide Profile Listings', 'Experience Catalog Display', 'Availability Calendar Widget', 'Review & Rating System', 'Online Booking Integration'],
    plans: [
      { name: 'Standard Guide Portal', price: '₹14,999', desc: 'Basic tour guide directory', features: ['Guide profile directory', 'Experience listing pages', 'Enquiry form widget', 'Mobile responsive layout', '1 Week Delivery'] },
      { name: 'Gold Experience Platform', price: '₹29,999', desc: 'Full experience booking portal', features: ['Live availability calendars', 'In-app booking checkout', 'Review rating engine', 'Guide analytics dashboard', '3 Weeks Delivery'] }
    ]
  },
  'travel-marketing-services': {
    title: 'Travel Marketing Services',
    category: 'digital-marketing',
    price: '₹12,999/mo',
    desc: 'Inspire wanderlust with stunning destination content, travel reels, and targeted campaigns on Instagram & Facebook.',
    features: ['Destination Instagram Reels', 'Facebook Travel Lead Ads', 'Influencer Collaborations', 'Seasonal Campaign Planning', 'Monthly Analytics Reports'],
    plans: [
      { name: 'Travel Growth Pack', price: '₹12,999/mo', desc: 'Social media brand building', features: ['15 Custom travel posts', 'Instagram + Facebook ads', 'GMB profile management', 'Standard monthly reports', 'Cancel Anytime'] },
      { name: 'Travel Authority Pack', price: '₹24,999/mo', desc: 'Full travel marketing suite', features: ['30 Posts + destination reels', 'Influencer partnership outreach', 'Seasonal promotional campaigns', 'WhatsApp lead automation', 'Cancel Anytime'] }
    ]
  },
  'seo-for-travel': {
    title: 'SEO for Travel Business',
    category: 'digital-marketing',
    price: '₹9,999/mo',
    desc: 'Rank for destination and package searches on Google to drive organic travel enquiries without ad spend.',
    features: ['Destination Page SEO', 'Travel Blog Content Creation', 'Google Maps Local Ranking', 'Package Schema Markup', 'Monthly Rankings Reports'],
    plans: [
      { name: 'Travel Local Rank', price: '₹9,999/mo', desc: 'Local travel SEO package', features: ['15 Destination keywords', 'GMB profile optimizations', 'Destination page speed audit', 'Standard backlinks (10/mo)', '3 Month Commit'] },
      { name: 'Travel Authority SEO', price: '₹19,999/mo', desc: 'Complete travel SEO package', features: ['40 High volume travel keywords', 'Monthly travel blogs (4/mo)', 'High-DA travel links (20/mo)', 'Full schema markup setup', 'No Contract'] }
    ]
  },
  'travel-booking-website': {
    title: 'Travel Booking Website',
    category: 'websites',
    price: '₹29,999',
    desc: 'Launch a fully functional travel booking website that allows users to search, compare, and book flights, hotels, and tours seamlessly online.',
    features: ['Real-time Search & Filtering', 'Secure Payment Gateway', 'Multi-currency Support', 'User Accounts & Booking History', 'Reviews & Ratings'],
    plans: [
      { name: 'Starter', price: '₹29,999', desc: 'Basic booking website', features: ['5 Pages', 'Contact Forms', 'Basic Search', 'Mobile Responsive', '2 Weeks Delivery'] },
      { name: 'Professional', price: '₹59,999', desc: 'Advanced booking portal', features: ['15 Pages', 'Payment Integration', 'User Accounts', 'Reviews System', '4 Weeks Delivery'] }
    ]
  },
  'tour-package-management': {
    title: 'Tour Package Management',
    category: 'business-software',
    price: '₹34,999',
    desc: 'A complete system to create, manage, and sell tour packages online. Includes dynamic itinerary builders, availability calendars, and booking management.',
    features: ['Dynamic Itinerary Builder', 'Availability & Inventory Management', 'Multi-day Tour Setup', 'Custom Add-ons & Extras', 'B2B & B2C Portals'],
    plans: [
      { name: 'Basic', price: '₹34,999', desc: 'Simple package management', features: ['Up to 50 Packages', 'Basic Itineraries', 'Enquiry Forms', 'Admin Dashboard', '3 Weeks Delivery'] },
      { name: 'Pro', price: '₹69,999', desc: 'Full online booking system', features: ['Unlimited Packages', 'Online Booking', 'Dynamic Pricing', 'Supplier Portal', '6 Weeks Delivery'] }
    ]
  },
  'hotel-booking-system': {
    title: 'Hotel Booking System',
    category: 'websites',
    price: '₹39,999',
    desc: 'Empower your hotel or resort with a robust direct booking engine. Bypass OTA commissions and take control of your reservations.',
    features: ['Real-time Room Inventory', 'Secure Online Payments', 'Channel Manager Integration', 'Promo Codes & Discounts', 'Guest Management CRM'],
    plans: [
      { name: 'Boutique', price: '₹39,999', desc: 'Single property booking engine', features: ['Up to 50 Rooms', 'Direct Booking', 'Payment Gateway', 'Basic CRM', '4 Weeks Delivery'] },
      { name: 'Resort', price: '₹79,999', desc: 'Full hotel management system', features: ['Unlimited Rooms', 'Channel Manager Sync', 'Promo Engine', 'Advanced CRM', '8 Weeks Delivery'] }
    ]
  },
  'flight-booking-integration': {
    title: 'Flight Booking Integration',
    category: 'business-software',
    price: '₹74,999',
    desc: 'Integrate global flight booking capabilities into your travel platform using GDS (Global Distribution System) APIs.',
    features: ['Global Flight Search', 'Real-time Fares & Availability', 'Multi-city & Round Trip', 'Seat Selection', 'Baggage Allowances'],
    plans: [
      { name: 'Integration', price: '₹74,999', desc: 'Basic flight integration', features: ['Single GDS API', 'Flight Search', 'Booking Flow', 'Markup Management', '6 Weeks Delivery'] },
      { name: 'Advanced', price: '₹1,24,999', desc: 'Multi-GDS integration', features: ['Multi-GDS / LCCs', 'Ancillary Services', 'Advanced Filters', 'B2B Portal', '10 Weeks Delivery'] }
    ]
  },
  'travel-crm': {
    title: 'Travel CRM',
    category: 'business-software',
    price: '₹24,999',
    desc: 'A specialized CRM designed for the travel industry to manage leads, track inquiries, build quotes, and nurture client relationships effectively.',
    features: ['Lead Capture & Management', 'Custom Itinerary Quotations', 'Automated Follow-ups', 'Client Booking History', 'Supplier Database'],
    plans: [
      { name: 'Starter CRM', price: '₹24,999', desc: 'For small travel agencies', features: ['Up to 5 Users', 'Lead Management', 'Basic Quotes', 'Email Integration', '3 Weeks Delivery'] },
      { name: 'Pro CRM', price: '₹54,999', desc: 'Advanced automation CRM', features: ['Up to 20 Users', 'Custom Itinerary Builder', 'WhatsApp API', 'Advanced Reports', '6 Weeks Delivery'] }
    ]
  },
  'travel-mobile-app': {
    title: 'Travel Mobile App',
    category: 'mobile-apps',
    price: '₹69,999',
    desc: 'Build custom iOS and Android applications for your travel business, allowing users to book, manage itineraries, and access travel guides on the go.',
    features: ['Native iOS & Android Apps', 'Offline Itinerary Access', 'Push Notifications for Updates', 'In-App Booking', 'Location-Based Guides'],
    plans: [
      { name: 'Companion App', price: '₹69,999', desc: 'Itinerary management app', features: ['Offline Itineraries', 'Digital Vouchers', 'Push Notifications', 'Basic Chat', '6 Weeks Delivery'] },
      { name: 'Booking App', price: '₹1,29,999', desc: 'Full booking app', features: ['In-App Booking', 'Payment Gateway', 'User Profiles', 'Location Guides', '10 Weeks Delivery'] }
    ]
  },
  'visa-management-system': {
    title: 'Visa Management System',
    category: 'business-software',
    price: '₹34,999',
    desc: 'A secure, efficient system for visa consultants and agencies to manage applications, track statuses, and communicate with clients seamlessly.',
    features: ['Online Application Forms', 'Document Upload & Verification', 'Automated Status Updates', 'Embassy Guidelines Database', 'Payment Collection'],
    plans: [
      { name: 'Basic Portal', price: '₹34,999', desc: 'Simple visa management', features: ['Online Forms', 'Document Upload', 'Status Tracking', 'Email Alerts', '4 Weeks Delivery'] },
      { name: 'Advanced System', price: '₹74,999', desc: 'Full automation system', features: ['Client Portal', 'WhatsApp Alerts', 'Payment Integration', 'Task Manager', '8 Weeks Delivery'] }
    ]
  },
  'tour-guide-portal': {
    title: 'Tour Guide Portal',
    category: 'business-software',
    price: '₹49,999',
    desc: 'A dedicated platform to manage your network of tour guides, assign tours, track availability, and handle payments efficiently.',
    features: ['Guide Profiles & Specialties', 'Availability Calendar', 'Automated Tour Assignment', 'GPS Tracking (Optional)', 'In-App Messaging'],
    plans: [
      { name: 'Standard Portal', price: '₹49,999', desc: 'Core guide management', features: ['Guide Profiles', 'Availability Calendar', 'Tour Assignment', 'Admin Dashboard', '6 Weeks Delivery'] },
      { name: 'Pro Portal', price: '₹94,999', desc: 'Advanced management with App', features: ['Mobile App for Guides', 'Automated Payouts', 'In-App Chat', 'Rating System', '10 Weeks Delivery'] }
    ]
  },
  'seo-for-travel-business': {
    title: 'SEO for Travel Business',
    category: 'digital-marketing',
    price: '₹14,999/mo',
    desc: 'A targeted SEO strategy to help your travel agency, hotel, or tour company rank high on Google for high-intent travel keywords and destination searches.',
    features: ['Travel Keyword Research', 'Destination Page Optimization', 'Local SEO & GMB Optimization', 'Travel Blog Content Creation', 'High-Quality Backlink Building'],
    plans: [
      { name: 'Destination SEO', price: '₹14,999/mo', desc: 'Focus on core offerings', features: ['20 Target Keywords', 'On-page SEO', '2 Blog Posts/mo', 'GMB Management', 'Monthly Reports'] },
      { name: 'Travel Authority', price: '₹29,999/mo', desc: 'Aggressive growth plan', features: ['50 Target Keywords', 'Technical SEO', '4 Blog Posts/mo', 'Link Building', 'Schema Markup'] }
    ]
  },
  'law-firm-website-development': {
    title: 'Law Firm Website Development',
    category: 'websites',
    price: '₹24,999',
    desc: 'A highly professional, secure, and fast-loading website designed specifically for law firms to showcase practice areas, attorney profiles, and generate client leads.',
    features: ['Practice Area Showcases', 'Attorney Directory & Profiles', 'Secure Client Portal', 'Lead Generation Forms', 'Blog & Legal Insights'],
    plans: [
      { name: 'Starter', price: '₹24,999', desc: 'Basic professional website', features: ['Up to 10 Pages', 'Attorney Profiles', 'Contact Form', 'Mobile Responsive', '2 Weeks Delivery'] },
      { name: 'Professional', price: '₹49,999', desc: 'Advanced firm website', features: ['Up to 25 Pages', 'Client Portal', 'Blog Setup', 'SEO Basics', '4 Weeks Delivery'] }
    ]
  },
  'case-management-system': {
    title: 'Case Management System',
    category: 'business-software',
    price: '₹49,999',
    desc: 'A secure, cloud-based case management system to track case progress, manage court dates, store documents, and collaborate with your legal team.',
    features: ['Case Tracking Dashboard', 'Court Date Calendar & Reminders', 'Secure Document Storage', 'Task Management', 'Team Collaboration Tools'],
    plans: [
      { name: 'Basic', price: '₹49,999', desc: 'Simple case tracking', features: ['Case Dashboard', 'Calendar', 'Document Storage', 'Up to 5 Users', '4 Weeks Delivery'] },
      { name: 'Pro', price: '₹99,999', desc: 'Advanced management system', features: ['Client Portal', 'Time Tracking', 'Conflict Checking', 'Up to 20 Users', '8 Weeks Delivery'] }
    ]
  },
  'legal-crm': {
    title: 'Legal CRM',
    category: 'business-software',
    price: '₹29,999',
    desc: 'A specialized Customer Relationship Management (CRM) tool for law firms to manage client intake, track lead sources, and automate follow-ups.',
    features: ['Automated Client Intake', 'Lead Source Tracking', 'Email & SMS Automation', 'Consultation Scheduling', 'Custom Intake Forms'],
    plans: [
      { name: 'Starter CRM', price: '₹29,999', desc: 'Basic intake management', features: ['Lead Tracking', 'Custom Forms', 'Email Automation', 'Up to 5 Users', '3 Weeks Delivery'] },
      { name: 'Pro CRM', price: '₹59,999', desc: 'Full pipeline management', features: ['Advanced Automation', 'SMS Integration', 'Analytics Dashboard', 'Up to 15 Users', '6 Weeks Delivery'] }
    ]
  },
  'legal-appointment-booking': {
    title: 'Appointment Booking',
    category: 'websites',
    price: '₹19,999',
    desc: 'An intelligent scheduling system that allows clients to book consultations based on your real-time availability, with automated reminders and payment processing.',
    features: ['Real-time Calendar Sync', 'Automated Email/SMS Reminders', 'Online Payment Collection', 'Video Conferencing Integration', 'Time Zone Management'],
    plans: [
      { name: 'Standard Booking', price: '₹19,999', desc: 'Automated scheduling', features: ['Calendar Sync', 'Email Reminders', 'Intake Forms', '1 Week Delivery'] },
      { name: 'Premium Booking', price: '₹34,999', desc: 'Paid & Virtual consultations', features: ['Payment Integration', 'Zoom Integration', 'SMS Reminders', '2 Weeks Delivery'] }
    ]
  },
  'document-management-system': {
    title: 'Document Management System',
    category: 'business-software',
    price: '₹39,999',
    desc: 'A robust digital filing system tailored for legal professionals, featuring advanced OCR search, version control, and secure sharing capabilities.',
    features: ['OCR Text Search', 'Version Control & History', 'Secure Document Sharing', 'Access Role Management', 'E-signature Integration'],
    plans: [
      { name: 'Cloud Docs', price: '₹39,999', desc: 'Basic document storage', features: ['Secure Storage', 'Folder Management', 'Basic Search', '4 Weeks Delivery'] },
      { name: 'Advanced DMS', price: '₹79,999', desc: 'Full featured document system', features: ['OCR Search', 'Version Control', 'E-signatures', 'Audit Trails', '8 Weeks Delivery'] }
    ]
  },
  'legal-consultation-portal': {
    title: 'Legal Consultation Portal',
    category: 'websites',
    price: '₹59,999',
    desc: 'A complete virtual platform allowing advocates to provide secure video consultations, share documents, and chat with clients remotely.',
    features: ['Secure Video Conferencing', 'Encrypted Chat & Messaging', 'File Sharing', 'Session Recording (Optional)', 'Billing & Invoicing'],
    plans: [
      { name: 'Basic Portal', price: '₹59,999', desc: 'Secure chat & file sharing', features: ['Encrypted Chat', 'File Sharing', 'Client Dashboard', '6 Weeks Delivery'] },
      { name: 'Video Consultation', price: '₹99,999', desc: 'Full virtual office', features: ['Video Conferencing', 'Integrated Billing', 'Session Recording', '10 Weeks Delivery'] }
    ]
  },
  'client-management-system': {
    title: 'Client Management System',
    category: 'business-software',
    price: '₹34,999',
    desc: 'Keep track of every client detail, from contact information to past case history, billing status, and communication logs in one centralized hub.',
    features: ['Centralized Client Database', 'Communication Logs', 'Billing & Payment Status', 'Case History Tracking', 'Client Portal Access'],
    plans: [
      { name: 'Standard CMS', price: '₹34,999', desc: 'Basic client tracking', features: ['Client Database', 'Communication Logs', 'Basic Reports', '4 Weeks Delivery'] },
      { name: 'Pro CMS', price: '₹64,999', desc: 'Advanced client portal', features: ['Client Portal', 'Billing Integration', 'Automated Alerts', '6 Weeks Delivery'] }
    ]
  },
  'billing-invoice-management': {
    title: 'Billing & Invoice Management',
    category: 'business-software',
    price: '₹29,999',
    desc: 'A specialized billing solution for law firms to track billable hours, generate professional invoices, handle retainer accounts, and accept online payments.',
    features: ['Time & Expense Tracking', 'Automated Invoice Generation', 'Retainer Management (Trust Accounting)', 'Online Payment Gateway', 'Overdue Invoice Reminders'],
    plans: [
      { name: 'Basic Billing', price: '₹29,999', desc: 'Simple invoicing & tracking', features: ['Time Tracking', 'Invoice Generation', 'Payment Gateway', '3 Weeks Delivery'] },
      { name: 'Trust Accounting', price: '₹59,999', desc: 'Advanced legal billing', features: ['Retainer Management', 'Automated Reminders', 'Advanced Reports', '6 Weeks Delivery'] }
    ]
  },
  'legal-mobile-app': {
    title: 'Legal Mobile App',
    category: 'mobile-apps',
    price: '₹79,999',
    desc: 'Custom iOS and Android apps for law firms to offer on-the-go access to case updates, secure messaging, document uploads, and appointment booking.',
    features: ['Native iOS & Android Apps', 'Push Notifications', 'Secure Client Messaging', 'Mobile Document Scanner', 'Case Status Updates'],
    plans: [
      { name: 'Client Portal App', price: '₹79,999', desc: 'Basic client access app', features: ['Status Updates', 'Secure Messaging', 'Push Notifications', '8 Weeks Delivery'] },
      { name: 'Full Firm App', price: '₹1,39,999', desc: 'Comprehensive mobile app', features: ['Document Scanner', 'Payments', 'Biometric Login', '12 Weeks Delivery'] }
    ]
  },
  'law-firm-seo-services': {
    title: 'Law Firm SEO Services',
    category: 'digital-marketing',
    price: '₹19,999/mo',
    desc: 'Specialized Search Engine Optimization for law firms. We target high-intent legal keywords and optimize your local presence to ensure you rank when clients need you most.',
    features: ['Local SEO & GMB Optimization', 'Legal Keyword Strategy', 'Practice Area Page Optimization', 'High-Authority Legal Backlinks', 'Content Marketing (Legal Blogs)'],
    plans: [
      { name: 'Local Domination', price: '₹19,999/mo', desc: 'Focus on local search', features: ['20 Keywords', 'GMB Optimization', '2 Legal Articles/mo', 'Local Backlinks', 'Monthly Report'] },
      { name: 'Practice Area Growth', price: '₹39,999/mo', desc: 'Aggressive growth strategy', features: ['50 Keywords', 'Technical SEO', '4 Legal Articles/mo', 'High-DA Backlinks', 'Bi-weekly Reports'] }
    ]
  },
  'manufacturing-erp': {
    title: 'Manufacturing ERP',
    category: 'business-software',
    price: '₹99,999',
    desc: 'A comprehensive ERP system designed specifically for the manufacturing sector to unify operations, finance, supply chain, and production on a single platform.',
    features: ['BOM (Bill of Materials) Management', 'Production Scheduling', 'Financial & Cost Accounting', 'Procurement & Vendor Portal', 'Order Management'],
    plans: [
      { name: 'Core ERP', price: '₹99,999', desc: 'Essential manufacturing modules', features: ['Inventory & Orders', 'Basic BOM', 'Finance Module', 'Admin Dashboard', '8 Weeks Delivery'] },
      { name: 'Enterprise ERP', price: '₹1,99,999', desc: 'Full-scale factory management', features: ['Multi-plant Support', 'Advanced Scheduling', 'Quality Control', 'Custom API Ecosystem', '14 Weeks Delivery'] }
    ]
  },
  'inventory-management': {
    title: 'Inventory Management',
    category: 'business-software',
    price: '₹49,999',
    desc: 'An intelligent inventory tracking system to manage raw materials, work-in-progress (WIP), and finished goods across multiple warehouses with barcode/RFID support.',
    features: ['Real-time Stock Tracking', 'Barcode & RFID Integration', 'Automated Reorder Alerts', 'Multi-Warehouse Support', 'Batch & Expiry Tracking'],
    plans: [
      { name: 'Standard IMS', price: '₹49,999', desc: 'Single warehouse tracking', features: ['Stock Tracking', 'Reorder Alerts', 'Basic Reporting', '4 Weeks Delivery'] },
      { name: 'Advanced IMS', price: '₹89,999', desc: 'Multi-location with Barcode', features: ['Barcode Integration', 'Multi-warehouse', 'Mobile App for Scanners', '8 Weeks Delivery'] }
    ]
  },
  'production-planning-system': {
    title: 'Production Planning System',
    category: 'business-software',
    price: '₹59,999',
    desc: 'A dynamic scheduling and planning tool that aligns your production capacity with customer demand, minimizing downtime and maximizing throughput.',
    features: ['Visual Gantt Chart Scheduling', 'Machine & Labor Capacity Planning', 'Material Requirement Planning (MRP)', 'Downtime Tracking', 'Job Routing & Sequencing'],
    plans: [
      { name: 'Basic Planner', price: '₹59,999', desc: 'Simple job scheduling', features: ['Visual Scheduling', 'Job Routing', 'Shift Management', '6 Weeks Delivery'] },
      { name: 'Smart MRP', price: '₹1,19,999', desc: 'Advanced material & capacity planning', features: ['Full MRP', 'Capacity Planning', 'Downtime Tracking', '10 Weeks Delivery'] }
    ]
  },
  'supply-chain-management': {
    title: 'Supply Chain Management',
    category: 'business-software',
    price: '₹69,999',
    desc: 'A robust SCM platform to track the flow of goods, information, and finances from suppliers to manufacturers to wholesalers to consumers.',
    features: ['Supplier Portal', 'Logistics Tracking', 'Demand Forecasting', 'Freight & Shipping Management', 'Purchase Order Automation'],
    plans: [
      { name: 'SCM Core', price: '₹69,999', desc: 'Supplier & PO management', features: ['Supplier Portal', 'PO Automation', 'Basic Tracking', '6 Weeks Delivery'] },
      { name: 'SCM Enterprise', price: '₹1,39,999', desc: 'Full supply chain visibility', features: ['Demand Forecasting', 'Logistics Integration', 'Advanced Analytics', '12 Weeks Delivery'] }
    ]
  },
  'warehouse-management': {
    title: 'Warehouse Management',
    category: 'business-software',
    price: '₹54,999',
    desc: 'A complete Warehouse Management System (WMS) to optimize storage space, streamline picking and packing, and speed up dispatch operations.',
    features: ['3D Warehouse Mapping', 'Put-away Optimization', 'Pick & Pack Workflows', 'Cross-docking Support', 'Shipping Label Generation'],
    plans: [
      { name: 'Basic WMS', price: '₹54,999', desc: 'Simple pick/pack/ship', features: ['Storage Location Mapping', 'Pick Lists', 'Label Generation', '5 Weeks Delivery'] },
      { name: 'Smart WMS', price: '₹99,999', desc: 'Advanced routing & courier sync', features: ['Optimized Pick Routing', 'Courier API Integration', 'Returns Management', '9 Weeks Delivery'] }
    ]
  },
  'vendor-management': {
    title: 'Vendor Management',
    category: 'business-software',
    price: '₹39,999',
    desc: 'A centralized portal to onboard vendors, manage contracts, evaluate supplier performance, and process payments securely.',
    features: ['Digital Vendor Onboarding', 'Contract Lifecycle Management', 'Supplier Performance Scorecards', 'RFP / Quotation Bidding', 'Invoice Processing'],
    plans: [
      { name: 'Vendor Portal', price: '₹39,999', desc: 'Onboarding & Invoicing', features: ['Digital Onboarding', 'Invoice Uploads', 'Basic Directory', '4 Weeks Delivery'] },
      { name: 'Procurement Suite', price: '₹79,999', desc: 'Bidding & Scorecards', features: ['RFP/Bidding Engine', 'Performance Scorecards', 'Contract Management', '8 Weeks Delivery'] }
    ]
  },
  'crm-for-manufacturing': {
    title: 'CRM for Manufacturing',
    category: 'business-software',
    price: '₹44,999',
    desc: 'A specialized CRM tailored for the long sales cycles, complex quoting, and distributor relationship management typical in manufacturing.',
    features: ['B2B Account Management', 'Complex Quote & Proposal Generator', 'Sales Pipeline Tracking', 'Distributor Portal', 'Sample Request Tracking'],
    plans: [
      { name: 'Sales Tracker', price: '₹44,999', desc: 'Manage direct B2B sales', features: ['Account Management', 'Pipeline Tracking', 'Basic Quoting', '5 Weeks Delivery'] },
      { name: 'Channel CRM', price: '₹84,999', desc: 'Direct sales + Distributor portal', features: ['Distributor Portal', 'Complex Quoting', 'Sales Forecasting', '9 Weeks Delivery'] }
    ]
  },
  'quality-control-software': {
    title: 'Quality Control Software',
    category: 'business-software',
    price: '₹49,999',
    desc: 'A digital QMS (Quality Management System) to standardize inspections, track defects, manage non-conformances (NCR), and ensure ISO compliance.',
    features: ['Digital Inspection Checklists', 'Defect Tracking & Logging', 'CAPA (Corrective & Preventive Action)', 'SPC (Statistical Process Control) Charts', 'Document Control & SOPs'],
    plans: [
      { name: 'Digital QA', price: '₹49,999', desc: 'Digital checklists & tracking', features: ['Digital Checklists', 'Defect Logging', 'Basic Reports', '5 Weeks Delivery'] },
      { name: 'Full QMS', price: '₹94,999', desc: 'Complete compliance suite', features: ['CAPA Workflows', 'SPC Charts', 'Document Control', '9 Weeks Delivery'] }
    ]
  },
  'factory-automation-dashboard': {
    title: 'Factory Automation Dashboard',
    category: 'business-software',
    price: '₹64,999',
    desc: 'An Industrial IoT (IIoT) dashboard that connects to your PLC/SCADA systems to provide real-time visibility into machine health, production rates, and OEE.',
    features: ['Real-time Machine Monitoring', 'OEE (Overall Equipment Effectiveness) Calculation', 'Predictive Maintenance Alerts', 'Energy Consumption Tracking', 'Custom KPI Dashboards'],
    plans: [
      { name: 'Basic Monitoring', price: '₹64,999', desc: 'Machine status & counts', features: ['Real-time Status', 'Production Counts', 'Basic Dashboard', '6 Weeks Delivery'] },
      { name: 'Smart Factory', price: '₹1,24,999', desc: 'OEE & Predictive analytics', features: ['OEE Analytics', 'Predictive Alerts', 'Energy Tracking', '10 Weeks Delivery'] }
    ]
  },
  'industrial-website-development': {
    title: 'Industrial Website Development',
    category: 'websites',
    price: '₹29,999',
    desc: 'Professional, technical websites designed for manufacturing companies to showcase capabilities, product catalogs, and certifications to global buyers.',
    features: ['Dynamic Product Catalogs', 'Technical Spec Sheet Downloads', 'Facility & Equipment Showcase', 'Request for Quote (RFQ) Engine', 'Certification Display (ISO, etc.)'],
    plans: [
      { name: 'Corporate Profile', price: '₹29,999', desc: 'Professional capability showcase', features: ['Up to 15 Pages', 'Facility Showcase', 'Basic Contact Forms', '4 Weeks Delivery'] },
      { name: 'Digital Catalog', price: '₹59,999', desc: 'Full product & RFQ site', features: ['Dynamic Product Catalog', 'RFQ Engine', 'Spec Downloads', 'SEO Setup', '8 Weeks Delivery'] }
    ]
  },
  'ngo-website-development': {
    title: 'NGO Website Development',
    category: 'websites',
    price: '₹19,999',
    desc: 'A professionally designed, high-impact website for your NGO or non-profit that communicates your mission, builds trust with donors, and drives conversions.',
    features: ['Impact Storytelling Pages', 'Online Donation Integration', 'Project & Program Showcases', 'Beneficiary Stories & Galleries', 'Volunteer Sign-up Forms'],
    plans: [
      { name: 'Impact Starter', price: '₹19,999', desc: 'Essential NGO online presence', features: ['Up to 10 Pages', 'Donation Button', 'Volunteer Form', 'Mobile Responsive', '2 Weeks Delivery'] },
      { name: 'Mission Pro', price: '₹39,999', desc: 'Full-featured NGO website', features: ['Up to 25 Pages', 'Donation Gateway', 'Project Showcases', 'Blog & News', '4 Weeks Delivery'] }
    ]
  },
  'donation-management-system': {
    title: 'Donation Management System',
    category: 'business-software',
    price: '₹34,999',
    desc: 'A comprehensive digital system to accept online donations, manage donor records, generate tax receipts (80G), and analyze fundraising performance.',
    features: ['Online Payment Gateway (UPI, Card, Net Banking)', 'Automated 80G Tax Receipt Generation', 'Donor Database & History', 'Recurring Donation Setup', 'Campaign-wise Donation Tracking'],
    plans: [
      { name: 'Standard DMS', price: '₹34,999', desc: 'Core donation tracking', features: ['Online Payment Gateway', '80G Receipt Generation', 'Donor Database', 'Email Alerts', '4 Weeks Delivery'] },
      { name: 'Advanced DMS', price: '₹69,999', desc: 'Full fundraising intelligence', features: ['Recurring Donations', 'Campaign Tracking', 'Financial Reports', 'WhatsApp Integration', '7 Weeks Delivery'] }
    ]
  },
  'volunteer-management': {
    title: 'Volunteer Management',
    category: 'business-software',
    price: '₹29,999',
    desc: 'A dedicated platform to manage your volunteer lifecycle — from online applications and onboarding to scheduling, hour tracking, and appreciation.',
    features: ['Online Volunteer Application Forms', 'Skills & Interest Matching', 'Event & Shift Scheduling', 'Volunteer Hour Tracking', 'Digital Certificate Generation'],
    plans: [
      { name: 'Volunteer Hub', price: '₹29,999', desc: 'Core volunteer coordination', features: ['Application Forms', 'Scheduling', 'Hour Tracking', 'Email Alerts', '4 Weeks Delivery'] },
      { name: 'Volunteer Pro', price: '₹54,999', desc: 'Advanced management with App', features: ['Mobile App', 'Digital Certificates', 'Skills Matching', 'Analytics', '7 Weeks Delivery'] }
    ]
  },
  'event-management-platform': {
    title: 'Event Management Platform',
    category: 'business-software',
    price: '₹24,999',
    desc: 'A complete digital platform to plan, promote, and manage NGO events — from gala dinners and marathon runs to webinars and community drives.',
    features: ['Event Creation & Landing Pages', 'Online Ticket & RSVP Management', 'Donation Goal Thermometer', 'Sponsor Management', 'QR Code Check-in System'],
    plans: [
      { name: 'Event Starter', price: '₹24,999', desc: 'Single event management', features: ['Event Landing Page', 'RSVP Management', 'QR Check-in', 'Email Blast', '2 Weeks Delivery'] },
      { name: 'Event Suite', price: '₹49,999', desc: 'Multi-event management platform', features: ['Multi-event Dashboard', 'Ticketing & Donations', 'Sponsor Portal', 'Analytics', '5 Weeks Delivery'] }
    ]
  },
  'membership-management': {
    title: 'Membership Management',
    category: 'business-software',
    price: '₹24,999',
    desc: 'A structured membership system to define tiers, collect annual fees, provide member benefits, and build a loyal community around your cause.',
    features: ['Tiered Membership Plans', 'Online Membership Fee Collection', 'Member-only Content & Resources', 'Automatic Renewal Reminders', 'Digital Membership Cards'],
    plans: [
      { name: 'Basic Membership', price: '₹24,999', desc: 'Simple membership portal', features: ['2 Membership Tiers', 'Fee Collection', 'Member Database', 'Email Reminders', '3 Weeks Delivery'] },
      { name: 'Community Pro', price: '₹49,999', desc: 'Full membership community', features: ['Unlimited Tiers', 'Digital Cards', 'Member-only Content', 'Voting & Polls', '6 Weeks Delivery'] }
    ]
  },
  'fundraising-portal': {
    title: 'Fundraising Portal',
    category: 'business-software',
    price: '₹39,999',
    desc: 'A multi-campaign fundraising portal where donors can browse active causes, make donations, track impact, and share campaigns on social media.',
    features: ['Multi-campaign Listing', 'Individual Campaign Pages with Goal Tracker', 'Peer-to-Peer Fundraising', 'Social Sharing Integration', 'Donor Wall of Fame'],
    plans: [
      { name: 'Campaign Portal', price: '₹39,999', desc: 'Up to 5 active campaigns', features: ['5 Campaign Pages', 'Goal Tracker', 'Donation Gateway', 'Social Sharing', '4 Weeks Delivery'] },
      { name: 'Impact Platform', price: '₹74,999', desc: 'Full peer-to-peer fundraising', features: ['Unlimited Campaigns', 'Peer-to-Peer Tools', 'Donor Wall', 'Advanced Analytics', '8 Weeks Delivery'] }
    ]
  },
  'campaign-management': {
    title: 'Campaign Management',
    category: 'business-software',
    price: '₹34,999',
    desc: 'A digital command center to plan and manage awareness campaigns — coordinating messaging, channels, volunteers, and outcomes from a single dashboard.',
    features: ['Campaign Planning & Calendar', 'Multi-channel Message Scheduling (Email, WhatsApp, Social)', 'Petition & Pledge Collection', 'Supporter Database Segmentation', 'A/B Testing for Messaging'],
    plans: [
      { name: 'Campaign Hub', price: '₹34,999', desc: 'Manage one campaign at a time', features: ['Campaign Dashboard', 'Email & WhatsApp Blasts', 'Petition Forms', 'Basic Analytics', '4 Weeks Delivery'] },
      { name: 'Multi-Campaign Suite', price: '₹64,999', desc: 'Run multiple campaigns simultaneously', features: ['Unlimited Campaigns', 'Supporter Segmentation', 'A/B Testing', 'Full Analytics', '7 Weeks Delivery'] }
    ]
  },
  'ngo-mobile-app': {
    title: 'NGO Mobile App',
    category: 'mobile-apps',
    price: '₹69,999',
    desc: 'A branded iOS and Android mobile application for your NGO to engage donors, update supporters, register volunteers, and process donations on the go.',
    features: ['Branded iOS & Android App', 'In-App Donation with UPI/Card', 'Push Notifications for Campaigns & Updates', 'Project Progress Updates', 'Volunteer Registration & Scheduling'],
    plans: [
      { name: 'Supporter App', price: '₹69,999', desc: 'Engage donors & supporters', features: ['iOS & Android App', 'Push Notifications', 'In-App Donations', 'News Feed', '8 Weeks Delivery'] },
      { name: 'Full NGO App', price: '₹1,19,999', desc: 'Complete NGO mobile platform', features: ['Volunteer Management', 'Event RSVPs', 'Campaign Updates', 'Offline Content', '12 Weeks Delivery'] }
    ]
  },
  'crm-for-ngos': {
    title: 'CRM for NGOs',
    category: 'business-software',
    price: '₹29,999',
    desc: 'A purpose-built CRM for non-profits to consolidate donor data, track interactions, segment audiences, and run targeted communications to build lasting relationships.',
    features: ['360° Donor Profiles', 'Donation History & RFM Analysis', 'Volunteer & Partner Tracking', 'Automated Follow-up Sequences', 'Grant Application Tracking'],
    plans: [
      { name: 'NGO CRM Starter', price: '₹29,999', desc: 'Core donor management', features: ['Donor Profiles', 'Donation History', 'Email Campaigns', 'Basic Reports', '4 Weeks Delivery'] },
      { name: 'NGO CRM Pro', price: '₹59,999', desc: 'Advanced relationship intelligence', features: ['RFM Analysis', 'Automated Workflows', 'Grant Tracking', 'Advanced Dashboards', '7 Weeks Delivery'] }
    ]
  },
  'digital-marketing-for-ngos': {
    title: 'Digital Marketing for NGOs',
    category: 'digital-marketing',
    price: '₹14,999/mo',
    desc: 'Specialized digital marketing services for non-profits, including Google Ad Grants management, social media campaigns, SEO for NGO websites, and email marketing.',
    features: ['Google Ad Grants Management ($10,000/mo)', 'Meta Ads for Cause Awareness & Donations', 'SEO for NGO Websites', 'Social Media Management', 'Email Campaign Automation'],
    plans: [
      { name: 'NGO Growth', price: '₹14,999/mo', desc: 'Awareness & social growth', features: ['Social Media Mgt', 'Google Grants Setup', 'Basic SEO', '10 Posts/mo', 'Monthly Report'] },
      { name: 'NGO Impact', price: '₹29,999/mo', desc: 'Full-funnel digital strategy', features: ['Google Grants Mgt', 'Meta Donation Ads', 'Email Campaigns', 'Advanced SEO', 'Bi-weekly Reports'] }
    ]
  },
  'hospital-website-development': {
    title: "Hospital Website Development",
    category: "business-software",
    price: "₹14,999",
    desc: "A modern hospital website is your digital front desk. We build fast, secure, mobile-first websites that showcase your specialties, doctors, facilities, and allow patients to book appointments online.",
    features: ["Doctor Profile Pages","Online Appointment Booking","Department & Specialty Listings","Patient Testimonials","Emergency Contact Banner","Health Blog/News Section","Insurance Partner Listings","HIPAA-Compliant Contact Forms"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Perfect for small clinics","features":["5 Pages","Doctor Profiles","Appointment Form","Mobile Responsive","1 Week Delivery","1 Month Support"]},{"name":"Gold Plan","price":"₹29,999","desc":"For multi-specialty hospitals","features":["15 Pages","Online Booking System","Patient Portal","Blog/News CMS","SEO Optimization","2 Weeks Delivery","3 Months Support"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Full custom hospital portal","features":["Unlimited Pages","Custom Patient Dashboard","Appointment + Billing Integration","Telemedicine Module","Advanced Analytics","4 Weeks Delivery","6 Months Support"]}]
  },
  'appointment-booking-system': {
    title: "Appointment Booking System",
    category: "business-software",
    price: "₹19,999",
    desc: "Our appointment booking systems eliminate manual scheduling chaos. Patients book online 24/7, doctors get organized calendars, and you reduce no-shows with automated reminders.",
    features: ["Real-time Calendar Availability","SMS & Email Reminders","Multi-doctor Scheduling","Patient Self-rescheduling","Video Consultation Links","Waiting List Management","Insurance Verification","Appointment History"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Single-doctor scheduling","features":["1 Doctor Profile","Online Booking Form","Email Confirmations","Basic Calendar","1 Week Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Multi-doctor clinic system","features":["Up to 10 Doctors","SMS + Email Reminders","Patient Portal","Reporting Dashboard","Rescheduling Self-service","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Hospital-grade booking suite","features":["Unlimited Doctors","Video Consultation Integration","Insurance Module","Advanced Analytics","API Integration","4 Weeks Delivery"]}]
  },
  'patient-management-system': {
    title: "Patient Management System",
    category: "business-software",
    price: "₹24,999",
    desc: "A complete digital system to manage patient registrations, medical histories, diagnoses, prescriptions, and follow-ups — replacing paper files with an organized, searchable digital database.",
    features: ["Patient Registration & Profiles","Medical History & Diagnosis Records","Prescription Management","Lab Report Uploads","Follow-up Scheduling","Ward/Bed Management","Discharge Summary Generator","Role-based Staff Access"],
    plans: [{"name":"Silver Plan","price":"₹24,999","desc":"Small clinic system","features":["Up to 1,000 Patient Records","Basic Medical History","Prescription Module","Search & Filter","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Hospital-grade PMS","features":["Unlimited Records","Lab Report Management","Ward/Bed Tracking","Multi-staff Roles","Advanced Reports","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise hospital suite","features":["Full EHR System","HL7/FHIR Integration","Billing Module","Insurance Claims","Analytics Dashboard","8 Weeks Delivery"]}]
  },
  'medical-billing-software': {
    title: "Medical Billing Software",
    category: "business-software",
    price: "₹19,999",
    desc: "Automate medical billing, generate GST-compliant invoices, track payments, and manage insurance claims — all from one clean dashboard. Reduce billing errors and speed up cash flow.",
    features: ["GST Invoice Generation","Insurance Claim Management","OPD/IPD Billing","Payment Tracking","Outstanding Balance Alerts","Daily/Monthly Reports","Discount & Concession Module","Multi-payment Gateway Support"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Basic billing system","features":["Invoice Generation","Payment Tracking","Basic Reports","OPD Billing","1 Week Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full medical billing suite","features":["OPD + IPD Billing","Insurance Claims Module","Outstanding Alerts","Detailed Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise billing platform","features":["Multi-branch Billing","Third-party HMS Integration","Custom Reports","Automated Insurance Claims","Dedicated Support","5 Weeks Delivery"]}]
  },
  'seo-for-hospitals': {
    title: "SEO for Hospitals",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "When patients search for \"best hospital near me\" or specific treatments, we ensure your hospital appears at the top. Our healthcare SEO strategy drives organic traffic and qualified patient leads.",
    features: ["Local SEO & Google Maps Ranking","Medical Keyword Research","On-page Optimization","Technical SEO Audit & Fixes","Healthcare Backlink Building","Google Business Profile Management","Content Writing (Medical Blogs)","Competitor Analysis"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Local clinic visibility","features":["15 Keywords","On-page Optimization","GMB Management","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Hospital authority building","features":["35 Keywords","Technical SEO","Medical Blog Writing (4/mo)","High-DA Backlinks (8/mo)","Competitor Tracking","3-month minimum"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Dominant market leader SEO","features":["60+ Keywords","Daily Monitoring","Medical Blogs (8/mo)","Backlinks (20/mo)","Weekly Reports","No Contract"]}]
  },
  'digital-marketing-for-clinics': {
    title: "Digital Marketing for Clinics",
    category: "business-software",
    price: "₹12,999/mo",
    desc: "Attract, engage, and retain patients with targeted digital marketing — Facebook/Instagram ads, Google Ads, WhatsApp campaigns, and reputation management — all handled by our healthcare marketing team.",
    features: ["Facebook & Instagram Ad Campaigns","Google Search Ads (PPC)","WhatsApp Broadcast Campaigns","Review & Reputation Management","Patient Retargeting Ads","Landing Page Design","Lead Tracking Dashboard","Monthly Performance Reports"],
    plans: [{"name":"Silver Plan","price":"₹12,999/mo","desc":"Clinic brand awareness","features":["Facebook + Instagram Ads","12 Creative Posts/month","Basic Lead Tracking","Monthly Report","Cancel anytime"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Growth-focused campaign","features":["FB + Instagram + Google Ads","20 Posts + 4 Video Reels","WhatsApp Campaign","Reputation Management","Bi-weekly Reports","Cancel anytime"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Full digital domination","features":["All Platforms","Daily Posts","Google + Meta + YouTube Ads","Influencer Collaboration","Weekly Strategy Calls","Cancel anytime"]}]
  },
  'school-website-development': {
    title: "School Website Development",
    category: "business-software",
    price: "₹12,999",
    desc: "Create a powerful digital presence for your educational institution. Showcase courses, faculty, events, achievements, and allow online admission enquiries with a professionally designed school website.",
    features: ["Course & Program Listings","Faculty Profiles","Online Admission Enquiry","Events Calendar","Gallery & Virtual Tour","Notice Board / Announcements","Alumni Section","Transport & Hostel Info"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"Small school/coaching","features":["8 Pages","Course Listings","Enquiry Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"School/college portal","features":["20 Pages","Faculty Profiles","Events Calendar","Gallery","Announcement Board","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Full institution portal","features":["Unlimited Pages","Alumni Network","Virtual Tour","CMS Dashboard","Multi-language","4 Weeks Delivery"]}]
  },
  'student-management-system': {
    title: "Student Management System",
    category: "business-software",
    price: "₹19,999",
    desc: "Manage student registrations, academic records, attendance, results, and communications — all in one central system. Replace manual paperwork with an efficient, searchable digital platform.",
    features: ["Student Enrollment & Profiles","Class & Section Management","Academic Performance Tracking","Parent Communication Portal","Document Management","ID Card Generation","Transfer Certificate Management","Report Card Generation"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Small school (up to 500 students)","features":["Student Profiles","Class Management","Attendance Module","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Medium school (up to 2000 students)","features":["Full Student Management","Parent Portal","Result Management","ID Card Generator","Detailed Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹74,999","desc":"Large institution suite","features":["Unlimited Students","Multi-campus Support","Transfer Certificates","Govt. Report Formats","API Integration","6 Weeks Delivery"]}]
  },
  'online-examination-portal': {
    title: "Online Examination Portal",
    category: "business-software",
    price: "₹24,999",
    desc: "Replace physical exam papers with a powerful online examination system. Create MCQ and descriptive tests, set time limits, prevent cheating, and auto-generate results — saving enormous time and costs.",
    features: ["MCQ & Descriptive Question Banks","Timed Exam Sessions","Anti-Cheating (Tab Switch Detection)","Auto Result Calculation","Randomized Question Order","Instant Score Reports","Multiple Attempt Configurations","Admin Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹24,999","desc":"Small batch exams","features":["Up to 200 Students","MCQ Exams","Auto Scoring","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹44,999","desc":"School/college platform","features":["Up to 2000 Students","MCQ + Descriptive","Anti-cheat Controls","Detailed Analytics","Question Bank CMS","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹84,999","desc":"Institution-wide platform","features":["Unlimited Students","All Exam Types","Live Proctoring","Custom Reports","Multi-tenant Support","6 Weeks Delivery"]}]
  },
  'fee-management-system': {
    title: "Fee Management System",
    category: "business-software",
    price: "₹14,999",
    desc: "Automate fee collection with online payment options, automatic reminders for due fees, digital receipts, and detailed financial reports — eliminating manual fee collection chaos.",
    features: ["Online Fee Payment (UPI/Card)","Fee Structure Configuration","Automatic Due Date Reminders","Digital Receipt Generation","Installment Plan Support","Defaulter Reports","Scholarship & Concession Module","Financial Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic fee collection","features":["Online Payment","Digital Receipts","Basic Reports","Due Reminders","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Complete fee management","features":["Installment Plans","Scholarship Module","Defaulter Reports","SMS Reminders","Financial Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-campus fee platform","features":["Multi-branch Fees","ERP Integration","Custom Report Builder","WhatsApp Reminders","Audit Logs","4 Weeks Delivery"]}]
  },
  'education-marketing-services': {
    title: "Education Marketing Services",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "Get more admissions with data-driven digital marketing. We run Facebook, Instagram, and Google ads targeting parents in your area, manage your social media, and build your school's online reputation.",
    features: ["Facebook & Instagram Ads","Google Ads for Admissions","Social Media Management","Google Business Profile","Video Reel Production","Review Management","Landing Page Design","Lead Tracking Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Brand awareness","features":["Social Media Management","12 Posts/month","GMB Optimization","Basic Ad Campaign","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active admission leads","features":["FB + Google Ads","20 Posts + 4 Reels","Lead Tracking","WhatsApp Campaign","Bi-weekly Reporting"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full admission funnel","features":["All Platforms","Daily Posts","YouTube Ads","Video Production","Weekly Strategy Calls"]}]
  },
  'digital-marketing-services': {
    title: "Digital Marketing for Real Estate",
    category: "business-software",
    price: "₹14,999/mo",
    desc: "Run targeted Facebook, Instagram, and Google campaigns to reach buyers actively searching for properties in your area — with lead tracking, retargeting, and regular creative campaigns.",
    features: ["Facebook & Instagram Lead Ads","Google Search & Display Ads","Video Ad Production","Retargeting Campaigns","Landing Page Design","WhatsApp Lead Campaigns","Lead CRM Integration","ROI Reporting Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹14,999/mo","desc":"Brand awareness ads","features":["FB + Instagram Ads","Landing Page","Basic Lead Tracking","12 Creatives/month","Monthly Report"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active lead generation","features":["FB + Instagram + Google","20 Creatives + 4 Reels","Retargeting","CRM Integration","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-funnel campaign","features":["All Channels","Video Production","YouTube Ads","WhatsApp Campaign","Weekly Strategy Calls"]}]
  },
  'ecommerce-website-development': {
    title: "E-commerce Website Development",
    category: "business-software",
    price: "₹14,999",
    desc: "Launch a fully-featured e-commerce store with product catalog, secure checkout, payment gateway, inventory management, and admin dashboard — optimized for Indian buyers.",
    features: ["Product Catalog Management","Secure Checkout","Multiple Payment Gateways","Order Management","Inventory Tracking","Customer Accounts","Discount & Coupon System","GST Invoice Generation"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic store (up to 50 products)","features":["Product Catalog","Cart & Checkout","Payment Gateway","Mobile Responsive","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full e-commerce store","features":["Unlimited Products","GST Invoicing","Coupon System","Admin Dashboard","Order Management","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-vendor marketplace","features":["Vendor Dashboard","Advanced Analytics","Return Management","Loyalty Points","Custom App","6 Weeks Delivery"]}]
  },
  'inventory-management-system': {
    title: "Inventory Management System",
    category: "business-software",
    price: "₹14,999",
    desc: "Manage product stock levels across multiple warehouses, get low-stock alerts, track purchase orders from suppliers, and sync inventory with your online store automatically.",
    features: ["Real-time Stock Tracking","Multi-warehouse Management","Purchase Order Management","Low Stock Alerts","Barcode / QR Scanning","Supplier Management","Stock Valuation Reports","E-commerce Sync"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic stock management","features":["Single Warehouse","Stock Tracking","Low Stock Alerts","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full inventory system","features":["Multi-warehouse","Purchase Orders","Barcode Scanning","E-commerce Sync","Detailed Reports","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise IMS","features":["ERP Integration","Supplier Portal","AI Demand Forecasting","Custom Analytics","5 Weeks Delivery"]}]
  },
  'order-tracking-system': {
    title: "Order Tracking System",
    category: "business-software",
    price: "₹9,999",
    desc: "Integrate with Shiprocket, Delhivery, BlueDart, and other logistics providers to give customers a branded real-time tracking experience — reducing support calls significantly.",
    features: ["Multi-carrier Tracking Integration","Branded Tracking Page","SMS & Email Status Updates","Delivery ETA Display","Return & Refund Portal","Failed Delivery Management","Admin Shipment Dashboard","NDR (Non-Delivery Report) Handling"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic tracking","features":["1 Carrier","Tracking Page","Email Updates","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Multi-carrier tracking","features":["3 Carriers","SMS + Email Updates","Return Portal","NDR Management","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Enterprise logistics suite","features":["Unlimited Carriers","Custom Branded Portal","Analytics Dashboard","Smart Routing","3 Weeks Delivery"]}]
  },
  'social-media-marketing-ecommerce': {
    title: "Social Media Marketing for E-commerce",
    category: "business-software",
    price: "₹12,999/mo",
    desc: "Grow your online store with high-converting social media campaigns — product showcases, influencer collaborations, Instagram shopping, retargeting ads, and seasonal sale campaigns.",
    features: ["Instagram & Facebook Product Ads","Instagram Shopping Setup","Influencer Collaboration","Retargeting Campaigns","Seasonal Sale Campaigns","Video Reel Production","UGC Strategy","ROI Tracking Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹12,999/mo","desc":"Brand building","features":["FB + Instagram Management","15 Posts/month","Product Showcase Ads","Basic Retargeting","Monthly Report"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Sales-focused campaigns","features":["Instagram Shopping","20 Posts + 6 Reels","Influencer (2/month)","Retargeting Ads","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Full e-commerce growth","features":["All Platforms","Daily Content","Influencer (5/month)","YouTube Ads","Weekly Calls"]}]
  },
  'restaurant-website-development': {
    title: "Restaurant Website Development",
    category: "business-software",
    price: "₹9,999",
    desc: "Create an appetizing online presence with a stunning restaurant website featuring your menu, photo gallery, table reservations, online ordering, and Google Maps integration.",
    features: ["Digital Menu with Photos","Online Table Reservation","Photo Gallery","Online Food Ordering","Google Maps Integration","Chef & Team Profiles","Reviews & Testimonials","Social Media Feed"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic restaurant site","features":["6 Pages","Digital Menu","Reservation Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full restaurant portal","features":["Unlimited Pages","Online Ordering","Table Reservation System","Blog/Events","CMS Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹39,999","desc":"Multi-outlet restaurant","features":["Multi-branch Support","Loyalty Program Integration","Custom Design","Analytics","4 Weeks Delivery"]}]
  },
  'online-food-ordering-system': {
    title: "Online Food Ordering System",
    category: "business-software",
    price: "₹14,999",
    desc: "Get your own food ordering platform — free from Zomato and Swiggy commissions. Customers order directly, you keep 100% revenue. Includes payment, order tracking, and kitchen display.",
    features: ["Custom Online Menu","Cart & Checkout","Payment Gateway Integration","Order Confirmation via SMS","Kitchen Display System","Delivery Zone Setup","Order History","Admin Order Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic ordering system","features":["Online Menu","Cart + Checkout","Payment Gateway","Email Confirmation","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full ordering platform","features":["Kitchen Display System","SMS Confirmation","Order Dashboard","Delivery Zones","Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-branch ordering system","features":["Multiple Outlets","Real-time Order Tracking","Driver Management","Loyalty Integration","5 Weeks Delivery"]}]
  },
  'food-delivery-app': {
    title: "Food Delivery App",
    category: "business-software",
    price: "₹74,999",
    desc: "Build your own food delivery app for Android and iOS with real-time order tracking, driver management, push notifications, and multi-restaurant support — complete commission-free delivery.",
    features: ["Customer App (Android + iOS)","Restaurant Partner Dashboard","Driver/Delivery Boy App","Real-time GPS Tracking","Push Notifications","Payment Gateway","Rating & Review System","Analytics Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹74,999","desc":"Single restaurant delivery app","features":["Customer App (Android)","Driver App","GPS Tracking","Basic Analytics","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,29,999","desc":"Multi-restaurant delivery platform","features":["Customer App (Android + iOS)","Restaurant Dashboard","Driver App","Real-time Tracking","Analytics","10 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,99,999","desc":"Full delivery marketplace","features":["All Three Apps","Multi-city Support","Surge Pricing","AI Recommendations","Full Analytics Suite","14 Weeks Delivery"]}]
  },
  'pos-system': {
    title: "Restaurant POS System",
    category: "business-software",
    price: "₹14,999",
    desc: "Replace traditional billing machines with a cloud-based POS that handles table orders, kitchen tickets, inventory, and daily reports — accessible from tablet or PC.",
    features: ["Touch-based Order Taking","Kitchen Display/Printer","Split Bill & Multiple Payments","Menu & Price Management","Daily Sales Reports","Inventory Integration","Staff Login & Role Control","GST Invoice Generation"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic restaurant POS","features":["Touch POS Interface","Order Management","GST Billing","Basic Reports","Single Outlet","1 Week Setup"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full restaurant POS","features":["Kitchen Display System","Inventory Integration","Multi-payment","Staff Roles","Analytics","2 Weeks Setup"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-outlet POS chain","features":["Multi-branch","Central Dashboard","Franchise Reports","Custom Integrations","4 Weeks Setup"]}]
  },
  'seo-for-restaurants': {
    title: "SEO for Restaurants",
    category: "business-software",
    price: "₹7,999/mo",
    desc: "When hungry diners search for restaurants in your area, your restaurant should appear first. Our local restaurant SEO and Google Maps optimization drives hungry customers to your door.",
    features: ["Google Maps Ranking","Local Restaurant SEO","Menu Page SEO Optimization","Review Generation Strategy","Google Business Profile Management","Food Keyword Targeting","Local Backlink Building","Monthly Performance Reports"],
    plans: [{"name":"Silver Plan","price":"₹7,999/mo","desc":"Local restaurant visibility","features":["GMB Optimization","10 Keywords","Monthly Report","Review Strategy","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Restaurant SEO growth","features":["25 Keywords","Menu SEO","Food Blogs (2/mo)","Backlinks (5/mo)","Local Citations","3-month minimum"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Dominant local presence","features":["50 Keywords","4 Blogs/mo","Backlinks (15/mo)","Schema Markup","Weekly Reports","No Contract"]}]
  },
  'instagram-marketing-restaurant': {
    title: "Social Media Marketing for Restaurants",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "Grow your restaurant's social following, showcase your dishes with mouth-watering content, run targeted local ad campaigns, and turn followers into diners.",
    features: ["Instagram & Facebook Management","Food Photography Direction","Video Reel Production","Targeted Local Ads","Story Campaigns","Influencer Food Review Collaborations","Contest & Giveaway Campaigns","Analytics & Growth Reports"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Brand awareness","features":["Instagram + Facebook","15 Posts/month","Story Updates","Basic Ads","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Growth + leads","features":["20 Posts + 6 Reels","Targeted Local Ads","Influencer (1/month)","Contest Campaign","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full social domination","features":["All Platforms","Daily Content","Influencer (3/month)","YouTube Shorts","Weekly Strategy Calls"]}]
  },
  'salon-website-development': {
    title: "Salon & Spa Website",
    category: "business-software",
    price: "₹8,999",
    desc: "A stunning salon website showcasing your services, team, gallery, pricing, and online booking — designed to attract premium clients and grow your brand online.",
    features: ["Service Menu with Pricing","Online Appointment Booking","Staff Portfolio Pages","Before/After Gallery","Gift Voucher Sales","Google Maps Integration","Client Testimonials","Social Media Feed"],
    plans: [{"name":"Silver Plan","price":"₹8,999","desc":"Basic salon website","features":["6 Pages","Service Menu","Booking Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹17,999","desc":"Full salon portal","features":["15 Pages","Online Appointment Booking","Team Profiles","Gift Voucher Sales","CMS Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹32,999","desc":"Premium spa brand website","features":["Custom Design","E-commerce Products","Loyalty Integration","Multi-branch","3 Weeks Delivery"]}]
  },
  'appointment-booking-salon': {
    title: "Salon Appointment Booking System",
    category: "business-software",
    price: "₹7,999",
    desc: "Let clients book appointments online 24/7, choose their preferred stylist, get reminders, and reschedule easily — while you manage your full schedule from a single dashboard.",
    features: ["Online Booking with Staff Selection","Real-time Slot Availability","SMS & WhatsApp Reminders","Cancellation & Rescheduling","Multi-service Booking","Walk-in + Online Combo","Waitlist Management","Daily Schedule Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹7,999","desc":"Basic booking","features":["Online Booking","Email Confirmations","Admin Calendar","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹14,999","desc":"Smart booking system","features":["Staff Selection","SMS + WhatsApp Reminders","Rescheduling","Waitlist","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹29,999","desc":"Multi-outlet booking","features":["Multi-branch","Customer History","Service Packages","Loyalty Points","3 Weeks Delivery"]}]
  },
  'loyalty-rewards-salon': {
    title: "Salon Loyalty & Rewards Program",
    category: "business-software",
    price: "₹7,999",
    desc: "Implement a digital loyalty program that rewards clients for every visit and purchase — creating a habit loop that brings them back and increases spend per visit.",
    features: ["Points per Visit/Service","Reward Redemption","Membership Tiers","Birthday & Anniversary Offers","WhatsApp Loyalty Notifications","Referral Bonus Program","Gift Voucher Integration","Client Retention Analytics"],
    plans: [{"name":"Silver Plan","price":"₹7,999","desc":"Basic rewards card","features":["Points System","Digital Card","Email Updates","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹14,999","desc":"Full loyalty program","features":["Membership Tiers","WhatsApp Alerts","Birthday Offers","Referral Program","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹29,999","desc":"Multi-outlet loyalty","features":["Multi-branch Points","CRM Integration","AI Personalization","Custom Branding","3 Weeks Delivery"]}]
  },
  'online-store-salon-products': {
    title: "Online Store for Salon Products",
    category: "business-software",
    price: "₹9,999",
    desc: "Launch an e-commerce store selling professional beauty products, salon-brand retail items, and gift vouchers — creating a revenue stream that works even when the salon is closed.",
    features: ["Product Catalog","Secure Checkout","Gift Voucher Sales","Subscription Box Option","Customer Accounts","Order Tracking","Inventory Management","Discount & Coupon System"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic product store","features":["Up to 30 Products","Cart + Checkout","Payment Gateway","Gift Vouchers","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full beauty e-commerce","features":["Unlimited Products","Subscription Boxes","Customer Accounts","Inventory Tracking","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Premium beauty marketplace","features":["Multi-brand Products","Loyalty Integration","AR Try-on (Optional)","Full Custom Design","4 Weeks Delivery"]}]
  },
  'seo-for-salons': {
    title: "SEO for Salons",
    category: "business-software",
    price: "₹6,999/mo",
    desc: "When people search for a haircut or facial in your city, your salon should be the first result. Our local salon SEO drives organic foot traffic and Google Maps visibility.",
    features: ["Google Maps Ranking","Local Salon SEO","Service Page Optimization","Review Generation","GMB Management","Local Backlinks","Beauty Blog Content","Competitor Analysis"],
    plans: [{"name":"Silver Plan","price":"₹6,999/mo","desc":"Local salon visibility","features":["GMB Management","10 Keywords","Review Strategy","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹12,999/mo","desc":"Salon SEO growth","features":["20 Keywords","Service Page SEO","Beauty Blogs (2/mo)","Backlinks (5/mo)","3-month minimum"]},{"name":"Platinum Plan","price":"₹22,999/mo","desc":"Dominant local presence","features":["40 Keywords","Blogs (4/mo)","Backlinks (12/mo)","Schema Markup","No Contract"]}]
  },
  'instagram-marketing-salon': {
    title: "Instagram Marketing for Salons",
    category: "business-software",
    price: "₹8,999/mo",
    desc: "Grow your salon on Instagram with stunning before/after content, trend-driven reels, beauty tips, and targeted local ad campaigns that turn followers into booked appointments.",
    features: ["Before/After Content Strategy","Instagram Reels Production","Targeted Local Ads","Influencer Collaborations","Story Campaigns & Polls","Beauty Trend Content","Hashtag Strategy","Booking Link in Bio Optimization"],
    plans: [{"name":"Silver Plan","price":"₹8,999/mo","desc":"Brand presence","features":["Instagram Management","15 Posts/month","Stories","Basic Ads","Monthly Report"]},{"name":"Gold Plan","price":"₹16,999/mo","desc":"Active growth","features":["20 Posts + 8 Reels","Targeted Local Ads","Influencer (1/month)","Booking Link Optimization","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹29,999/mo","desc":"Premium brand domination","features":["All Platforms","Daily Content","Influencer (3/month)","YouTube Shorts","Weekly Strategy Calls"]}]
  },
  'travel-agency-website': {
    title: "Travel Agency Website",
    category: "business-software",
    price: "₹12,999",
    desc: "Build a visually stunning travel website with tour packages, destination guides, booking forms, photo galleries, and customer testimonials — designed to inspire travel and drive direct bookings.",
    features: ["Tour Package Listings","Destination Photo Galleries","Online Enquiry & Booking Forms","Trip Itinerary Display","Customer Reviews","Blog/Travel Guides","WhatsApp Chat Integration","Mobile Responsive Design"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"Basic travel site","features":["10 Pages","Package Listings","Enquiry Forms","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full travel portal","features":["Unlimited Packages","Itinerary Pages","Blog/Guides CMS","Review System","WhatsApp Integration","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Premium travel marketplace","features":["Booking System","Multi-operator","Live Availability","Payment Integration","4 Weeks Delivery"]}]
  },
  'tour-booking-system': {
    title: "Tour Booking & Management System",
    category: "business-software",
    price: "₹19,999",
    desc: "Accept online tour bookings, manage availability, collect advance payments, generate booking confirmations, and track all your tours from a single dashboard.",
    features: ["Online Tour Booking","Real-time Seat Availability","Advance Payment Collection","Booking Confirmation PDF","Passenger List Management","Tour Calendar Dashboard","Cancellation & Refund Module","Agent/B2B Booking Portal"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Basic booking system","features":["Online Bookings","Payment Collection","Confirmation PDF","Basic Dashboard","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full tour management","features":["Availability Calendar","Agent Portal","Cancellation Module","Revenue Reports","Passenger Lists","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹74,999","desc":"Enterprise tour platform","features":["Multi-operator","Dynamic Pricing","OTA Integration","Full Analytics","6 Weeks Delivery"]}]
  },
  'hotel-booking-platform': {
    title: "Hotel Booking Platform",
    category: "business-software",
    price: "₹24,999",
    desc: "Build your own hotel booking engine to accept direct reservations, manage room inventory, process payments, and reduce dependence on OTAs like MakeMyTrip and Booking.com.",
    features: ["Room Type Listings with Photos","Real-time Availability Calendar","Direct Online Booking","Payment Integration","Booking Confirmation Emails","Check-in/Check-out Management","Rate Management","Guest Review System"],
    plans: [{"name":"Silver Plan","price":"₹24,999","desc":"Basic hotel booking","features":["Room Listings","Availability Calendar","Online Booking","Payment Gateway","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Full hotel booking engine","features":["Rate Management","Review System","Channel Manager Integration","Analytics Dashboard","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Multi-property PMS","features":["Multi-property","PMS Integration","Dynamic Pricing","Corporate Rates","6 Weeks Delivery"]}]
  },
  'itinerary-planner': {
    title: "Custom Itinerary Planner",
    category: "business-software",
    price: "₹14,999",
    desc: "Build a custom itinerary planning tool where travelers input their preferences and get a personalized day-by-day trip plan — with hotel suggestions, activity recommendations, and booking options.",
    features: ["Preference Input Form","AI-generated Itinerary","Day-by-Day Activity Schedule","Map Integration","Hotel & Activity Recommendations","PDF Itinerary Export","Budget Calculator","Shareable Trip Links"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Manual itinerary builder","features":["Template-based Builder","Day Plans","PDF Export","Map View","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Semi-automated planner","features":["Preference-based Generation","Hotel Recommendations","Budget Calculator","Shareable Links","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Full AI itinerary platform","features":["Full AI Generation","Real-time Availability","Dynamic Pricing","CRM Integration","5 Weeks Delivery"]}]
  },
  'crm-for-travel': {
    title: "Travel CRM & Lead Management",
    category: "business-software",
    price: "₹14,999",
    desc: "A dedicated CRM for travel agencies to track every lead, manage follow-ups, send automated tour recommendations, and convert more inquiries into confirmed bookings.",
    features: ["Lead Capture & Management","Follow-up Scheduler","Tour Recommendation Engine","WhatsApp & Email Integration","Booking Status Tracking","Agent Performance Dashboard","Revenue Reports","Client Travel History"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic lead tracker","features":["Lead Management","Follow-up Reminders","Basic Dashboard","Email Integration","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full travel CRM","features":["WhatsApp Integration","Booking Tracking","Agent Dashboard","Revenue Reports","Client History","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise travel CRM","features":["AI Follow-up Sequences","Multi-branch","Advanced Analytics","API Integrations","5 Weeks Delivery"]}]
  },
  'social-media-travel': {
    title: "Social Media Marketing for Travel",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "Grow your travel brand with stunning destination content, travel reels, and targeted campaigns to travelers in your demographic — turning dreamers into booked customers.",
    features: ["Destination Instagram Reels","Facebook Travel Ads","Influencer Travel Collaborations","Story Campaigns","User-Generated Content Strategy","Seasonal Campaign Planning","Engagement Campaigns","Monthly Analytics Reports"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Travel brand building","features":["Instagram + Facebook","15 Posts/month","Basic Ads","Story Updates","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active booking campaigns","features":["20 Posts + 8 Reels","FB + Instagram Ads","Influencer (1/month)","Seasonal Campaigns","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Travel media domination","features":["All Platforms","Daily Travel Content","Influencer (3/month)","YouTube Travel","Weekly Strategy Calls"]}]
  },
  'law-firm-website': {
    title: "Law Firm Website Development",
    category: "business-software",
    price: "₹12,999",
    desc: "Create a credibility-building law firm website that showcases your practice areas, attorney profiles, case results, client testimonials, and allows online consultation scheduling.",
    features: ["Practice Area Pages","Attorney Profiles","Case Study Showcases","Online Consultation Booking","Blog/Legal Articles","Client Testimonials","Secure Contact Forms","Bar Council Compliance"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"Basic law firm site","features":["8 Pages","Practice Areas","Attorney Profiles","Contact Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full law firm portal","features":["20 Pages","Online Consultation Booking","Blog/Articles","Testimonials","Case Studies","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Multi-attorney firm website","features":["Unlimited Pages","Client Portal","Document Sharing","CMS Dashboard","Multi-language","4 Weeks Delivery"]}]
  },
  'legal-document-automation': {
    title: "Legal Document Automation",
    category: "business-software",
    price: "₹14,999",
    desc: "Automate repetitive legal document creation with template-based generation — create contracts, notices, affidavits, and agreements in seconds by filling a simple form.",
    features: ["Document Template Library","Form-based Document Generation","E-signature Integration","PDF Download & Print","Template Management","Client Data Auto-fill","Version Control","Secure Document Sharing"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic template system","features":["10 Document Templates","Form-based Generation","PDF Download","Basic Sharing","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full document automation","features":["50 Templates","E-signature Integration","Auto-fill from Database","Version Control","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise legal document suite","features":["Unlimited Templates","Custom Workflow","API Integration","Audit Trails","5 Weeks Delivery"]}]
  },
  'client-portal': {
    title: "Client Portal for Law Firms",
    category: "business-software",
    price: "₹14,999",
    desc: "Give clients a secure portal to view their case status, upload documents, communicate with their lawyer, and pay bills — reducing phone calls and improving client satisfaction.",
    features: ["Secure Client Login","Case Status Dashboard","Document Upload & Download","Secure Messaging with Lawyer","Invoice & Payment Module","Court Date Notifications","Case Timeline View","Mobile Responsive"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic client access portal","features":["Client Login","Case Status View","Document Download","Messaging","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full client portal","features":["Document Upload","Payment Integration","Court Date Alerts","Secure Messaging","Timeline View","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise client management portal","features":["Multi-firm Support","Custom Branding","Analytics","API Integration","5 Weeks Delivery"]}]
  },
  'appointment-scheduling-law': {
    title: "Online Appointment Scheduling",
    category: "business-software",
    price: "₹9,999",
    desc: "A professional consultation booking system for law firms allowing clients to schedule meetings with specific attorneys, pay consultation fees, and receive automated reminders.",
    features: ["Attorney-specific Booking","Online Consultation Fee Collection","Video Consultation Link Generation","Calendar Sync","SMS & Email Reminders","Client Pre-consultation Form","Cancellation Management","Admin Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic booking system","features":["Online Scheduling","Email Confirmations","Admin Calendar","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Smart legal scheduling","features":["Fee Collection","SMS Reminders","Video Meeting Link","Multi-attorney","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Enterprise legal scheduling","features":["Full Practice Integration","CRM Sync","Analytics","Custom Workflow","3 Weeks Delivery"]}]
  },
  'seo-for-law-firms': {
    title: "SEO for Law Firms",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "When people need a lawyer, they Google. Our legal SEO strategy gets your firm to the top of search results for high-intent legal queries in your practice areas and city.",
    features: ["Legal Keyword Research","Practice Area Page SEO","Google Maps for Lawyers","Legal Blog Writing","E-A-T Optimization (Expertise, Authority, Trust)","Backlink Building","Review Generation","Monthly Reports"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Local law firm visibility","features":["15 Keywords","GMB Management","Practice Page SEO","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Legal authority building","features":["30 Keywords","Legal Blog (2/mo)","E-A-T Optimization","Backlinks (8/mo)","3-month minimum"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Dominant legal SEO","features":["60 Keywords","Blogs (5/mo)","Backlinks (20/mo)","Schema Markup","No Contract"]}]
  },
  'content-marketing-law': {
    title: "Legal Content Marketing",
    category: "business-software",
    price: "₹7,999/mo",
    desc: "Position your law firm as the go-to legal authority through high-quality blog posts, legal guides, FAQ pages, and video content that educates potential clients and earns search rankings.",
    features: ["Legal Blog Post Writing","FAQ Page Creation","Case Study Articles","Legal Guide E-books","Video Script Writing","Social Media Content","Newsletter Campaigns","Content Calendar Management"],
    plans: [{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic content presence","features":["2 Blog Posts/month","SEO Optimization","Social Distribution","Monthly Analytics","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active content authority","features":["4 Blog Posts/month","FAQ Pages","Legal Guides (1/quarter)","Newsletter (1/month)","3-month minimum"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Comprehensive content domination","features":["8 Posts/month","Video Scripts","E-book per Quarter","LinkedIn Strategy","No Contract"]}]
  },
  'manufacturing-website': {
    title: "Manufacturing Company Website",
    category: "business-software",
    price: "₹14,999",
    desc: "Build a credibility-establishing manufacturing website showcasing your products, capabilities, certifications, and case studies — designed to attract B2B buyers, distributors, and international clients.",
    features: ["Product/Catalogue Pages","Manufacturing Capabilities Showcase","Certification & Quality Badges","B2B Inquiry Form","Factory Video/Gallery","Export Markets Section","Case Study Pages","Request for Quote (RFQ) System"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic industrial website","features":["10 Pages","Product Catalog","RFQ Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full manufacturing portal","features":["25 Pages","Product Downloads (Specs)","Case Studies","Certification Pages","Blog/News","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"B2B marketplace portal","features":["Unlimited Pages","B2B Login Portal","Custom RFQ System","Distributor Section","4 Weeks Delivery"]}]
  },
  'erp-system': {
    title: "ERP System for Manufacturing",
    category: "business-software",
    price: "₹49,999",
    desc: "Streamline your entire manufacturing operation with a custom ERP — from raw material procurement to production planning, inventory, quality control, billing, and dispatch.",
    features: ["Production Planning & Scheduling","Raw Material Procurement","Inventory Management","Quality Control Module","Machine Downtime Tracking","Dispatch & Logistics","Financial Accounting","Management Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹49,999","desc":"Basic manufacturing system","features":["Inventory Module","Production Planning","Basic Billing","Reports","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full manufacturing ERP","features":["All Core Modules","Quality Control","Machine Tracking","Detailed Analytics","Staff Roles","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,99,999","desc":"Enterprise ERP platform","features":["Multi-plant","Full Financial Module","API Ecosystem","BI Dashboard","Custom Reports","14 Weeks Delivery"]}]
  },
  'inventory-manufacturing': {
    title: "Inventory Management for Manufacturing",
    category: "business-software",
    price: "₹19,999",
    desc: "Track raw materials, WIP (Work-In-Progress), and finished goods across your factory in real-time — with purchase order management, supplier tracking, and automated reorder points.",
    features: ["Raw Material Tracking","WIP Monitoring","Finished Goods Inventory","Purchase Order Management","Supplier Management","Barcode/QR Scanning","Reorder Point Automation","Inventory Valuation Reports"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Basic inventory system","features":["Raw Material Tracking","Finished Goods","PO Management","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full manufacturing IMS","features":["WIP Tracking","Barcode Scanning","Supplier Management","Reorder Automation","Detailed Analytics","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise inventory platform","features":["Multi-plant","ERP Integration","Advanced Analytics","Custom Reports","6 Weeks Delivery"]}]
  },
  'b2b-portal': {
    title: "B2B Dealer & Distributor Portal",
    category: "business-software",
    price: "₹29,999",
    desc: "Give your dealers and distributors a dedicated online portal to place orders, view catalogs, check stock, track shipments, and access marketing materials — eliminating manual order taking.",
    features: ["Dealer Login & Registration","Product Catalog with Pricing Tiers","Online Order Placement","Stock Availability View","Shipment Tracking","Invoice & Account Statement","Marketing Asset Downloads","Admin Dealer Management"],
    plans: [{"name":"Silver Plan","price":"₹29,999","desc":"Basic dealer portal","features":["Dealer Login","Product Catalog","Order Placement","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹54,999","desc":"Full B2B portal","features":["Pricing Tiers","Stock Availability","Shipment Tracking","Invoice Module","Analytics","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹94,999","desc":"Enterprise dealer management","features":["Multi-brand Portal","Credit Limit Management","Marketing Assets","Full Analytics Suite","6 Weeks Delivery"]}]
  },
  'quality-control-system': {
    title: "Quality Control System",
    category: "business-software",
    price: "₹19,999",
    desc: "Digitize your quality inspection process — define inspection parameters, record QC results at each production stage, generate non-conformance reports, and track defect trends for continuous improvement.",
    features: ["Inspection Checklist Builder","QC Data Entry (Mobile/Web)","Non-conformance Report (NCR)","Defect Analytics & Trend Reports","ISO Compliance Documentation","Supplier Quality Audit","Customer Complaint Tracking","Real-time QC Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Basic QC system","features":["Inspection Checklists","QC Entry","Basic Reports","NCR Generation","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full quality management","features":["Defect Analytics","ISO Documentation","Supplier QA","QC Dashboard","Mobile QC Entry","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise QMS platform","features":["Multi-plant","Advanced Analytics","Customer Complaint CRM","Custom Reports","6 Weeks Delivery"]}]
  },
  'industrial-mobile-app': {
    title: "Industrial Operations Mobile App",
    category: "business-software",
    price: "₹34,999",
    desc: "Empower factory supervisors and managers with a mobile app to monitor production, log machine downtime, capture quality issues, and view real-time dashboards — from any location.",
    features: ["Live Production Dashboard","Machine Downtime Logging","Quality Issue Capture (Photo)","Shift Report Submission","Inventory Check","Push Alert Notifications","Worker Attendance","Management Analytics"],
    plans: [{"name":"Silver Plan","price":"₹34,999","desc":"Basic factory floor app","features":["Android App","Production Dashboard","Downtime Logging","Basic Reports","3 Weeks Delivery"]},{"name":"Gold Plan","price":"₹64,999","desc":"Full operations app","features":["Android + iOS","Quality Capture","Shift Reports","Inventory Check","Push Alerts","5 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,09,999","desc":"Enterprise industrial app","features":["Full ERP Integration","AI Anomaly Detection","Multi-plant","Custom Analytics","8 Weeks Delivery"]}]
  },
  'digital-marketing-manufacturing': {
    title: "B2B Digital Marketing for Manufacturing",
    category: "business-software",
    price: "₹12,999/mo",
    desc: "Attract B2B buyers, distributors, and export partners through LinkedIn campaigns, Google B2B ads, industry directories, and content marketing that establishes your manufacturing authority.",
    features: ["LinkedIn B2B Campaigns","Google Industrial Search Ads","Industry Directory Listings","Trade Show Digital Campaigns","Technical Content Marketing","Email Campaign to Distributors","Export Market Campaigns","B2B Lead Generation"],
    plans: [{"name":"Silver Plan","price":"₹12,999/mo","desc":"B2B brand visibility","features":["LinkedIn Company Page","10 Posts/month","Google Ads Setup","Directory Listings","Monthly Report"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Active B2B lead generation","features":["LinkedIn Lead Ads","Google Search Ads","Email Campaigns","Technical Blog (2/mo)","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Export market campaigns","features":["Multi-platform","Export Market Targeting","Video Production","Trade Show Campaigns","Weekly Strategy Calls"]}]
  },
  'ngo-website': {
    title: "NGO & Non-Profit Website",
    category: "business-software",
    price: "₹9,999",
    desc: "Create a compelling website that tells your story, showcases your impact, attracts donors, and connects volunteers with your cause — with online donation functionality built-in.",
    features: ["Impact Stories & Statistics","Online Donation Button","Volunteer Registration","Program/Project Pages","Gallery & Field Reports","Newsletter Signup","Corporate Partner Section","Annual Report Downloads"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic NGO website","features":["6 Pages","Mission & Programs","Donation Button","Volunteer Form","Gallery","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full NGO portal","features":["20 Pages","Impact Dashboard","Newsletter Integration","Annual Reports","Blog/Updates","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Comprehensive cause platform","features":["Donor Portal","Volunteer Management","Corporate Partnership Section","Multi-language","3 Weeks Delivery"]}]
  },
  'online-donation-platform': {
    title: "Online Donation Platform",
    category: "business-software",
    price: "₹14,999",
    desc: "A dedicated donation platform supporting one-time and recurring donations, campaign-specific fundraising, donor dashboards, 80G receipt generation, and complete analytics.",
    features: ["One-time & Recurring Donations","Campaign-based Fundraising Pages","Multiple Payment Gateways","80G Receipt Generation","Donor Login & History","Donation Matching Feature","Fundraiser Creation Tool","Analytics Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic donation system","features":["One-time Donations","Payment Gateway","80G Receipts","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full fundraising platform","features":["Recurring Donations","Campaign Pages","Donor Portal","Analytics","Email Automation","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise donor management","features":["Fundraiser Creator Tool","Donation Matching","Corporate Donation Module","Full Analytics","5 Weeks Delivery"]}]
  },
  'fundraising-campaigns': {
    title: "Digital Fundraising Campaigns",
    category: "business-software",
    price: "₹9,999/campaign",
    desc: "Run powerful digital fundraising campaigns — Giving Tuesday drives, birthday fundraisers, emergency campaigns, and year-end appeals — with compelling stories, social media distribution, and donation tracking.",
    features: ["Campaign Landing Page Design","Countdown Timer & Goal Meter","Social Media Distribution","Email Campaign to Donors","WhatsApp Broadcast","Donor Update Stories","Matching Gift Feature","Real-time Campaign Analytics"],
    plans: [{"name":"Silver Plan","price":"₹9,999/campaign","desc":"Basic campaign setup","features":["Landing Page","Donation Gateway","Email Blast (1)","Social Posts (5)","Campaign Report"]},{"name":"Gold Plan","price":"₹19,999/campaign","desc":"Full campaign management","features":["Custom Landing Page","Email Sequence (5)","WhatsApp Broadcast","Social Ads","Real-time Analytics","Donor Thank-you"]},{"name":"Platinum Plan","price":"₹34,999/campaign","desc":"Maximum impact campaign","features":["Multi-phase Campaign","Video Production","Influencer Outreach","Press Release","Post-campaign Report"]}]
  },
  'event-management-ngo': {
    title: "NGO Event Management System",
    category: "business-software",
    price: "₹9,999",
    desc: "Manage charity events — gala dinners, marathons, benefit concerts, and awareness campaigns — with online ticketing, registration, volunteer coordination, and post-event reporting.",
    features: ["Online Event Registration","Ticket Sales & Payment","Volunteer Assignment for Events","Attendee Management","Event Sponsor Management","QR Code Check-in","Post-event Donation Drive","Impact Report Generation"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic event system","features":["Online Registration","Payment Gateway","Basic Reports","Email Confirmations","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full event management","features":["Ticketing","QR Check-in","Volunteer Module","Sponsor Tracking","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Multi-event platform","features":["Multi-event Management","Live Fundraiser Board","Post-event Donations","Custom Branding","3 Weeks Delivery"]}]
  },
  'impact-reporting': {
    title: "Impact Reporting Dashboard",
    category: "business-software",
    price: "₹12,999",
    desc: "Create a beautiful, data-driven impact dashboard that shows donors, CSR partners, and government agencies exactly how their contributions are creating change — with live statistics and stories.",
    features: ["Live Impact Metrics Dashboard","Beneficiary Count Tracking","Fund Utilization Visualization","Program Progress Reports","Geographic Impact Maps","Photo & Story Integration","Donor-specific Impact Statements","Annual Report Generation"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"Basic impact dashboard","features":["Key Metrics Display","Program Progress","Fund Utilization Chart","PDF Export","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full impact reporting suite","features":["Live Dashboard","Geographic Maps","Beneficiary Stories","Donor Statements","Annual Report Generator","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Enterprise impact platform","features":["Multi-program","Custom Metrics","Donor Portal Integration","BI Integration","4 Weeks Delivery"]}]
  },
  'social-media-ngo': {
    title: "Social Media for NGOs",
    category: "business-software",
    price: "₹7,999/mo",
    desc: "Build a powerful social media presence for your NGO — sharing impact stories, volunteer highlights, campaign updates, and awareness content that attracts donors, volunteers, and media attention.",
    features: ["Story-driven Content Creation","Campaign Social Posts","Volunteer Spotlights","Donor Recognition Posts","Awareness Day Campaigns","Video/Reel Production","Crowdfunding Social Drives","Engagement & Community Management"],
    plans: [{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic cause presence","features":["Instagram + Facebook","12 Posts/month","Basic Ads","Community Management","Monthly Report"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active donor engagement","features":["20 Posts + 6 Reels","Campaign Support","Paid Awareness Ads","Donor Recognition","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Full digital cause campaign","features":["All Platforms","Daily Stories","Influencer Collaboration","Video Production","Media Outreach"]}]
  },
  'beneficiary-management': {
    title: "Beneficiary Management System",
    category: "business-software",
    price: "₹14,999",
    desc: "Digitize your beneficiary records — track who receives aid, what program they're enrolled in, their progress, and generate reports for donor transparency and government compliance.",
    features: ["Beneficiary Registration & Profiles","Program Enrollment Tracking","Aid/Service Delivery Logging","Progress Milestone Tracking","Document Storage","Geographic Distribution Map","Government Report Generation","Outcome Analytics"],
    plans: [{"name":"Silver Plan","price":"₹14,999","desc":"Basic beneficiary tracker","features":["Beneficiary Profiles","Program Enrollment","Basic Reports","Document Storage","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full beneficiary management","features":["Progress Tracking","Geographic Maps","Outcome Analytics","Govt Report Formats","Mobile Data Entry","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise impact management","features":["Multi-program","Advanced Analytics","Donor Reporting Integration","Custom Reports","5 Weeks Delivery"]}]
  },
  'startup-website': {
    title: "Startup Website Development",
    category: "business-software",
    price: "₹12,999",
    desc: "Build a compelling startup website with your value proposition, product demo, team showcase, investor pitch, and lead capture — designed to convert visitors into signups and investors.",
    features: ["Hero with Clear Value Proposition","Product Feature Highlights","Demo Video/GIF Section","Founder & Team Profiles","Investor Section","Newsletter/Waitlist Signup","Press/Media Mentions","Contact & Partnership Enquiry"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"MVP landing page","features":["3–5 Pages","Value Proposition Hero","Feature List","Waitlist Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full startup website","features":["10 Pages","Product Demo Section","Team Profiles","Investor Section","Blog","Animations","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Premium startup brand","features":["Custom Animations","Micro-interactions","Investor Portal","Press Kit","A/B Testing Ready","3 Weeks Delivery"]}]
  },
  'mvp-development': {
    title: "MVP Development",
    category: "business-software",
    price: "₹49,999",
    desc: "Turn your startup idea into a working product fast. We build focused MVPs with core features that validate your hypothesis, attract early users, and impress investors — without overbuilding.",
    features: ["Core Feature Development","User Authentication","Database & API Architecture","Admin Dashboard","Analytics Integration","Payment Integration (if needed)","Mobile Responsive","Deployment & DevOps"],
    plans: [{"name":"Silver Plan","price":"₹49,999","desc":"Simple MVP (Web)","features":["Web App","Core Feature Set","Auth + Database","Admin Dashboard","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹89,999","desc":"Full-featured MVP","features":["Web + Mobile Responsive","Payment Integration","Analytics","Admin + User Dashboards","API Architecture","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Investor-grade MVP","features":["Web + Mobile App","Scalable Architecture","Advanced Analytics","CI/CD Pipeline","12 Weeks Delivery"]}]
  },
  'saas-platform-development': {
    title: "SaaS Platform Development",
    category: "business-software",
    price: "₹74,999",
    desc: "We build production-ready SaaS platforms with multi-tenancy, subscription billing, onboarding flows, usage analytics, and enterprise security — ready to scale to thousands of users.",
    features: ["Multi-tenant Architecture","Subscription Billing (Stripe)","User Onboarding Flows","Role-based Access Control","Usage Analytics & Metering","API & Webhook System","Admin Super Dashboard","Enterprise Security (SSO, 2FA)"],
    plans: [{"name":"Silver Plan","price":"₹74,999","desc":"Basic SaaS (single tier)","features":["Single-tenant Architecture","Core Features","Stripe Billing","Admin Dashboard","8 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,49,999","desc":"Full multi-tenant SaaS","features":["Multi-tenant","Subscription Plans","Onboarding Flows","Analytics","API System","12 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise SaaS platform","features":["SSO/2FA","Usage Metering","Webhooks","White-label Option","DevOps Setup","18 Weeks Delivery"]}]
  },
  'startup-mobile-app': {
    title: "Startup Mobile App Development",
    category: "business-software",
    price: "₹59,999",
    desc: "From consumer apps to B2B tools, we build startup mobile apps with clean UX, fast performance, scalable backends, and app store optimization to get early adopters fast.",
    features: ["React Native/Flutter Development","Backend API Development","User Auth & Profiles","Push Notifications","Analytics & Crash Reporting","App Store Optimization","In-app Purchases","Social Login"],
    plans: [{"name":"Silver Plan","price":"₹59,999","desc":"MVP mobile app (Android)","features":["Android App","Core Features","Firebase Backend","Push Notifications","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full startup mobile app","features":["Android + iOS","Custom Backend","Analytics","In-app Purchases","Social Login","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,69,999","desc":"Enterprise-grade startup app","features":["All Platforms","Scalable Architecture","Advanced Analytics","CI/CD","ASO Optimization","10 Weeks Delivery"]}]
  },
  'crm-for-startups': {
    title: "Startup CRM & Sales System",
    category: "business-software",
    price: "₹9,999",
    desc: "Stop managing sales in spreadsheets. A startup-optimized CRM to track leads, manage customer conversations, follow up systematically, and understand your early sales funnel performance.",
    features: ["Lead & Deal Pipeline","Contact & Company Management","Activity & Follow-up Tracking","Email Integration","Sales Reporting Dashboard","Team Collaboration","Product Demo Scheduling","Investor Pipeline (Optional)"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Basic startup CRM","features":["Up to 3 Users","Lead Pipeline","Contact Management","Basic Reports","1 Week Setup"]},{"name":"Gold Plan","price":"₹19,999","desc":"Growing team CRM","features":["Up to 15 Users","Email Integration","Activity Tracking","Dashboard Analytics","Follow-up Automation","2 Weeks Setup"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Scale-up sales system","features":["Unlimited Users","Investor Pipeline","Advanced Analytics","API Integrations","3 Weeks Setup"]}]
  },
  'investor-pitch-deck': {
    title: "Investor Pitch Deck Design",
    category: "business-software",
    price: "₹9,999",
    desc: "A professionally designed startup pitch deck that tells your story, demonstrates traction, presents your market opportunity, and convinces investors to take the next meeting.",
    features: ["Problem & Solution Slides","Market Size (TAM/SAM/SOM)","Business Model Clarity","Traction & Metrics Visualization","Team Slide","Financial Projections","Ask & Use of Funds","One-Pager Summary"],
    plans: [{"name":"Silver Plan","price":"₹9,999","desc":"Standard pitch deck (10–15 slides)","features":["10–15 Slides","Custom Design","Infographics","PDF + PPT Export","1 Week Delivery","2 Revisions"]},{"name":"Gold Plan","price":"₹19,999","desc":"Investor-grade pitch deck","features":["20 Slides","Financial Chart Design","Market Visualization","Multiple Versions","2 Weeks Delivery","Unlimited Revisions"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Premium fundraising package","features":["Full Deck","One-pager","Pitch Coaching Session","VC-specific Customization","Data Room Setup","2 Weeks Delivery"]}]
  },
  'growth-hacking-seo': {
    title: "Startup Growth Hacking & SEO",
    category: "business-software",
    price: "₹14,999/mo",
    desc: "Accelerate your startup growth with data-driven growth hacking experiments — product-led growth strategies, SEO content engines, viral loops, and channel experiments that find what works fastest.",
    features: ["Growth Funnel Audit","SEO Content Engine Setup","Product-led Growth Tactics","Viral Referral Loop","A/B Testing Framework","Acquisition Channel Experiments","Retention Optimization","Growth Analytics Dashboard"],
    plans: [{"name":"Silver Plan","price":"₹14,999/mo","desc":"Growth foundation","features":["Funnel Audit","SEO Setup","4 Experiments/month","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active growth sprints","features":["8 Experiments/month","SEO Content (4 pieces)","Referral Program","Retention Analysis","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-stack growth team","features":["Unlimited Experiments","Dedicated Growth PM","Product Analytics","Weekly Strategy","Investor Metrics Reports"]}]
  },
  'social-media-startup': {
    title: "Social Media & Brand Building for Startups",
    category: "business-software",
    price: "₹9,999/mo",
    desc: "Establish your startup's brand voice, build founder credibility on LinkedIn, attract talent and users on Instagram, and create a community of early adopters through strategic social presence.",
    features: ["Founder Personal Branding (LinkedIn)","Startup Instagram & Twitter/X Management","Product Launch Campaigns","User Community Building","PR & Media Outreach","Influencer Collaborations","Content Series Development","Monthly Analytics Reports"],
    plans: [{"name":"Silver Plan","price":"₹9,999/mo","desc":"Startup brand presence","features":["LinkedIn + Instagram","12 Posts/month","Basic Founder Content","Community Engagement","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active startup marketing","features":["All Channels","20 Posts + 6 Reels","Founder LinkedIn Strategy","Product Launch Support","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full startup brand domination","features":["All Channels","PR Outreach","Influencer","Product Hunt Launch","Investor Visibility Strategy"]}]
  },
  'custom-web-development': {
    title: "Custom Web Development",
    category: "business-software",
    price: "₹29,999",
    desc: "When off-the-shelf solutions don't fit, we build custom web applications — portals, platforms, tools, and systems — engineered precisely for your business logic and workflow.",
    features: ["Custom Architecture Design","Frontend & Backend Development","API Development & Integration","Database Design","Admin & User Dashboards","Third-party Integration","Security & Performance","DevOps & Deployment"],
    plans: [{"name":"Silver Plan","price":"₹29,999","desc":"Simple web tool/portal","features":["Core Features","User + Admin Dashboard","Database + API","Mobile Responsive","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Medium complexity web app","features":["Advanced Features","Third-party Integrations","Custom Workflows","Analytics","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999+","desc":"Enterprise web platform","features":["Full Custom Platform","Microservices Architecture","DevOps Pipeline","Security Audit","12+ Weeks Delivery"]}]
  },
  'custom-mobile-app': {
    title: "Custom Mobile App Development",
    category: "business-software",
    price: "₹49,999",
    desc: "From simple utility apps to complex platform applications, we build custom mobile apps that solve real business problems — with clean UX, reliable backends, and app store publishing.",
    features: ["Android & iOS Development","Custom UI/UX Design","Backend API Development","Third-party SDK Integration","Push Notification System","Offline Mode Support","Analytics & Crash Reporting","App Store Submission"],
    plans: [{"name":"Silver Plan","price":"₹49,999","desc":"Android-only MVP app","features":["Android App","Core Features","Firebase Backend","Basic Analytics","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹89,999","desc":"Cross-platform mobile app","features":["Android + iOS","Custom Backend","Payment Integration","Advanced Features","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise mobile platform","features":["All Platforms","Scalable Backend","CI/CD Pipeline","Security Audit","10 Weeks Delivery"]}]
  },
  'ai-ml-solutions': {
    title: "AI & Machine Learning Solutions",
    category: "business-software",
    price: "₹29,999",
    desc: "Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.",
    features: ["AI Chatbot Development","Recommendation Engine","Document OCR & Processing","Predictive Analytics","Image Recognition","Natural Language Processing","OpenAI API Integration","Custom ML Model Training"],
    plans: [{"name":"Silver Plan","price":"₹29,999","desc":"Basic AI feature integration","features":["Chatbot or 1 AI Feature","OpenAI Integration","Basic Training","API Endpoint","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Custom AI module","features":["Custom AI Feature","Data Pipeline","Model Fine-tuning","Dashboard","API + Documentation","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise AI platform","features":["Multiple AI Features","Custom ML Models","Real-time Inference","MLOps Pipeline","8 Weeks Delivery"]}]
  },
  'crm-development': {
    title: "Custom CRM Development",
    category: "business-software",
    price: "₹19,999",
    desc: "Off-the-shelf CRMs like Salesforce or HubSpot are expensive and rigid. We build custom CRMs tailored to your exact sales workflow, industry terminology, and reporting needs — at a fraction of the cost.",
    features: ["Custom Sales Pipeline","Contact & Company Management","Task & Follow-up Automation","Email & WhatsApp Integration","Custom Reporting & Analytics","Role-based Access","Mobile CRM App","Third-party Integrations"],
    plans: [{"name":"Silver Plan","price":"₹19,999","desc":"Basic custom CRM","features":["Up to 5 Users","Pipeline","Contact Management","Basic Reports","Email Integration","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹44,999","desc":"Full custom CRM","features":["Up to 25 Users","WhatsApp Integration","Automation Rules","Custom Reports","Mobile App","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise CRM platform","features":["Unlimited Users","Multi-branch","Advanced Analytics","Full API Ecosystem","6 Weeks Delivery"]}]
  },
  'digital-marketing': {
    title: "Full-Service Digital Marketing",
    category: "business-software",
    price: "₹14,999/mo",
    desc: "From brand awareness to lead generation and customer retention — our full-service digital marketing team manages your SEO, social media, paid ads, email marketing, and content strategy.",
    features: ["SEO Strategy & Execution","Social Media Management","Google & Meta Paid Ads","Email Marketing","Content Marketing","WhatsApp Marketing","Analytics & Reporting","Brand Strategy"],
    plans: [{"name":"Silver Plan","price":"₹14,999/mo","desc":"Basic digital presence","features":["Social Media (2 platforms)","15 Posts/month","GMB Management","SEO Basics","Monthly Report"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active growth marketing","features":["All Social + Google Ads","25 Posts + 6 Reels","SEO (25 keywords)","Email Campaign/mo","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-stack digital domination","features":["All Channels","Daily Content","YouTube Ads","WhatsApp Automation","Weekly Strategy Calls"]}]
  },
  'cloud-solutions': {
    title: "Cloud Solutions & DevOps",
    category: "business-software",
    price: "₹24,999",
    desc: "Migrate to the cloud, optimize your infrastructure, set up CI/CD pipelines, and ensure 99.9% uptime — with expert DevOps engineering on AWS, GCP, or Azure.",
    features: ["Cloud Migration (AWS/GCP/Azure)","CI/CD Pipeline Setup","Docker & Kubernetes","Auto-scaling Architecture","Database Optimization","Security & Compliance","Monitoring & Alerting","Cost Optimization"],
    plans: [{"name":"Silver Plan","price":"₹24,999","desc":"Basic cloud setup","features":["Cloud Server Setup","Domain + SSL","Basic CI/CD","Backup Config","1 Week Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Full cloud architecture","features":["Multi-server Setup","CI/CD Pipeline","Auto-scaling","Monitoring","Security Hardening","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise cloud platform","features":["Kubernetes Cluster","Multi-region","DR Setup","Cost Optimization","On-call Support","4 Weeks Delivery"]}]
  },
  'erp-solutions': {
    title: "Custom ERP Solutions",
    category: "business-software",
    price: "₹49,999",
    desc: "Replace disconnected spreadsheets and tools with a unified ERP that manages your operations, finance, HR, inventory, and customer relationships in one integrated platform.",
    features: ["Finance & Accounting Module","HR & Payroll Management","Inventory & Procurement","CRM & Sales Pipeline","Project Management","Reporting & BI Dashboard","Role-based Access","API Ecosystem"],
    plans: [{"name":"Silver Plan","price":"₹49,999","desc":"2–3 core modules","features":["2–3 Modules","Basic Integration","Reporting","User Roles","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,24,999","desc":"Full business ERP (5–7 modules)","features":["5–7 Modules","Full Integration","BI Dashboard","API Ecosystem","10 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise ERP platform","features":["All Modules","Multi-entity","Custom Reports","Full DevOps","16 Weeks Delivery"]}]
  },
  'seo-services-general': {
    title: "SEO & Content Marketing",
    category: "business-software",
    price: "₹7,999/mo",
    desc: "A comprehensive SEO and content strategy that targets your ideal customers through Google search, builds your domain authority, and generates consistent organic leads month after month.",
    features: ["Full SEO Audit","Keyword Research & Strategy","On-page & Technical SEO","Content Strategy & Writing","Link Building","Google Business Profile","Analytics & Reporting","Competitor Analysis"],
    plans: [{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic SEO foundation","features":["15 Keywords","On-page Optimization","GMB Setup","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active SEO growth","features":["30 Keywords","Technical SEO","Content (3/mo)","Backlinks (8/mo)","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹29,999/mo","desc":"SEO market domination","features":["60+ Keywords","Content (8/mo)","Backlinks (20/mo)","Schema Markup","No Contract"]}]
  },
  'fintech-app-development': {
    title: "Fintech App Development",
    category: "mobile-apps",
    price: "₹1,49,999",
    desc: "Custom fintech applications including digital banking, payments, lending, and investment platforms built with security and regulatory compliance at the core.",
    features: ["UPI & Payment Gateway Integration","eKYC & Aadhaar Verification","Real-time Transaction Monitoring","Multi-factor Authentication","Loan Origination Module","Investment Portfolio Tracker","Spending Analytics","Compliance & Audit Logs"],
    plans: [{"name":"Fintech MVP","price":"₹1,49,999","desc":"Core fintech application","features":["Payment Integration","eKYC","User Dashboard","Security Hardening","10 Weeks Delivery"]},{"name":"Enterprise Fintech","price":"₹2,99,999","desc":"Full-scale fintech platform","features":["Multi-product Suite","Advanced Analytics","Admin Panel","API Marketplace","18 Weeks Delivery"]}]
  },
  'banking-website': {
    title: "Banking & Finance Website",
    category: "websites",
    price: "₹39,999",
    desc: "Secure, trust-inspiring websites for banks, NBFCs, credit unions, and financial advisory firms that drive customer acquisition and provide self-service portals.",
    features: ["Product & Scheme Showcases","EMI Calculator Tools","Branch & ATM Locator","Loan Application Forms","Customer Login Portal","Regulatory Disclosure Pages","Mobile-Responsive Design","ADA Accessibility"],
    plans: [{"name":"Institutional Website","price":"₹39,999","desc":"Professional finance website","features":["Up to 20 Pages","EMI Calculators","Lead Forms","Mobile Responsive","4 Weeks Delivery"]},{"name":"Enterprise Portal","price":"₹74,999","desc":"Full self-service website","features":["Customer Login Portal","Branch Locator","Application Forms","ADA Compliant","7 Weeks Delivery"]}]
  },
  'loan-management-software': {
    title: "Loan Management Software",
    category: "business-software",
    price: "₹79,999",
    desc: "A comprehensive software system to manage the complete loan lifecycle from origination, underwriting, and disbursement to repayment tracking and collections.",
    features: ["Digital Loan Application & Origination","Automated Credit Scoring","Document Management (eKYC)","Loan Disbursement Workflows","EMI Schedule Generation","Collections & Recovery Module","Repayment Reminders (SMS/Email)","NPA Reporting & Analytics"],
    plans: [{"name":"LMS Core","price":"₹79,999","desc":"Essential loan management","features":["Origination","EMI Scheduling","Repayment Tracking","Basic Reports","7 Weeks Delivery"]},{"name":"LMS Enterprise","price":"₹1,49,999","desc":"Full-cycle lending platform","features":["Credit Scoring","Collections Module","NPA Analytics","Multi-branch Support","12 Weeks Delivery"]}]
  },
  'nbfc-portal': {
    title: "NBFC / Lending Portal",
    category: "business-software",
    price: "₹54,999",
    desc: "A complete web and mobile portal for NBFCs allowing customers to apply for loans, track status, make payments, and agents to manage their portfolios.",
    features: ["Customer Loan Application Portal","Agent / DSA Management Portal","Document Upload (eKYC)","Loan Status Tracker","Online Repayment Gateway","Statement Downloads","Agent Commission Tracking","Admin Dashboard"],
    plans: [{"name":"Customer Portal","price":"₹54,999","desc":"Customer & loan tracking portal","features":["Loan Application","Status Tracker","Repayment Gateway","Document Upload","6 Weeks Delivery"]},{"name":"NBFC Suite","price":"₹99,999","desc":"Customer + Agent portal","features":["Customer Portal","DSA Portal","Commission Tracking","Admin Dashboard","10 Weeks Delivery"]}]
  },
  'investment-platform': {
    title: "Investment Platform",
    category: "business-software",
    price: "₹99,999",
    desc: "A secure investment platform enabling investors to discover, analyze, and invest in mutual funds, stocks, bonds, or other financial instruments with real-time data.",
    features: ["Investment Discovery & Filtering","Real-time Market Data Integration","Portfolio Dashboard & Analytics","SIP (Systematic Investment Plans)","KYC & SEBI Compliance","Transaction History","Goal-based Investing Tools","Mobile App"],
    plans: [{"name":"MF Platform","price":"₹99,999","desc":"Mutual fund investment portal","features":["Fund Discovery","KYC Integration","SIP Setup","Portfolio View","10 Weeks Delivery"]},{"name":"Wealth Platform","price":"₹1,99,999","desc":"Full-stack wealth management","features":["Multi-asset Classes","Goal Planning Tools","Real-time Market Data","Mobile App","16 Weeks Delivery"]}]
  },
  'finance-crm': {
    title: "Finance CRM",
    category: "business-software",
    price: "₹44,999",
    desc: "A specialized CRM built for banks, NBFCs, and financial advisors to manage the complete client lifecycle from lead to conversion and long-term relationship management.",
    features: ["Lead Capture & Qualification","Client Financial Profile","Product Interest Tracking (Loans, FD, MF)","Follow-up Automation","Agent Assignment","Revenue & Commission Tracking","Cross-sell & Upsell Prompts","Regulatory Audit Logs"],
    plans: [{"name":"Finance CRM","price":"₹44,999","desc":"Core financial CRM","features":["Lead Management","Client Profiles","Follow-up Automation","Basic Reports","5 Weeks Delivery"]},{"name":"Enterprise CRM","price":"₹84,999","desc":"Advanced financial relationship platform","features":["Cross-sell Engine","Commission Tracking","Audit Logs","Advanced Analytics","9 Weeks Delivery"]}]
  },
  'digital-wallet-app': {
    title: "Digital Wallet App",
    category: "mobile-apps",
    price: "₹99,999",
    desc: "A feature-rich digital wallet application enabling users to add money, make payments, transfer funds, split bills, and manage transactions from their smartphones.",
    features: ["UPI & Bank Account Linking","P2P Money Transfers","QR Code Payments","Bill Payments (Utility, Mobile, DTH)","Transaction History & Statements","Cashback & Rewards Engine","Biometric Authentication","Multi-currency Support"],
    plans: [{"name":"Basic Wallet","price":"₹99,999","desc":"Core payment wallet app","features":["UPI Payments","P2P Transfers","Bill Payments","Android & iOS","10 Weeks Delivery"]},{"name":"Rewards Wallet","price":"₹1,79,999","desc":"Full-featured wallet with rewards","features":["Cashback Engine","Multi-currency","QR Payments","Analytics Dashboard","16 Weeks Delivery"]}]
  },
  'financial-analytics-dashboard': {
    title: "Financial Analytics Dashboard",
    category: "business-software",
    price: "₹49,999",
    desc: "A powerful BI and analytics dashboard that aggregates financial data across portfolios, branches, and products to give leadership real-time visibility and insights.",
    features: ["Revenue & P&L Dashboards","Portfolio Quality Analytics (NPA tracking)","Branch-wise Performance Reports","Agent / Channel Performance","Cash Flow Forecasting","Regulatory Report Automation (RBI)","Drill-down Data Exploration","Scheduled PDF Reports"],
    plans: [{"name":"Standard Dashboard","price":"₹49,999","desc":"Core financial reports","features":["P&L Dashboard","Branch Reports","NPA Tracking","Monthly Reports","5 Weeks Delivery"]},{"name":"Intelligence Suite","price":"₹94,999","desc":"Full BI & analytics platform","features":["Forecasting","Regulatory Reports","Custom KPIs","Drill-down Explorer","9 Weeks Delivery"]}]
  },
  'insurance-website': {
    title: "Insurance Company Website",
    category: "websites",
    price: "₹24,999",
    desc: "A secure, professional website for insurance companies, brokers, and agents to showcase products, generate leads, and provide customer self-service portals.",
    features: ["Insurance Product Showcases","Premium Calculator Tools","Online Inquiry & Lead Forms","Agent / Branch Locator","Customer Login Portal","Claims Reporting Form","Blog & Resource Center","Mobile-Responsive Design"],
    plans: [{"name":"Agency Website","price":"₹24,999","desc":"For insurance agents & brokers","features":["Up to 15 Pages","Lead Forms","Premium Calculator","Mobile Responsive","3 Weeks Delivery"]},{"name":"Corporate Website","price":"₹54,999","desc":"For insurance companies","features":["Customer Portal","Agent Locator","Claims Form","Blog","6 Weeks Delivery"]}]
  },
  'policy-management-system': {
    title: "Policy Management System",
    category: "business-software",
    price: "₹69,999",
    desc: "A comprehensive Policy Management System (PMS) to manage the complete lifecycle of insurance policies from issuance, endorsements, and renewals to cancellations.",
    features: ["Policy Issuance & Numbering","Endorsement Management","Automated Renewal Reminders","Premium Payment Tracking","Policy Document Generation (PDF)","Agent & Broker Portal","Customer Self-service Portal","Reporting & Analytics"],
    plans: [{"name":"Basic PMS","price":"₹69,999","desc":"Core policy management","features":["Policy Issuance","Renewal Reminders","Document Generation","Agent Portal","7 Weeks Delivery"]},{"name":"Enterprise PMS","price":"₹1,39,999","desc":"Full lifecycle management","features":["Endorsements","Customer Portal","Advanced Analytics","Multi-product Support","12 Weeks Delivery"]}]
  },
  'claims-management': {
    title: "Claims Management System",
    category: "business-software",
    price: "₹59,999",
    desc: "A digital claims management platform to streamline FNOL (First Notice of Loss), document collection, adjudication, and settlement, reducing TAT and improving customer satisfaction.",
    features: ["Online FNOL (Claim Intimation)","Digital Document Submission","Claim Status Tracker for Customers","Surveyor Assignment & Workflow","Automated Approval Workflows","Fraud Detection Flags","Settlement Processing","Claims Analytics Dashboard"],
    plans: [{"name":"Basic Claims","price":"₹59,999","desc":"Digital claim submission & tracking","features":["Online FNOL","Document Upload","Status Tracker","Basic Workflow","6 Weeks Delivery"]},{"name":"Smart Claims","price":"₹1,19,999","desc":"Full automated claims platform","features":["Surveyor Portal","Fraud Flags","Auto Approvals","Settlement Processing","11 Weeks Delivery"]}]
  },
  'insurance-agent-portal': {
    title: "Insurance Agent Portal",
    category: "business-software",
    price: "₹39,999",
    desc: "A dedicated web and mobile portal for insurance agents and POSPs to manage their clients, issue policies, track commissions, and access product training materials.",
    features: ["Client Portfolio Management","Online Policy Issuance & Quoting","Commission Tracking & Statements","Lead Management","Product Rate Cards","Training & Exam Portal","Document Repository","Instant Chat Support"],
    plans: [{"name":"Agent Hub","price":"₹39,999","desc":"Core agent management portal","features":["Client Management","Commission Tracker","Document Repository","Mobile Responsive","4 Weeks Delivery"]},{"name":"Agent Pro Suite","price":"₹74,999","desc":"Full-featured agent platform with app","features":["Online Quoting","Training Portal","Mobile App","Performance Analytics","8 Weeks Delivery"]}]
  },
  'insurance-crm': {
    title: "Insurance CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A purpose-built CRM for insurance companies and agents to track leads, manage renewals, automate follow-ups, and maximize customer lifetime value.",
    features: ["Lead Capture (Web, WhatsApp, Referral)","Policy Renewal Pipeline","Automated SMS/Email/WhatsApp Reminders","Cross-sell & Upsell Prompts","Agent Assignment & Tracking","Customer 360° Profile","Renewal Due Alerts","Performance Analytics"],
    plans: [{"name":"Insurance CRM","price":"₹34,999","desc":"Core lead & renewal management","features":["Lead Management","Renewal Reminders","Email/SMS Automation","Basic Reports","4 Weeks Delivery"]},{"name":"InsureCRM Pro","price":"₹64,999","desc":"Advanced pipeline & analytics","features":["360° Profiles","Cross-sell Engine","WhatsApp Automation","Performance Analytics","7 Weeks Delivery"]}]
  },
  'insurance-mobile-app': {
    title: "Insurance Mobile App",
    category: "mobile-apps",
    price: "₹74,999",
    desc: "A branded mobile application for policyholders to view policies, pay premiums, file claims, and chat with support — all from their smartphone.",
    features: ["Policy Dashboard & Details","Premium Payment (UPI/Card)","Instant Claim Filing (FNOL)","Digital Policy Cards","Push Notifications for Renewals","Agent Connect & Chat","Loyalty Rewards","Biometric Login"],
    plans: [{"name":"Policyholder App","price":"₹74,999","desc":"View, pay & claim mobile app","features":["Policy Dashboard","Premium Payments","Claim Filing","Push Notifications","8 Weeks Delivery"]},{"name":"Full Insurance App","price":"₹1,29,999","desc":"Complete digital insurance experience","features":["Loyalty Rewards","Agent Connect","Digital Cards","Biometric Login","12 Weeks Delivery"]}]
  },
  'insurance-comparison-portal': {
    title: "Insurance Comparison Portal",
    category: "websites",
    price: "₹99,999",
    desc: "An aggregator-style insurance comparison portal where users can compare policies across providers on price, features, and ratings and purchase directly online.",
    features: ["Multi-insurer Policy Comparison","Premium Calculator by Profile","Feature-wise Comparison Table","Online Application & KYC","Integrated Payment Gateway","Policy Delivery via Email","Customer Reviews & Ratings","SEO-optimized Content Pages"],
    plans: [{"name":"Comparison Portal","price":"₹99,999","desc":"Core comparison & quoting portal","features":["Multi-insurer Comparison","Premium Calculator","Lead Capture","Basic SEO","10 Weeks Delivery"]},{"name":"Aggregator Platform","price":"₹1,99,999","desc":"Full-featured insurance marketplace","features":["Online Purchase","Payment Gateway","Policy Delivery","Advanced SEO","16 Weeks Delivery"]}]
  },
  'logistics-website': {
    title: "Logistics Company Website",
    category: "websites",
    price: "₹24,999",
    desc: "A high-impact website for logistics, freight, and transport companies to showcase services, generate B2B leads, and provide shipment enquiry tools.",
    features: ["Service Showcase (FTL, LTL, Air, Sea)","Instant Rate/Quote Request Forms","Shipment Tracking Widget","Branch & Network Map","Fleet Photo Gallery","Customer Testimonials","Mobile-Responsive Design","SEO Optimized"],
    plans: [{"name":"Business Website","price":"₹24,999","desc":"Professional logistics website","features":["Up to 15 Pages","Quote Request Form","Fleet Gallery","Mobile Responsive","3 Weeks Delivery"]},{"name":"Lead Gen Website","price":"₹49,999","desc":"Tracking widget & full B2B site","features":["Tracking Widget","Rate Calculator","SEO Optimization","Network Map","5 Weeks Delivery"]}]
  },
  'fleet-management-system': {
    title: "Fleet Management System",
    category: "business-software",
    price: "₹44,999",
    desc: "A comprehensive fleet management platform integrating GPS tracking, driver management, maintenance scheduling, and fuel monitoring for complete fleet control.",
    features: ["Real-time GPS Vehicle Tracking","Driver Management & Behavior Scoring","Fuel Consumption Monitoring","Preventive Maintenance Alerts","Route History & Playback","Geo-fencing & Alerts","Vehicle Documents & Compliance","Fleet Performance Dashboard"],
    plans: [{"name":"Fleet Tracker","price":"₹44,999","desc":"GPS tracking & basic management","features":["Real-time Tracking","Driver Management","Geo-fencing","Basic Reports","5 Weeks Delivery"]},{"name":"Fleet Pro","price":"₹84,999","desc":"Full fleet intelligence platform","features":["Fuel Monitoring","Maintenance Alerts","Driver Scoring","Advanced Analytics","9 Weeks Delivery"]}]
  },
  'shipment-tracking-platform': {
    title: "Shipment Tracking Platform",
    category: "business-software",
    price: "₹34,999",
    desc: "A multi-courier, multi-modal shipment tracking platform providing real-time visibility across all your logistics partners in a single unified dashboard.",
    features: ["Multi-courier API Integration","Real-time Shipment Status","Customer-facing Tracking Page","Automated SMS/WhatsApp Notifications","Exception & Delay Alerts","Proof of Delivery (ePOD)","Analytics & SLA Reporting","Branded Tracking Experience"],
    plans: [{"name":"Tracking Hub","price":"₹34,999","desc":"Unified tracking dashboard","features":["3 Courier Integrations","Status Dashboard","Email Notifications","Tracking Page","4 Weeks Delivery"]},{"name":"Track Pro","price":"₹69,999","desc":"Full-scale tracking platform","features":["Unlimited Couriers","SMS/WhatsApp Alerts","ePOD","SLA Analytics","7 Weeks Delivery"]}]
  },
  'transport-management-system': {
    title: "Transport Management System (TMS)",
    category: "business-software",
    price: "₹69,999",
    desc: "A full-featured TMS to manage order creation, carrier selection, load planning, dispatch, proof of delivery, and freight billing in one integrated platform.",
    features: ["Order & Load Management","Carrier / Transporter Assignment","Route Planning & Optimization","Driver App (Mobile)","Live Tracking Integration","ePOD (Digital Proof of Delivery)","Freight Invoice & Billing","Analytics & Performance Reports"],
    plans: [{"name":"TMS Core","price":"₹69,999","desc":"Essential transport management","features":["Order Management","Carrier Assignment","Basic Tracking","ePOD","7 Weeks Delivery"]},{"name":"TMS Enterprise","price":"₹1,39,999","desc":"Full-scale transport platform","features":["Route Optimization","Driver App","Freight Billing","Advanced Analytics","12 Weeks Delivery"]}]
  },
  'delivery-tracking-app': {
    title: "Delivery Tracking App",
    category: "mobile-apps",
    price: "₹39,999",
    desc: "A mobile application for delivery executives to manage daily deliveries, navigate to addresses, capture proof of delivery, and handle cash collections.",
    features: ["Optimized Daily Delivery Route","Google Maps Navigation","Photo & Signature ePOD","Cash Collection & COD Management","Failed Delivery Workflow","Real-time Status Updates to Customer","Offline Mode Support","Performance Analytics"],
    plans: [{"name":"Delivery App","price":"₹39,999","desc":"Core delivery agent app","features":["Route Display","ePOD","Status Updates","Cash Collection","5 Weeks Delivery"]},{"name":"Smart Delivery","price":"₹74,999","desc":"Advanced with optimization & analytics","features":["Route Optimization","Offline Mode","Customer Notifications","Analytics Dashboard","8 Weeks Delivery"]}]
  },
  'logistics-crm': {
    title: "Logistics CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A specialized CRM for logistics and freight companies to manage corporate clients, track shipments per client, generate invoices, and grow their B2B business.",
    features: ["Corporate Client Management","Shipment Enquiry & Quote Tracking","Rate Card Management","Invoice & Credit Management","Automated Follow-up Sequences","Service Complaint Tracking","Client Performance Reports","Business Development Pipeline"],
    plans: [{"name":"Logistics CRM","price":"₹34,999","desc":"Core client & quote management","features":["Client Management","Quote Tracking","Invoice Management","Basic Reports","4 Weeks Delivery"]},{"name":"Freight CRM Pro","price":"₹64,999","desc":"Advanced B2B sales platform","features":["Rate Card Management","Business Dev Pipeline","Client Analytics","Complaint Tracking","7 Weeks Delivery"]}]
  },
  'route-optimization-software': {
    title: "Route Optimization Software",
    category: "business-software",
    price: "₹54,999",
    desc: "An AI-powered route optimization engine that calculates the most efficient delivery routes for multiple stops, reducing fuel costs and delivery time.",
    features: ["Multi-stop Route Optimization","Time Window Constraints","Vehicle Capacity Constraints","Real-time Traffic Integration","Dynamic Re-routing","Driver App Integration","Savings vs Manual Report","API for Integration with TMS/ERP"],
    plans: [{"name":"Route Optimizer","price":"₹54,999","desc":"Core route optimization","features":["Multi-stop Optimization","Time Windows","Driver App Integration","5 Weeks Delivery"]},{"name":"Smart Router Pro","price":"₹94,999","desc":"Full-featured with real-time re-routing","features":["Dynamic Re-routing","Capacity Constraints","TMS API Integration","Savings Analytics","9 Weeks Delivery"]}]
  },
  'automobile-dealership-website': {
    title: "Automobile Dealership Website",
    category: "websites",
    price: "₹34,999",
    desc: "A high-performance website for car dealerships with dynamic vehicle inventory, virtual showrooms, loan EMI calculators, and test drive booking systems.",
    features: ["Dynamic Vehicle Inventory Listings","Advanced Filter & Search (Brand, Model, Price)","Online Test Drive Booking","EMI Calculator","Comparison Tool","360° Virtual Car Tour","Lead Capture Forms","Mobile-Responsive Design"],
    plans: [{"name":"Dealer Website","price":"₹34,999","desc":"Core dealership web presence","features":["Vehicle Inventory","EMI Calculator","Test Drive Booking","Lead Forms","4 Weeks Delivery"]},{"name":"Virtual Showroom","price":"₹64,999","desc":"Premium online showroom experience","features":["360° Car Tour","Comparison Tool","Loan Calculator","SEO Optimization","7 Weeks Delivery"]}]
  },
  'vehicle-inventory-management': {
    title: "Vehicle Inventory Management",
    category: "business-software",
    price: "₹39,999",
    desc: "A digital inventory management system for car dealerships and used car platforms to manage stock, track vehicle status, and sync inventory across the website and showroom.",
    features: ["Vehicle Stock Register","VIN-based Vehicle Tracking","Stock Aging Alerts","Automated Website Sync","Multi-location Stock Management","Procurement & Delivery Tracking","PDI (Pre-delivery Inspection) Checklist","Sales Performance by Model"],
    plans: [{"name":"Inventory System","price":"₹39,999","desc":"Core vehicle stock management","features":["Stock Register","Website Sync","Aging Alerts","Basic Reports","4 Weeks Delivery"]},{"name":"Multi-location IMS","price":"₹74,999","desc":"Advanced multi-showroom management","features":["Multi-location Stock","VIN Tracking","PDI Checklist","Sales Analytics","8 Weeks Delivery"]}]
  },
  'car-booking-system': {
    title: "Car Booking & Test Drive System",
    category: "business-software",
    price: "₹24,999",
    desc: "An online platform enabling customers to book test drives, reserve vehicles, track order status, and schedule delivery — all with automated communications.",
    features: ["Online Test Drive Slot Booking","Vehicle Reservation with Token Payment","Booking Confirmation & Reminders","Order Status Tracker","Delivery Scheduling","Customer Communication Portal","Sales Executive Assignment","Admin Dashboard"],
    plans: [{"name":"Test Drive Booking","price":"₹24,999","desc":"Simple test drive scheduler","features":["Online Booking","Email/SMS Reminders","Admin Dashboard","Calendar Sync","3 Weeks Delivery"]},{"name":"Full Booking System","price":"₹49,999","desc":"Token payments & delivery tracking","features":["Token Payment","Order Tracker","Delivery Scheduling","Customer Portal","5 Weeks Delivery"]}]
  },
  'service-center-management': {
    title: "Service Center Management",
    category: "business-software",
    price: "₹44,999",
    desc: "A comprehensive management system for automobile service centers to handle job cards, parts inventory, technician assignment, customer updates, and invoicing.",
    features: ["Digital Job Card Creation","Service History per Vehicle (VIN)","Technician Assignment & Tracking","Spare Parts Inventory","Customer Update Notifications (WhatsApp)","Video/Photo of Issues Shared to Customer","Invoice & GST Billing","Service Due Reminders"],
    plans: [{"name":"Service Manager","price":"₹44,999","desc":"Core service center management","features":["Digital Job Cards","Technician Assignment","Basic Invoice","Email Alerts","5 Weeks Delivery"]},{"name":"Service Pro","price":"₹84,999","desc":"Full-featured service center suite","features":["WhatsApp Updates","Parts Inventory","Service History","GST Billing","9 Weeks Delivery"]}]
  },
  'automobile-mobile-app': {
    title: "Automobile Mobile App",
    category: "mobile-apps",
    price: "₹69,999",
    desc: "A branded mobile app for your automotive brand or dealership allowing customers to browse vehicles, book services, track orders, and access roadside assistance.",
    features: ["Vehicle Browsing & Comparison","Service Booking & History","Service Status Tracker","Emergency Roadside Assistance","Loyalty Points & Rewards","Insurance & RC Reminder","Push Notifications","In-app Chat Support"],
    plans: [{"name":"Service App","price":"₹69,999","desc":"Service booking & tracking app","features":["Service Booking","Status Tracker","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Full Auto App","price":"₹1,24,999","desc":"Complete automotive experience","features":["Vehicle Browsing","Roadside Assistance","Loyalty Program","In-app Chat","12 Weeks Delivery"]}]
  },
  'auto-parts-ecommerce': {
    title: "Auto Parts E-commerce Store",
    category: "websites",
    price: "₹54,999",
    desc: "A specialized e-commerce platform for auto parts retailers with vehicle compatibility search, bulk ordering for garages, and multi-brand product catalogs.",
    features: ["Vehicle Compatibility Filter (Year/Make/Model)","Multi-brand Parts Catalog","Garage / B2B Bulk Ordering","Real-time Stock Availability","GST-compliant Invoicing","Shipping & Delivery Integration","Parts Enquiry for Rare Items","Mobile-Responsive Store"],
    plans: [{"name":"Parts Store","price":"₹54,999","desc":"Core auto parts e-commerce","features":["Product Catalog","Compatibility Filter","Payment Gateway","GST Invoicing","6 Weeks Delivery"]},{"name":"B2B Auto Store","price":"₹94,999","desc":"B2C + B2B garage ordering platform","features":["Bulk Ordering","Garage Accounts","Credit Management","Advanced Analytics","10 Weeks Delivery"]}]
  },
  'automobile-crm': {
    title: "Automobile CRM",
    category: "business-software",
    price: "₹39,999",
    desc: "A specialized CRM for car dealerships and service centers to manage walk-in and digital leads, track test drives, schedule follow-ups, and maximize customer lifetime value.",
    features: ["Lead Management (Walk-in, Web, Digital)","Test Drive & Enquiry Tracking","Sales Pipeline & Follow-up Scheduler","Customer Purchase & Service History","Insurance Renewal Alerts","Service Due Reminders","Lost Deal Analysis","Showroom Performance Dashboard"],
    plans: [{"name":"Auto CRM","price":"₹39,999","desc":"Core dealership lead management","features":["Lead Tracking","Test Drive Pipeline","Follow-up Scheduler","Basic Reports","4 Weeks Delivery"]},{"name":"Dealership Pro CRM","price":"₹74,999","desc":"Full-lifecycle automotive CRM","features":["Service Reminders","Insurance Alerts","Lost Deal Analysis","Performance Dashboard","8 Weeks Delivery"]}]
  },
  'fitness-gym-website': {
    title: "Gym & Fitness Center Website",
    category: "websites",
    price: "₹19,999",
    desc: "A high-energy, visually stunning website for gyms and fitness studios to showcase facilities, membership plans, classes, and generate lead enquiries.",
    features: ["Facility & Equipment Showcase","Membership Plan Display","Class Schedule & Timetable","Trainer Profiles","Free Trial Lead Form","Transformation Gallery (Before/After)","Testimonials & Reviews","Mobile-Responsive Design"],
    plans: [{"name":"Gym Website","price":"₹19,999","desc":"Professional gym web presence","features":["Up to 10 Pages","Class Schedule","Lead Form","Mobile Responsive","2 Weeks Delivery"]},{"name":"Fitness Pro Site","price":"₹39,999","desc":"Full-featured fitness website","features":["Membership Plans","Trainer Profiles","Transformation Gallery","SEO Basics","4 Weeks Delivery"]}]
  },
  'gym-member-management': {
    title: "Gym Member Management Software",
    category: "business-software",
    price: "₹29,999",
    desc: "A complete gym management platform to handle member onboarding, biometric attendance, membership expiry, fee collection, and communications.",
    features: ["Member Onboarding & Profiles","Biometric / QR Code Attendance","Membership Expiry Alerts","Online & Offline Fee Collection","Membership Plan Management","Freeze & Pause Features","Staff & Trainer Management","Revenue & Attendance Reports"],
    plans: [{"name":"Gym Manager","price":"₹29,999","desc":"Core membership management","features":["Member Profiles","Attendance Tracking","Fee Collection","Renewal Alerts","4 Weeks Delivery"]},{"name":"Fitness Suite","price":"₹54,999","desc":"Full-featured gym management","features":["Biometric Integration","Staff Management","Revenue Reports","Online Payments","7 Weeks Delivery"]}]
  },
  'online-class-booking': {
    title: "Online Class Booking System",
    category: "business-software",
    price: "₹24,999",
    desc: "An intelligent booking system for fitness studios allowing members to browse class schedules, book spots, pay for sessions, and manage their fitness calendar.",
    features: ["Live Class Schedule Display","Spot Booking & Waitlist","One-on-one Trainer Booking","Online Payment & Prepaid Packs","Cancellation & Reschedule Rules","Automated Reminders (SMS/WhatsApp)","Attendance Tracking","Class Capacity Management"],
    plans: [{"name":"Class Scheduler","price":"₹24,999","desc":"Basic class booking","features":["Schedule Display","Spot Booking","Reminders","Admin Dashboard","3 Weeks Delivery"]},{"name":"Booking Pro","price":"₹44,999","desc":"Full booking & payment system","features":["Online Payments","Prepaid Packs","Trainer Booking","Capacity Management","5 Weeks Delivery"]}]
  },
  'fitness-mobile-app': {
    title: "Fitness Mobile App",
    category: "mobile-apps",
    price: "₹69,999",
    desc: "A branded fitness mobile app for gyms and studios to engage members with schedules, workout content, class booking, progress tracking, and community features.",
    features: ["Class Schedule & Booking","Workout Video Library","Progress Tracker (Weight, Reps, Measurements)","Membership Card & QR Code Entry","Push Notifications for Classes & Offers","Trainer Chat","Community Feed & Challenges","In-app Payment"],
    plans: [{"name":"Member App","price":"₹69,999","desc":"Core gym engagement app","features":["Class Booking","Membership Card","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Fitness App Pro","price":"₹1,19,999","desc":"Full fitness community app","features":["Workout Library","Progress Tracker","Community Feed","In-app Payments","12 Weeks Delivery"]}]
  },
  'workout-nutrition-app': {
    title: "Workout & Nutrition Tracking App",
    category: "mobile-apps",
    price: "₹99,999",
    desc: "A consumer fitness app featuring personalized workout plans, nutrition tracking, calorie counting, progress photos, and AI-powered fitness recommendations.",
    features: ["Personalized Workout Plan Builder","Exercise Library (Video Demonstrations)","Nutrition & Calorie Tracker","Food Database (Indian Food Included)","Progress Photos & Measurements","Body Composition Tracker","AI Workout Suggestions","Water & Sleep Tracking"],
    plans: [{"name":"Fitness Tracker","price":"₹99,999","desc":"Core workout & nutrition app","features":["Workout Plans","Exercise Library","Calorie Tracker","Progress Photos","10 Weeks Delivery"]},{"name":"AI Fitness App","price":"₹1,79,999","desc":"AI-powered personalized fitness","features":["AI Recommendations","Indian Food Database","Body Composition","Subscriptions","16 Weeks Delivery"]}]
  },
  'gym-crm': {
    title: "Gym CRM",
    category: "business-software",
    price: "₹29,999",
    desc: "A specialized CRM for gyms and fitness studios to manage walk-in and online leads, track trial conversions, and build long-term member relationships.",
    features: ["Lead Capture (Walk-in, Web, Social)","Trial Visit Tracking & Follow-up","Sales Pipeline to Membership Conversion","Automated WhatsApp/SMS Drip Sequences","Member Engagement Score","Re-engagement Campaigns for Inactive Members","Staff Performance Dashboard","Revenue Forecasting"],
    plans: [{"name":"Gym CRM","price":"₹29,999","desc":"Core lead & trial management","features":["Lead Management","Trial Tracking","Follow-up Automation","Basic Reports","4 Weeks Delivery"]},{"name":"Fitness CRM Pro","price":"₹54,999","desc":"Advanced member growth platform","features":["Re-engagement Campaigns","Engagement Scoring","Revenue Forecasting","Staff Dashboard","7 Weeks Delivery"]}]
  },
  'fitness-digital-marketing': {
    title: "Fitness Digital Marketing",
    category: "digital-marketing",
    price: "₹12,999/mo",
    desc: "Specialized digital marketing for gyms and fitness studios, including local Meta Ads, Google Ads, SEO, and social media campaigns to attract new members.",
    features: ["Local Google & Meta Ads Management","Instagram & Facebook Content Creation","Transformation Video Campaigns","Local SEO & Google My Business","Influencer Marketing","Referral Campaign Setup","WhatsApp Broadcast Campaigns","Monthly Analytics Reports"],
    plans: [{"name":"Local Fitness Ads","price":"₹12,999/mo","desc":"Local ads & social media","features":["Meta Ads","Google My Business","Social Content","12 Posts/mo","Monthly Report"]},{"name":"Fitness Growth","price":"₹24,999/mo","desc":"Full-funnel fitness marketing","features":["Google + Meta Ads","Transformation Campaigns","Influencer Outreach","WhatsApp Broadcasts","Bi-weekly Reports"]}]
  },
  'event-company-website': {
    title: "Event Company Website",
    category: "websites",
    price: "₹24,999",
    desc: "A visually stunning website for event management companies to showcase past events, services, team, and generate corporate and wedding event enquiries.",
    features: ["Portfolio Gallery (Events Showcase)","Service Category Pages (Weddings, Corporate, etc.)","Client Enquiry & Lead Forms","Testimonials & Case Studies","Vendor Partner Listings","Blog & Event Tips","Instagram Feed Integration","Mobile-Responsive Design"],
    plans: [{"name":"Event Website","price":"₹24,999","desc":"Professional event company presence","features":["Up to 15 Pages","Portfolio Gallery","Lead Forms","Mobile Responsive","3 Weeks Delivery"]},{"name":"Premium Event Site","price":"₹44,999","desc":"Premium portfolio & lead gen site","features":["Unlimited Portfolio","Video Showcases","Instagram Feed","SEO Optimization","5 Weeks Delivery"]}]
  },
  'event-booking-platform': {
    title: "Event Booking Platform",
    category: "websites",
    price: "₹39,999",
    desc: "A comprehensive event booking platform for clients to explore event packages, request quotations, approve proposals, and manage event planning digitally.",
    features: ["Event Package Browsing","Online Quotation Builder","Client Proposal Approval Portal","Event Checklist & Timeline","Vendor Coordination Module","Budget Tracking","Document Sharing","Communication Hub"],
    plans: [{"name":"Event Portal","price":"₹39,999","desc":"Quotation & client management","features":["Quote Builder","Client Approval Portal","Document Sharing","Basic Comms","5 Weeks Delivery"]},{"name":"Event Suite","price":"₹74,999","desc":"Full event planning platform","features":["Vendor Module","Budget Tracker","Event Checklist","Full Collaboration","8 Weeks Delivery"]}]
  },
  'ticketing-rsvp-system': {
    title: "Ticketing & RSVP System",
    category: "business-software",
    price: "₹29,999",
    desc: "A complete online ticketing and RSVP management system for concerts, conferences, exhibitions, and social events with payment integration and QR code check-in.",
    features: ["Event Landing Pages","Multiple Ticket Tiers (Early Bird, VIP, etc.)","Online Payment Gateway","QR Code Ticket Generation","On-site QR Code Scanner App","Attendee Data Management","Refund & Transfer Management","Post-event Email & Feedback"],
    plans: [{"name":"Event Tickets","price":"₹29,999","desc":"Core ticketing system","features":["Event Landing Page","Ticket Tiers","Payment Gateway","QR Code Tickets","3 Weeks Delivery"]},{"name":"Ticketing Pro","price":"₹54,999","desc":"Full-featured ticketing suite","features":["Check-in Scanner App","Multiple Events","Attendee Management","Refund Management","6 Weeks Delivery"]}]
  },
  'event-vendor-management': {
    title: "Event Vendor Management",
    category: "business-software",
    price: "₹34,999",
    desc: "A centralized portal to manage your network of event vendors (caterers, decorators, photographers, etc.) including contracts, payments, and event assignments.",
    features: ["Vendor Profile & Category Directory","Availability Calendar","Event Assignment & Briefing","Digital Contract Management","Invoice & Payment Tracking","Performance Rating System","Communication Hub","Vendor Performance Analytics"],
    plans: [{"name":"Vendor Hub","price":"₹34,999","desc":"Core vendor directory & assignment","features":["Vendor Directory","Event Assignment","Invoice Tracking","Rating System","4 Weeks Delivery"]},{"name":"Vendor Pro","price":"₹64,999","desc":"Full vendor management suite","features":["Contract Management","Payment Workflows","Availability Calendar","Performance Analytics","7 Weeks Delivery"]}]
  },
  'event-mobile-app': {
    title: "Event Mobile App",
    category: "mobile-apps",
    price: "₹64,999",
    desc: "A mobile application for events — providing attendees with the schedule, speaker info, networking, live polls, and real-time event updates on their smartphones.",
    features: ["Event Agenda & Schedule","Speaker & Session Profiles","Attendee Networking (Connect & Chat)","Live Polls & Q&A","Push Notifications for Updates","Venue Map & Directions","Exhibitor Directory","Photo Gallery & Social Sharing"],
    plans: [{"name":"Event App","price":"₹64,999","desc":"Core event companion app","features":["Agenda & Schedule","Push Notifications","Venue Map","iOS & Android","6 Weeks Delivery"]},{"name":"Engagement App","price":"₹1,09,999","desc":"Full attendee engagement platform","features":["Networking Module","Live Polls & Q&A","Exhibitor Directory","Social Sharing","10 Weeks Delivery"]}]
  },
  'event-crm': {
    title: "Event CRM",
    category: "business-software",
    price: "₹29,999",
    desc: "A specialized CRM for event management companies to track client leads, manage quotations, follow up on proposals, and maintain long-term relationships.",
    features: ["Lead Source Tracking","Event Enquiry Pipeline","Quotation & Proposal Tracker","Follow-up Automation","Client Communication Logs","Won / Lost Deal Analysis","Revenue Forecasting","Event Calendar Integration"],
    plans: [{"name":"Event CRM","price":"₹29,999","desc":"Core enquiry management","features":["Enquiry Pipeline","Follow-up Automation","Proposal Tracker","Basic Analytics","3 Weeks Delivery"]},{"name":"Event CRM Pro","price":"₹54,999","desc":"Full business development suite","features":["Won/Lost Analysis","Revenue Forecasting","Client History","Advanced Analytics","6 Weeks Delivery"]}]
  },
  'digital-invitations-platform': {
    title: "Digital Invitations Platform",
    category: "websites",
    price: "₹29,999",
    desc: "A platform to create and distribute stunning digital invitations (wedding cards, corporate event invites) with RSVP collection, guest management, and personalization.",
    features: ["Custom Invitation Design Templates","Personalized E-invites (Animated)","RSVP Collection & Management","WhatsApp & Email Distribution","Guest List Management","Event Countdown Timer","Venue Map Integration","Guest Meal Preference Collection"],
    plans: [{"name":"Invitation Platform","price":"₹29,999","desc":"Core digital invitation system","features":["Template Library","RSVP Collection","WhatsApp Sharing","Guest Management","3 Weeks Delivery"]},{"name":"Premium Invites","price":"₹54,999","desc":"Animated invites & full guest management","features":["Animated Designs","Meal Preferences","Seating Arrangements","Event Microsite","5 Weeks Delivery"]}]
  },
  'agri-website': {
    title: "Agriculture Company Website",
    category: "websites",
    price: "₹19,999",
    desc: "A professional website for agricultural companies, seed manufacturers, agri-input distributors, and cooperatives to showcase products and reach more customers.",
    features: ["Product & Crop Solution Showcases","Dealer & Distributor Locator","Crop Advisory Blog","Contact & Enquiry Forms","Certification & Compliance Display","Weather Widget Integration","Mobile-Responsive Design","SEO Optimized"],
    plans: [{"name":"Agri Website","price":"₹19,999","desc":"Core agricultural web presence","features":["Up to 12 Pages","Product Catalog","Lead Forms","Mobile Responsive","2 Weeks Delivery"]},{"name":"Agri Business Site","price":"₹39,999","desc":"Full-featured agri company website","features":["Dealer Locator","Crop Advisory Blog","Multiple Languages","SEO Setup","4 Weeks Delivery"]}]
  },
  'farm-management-system': {
    title: "Farm Management System",
    category: "business-software",
    price: "₹29,999",
    desc: "A comprehensive farm management platform for farmers and agri-businesses to track crops, manage inputs, record labor, and analyze farm productivity.",
    features: ["Farm & Field Mapping","Crop Season Planning","Input (Fertilizer, Pesticide) Records","Labor & Equipment Management","Irrigation Scheduling","Harvest & Yield Records","Cost of Cultivation Tracking","Farm Performance Analytics"],
    plans: [{"name":"Farm Manager","price":"₹29,999","desc":"Core farm recordkeeping","features":["Crop Records","Input Tracking","Labor Management","Basic Analytics","4 Weeks Delivery"]},{"name":"Smart Farm","price":"₹59,999","desc":"Full farm intelligence platform","features":["Field Mapping","Irrigation Scheduling","Cost Analysis","Mobile App","7 Weeks Delivery"]}]
  },
  'crop-monitoring-dashboard': {
    title: "Crop Monitoring Dashboard",
    category: "business-software",
    price: "₹49,999",
    desc: "An IIoT and satellite-based crop monitoring dashboard providing real-time insights on crop health, soil moisture, weather, and pest risk alerts.",
    features: ["Satellite Imagery (NDVI Analysis)","IoT Soil Moisture & Temperature Sensors","Weather Forecast Integration","Pest & Disease Risk Alerts","Crop Growth Stage Tracking","Irrigation Advisory","Historical Crop Performance","Mobile Alerts for Farmers"],
    plans: [{"name":"Crop Monitor","price":"₹49,999","desc":"Satellite & weather dashboard","features":["NDVI Maps","Weather Forecast","Crop Stage Tracker","Mobile Alerts","5 Weeks Delivery"]},{"name":"Smart Agri Dashboard","price":"₹94,999","desc":"IoT + Satellite precision farming","features":["IoT Sensor Integration","Irrigation Advisory","Pest Risk Alerts","Historical Analysis","9 Weeks Delivery"]}]
  },
  'agriculture-ecommerce': {
    title: "Agricultural E-commerce Store",
    category: "websites",
    price: "₹49,999",
    desc: "A specialized e-commerce platform for agri-businesses to sell seeds, fertilizers, pesticides, farm equipment, and fresh produce directly to farmers or consumers.",
    features: ["Agri Product Catalog","Crop-based Product Recommendations","Bulk Order Management","Farmer / B2B Pricing Tiers","COD & UPI Payment Options","Rural Delivery Management","Multi-language Product Pages","Agri Advisory Content"],
    plans: [{"name":"Agri Store","price":"₹49,999","desc":"Core agricultural e-commerce","features":["Product Catalog","UPI Payments","COD","Bulk Orders","5 Weeks Delivery"]},{"name":"Agri Marketplace","price":"₹89,999","desc":"Full-featured agri marketplace","features":["Multi-seller","Farmer Pricing","Advisory Content","Rural Delivery","9 Weeks Delivery"]}]
  },
  'cold-chain-management': {
    title: "Cold Chain Management System",
    category: "business-software",
    price: "₹59,999",
    desc: "A specialized cold chain management system for agri-businesses, dairy companies, and food processors to monitor temperature, track shipments, and ensure product quality.",
    features: ["Real-time Temperature Monitoring (IoT)","Cold Storage Inventory Tracking","Shipment Tracking with Temp Data","Breach Alerts & Notifications","Quality Compliance Documentation","Multi-location Cold Storage View","Expiry & Batch Tracking","Regulatory Compliance Reports"],
    plans: [{"name":"Cold Monitor","price":"₹59,999","desc":"Temperature monitoring & alerts","features":["Real-time Temp Monitoring","Breach Alerts","Basic Reports","5 Locations","6 Weeks Delivery"]},{"name":"Cold Chain Pro","price":"₹1,09,999","desc":"Full cold chain intelligence","features":["Inventory Tracking","Compliance Reports","Shipment Tracking","Unlimited Locations","10 Weeks Delivery"]}]
  },
  'farmer-mobile-app': {
    title: "Farmer Mobile App",
    category: "mobile-apps",
    price: "₹79,999",
    desc: "A vernacular farmer mobile app providing crop advisories, market price information, weather forecasts, and direct market access through their smartphones.",
    features: ["Crop Advisory (Vernacular Languages)","Daily Mandi Price Updates","7-day Weather Forecast","Pest & Disease Identification (AI)","Soil Test Request & Report","Government Scheme Information","Direct Market Selling Portal","Farm Record Diary"],
    plans: [{"name":"Farmer App","price":"₹79,999","desc":"Core farmer advisory app","features":["Crop Advisory","Mandi Prices","Weather","2 Regional Languages","8 Weeks Delivery"]},{"name":"Smart Farmer App","price":"₹1,39,999","desc":"Full-featured AI farmer companion","features":["AI Pest ID","Market Selling","Scheme Info","5 Regional Languages","14 Weeks Delivery"]}]
  },
  'agriculture-crm': {
    title: "Agriculture CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A specialized CRM for agri-businesses to manage their dealer and distributor networks, track farmer outreach, and monitor field executive activities.",
    features: ["Dealer & Distributor Management","Farmer Database & Geo-tagging","Field Executive Activity Tracking","Sales Order & Indent Management","Product Demo & Trial Tracking","Seasonal Campaign Management","Territory & Beat Plan Management","Sales Performance Analytics"],
    plans: [{"name":"Agri CRM","price":"₹34,999","desc":"Dealer & sales management","features":["Dealer Management","Sales Orders","Field Executive App","Basic Reports","4 Weeks Delivery"]},{"name":"Agri Sales Suite","price":"₹64,999","desc":"Full field sales intelligence","features":["Farmer Geo-tagging","Territory Planning","Campaign Tracking","Advanced Analytics","7 Weeks Delivery"]}]
  },
  'recruitment-agency-website': {
    title: "Recruitment Agency Website",
    category: "websites",
    price: "₹24,999",
    desc: "A professional, conversion-optimized website for recruitment agencies and HR consultancies to attract both corporate clients and job seekers.",
    features: ["Live Job Listings Integration","Employer & Candidate Portals","Service Showcase (Temp, Perm, Executive)","Case Studies & Success Stories","Team & Specialist Profiles","Online CV Submission Form","Employer Enquiry Forms","SEO-Optimized Job Pages"],
    plans: [{"name":"Agency Website","price":"₹24,999","desc":"Core recruitment agency site","features":["Job Listings","CV Upload Form","Employer Enquiry","Mobile Responsive","3 Weeks Delivery"]},{"name":"Recruitment Portal","price":"₹49,999","desc":"Full employer & candidate portal","features":["Employer Portal","Candidate Dashboard","Job SEO Pages","ATS Integration","5 Weeks Delivery"]}]
  },
  'job-portal-development': {
    title: "Job Portal Development",
    category: "websites",
    price: "₹74,999",
    desc: "A custom job portal platform for specific industries or geographies, connecting employers and job seekers with advanced search, profile matching, and application management.",
    features: ["Employer & Job Seeker Registration","Job Posting & Application Management","Resume / CV Database","Advanced Search & Filters","AI-based Job Matching","Verified Employer Badges","Premium Listing & Featured Jobs","Email & SMS Alerts for New Jobs"],
    plans: [{"name":"Job Board","price":"₹74,999","desc":"Core niche job portal","features":["Job Listings","CV Database","Advanced Search","Employer & Seeker Portals","8 Weeks Delivery"]},{"name":"Job Marketplace","price":"₹1,39,999","desc":"Full-featured job platform with AI","features":["AI Job Matching","Premium Listings","Monetization Engine","SEO-optimized Pages","14 Weeks Delivery"]}]
  },
  'applicant-tracking-system': {
    title: "Applicant Tracking System (ATS)",
    category: "business-software",
    price: "₹49,999",
    desc: "A custom ATS to manage the complete hiring pipeline for agencies and corporate HR teams, from job posting and application screening to interviews and offer management.",
    features: ["Multi-source Job Posting (Job Boards, Website)","CV Parsing & Database","Kanban Hiring Pipeline","Automated Interview Scheduling","Interview Feedback Forms","Offer Letter Generation","Background Verification Tracking","Hiring Analytics Dashboard"],
    plans: [{"name":"ATS Core","price":"₹49,999","desc":"Essential applicant tracking","features":["CV Database","Hiring Pipeline","Interview Scheduling","Basic Reports","5 Weeks Delivery"]},{"name":"ATS Enterprise","price":"₹89,999","desc":"Full-featured hiring suite","features":["CV Parsing","Offer Management","Background Check Integration","Analytics Dashboard","9 Weeks Delivery"]}]
  },
  'hr-management-system': {
    title: "HR Management System",
    category: "business-software",
    price: "₹69,999",
    desc: "A comprehensive HRMS to manage employee records, leaves, attendance, payroll, performance reviews, and HR compliance in one integrated system.",
    features: ["Employee Master Records","Leave & Attendance Management","Payroll Processing (Salary, PF, ESI)","Performance Appraisal Module","Onboarding & Offboarding Workflows","HR Policy Document Library","Employee Self-service Portal","HR Analytics Dashboard"],
    plans: [{"name":"HRMS Core","price":"₹69,999","desc":"Core HR management","features":["Employee Records","Leave Management","Attendance","Basic Reports","7 Weeks Delivery"]},{"name":"HRMS Complete","price":"₹1,29,999","desc":"Full-featured HRMS with Payroll","features":["Payroll Processing","Performance Reviews","Employee Portal","HR Analytics","12 Weeks Delivery"]}]
  },
  'recruitment-crm': {
    title: "Recruitment CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A recruitment-specific CRM for staffing agencies to manage client relationships, candidate pipelines, placements, and revenue tracking in a unified platform.",
    features: ["Client Company Management","Candidate Database & Tagging","Job Order Management","Candidate-to-Job Matching","Interview & Placement Tracker","Invoice & Placement Fee Management","Consultant Performance Dashboard","Activity & Communication Logs"],
    plans: [{"name":"Recruitment CRM","price":"₹34,999","desc":"Core candidate & job management","features":["Candidate Database","Job Orders","Placement Tracker","Basic Reports","4 Weeks Delivery"]},{"name":"Staffing CRM Pro","price":"₹64,999","desc":"Full recruitment business suite","features":["Fee Management","Consultant Dashboard","Activity Tracking","Revenue Analytics","7 Weeks Delivery"]}]
  },
  'candidate-mobile-app': {
    title: "Candidate Mobile App",
    category: "mobile-apps",
    price: "₹69,999",
    desc: "A mobile application for job seekers to browse jobs, upload profiles, apply, track application status, and receive interview alerts from their smartphones.",
    features: ["Personalized Job Feed","One-tap Job Application","Profile & CV Builder","Application Status Tracker","Interview Slot Booking","Push Notifications for New Jobs","Skill Assessment Quizzes","Salary Insights & Benchmarks"],
    plans: [{"name":"Candidate App","price":"₹69,999","desc":"Core job search mobile app","features":["Job Browsing","One-tap Apply","Status Tracker","Push Notifications","8 Weeks Delivery"]},{"name":"Talent App Pro","price":"₹1,19,999","desc":"Full-featured candidate platform","features":["AI Job Matching","Skill Assessments","Salary Insights","Video Profile","12 Weeks Delivery"]}]
  },
  'recruitment-marketing': {
    title: "Recruitment Marketing Services",
    category: "digital-marketing",
    price: "₹19,999/mo",
    desc: "Specialized digital marketing for recruitment agencies to attract job seekers and employer clients through LinkedIn, Google Ads, job board SEO, and content marketing.",
    features: ["LinkedIn Ads for Recruiters & Employers","Google Ads for Job Seeker Traffic","Job Board SEO Optimization","Social Media Management (LinkedIn, Instagram)","Employer Branding Campaigns","Candidate Testimonial Content","Email & WhatsApp Campaigns to Candidates","Monthly Hiring Analytics Reports"],
    plans: [{"name":"Recruitment Marketing","price":"₹19,999/mo","desc":"Core digital presence","features":["LinkedIn Management","Google Ads","Job SEO","10 Posts/mo","Monthly Report"]},{"name":"Hiring Brand Pro","price":"₹39,999/mo","desc":"Full recruitment marketing suite","features":["LinkedIn + Meta Ads","Employer Branding","Content Marketing","Bi-weekly Reports","WhatsApp Campaigns"]}]
  },
  'hotel-website-development': {
    title: "Hotel & Resort Website",
    category: "websites",
    price: "₹34,999",
    desc: "A visually stunning, conversion-optimized hotel website designed to drive direct bookings, reduce OTA commissions, and showcase the property beautifully.",
    features: ["Virtual Property Tour (360° Photos)","Real-time Room Availability & Booking","Rate & Room Type Comparison","Restaurant & Spa Booking","Special Offers & Packages","Guest Reviews Section","Photo & Video Gallery","Mobile-Responsive Design"],
    plans: [{"name":"Hotel Website","price":"₹34,999","desc":"Professional hotel web presence","features":["Up to 15 Pages","Photo Gallery","Enquiry Form","Mobile Responsive","4 Weeks Delivery"]},{"name":"Booking Website","price":"₹64,999","desc":"Direct booking hotel website","features":["Real-time Booking Engine","Room Comparison","Online Payments","SEO Optimization","7 Weeks Delivery"]}]
  },
  'hotel-booking-engine': {
    title: "Hotel Booking Engine",
    category: "business-software",
    price: "₹49,999",
    desc: "A seamless, mobile-friendly booking engine integrated with your website and PMS to enable direct online room reservations with real-time availability.",
    features: ["Real-time Room Availability Calendar","Multiple Rate Plans & Room Types","Promo Code & Corporate Rate Engine","Multi-currency & Multi-language","Upsell Add-ons (Breakfast, Spa, Late Checkout)","Secure Payment Gateway","Booking Confirmation Emails","Channel Manager Integration"],
    plans: [{"name":"Booking Engine","price":"₹49,999","desc":"Core direct booking engine","features":["Real-time Availability","Payment Gateway","Booking Emails","Promo Codes","5 Weeks Delivery"]},{"name":"Smart Booking Engine","price":"₹84,999","desc":"Advanced engine with upsells","features":["Rate Plan Management","Upsell Add-ons","Multi-currency","Channel Integration","8 Weeks Delivery"]}]
  },
  'property-management-system': {
    title: "Property Management System (PMS)",
    category: "business-software",
    price: "₹79,999",
    desc: "A cloud-based PMS to manage front desk operations, reservations, check-in/out, housekeeping, billing, and guest communications in a single platform.",
    features: ["Reservation Dashboard","Front Desk Check-in/Check-out","Room Status & Housekeeping Module","Guest Profile & CRM","Invoicing & GST Billing","Restaurant POS Integration","Night Audit","Reports & Analytics"],
    plans: [{"name":"PMS Core","price":"₹79,999","desc":"Essential hotel PMS","features":["Reservations","Front Desk","Housekeeping","Billing","8 Weeks Delivery"]},{"name":"PMS Enterprise","price":"₹1,49,999","desc":"Full-featured hotel management","features":["Restaurant POS","Night Audit","Analytics","Multi-property","14 Weeks Delivery"]}]
  },
  'restaurant-management-system': {
    title: "Restaurant Management System",
    category: "business-software",
    price: "₹34,999",
    desc: "A complete restaurant management system covering table reservations, digital menu, order management, kitchen display, billing, and daily sales analytics.",
    features: ["Digital Menu & QR Code Ordering","Table Reservation Management","Order Management (Dine-in, Takeaway, Delivery)","Kitchen Display System (KDS)","Inventory & Recipe Management","GST-compliant POS Billing","Waiter App (Mobile)","Daily Sales Analytics"],
    plans: [{"name":"Restaurant POS","price":"₹34,999","desc":"Core POS & billing system","features":["Digital Menu","POS Billing","Order Management","Basic Reports","4 Weeks Delivery"]},{"name":"Restaurant Suite","price":"₹64,999","desc":"Full restaurant management","features":["KDS","Table Reservations","Inventory","Waiter App","7 Weeks Delivery"]}]
  },
  'loyalty-program-app': {
    title: "Guest Loyalty Program App",
    category: "mobile-apps",
    price: "₹74,999",
    desc: "A branded mobile loyalty app for hotels to reward repeat guests with points, offer member-exclusive rates, and build long-term guest relationships.",
    features: ["Points Earning & Redemption System","Membership Tier Management (Silver, Gold, Platinum)","Member-exclusive Rates & Offers","Mobile Key & Digital Room Upgrade","Push Notifications for Offers","Booking History & Stay Summary","F&B Loyalty Integration","In-app Feedback & Rating"],
    plans: [{"name":"Loyalty App","price":"₹74,999","desc":"Core guest loyalty app","features":["Points System","Member Offers","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Premium Loyalty","price":"₹1,29,999","desc":"Full loyalty & engagement platform","features":["Tiered Membership","Mobile Key","F&B Loyalty","Upgrade Engine","13 Weeks Delivery"]}]
  },
  'hospitality-crm': {
    title: "Hospitality CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A guest relationship management platform that consolidates stay history, preferences, and feedback to enable personalized marketing and service delivery.",
    features: ["Guest Profile & Stay History","Preference & Special Request Tracking","Segmented Email Marketing Campaigns","Pre-arrival & Post-stay Emails","Feedback & Review Management","Birthday & Anniversary Campaigns","Corporate Account Management","Revenue Analytics by Segment"],
    plans: [{"name":"Hotel CRM","price":"₹34,999","desc":"Core guest relationship management","features":["Guest Profiles","Email Campaigns","Feedback Tracking","Basic Analytics","4 Weeks Delivery"]},{"name":"Hospitality CRM Pro","price":"₹64,999","desc":"Advanced personalization platform","features":["Segmented Marketing","Pre/Post-stay Emails","Corporate Management","Revenue Analytics","7 Weeks Delivery"]}]
  },
  'revenue-management-system': {
    title: "Revenue Management System",
    category: "business-software",
    price: "₹59,999",
    desc: "A hospitality revenue management dashboard with competitor rate tracking, demand forecasting, and dynamic pricing recommendations to maximize RevPAR.",
    features: ["Competitor Rate Intelligence","Demand Forecasting (Events, Seasons)","Dynamic Pricing Recommendations","OTA Performance Analytics","RevPAR & Occupancy Dashboard","Channel Revenue Attribution","Pickup & Pace Reports","Rate Parity Monitoring"],
    plans: [{"name":"Revenue Dashboard","price":"₹59,999","desc":"Core revenue intelligence","features":["Competitor Rates","RevPAR Dashboard","Occupancy Reports","5 Weeks Delivery"]},{"name":"Dynamic Pricing Suite","price":"₹109,999","desc":"Full RMS with dynamic pricing","features":["Dynamic Pricing AI","Demand Forecasting","Rate Parity Alerts","Channel Analytics","9 Weeks Delivery"]}]
  },
  'media-company-website': {
    title: "Media Company Website",
    category: "websites",
    price: "₹29,999",
    desc: "A high-impact website for media companies, news portals, production houses, and creative agencies to showcase content, attract clients, and build audience.",
    features: ["Content & News Publishing Platform","Portfolio & Showreel Showcases","Advertising & Sponsorship Pages","Media Kit & Rate Card Downloads","Team & Talent Profiles","Video Player Integration","Newsletter Signup","SEO-optimized News Pages"],
    plans: [{"name":"Media Website","price":"₹29,999","desc":"Core media company presence","features":["Up to 15 Pages","Video Integration","Newsletter Signup","Media Kit","3 Weeks Delivery"]},{"name":"News Portal","price":"₹59,999","desc":"Full-featured news & media portal","features":["CMS for Journalists","SEO News Pages","Ad Network Integration","Email Newsletter","6 Weeks Delivery"]}]
  },
  'content-streaming-platform': {
    title: "Content Streaming Platform",
    category: "business-software",
    price: "₹1,49,999",
    desc: "A custom video or audio streaming platform with subscription tiers, paywall, content management, and analytics for media companies and content creators.",
    features: ["Video/Audio Upload & Transcoding","Subscription & Paywall System","Content Library & Categorization","Adaptive Bitrate Streaming (HLS)","Offline Download (for Apps)","Creator/Publisher CMS","Viewer Analytics","Multi-device (Web, App, Smart TV)"],
    plans: [{"name":"Streaming MVP","price":"₹1,49,999","desc":"Core content streaming platform","features":["Video Upload & Streaming","Subscription System","Content CMS","Analytics","12 Weeks Delivery"]},{"name":"OTT Platform","price":"₹2,99,999","desc":"Full multi-device OTT platform","features":["Adaptive Bitrate","Mobile App","Smart TV App","Offline Downloads","20 Weeks Delivery"]}]
  },
  'ott-app-development': {
    title: "OTT App Development",
    category: "mobile-apps",
    price: "₹1,29,999",
    desc: "Native OTT applications across all major platforms — iOS, Android, Android TV, Apple TV, and Amazon Firestick — for your streaming platform or content brand.",
    features: ["iOS & Android Mobile Apps","Android TV & Apple TV Apps","Amazon Firestick App","User Authentication & Profiles","Subscription Plan Management","Offline Download","Chromecast Support","Parental Controls"],
    plans: [{"name":"Mobile OTT Apps","price":"₹1,29,999","desc":"iOS & Android streaming apps","features":["iOS App","Android App","User Profiles","Subscription","12 Weeks Delivery"]},{"name":"Full OTT Suite","price":"₹2,49,999","desc":"Mobile + Smart TV apps","features":["Android TV App","Apple TV App","Firestick App","Chromecast","20 Weeks Delivery"]}]
  },
  'digital-magazine-portal': {
    title: "Digital Magazine & News Portal",
    category: "websites",
    price: "₹44,999",
    desc: "An engaging digital magazine or news portal with article publishing, subscription paywalls, digital flipbook magazines, push notifications, and advertising integration.",
    features: ["Article & Issue Publishing (CMS)","Digital Flipbook Magazine Reader","Subscription & Paywall System","Category & Tag-based Navigation","Newsletter Integration","Native Advertising System","Push Notifications for New Issues","Offline Reading Mode (App)"],
    plans: [{"name":"Digital Portal","price":"₹44,999","desc":"Web-based digital magazine","features":["CMS","Paywall","Newsletter","Ad Slots","5 Weeks Delivery"]},{"name":"Magazine App","price":"₹89,999","desc":"Full magazine app & portal","features":["iOS & Android App","Flipbook Reader","Push Notifications","Offline Mode","9 Weeks Delivery"]}]
  },
  'talent-artist-portal': {
    title: "Talent & Artist Portfolio Portal",
    category: "websites",
    price: "₹34,999",
    desc: "A marketplace-style portal to showcase and book artists, performers, speakers, and creative talent for events, productions, and brand collaborations.",
    features: ["Talent Profile Pages (Video, Photos, Bio)","Searchable Talent Directory","Availability Calendar","Online Booking & Quote Request","Contract Management","Payment Processing","Rating & Review System","Talent Management Dashboard"],
    plans: [{"name":"Talent Portfolio","price":"₹34,999","desc":"Agency talent showcase","features":["Talent Profiles","Booking Requests","Video Gallery","Admin Dashboard","4 Weeks Delivery"]},{"name":"Talent Marketplace","price":"₹74,999","desc":"Full booking marketplace","features":["Talent Directory","Online Booking","Payments","Commission Management","8 Weeks Delivery"]}]
  },
  'media-crm': {
    title: "Media & Publisher CRM",
    category: "business-software",
    price: "₹39,999",
    desc: "A specialized CRM for media companies to manage advertiser relationships, track ad sales pipelines, manage editorial content workflows, and subscriber engagement.",
    features: ["Advertiser Account Management","Ad Sales Pipeline & Revenue Tracking","Editorial Content Calendar","Subscriber Database & Segmentation","Newsletter Campaign Management","Content Performance Analytics","Advertiser Report Generation","Freelancer & Contributor Management"],
    plans: [{"name":"Media CRM","price":"₹39,999","desc":"Core advertiser & content management","features":["Advertiser Management","Ad Pipeline","Content Calendar","Basic Analytics","4 Weeks Delivery"]},{"name":"Publisher Suite","price":"₹74,999","desc":"Full media business management platform","features":["Subscriber Segmentation","Newsletter Automation","Revenue Reports","Freelancer Management","8 Weeks Delivery"]}]
  },
  'entertainment-marketing': {
    title: "Entertainment Digital Marketing",
    category: "digital-marketing",
    price: "₹24,999/mo",
    desc: "Performance-focused digital marketing for entertainment brands, OTT platforms, and event promoters to build massive audiences and drive ticket sales or subscriptions.",
    features: ["YouTube Channel Growth Strategy","Instagram & Facebook Fan Page Growth","Trailer & Content Promotion Campaigns","Paid Ads for Ticket Sales & Subscriptions","Influencer & Celebrity Collaborations","Viral Content Campaign Design","PR & Media Coverage Coordination","Audience Analytics & Reporting"],
    plans: [{"name":"Entertainment Buzz","price":"₹24,999/mo","desc":"Audience growth campaigns","features":["Social Media Mgt","Content Promotion","Basic Paid Ads","15 Posts/mo","Monthly Report"]},{"name":"Blockbuster Campaign","price":"₹49,999/mo","desc":"Full-scale launch marketing","features":["Influencer Collaborations","Multi-platform Ads","Viral Campaign Design","PR Outreach","Weekly Reports"]}]
  },
  'sports-club-website': {
    title: "Sports Club & Academy Website",
    category: "websites",
    price: "₹19,999",
    desc: "A dynamic website for sports clubs, academies, and federations to showcase teams, invite member registrations, publish match results, and engage fans.",
    features: ["Team & Player Profiles","Match Fixtures & Results","Online Member Registration","Academy Coaching Programs","Achievement & Trophy Showcase","News & Match Reports","Fan Gallery & Videos","Mobile-Responsive Design"],
    plans: [{"name":"Club Website","price":"₹19,999","desc":"Core sports club presence","features":["Team Profiles","Match Results","News","Member Registration Form","2 Weeks Delivery"]},{"name":"Academy Pro Site","price":"₹39,999","desc":"Full sports academy website","features":["Coaching Programs","Video Gallery","Fan Section","SEO Optimization","4 Weeks Delivery"]}]
  },
  'team-management-system': {
    title: "Team Management System",
    category: "business-software",
    price: "₹29,999",
    desc: "A comprehensive team management platform for coaches and team managers to manage squads, track attendance, schedule training, and analyze player performance.",
    features: ["Squad & Player Management","Training Session Scheduler","Attendance Tracking","Fitness & Medical Records","Video Analysis Module","Coach Communication Hub","Performance Data Dashboard","Youth Academy Management"],
    plans: [{"name":"Team Manager","price":"₹29,999","desc":"Core team management","features":["Squad Management","Training Schedule","Attendance","Basic Stats","4 Weeks Delivery"]},{"name":"Performance Suite","price":"₹59,999","desc":"Full-featured team & performance system","features":["Video Analysis","Fitness Records","Player App","Performance Dashboard","7 Weeks Delivery"]}]
  },
  'sports-booking-platform': {
    title: "Sports Venue Booking Platform",
    category: "websites",
    price: "₹24,999",
    desc: "An online booking platform for sports venues (cricket grounds, football pitches, badminton courts, swimming pools) to manage time-slot reservations and payments.",
    features: ["Real-time Slot Availability Calendar","Multi-sport & Multi-court Booking","Online Payment Collection","Membership vs Pay-per-Use Pricing","Automated Booking Confirmation","QR Code Access Control","Corporate Group Booking","Revenue & Utilization Reports"],
    plans: [{"name":"Venue Booking","price":"₹24,999","desc":"Core court booking system","features":["Slot Calendar","Online Booking","Payment Gateway","Booking Emails","3 Weeks Delivery"]},{"name":"Venue Pro","price":"₹49,999","desc":"Multi-court with QR access","features":["Multi-sport Courts","QR Access Control","Membership Management","Revenue Reports","6 Weeks Delivery"]}]
  },
  'athlete-performance-app': {
    title: "Athlete Performance App",
    category: "mobile-apps",
    price: "₹79,999",
    desc: "A mobile app for athletes and coaches to track physical performance metrics, training loads, nutrition, recovery, and mental wellness throughout the season.",
    features: ["GPS Speed & Distance Tracking","Training Load Monitoring (RPE, HRV)","Nutrition & Hydration Logging","Sleep & Recovery Tracking","Injury Prevention Alerts","Coach Feedback Module","Performance Trend Analytics","Competition Preparation Mode"],
    plans: [{"name":"Athlete App","price":"₹79,999","desc":"Core performance tracking app","features":["Training Logs","Nutrition Tracking","Coach Dashboard","Basic Analytics","8 Weeks Delivery"]},{"name":"Elite Performance","price":"₹1,39,999","desc":"Advanced sports science app","features":["Wearable Integration","HRV Monitoring","Injury Alerts","Periodization Planning","13 Weeks Delivery"]}]
  },
  'sports-ecommerce': {
    title: "Sports Equipment E-commerce",
    category: "websites",
    price: "₹49,999",
    desc: "A specialized e-commerce store for sports equipment retailers and sports brands to sell gear, apparel, and merchandise online with club/academy tie-ups.",
    features: ["Sports Equipment & Apparel Catalog","Sport-based Product Filtering","Club & Team Kit Customization","Bulk B2B School / Club Orders","Product Reviews & Expert Ratings","Video Demonstrations","GST Invoicing","Shipping & Delivery Integration"],
    plans: [{"name":"Sports Store","price":"₹49,999","desc":"Core sports e-commerce","features":["Product Catalog","Sports Filters","Payment Gateway","GST Invoicing","5 Weeks Delivery"]},{"name":"Sports Marketplace","price":"₹89,999","desc":"Full B2B + B2C sports platform","features":["Club Kit Customization","Bulk B2B Orders","Video Demos","Expert Reviews","9 Weeks Delivery"]}]
  },
  'sports-crm': {
    title: "Sports CRM",
    category: "business-software",
    price: "₹34,999",
    desc: "A CRM tailored for sports clubs, agencies, and events to manage sponsor relationships, track fan engagement, manage member renewals, and execute targeted communications.",
    features: ["Sponsor Pipeline & Contract Tracking","Fan Database & Segmentation","Member Renewal Management","Season Ticket Sales Pipeline","Event & Match Communication","Merchandise Sales Tracking","Sponsor ROI Reporting","Fan Loyalty Program Integration"],
    plans: [{"name":"Sports CRM","price":"₹34,999","desc":"Core sports commercial management","features":["Sponsor Management","Member Renewals","Fan Database","Basic Reports","4 Weeks Delivery"]},{"name":"Club CRM Pro","price":"₹64,999","desc":"Advanced sports business platform","features":["Season Ticket Pipeline","Sponsor ROI Reports","Loyalty Integration","Advanced Analytics","7 Weeks Delivery"]}]
  },
  'tournament-management': {
    title: "Tournament Management System",
    category: "websites",
    price: "₹24,999",
    desc: "A complete digital system to manage sports tournaments from team registration and draw creation to match scheduling, live scoring, and public leaderboards.",
    features: ["Online Team Registration & Entry Fees","Automated Draw & Bracket Generation","Match Schedule & Venue Management","Live Score Input & Updates","Public Leaderboard & Points Table","Referee/Umpire Assignment","Online Result Publishing","Digital Certificates & Medals Tracking"],
    plans: [{"name":"Tournament Manager","price":"₹24,999","desc":"Core tournament system","features":["Team Registration","Draw System","Match Schedule","Leaderboard","3 Weeks Delivery"]},{"name":"Tournament Pro","price":"₹49,999","desc":"Full tournament management suite","features":["Live Scoring","Referee Assignment","Online Results","Digital Certificates","6 Weeks Delivery"]}]
  },
  'saas-product-development': {
    title: "SaaS Product Development",
    category: "business-software",
    price: "₹74,999",
    desc: "We build production-ready SaaS platforms with multi-tenancy, subscription billing, onboarding flows, usage analytics, and enterprise security — ready to scale to thousands of users.",
    features: ["Multi-tenant Architecture","Subscription Billing (Stripe)","User Onboarding Flows","Role-based Access Control","Usage Analytics & Metering","API & Webhook System","Admin Super Dashboard","Enterprise Security (SSO, 2FA)"],
    plans: [{"name":"Silver Plan","price":"₹74,999","desc":"Basic SaaS (single tier)","features":["Single-tenant Architecture","Core Features","Stripe Billing","Admin Dashboard","8 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,49,999","desc":"Full multi-tenant SaaS","features":["Multi-tenant","Subscription Plans","Onboarding Flows","Analytics","API System","12 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise SaaS platform","features":["SSO/2FA","Usage Metering","Webhooks","White-label Option","DevOps Setup","18 Weeks Delivery"]}]
  },
  'mobile-app-development': {
    title: "Mobile App Development",
    category: "business-software",
    price: "₹59,999",
    desc: "From consumer apps to B2B tools, we build startup mobile apps with clean UX, fast performance, scalable backends, and app store optimization to get early adopters fast.",
    features: ["React Native/Flutter Development","Backend API Development","User Auth & Profiles","Push Notifications","Analytics & Crash Reporting","App Store Optimization","In-app Purchases","Social Login"],
    plans: [{"name":"Silver Plan","price":"₹59,999","desc":"MVP mobile app (Android)","features":["Android App","Core Features","Firebase Backend","Push Notifications","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full startup mobile app","features":["Android + iOS","Custom Backend","Analytics","In-app Purchases","Social Login","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,69,999","desc":"Enterprise-grade startup app","features":["All Platforms","Scalable Architecture","Advanced Analytics","CI/CD","ASO Optimization","10 Weeks Delivery"]}]
  },
  'ai-integration-services': {
    title: "AI Integration Services",
    category: "business-software",
    price: "₹29,999",
    desc: "Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.",
    features: ["AI Chatbot Development","Recommendation Engine","Document OCR & Processing","Predictive Analytics","Image Recognition","Natural Language Processing","OpenAI API Integration","Custom ML Model Training"],
    plans: [{"name":"Silver Plan","price":"₹29,999","desc":"Basic AI feature integration","features":["Chatbot or 1 AI Feature","OpenAI Integration","Basic Training","API Endpoint","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Custom AI module","features":["Custom AI Feature","Data Pipeline","Model Fine-tuning","Dashboard","API + Documentation","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise AI platform","features":["Multiple AI Features","Custom ML Models","Real-time Inference","MLOps Pipeline","8 Weeks Delivery"]}]
  },
  'branding-services': {
    title: "Branding Services",
    category: "business-software",
    price: "₹12,999",
    desc: "Complete brand identity design for startups — from logo and color palette to brand guidelines, pitch decks, and marketing collateral.",
    features: ["Logo Design & Variants","Brand Guidelines (Colors, Fonts)","Investor Pitch Deck Template","Business Cards & Letterheads","Social Media Templates","Website Brand Guidelines"],
    plans: [{"name":"Silver Plan","price":"₹12,999","desc":"Core brand identity package","features":["Logo Design","Basic Color Palette","Typography Guide","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Complete identity & pitch deck","features":["All Silver features","Brand Guidelines Book","Pitch Deck Template","Business Cards","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Full corporate brand system","features":["All Gold features","Social Media Templates","Letterhead & Invoice design","Stationery Pack","3 Weeks Delivery"]}]
  },
  'growth-consulting': {
    title: "Growth Consulting",
    category: "business-software",
    price: "₹19,999/mo",
    desc: "Work with a dedicated growth consultant to analyze your funnel, design product-led growth loops, run acquisition experiments, and optimize conversion rates.",
    features: ["Funnel & Conversion Audit","North Star Metric Setup","Viral Referral Loops Design","Product-Led Growth (PLG) Strategy","User Retention Analysis","Weekly Growth Sprints","Analytics Dashboard Setup"],
    plans: [{"name":"Silver Plan","price":"₹19,999/mo","desc":"Growth roadmap & advising","features":["Weekly 1-on-1 Consulting","Funnel Optimization Roadmap","Basic Analytics Setup","Cancel anytime"]},{"name":"Gold Plan","price":"₹39,999/mo","desc":"Active growth sprints execution","features":["All Silver features","PLG loops setup","2 A/B tests per month","Mixpanel dashboard setup","Cancel anytime"]},{"name":"Platinum Plan","price":"₹69,999/mo","desc":"Dedicated growth team integration","features":["All Gold features","Daily Slack coordination","Unlimited experiments execution","Custom tracking SDK build","Weekly funnel reviews"]}]
  }
};



export const calculatorConfigs = {
  'websites': {
    title: 'Website Price Estimator',
    description: 'Adjust the sliders and select custom integrations to calculate an instant quote.',
    sliders: [
      { id: 'pages', label: 'Number of Pages', min: 1, max: 50, defaultValue: 5, step: 1, unit: 'pages', pricePerUnit: 1200 }
    ],
    checkboxes: [
      { id: 'ecommerce', label: 'E-commerce Shop (Cart, Payment Gateway)', price: 7999 },
      { id: 'seo', label: 'Premium SEO Optimization Package', price: 3999 },
      { id: 'cms', label: 'Admin Dashboard (WordPress / CMS Setup)', price: 2999 },
      { id: 'customDesign', label: 'Bespoke Figma UI/UX Design Grid', price: 4999 }
    ],
    basePrice: 4999
  },
  'mobile-apps': {
    title: 'App Development Budget Planner',
    description: 'Configure your app platforms and features to estimate development costs.',
    sliders: [
      { id: 'screens', label: 'Estimated Screens', min: 5, max: 40, defaultValue: 10, step: 1, unit: 'screens', pricePerUnit: 2500 }
    ],
    checkboxes: [
      { id: 'ios', label: 'iOS App (Native Swift Build)', price: 19999 },
      { id: 'android', label: 'Android App (Native Kotlin Build)', price: 14999 },
      { id: 'backend', label: 'Custom Node.js Server & Cloud Database', price: 24999 },
      { id: 'chat', label: 'Real-time Chat & WebSockets', price: 11999 },
      { id: 'push', label: 'Smart Push Notifications Service', price: 4999 }
    ],
    basePrice: 24999
  },
  'digital-marketing': {
    title: 'Growth Budget Calculator',
    description: 'Customize channels and content frequencies to build a monthly growth strategy.',
    sliders: [
      { id: 'keywords', label: 'Target SEO Keywords', min: 5, max: 50, defaultValue: 15, step: 5, unit: 'keywords', pricePerUnit: 300 }
    ],
    checkboxes: [
      { id: 'smm', label: 'Social Media Management (12 posts/mo)', price: 6999 },
      { id: 'ads', label: 'Google & Facebook Paid Ads Optimization', price: 8999 },
      { id: 'leads', label: 'Lead Generation Form & Auto-call hooks', price: 4999 },
      { id: 'reels', label: 'Video Production Scripting (4 Reels/mo)', price: 5999 }
    ],
    basePrice: 5999
  },
  'whatsapp-marketing': {
    title: 'WhatsApp Automation Planner',
    description: 'Select message quotas and support automations to calculate your pricing.',
    sliders: [
      { id: 'broadcasts', label: 'Contacts for Broadcasts /mo', min: 1000, max: 50000, defaultValue: 5000, step: 1000, unit: 'contacts', pricePerUnit: 0.15 }
    ],
    checkboxes: [
      { id: 'chatbot', label: 'Interactive AI Chatbot Flow Builder', price: 5999 },
      { id: 'supportDesk', label: 'Multi-agent Shared Customer Inbox CRM', price: 3999 },
      { id: 'tickVerification', label: 'Official Green Tick Verification Aid', price: 2999 }
    ],
    basePrice: 3999
  },
  'gmb': {
    title: 'Local Visibility Planner',
    description: 'Select rank boosters and directories to establish local dominance.',
    sliders: [
      { id: 'citations', label: 'Local Directory Citations', min: 10, max: 100, defaultValue: 20, step: 5, unit: 'directories', pricePerUnit: 120 }
    ],
    checkboxes: [
      { id: 'optimize', label: 'Keyword Rich Profile Optimization', price: 1999 },
      { id: 'reviewWidget', label: 'Review Generator Widget on Website', price: 999 },
      { id: 'geoTag', label: 'Geo-Tagged Photos Setup', price: 1499 }
    ],
    basePrice: 1999
  },
  'branding-graphics': {
    title: 'Brand Assets Value Planner',
    description: 'Select branding modules to generate your custom design kit cost.',
    sliders: [
      { id: 'concepts', label: 'Logo Design Concepts', min: 2, max: 10, defaultValue: 3, step: 1, unit: 'concepts', pricePerUnit: 1000 }
    ],
    checkboxes: [
      { id: 'guidelines', label: 'Brand Guidelines Guidebook (Colors, Fonts)', price: 1999 },
      { id: 'stationery', label: 'Letterhead, Business Cards & Envelope Templates', price: 1499 },
      { id: 'socialMedia', label: 'Social Media Kit (Profile Grids, Cover Banners)', price: 2499 },
      { id: 'copyright', label: 'Trademark IP Filing Support Assistance', price: 3999 }
    ],
    basePrice: 1999
  },
  'ai-solutions': {
    title: 'AI Automation & Agents Planner',
    description: 'Configure custom cognitive agents and data hookups for your business.',
    sliders: [
      { id: 'workflows', label: 'Automated Multi-Agent Workflows', min: 1, max: 10, defaultValue: 2, step: 1, unit: 'workflows', pricePerUnit: 8000 }
    ],
    checkboxes: [
      { id: 'gpt4', label: 'Upgrade to GPT-4o Enterprise Engine API', price: 9999 },
      { id: 'whatsappIntegration', label: 'AI Voice & Text WhatsApp Response Bot', price: 12999 },
      { id: 'ragKnowledge', label: 'Custom RAG (Database/PDF Document reader)', price: 14999 },
      { id: 'analyticsBoard', label: 'Live AI Agent Usage & Analytics Screen', price: 4999 }
    ],
    basePrice: 14999
  },
  'business-software': {
    title: 'ERP & CRM Solution Estimator',
    description: 'Choose panels and backend specifications to estimate software build cost.',
    sliders: [
      { id: 'users', label: 'Supported CRM/ERP Users', min: 5, max: 100, defaultValue: 10, step: 5, unit: 'user logins', pricePerUnit: 500 }
    ],
    checkboxes: [
      { id: 'pos', label: 'Live Billing & POS Integration', price: 14999 },
      { id: 'hrms', label: 'HRMS (Employee payroll, attendance)', price: 19999 },
      { id: 'inventory', label: 'Real-time Stock Alert Inventory', price: 11999 },
      { id: 'webhooks', label: 'External Accounting APIs Integration', price: 9999 }
    ],
    basePrice: 44999
  },
  'industry-solutions': {
    title: 'Niche Vertical SaaS Planner',
    description: 'Choose your business sector modules to calculate a custom portal price.',
    sliders: [
      { id: 'listings', label: 'Listing Catalog Slots / Slots Limit', min: 50, max: 1000, defaultValue: 100, step: 50, unit: 'slots', pricePerUnit: 20 }
    ],
    checkboxes: [
      { id: 'bookings', label: 'Online Slot Scheduler & Booking Engine', price: 7999 },
      { id: 'smsAlerts', label: 'Integrated Twilio SMS Alert Reminders', price: 3999 },
      { id: 'pdfReports', label: 'Automated Billing Invoice PDF generator', price: 4999 },
      { id: 'mapLocate', label: 'Geo-Map Leaflet Integration', price: 2999 }
    ],
    basePrice: 19999
  },
  'hosting-domain': {
    title: 'Cloud Infrastructure Planner',
    description: 'Adjust server metrics and cloud support options.',
    sliders: [
      { id: 'space', label: 'Allocated Cloud Storage (GB)', min: 10, max: 200, defaultValue: 30, step: 10, unit: 'GB', pricePerUnit: 50 }
    ],
    checkboxes: [
      { id: 'vps', label: 'Dedicated VPS Hosting (Root Admin Panel)', price: 4999 },
      { id: 'aws', label: 'High Availability Multi-zone Backup Node', price: 14999 },
      { id: 'businessEmails', label: '25 Professional Business Email Accounts', price: 1499 },
      { id: 'cdnSpeed', label: 'Cloudflare Enterprise CDN & Firewall Tuning', price: 2999 }
    ],
    basePrice: 2999
  }
};

export const faqsDatabase = {
  'websites': [
    { q: 'Will the website work perfectly on mobile screens?', a: 'Absolutely. 100% of our website layouts are fully responsive, meaning they look and work beautifully on mobile phones, tablets, laptops, and wide desktop screens.' },
    { q: 'Is hosting and domain search included in the pricing plans?', a: 'Yes. Our Silver, Gold, and Platinum plans include 1 Year of High Performance SSD Hosting and a .com/.in domain name without extra charges.' },
    { q: 'Can I edit the website contents myself without code knowledge?', a: 'Yes. For our Gold plans, we set up an easy WordPress or Custom CMS admin dashboard. You can modify texts, images, and add new pages without touching a line of code.' }
  ],
  'mobile-apps': [
    { q: 'Do you submit the mobile apps to Google Play Store and Apple App Store?', a: 'Yes. We take full responsibility for setting up your developer profiles, compiling native builds, and getting the applications approved and listed on both stores.' },
    { q: 'Which framework do you use to build cross-platform apps?', a: 'We construct cross-platform apps using Flutter or React Native, giving you a high-performance, single-codebase solution that runs smoothly on both iOS and Android.' },
    { q: 'Are push notifications supported?', a: 'Yes, we integrate Firebase Cloud Messaging (FCM) so you can send target alerts, updates, and custom notifications to all your app users instantly.' }
  ],
  'digital-marketing': [
    { q: 'How long does it take to see results from SEO campaigns?', a: 'SEO is a gradual organic process. While technical code fixes and speed audits provide immediate performance boosts, keyword ranking increases and traffic gains usually take 2 to 4 months of consistent on-page/off-page efforts.' },
    { q: 'Do the marketing plan prices include the paid ad spend budgets?', a: 'No, our plans cover agency setup, graphics creation, target audience research, and copy execution fees. The budget spent directly on Facebook Ads or Google AdWords is paid directly by the client.' }
  ],
  'whatsapp-marketing': [
    { q: 'What is the benefit of using the Official WhatsApp Business API?', a: 'The official API allows you to send mass broadcasts to users who haven’t saved your number without risk of phone number blocking, integrate interactive auto-replies/bots, and apply for the official WhatsApp Green Tick.' },
    { q: 'Do you help in getting the verified Green Tick?', a: 'Yes. We guide you through the Meta Business Verification process and submit the official application for the WhatsApp verified badge.' }
  ],
  'gmb': [
    { q: 'How long does Google Business Profile verification take?', a: 'Google profile verification methods vary (Email, Phone, Video, or Postcard). Postcard verification can take up to 14 days, while digital verification methods are typically completed within 24 to 72 hours once setup is done.' },
    { q: 'Can you help remove fake negative reviews on Google Maps?', a: 'We help you flag policy-violating spam reviews directly to Google Support and set up automated responses/widgets to acquire positive client reviews to balance out the score.' }
  ],
  'branding-graphics': [
    { q: 'Who owns the final copyrights to the logo designs?', a: 'Once the project is completed and paid, you retain 100% intellectual property ownership and copyright of the final vector design concepts.' },
    { q: 'What design file formats will I receive?', a: 'You will receive print-ready vector source files (.AI, .EPS, .SVG) along with high-definition digital formats (.PNG transparent, .PDF, .JPG).' }
  ],
  'ai-solutions': [
    { q: 'Can the AI chatbot connect with our CRM or WhatsApp numbers?', a: 'Yes. We build custom API endpoints, using webhooks to trigger data synchronization with CRMs like Salesforce, HubSpot, or WhatsApp API chats.' },
    { q: 'How do you train the AI agent on our company documentation?', a: 'We employ Retrieval-Augmented Generation (RAG). Your PDFs, website text, and docs are embedded into a vector database, so the AI refers strictly to verified details.' }
  ],
  'business-software': [
    { q: 'Can we migrate our existing offline Excel files into the CRM/ERP?', a: 'Yes. We write custom ETL scripts to map, sanitize, and import your existing legacy XLS or CSV sheets into the new Postgres or MySQL database.' },
    { q: 'What server scaling setup is provided?', a: 'We deploy custom ERPs on managed SSD virtual private servers (VPS) with hourly database failover sync, secure SSH protocols, and performance metrics dashboards.' }
  ],
  'industry-solutions': [
    { q: 'Can you integrate doctor consultation video calling?', a: 'Yes. For clinic portals, we integrate WebRTC or Zoom Web SDK engines for secure, low-latency in-browser patient video consultations.' },
    { q: 'Is online fee payment integration secure?', a: 'Yes, we use secure PCI-DSS compliant payment gateways (Razorpay, Stripe, UPI links) with automated fee receipt generation.' }
  ],
  'hosting-domain': [
    { q: 'Do you provide round-the-clock server support?', a: 'Yes, we set up continuous server health checks. If RAM usage spikes or a node crashes, our automatic recovery scripts trigger and our on-call sysadmins are immediately notified.' },
    { q: 'Can we move our hosting from GoDaddy/Hostinger to your cloud?', a: 'Yes, we offer 100% free server migration services. We move your files, databases, and emails with zero site downtime.' }
  ]
};

export const testimonialsDatabase = {
  'websites': [
    { name: 'Rajesh Kumar', role: 'Founder, OrganicBites', content: 'Bubbles Media built our e-commerce portal and it handles over 500 orders a day with zero lag. The checkout flow is extremely smooth!' },
    { name: 'Sneha Patel', role: 'Marketing Dir, Apex Builders', content: 'Our company website looks incredibly professional. The loading speed on mobile is under 1.5 seconds, which improved our Google ranks.' }
  ],
  'mobile-apps': [
    { name: 'Amit Verma', role: 'CEO, FitTrack India', content: 'The cross-platform app Flutter build is gorgeous. Our user reviews on Play Store jumped from 3.4 to 4.8 star average!' }
  ],
  'digital-marketing': [
    { name: 'Vikram Mehta', role: 'Co-Founder, EduQuest', content: 'Their SEO package boosted our organic lead count by 320% in just 4 months. The regular progress reports are detailed and insightful.' }
  ],
  'whatsapp-marketing': [
    { name: 'Rohan Sharma', role: 'Ops Lead, QuickCart', content: 'Setting up the API chatbot automated 70% of our routine tracking enquiries. Our support agents can focus on key sales tickets now.' }
  ],
  'gmb': [
    { name: 'Dr. Priya Shah', role: 'Chief Dentist, DentalCare Clinic', content: 'Optimizing our Maps listing brought in a surge of walk-in patients. We rank in the top 3 spots now for dental services in our area!' }
  ],
  'branding-graphics': [
    { name: 'Karan Johar', role: 'Partner, Bistro99', content: 'The visual branding, logo kit, and menu graphic layout they crafted captures the exact cozy, modern vibe of our restaurant.' }
  ],
  'ai-solutions': [
    { name: 'Nikhil Sen', role: 'CTO, LogiMove Solutions', content: 'The custom GPT support bot we launched resolved 4,000 queries in the first month with a 98% satisfaction rate. Simply incredible.' }
  ],
  'business-software': [
    { name: 'Sanjay Dutt', role: 'Director, Prime Distributors', content: 'Their custom inventory and billing POS CRM saved our team hours of manual entry. No more invoice mismatch errors!' }
  ],
  'industry-solutions': [
    { name: 'Meera Deshmukh', role: 'Principal, St. Jude School', content: 'The custom student database and online fee payment page has made school administration extremely transparent for both parents and accounts staff.' }
  ],
  'hosting-domain': [
    { name: 'Devendra Joshi', role: 'Systems Head, FinTech Secure', content: 'Migrating to their high availability AWS cluster solved our site crash issues during marketing campaigns. Highly recommended!' }
  ]
};
