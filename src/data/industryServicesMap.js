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
      { id: 'custom-software', label: 'Manufacturing ERP System' },
      { id: 'ecommerce-websites', label: 'B2B Product Catalog Website' },
      { id: 'business-websites', label: 'Industrial Company Profile Site' },
      { id: 'custom-software', label: 'Inventory & Supply Chain Software' },
      { id: 'seo-services', label: 'Industrial B2B SEO' },
      { id: 'cloud-hosting', label: 'Secure Industrial Cloud Hosting' },
      { id: 'logo-branding', label: 'Industrial Brand Identity' },
      { id: 'social-media-marketing', label: 'LinkedIn B2B Marketing' },
    ]
  },
  'NGOs & Non Profits': {
    color: '#8b5cf6',
    bg: '#f5f3ff',
    tagline: 'Donation portals, fundraising campaigns & awareness marketing',
    services: [
      { id: 'business-websites', label: 'NGO / Non-Profit Website' },
      { id: 'ecommerce-websites', label: 'Online Donation Portal' },
      { id: 'social-media-marketing', label: 'Cause Awareness Campaigns' },
      { id: 'logo-branding', label: 'NGO Brand Identity & Design' },
      { id: 'whatsapp-marketing', label: 'Volunteer & Donor WhatsApp Campaigns' },
      { id: 'seo-services', label: 'SEO for NGOs' },
      { id: 'mobile-app-dev', label: 'Volunteer & Donor Mobile App' },
      { id: 'cloud-hosting', label: 'Reliable NGO Website Hosting' },
    ]
  },
  'Startups & Entrepreneurs': {
    color: '#3b82f6',
    bg: '#eff6ff',
    tagline: 'MVP development, product engineering & startup branding',
    services: [
      { id: 'business-websites', label: 'Startup Landing Page / Website' },
      { id: 'mobile-app-dev', label: 'MVP Mobile App Development' },
      { id: 'ai-agents', label: 'AI-Powered Product Feature' },
      { id: 'logo-branding', label: 'Startup Brand Identity & Logo' },
      { id: 'custom-software', label: 'SaaS / Product Engineering' },
      { id: 'seo-services', label: 'Product SEO & Content Strategy' },
      { id: 'social-media-marketing', label: 'Startup Growth Marketing' },
      { id: 'cloud-hosting', label: 'Scalable Cloud Infrastructure' },
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
  }
};
