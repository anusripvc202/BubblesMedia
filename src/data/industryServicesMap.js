/**
 * Maps each industry card name to a list of relevant service IDs from serviceDatabase.
 */
export const industryServicesMap = {
  'Doctors & Healthcare': {
    color: '#0284c7',
    bg: '#f0f9ff',
    tagline: 'Digital tools tailored for clinics, hospitals & healthcare professionals',
    services: [
      { id: 'hospital-website-dev', label: 'Hospital Website Development' },
      { id: 'appointment-booking', label: 'Appointment Booking System' },
      { id: 'telemedicine-platform', label: 'Telemedicine Platform' },
      { id: 'patient-management', label: 'Patient Management System' },
      { id: 'medical-billing', label: 'Medical Billing Software' },
      { id: 'healthcare-mobile-app', label: 'Healthcare Mobile App' },
      { id: 'hospital-seo', label: 'SEO for Hospitals' },
      { id: 'clinic-digital-marketing', label: 'Digital Marketing for Clinics' },
    ]
  },
  'Schools & Colleges': {
    color: '#6366f1',
    bg: '#eef2ff',
    tagline: 'Smart academic portals, fee management & e-learning platforms',
    services: [
      { id: 'school-website', label: 'School Website Development' },
      { id: 'student-management', label: 'Student Management System' },
      { id: 'online-exam-portal', label: 'Online Examination Portal' },
      { id: 'learning-management-system', label: 'Learning Management System (LMS)' },
      { id: 'attendance-management', label: 'Attendance Management' },
      { id: 'fee-management', label: 'Fee Management System' },
      { id: 'school-mobile-app', label: 'School Mobile App' },
      { id: 'education-marketing', label: 'Education Marketing Services' },
    ]
  },
  'Real Estate & Builders': {
    color: '#f97316',
    bg: '#fff7ed',
    tagline: 'Property listing portals, lead generation & builder marketing',
    services: [
      { id: 'property-listing-portal', label: 'Property Listing Portal' },
      { id: 'crm-for-builders', label: 'CRM for Builders' },
      { id: 'virtual-property-tours', label: 'Virtual Property Tours' },
      { id: 'lead-management-system', label: 'Lead Management System' },
      { id: 'property-booking-platform', label: 'Property Booking Platform' },
      { id: 'real-estate-mobile-app', label: 'Real Estate Mobile App' },
      { id: 'seo-for-real-estate', label: 'SEO for Real Estate' },
      { id: 'real-estate-digital-marketing', label: 'Digital Marketing Services' },
    ]
  },
  'E-commerce Stores': {
    color: '#ec4899',
    bg: '#fdf2f8',
    tagline: 'Online retail platforms, inventory management & payment gateways',
    services: [
      { id: 'ecommerce-web-dev', label: 'Ecommerce Website Development' },
      { id: 'multi-vendor-marketplace', label: 'Multi Vendor Marketplace' },
      { id: 'shopify-store-dev', label: 'Shopify Store Development' },
      { id: 'woocommerce-dev', label: 'WooCommerce Development' },
      { id: 'payment-gateway-integration', label: 'Payment Gateway Integration' },
      { id: 'inventory-management', label: 'Inventory Management' },
      { id: 'order-management-system', label: 'Order Management System' },
      { id: 'product-catalog-management', label: 'Product Catalog Management' },
      { id: 'ecommerce-mobile-app', label: 'Ecommerce Mobile App' },
      { id: 'seo-for-ecommerce', label: 'SEO for Ecommerce' },
      { id: 'marketplace-development', label: 'Marketplace Development' },
    ]
  },
  'Restaurants & Cafes': {
    color: '#d97706',
    bg: '#fffbeb',
    tagline: 'Digital menus, online ordering & restaurant marketing',
    services: [
      { id: 'restaurant-web-dev', label: 'Restaurant Website Development' },
      { id: 'table-reservation-system', label: 'Online Table Reservation System' },
      { id: 'food-ordering-system', label: 'Food Ordering System' },
      { id: 'restaurant-pos-system', label: 'Restaurant POS System' },
      { id: 'qr-menu-solution', label: 'QR Menu Solution' },
      { id: 'delivery-management-system', label: 'Delivery Management System' },
      { id: 'loyalty-program', label: 'Loyalty Program' },
      { id: 'restaurant-mobile-app', label: 'Restaurant Mobile App' },
      { id: 'restaurant-crm', label: 'Restaurant CRM' },
      { id: 'restaurant-digital-marketing', label: 'Restaurant Digital Marketing' },
    ]
  },
  'Salons & Wellness': {
    color: '#10b981',
    bg: '#ecfdf5',
    tagline: 'Appointment booking systems, loyalty programs & beauty marketing',
    services: [
      { id: 'salon-web-dev', label: 'Salon Website Development' },
      { id: 'salon-appointment-booking', label: 'Appointment Booking System' },
      { id: 'salon-management-software', label: 'Salon Management Software' },
      { id: 'spa-management-system', label: 'Spa Management System' },
      { id: 'membership-management', label: 'Membership Management' },
      { id: 'customer-crm', label: 'Customer CRM' },
      { id: 'billing-software', label: 'Billing Software' },
      { id: 'wellness-mobile-app', label: 'Wellness Mobile App' },
      { id: 'marketing-automation', label: 'Marketing Automation' },
      { id: 'salon-seo-services', label: 'Salon SEO Services' },
    ]
  },
  'Travel & Tourism': {
    color: '#06b6d4',
    bg: '#ecfeff',
    tagline: 'Travel booking portals, tour packages & destination marketing',
    services: [
      { id: 'ecommerce-websites', label: 'Tour Package Booking Portal' },
      { id: 'business-websites', label: 'Travel Agency Website' },
      { id: 'mobile-app-dev', label: 'Travel & Booking Mobile App' },
      { id: 'seo-services', label: 'SEO for Travel Agencies' },
      { id: 'social-media-marketing', label: 'Destination Marketing Campaigns' },
      { id: 'whatsapp-marketing', label: 'WhatsApp Tour Enquiry Automation' },
      { id: 'ai-agents', label: 'AI Trip Planning Chatbot' },
      { id: 'google-business-profile', label: 'Google Maps for Travel Office' },
    ]
  },
  'Law Firms & Advocates': {
    color: '#4b5563',
    bg: '#f3f4f6',
    tagline: 'Legal portals, case tracking & professional firm marketing',
    services: [
      { id: 'law-firm-website-development', label: 'Law Firm Website Development' },
      { id: 'case-management-system', label: 'Case Management System' },
      { id: 'legal-crm', label: 'Legal CRM' },
      { id: 'legal-appointment-booking', label: 'Appointment Booking' },
      { id: 'document-management-system', label: 'Document Management System' },
      { id: 'legal-consultation-portal', label: 'Legal Consultation Portal' },
      { id: 'client-management-system', label: 'Client Management System' },
      { id: 'billing-invoice-management', label: 'Billing & Invoice Management' },
      { id: 'legal-mobile-app', label: 'Legal Mobile App' },
      { id: 'law-firm-seo-services', label: 'Law Firm SEO Services' },
    ]
  },
  'Manufacturing & Industries': {
    color: '#78716c',
    bg: '#f5f5f4',
    tagline: 'B2B catalogs, distributor portals & industrial ERP solutions',
    services: [
      { id: 'manufacturing-erp', label: 'Manufacturing ERP' },
      { id: 'inventory-management', label: 'Inventory Management' },
      { id: 'production-planning-system', label: 'Production Planning System' },
      { id: 'supply-chain-management', label: 'Supply Chain Management' },
      { id: 'warehouse-management', label: 'Warehouse Management' },
      { id: 'vendor-management', label: 'Vendor Management' },
      { id: 'crm-for-manufacturing', label: 'CRM for Manufacturing' },
      { id: 'quality-control-software', label: 'Quality Control Software' },
      { id: 'factory-automation-dashboard', label: 'Factory Automation Dashboard' },
      { id: 'industrial-website-development', label: 'Industrial Website Development' },
    ]
  },
  'NGOs & Non Profits': {
    color: '#8b5cf6',
    bg: '#f5f3ff',
    tagline: 'Donation portals, fundraising campaigns & awareness marketing',
    services: [
      { id: 'ngo-website-development', label: 'NGO Website Development' },
      { id: 'donation-management-system', label: 'Donation Management System' },
      { id: 'volunteer-management', label: 'Volunteer Management' },
      { id: 'event-management-platform', label: 'Event Management Platform' },
      { id: 'membership-management', label: 'Membership Management' },
      { id: 'fundraising-portal', label: 'Fundraising Portal' },
      { id: 'campaign-management', label: 'Campaign Management' },
      { id: 'ngo-mobile-app', label: 'NGO Mobile App' },
      { id: 'crm-for-ngos', label: 'CRM for NGOs' },
      { id: 'digital-marketing-for-ngos', label: 'Digital Marketing for NGOs' },
    ]
  },
    'Startups & Entrepreneurs': {
    color: '#3b82f6',
    bg: '#eff6ff',
    tagline: 'MVP development, product engineering & startup branding',
    services: [
      { id: 'startup-website', label: 'Startup Website Development' },
      { id: 'mvp-development', label: 'MVP Development' },
      { id: 'saas-product-development', label: 'SaaS Product Development' },
      { id: 'crm-development', label: 'CRM Development' },
      { id: 'mobile-app-development', label: 'Mobile App Development' },
      { id: 'ai-integration-services', label: 'AI Integration Services' },
      { id: 'cloud-solutions', label: 'Cloud Solutions' },
      { id: 'branding-services', label: 'Branding Services' },
      { id: 'seo-services', label: 'SEO Services' },
      { id: 'digital-marketing', label: 'Digital Marketing' },
      { id: 'growth-consulting', label: 'Growth Consulting' },
    ]
  },

  'Travel & Tourism': {
    color: '#0ea5e9',
    bg: '#e0f2fe',
    tagline: 'Digital solutions for travel agencies, tour operators & hotels',
    services: [
      { id: 'travel-booking-website', label: 'Travel Booking Website' },
      { id: 'tour-package-management', label: 'Tour Package Management' },
      { id: 'hotel-booking-system', label: 'Hotel Booking System' },
      { id: 'flight-booking-integration', label: 'Flight Booking Integration' },
      { id: 'travel-crm', label: 'Travel CRM' },
      { id: 'travel-mobile-app', label: 'Travel Mobile App' },
      { id: 'visa-management-system', label: 'Visa Management System' },
      { id: 'tour-guide-portal', label: 'Tour Guide Portal' },
      { id: 'travel-marketing-services', label: 'Travel Marketing Services' },
      { id: 'seo-for-travel-business', label: 'SEO for Travel Business' },
    ]
  },
  'More Industries': {
    color: '#1e293b',
    bg: '#f8fafc',
    tagline: 'Custom digital solutions for any niche business domain',
    services: [
      { id: 'business-websites', label: 'Custom Business Website' },
      { id: 'ecommerce-websites', label: 'Online Store Development' },
      { id: 'mobile-app-dev', label: 'Custom Mobile App' },
      { id: 'custom-software', label: 'Bespoke Business Software' },
      { id: 'ai-agents', label: 'AI Automation & Chatbots' },
      { id: 'cloud-hosting', label: 'Cloud Hosting & Infrastructure' },
      { id: 'logo-branding', label: 'Brand Identity & Design' },
      { id: 'social-media-marketing', label: 'Digital Marketing Services' },
    ]
  },
  'Finance & Banking': {
    color: '#1d4ed8',
    bg: '#eff6ff',
    tagline: 'Fintech apps, banking portals & financial management solutions',
    services: [
      { id: 'fintech-app-development', label: 'Fintech App Development' },
      { id: 'banking-website', label: 'Banking & Finance Website' },
      { id: 'loan-management-software', label: 'Loan Management Software' },
      { id: 'nbfc-portal', label: 'NBFC / Lending Portal' },
      { id: 'investment-platform', label: 'Investment Platform' },
      { id: 'finance-crm', label: 'Finance CRM' },
      { id: 'digital-wallet-app', label: 'Digital Wallet App' },
      { id: 'financial-analytics-dashboard', label: 'Financial Analytics Dashboard' },
    ]
  },
  'Insurance Solutions': {
    color: '#0f766e',
    bg: '#f0fdfa',
    tagline: 'Policy portals, claims management & insurance CRM systems',
    services: [
      { id: 'insurance-website', label: 'Insurance Company Website' },
      { id: 'policy-management-system', label: 'Policy Management System' },
      { id: 'claims-management', label: 'Claims Management System' },
      { id: 'insurance-agent-portal', label: 'Insurance Agent Portal' },
      { id: 'insurance-crm', label: 'Insurance CRM' },
      { id: 'insurance-mobile-app', label: 'Insurance Mobile App' },
      { id: 'insurance-comparison-portal', label: 'Insurance Comparison Portal' },
    ]
  },
  'Logistics Solutions': {
    color: '#b45309',
    bg: '#fffbeb',
    tagline: 'Fleet management, shipment tracking & logistics automation',
    services: [
      { id: 'logistics-website', label: 'Logistics Company Website' },
      { id: 'fleet-management-system', label: 'Fleet Management System' },
      { id: 'shipment-tracking-platform', label: 'Shipment Tracking Platform' },
      { id: 'transport-management-system', label: 'Transport Management System (TMS)' },
      { id: 'delivery-tracking-app', label: 'Delivery Tracking App' },
      { id: 'logistics-crm', label: 'Logistics CRM' },
      { id: 'route-optimization-software', label: 'Route Optimization Software' },
    ]
  },
  'Automobile Solutions': {
    color: '#374151',
    bg: '#f9fafb',
    tagline: 'Dealership portals, service management & auto e-commerce',
    services: [
      { id: 'automobile-dealership-website', label: 'Automobile Dealership Website' },
      { id: 'vehicle-inventory-management', label: 'Vehicle Inventory Management' },
      { id: 'car-booking-system', label: 'Car Booking & Test Drive System' },
      { id: 'service-center-management', label: 'Service Center Management' },
      { id: 'automobile-mobile-app', label: 'Automobile Mobile App' },
      { id: 'auto-parts-ecommerce', label: 'Auto Parts E-commerce Store' },
      { id: 'automobile-crm', label: 'Automobile CRM' },
    ]
  },
  'Fitness Solutions': {
    color: '#16a34a',
    bg: '#f0fdf4',
    tagline: 'Gym management, member apps & online fitness platforms',
    services: [
      { id: 'fitness-gym-website', label: 'Gym & Fitness Center Website' },
      { id: 'gym-member-management', label: 'Gym Member Management Software' },
      { id: 'online-class-booking', label: 'Online Class Booking System' },
      { id: 'fitness-mobile-app', label: 'Fitness Mobile App' },
      { id: 'workout-nutrition-app', label: 'Workout & Nutrition Tracking App' },
      { id: 'gym-crm', label: 'Gym CRM' },
      { id: 'fitness-digital-marketing', label: 'Fitness Digital Marketing' },
    ]
  },
  'Event Management Solutions': {
    color: '#7c3aed',
    bg: '#faf5ff',
    tagline: 'Event company websites, booking portals & vendor management',
    services: [
      { id: 'event-company-website', label: 'Event Company Website' },
      { id: 'event-booking-platform', label: 'Event Booking Platform' },
      { id: 'ticketing-rsvp-system', label: 'Ticketing & RSVP System' },
      { id: 'event-vendor-management', label: 'Event Vendor Management' },
      { id: 'event-mobile-app', label: 'Event Mobile App' },
      { id: 'event-crm', label: 'Event CRM' },
      { id: 'digital-invitations-platform', label: 'Digital Invitations Platform' },
    ]
  },
  'Agriculture Solutions': {
    color: '#65a30d',
    bg: '#f7fee7',
    tagline: 'AgriTech portals, farm management & crop monitoring systems',
    services: [
      { id: 'agri-website', label: 'Agriculture Company Website' },
      { id: 'farm-management-system', label: 'Farm Management System' },
      { id: 'crop-monitoring-dashboard', label: 'Crop Monitoring Dashboard' },
      { id: 'agriculture-ecommerce', label: 'Agricultural E-commerce Store' },
      { id: 'cold-chain-management', label: 'Cold Chain Management System' },
      { id: 'farmer-mobile-app', label: 'Farmer Mobile App' },
      { id: 'agriculture-crm', label: 'Agriculture CRM' },
    ]
  },
  'Recruitment Solutions': {
    color: '#0369a1',
    bg: '#e0f2fe',
    tagline: 'Job portals, ATS systems & recruitment agency platforms',
    services: [
      { id: 'recruitment-agency-website', label: 'Recruitment Agency Website' },
      { id: 'job-portal-development', label: 'Job Portal Development' },
      { id: 'applicant-tracking-system', label: 'Applicant Tracking System (ATS)' },
      { id: 'hr-management-system', label: 'HR Management System' },
      { id: 'recruitment-crm', label: 'Recruitment CRM' },
      { id: 'candidate-mobile-app', label: 'Candidate Mobile App' },
      { id: 'recruitment-marketing', label: 'Recruitment Marketing Services' },
    ]
  },
  'Hospitality Solutions': {
    color: '#b45309',
    bg: '#fef3c7',
    tagline: 'Hotel booking engines, PMS & hospitality management systems',
    services: [
      { id: 'hotel-website-development', label: 'Hotel & Resort Website' },
      { id: 'hotel-booking-engine', label: 'Hotel Booking Engine' },
      { id: 'property-management-system', label: 'Property Management System (PMS)' },
      { id: 'restaurant-management-system', label: 'Restaurant Management System' },
      { id: 'loyalty-program-app', label: 'Guest Loyalty Program App' },
      { id: 'hospitality-crm', label: 'Hospitality CRM' },
      { id: 'revenue-management-system', label: 'Revenue Management System' },
    ]
  },
  'Media & Entertainment Solutions': {
    color: '#dc2626',
    bg: '#fff1f2',
    tagline: 'OTT platforms, content portals & entertainment mobile apps',
    services: [
      { id: 'media-company-website', label: 'Media Company Website' },
      { id: 'content-streaming-platform', label: 'Content Streaming Platform' },
      { id: 'ott-app-development', label: 'OTT App Development' },
      { id: 'digital-magazine-portal', label: 'Digital Magazine & News Portal' },
      { id: 'talent-artist-portal', label: 'Talent & Artist Portfolio Portal' },
      { id: 'media-crm', label: 'Media & Publisher CRM' },
      { id: 'entertainment-marketing', label: 'Entertainment Digital Marketing' },
    ]
  },
  'Sports Management Solutions': {
    color: '#ea580c',
    bg: '#fff7ed',
    tagline: 'Sports club portals, team management & athlete performance apps',
    services: [
      { id: 'sports-club-website', label: 'Sports Club & Academy Website' },
      { id: 'team-management-system', label: 'Team Management System' },
      { id: 'sports-booking-platform', label: 'Sports Venue Booking Platform' },
      { id: 'athlete-performance-app', label: 'Athlete Performance App' },
      { id: 'sports-ecommerce', label: 'Sports Equipment E-commerce' },
      { id: 'sports-crm', label: 'Sports CRM' },
      { id: 'tournament-management', label: 'Tournament Management System' },
    ]
  }
};
