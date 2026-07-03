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
