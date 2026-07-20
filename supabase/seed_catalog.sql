-- ============================================================
-- SEED CATALOG DATA FOR BUBBLESMEDIA
-- ============================================================

-- Clean existing data
truncate table public.calculator_configs cascade;
truncate table public.faqs cascade;
truncate table public.services cascade;
truncate table public.categories cascade;
truncate table public.testimonials cascade;

insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('websites', 'Websites', 'Business, E-commerce, Portfolio', 'Stunning, fast, and secure websites built to convert visitors into loyal customers.', 'linear-gradient(135deg, #1a6cf7 0%, #0049c6 60%, #002f8c 100%)', '#1a6cf7', '[{"label":"Websites Launched","value":"450+"},{"label":"Average Speed Index","value":"98%"},{"label":"Mobile Optimized","value":"100%"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>         <line x1="8" y1="21" x2="16" y2="21"></line>         <line x1="12" y1="17" x2="12" y2="21"></line>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('mobile-apps', 'Mobile Apps', 'Android, iOS, Cross Platform', 'Deliver premium native experience directly into your clients’ hands.', 'linear-gradient(135deg, #64748b 0%, #475569 60%, #334155 100%)', '#64748b', '[{"label":"Apps in App Store","value":"80+"},{"label":"Active Users","value":"2M+"},{"label":"User Rating","value":"4.8★"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>         <line x1="12" y1="18" x2="12.01" y2="18"></line>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('digital-marketing', 'Digital Marketing', 'SEO, SMM, Ads, Email Marketing', 'Hyper-targeted growth campaigns designed to maximize ROI and customer acquisition.', 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)', '#ee2a7b', '[{"label":"Ad Spend Managed","value":"₹5Cr+"},{"label":"Organic Traffic Boost","value":"300%"},{"label":"Lead Conversions","value":"150k+"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('whatsapp-marketing', 'WhatsApp Marketing', 'Automation, API, Chatbot', 'Engage customers instantly using the official high-throughput WhatsApp API & automated bots.', 'linear-gradient(135deg, #25d366 0%, #128c7e 60%, #075e54 100%)', '#25d366', '[{"label":"Messages Sent/day","value":"500k+"},{"label":"API Accounts Setup","value":"120+"},{"label":"Support Cost Saved","value":"45%"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('gmb', 'Google Business (GMB)', 'Profile Setup & Optimization', 'Claim the top spot in local search maps when clients look for services near them.', 'linear-gradient(135deg, #4285F4 0%, #34A853 35%, #FBBC05 65%, #EA4335 100%)', '#4285F4', '[{"label":"Ranked in Top 3","value":"92%"},{"label":"Local Directions Generated","value":"1M+"},{"label":"Review Score Avg","value":"4.9★"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>         <circle cx="12" cy="10" r="3"></circle>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('branding-graphics', 'Branding & Graphics', 'Logo, Brand Identity, Print', 'Exceptional, memorable graphic designs that shape how the world perceives your brand.', 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)', '#ff416c', '[{"label":"Logos Crafted","value":"1,200+"},{"label":"Complete Brandings","value":"250+"},{"label":"Revisions Allowed","value":"Unlimited"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>         <path d="M12 6V12L16 14"></path>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('ai-solutions', 'AI Solutions', 'AI Agents, Automation, Chatbot', 'Supercharge operational efficiency and automate user interactions with GPT-4 custom agents.', 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)', '#0072ff', '[{"label":"Agents Deployed","value":"60+"},{"label":"Queries Answered/day","value":"20k+"},{"label":"Task Automation Accuracy","value":"99%"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>         <line x1="6" y1="10" x2="18" y2="10"></line>         <line x1="10" y1="14" x2="14" y2="14"></line>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('business-software', 'Business Software', 'CRM, ERP, POS, HRMS', 'Custom business management tools tailored to integrate seamlessly with your offline workflow.', 'linear-gradient(135deg, #141e30 0%, #243b55 100%)', '#243b55', '[{"label":"Active ERP users","value":"10k+"},{"label":"Daily Transactions","value":"50k+"},{"label":"Client Retention Rate","value":"98%"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>         <line x1="8" y1="21" x2="16" y2="21"></line>         <line x1="12" y1="17" x2="12" y2="21"></line>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('industry-solutions', 'Industry Solutions', 'Doctors, Schools, Real Estate', 'Highly targeted SaaS and portal setups tailored specifically for niche micro-verticals.', 'linear-gradient(135deg, #7b2ff7 0%, #f107a3 100%)', '#7b2ff7', '[{"label":"Schools Managed","value":"40+"},{"label":"Active Real Estate Sites","value":"110+"},{"label":"Doctors Booking Apps","value":"85+"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>         <circle cx="9" cy="7" r="4"></circle>         <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;
insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('hosting-domain', 'Hosting & Domain', 'Domain, Hosting, SSL, Email', 'Bulletproof, lightning-fast hosting and domain services with 24/7 dedicated system monitoring.', 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', '#11998e', '[{"label":"Server Uptime Guarantee","value":"99.99%"},{"label":"Active Domains Hosted","value":"2,500+"},{"label":"SSL Keys Configured","value":"100%"}]'::jsonb, '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">         <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>         <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>         <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>       </svg>')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;

insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hospital-website-dev', 'websites', 'Hospital Website Development', '', 'Professional, responsive websites for hospitals and multi-specialty clinics, optimised for search and patient trust.', '₹14,999', '["Doctor Profiles & Specializations","Department & Services Pages","OPD Timings & Location Map","Online Appointment Request Form","SSL Secured & Mobile Optimized"]'::jsonb, '[{"name":"Basic Clinic Site","price":"₹14,999","desc":"Single-branch clinic website","features":["8 Responsive Pages","Doctor Profile Gallery","WhatsApp OPD Booking Link","Google Maps Embed","1 Week Delivery"]},{"name":"Multi-Dept Hospital","price":"₹29,999","desc":"Multi-speciality hospital portal","features":["Unlimited Pages & Departments","Individual Doctor Portals","Blog / Health Tips Section","Admin CMS Dashboard","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('appointment-booking', 'business-software', 'Appointment Booking System', '', 'End-to-end online booking platform for clinics — patients can self-schedule, reschedule, and get automated reminders.', '₹19,999', '["Real-time Slot Availability","SMS & WhatsApp Reminders","Doctor-wise Calendar Views","Patient Account & History Log","Admin Dashboard with Reports"]'::jsonb, '[{"name":"Basic Scheduler","price":"₹19,999","desc":"Single-doctor booking flow","features":["Online Slot Booking Widget","SMS Auto-Reminders","Patient Appointment History","Basic Admin Dashboard","1 Week Delivery"]},{"name":"Multi-Doctor System","price":"₹39,999","desc":"Full clinic scheduling suite","features":["Multi-Doctor Calendar Views","Payment Collection on Booking","WhatsApp + Email Reminders","Cancellation & Reschedule Flow","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('telemedicine-platform', 'business-software', 'Telemedicine Platform', '', 'HIPAA-ready online consultation platform with secure video calls, e-prescriptions, and patient records.', '₹49,999', '["HD Video Consultation Rooms","Digital Prescription Generator","Secure Patient File Uploads","Payment Gateway for Consultations","Mobile App (Android & iOS)"]'::jsonb, '[{"name":"Web Telemedicine","price":"₹49,999","desc":"Browser-based consultation tool","features":["WebRTC Video Consultation","E-Prescription PDF Generator","Patient Portal Login","Razorpay Payment Integration","3 Weeks Delivery"]},{"name":"Full App Platform","price":"₹89,999","desc":"Telemedicine app on Play & App Store","features":["Native Android + iOS App","Live Chat + Video Calls","Lab Report Upload System","Multi-doctor Support","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('patient-management', 'business-software', 'Patient Management System', '', 'Centralised digital OPD + IPD records system for managing patient history, diagnosis, prescriptions, and billing.', '₹34,999', '["Digital OPD & IPD Records","Patient History & Visit Logs","Prescription & Diagnosis Tracking","Bed Allocation & Ward Management","Staff Role-based Access Control"]'::jsonb, '[{"name":"OPD System","price":"₹34,999","desc":"Outpatient management software","features":["Patient Registration & Queue","OPD Prescription Manager","Patient Medical History Log","Daily Report Generator","2 Weeks Delivery"]},{"name":"Full Hospital HIS","price":"₹74,999","desc":"Complete Hospital Information System","features":["OPD + IPD + Lab Management","Bed & Ward Tracking","Pharmacy Integration","Multi-branch Support","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('medical-billing', 'business-software', 'Medical Billing Software', '', 'Automate invoice generation, insurance claim tracking, payment ledger, and GST-compliant billing for hospitals.', '₹24,999', '["Auto Invoice & Receipt PDFs","Insurance Claim Management","GST-Compliant Billing Engine","Outstanding Dues Tracker","Daily/Monthly Revenue Reports"]'::jsonb, '[{"name":"Clinic Billing","price":"₹24,999","desc":"Basic clinic billing tool","features":["Invoice & Receipt Generator","Payment Tracking Ledger","GST Billing","Basic Revenue Reports","1 Week Delivery"]},{"name":"Hospital Billing Suite","price":"₹49,999","desc":"Multi-dept billing system","features":["Department-wise Billing","Insurance TPA Management","OT & Lab Charge Integration","Monthly Audit Reports","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('healthcare-mobile-app', 'mobile-apps', 'Healthcare Mobile App', '', 'Feature-rich patient-facing mobile app for booking, teleconsultation, health records, and pharmacy orders.', '₹59,999', '["Doctor Booking & Scheduling","In-app Teleconsultation","Health Records & Lab Reports","Medication & Appointment Reminders","Published on Play Store & App Store"]'::jsonb, '[{"name":"Patient App","price":"₹59,999","desc":"Booking + records app","features":["Appointment Booking Module","Patient Health Dashboard","Lab Report Upload & View","Push Notifications","4 Weeks Delivery"]},{"name":"Full Clinic App Suite","price":"₹99,999","desc":"Doctor + Patient dual app","features":["Patient App + Doctor App","In-app Video Consultations","Prescription Management","Pharmacy Order Module","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hospital-seo', 'digital-marketing', 'SEO for Hospitals', '', 'Rank your hospital or clinic on Google for high-intent medical search keywords in your city and nearby areas.', '₹9,999/mo', '["Medical Keyword Research","Google Maps Local Pack Ranking","Doctor Profile Schema Markup","Health Blog Content Writing","Monthly Rankings Report"]'::jsonb, '[{"name":"Local Clinic SEO","price":"₹9,999/mo","desc":"Rank locally for clinic keywords","features":["15 Medical Keywords","GMB Profile Optimisation","On-Page Content Fixes","Local Citation Building","3 Month Commit"]},{"name":"Hospital Authority SEO","price":"₹19,999/mo","desc":"City-wide hospital ranking","features":["40 Medical Keywords","Health Blog Articles (4/mo)","High-DA Medical Backlinks","Doctor Schema & Rich Snippets","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('clinic-digital-marketing', 'digital-marketing', 'Digital Marketing for Clinics', '', 'Full-funnel digital marketing for clinics and hospitals — social media, Google Ads, and WhatsApp patient engagement.', '₹12,999/mo', '["Facebook & Instagram Health Posts","Google Search Ads for Clinics","WhatsApp Broadcast Campaigns","Patient Review Generation Strategy","Monthly ROI Performance Report"]'::jsonb, '[{"name":"Growth Package","price":"₹12,999/mo","desc":"Social + Ads for clinics","features":["16 Health Content Posts/mo","Google Search Ads Campaign","Facebook/Instagram Ads","WhatsApp Patient Broadcast","Cancel Anytime"]},{"name":"Authority Package","price":"₹24,999/mo","desc":"Full-funnel hospital marketing","features":["Daily Posts + Reels/Videos","Multi-platform Ad Campaigns","Influencer Tie-up Strategy","Review Generation Campaigns","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('business-websites', 'websites', 'Business Websites Blueprint', '', 'Establish a credible online presence with a clean, responsive, and search-optimized company profile.', '₹9,999', '["5 Pages Responsive Layout","SEO Setup & Custom Domains","1 Year Free Hosting & Email","Contact Forms & WhatsApp Link"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Best for small profiles","features":["5 Responsive Pages","Free .com/.in Domain (1 Yr)","Free Shared Hosting (1 Yr)","Standard Contact Form","1 Week Delivery"]},{"name":"Gold Plan","price":"₹14,999","desc":"Best for growing startups","features":["10 Responsive Pages","Free Domain & Premium SSD Hosting","WhatsApp & Social Integrations","Admin Dashboard CMS (WordPress)","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹24,999","desc":"Custom React corporate portals","features":["Unlimited Pages","Bespoke Next.js/React Coding","Custom SVG Graphics & Illustrations","Basic SEO Setup & Speed Fixes","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ecommerce-websites', 'websites', 'E-commerce Websites Blueprint', '', 'Launch a secure online store to sell products, manage inventory, and process digital payments.', '₹14,999', '["Unlimited Products & Categories","Payment Gateway Integration","Inventory & Order Tracking","Admin Dashboard & Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic shop catalog","features":["Up to 50 Products","Razorpay/UPI Payment Gateway","Standard Cart & Checkout","Admin Inventory Dashboard","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Advanced e-commerce store","features":["Up to 500 Products","Razorpay & Stripe integration","Discount Coupon System","Automatic Invoice PDF Generator","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Custom multi-vendor marketplace","features":["Unlimited Products","Vendor Dashboard Panels","Advanced Analytics Tracker","Custom Search Engine Filtering","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('mobile-app-dev', 'mobile-apps', 'Mobile App Development', '', 'Build cross-platform Android & iOS applications using Flutter/React Native with custom backend systems.', '₹49,999', '["Android & iOS App Versions","Custom UI/UX & Prototypes","Push Notifications Integration","Google Play & App Store Submit"]'::jsonb, '[{"name":"Silver Plan","price":"₹49,999","desc":"Simple utility apps","features":["Single App (Android or iOS)","Custom Clean UI Design","Firebase Auth & Database","Push Notifications","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹79,999","desc":"Cross-platform apps","features":["Dual Apps (Android & iOS)","Payment Gateway Integration","Camera/GPS Device Access","Admin panel web portal","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,29,999","desc":"Custom advanced apps","features":["Android & iOS Apps","Real-time Chats / WebSockets","Social Media Login Integrations","Custom Analytics Dashboard","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-services', 'digital-marketing', 'SEO Services Plan', '', 'Boost your Google rankings, drive organic search traffic, and optimize technical speed index scores.', '₹7,999/mo', '["On-Page Optimization","Keywords & Backlinks Research","Monthly Growth Reports","Google Search Console Connect"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999/mo","desc":"Local Search Optimization","features":["10 Target Keywords","On-Page Meta Optimizations","Google Maps Listing Rank","Monthly Traffic Reports","3 Month Minimum Commit"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"National Search Rank","features":["25 Target Keywords","Technical SEO Code Fixes","High-DA Backlinks (10/mo)","Competitor Analysis Audit","3 Month Minimum Commit"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Hyper competitive search rank","features":["50+ Target Keywords","Custom Content/Blogs Writing","High-DA Backlinks (25/mo)","Priority Weekly Audits","No Contract - Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('social-media-marketing', 'digital-marketing', 'Social Media Marketing', '', 'Build brand authority and drive paid leads across Facebook, Instagram, LinkedIn, and Google Ads.', '₹9,999/mo', '["12 Custom Graphics /mo","Audience Growth & Analytics","Ad Campaign Setup & Spend Management","Brand Strategy Planning"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Brand maintenance","features":["12 Custom Graphic Posts / Month","Facebook & Instagram Management","Audience Growth Strategy","Basic Ad Campaign Setup","Cancel Anytime"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active Lead Generation","features":["20 Custom Posts + 4 Video Reels","FB, Insta & LinkedIn Management","Targeted Paid Ad Campaigns","Lead Form Integrations","Cancel Anytime"]},{"name":"Platinum Plan","price":"₹29,999/mo","desc":"Full Scale Agency Growth","features":["Daily Posts (30 Custom Graphics)","Video/Reels Production Scripts","Ad budget optimizations","Weekly ROI Reporting Calls","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('whatsapp-marketing', 'whatsapp-marketing', 'WhatsApp Marketing API', '', 'Automate customer support and send broadcast updates using the official WhatsApp Business API.', '₹4,999/mo', '["WhatsApp Business API Setup","Bulk Message Senders & Templates","Custom Chatbot Workflows & Automation","Green Tick Verification Assistance"]'::jsonb, '[{"name":"Silver Plan","price":"₹4,999/mo","desc":"API Broadcast Tool","features":["Official API Account Setup","Green Tick Verification Aid","Bulk Broadcast Senders","Standard CRM Contact Book","Cancel Anytime"]},{"name":"Gold Plan","price":"₹9,999/mo","desc":"Interactive Chatbot Flow","features":["Official API Account Setup","Custom Chatbot Flow Scripts","Auto FAQ Auto-responders","Team Chat Inbox Dashboard","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('google-business-profile', 'gmb', 'Google Business Profile', '', 'Verify and optimize your Google Maps profile to rank first for local search keywords.', '₹2,999', '["Google Maps Listing Setup","Profile Verification Assistance","Local SEO & Keyword Keywords Optimization","Review Management & Citation Boost"]'::jsonb, '[{"name":"Standard Setup","price":"₹2,999","desc":"One-time onboarding setup","features":["Google Maps Profile Creation","Verification Aid Assistance","Keyword Rich Description","Business Citations (10 directory)","3 Days Delivery"]},{"name":"Growth Setup","price":"₹5,999","desc":"Advanced optimization setup","features":["Google Maps Profile Setup","Verification Aid","Local Competitor Audit","Business Citations (30 directories)","GMB Review Widget Code","5 Days Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('logo-branding', 'branding-graphics', 'Logo & Branding', '', 'Establish a modern brand identity with customized vector logo concepts and complete style palettes.', '₹2,999', '["3 Unique Custom Logo Concepts","Complete Brand Style Guide (Colors, Fonts)","Business Card & Letterhead Layouts","Social Media Kit (Banners, Profiles)"]'::jsonb, '[{"name":"Silver Design","price":"₹2,999","desc":"Best for standard branding","features":["3 Logo Concepts (Vector format)","Brand Style Sheet (Hex colors, fonts)","High-Res PNG & PDF files","2 Free Revisions","3 Days Delivery"]},{"name":"Gold Design","price":"₹5,999","desc":"Complete Startup Identity","features":["5 Logo Concepts","Full Brand Identity Guide (PDF)","Business Card & Letterhead layouts","Social Media Kit (Banners, Profiles)","Unlimited Revisions","5 Days Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ai-agents', 'ai-solutions', 'AI Agents & Automation', '', 'Build intelligent chatbots, auto-responders, and automated workflows using GPT-4 and custom LLM integrations.', '₹19,999', '["Custom Knowledge Base Integration","Web & WhatsApp Chatbot Setup","LLM Prompt Engineering & Memory","Seamless CRM & Google Sheets Sync"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Single-channel chatbot","features":["Custom LLM Assistant (GPT-4o)","Website Widget Embed","1,000 Free Chats / Month","Standard Context Length","1 Week Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Multi-channel automation agent","features":["WhatsApp API + Web Embed","Dynamic Function Calling APIs","CRM / Calendar Booking Hooks","5,000 Chats / Month","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹79,999","desc":"Custom enterprise AI workflows","features":["Multi-agent Collaborative Flow","Private Fine-Tuned Local Server Support","Infinite Scale Memory Retainer","Dedicated System Monitoring Dashboard","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('custom-software', 'business-software', 'Custom CRM & ERP Software', '', 'Bespoke corporate management dashboards, inventory tracking, POS systems, and multi-user portal development.', '₹59,999', '["Bespoke Client Portals","Integrated Multi-role Access Control","Automated Daily Transaction Reports","Scalable Cloud Databases & APIs"]'::jsonb, '[{"name":"Silver Plan","price":"₹59,999","desc":"Standard business tracker","features":["Lead & Customer Manager (CRM)","Standard Transaction Sheets","User Logs and Dashboards","SQLite/MySQL Cloud Setup","3 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Advanced resource planner","features":["CRM + Basic ERP Capabilities","Inventory and Billing Engine","Automated Invoice PDF Generates","Real-time Analytics Charts","5 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,99,999","desc":"Fully bespoke software ecosystem","features":["Custom HRMS, POS & Inventory","Bespoke Payment/Gateway Splits","Custom API Hook connections","High Availability VPS Setup","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('clinic-management', 'industry-solutions', 'Industry Solutions Suite', '', 'Tailored SaaS and portal configurations for clinic queue management, school fee databases, or real estate listings.', '₹24,999', '["Custom Tailored Industry Workflow","Appointment Scheduler & Calendars","SMS / Email Notification Hooks","Interactive Location Map Views"]'::jsonb, '[{"name":"Doctor/Clinic Plan","price":"₹24,999","desc":"OPD and prescription tool","features":["Patient Records CRM","Prescription PDF Creator","OPD Wait Room Queue Monitor","Auto SMS Appointment Alerts","2 Weeks Delivery"]},{"name":"School Portal Plan","price":"₹39,999","desc":"Complete education management","features":["Student fee account database","Attendance tracker log","Digital Class Board & Exam schedules","Parent Alert notifications","3 Weeks Delivery"]},{"name":"Real Estate Plan","price":"₹29,999","desc":"Property listing catalog","features":["Interactive Property Maps","Agent Lead Allocator","WhatsApp Property Brochure PDF Generator","Advanced Filter Engine","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('cloud-hosting', 'hosting-domain', 'Hosting & Cloud Setup', '', 'High-speed cloud servers, automated backup retention, business email setups, and SSL configurations.', '₹4,999/yr', '["99.9% Server Uptime Guarantee","Free SSL Security Keys (Let’s Encrypt)","Daily Automated Offsite Backups","Bespoke Cloud Performance Tuning"]'::jsonb, '[{"name":"Shared Cloud Host","price":"₹4,999/yr","desc":"Ideal for standard landing sites","features":["20GB NVMe SSD Storage Space","Free SSL and Custom Domain Link","10 Enterprise Business Emails","Standard CDN Setup","2 Days Delivery"]},{"name":"VPS Hosting Plan","price":"₹9,999/yr","desc":"Great for high traffic apps","features":["2 Dedicated vCPU Core & 4GB RAM","Managed Webmin Control Panel","50 Enterprise Business Emails","Advanced Redis / Cache Tuning","3 Days Delivery"]},{"name":"Managed AWS Plan","price":"₹24,999/yr","desc":"Enterprise high scale hosting","features":["High Availability Failover Nodes","Multi-Zone RDS DB Sync","Unlimited Enterprise Emails","Managed Cloud Security Guardrails","5 Days Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('school-website', 'websites', 'School Website Development', '', 'Professional, highly secure websites for schools, colleges, and educational institutes with integrated online admissions.', '₹14,999', '["Online Admission Forms","Parent & Student Notice Board","Event Gallery & Interactive Calendar","Staff Directories","Fully Mobile Responsive"]'::jsonb, '[{"name":"Standard Portal","price":"₹14,999","desc":"Single school website","features":["8 Pages Layout","Google Maps & Contact Forms","Free Domain & SSD Hosting (1 Yr)","WhatsApp OPD Booking Link","1 Week Delivery"]},{"name":"Gold Campus Website","price":"₹24,999","desc":"High-end college website","features":["Unlimited Pages","Multi-Branch Map Locator","Interactive Event Calendar","WordPress Admin Dashboard CMS","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('student-management', 'business-software', 'Student Management System', '', 'Complete digital records portal to easily track student directories, grades, timetables, and academic histories.', '₹24,999', '["Detailed Student Profiles","Report Card Generator","Class Timetables","SMS/Email Alerts for Parents","Cloud Database Security"]'::jsonb, '[{"name":"Standard SMS","price":"₹24,999","desc":"Standard database tracker","features":["Student profiles & records","Class timetables","Teacher-Student assignment logs","Secure cloud backup","2 Weeks Delivery"]},{"name":"Gold Campus SMS","price":"₹44,999","desc":"Enterprise university platform","features":["Multi-department databases","Auto grade & report card generation","Roll number auto-allocations","Mobile dashboard access","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-exam-portal', 'business-software', 'Online Examination Portal', '', 'Scalable examination platform for hosting online exams, MCQ tests, and subjective grading workflows.', '₹19,999', '["Custom Test Maker","Automated Instant Grading","Anti-cheat Proctoring Aids","Performance Analytics Charts","Student Login Portals"]'::jsonb, '[{"name":"Standard Test Engine","price":"₹19,999","desc":"Basic quiz & test builder","features":["MCQ exam configurations","Instant PDF results maker","Student login panel","Admin result spreadsheets","2 Weeks Delivery"]},{"name":"Gold Proctor Engine","price":"₹34,999","desc":"Secure proctored exam engine","features":["Anti-cheat screen lock tracking","Subjective answer grading flows","Leaderboard analytics dashboards","Random question pools generator","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('learning-management-system', 'business-software', 'Learning Management System (LMS)', '', 'E-learning platform to easily share video lectures, assignments, and study materials with students.', '₹29,999', '["Video Lecture Hosting","Interactive Quizzes","Assignment Upload System","Progress Tracker Dashboard","Student Discussion Forum"]'::jsonb, '[{"name":"Standard LMS","price":"₹29,999","desc":"Perfect for standard institutes","features":["Video lectures & file shares","Student performance logs","Quiz/Exam configurations","Standard discussion board","3 Weeks Delivery"]},{"name":"Gold LMS Suite","price":"₹49,999","desc":"Advanced interactive virtual campus","features":["Zoom live class integrations","Assignment feedback & reviews flow","Certificate auto-generation PDFs","Dynamic student reports","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('attendance-management', 'business-software', 'Attendance Management', '', 'Automated daily class attendance tracking with instant parent SMS/WhatsApp alerts.', '₹12,999', '["Staff & Student Logs","Instant Parent Notification Hooks","Monthly/Weekly Reports","Biometric Integration Support","Easy Mobile App Interface"]'::jsonb, '[{"name":"Standard Alert System","price":"₹12,999","desc":"Manual records attendance app","features":["Daily teacher input dashboard","SMS alert templates to parents","Monthly CSV export logs","Basic attendance dashboard","1 Week Delivery"]},{"name":"Gold Biometric Sync","price":"₹24,999","desc":"Biometric hardware synced attendance","features":["Fingerprint/RF card sync system","Real-time server check-in reports","WhatsApp check-in alerts to parents","Salary calculation hooks","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fee-management', 'business-software', 'Fee Management System', '', 'Cloud billing system for schools to collect fees online, generate receipts, and track dues.', '₹19,999', '["Online Payment Gateways","Automatic Invoice Receipts","Defaulter Tracker & Alerts","GST/Tax Compliant Logs","Financial Revenue Reports"]'::jsonb, '[{"name":"Standard Billing","price":"₹19,999","desc":"Basic fee receipt generator","features":["Student fee ledger logs","Standard invoice PDF prints","Razorpay & UPI integrations","GST compliant billing","2 Weeks Delivery"]},{"name":"Gold Defaulter Engine","price":"₹34,999","desc":"Auto reminder fee collection suite","features":["Auto fee SMS/WhatsApp reminders","Late fee calculation models","Installment payment schedules","Detailed bank reconciliation reports","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('school-mobile-app', 'mobile-apps', 'School Mobile App', '', 'Native Android & iOS mobile app for direct parent-teacher communications, notices, fees, and homework.', '₹49,999', '["Direct Parent-Teacher Messages","Push Notices Notification Board","Online Fee Payment","Attendance & Progress Cards","Google Play & Apple App Store Publish"]'::jsonb, '[{"name":"Standard Parent App","price":"₹49,999","desc":"Basic info broadcast app","features":["Push notice notifications","Homework & attendance displays","Teacher contact catalog","Android version publish","4 Weeks Delivery"]},{"name":"Gold Multi-Role Suite","price":"₹79,999","desc":"Double app suite (Parent + Staff)","features":["Staff App & Parent App","Online payment gateways","Live chat channels","Play Store + Apple App Store publish","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('education-marketing', 'digital-marketing', 'Education Marketing Services', '', 'Specialized SEO and paid lead generation campaigns to boost admissions and student registrations.', '₹14,999/mo', '["Local Search Term Rankings","Targeted FB/Insta Lead Ads","Parent Admission WhatsApp Funnels","Social Media Branding Posts","Google Search Maps Optimization"]'::jsonb, '[{"name":"Admission Growth","price":"₹14,999/mo","desc":"Social + Search ads for school admissions","features":["Google Search Ads Campaign","FB/Insta local targeted ads","Lead generation forms integration","16 Admission branding graphics","Cancel Anytime"]},{"name":"Campus Authority","price":"₹24,999/mo","desc":"Full year branding & reputation suite","features":["SEO authority audit","Google Maps top rankings pack","Parent review boost campaigns","Reels video production scripts","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('property-listing-portal', 'websites', 'Property Listing Portal', '', 'Interactive property portals for agencies and developers to catalog apartments, land plots, and commercial spots.', '₹24,999', '["Advanced Filtering Engine","Agent Assignment System","Interactive Location Map Views","WhatsApp Property Brochure PDF Generator","Featured Property Banners"]'::jsonb, '[{"name":"Agency Catalog","price":"₹24,999","desc":"Clean listing site for single agency","features":["Up to 100 Properties listing","Advanced filters (price, area, bedroom)","Agent contact forms","Free Domain & Host (1 Yr)","2 Weeks Delivery"]},{"name":"Gold Multi-Broker Portal","price":"₹49,999","desc":"Bespoke marketplace property site","features":["Broker sign up dashboards","Interactive local maps embeds","PDF brochures auto-generators","WhatsApp API contact buttons","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-for-builders', 'business-software', 'CRM for Builders', '', 'Client relations management software for builder lead allocations, installment payment tracking, and site visits.', '₹39,999', '["Lead Assignment Pipeline","Site Visit Scheduler","Customer Installment Ledger","Broker Portal Accounts","Automated WhatsApp Promos"]'::jsonb, '[{"name":"Builder CRM Standard","price":"₹39,999","desc":"Standard lead pipeline tracker","features":["Lead source captures (99acres, Magicbricks)","Telecaller dashboards","Site visit tracker logs","Basic payment ledger","3 Weeks Delivery"]},{"name":"Gold Project ERP","price":"₹74,999","desc":"All-in-one builder ERP suite","features":["Interactive floor plan booking grids","Installment milestone billings","Broker commission pay dashboards","Automated WhatsApp reminders","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('virtual-property-tours', 'branding-graphics', 'Virtual Property Tours', '', 'Interactive 360-degree virtual property walkthroughs and high-quality 3D renders.', '₹19,999', '["360 Walkthrough Viewer","Figma/3D Render Integration","Virtual Floor Plan Links","Lead capture popup on tour","High speed hosting files"]'::jsonb, '[{"name":"Virtual Walkthrough","price":"₹19,999","desc":"3D walkthrough integration service","features":["Integration of up to 5 panoramic views","Web VR responsive viewer","Hotspot information boxes","Lead capture popups","1 Week Delivery"]},{"name":"Gold HD Tour Suite","price":"₹39,999","desc":"Full HD multi-room tour + 3D floor plan","features":["Panoramic views (Up to 15 nodes)","3D dollhouse floor plan layout","Custom logo branding embeds","Offline offline VR viewer files","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('lead-management-system', 'business-software', 'Lead Management System', '', 'Automated real estate lead capturing from FB Ads, 99acres, MagicBricks, and Google Forms.', '₹14,999', '["Multi-channel Lead Captures","Instant Broker Alerts","Lead Status Pipeline Tracker","Call Recording Integration","Performance Analytics Reports"]'::jsonb, '[{"name":"Lead Tracker Basic","price":"₹14,999","desc":"Single project lead dashboard","features":["FB/Insta and Google form lead integrations","Broker dashboard tables","Email & SMS broker alerts","Standard CSV export logs","2 Weeks Delivery"]},{"name":"Gold Multi-Project Flow","price":"₹29,999","desc":"Enterprise automated distribution","features":["Auto round-robin lead allocation","IVR call connection system","Real-time sales performance metrics","WhatsApp automation integration","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('property-booking-platform', 'business-software', 'Property Booking Platform', '', 'Token payment and slot booking platforms for new residential property launches.', '₹29,999', '["Token Amount Collections","Real-time Unit Availability Grid","Online Buyer Agreements","GST Compliant Receipts","Admin Real-time Dashboard"]'::jsonb, '[{"name":"Token Payment flow","price":"₹29,999","desc":"Simple token payment gateway","features":["Razorpay and UPI token collect","Buyer registration forms","Standard terms PDF downloads","Basic admin transaction dashboard","2 Weeks Delivery"]},{"name":"Gold Builder Inventory Suite","price":"₹59,999","desc":"Real-time digital layout layout grids","features":["Interactive project layout map","Color coded unit status grid (Available, Booked, Hold)","E-Sign buyer agreements","SMS ledger confirmations","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('real-estate-mobile-app', 'mobile-apps', 'Real Estate Mobile App', '', 'Native Android & iOS real estate apps for property searching, virtual tours, and chat channels.', '₹59,999', '["Interactive Local Searches","Agent Real-time Chats","Saved Search Alerts","Push Notifications Dashboard","Play/App Store Publishing"]'::jsonb, '[{"name":"Customer Search App","price":"₹59,999","desc":"Property finder native app","features":["Property lists with search filters","Interactive Map listings search","In-app agent email/call buttons","Android version publish","5 Weeks Delivery"]},{"name":"Gold Dual App Suite","price":"₹99,999","desc":"Agent App + Customer App suite","features":["Customer App + Broker App","Real-time in-app chats with push","Saved search push alerts","Play Store + Apple App Store publish","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-real-estate', 'digital-marketing', 'SEO for Real Estate', '', 'Local property SEO to rank high on maps and search for "flats/plots/apartments for sale near me" keywords.', '₹9,999/mo', '["Local Property Keywords","Google Maps Business Optimisation","Micro-site SEO Architecture","High DA Local Backlinks","Monthly Leads Audit"]'::jsonb, '[{"name":"Project SEO Growth","price":"₹9,999/mo","desc":"Local project keywords ranking package","features":["15 Local project keywords","GMB profile local optimizations","Project microsite speed checks","Standard backlinks (10/mo)","3 Month Commit"]},{"name":"Builder Authority SEO","price":"₹19,999/mo","desc":"Complete brand authority builder package","features":["40 High volume local keywords","Monthly blogs & project reviews writing","High-DA local links (25/mo)","Real-time rankings tracking panels","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('real-estate-digital-marketing', 'digital-marketing', 'Real Estate Digital Marketing', '', 'High conversion Meta & Google Ads campaigns optimized to generate site-visit leads for properties.', '₹14,999/mo', '["Meta Ads (FB/IG) Lead Generation","Google Search Ads for Projects","3D Walkthrough Ad Creatives","WhatsApp Lead Nurturing Bots","ROI Analysis Reports"]'::jsonb, '[{"name":"Property Lead Gen","price":"₹14,999/mo","desc":"Ad campaigns on FB & Instagram","features":["Meta targeted lead ads setup","High conversion ad graphic designs","Lead verification WhatsApp bot integration","Daily performance analytics reports","Cancel Anytime"]},{"name":"Builder Multi-Channel Growth","price":"₹29,999/mo","desc":"Full scale marketing agency coverage","features":["Meta Ads + Google Search ads campaigns","3D walk-through ad video scripts","Broker communication automation","Bi-weekly performance reporting calls","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ecommerce-web-dev', 'websites', 'Ecommerce Website Development', '', 'Launch a highly optimized online store with secure checkouts, payment integrations, and responsive cart grids.', '₹14,999', '["Unlimited Products Listing","Integrated Payment Gateways","Inventory & Stock Tracker","Customer Orders Dashboard","Mobile Commerce Layouts"]'::jsonb, '[{"name":"Standard Shop","price":"₹14,999","desc":"Standard catalog & payment store","features":["Up to 50 Products","Razorpay & UPI gate connections","Standard Cart & Checkout","Admin stock spreadsheet","2 Weeks Delivery"]},{"name":"Gold Commerce Portal","price":"₹29,999","desc":"Advanced storefront with coupons","features":["Up to 500 Products","Razorpay & Stripe premium integration","Automated GST Invoices generator","Custom discount coupon system","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('multi-vendor-marketplace', 'websites', 'Multi Vendor Marketplace', '', 'Power an Amazon/Etsy style multi-seller marketplace where multiple vendors register and sell their goods.', '₹44,999', '["Vendor Registration & Verification","Seller Dashboard Panels","Automated Commission Splits","Vendor-wise Shipping Rules","Customer Ratings & Reviews"]'::jsonb, '[{"name":"Standard Marketplace","price":"₹44,999","desc":"Marketplace platform with basic splits","features":["Vendor onboarding panel","Basic admin commission management","Individual store profile setups","Standard payment splits","4 Weeks Delivery"]},{"name":"Gold Enterprise Hub","price":"₹79,999","desc":"Advanced multi-seller marketplace suite","features":["Multi-currency support","Advanced payout automation (Razorpay Route)","Automated tax billing configuration","Vendor mobile dashboards link","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('shopify-store-dev', 'websites', 'Shopify Store Development', '', 'Bespoke Shopify theme configuration, premium app setups, custom product variants, and complete storefront design.', '₹12,999', '["Premium Theme Integrations","Variant Setup & Inventory Connect","Shopify App Configurations","Payment Setup & Taxes","Speed Optimization Checks"]'::jsonb, '[{"name":"Basic Shopify Launch","price":"₹12,999","desc":"Standard Shopify setup","features":["Standard theme customisations","Up to 20 products setup","Crucial Shopify app setups","Shipping & Taxes configuration","1 Week Delivery"]},{"name":"Gold Shopify Store","price":"₹24,999","desc":"Advanced conversion optimized store","features":["Premium theme design layouts","Advanced product customizer apps","E-mail marketing funnel hooks","SEO optimize speed packages","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('woocommerce-dev', 'websites', 'WooCommerce Development', '', 'Power your WordPress site into a high-performance, flexible shopping store using WooCommerce.', '₹9,999', '["WordPress WooCommerce Setup","Advanced Product Filtering","Custom Cart & Checkout Pages","Inventory Synchronizations","SEO Plugin Configurations"]'::jsonb, '[{"name":"Basic WooCommerce","price":"₹9,999","desc":"Standard WooCommerce store","features":["WooCommerce setup on WordPress","Standard payment configurations","Up to 30 products load","Standard theme setup","1 Week Delivery"]},{"name":"Gold WooCommerce Suite","price":"₹19,999","desc":"Custom high-converting layout","features":["Custom Elementor shop design","Bespoke checkout fields editor","Auto invoice PDF generation","Speed optimization caching checks","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('payment-gateway-integration', 'business-software', 'Payment Gateway Integration', '', 'Securely link local and global payment gateways (Razorpay, Stripe, PayPal, UPI) with your online system.', '₹4,999', '["Multi-Gateway APIs Setup","Instant UPI QR Code Collections","Auto invoice PDF generator","Secure SSL Transaction Logs","Recurring Billing Configurations"]'::jsonb, '[{"name":"Standard Integration","price":"₹4,999","desc":"Single gateway integration","features":["Razorpay or Stripe API hookup","Standard success redirect setup","Transaction email alerts","SSL security configurations","3 Days Delivery"]},{"name":"Gold Smart Payments","price":"₹9,999","desc":"Multi-gateway with tax splits","features":["Razorpay + Stripe + UPI QR integration","Auto invoice generator PDFs","Multi-currency checkout capability","Webhooks transaction logs tracking","5 Days Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('inventory-management', 'business-software', 'Inventory Management', '', 'An intelligent inventory tracking system to manage raw materials, work-in-progress (WIP), and finished goods across multiple warehouses with barcode/RFID support.', '₹49,999', '["Real-time Stock Tracking","Barcode & RFID Integration","Automated Reorder Alerts","Multi-Warehouse Support","Batch & Expiry Tracking"]'::jsonb, '[{"name":"Standard IMS","price":"₹49,999","desc":"Single warehouse tracking","features":["Stock Tracking","Reorder Alerts","Basic Reporting","4 Weeks Delivery"]},{"name":"Advanced IMS","price":"₹89,999","desc":"Multi-location with Barcode","features":["Barcode Integration","Multi-warehouse","Mobile App for Scanners","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('order-management-system', 'business-software', 'Order Management System', '', 'Real-time order tracking dashboard from purchase to shipping with automated client notifications.', '₹14,999', '["Order Status Pipeline Tracker","Delivery Partner Integrations","WhatsApp/SMS Status updates","Return/Refund Processing System","Sales Performance Analytics"]'::jsonb, '[{"name":"Order Tracker Basic","price":"₹14,999","desc":"Basic order tracking backend","features":["Order creation and update pipeline","SMS status alert templates","Invoice print generator","Basic analytics dashboard","2 Weeks Delivery"]},{"name":"Gold Delivery Flow","price":"₹29,999","desc":"Automated ship-partner dashboard","features":["Integration with Shiprocket/Delhivery","WhatsApp auto shipping notifications","Return request processing desk","Real-time delivery status tracking","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('product-catalog-management', 'branding-graphics', 'Product Catalog Management', '', 'Clean digital catalogs, bulk uploads, high-res graphic editing, and SEO product description writing.', '₹5,999', '["High-Res Product Layouts","SEO Copywriting for Descriptions","Bulk Import/Export Sheets","Standard Category Taxonomies","Branded Catalog PDFs"]'::jsonb, '[{"name":"Standard Catalog Load","price":"₹5,999","desc":"Basic catalog setup","features":["Up to 50 products upload","Clean product image edits (basic crop)","SEO meta descriptions writing","Standard category tag configurations","1 Week Delivery"]},{"name":"Gold Digital Showcase","price":"₹12,999","desc":"Premium branded catalog assets","features":["Up to 200 products upload","High-end color correction graphic edits","Copywritten rich descriptions","Digital PDF Catalog design layout","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ecommerce-mobile-app', 'mobile-apps', 'Ecommerce Mobile App', '', 'Feature-rich native Android & iOS shopping app with fast checkout flows and smart push notification updates.', '₹59,999', '["Native Android & iOS Apps","Real-time Cart Synchronizations","Push Notification Marketing Module","Order Tracking Screens","Play/App Store Publishing"]'::jsonb, '[{"name":"Customer Shop App","price":"₹59,999","desc":"Property finder native app","features":["Property lists with search filters","Interactive Map listings search","In-app agent email/call buttons","Android version publish","5 Weeks Delivery"]},{"name":"Gold Dual App Suite","price":"₹99,999","desc":"Agent App + Customer App suite","features":["Customer App + Broker App","Real-time in-app chats with push","Saved search push alerts","Play Store + Apple App Store publish","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-ecommerce', 'digital-marketing', 'SEO for Ecommerce', '', 'Rank your product pages first on Google with advanced SEO schema markup, speed fixes, and targeted search keywords.', '₹12,999/mo', '["Ecommerce Rich Snippets (Price, Stock)","Product Category Keyword Rank","Page Speed Caching Fixes","Bespoke Competitor Pricing Audits","Monthly Leads Audit"]'::jsonb, '[{"name":"Local Shop SEO","price":"₹12,999/mo","desc":"Local search rankings pack","features":["20 target product keywords","Product schema markup installation","GMB profile local optimizations","Standard backlinks (15/mo)","3 Month Commit"]},{"name":"Store Authority SEO","price":"₹24,999/mo","desc":"National high traffic search rank","features":["50 competitive product keywords","Technical site architecture speed improvements","Monthly shopping blogs content","High DA backlink acquisitions (30/mo)","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('marketplace-development', 'websites', 'Marketplace Development', '', 'Bespoke online service or product marketplaces with vendor commission models, payouts, and reviews.', '₹49,999', '["Interactive Map Listing Matches","Vendor Wallet Pay Systems","Admin Central Revenue Dashboards","Interactive Location Filters","Review Moderation Desks"]'::jsonb, '[{"name":"Service Marketplace","price":"₹49,999","desc":"Listing and lead buy site for services","features":["Interactive location searching","Service provider account setups","Razorpay token checkouts","Google Maps search integration","4 Weeks Delivery"]},{"name":"Gold Product Marketplace","price":"₹89,999","desc":"Complete physical goods seller marketplace","features":["Real-time seller stock integration","Auto payout splits API hookups","Review moderation console panels","Advanced tax config dashboards","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-web-dev', 'websites', 'Restaurant Website Development', '', 'Stunning, fast, and optimized websites for restaurants and cafes with online menu displays.', '₹9,999', '["Interactive Food Menu Display","Online Table Reservation Link","Google Maps Location & Hours","Social Media Integrations","Mobile Optimized Design"]'::jsonb, '[{"name":"Standard Cafe Website","price":"₹9,999","desc":"Clean profile & menu site","features":["5 Pages Layout","Interactive PDF Menu display","Contact & Location Maps","Free Domain & Host (1 Yr)","1 Week Delivery"]},{"name":"Gold Restaurant Site","price":"₹19,999","desc":"Premium multi-page custom portal","features":["10 Pages Custom Layout","Interactive filterable food menus","SEO optimize local pack maps","WordPress Admin Dashboard CMS","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('table-reservation-system', 'business-software', 'Online Table Reservation System', '', 'Allow guests to reserve tables online, choose seating preferences, and receive automatic confirmation alerts.', '₹14,999', '["Interactive Floor Plan Selections","SMS & WhatsApp Reservation Alerts","Real-time Table Status Grids","Peak Hours Management Mod","Customer Feedback Logs"]'::jsonb, '[{"name":"Standard Booking Portal","price":"₹14,999","desc":"Standard slot reservation system","features":["Online booking form widget","SMS auto confirmations","Table list management logs","Standard admin calendar","2 Weeks Delivery"]},{"name":"Gold Floor Plan Suite","price":"₹29,999","desc":"Advanced reservation system with layouts","features":["Interactive seat selection grids","WhatsApp API notifications","Payment integration for reservation deposits","Defaulter/No-show logs tracking","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('food-ordering-system', 'websites', 'Food Ordering System', '', 'Direct restaurant food ordering system to accept pickup and home delivery orders with no commission fees.', '₹19,999', '["Direct Stripe/Razorpay Payments","Custom Discount Coupon Engine","Delivery Radius Configuration Map","Kitchen Receipt Printer Sync","Real-time Order Tracker Dashboard"]'::jsonb, '[{"name":"Ordering Web Flow","price":"₹19,999","desc":"Standard direct ordering store","features":["Filterable menu ordering flow","Razorpay & UPI payment checkouts","SMS status updates","Kitchen receipt generator","2 Weeks Delivery"]},{"name":"Gold Order Dispatch Suite","price":"₹34,999","desc":"Advanced delivery & checkout hub","features":["Delivery radius calculations map","Advanced order pipeline dashboards","WhatsApp catalogue matching","Defaulter logs tracking","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-pos-system', 'business-software', 'Restaurant POS System', '', 'All-in-one restaurant billing, kitchen display sync, and table order tracking software.', '₹24,999', '["Quick Billing & Invoice PDFs","Kitchen Order Ticket (KOT) Sync","Table-wise Order Logs","Multi-payment Splits Methods","Detailed Sales Analytics Reports"]'::jsonb, '[{"name":"Standard Billing POS","price":"₹24,999","desc":"Standard billing terminal software","features":["Table billing ledger","KOT thermal prints","GST compliant billing","Basic revenue reports","2 Weeks Delivery"]},{"name":"Gold Kitchen ERP Suite","price":"₹44,999","desc":"Complete multi-terminal restaurant suite","features":["Kitchen display system (KDS) sync","Inventory stock tracking sync","Staff shifts logs tracking","Multi-payment ledger splits","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('qr-menu-solution', 'whatsapp-marketing', 'QR Menu Solution', '', 'Contactless digital QR menus where guests can scan, browse, order, and pay from their table.', '₹4,999', '["QR Code Poster Generators","Self-ordering Digital Cart","Table-wise Order Auto Allocator","WhatsApp Order Notifications","Payment at Table Gateway"]'::jsonb, '[{"name":"Scan Only Menu","price":"₹4,999","desc":"Basic QR scan menu catalog","features":["Filterable mobile digital menu","Unique QR poster layout PDF","Admin menu manager panel","Standard WhatsApp links","3 Days Delivery"]},{"name":"Gold Self-Order QR","price":"₹12,999","desc":"Interactive table self-order suite","features":["Scan-to-order web checkout","Table-wise order notifications dashboard","Integrated digital pay-at-table gateways","Review collection popup widgets","1 Week Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('delivery-management-system', 'business-software', 'Delivery Management System', '', 'Real-time delivery driver tracking, order dispatching dashboard, and estimated arrival updates.', '₹14,999', '["Driver Mobile Tracking Maps","Auto Order Dispatch Rules","Customer Live Status Trackers","Delivery Partner API Syncs","Driver Payment Ledgers"]'::jsonb, '[{"name":"Standard Dispatch","price":"₹14,999","desc":"Basic driver dispatch panel","features":["Manual order dispatch tracker","Driver assignment records","SMS tracking links to customers","Driver daily logs","2 Weeks Delivery"]},{"name":"Gold GPS Live Flow","price":"₹29,999","desc":"Advanced automated mapping suite","features":["Real-time GPS tracker dashboard","Auto-allocation round-robin dispatch","WhatsApp API live updates","Integration with Dunzo/Shadowfax","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('loyalty-program', 'business-software', 'Loyalty Program', '', 'Customer loyalty cards, rewards points, discount coupons, and birthday promotion automation.', '₹9,999', '["Customer Points Balance Accounts","Digital Membership Card PDFs","Loyalty Tier Rules (Bronze, Gold)","Auto Promo SMS Campaigns","Detailed Engagement Analytics"]'::jsonb, '[{"name":"Points Wallet Standard","price":"₹9,999","desc":"Standard point credit tracker","features":["Point deposit/redeem panels","SMS transaction reports","Standard member directory","Basic analytics dashboard","1 Week Delivery"]},{"name":"Gold Loyalty Automation","price":"₹19,999","desc":"Advanced multi-tier marketing engine","features":["Multi-tier membership settings","Automated Birthday WhatsApp/SMS campaigns","Digital card passbook downloads","Broker engagement insights","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-mobile-app', 'mobile-apps', 'Restaurant Mobile App', '', 'Native Android & iOS apps for food delivery, table booking, and instant push promotions.', '₹49,999', '["In-app Menu & Order Cart","Table Reservation Scheduler","Push Notice Promotions Widget","Live Driver GPS Tracking","Google Play & Apple App Store Publish"]'::jsonb, '[{"name":"Standard Food App","price":"₹49,999","desc":"Direct order customer native app","features":["Custom category food menus","In-app Razorpay and UPI checkout","SMS order status alert integrations","Android version publish","4 Weeks Delivery"]},{"name":"Gold Full Campus Suite","price":"₹79,999","desc":"Double app suite (Customer + Driver)","features":["Customer App + Driver App","Live map route tracking","Zoom menu layouts","Play Store + Apple App Store publish","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-crm', 'business-software', 'Restaurant CRM', '', 'Track guest databases, order history profiles, dining preferences, and feedback logs.', '₹14,999', '["Detailed Guest Profiles Directory","Order History & Ticket Value logs","Dining Preference Trackers","Auto review collector SMS","Customer Segmentation Models"]'::jsonb, '[{"name":"Standard Guest CRM","price":"₹14,999","desc":"Standard client directory tool","features":["Profile database sheets","Standard transaction history","Auto email promotions alerts","Detailed segmentation tags","2 Weeks Delivery"]},{"name":"Gold Smart Guest Suite","price":"₹29,999","desc":"AI customer profiling dashboard","features":["Average order value (AOV) metrics","WhatsApp automation feedback collection","Birthday auto campaign engines","Bespoke marketing triggers","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-digital-marketing', 'digital-marketing', 'Restaurant Digital Marketing', '', 'High-ROI digital marketing campaigns - Instagram food photography, local SEO, and Meta ads.', '₹12,999/mo', '["High quality Food Graphic Designs","Meta Local Food Lead Ads","Google Maps Local search ranking","Influencer Tie-up Strategy","Monthly ROI Analytics Audits"]'::jsonb, '[{"name":"Cafe Growth Pack","price":"₹12,999/mo","desc":"Social + maps local rankings pack","features":["16 Custom branding food graphics","GMB profile local optimizations","Local meta ads setup","Standard review boost campaign","Cancel Anytime"]},{"name":"Restaurant Authority Pack","price":"₹24,999/mo","desc":"Complete brand authority marketing","features":["30 Custom posts (daily graphics/reels)","Paid local google search ads campaign","Influencer partnership outreach","WhatsApp lead verification integrations","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('salon-web-dev', 'websites', 'Salon Website Development', '', 'Stunning, fast, and optimized websites for salons, spas, and wellness centers showcasing lists of services.', '₹9,999', '["Service List & Price Menus","Google Maps Local Embed","Staff Profile Portfolios","Appointment Request Callouts","Responsive Mobile Designs"]'::jsonb, '[{"name":"Standard Salon Site","price":"₹9,999","desc":"Clean page listing services & team","features":["5 Pages Layout","Online service menu display","WhatsApp booking redirect links","Free Domain & Host (1 Yr)","1 Week Delivery"]},{"name":"Gold Salon Portal","price":"₹19,999","desc":"Premium multi-page custom portal","features":["10 Pages Custom Layout","Stylist portfolio slider widget","Local search map citation boost","WordPress Admin Dashboard CMS","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('salon-appointment-booking', 'business-software', 'Appointment Booking System', '', 'Easy online booking software for salons so clients can self-schedule appointments and get reminders.', '₹14,999', '["Stylist Calendar Views","Real-time Slot Bookings","WhatsApp/SMS Automated Reminders","Reschedule & Cancellation Logs","Payment Deposit Collection"]'::jsonb, '[{"name":"Standard Booking Portal","price":"₹14,999","desc":"Standard slot reservation system","features":["Online booking form widget","SMS auto confirmations","Table list management logs","Standard admin calendar","2 Weeks Delivery"]},{"name":"Gold Stylist Suite","price":"₹24,999","desc":"Advanced reservation system with staff profiles","features":["Stylist wise profile bookings","WhatsApp API confirmations","Deposit collections on checkout","Automatic queue distribution","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('salon-management-software', 'business-software', 'Salon Management Software', '', 'Manage salon operations, staff calendars, service commissions, and daily check-ins easily.', '₹19,999', '["Stylist Rota Calendars","Commission Billing Calculators","Quick Check-in Desk","Retail Product Stock Sync","Revenue Performance Tracker"]'::jsonb, '[{"name":"Standard Management Panel","price":"₹19,999","desc":"Basic booking & check-in software","features":["Daily stylist schedule tables","Commission calculation sheet","Standard sales reports","Retail sales logging","2 Weeks Delivery"]},{"name":"Gold Multi-Chair Suite","price":"₹39,999","desc":"Complete enterprise salon management","features":["Unlimited chair allocation grids","Staff check-in biometric hooks","Inventory low-stock alerts","Multi-payment ledger splits","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('spa-management-system', 'business-software', 'Spa Management System', '', 'Complete billing, cabin allocations, therapist schedules, and feedback logs software for spas.', '₹24,999', '["Room & Cabin Grid Allocation","Therapist Shift Planners","Therapy Service Billing","Consent Form Digital Signature","Detailed Performance Insights"]'::jsonb, '[{"name":"Spa Dispatch Basic","price":"₹24,999","desc":"Standard room allocation portal","features":["Room assignment log tables","Therapist schedules grids","Standard billing receipts","Basic feedback collector","2 Weeks Delivery"]},{"name":"Gold Wellness ERP","price":"₹44,999","desc":"Complete spa booking & resource planning","features":["Digital client consent forms e-sign","Product consumption logging","WhatsApp notifications on booking","Commissions allocation engine","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('membership-management', 'business-software', 'Membership Management', '', 'A structured membership system to define tiers, collect annual fees, provide member benefits, and build a loyal community around your cause.', '₹24,999', '["Tiered Membership Plans","Online Membership Fee Collection","Member-only Content & Resources","Automatic Renewal Reminders","Digital Membership Cards"]'::jsonb, '[{"name":"Basic Membership","price":"₹24,999","desc":"Simple membership portal","features":["2 Membership Tiers","Fee Collection","Member Database","Email Reminders","3 Weeks Delivery"]},{"name":"Community Pro","price":"₹49,999","desc":"Full membership community","features":["Unlimited Tiers","Digital Cards","Member-only Content","Voting & Polls","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('customer-crm', 'business-software', 'Customer CRM', '', 'Keep complete customer profiles containing service logs, hair/skin preferences, and contact details.', '₹14,999', '["Detailed Client Profile History","Hair/Skin Preference Files","Average spend & visit records","Review auto-collect SMS widgets","Audience Segmentation Tag Tags"]'::jsonb, '[{"name":"Standard Client CRM","price":"₹14,999","desc":"Standard client directory tool","features":["Profile database sheets","Standard transaction history","Auto email promotions alerts","Detailed segmentation tags","2 Weeks Delivery"]},{"name":"Gold Client Profiler","price":"₹29,999","desc":"AI customer profiling dashboard","features":["Average order value (AOV) metrics","WhatsApp automation feedback collection","Birthday auto campaign engines","Bespoke marketing triggers","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('billing-software', 'business-software', 'Billing Software', '', 'Generate fast invoices, track retail product inventory, and calculate GST logs.', '₹12,999', '["Fast Thermal Receipt Printing","GST Compliant Tax billing","Retail product inventory track","Cash/Card/UPI transaction logger","Daily cash drawer balancing"]'::jsonb, '[{"name":"Standard Billing POS","price":"₹12,999","desc":"Standard billing terminal software","features":["Service billing ledger","KOT thermal prints","GST compliant billing","Basic revenue reports","1 Week Delivery"]},{"name":"Gold Inventory Billing Suite","price":"₹24,999","desc":"Advanced inventory-synced billing","features":["Bar-code scanning inventory tracking","Automatic tax billing configurations","Supplier inventory checks","Advanced digital payment links","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('wellness-mobile-app', 'mobile-apps', 'Wellness Mobile App', '', 'Native Android & iOS app for online booking, service catalogs, digital membership passes, and push updates.', '₹49,999', '["Filterable Service Menu Catalog","Stylist Booking Calendar Widget","In-app Razorpay and UPI checkout","Push Notice Promotions Widget","Play/App Store Publishing"]'::jsonb, '[{"name":"Standard Salon App","price":"₹49,999","desc":"Direct order customer native app","features":["Custom category services list","In-app booking & payments","SMS order status alert integrations","Android version publish","5 Weeks Delivery"]},{"name":"Gold Dual App Suite","price":"₹79,999","desc":"Double app suite (Customer + Staff)","features":["Customer App + Stylist App","Live push alerts notification board","Saved booking logs tracking","Play Store + Apple App Store publish","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('marketing-automation', 'whatsapp-marketing', 'Marketing Automation', '', 'Auto reminders for appointments, birthday greeting promotions, and feedback collection via WhatsApp.', '₹9,999', '["Official WhatsApp Business API setup","Bulk SMS/WhatsApp broadcast tools","Automated Birthday discount engines","Auto feedback review collection","Campaign performance statistics"]'::jsonb, '[{"name":"Standard Auto Broadcast","price":"₹9,999","desc":"Manual broadcast scheduler portal","features":["API broadcast portal","SMS templates scheduler panel","GMB review collection widget","Standard contact tags","1 Week Delivery"]},{"name":"Gold Lead Nurturing Engine","price":"₹19,999","desc":"AI automated broadcast triggers","features":["WhatsApp API automated alerts triggers","Monthly campaigns analysis reports","Automated birthday discount engines","Review collections templates sync","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('salon-seo-services', 'digital-marketing', 'Salon SEO Services', '', 'Local salon SEO to rank high on maps search and keywords like "best haircut/salon near me".', '₹9,999/mo', '["Local Stylist Keywords","Google Maps Business Optimisation","Location Specific SEO Setup","High DA local citations","Monthly GMB reports audit"]'::jsonb, '[{"name":"Salon Local Rank","price":"₹9,999/mo","desc":"Local project keywords ranking package","features":["15 Local project keywords","GMB profile local optimizations","Project microsite speed checks","Standard backlinks (10/mo)","3 Month Commit"]},{"name":"Beauty Authority SEO","price":"₹19,999/mo","desc":"Complete brand authority builder package","features":["40 High volume local keywords","Monthly blogs & project reviews writing","High-DA local links (25/mo)","Real-time rankings tracking panels","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('travel-booking-website', 'websites', 'Travel Booking Website', '', 'Launch a fully functional travel booking website that allows users to search, compare, and book flights, hotels, and tours seamlessly online.', '₹29,999', '["Real-time Search & Filtering","Secure Payment Gateway","Multi-currency Support","User Accounts & Booking History","Reviews & Ratings"]'::jsonb, '[{"name":"Starter","price":"₹29,999","desc":"Basic booking website","features":["5 Pages","Contact Forms","Basic Search","Mobile Responsive","2 Weeks Delivery"]},{"name":"Professional","price":"₹59,999","desc":"Advanced booking portal","features":["15 Pages","Payment Integration","User Accounts","Reviews System","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('tour-package-management', 'business-software', 'Tour Package Management', '', 'A complete system to create, manage, and sell tour packages online. Includes dynamic itinerary builders, availability calendars, and booking management.', '₹34,999', '["Dynamic Itinerary Builder","Availability & Inventory Management","Multi-day Tour Setup","Custom Add-ons & Extras","B2B & B2C Portals"]'::jsonb, '[{"name":"Basic","price":"₹34,999","desc":"Simple package management","features":["Up to 50 Packages","Basic Itineraries","Enquiry Forms","Admin Dashboard","3 Weeks Delivery"]},{"name":"Pro","price":"₹69,999","desc":"Full online booking system","features":["Unlimited Packages","Online Booking","Dynamic Pricing","Supplier Portal","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hotel-booking-system', 'websites', 'Hotel Booking System', '', 'Empower your hotel or resort with a robust direct booking engine. Bypass OTA commissions and take control of your reservations.', '₹39,999', '["Real-time Room Inventory","Secure Online Payments","Channel Manager Integration","Promo Codes & Discounts","Guest Management CRM"]'::jsonb, '[{"name":"Boutique","price":"₹39,999","desc":"Single property booking engine","features":["Up to 50 Rooms","Direct Booking","Payment Gateway","Basic CRM","4 Weeks Delivery"]},{"name":"Resort","price":"₹79,999","desc":"Full hotel management system","features":["Unlimited Rooms","Channel Manager Sync","Promo Engine","Advanced CRM","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('flight-booking-integration', 'business-software', 'Flight Booking Integration', '', 'Integrate global flight booking capabilities into your travel platform using GDS (Global Distribution System) APIs.', '₹74,999', '["Global Flight Search","Real-time Fares & Availability","Multi-city & Round Trip","Seat Selection","Baggage Allowances"]'::jsonb, '[{"name":"Integration","price":"₹74,999","desc":"Basic flight integration","features":["Single GDS API","Flight Search","Booking Flow","Markup Management","6 Weeks Delivery"]},{"name":"Advanced","price":"₹1,24,999","desc":"Multi-GDS integration","features":["Multi-GDS / LCCs","Ancillary Services","Advanced Filters","B2B Portal","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('travel-crm', 'business-software', 'Travel CRM', '', 'A specialized CRM designed for the travel industry to manage leads, track inquiries, build quotes, and nurture client relationships effectively.', '₹24,999', '["Lead Capture & Management","Custom Itinerary Quotations","Automated Follow-ups","Client Booking History","Supplier Database"]'::jsonb, '[{"name":"Starter CRM","price":"₹24,999","desc":"For small travel agencies","features":["Up to 5 Users","Lead Management","Basic Quotes","Email Integration","3 Weeks Delivery"]},{"name":"Pro CRM","price":"₹54,999","desc":"Advanced automation CRM","features":["Up to 20 Users","Custom Itinerary Builder","WhatsApp API","Advanced Reports","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('travel-mobile-app', 'mobile-apps', 'Travel Mobile App', '', 'Build custom iOS and Android applications for your travel business, allowing users to book, manage itineraries, and access travel guides on the go.', '₹69,999', '["Native iOS & Android Apps","Offline Itinerary Access","Push Notifications for Updates","In-App Booking","Location-Based Guides"]'::jsonb, '[{"name":"Companion App","price":"₹69,999","desc":"Itinerary management app","features":["Offline Itineraries","Digital Vouchers","Push Notifications","Basic Chat","6 Weeks Delivery"]},{"name":"Booking App","price":"₹1,29,999","desc":"Full booking app","features":["In-App Booking","Payment Gateway","User Profiles","Location Guides","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('visa-management-system', 'business-software', 'Visa Management System', '', 'A secure, efficient system for visa consultants and agencies to manage applications, track statuses, and communicate with clients seamlessly.', '₹34,999', '["Online Application Forms","Document Upload & Verification","Automated Status Updates","Embassy Guidelines Database","Payment Collection"]'::jsonb, '[{"name":"Basic Portal","price":"₹34,999","desc":"Simple visa management","features":["Online Forms","Document Upload","Status Tracking","Email Alerts","4 Weeks Delivery"]},{"name":"Advanced System","price":"₹74,999","desc":"Full automation system","features":["Client Portal","WhatsApp Alerts","Payment Integration","Task Manager","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('tour-guide-portal', 'business-software', 'Tour Guide Portal', '', 'A dedicated platform to manage your network of tour guides, assign tours, track availability, and handle payments efficiently.', '₹49,999', '["Guide Profiles & Specialties","Availability Calendar","Automated Tour Assignment","GPS Tracking (Optional)","In-App Messaging"]'::jsonb, '[{"name":"Standard Portal","price":"₹49,999","desc":"Core guide management","features":["Guide Profiles","Availability Calendar","Tour Assignment","Admin Dashboard","6 Weeks Delivery"]},{"name":"Pro Portal","price":"₹94,999","desc":"Advanced management with App","features":["Mobile App for Guides","Automated Payouts","In-App Chat","Rating System","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('travel-marketing-services', 'digital-marketing', 'Travel Marketing Services', '', 'Inspire wanderlust with stunning destination content, travel reels, and targeted campaigns on Instagram & Facebook.', '₹12,999/mo', '["Destination Instagram Reels","Facebook Travel Lead Ads","Influencer Collaborations","Seasonal Campaign Planning","Monthly Analytics Reports"]'::jsonb, '[{"name":"Travel Growth Pack","price":"₹12,999/mo","desc":"Social media brand building","features":["15 Custom travel posts","Instagram + Facebook ads","GMB profile management","Standard monthly reports","Cancel Anytime"]},{"name":"Travel Authority Pack","price":"₹24,999/mo","desc":"Full travel marketing suite","features":["30 Posts + destination reels","Influencer partnership outreach","Seasonal promotional campaigns","WhatsApp lead automation","Cancel Anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-travel', 'digital-marketing', 'SEO for Travel Business', '', 'Rank for destination and package searches on Google to drive organic travel enquiries without ad spend.', '₹9,999/mo', '["Destination Page SEO","Travel Blog Content Creation","Google Maps Local Ranking","Package Schema Markup","Monthly Rankings Reports"]'::jsonb, '[{"name":"Travel Local Rank","price":"₹9,999/mo","desc":"Local travel SEO package","features":["15 Destination keywords","GMB profile optimizations","Destination page speed audit","Standard backlinks (10/mo)","3 Month Commit"]},{"name":"Travel Authority SEO","price":"₹19,999/mo","desc":"Complete travel SEO package","features":["40 High volume travel keywords","Monthly travel blogs (4/mo)","High-DA travel links (20/mo)","Full schema markup setup","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-travel-business', 'digital-marketing', 'SEO for Travel Business', '', 'A targeted SEO strategy to help your travel agency, hotel, or tour company rank high on Google for high-intent travel keywords and destination searches.', '₹14,999/mo', '["Travel Keyword Research","Destination Page Optimization","Local SEO & GMB Optimization","Travel Blog Content Creation","High-Quality Backlink Building"]'::jsonb, '[{"name":"Destination SEO","price":"₹14,999/mo","desc":"Focus on core offerings","features":["20 Target Keywords","On-page SEO","2 Blog Posts/mo","GMB Management","Monthly Reports"]},{"name":"Travel Authority","price":"₹29,999/mo","desc":"Aggressive growth plan","features":["50 Target Keywords","Technical SEO","4 Blog Posts/mo","Link Building","Schema Markup"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('law-firm-website-development', 'websites', 'Law Firm Website Development', '', 'A highly professional, secure, and fast-loading website designed specifically for law firms to showcase practice areas, attorney profiles, and generate client leads.', '₹24,999', '["Practice Area Showcases","Attorney Directory & Profiles","Secure Client Portal","Lead Generation Forms","Blog & Legal Insights"]'::jsonb, '[{"name":"Starter","price":"₹24,999","desc":"Basic professional website","features":["Up to 10 Pages","Attorney Profiles","Contact Form","Mobile Responsive","2 Weeks Delivery"]},{"name":"Professional","price":"₹49,999","desc":"Advanced firm website","features":["Up to 25 Pages","Client Portal","Blog Setup","SEO Basics","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('case-management-system', 'business-software', 'Case Management System', '', 'A secure, cloud-based case management system to track case progress, manage court dates, store documents, and collaborate with your legal team.', '₹49,999', '["Case Tracking Dashboard","Court Date Calendar & Reminders","Secure Document Storage","Task Management","Team Collaboration Tools"]'::jsonb, '[{"name":"Basic","price":"₹49,999","desc":"Simple case tracking","features":["Case Dashboard","Calendar","Document Storage","Up to 5 Users","4 Weeks Delivery"]},{"name":"Pro","price":"₹99,999","desc":"Advanced management system","features":["Client Portal","Time Tracking","Conflict Checking","Up to 20 Users","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('legal-crm', 'business-software', 'Legal CRM', '', 'A specialized Customer Relationship Management (CRM) tool for law firms to manage client intake, track lead sources, and automate follow-ups.', '₹29,999', '["Automated Client Intake","Lead Source Tracking","Email & SMS Automation","Consultation Scheduling","Custom Intake Forms"]'::jsonb, '[{"name":"Starter CRM","price":"₹29,999","desc":"Basic intake management","features":["Lead Tracking","Custom Forms","Email Automation","Up to 5 Users","3 Weeks Delivery"]},{"name":"Pro CRM","price":"₹59,999","desc":"Full pipeline management","features":["Advanced Automation","SMS Integration","Analytics Dashboard","Up to 15 Users","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('legal-appointment-booking', 'websites', 'Appointment Booking', '', 'An intelligent scheduling system that allows clients to book consultations based on your real-time availability, with automated reminders and payment processing.', '₹19,999', '["Real-time Calendar Sync","Automated Email/SMS Reminders","Online Payment Collection","Video Conferencing Integration","Time Zone Management"]'::jsonb, '[{"name":"Standard Booking","price":"₹19,999","desc":"Automated scheduling","features":["Calendar Sync","Email Reminders","Intake Forms","1 Week Delivery"]},{"name":"Premium Booking","price":"₹34,999","desc":"Paid & Virtual consultations","features":["Payment Integration","Zoom Integration","SMS Reminders","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('document-management-system', 'business-software', 'Document Management System', '', 'A robust digital filing system tailored for legal professionals, featuring advanced OCR search, version control, and secure sharing capabilities.', '₹39,999', '["OCR Text Search","Version Control & History","Secure Document Sharing","Access Role Management","E-signature Integration"]'::jsonb, '[{"name":"Cloud Docs","price":"₹39,999","desc":"Basic document storage","features":["Secure Storage","Folder Management","Basic Search","4 Weeks Delivery"]},{"name":"Advanced DMS","price":"₹79,999","desc":"Full featured document system","features":["OCR Search","Version Control","E-signatures","Audit Trails","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('legal-consultation-portal', 'websites', 'Legal Consultation Portal', '', 'A complete virtual platform allowing advocates to provide secure video consultations, share documents, and chat with clients remotely.', '₹59,999', '["Secure Video Conferencing","Encrypted Chat & Messaging","File Sharing","Session Recording (Optional)","Billing & Invoicing"]'::jsonb, '[{"name":"Basic Portal","price":"₹59,999","desc":"Secure chat & file sharing","features":["Encrypted Chat","File Sharing","Client Dashboard","6 Weeks Delivery"]},{"name":"Video Consultation","price":"₹99,999","desc":"Full virtual office","features":["Video Conferencing","Integrated Billing","Session Recording","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('client-management-system', 'business-software', 'Client Management System', '', 'Keep track of every client detail, from contact information to past case history, billing status, and communication logs in one centralized hub.', '₹34,999', '["Centralized Client Database","Communication Logs","Billing & Payment Status","Case History Tracking","Client Portal Access"]'::jsonb, '[{"name":"Standard CMS","price":"₹34,999","desc":"Basic client tracking","features":["Client Database","Communication Logs","Basic Reports","4 Weeks Delivery"]},{"name":"Pro CMS","price":"₹64,999","desc":"Advanced client portal","features":["Client Portal","Billing Integration","Automated Alerts","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('billing-invoice-management', 'business-software', 'Billing & Invoice Management', '', 'A specialized billing solution for law firms to track billable hours, generate professional invoices, handle retainer accounts, and accept online payments.', '₹29,999', '["Time & Expense Tracking","Automated Invoice Generation","Retainer Management (Trust Accounting)","Online Payment Gateway","Overdue Invoice Reminders"]'::jsonb, '[{"name":"Basic Billing","price":"₹29,999","desc":"Simple invoicing & tracking","features":["Time Tracking","Invoice Generation","Payment Gateway","3 Weeks Delivery"]},{"name":"Trust Accounting","price":"₹59,999","desc":"Advanced legal billing","features":["Retainer Management","Automated Reminders","Advanced Reports","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('legal-mobile-app', 'mobile-apps', 'Legal Mobile App', '', 'Custom iOS and Android apps for law firms to offer on-the-go access to case updates, secure messaging, document uploads, and appointment booking.', '₹79,999', '["Native iOS & Android Apps","Push Notifications","Secure Client Messaging","Mobile Document Scanner","Case Status Updates"]'::jsonb, '[{"name":"Client Portal App","price":"₹79,999","desc":"Basic client access app","features":["Status Updates","Secure Messaging","Push Notifications","8 Weeks Delivery"]},{"name":"Full Firm App","price":"₹1,39,999","desc":"Comprehensive mobile app","features":["Document Scanner","Payments","Biometric Login","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('law-firm-seo-services', 'digital-marketing', 'Law Firm SEO Services', '', 'Specialized Search Engine Optimization for law firms. We target high-intent legal keywords and optimize your local presence to ensure you rank when clients need you most.', '₹19,999/mo', '["Local SEO & GMB Optimization","Legal Keyword Strategy","Practice Area Page Optimization","High-Authority Legal Backlinks","Content Marketing (Legal Blogs)"]'::jsonb, '[{"name":"Local Domination","price":"₹19,999/mo","desc":"Focus on local search","features":["20 Keywords","GMB Optimization","2 Legal Articles/mo","Local Backlinks","Monthly Report"]},{"name":"Practice Area Growth","price":"₹39,999/mo","desc":"Aggressive growth strategy","features":["50 Keywords","Technical SEO","4 Legal Articles/mo","High-DA Backlinks","Bi-weekly Reports"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('manufacturing-erp', 'business-software', 'Manufacturing ERP', '', 'A comprehensive ERP system designed specifically for the manufacturing sector to unify operations, finance, supply chain, and production on a single platform.', '₹99,999', '["BOM (Bill of Materials) Management","Production Scheduling","Financial & Cost Accounting","Procurement & Vendor Portal","Order Management"]'::jsonb, '[{"name":"Core ERP","price":"₹99,999","desc":"Essential manufacturing modules","features":["Inventory & Orders","Basic BOM","Finance Module","Admin Dashboard","8 Weeks Delivery"]},{"name":"Enterprise ERP","price":"₹1,99,999","desc":"Full-scale factory management","features":["Multi-plant Support","Advanced Scheduling","Quality Control","Custom API Ecosystem","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('production-planning-system', 'business-software', 'Production Planning System', '', 'A dynamic scheduling and planning tool that aligns your production capacity with customer demand, minimizing downtime and maximizing throughput.', '₹59,999', '["Visual Gantt Chart Scheduling","Machine & Labor Capacity Planning","Material Requirement Planning (MRP)","Downtime Tracking","Job Routing & Sequencing"]'::jsonb, '[{"name":"Basic Planner","price":"₹59,999","desc":"Simple job scheduling","features":["Visual Scheduling","Job Routing","Shift Management","6 Weeks Delivery"]},{"name":"Smart MRP","price":"₹1,19,999","desc":"Advanced material & capacity planning","features":["Full MRP","Capacity Planning","Downtime Tracking","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('supply-chain-management', 'business-software', 'Supply Chain Management', '', 'A robust SCM platform to track the flow of goods, information, and finances from suppliers to manufacturers to wholesalers to consumers.', '₹69,999', '["Supplier Portal","Logistics Tracking","Demand Forecasting","Freight & Shipping Management","Purchase Order Automation"]'::jsonb, '[{"name":"SCM Core","price":"₹69,999","desc":"Supplier & PO management","features":["Supplier Portal","PO Automation","Basic Tracking","6 Weeks Delivery"]},{"name":"SCM Enterprise","price":"₹1,39,999","desc":"Full supply chain visibility","features":["Demand Forecasting","Logistics Integration","Advanced Analytics","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('warehouse-management', 'business-software', 'Warehouse Management', '', 'A complete Warehouse Management System (WMS) to optimize storage space, streamline picking and packing, and speed up dispatch operations.', '₹54,999', '["3D Warehouse Mapping","Put-away Optimization","Pick & Pack Workflows","Cross-docking Support","Shipping Label Generation"]'::jsonb, '[{"name":"Basic WMS","price":"₹54,999","desc":"Simple pick/pack/ship","features":["Storage Location Mapping","Pick Lists","Label Generation","5 Weeks Delivery"]},{"name":"Smart WMS","price":"₹99,999","desc":"Advanced routing & courier sync","features":["Optimized Pick Routing","Courier API Integration","Returns Management","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('vendor-management', 'business-software', 'Vendor Management', '', 'A centralized portal to onboard vendors, manage contracts, evaluate supplier performance, and process payments securely.', '₹39,999', '["Digital Vendor Onboarding","Contract Lifecycle Management","Supplier Performance Scorecards","RFP / Quotation Bidding","Invoice Processing"]'::jsonb, '[{"name":"Vendor Portal","price":"₹39,999","desc":"Onboarding & Invoicing","features":["Digital Onboarding","Invoice Uploads","Basic Directory","4 Weeks Delivery"]},{"name":"Procurement Suite","price":"₹79,999","desc":"Bidding & Scorecards","features":["RFP/Bidding Engine","Performance Scorecards","Contract Management","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-for-manufacturing', 'business-software', 'CRM for Manufacturing', '', 'A specialized CRM tailored for the long sales cycles, complex quoting, and distributor relationship management typical in manufacturing.', '₹44,999', '["B2B Account Management","Complex Quote & Proposal Generator","Sales Pipeline Tracking","Distributor Portal","Sample Request Tracking"]'::jsonb, '[{"name":"Sales Tracker","price":"₹44,999","desc":"Manage direct B2B sales","features":["Account Management","Pipeline Tracking","Basic Quoting","5 Weeks Delivery"]},{"name":"Channel CRM","price":"₹84,999","desc":"Direct sales + Distributor portal","features":["Distributor Portal","Complex Quoting","Sales Forecasting","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('quality-control-software', 'business-software', 'Quality Control Software', '', 'A digital QMS (Quality Management System) to standardize inspections, track defects, manage non-conformances (NCR), and ensure ISO compliance.', '₹49,999', '["Digital Inspection Checklists","Defect Tracking & Logging","CAPA (Corrective & Preventive Action)","SPC (Statistical Process Control) Charts","Document Control & SOPs"]'::jsonb, '[{"name":"Digital QA","price":"₹49,999","desc":"Digital checklists & tracking","features":["Digital Checklists","Defect Logging","Basic Reports","5 Weeks Delivery"]},{"name":"Full QMS","price":"₹94,999","desc":"Complete compliance suite","features":["CAPA Workflows","SPC Charts","Document Control","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('factory-automation-dashboard', 'business-software', 'Factory Automation Dashboard', '', 'An Industrial IoT (IIoT) dashboard that connects to your PLC/SCADA systems to provide real-time visibility into machine health, production rates, and OEE.', '₹64,999', '["Real-time Machine Monitoring","OEE (Overall Equipment Effectiveness) Calculation","Predictive Maintenance Alerts","Energy Consumption Tracking","Custom KPI Dashboards"]'::jsonb, '[{"name":"Basic Monitoring","price":"₹64,999","desc":"Machine status & counts","features":["Real-time Status","Production Counts","Basic Dashboard","6 Weeks Delivery"]},{"name":"Smart Factory","price":"₹1,24,999","desc":"OEE & Predictive analytics","features":["OEE Analytics","Predictive Alerts","Energy Tracking","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('industrial-website-development', 'websites', 'Industrial Website Development', '', 'Professional, technical websites designed for manufacturing companies to showcase capabilities, product catalogs, and certifications to global buyers.', '₹29,999', '["Dynamic Product Catalogs","Technical Spec Sheet Downloads","Facility & Equipment Showcase","Request for Quote (RFQ) Engine","Certification Display (ISO, etc.)"]'::jsonb, '[{"name":"Corporate Profile","price":"₹29,999","desc":"Professional capability showcase","features":["Up to 15 Pages","Facility Showcase","Basic Contact Forms","4 Weeks Delivery"]},{"name":"Digital Catalog","price":"₹59,999","desc":"Full product & RFQ site","features":["Dynamic Product Catalog","RFQ Engine","Spec Downloads","SEO Setup","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ngo-website-development', 'websites', 'NGO Website Development', '', 'A professionally designed, high-impact website for your NGO or non-profit that communicates your mission, builds trust with donors, and drives conversions.', '₹19,999', '["Impact Storytelling Pages","Online Donation Integration","Project & Program Showcases","Beneficiary Stories & Galleries","Volunteer Sign-up Forms"]'::jsonb, '[{"name":"Impact Starter","price":"₹19,999","desc":"Essential NGO online presence","features":["Up to 10 Pages","Donation Button","Volunteer Form","Mobile Responsive","2 Weeks Delivery"]},{"name":"Mission Pro","price":"₹39,999","desc":"Full-featured NGO website","features":["Up to 25 Pages","Donation Gateway","Project Showcases","Blog & News","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('donation-management-system', 'business-software', 'Donation Management System', '', 'A comprehensive digital system to accept online donations, manage donor records, generate tax receipts (80G), and analyze fundraising performance.', '₹34,999', '["Online Payment Gateway (UPI, Card, Net Banking)","Automated 80G Tax Receipt Generation","Donor Database & History","Recurring Donation Setup","Campaign-wise Donation Tracking"]'::jsonb, '[{"name":"Standard DMS","price":"₹34,999","desc":"Core donation tracking","features":["Online Payment Gateway","80G Receipt Generation","Donor Database","Email Alerts","4 Weeks Delivery"]},{"name":"Advanced DMS","price":"₹69,999","desc":"Full fundraising intelligence","features":["Recurring Donations","Campaign Tracking","Financial Reports","WhatsApp Integration","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('volunteer-management', 'business-software', 'Volunteer Management', '', 'A dedicated platform to manage your volunteer lifecycle — from online applications and onboarding to scheduling, hour tracking, and appreciation.', '₹29,999', '["Online Volunteer Application Forms","Skills & Interest Matching","Event & Shift Scheduling","Volunteer Hour Tracking","Digital Certificate Generation"]'::jsonb, '[{"name":"Volunteer Hub","price":"₹29,999","desc":"Core volunteer coordination","features":["Application Forms","Scheduling","Hour Tracking","Email Alerts","4 Weeks Delivery"]},{"name":"Volunteer Pro","price":"₹54,999","desc":"Advanced management with App","features":["Mobile App","Digital Certificates","Skills Matching","Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-management-platform', 'business-software', 'Event Management Platform', '', 'A complete digital platform to plan, promote, and manage NGO events — from gala dinners and marathon runs to webinars and community drives.', '₹24,999', '["Event Creation & Landing Pages","Online Ticket & RSVP Management","Donation Goal Thermometer","Sponsor Management","QR Code Check-in System"]'::jsonb, '[{"name":"Event Starter","price":"₹24,999","desc":"Single event management","features":["Event Landing Page","RSVP Management","QR Check-in","Email Blast","2 Weeks Delivery"]},{"name":"Event Suite","price":"₹49,999","desc":"Multi-event management platform","features":["Multi-event Dashboard","Ticketing & Donations","Sponsor Portal","Analytics","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fundraising-portal', 'business-software', 'Fundraising Portal', '', 'A multi-campaign fundraising portal where donors can browse active causes, make donations, track impact, and share campaigns on social media.', '₹39,999', '["Multi-campaign Listing","Individual Campaign Pages with Goal Tracker","Peer-to-Peer Fundraising","Social Sharing Integration","Donor Wall of Fame"]'::jsonb, '[{"name":"Campaign Portal","price":"₹39,999","desc":"Up to 5 active campaigns","features":["5 Campaign Pages","Goal Tracker","Donation Gateway","Social Sharing","4 Weeks Delivery"]},{"name":"Impact Platform","price":"₹74,999","desc":"Full peer-to-peer fundraising","features":["Unlimited Campaigns","Peer-to-Peer Tools","Donor Wall","Advanced Analytics","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('campaign-management', 'business-software', 'Campaign Management', '', 'A digital command center to plan and manage awareness campaigns — coordinating messaging, channels, volunteers, and outcomes from a single dashboard.', '₹34,999', '["Campaign Planning & Calendar","Multi-channel Message Scheduling (Email, WhatsApp, Social)","Petition & Pledge Collection","Supporter Database Segmentation","A/B Testing for Messaging"]'::jsonb, '[{"name":"Campaign Hub","price":"₹34,999","desc":"Manage one campaign at a time","features":["Campaign Dashboard","Email & WhatsApp Blasts","Petition Forms","Basic Analytics","4 Weeks Delivery"]},{"name":"Multi-Campaign Suite","price":"₹64,999","desc":"Run multiple campaigns simultaneously","features":["Unlimited Campaigns","Supporter Segmentation","A/B Testing","Full Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ngo-mobile-app', 'mobile-apps', 'NGO Mobile App', '', 'A branded iOS and Android mobile application for your NGO to engage donors, update supporters, register volunteers, and process donations on the go.', '₹69,999', '["Branded iOS & Android App","In-App Donation with UPI/Card","Push Notifications for Campaigns & Updates","Project Progress Updates","Volunteer Registration & Scheduling"]'::jsonb, '[{"name":"Supporter App","price":"₹69,999","desc":"Engage donors & supporters","features":["iOS & Android App","Push Notifications","In-App Donations","News Feed","8 Weeks Delivery"]},{"name":"Full NGO App","price":"₹1,19,999","desc":"Complete NGO mobile platform","features":["Volunteer Management","Event RSVPs","Campaign Updates","Offline Content","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-for-ngos', 'business-software', 'CRM for NGOs', '', 'A purpose-built CRM for non-profits to consolidate donor data, track interactions, segment audiences, and run targeted communications to build lasting relationships.', '₹29,999', '["360° Donor Profiles","Donation History & RFM Analysis","Volunteer & Partner Tracking","Automated Follow-up Sequences","Grant Application Tracking"]'::jsonb, '[{"name":"NGO CRM Starter","price":"₹29,999","desc":"Core donor management","features":["Donor Profiles","Donation History","Email Campaigns","Basic Reports","4 Weeks Delivery"]},{"name":"NGO CRM Pro","price":"₹59,999","desc":"Advanced relationship intelligence","features":["RFM Analysis","Automated Workflows","Grant Tracking","Advanced Dashboards","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-marketing-for-ngos', 'digital-marketing', 'Digital Marketing for NGOs', '', 'Specialized digital marketing services for non-profits, including Google Ad Grants management, social media campaigns, SEO for NGO websites, and email marketing.', '₹14,999/mo', '["Google Ad Grants Management ($10,000/mo)","Meta Ads for Cause Awareness & Donations","SEO for NGO Websites","Social Media Management","Email Campaign Automation"]'::jsonb, '[{"name":"NGO Growth","price":"₹14,999/mo","desc":"Awareness & social growth","features":["Social Media Mgt","Google Grants Setup","Basic SEO","10 Posts/mo","Monthly Report"]},{"name":"NGO Impact","price":"₹29,999/mo","desc":"Full-funnel digital strategy","features":["Google Grants Mgt","Meta Donation Ads","Email Campaigns","Advanced SEO","Bi-weekly Reports"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hospital-website-development', 'business-software', 'Hospital Website Development', '', 'A modern hospital website is your digital front desk. We build fast, secure, mobile-first websites that showcase your specialties, doctors, facilities, and allow patients to book appointments online.', '₹14,999', '["Doctor Profile Pages","Online Appointment Booking","Department & Specialty Listings","Patient Testimonials","Emergency Contact Banner","Health Blog/News Section","Insurance Partner Listings","HIPAA-Compliant Contact Forms"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Perfect for small clinics","features":["5 Pages","Doctor Profiles","Appointment Form","Mobile Responsive","1 Week Delivery","1 Month Support"]},{"name":"Gold Plan","price":"₹29,999","desc":"For multi-specialty hospitals","features":["15 Pages","Online Booking System","Patient Portal","Blog/News CMS","SEO Optimization","2 Weeks Delivery","3 Months Support"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Full custom hospital portal","features":["Unlimited Pages","Custom Patient Dashboard","Appointment + Billing Integration","Telemedicine Module","Advanced Analytics","4 Weeks Delivery","6 Months Support"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('appointment-booking-system', 'business-software', 'Appointment Booking System', '', 'Our appointment booking systems eliminate manual scheduling chaos. Patients book online 24/7, doctors get organized calendars, and you reduce no-shows with automated reminders.', '₹19,999', '["Real-time Calendar Availability","SMS & Email Reminders","Multi-doctor Scheduling","Patient Self-rescheduling","Video Consultation Links","Waiting List Management","Insurance Verification","Appointment History"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Single-doctor scheduling","features":["1 Doctor Profile","Online Booking Form","Email Confirmations","Basic Calendar","1 Week Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Multi-doctor clinic system","features":["Up to 10 Doctors","SMS + Email Reminders","Patient Portal","Reporting Dashboard","Rescheduling Self-service","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Hospital-grade booking suite","features":["Unlimited Doctors","Video Consultation Integration","Insurance Module","Advanced Analytics","API Integration","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('patient-management-system', 'business-software', 'Patient Management System', '', 'A complete digital system to manage patient registrations, medical histories, diagnoses, prescriptions, and follow-ups — replacing paper files with an organized, searchable digital database.', '₹24,999', '["Patient Registration & Profiles","Medical History & Diagnosis Records","Prescription Management","Lab Report Uploads","Follow-up Scheduling","Ward/Bed Management","Discharge Summary Generator","Role-based Staff Access"]'::jsonb, '[{"name":"Silver Plan","price":"₹24,999","desc":"Small clinic system","features":["Up to 1,000 Patient Records","Basic Medical History","Prescription Module","Search & Filter","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Hospital-grade PMS","features":["Unlimited Records","Lab Report Management","Ward/Bed Tracking","Multi-staff Roles","Advanced Reports","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise hospital suite","features":["Full EHR System","HL7/FHIR Integration","Billing Module","Insurance Claims","Analytics Dashboard","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('medical-billing-software', 'business-software', 'Medical Billing Software', '', 'Automate medical billing, generate GST-compliant invoices, track payments, and manage insurance claims — all from one clean dashboard. Reduce billing errors and speed up cash flow.', '₹19,999', '["GST Invoice Generation","Insurance Claim Management","OPD/IPD Billing","Payment Tracking","Outstanding Balance Alerts","Daily/Monthly Reports","Discount & Concession Module","Multi-payment Gateway Support"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Basic billing system","features":["Invoice Generation","Payment Tracking","Basic Reports","OPD Billing","1 Week Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full medical billing suite","features":["OPD + IPD Billing","Insurance Claims Module","Outstanding Alerts","Detailed Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise billing platform","features":["Multi-branch Billing","Third-party HMS Integration","Custom Reports","Automated Insurance Claims","Dedicated Support","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-hospitals', 'business-software', 'SEO for Hospitals', '', 'When patients search for "best hospital near me" or specific treatments, we ensure your hospital appears at the top. Our healthcare SEO strategy drives organic traffic and qualified patient leads.', '₹9,999/mo', '["Local SEO & Google Maps Ranking","Medical Keyword Research","On-page Optimization","Technical SEO Audit & Fixes","Healthcare Backlink Building","Google Business Profile Management","Content Writing (Medical Blogs)","Competitor Analysis"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Local clinic visibility","features":["15 Keywords","On-page Optimization","GMB Management","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Hospital authority building","features":["35 Keywords","Technical SEO","Medical Blog Writing (4/mo)","High-DA Backlinks (8/mo)","Competitor Tracking","3-month minimum"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Dominant market leader SEO","features":["60+ Keywords","Daily Monitoring","Medical Blogs (8/mo)","Backlinks (20/mo)","Weekly Reports","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-marketing-for-clinics', 'business-software', 'Digital Marketing for Clinics', '', 'Attract, engage, and retain patients with targeted digital marketing — Facebook/Instagram ads, Google Ads, WhatsApp campaigns, and reputation management — all handled by our healthcare marketing team.', '₹12,999/mo', '["Facebook & Instagram Ad Campaigns","Google Search Ads (PPC)","WhatsApp Broadcast Campaigns","Review & Reputation Management","Patient Retargeting Ads","Landing Page Design","Lead Tracking Dashboard","Monthly Performance Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999/mo","desc":"Clinic brand awareness","features":["Facebook + Instagram Ads","12 Creative Posts/month","Basic Lead Tracking","Monthly Report","Cancel anytime"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Growth-focused campaign","features":["FB + Instagram + Google Ads","20 Posts + 4 Video Reels","WhatsApp Campaign","Reputation Management","Bi-weekly Reports","Cancel anytime"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Full digital domination","features":["All Platforms","Daily Posts","Google + Meta + YouTube Ads","Influencer Collaboration","Weekly Strategy Calls","Cancel anytime"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('school-website-development', 'business-software', 'School Website Development', '', 'Create a powerful digital presence for your educational institution. Showcase courses, faculty, events, achievements, and allow online admission enquiries with a professionally designed school website.', '₹12,999', '["Course & Program Listings","Faculty Profiles","Online Admission Enquiry","Events Calendar","Gallery & Virtual Tour","Notice Board / Announcements","Alumni Section","Transport & Hostel Info"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"Small school/coaching","features":["8 Pages","Course Listings","Enquiry Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"School/college portal","features":["20 Pages","Faculty Profiles","Events Calendar","Gallery","Announcement Board","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Full institution portal","features":["Unlimited Pages","Alumni Network","Virtual Tour","CMS Dashboard","Multi-language","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('student-management-system', 'business-software', 'Student Management System', '', 'Manage student registrations, academic records, attendance, results, and communications — all in one central system. Replace manual paperwork with an efficient, searchable digital platform.', '₹19,999', '["Student Enrollment & Profiles","Class & Section Management","Academic Performance Tracking","Parent Communication Portal","Document Management","ID Card Generation","Transfer Certificate Management","Report Card Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Small school (up to 500 students)","features":["Student Profiles","Class Management","Attendance Module","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Medium school (up to 2000 students)","features":["Full Student Management","Parent Portal","Result Management","ID Card Generator","Detailed Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹74,999","desc":"Large institution suite","features":["Unlimited Students","Multi-campus Support","Transfer Certificates","Govt. Report Formats","API Integration","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-examination-portal', 'business-software', 'Online Examination Portal', '', 'Replace physical exam papers with a powerful online examination system. Create MCQ and descriptive tests, set time limits, prevent cheating, and auto-generate results — saving enormous time and costs.', '₹24,999', '["MCQ & Descriptive Question Banks","Timed Exam Sessions","Anti-Cheating (Tab Switch Detection)","Auto Result Calculation","Randomized Question Order","Instant Score Reports","Multiple Attempt Configurations","Admin Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹24,999","desc":"Small batch exams","features":["Up to 200 Students","MCQ Exams","Auto Scoring","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹44,999","desc":"School/college platform","features":["Up to 2000 Students","MCQ + Descriptive","Anti-cheat Controls","Detailed Analytics","Question Bank CMS","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹84,999","desc":"Institution-wide platform","features":["Unlimited Students","All Exam Types","Live Proctoring","Custom Reports","Multi-tenant Support","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fee-management-system', 'business-software', 'Fee Management System', '', 'Automate fee collection with online payment options, automatic reminders for due fees, digital receipts, and detailed financial reports — eliminating manual fee collection chaos.', '₹14,999', '["Online Fee Payment (UPI/Card)","Fee Structure Configuration","Automatic Due Date Reminders","Digital Receipt Generation","Installment Plan Support","Defaulter Reports","Scholarship & Concession Module","Financial Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic fee collection","features":["Online Payment","Digital Receipts","Basic Reports","Due Reminders","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Complete fee management","features":["Installment Plans","Scholarship Module","Defaulter Reports","SMS Reminders","Financial Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-campus fee platform","features":["Multi-branch Fees","ERP Integration","Custom Report Builder","WhatsApp Reminders","Audit Logs","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('education-marketing-services', 'business-software', 'Education Marketing Services', '', 'Get more admissions with data-driven digital marketing. We run Facebook, Instagram, and Google ads targeting parents in your area, manage your social media, and build your school''s online reputation.', '₹9,999/mo', '["Facebook & Instagram Ads","Google Ads for Admissions","Social Media Management","Google Business Profile","Video Reel Production","Review Management","Landing Page Design","Lead Tracking Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Brand awareness","features":["Social Media Management","12 Posts/month","GMB Optimization","Basic Ad Campaign","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active admission leads","features":["FB + Google Ads","20 Posts + 4 Reels","Lead Tracking","WhatsApp Campaign","Bi-weekly Reporting"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full admission funnel","features":["All Platforms","Daily Posts","YouTube Ads","Video Production","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-marketing-services', 'business-software', 'Digital Marketing for Real Estate', '', 'Run targeted Facebook, Instagram, and Google campaigns to reach buyers actively searching for properties in your area — with lead tracking, retargeting, and regular creative campaigns.', '₹14,999/mo', '["Facebook & Instagram Lead Ads","Google Search & Display Ads","Video Ad Production","Retargeting Campaigns","Landing Page Design","WhatsApp Lead Campaigns","Lead CRM Integration","ROI Reporting Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999/mo","desc":"Brand awareness ads","features":["FB + Instagram Ads","Landing Page","Basic Lead Tracking","12 Creatives/month","Monthly Report"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active lead generation","features":["FB + Instagram + Google","20 Creatives + 4 Reels","Retargeting","CRM Integration","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-funnel campaign","features":["All Channels","Video Production","YouTube Ads","WhatsApp Campaign","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ecommerce-website-development', 'business-software', 'E-commerce Website Development', '', 'Launch a fully-featured e-commerce store with product catalog, secure checkout, payment gateway, inventory management, and admin dashboard — optimized for Indian buyers.', '₹14,999', '["Product Catalog Management","Secure Checkout","Multiple Payment Gateways","Order Management","Inventory Tracking","Customer Accounts","Discount & Coupon System","GST Invoice Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic store (up to 50 products)","features":["Product Catalog","Cart & Checkout","Payment Gateway","Mobile Responsive","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full e-commerce store","features":["Unlimited Products","GST Invoicing","Coupon System","Admin Dashboard","Order Management","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-vendor marketplace","features":["Vendor Dashboard","Advanced Analytics","Return Management","Loyalty Points","Custom App","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('inventory-management-system', 'business-software', 'Inventory Management System', '', 'Manage product stock levels across multiple warehouses, get low-stock alerts, track purchase orders from suppliers, and sync inventory with your online store automatically.', '₹14,999', '["Real-time Stock Tracking","Multi-warehouse Management","Purchase Order Management","Low Stock Alerts","Barcode / QR Scanning","Supplier Management","Stock Valuation Reports","E-commerce Sync"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic stock management","features":["Single Warehouse","Stock Tracking","Low Stock Alerts","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full inventory system","features":["Multi-warehouse","Purchase Orders","Barcode Scanning","E-commerce Sync","Detailed Reports","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise IMS","features":["ERP Integration","Supplier Portal","AI Demand Forecasting","Custom Analytics","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('order-tracking-system', 'business-software', 'Order Tracking System', '', 'Integrate with Shiprocket, Delhivery, BlueDart, and other logistics providers to give customers a branded real-time tracking experience — reducing support calls significantly.', '₹9,999', '["Multi-carrier Tracking Integration","Branded Tracking Page","SMS & Email Status Updates","Delivery ETA Display","Return & Refund Portal","Failed Delivery Management","Admin Shipment Dashboard","NDR (Non-Delivery Report) Handling"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic tracking","features":["1 Carrier","Tracking Page","Email Updates","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Multi-carrier tracking","features":["3 Carriers","SMS + Email Updates","Return Portal","NDR Management","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Enterprise logistics suite","features":["Unlimited Carriers","Custom Branded Portal","Analytics Dashboard","Smart Routing","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('social-media-marketing-ecommerce', 'business-software', 'Social Media Marketing for E-commerce', '', 'Grow your online store with high-converting social media campaigns — product showcases, influencer collaborations, Instagram shopping, retargeting ads, and seasonal sale campaigns.', '₹12,999/mo', '["Instagram & Facebook Product Ads","Instagram Shopping Setup","Influencer Collaboration","Retargeting Campaigns","Seasonal Sale Campaigns","Video Reel Production","UGC Strategy","ROI Tracking Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999/mo","desc":"Brand building","features":["FB + Instagram Management","15 Posts/month","Product Showcase Ads","Basic Retargeting","Monthly Report"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Sales-focused campaigns","features":["Instagram Shopping","20 Posts + 6 Reels","Influencer (2/month)","Retargeting Ads","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Full e-commerce growth","features":["All Platforms","Daily Content","Influencer (5/month)","YouTube Ads","Weekly Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-website-development', 'business-software', 'Restaurant Website Development', '', 'Create an appetizing online presence with a stunning restaurant website featuring your menu, photo gallery, table reservations, online ordering, and Google Maps integration.', '₹9,999', '["Digital Menu with Photos","Online Table Reservation","Photo Gallery","Online Food Ordering","Google Maps Integration","Chef & Team Profiles","Reviews & Testimonials","Social Media Feed"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic restaurant site","features":["6 Pages","Digital Menu","Reservation Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full restaurant portal","features":["Unlimited Pages","Online Ordering","Table Reservation System","Blog/Events","CMS Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹39,999","desc":"Multi-outlet restaurant","features":["Multi-branch Support","Loyalty Program Integration","Custom Design","Analytics","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-food-ordering-system', 'business-software', 'Online Food Ordering System', '', 'Get your own food ordering platform — free from Zomato and Swiggy commissions. Customers order directly, you keep 100% revenue. Includes payment, order tracking, and kitchen display.', '₹14,999', '["Custom Online Menu","Cart & Checkout","Payment Gateway Integration","Order Confirmation via SMS","Kitchen Display System","Delivery Zone Setup","Order History","Admin Order Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic ordering system","features":["Online Menu","Cart + Checkout","Payment Gateway","Email Confirmation","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full ordering platform","features":["Kitchen Display System","SMS Confirmation","Order Dashboard","Delivery Zones","Analytics","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-branch ordering system","features":["Multiple Outlets","Real-time Order Tracking","Driver Management","Loyalty Integration","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('food-delivery-app', 'business-software', 'Food Delivery App', '', 'Build your own food delivery app for Android and iOS with real-time order tracking, driver management, push notifications, and multi-restaurant support — complete commission-free delivery.', '₹74,999', '["Customer App (Android + iOS)","Restaurant Partner Dashboard","Driver/Delivery Boy App","Real-time GPS Tracking","Push Notifications","Payment Gateway","Rating & Review System","Analytics Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹74,999","desc":"Single restaurant delivery app","features":["Customer App (Android)","Driver App","GPS Tracking","Basic Analytics","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,29,999","desc":"Multi-restaurant delivery platform","features":["Customer App (Android + iOS)","Restaurant Dashboard","Driver App","Real-time Tracking","Analytics","10 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,99,999","desc":"Full delivery marketplace","features":["All Three Apps","Multi-city Support","Surge Pricing","AI Recommendations","Full Analytics Suite","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('pos-system', 'business-software', 'Restaurant POS System', '', 'Replace traditional billing machines with a cloud-based POS that handles table orders, kitchen tickets, inventory, and daily reports — accessible from tablet or PC.', '₹14,999', '["Touch-based Order Taking","Kitchen Display/Printer","Split Bill & Multiple Payments","Menu & Price Management","Daily Sales Reports","Inventory Integration","Staff Login & Role Control","GST Invoice Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic restaurant POS","features":["Touch POS Interface","Order Management","GST Billing","Basic Reports","Single Outlet","1 Week Setup"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full restaurant POS","features":["Kitchen Display System","Inventory Integration","Multi-payment","Staff Roles","Analytics","2 Weeks Setup"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Multi-outlet POS chain","features":["Multi-branch","Central Dashboard","Franchise Reports","Custom Integrations","4 Weeks Setup"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-restaurants', 'business-software', 'SEO for Restaurants', '', 'When hungry diners search for restaurants in your area, your restaurant should appear first. Our local restaurant SEO and Google Maps optimization drives hungry customers to your door.', '₹7,999/mo', '["Google Maps Ranking","Local Restaurant SEO","Menu Page SEO Optimization","Review Generation Strategy","Google Business Profile Management","Food Keyword Targeting","Local Backlink Building","Monthly Performance Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999/mo","desc":"Local restaurant visibility","features":["GMB Optimization","10 Keywords","Monthly Report","Review Strategy","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Restaurant SEO growth","features":["25 Keywords","Menu SEO","Food Blogs (2/mo)","Backlinks (5/mo)","Local Citations","3-month minimum"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Dominant local presence","features":["50 Keywords","4 Blogs/mo","Backlinks (15/mo)","Schema Markup","Weekly Reports","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('instagram-marketing-restaurant', 'business-software', 'Social Media Marketing for Restaurants', '', 'Grow your restaurant''s social following, showcase your dishes with mouth-watering content, run targeted local ad campaigns, and turn followers into diners.', '₹9,999/mo', '["Instagram & Facebook Management","Food Photography Direction","Video Reel Production","Targeted Local Ads","Story Campaigns","Influencer Food Review Collaborations","Contest & Giveaway Campaigns","Analytics & Growth Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Brand awareness","features":["Instagram + Facebook","15 Posts/month","Story Updates","Basic Ads","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Growth + leads","features":["20 Posts + 6 Reels","Targeted Local Ads","Influencer (1/month)","Contest Campaign","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full social domination","features":["All Platforms","Daily Content","Influencer (3/month)","YouTube Shorts","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('salon-website-development', 'business-software', 'Salon & Spa Website', '', 'A stunning salon website showcasing your services, team, gallery, pricing, and online booking — designed to attract premium clients and grow your brand online.', '₹8,999', '["Service Menu with Pricing","Online Appointment Booking","Staff Portfolio Pages","Before/After Gallery","Gift Voucher Sales","Google Maps Integration","Client Testimonials","Social Media Feed"]'::jsonb, '[{"name":"Silver Plan","price":"₹8,999","desc":"Basic salon website","features":["6 Pages","Service Menu","Booking Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹17,999","desc":"Full salon portal","features":["15 Pages","Online Appointment Booking","Team Profiles","Gift Voucher Sales","CMS Dashboard","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹32,999","desc":"Premium spa brand website","features":["Custom Design","E-commerce Products","Loyalty Integration","Multi-branch","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('appointment-booking-salon', 'business-software', 'Salon Appointment Booking System', '', 'Let clients book appointments online 24/7, choose their preferred stylist, get reminders, and reschedule easily — while you manage your full schedule from a single dashboard.', '₹7,999', '["Online Booking with Staff Selection","Real-time Slot Availability","SMS & WhatsApp Reminders","Cancellation & Rescheduling","Multi-service Booking","Walk-in + Online Combo","Waitlist Management","Daily Schedule Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999","desc":"Basic booking","features":["Online Booking","Email Confirmations","Admin Calendar","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹14,999","desc":"Smart booking system","features":["Staff Selection","SMS + WhatsApp Reminders","Rescheduling","Waitlist","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹29,999","desc":"Multi-outlet booking","features":["Multi-branch","Customer History","Service Packages","Loyalty Points","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('loyalty-rewards-salon', 'business-software', 'Salon Loyalty & Rewards Program', '', 'Implement a digital loyalty program that rewards clients for every visit and purchase — creating a habit loop that brings them back and increases spend per visit.', '₹7,999', '["Points per Visit/Service","Reward Redemption","Membership Tiers","Birthday & Anniversary Offers","WhatsApp Loyalty Notifications","Referral Bonus Program","Gift Voucher Integration","Client Retention Analytics"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999","desc":"Basic rewards card","features":["Points System","Digital Card","Email Updates","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹14,999","desc":"Full loyalty program","features":["Membership Tiers","WhatsApp Alerts","Birthday Offers","Referral Program","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹29,999","desc":"Multi-outlet loyalty","features":["Multi-branch Points","CRM Integration","AI Personalization","Custom Branding","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-store-salon-products', 'business-software', 'Online Store for Salon Products', '', 'Launch an e-commerce store selling professional beauty products, salon-brand retail items, and gift vouchers — creating a revenue stream that works even when the salon is closed.', '₹9,999', '["Product Catalog","Secure Checkout","Gift Voucher Sales","Subscription Box Option","Customer Accounts","Order Tracking","Inventory Management","Discount & Coupon System"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic product store","features":["Up to 30 Products","Cart + Checkout","Payment Gateway","Gift Vouchers","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full beauty e-commerce","features":["Unlimited Products","Subscription Boxes","Customer Accounts","Inventory Tracking","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Premium beauty marketplace","features":["Multi-brand Products","Loyalty Integration","AR Try-on (Optional)","Full Custom Design","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-salons', 'business-software', 'SEO for Salons', '', 'When people search for a haircut or facial in your city, your salon should be the first result. Our local salon SEO drives organic foot traffic and Google Maps visibility.', '₹6,999/mo', '["Google Maps Ranking","Local Salon SEO","Service Page Optimization","Review Generation","GMB Management","Local Backlinks","Beauty Blog Content","Competitor Analysis"]'::jsonb, '[{"name":"Silver Plan","price":"₹6,999/mo","desc":"Local salon visibility","features":["GMB Management","10 Keywords","Review Strategy","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹12,999/mo","desc":"Salon SEO growth","features":["20 Keywords","Service Page SEO","Beauty Blogs (2/mo)","Backlinks (5/mo)","3-month minimum"]},{"name":"Platinum Plan","price":"₹22,999/mo","desc":"Dominant local presence","features":["40 Keywords","Blogs (4/mo)","Backlinks (12/mo)","Schema Markup","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('instagram-marketing-salon', 'business-software', 'Instagram Marketing for Salons', '', 'Grow your salon on Instagram with stunning before/after content, trend-driven reels, beauty tips, and targeted local ad campaigns that turn followers into booked appointments.', '₹8,999/mo', '["Before/After Content Strategy","Instagram Reels Production","Targeted Local Ads","Influencer Collaborations","Story Campaigns & Polls","Beauty Trend Content","Hashtag Strategy","Booking Link in Bio Optimization"]'::jsonb, '[{"name":"Silver Plan","price":"₹8,999/mo","desc":"Brand presence","features":["Instagram Management","15 Posts/month","Stories","Basic Ads","Monthly Report"]},{"name":"Gold Plan","price":"₹16,999/mo","desc":"Active growth","features":["20 Posts + 8 Reels","Targeted Local Ads","Influencer (1/month)","Booking Link Optimization","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹29,999/mo","desc":"Premium brand domination","features":["All Platforms","Daily Content","Influencer (3/month)","YouTube Shorts","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('travel-agency-website', 'business-software', 'Travel Agency Website', '', 'Build a visually stunning travel website with tour packages, destination guides, booking forms, photo galleries, and customer testimonials — designed to inspire travel and drive direct bookings.', '₹12,999', '["Tour Package Listings","Destination Photo Galleries","Online Enquiry & Booking Forms","Trip Itinerary Display","Customer Reviews","Blog/Travel Guides","WhatsApp Chat Integration","Mobile Responsive Design"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"Basic travel site","features":["10 Pages","Package Listings","Enquiry Forms","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full travel portal","features":["Unlimited Packages","Itinerary Pages","Blog/Guides CMS","Review System","WhatsApp Integration","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Premium travel marketplace","features":["Booking System","Multi-operator","Live Availability","Payment Integration","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('tour-booking-system', 'business-software', 'Tour Booking & Management System', '', 'Accept online tour bookings, manage availability, collect advance payments, generate booking confirmations, and track all your tours from a single dashboard.', '₹19,999', '["Online Tour Booking","Real-time Seat Availability","Advance Payment Collection","Booking Confirmation PDF","Passenger List Management","Tour Calendar Dashboard","Cancellation & Refund Module","Agent/B2B Booking Portal"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Basic booking system","features":["Online Bookings","Payment Collection","Confirmation PDF","Basic Dashboard","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full tour management","features":["Availability Calendar","Agent Portal","Cancellation Module","Revenue Reports","Passenger Lists","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹74,999","desc":"Enterprise tour platform","features":["Multi-operator","Dynamic Pricing","OTA Integration","Full Analytics","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hotel-booking-platform', 'business-software', 'Hotel Booking Platform', '', 'Build your own hotel booking engine to accept direct reservations, manage room inventory, process payments, and reduce dependence on OTAs like MakeMyTrip and Booking.com.', '₹24,999', '["Room Type Listings with Photos","Real-time Availability Calendar","Direct Online Booking","Payment Integration","Booking Confirmation Emails","Check-in/Check-out Management","Rate Management","Guest Review System"]'::jsonb, '[{"name":"Silver Plan","price":"₹24,999","desc":"Basic hotel booking","features":["Room Listings","Availability Calendar","Online Booking","Payment Gateway","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Full hotel booking engine","features":["Rate Management","Review System","Channel Manager Integration","Analytics Dashboard","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Multi-property PMS","features":["Multi-property","PMS Integration","Dynamic Pricing","Corporate Rates","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('itinerary-planner', 'business-software', 'Custom Itinerary Planner', '', 'Build a custom itinerary planning tool where travelers input their preferences and get a personalized day-by-day trip plan — with hotel suggestions, activity recommendations, and booking options.', '₹14,999', '["Preference Input Form","AI-generated Itinerary","Day-by-Day Activity Schedule","Map Integration","Hotel & Activity Recommendations","PDF Itinerary Export","Budget Calculator","Shareable Trip Links"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Manual itinerary builder","features":["Template-based Builder","Day Plans","PDF Export","Map View","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Semi-automated planner","features":["Preference-based Generation","Hotel Recommendations","Budget Calculator","Shareable Links","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Full AI itinerary platform","features":["Full AI Generation","Real-time Availability","Dynamic Pricing","CRM Integration","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-for-travel', 'business-software', 'Travel CRM & Lead Management', '', 'A dedicated CRM for travel agencies to track every lead, manage follow-ups, send automated tour recommendations, and convert more inquiries into confirmed bookings.', '₹14,999', '["Lead Capture & Management","Follow-up Scheduler","Tour Recommendation Engine","WhatsApp & Email Integration","Booking Status Tracking","Agent Performance Dashboard","Revenue Reports","Client Travel History"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic lead tracker","features":["Lead Management","Follow-up Reminders","Basic Dashboard","Email Integration","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full travel CRM","features":["WhatsApp Integration","Booking Tracking","Agent Dashboard","Revenue Reports","Client History","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise travel CRM","features":["AI Follow-up Sequences","Multi-branch","Advanced Analytics","API Integrations","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('social-media-travel', 'business-software', 'Social Media Marketing for Travel', '', 'Grow your travel brand with stunning destination content, travel reels, and targeted campaigns to travelers in your demographic — turning dreamers into booked customers.', '₹9,999/mo', '["Destination Instagram Reels","Facebook Travel Ads","Influencer Travel Collaborations","Story Campaigns","User-Generated Content Strategy","Seasonal Campaign Planning","Engagement Campaigns","Monthly Analytics Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Travel brand building","features":["Instagram + Facebook","15 Posts/month","Basic Ads","Story Updates","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active booking campaigns","features":["20 Posts + 8 Reels","FB + Instagram Ads","Influencer (1/month)","Seasonal Campaigns","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Travel media domination","features":["All Platforms","Daily Travel Content","Influencer (3/month)","YouTube Travel","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('law-firm-website', 'business-software', 'Law Firm Website Development', '', 'Create a credibility-building law firm website that showcases your practice areas, attorney profiles, case results, client testimonials, and allows online consultation scheduling.', '₹12,999', '["Practice Area Pages","Attorney Profiles","Case Study Showcases","Online Consultation Booking","Blog/Legal Articles","Client Testimonials","Secure Contact Forms","Bar Council Compliance"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"Basic law firm site","features":["8 Pages","Practice Areas","Attorney Profiles","Contact Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full law firm portal","features":["20 Pages","Online Consultation Booking","Blog/Articles","Testimonials","Case Studies","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Multi-attorney firm website","features":["Unlimited Pages","Client Portal","Document Sharing","CMS Dashboard","Multi-language","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('legal-document-automation', 'business-software', 'Legal Document Automation', '', 'Automate repetitive legal document creation with template-based generation — create contracts, notices, affidavits, and agreements in seconds by filling a simple form.', '₹14,999', '["Document Template Library","Form-based Document Generation","E-signature Integration","PDF Download & Print","Template Management","Client Data Auto-fill","Version Control","Secure Document Sharing"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic template system","features":["10 Document Templates","Form-based Generation","PDF Download","Basic Sharing","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full document automation","features":["50 Templates","E-signature Integration","Auto-fill from Database","Version Control","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise legal document suite","features":["Unlimited Templates","Custom Workflow","API Integration","Audit Trails","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('client-portal', 'business-software', 'Client Portal for Law Firms', '', 'Give clients a secure portal to view their case status, upload documents, communicate with their lawyer, and pay bills — reducing phone calls and improving client satisfaction.', '₹14,999', '["Secure Client Login","Case Status Dashboard","Document Upload & Download","Secure Messaging with Lawyer","Invoice & Payment Module","Court Date Notifications","Case Timeline View","Mobile Responsive"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic client access portal","features":["Client Login","Case Status View","Document Download","Messaging","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full client portal","features":["Document Upload","Payment Integration","Court Date Alerts","Secure Messaging","Timeline View","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise client management portal","features":["Multi-firm Support","Custom Branding","Analytics","API Integration","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('appointment-scheduling-law', 'business-software', 'Online Appointment Scheduling', '', 'A professional consultation booking system for law firms allowing clients to schedule meetings with specific attorneys, pay consultation fees, and receive automated reminders.', '₹9,999', '["Attorney-specific Booking","Online Consultation Fee Collection","Video Consultation Link Generation","Calendar Sync","SMS & Email Reminders","Client Pre-consultation Form","Cancellation Management","Admin Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic booking system","features":["Online Scheduling","Email Confirmations","Admin Calendar","Basic Reports","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Smart legal scheduling","features":["Fee Collection","SMS Reminders","Video Meeting Link","Multi-attorney","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Enterprise legal scheduling","features":["Full Practice Integration","CRM Sync","Analytics","Custom Workflow","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-for-law-firms', 'business-software', 'SEO for Law Firms', '', 'When people need a lawyer, they Google. Our legal SEO strategy gets your firm to the top of search results for high-intent legal queries in your practice areas and city.', '₹9,999/mo', '["Legal Keyword Research","Practice Area Page SEO","Google Maps for Lawyers","Legal Blog Writing","E-A-T Optimization (Expertise, Authority, Trust)","Backlink Building","Review Generation","Monthly Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Local law firm visibility","features":["15 Keywords","GMB Management","Practice Page SEO","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Legal authority building","features":["30 Keywords","Legal Blog (2/mo)","E-A-T Optimization","Backlinks (8/mo)","3-month minimum"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Dominant legal SEO","features":["60 Keywords","Blogs (5/mo)","Backlinks (20/mo)","Schema Markup","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('content-marketing-law', 'business-software', 'Legal Content Marketing', '', 'Position your law firm as the go-to legal authority through high-quality blog posts, legal guides, FAQ pages, and video content that educates potential clients and earns search rankings.', '₹7,999/mo', '["Legal Blog Post Writing","FAQ Page Creation","Case Study Articles","Legal Guide E-books","Video Script Writing","Social Media Content","Newsletter Campaigns","Content Calendar Management"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic content presence","features":["2 Blog Posts/month","SEO Optimization","Social Distribution","Monthly Analytics","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active content authority","features":["4 Blog Posts/month","FAQ Pages","Legal Guides (1/quarter)","Newsletter (1/month)","3-month minimum"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Comprehensive content domination","features":["8 Posts/month","Video Scripts","E-book per Quarter","LinkedIn Strategy","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('manufacturing-website', 'business-software', 'Manufacturing Company Website', '', 'Build a credibility-establishing manufacturing website showcasing your products, capabilities, certifications, and case studies — designed to attract B2B buyers, distributors, and international clients.', '₹14,999', '["Product/Catalogue Pages","Manufacturing Capabilities Showcase","Certification & Quality Badges","B2B Inquiry Form","Factory Video/Gallery","Export Markets Section","Case Study Pages","Request for Quote (RFQ) System"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic industrial website","features":["10 Pages","Product Catalog","RFQ Form","Gallery","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full manufacturing portal","features":["25 Pages","Product Downloads (Specs)","Case Studies","Certification Pages","Blog/News","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"B2B marketplace portal","features":["Unlimited Pages","B2B Login Portal","Custom RFQ System","Distributor Section","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('erp-system', 'business-software', 'ERP System for Manufacturing', '', 'Streamline your entire manufacturing operation with a custom ERP — from raw material procurement to production planning, inventory, quality control, billing, and dispatch.', '₹49,999', '["Production Planning & Scheduling","Raw Material Procurement","Inventory Management","Quality Control Module","Machine Downtime Tracking","Dispatch & Logistics","Financial Accounting","Management Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹49,999","desc":"Basic manufacturing system","features":["Inventory Module","Production Planning","Basic Billing","Reports","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full manufacturing ERP","features":["All Core Modules","Quality Control","Machine Tracking","Detailed Analytics","Staff Roles","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,99,999","desc":"Enterprise ERP platform","features":["Multi-plant","Full Financial Module","API Ecosystem","BI Dashboard","Custom Reports","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('inventory-manufacturing', 'business-software', 'Inventory Management for Manufacturing', '', 'Track raw materials, WIP (Work-In-Progress), and finished goods across your factory in real-time — with purchase order management, supplier tracking, and automated reorder points.', '₹19,999', '["Raw Material Tracking","WIP Monitoring","Finished Goods Inventory","Purchase Order Management","Supplier Management","Barcode/QR Scanning","Reorder Point Automation","Inventory Valuation Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Basic inventory system","features":["Raw Material Tracking","Finished Goods","PO Management","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full manufacturing IMS","features":["WIP Tracking","Barcode Scanning","Supplier Management","Reorder Automation","Detailed Analytics","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise inventory platform","features":["Multi-plant","ERP Integration","Advanced Analytics","Custom Reports","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('b2b-portal', 'business-software', 'B2B Dealer & Distributor Portal', '', 'Give your dealers and distributors a dedicated online portal to place orders, view catalogs, check stock, track shipments, and access marketing materials — eliminating manual order taking.', '₹29,999', '["Dealer Login & Registration","Product Catalog with Pricing Tiers","Online Order Placement","Stock Availability View","Shipment Tracking","Invoice & Account Statement","Marketing Asset Downloads","Admin Dealer Management"]'::jsonb, '[{"name":"Silver Plan","price":"₹29,999","desc":"Basic dealer portal","features":["Dealer Login","Product Catalog","Order Placement","Basic Reports","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹54,999","desc":"Full B2B portal","features":["Pricing Tiers","Stock Availability","Shipment Tracking","Invoice Module","Analytics","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹94,999","desc":"Enterprise dealer management","features":["Multi-brand Portal","Credit Limit Management","Marketing Assets","Full Analytics Suite","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('quality-control-system', 'business-software', 'Quality Control System', '', 'Digitize your quality inspection process — define inspection parameters, record QC results at each production stage, generate non-conformance reports, and track defect trends for continuous improvement.', '₹19,999', '["Inspection Checklist Builder","QC Data Entry (Mobile/Web)","Non-conformance Report (NCR)","Defect Analytics & Trend Reports","ISO Compliance Documentation","Supplier Quality Audit","Customer Complaint Tracking","Real-time QC Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Basic QC system","features":["Inspection Checklists","QC Entry","Basic Reports","NCR Generation","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹39,999","desc":"Full quality management","features":["Defect Analytics","ISO Documentation","Supplier QA","QC Dashboard","Mobile QC Entry","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹69,999","desc":"Enterprise QMS platform","features":["Multi-plant","Advanced Analytics","Customer Complaint CRM","Custom Reports","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('industrial-mobile-app', 'business-software', 'Industrial Operations Mobile App', '', 'Empower factory supervisors and managers with a mobile app to monitor production, log machine downtime, capture quality issues, and view real-time dashboards — from any location.', '₹34,999', '["Live Production Dashboard","Machine Downtime Logging","Quality Issue Capture (Photo)","Shift Report Submission","Inventory Check","Push Alert Notifications","Worker Attendance","Management Analytics"]'::jsonb, '[{"name":"Silver Plan","price":"₹34,999","desc":"Basic factory floor app","features":["Android App","Production Dashboard","Downtime Logging","Basic Reports","3 Weeks Delivery"]},{"name":"Gold Plan","price":"₹64,999","desc":"Full operations app","features":["Android + iOS","Quality Capture","Shift Reports","Inventory Check","Push Alerts","5 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,09,999","desc":"Enterprise industrial app","features":["Full ERP Integration","AI Anomaly Detection","Multi-plant","Custom Analytics","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-marketing-manufacturing', 'business-software', 'B2B Digital Marketing for Manufacturing', '', 'Attract B2B buyers, distributors, and export partners through LinkedIn campaigns, Google B2B ads, industry directories, and content marketing that establishes your manufacturing authority.', '₹12,999/mo', '["LinkedIn B2B Campaigns","Google Industrial Search Ads","Industry Directory Listings","Trade Show Digital Campaigns","Technical Content Marketing","Email Campaign to Distributors","Export Market Campaigns","B2B Lead Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999/mo","desc":"B2B brand visibility","features":["LinkedIn Company Page","10 Posts/month","Google Ads Setup","Directory Listings","Monthly Report"]},{"name":"Gold Plan","price":"₹24,999/mo","desc":"Active B2B lead generation","features":["LinkedIn Lead Ads","Google Search Ads","Email Campaigns","Technical Blog (2/mo)","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹44,999/mo","desc":"Export market campaigns","features":["Multi-platform","Export Market Targeting","Video Production","Trade Show Campaigns","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ngo-website', 'business-software', 'NGO & Non-Profit Website', '', 'Create a compelling website that tells your story, showcases your impact, attracts donors, and connects volunteers with your cause — with online donation functionality built-in.', '₹9,999', '["Impact Stories & Statistics","Online Donation Button","Volunteer Registration","Program/Project Pages","Gallery & Field Reports","Newsletter Signup","Corporate Partner Section","Annual Report Downloads"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic NGO website","features":["6 Pages","Mission & Programs","Donation Button","Volunteer Form","Gallery","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full NGO portal","features":["20 Pages","Impact Dashboard","Newsletter Integration","Annual Reports","Blog/Updates","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Comprehensive cause platform","features":["Donor Portal","Volunteer Management","Corporate Partnership Section","Multi-language","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-donation-platform', 'business-software', 'Online Donation Platform', '', 'A dedicated donation platform supporting one-time and recurring donations, campaign-specific fundraising, donor dashboards, 80G receipt generation, and complete analytics.', '₹14,999', '["One-time & Recurring Donations","Campaign-based Fundraising Pages","Multiple Payment Gateways","80G Receipt Generation","Donor Login & History","Donation Matching Feature","Fundraiser Creation Tool","Analytics Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic donation system","features":["One-time Donations","Payment Gateway","80G Receipts","Basic Dashboard","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full fundraising platform","features":["Recurring Donations","Campaign Pages","Donor Portal","Analytics","Email Automation","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise donor management","features":["Fundraiser Creator Tool","Donation Matching","Corporate Donation Module","Full Analytics","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fundraising-campaigns', 'business-software', 'Digital Fundraising Campaigns', '', 'Run powerful digital fundraising campaigns — Giving Tuesday drives, birthday fundraisers, emergency campaigns, and year-end appeals — with compelling stories, social media distribution, and donation tracking.', '₹9,999/campaign', '["Campaign Landing Page Design","Countdown Timer & Goal Meter","Social Media Distribution","Email Campaign to Donors","WhatsApp Broadcast","Donor Update Stories","Matching Gift Feature","Real-time Campaign Analytics"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/campaign","desc":"Basic campaign setup","features":["Landing Page","Donation Gateway","Email Blast (1)","Social Posts (5)","Campaign Report"]},{"name":"Gold Plan","price":"₹19,999/campaign","desc":"Full campaign management","features":["Custom Landing Page","Email Sequence (5)","WhatsApp Broadcast","Social Ads","Real-time Analytics","Donor Thank-you"]},{"name":"Platinum Plan","price":"₹34,999/campaign","desc":"Maximum impact campaign","features":["Multi-phase Campaign","Video Production","Influencer Outreach","Press Release","Post-campaign Report"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-management-ngo', 'business-software', 'NGO Event Management System', '', 'Manage charity events — gala dinners, marathons, benefit concerts, and awareness campaigns — with online ticketing, registration, volunteer coordination, and post-event reporting.', '₹9,999', '["Online Event Registration","Ticket Sales & Payment","Volunteer Assignment for Events","Attendee Management","Event Sponsor Management","QR Code Check-in","Post-event Donation Drive","Impact Report Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic event system","features":["Online Registration","Payment Gateway","Basic Reports","Email Confirmations","1 Week Delivery"]},{"name":"Gold Plan","price":"₹19,999","desc":"Full event management","features":["Ticketing","QR Check-in","Volunteer Module","Sponsor Tracking","Analytics","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Multi-event platform","features":["Multi-event Management","Live Fundraiser Board","Post-event Donations","Custom Branding","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('impact-reporting', 'business-software', 'Impact Reporting Dashboard', '', 'Create a beautiful, data-driven impact dashboard that shows donors, CSR partners, and government agencies exactly how their contributions are creating change — with live statistics and stories.', '₹12,999', '["Live Impact Metrics Dashboard","Beneficiary Count Tracking","Fund Utilization Visualization","Program Progress Reports","Geographic Impact Maps","Photo & Story Integration","Donor-specific Impact Statements","Annual Report Generation"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"Basic impact dashboard","features":["Key Metrics Display","Program Progress","Fund Utilization Chart","PDF Export","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full impact reporting suite","features":["Live Dashboard","Geographic Maps","Beneficiary Stories","Donor Statements","Annual Report Generator","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Enterprise impact platform","features":["Multi-program","Custom Metrics","Donor Portal Integration","BI Integration","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('social-media-ngo', 'business-software', 'Social Media for NGOs', '', 'Build a powerful social media presence for your NGO — sharing impact stories, volunteer highlights, campaign updates, and awareness content that attracts donors, volunteers, and media attention.', '₹7,999/mo', '["Story-driven Content Creation","Campaign Social Posts","Volunteer Spotlights","Donor Recognition Posts","Awareness Day Campaigns","Video/Reel Production","Crowdfunding Social Drives","Engagement & Community Management"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic cause presence","features":["Instagram + Facebook","12 Posts/month","Basic Ads","Community Management","Monthly Report"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active donor engagement","features":["20 Posts + 6 Reels","Campaign Support","Paid Awareness Ads","Donor Recognition","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹24,999/mo","desc":"Full digital cause campaign","features":["All Platforms","Daily Stories","Influencer Collaboration","Video Production","Media Outreach"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('beneficiary-management', 'business-software', 'Beneficiary Management System', '', 'Digitize your beneficiary records — track who receives aid, what program they''re enrolled in, their progress, and generate reports for donor transparency and government compliance.', '₹14,999', '["Beneficiary Registration & Profiles","Program Enrollment Tracking","Aid/Service Delivery Logging","Progress Milestone Tracking","Document Storage","Geographic Distribution Map","Government Report Generation","Outcome Analytics"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999","desc":"Basic beneficiary tracker","features":["Beneficiary Profiles","Program Enrollment","Basic Reports","Document Storage","1 Week Delivery"]},{"name":"Gold Plan","price":"₹29,999","desc":"Full beneficiary management","features":["Progress Tracking","Geographic Maps","Outcome Analytics","Govt Report Formats","Mobile Data Entry","3 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹54,999","desc":"Enterprise impact management","features":["Multi-program","Advanced Analytics","Donor Reporting Integration","Custom Reports","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('startup-website', 'business-software', 'Startup Website Development', '', 'Build a compelling startup website with your value proposition, product demo, team showcase, investor pitch, and lead capture — designed to convert visitors into signups and investors.', '₹12,999', '["Hero with Clear Value Proposition","Product Feature Highlights","Demo Video/GIF Section","Founder & Team Profiles","Investor Section","Newsletter/Waitlist Signup","Press/Media Mentions","Contact & Partnership Enquiry"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"MVP landing page","features":["3–5 Pages","Value Proposition Hero","Feature List","Waitlist Form","Mobile Responsive","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Full startup website","features":["10 Pages","Product Demo Section","Team Profiles","Investor Section","Blog","Animations","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Premium startup brand","features":["Custom Animations","Micro-interactions","Investor Portal","Press Kit","A/B Testing Ready","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('mvp-development', 'business-software', 'MVP Development', '', 'Turn your startup idea into a working product fast. We build focused MVPs with core features that validate your hypothesis, attract early users, and impress investors — without overbuilding.', '₹49,999', '["Core Feature Development","User Authentication","Database & API Architecture","Admin Dashboard","Analytics Integration","Payment Integration (if needed)","Mobile Responsive","Deployment & DevOps"]'::jsonb, '[{"name":"Silver Plan","price":"₹49,999","desc":"Simple MVP (Web)","features":["Web App","Core Feature Set","Auth + Database","Admin Dashboard","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹89,999","desc":"Full-featured MVP","features":["Web + Mobile Responsive","Payment Integration","Analytics","Admin + User Dashboards","API Architecture","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Investor-grade MVP","features":["Web + Mobile App","Scalable Architecture","Advanced Analytics","CI/CD Pipeline","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('saas-platform-development', 'business-software', 'SaaS Platform Development', '', 'We build production-ready SaaS platforms with multi-tenancy, subscription billing, onboarding flows, usage analytics, and enterprise security — ready to scale to thousands of users.', '₹74,999', '["Multi-tenant Architecture","Subscription Billing (Stripe)","User Onboarding Flows","Role-based Access Control","Usage Analytics & Metering","API & Webhook System","Admin Super Dashboard","Enterprise Security (SSO, 2FA)"]'::jsonb, '[{"name":"Silver Plan","price":"₹74,999","desc":"Basic SaaS (single tier)","features":["Single-tenant Architecture","Core Features","Stripe Billing","Admin Dashboard","8 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,49,999","desc":"Full multi-tenant SaaS","features":["Multi-tenant","Subscription Plans","Onboarding Flows","Analytics","API System","12 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise SaaS platform","features":["SSO/2FA","Usage Metering","Webhooks","White-label Option","DevOps Setup","18 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('startup-mobile-app', 'business-software', 'Startup Mobile App Development', '', 'From consumer apps to B2B tools, we build startup mobile apps with clean UX, fast performance, scalable backends, and app store optimization to get early adopters fast.', '₹59,999', '["React Native/Flutter Development","Backend API Development","User Auth & Profiles","Push Notifications","Analytics & Crash Reporting","App Store Optimization","In-app Purchases","Social Login"]'::jsonb, '[{"name":"Silver Plan","price":"₹59,999","desc":"MVP mobile app (Android)","features":["Android App","Core Features","Firebase Backend","Push Notifications","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full startup mobile app","features":["Android + iOS","Custom Backend","Analytics","In-app Purchases","Social Login","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,69,999","desc":"Enterprise-grade startup app","features":["All Platforms","Scalable Architecture","Advanced Analytics","CI/CD","ASO Optimization","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-for-startups', 'business-software', 'Startup CRM & Sales System', '', 'Stop managing sales in spreadsheets. A startup-optimized CRM to track leads, manage customer conversations, follow up systematically, and understand your early sales funnel performance.', '₹9,999', '["Lead & Deal Pipeline","Contact & Company Management","Activity & Follow-up Tracking","Email Integration","Sales Reporting Dashboard","Team Collaboration","Product Demo Scheduling","Investor Pipeline (Optional)"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Basic startup CRM","features":["Up to 3 Users","Lead Pipeline","Contact Management","Basic Reports","1 Week Setup"]},{"name":"Gold Plan","price":"₹19,999","desc":"Growing team CRM","features":["Up to 15 Users","Email Integration","Activity Tracking","Dashboard Analytics","Follow-up Automation","2 Weeks Setup"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Scale-up sales system","features":["Unlimited Users","Investor Pipeline","Advanced Analytics","API Integrations","3 Weeks Setup"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('investor-pitch-deck', 'business-software', 'Investor Pitch Deck Design', '', 'A professionally designed startup pitch deck that tells your story, demonstrates traction, presents your market opportunity, and convinces investors to take the next meeting.', '₹9,999', '["Problem & Solution Slides","Market Size (TAM/SAM/SOM)","Business Model Clarity","Traction & Metrics Visualization","Team Slide","Financial Projections","Ask & Use of Funds","One-Pager Summary"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999","desc":"Standard pitch deck (10–15 slides)","features":["10–15 Slides","Custom Design","Infographics","PDF + PPT Export","1 Week Delivery","2 Revisions"]},{"name":"Gold Plan","price":"₹19,999","desc":"Investor-grade pitch deck","features":["20 Slides","Financial Chart Design","Market Visualization","Multiple Versions","2 Weeks Delivery","Unlimited Revisions"]},{"name":"Platinum Plan","price":"₹34,999","desc":"Premium fundraising package","features":["Full Deck","One-pager","Pitch Coaching Session","VC-specific Customization","Data Room Setup","2 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('growth-hacking-seo', 'business-software', 'Startup Growth Hacking & SEO', '', 'Accelerate your startup growth with data-driven growth hacking experiments — product-led growth strategies, SEO content engines, viral loops, and channel experiments that find what works fastest.', '₹14,999/mo', '["Growth Funnel Audit","SEO Content Engine Setup","Product-led Growth Tactics","Viral Referral Loop","A/B Testing Framework","Acquisition Channel Experiments","Retention Optimization","Growth Analytics Dashboard"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999/mo","desc":"Growth foundation","features":["Funnel Audit","SEO Setup","4 Experiments/month","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active growth sprints","features":["8 Experiments/month","SEO Content (4 pieces)","Referral Program","Retention Analysis","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-stack growth team","features":["Unlimited Experiments","Dedicated Growth PM","Product Analytics","Weekly Strategy","Investor Metrics Reports"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('social-media-startup', 'business-software', 'Social Media & Brand Building for Startups', '', 'Establish your startup''s brand voice, build founder credibility on LinkedIn, attract talent and users on Instagram, and create a community of early adopters through strategic social presence.', '₹9,999/mo', '["Founder Personal Branding (LinkedIn)","Startup Instagram & Twitter/X Management","Product Launch Campaigns","User Community Building","PR & Media Outreach","Influencer Collaborations","Content Series Development","Monthly Analytics Reports"]'::jsonb, '[{"name":"Silver Plan","price":"₹9,999/mo","desc":"Startup brand presence","features":["LinkedIn + Instagram","12 Posts/month","Basic Founder Content","Community Engagement","Monthly Report"]},{"name":"Gold Plan","price":"₹19,999/mo","desc":"Active startup marketing","features":["All Channels","20 Posts + 6 Reels","Founder LinkedIn Strategy","Product Launch Support","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹34,999/mo","desc":"Full startup brand domination","features":["All Channels","PR Outreach","Influencer","Product Hunt Launch","Investor Visibility Strategy"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('custom-web-development', 'business-software', 'Custom Web Development', '', 'When off-the-shelf solutions don''t fit, we build custom web applications — portals, platforms, tools, and systems — engineered precisely for your business logic and workflow.', '₹29,999', '["Custom Architecture Design","Frontend & Backend Development","API Development & Integration","Database Design","Admin & User Dashboards","Third-party Integration","Security & Performance","DevOps & Deployment"]'::jsonb, '[{"name":"Silver Plan","price":"₹29,999","desc":"Simple web tool/portal","features":["Core Features","User + Admin Dashboard","Database + API","Mobile Responsive","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Medium complexity web app","features":["Advanced Features","Third-party Integrations","Custom Workflows","Analytics","8 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999+","desc":"Enterprise web platform","features":["Full Custom Platform","Microservices Architecture","DevOps Pipeline","Security Audit","12+ Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('custom-mobile-app', 'business-software', 'Custom Mobile App Development', '', 'From simple utility apps to complex platform applications, we build custom mobile apps that solve real business problems — with clean UX, reliable backends, and app store publishing.', '₹49,999', '["Android & iOS Development","Custom UI/UX Design","Backend API Development","Third-party SDK Integration","Push Notification System","Offline Mode Support","Analytics & Crash Reporting","App Store Submission"]'::jsonb, '[{"name":"Silver Plan","price":"₹49,999","desc":"Android-only MVP app","features":["Android App","Core Features","Firebase Backend","Basic Analytics","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹89,999","desc":"Cross-platform mobile app","features":["Android + iOS","Custom Backend","Payment Integration","Advanced Features","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise mobile platform","features":["All Platforms","Scalable Backend","CI/CD Pipeline","Security Audit","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ai-ml-solutions', 'business-software', 'AI & Machine Learning Solutions', '', 'Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.', '₹29,999', '["AI Chatbot Development","Recommendation Engine","Document OCR & Processing","Predictive Analytics","Image Recognition","Natural Language Processing","OpenAI API Integration","Custom ML Model Training"]'::jsonb, '[{"name":"Silver Plan","price":"₹29,999","desc":"Basic AI feature integration","features":["Chatbot or 1 AI Feature","OpenAI Integration","Basic Training","API Endpoint","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Custom AI module","features":["Custom AI Feature","Data Pipeline","Model Fine-tuning","Dashboard","API + Documentation","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise AI platform","features":["Multiple AI Features","Custom ML Models","Real-time Inference","MLOps Pipeline","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crm-development', 'business-software', 'Custom CRM Development', '', 'Off-the-shelf CRMs like Salesforce or HubSpot are expensive and rigid. We build custom CRMs tailored to your exact sales workflow, industry terminology, and reporting needs — at a fraction of the cost.', '₹19,999', '["Custom Sales Pipeline","Contact & Company Management","Task & Follow-up Automation","Email & WhatsApp Integration","Custom Reporting & Analytics","Role-based Access","Mobile CRM App","Third-party Integrations"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999","desc":"Basic custom CRM","features":["Up to 5 Users","Pipeline","Contact Management","Basic Reports","Email Integration","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹44,999","desc":"Full custom CRM","features":["Up to 25 Users","WhatsApp Integration","Automation Rules","Custom Reports","Mobile App","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise CRM platform","features":["Unlimited Users","Multi-branch","Advanced Analytics","Full API Ecosystem","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-marketing', 'business-software', 'Full-Service Digital Marketing', '', 'From brand awareness to lead generation and customer retention — our full-service digital marketing team manages your SEO, social media, paid ads, email marketing, and content strategy.', '₹14,999/mo', '["SEO Strategy & Execution","Social Media Management","Google & Meta Paid Ads","Email Marketing","Content Marketing","WhatsApp Marketing","Analytics & Reporting","Brand Strategy"]'::jsonb, '[{"name":"Silver Plan","price":"₹14,999/mo","desc":"Basic digital presence","features":["Social Media (2 platforms)","15 Posts/month","GMB Management","SEO Basics","Monthly Report"]},{"name":"Gold Plan","price":"₹29,999/mo","desc":"Active growth marketing","features":["All Social + Google Ads","25 Posts + 6 Reels","SEO (25 keywords)","Email Campaign/mo","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹54,999/mo","desc":"Full-stack digital domination","features":["All Channels","Daily Content","YouTube Ads","WhatsApp Automation","Weekly Strategy Calls"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('cloud-solutions', 'business-software', 'Cloud Solutions & DevOps', '', 'Migrate to the cloud, optimize your infrastructure, set up CI/CD pipelines, and ensure 99.9% uptime — with expert DevOps engineering on AWS, GCP, or Azure.', '₹24,999', '["Cloud Migration (AWS/GCP/Azure)","CI/CD Pipeline Setup","Docker & Kubernetes","Auto-scaling Architecture","Database Optimization","Security & Compliance","Monitoring & Alerting","Cost Optimization"]'::jsonb, '[{"name":"Silver Plan","price":"₹24,999","desc":"Basic cloud setup","features":["Cloud Server Setup","Domain + SSL","Basic CI/CD","Backup Config","1 Week Delivery"]},{"name":"Gold Plan","price":"₹49,999","desc":"Full cloud architecture","features":["Multi-server Setup","CI/CD Pipeline","Auto-scaling","Monitoring","Security Hardening","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹89,999","desc":"Enterprise cloud platform","features":["Kubernetes Cluster","Multi-region","DR Setup","Cost Optimization","On-call Support","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('erp-solutions', 'business-software', 'Custom ERP Solutions', '', 'Replace disconnected spreadsheets and tools with a unified ERP that manages your operations, finance, HR, inventory, and customer relationships in one integrated platform.', '₹49,999', '["Finance & Accounting Module","HR & Payroll Management","Inventory & Procurement","CRM & Sales Pipeline","Project Management","Reporting & BI Dashboard","Role-based Access","API Ecosystem"]'::jsonb, '[{"name":"Silver Plan","price":"₹49,999","desc":"2–3 core modules","features":["2–3 Modules","Basic Integration","Reporting","User Roles","6 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,24,999","desc":"Full business ERP (5–7 modules)","features":["5–7 Modules","Full Integration","BI Dashboard","API Ecosystem","10 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise ERP platform","features":["All Modules","Multi-entity","Custom Reports","Full DevOps","16 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('seo-services-general', 'business-software', 'SEO & Content Marketing', '', 'A comprehensive SEO and content strategy that targets your ideal customers through Google search, builds your domain authority, and generates consistent organic leads month after month.', '₹7,999/mo', '["Full SEO Audit","Keyword Research & Strategy","On-page & Technical SEO","Content Strategy & Writing","Link Building","Google Business Profile","Analytics & Reporting","Competitor Analysis"]'::jsonb, '[{"name":"Silver Plan","price":"₹7,999/mo","desc":"Basic SEO foundation","features":["15 Keywords","On-page Optimization","GMB Setup","Monthly Report","3-month minimum"]},{"name":"Gold Plan","price":"₹14,999/mo","desc":"Active SEO growth","features":["30 Keywords","Technical SEO","Content (3/mo)","Backlinks (8/mo)","Bi-weekly Reports"]},{"name":"Platinum Plan","price":"₹29,999/mo","desc":"SEO market domination","features":["60+ Keywords","Content (8/mo)","Backlinks (20/mo)","Schema Markup","No Contract"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fintech-app-development', 'mobile-apps', 'Fintech App Development', '', 'Custom fintech applications including digital banking, payments, lending, and investment platforms built with security and regulatory compliance at the core.', '₹1,49,999', '["UPI & Payment Gateway Integration","eKYC & Aadhaar Verification","Real-time Transaction Monitoring","Multi-factor Authentication","Loan Origination Module","Investment Portfolio Tracker","Spending Analytics","Compliance & Audit Logs"]'::jsonb, '[{"name":"Fintech MVP","price":"₹1,49,999","desc":"Core fintech application","features":["Payment Integration","eKYC","User Dashboard","Security Hardening","10 Weeks Delivery"]},{"name":"Enterprise Fintech","price":"₹2,99,999","desc":"Full-scale fintech platform","features":["Multi-product Suite","Advanced Analytics","Admin Panel","API Marketplace","18 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('banking-website', 'websites', 'Banking & Finance Website', '', 'Secure, trust-inspiring websites for banks, NBFCs, credit unions, and financial advisory firms that drive customer acquisition and provide self-service portals.', '₹39,999', '["Product & Scheme Showcases","EMI Calculator Tools","Branch & ATM Locator","Loan Application Forms","Customer Login Portal","Regulatory Disclosure Pages","Mobile-Responsive Design","ADA Accessibility"]'::jsonb, '[{"name":"Institutional Website","price":"₹39,999","desc":"Professional finance website","features":["Up to 20 Pages","EMI Calculators","Lead Forms","Mobile Responsive","4 Weeks Delivery"]},{"name":"Enterprise Portal","price":"₹74,999","desc":"Full self-service website","features":["Customer Login Portal","Branch Locator","Application Forms","ADA Compliant","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('loan-management-software', 'business-software', 'Loan Management Software', '', 'A comprehensive software system to manage the complete loan lifecycle from origination, underwriting, and disbursement to repayment tracking and collections.', '₹79,999', '["Digital Loan Application & Origination","Automated Credit Scoring","Document Management (eKYC)","Loan Disbursement Workflows","EMI Schedule Generation","Collections & Recovery Module","Repayment Reminders (SMS/Email)","NPA Reporting & Analytics"]'::jsonb, '[{"name":"LMS Core","price":"₹79,999","desc":"Essential loan management","features":["Origination","EMI Scheduling","Repayment Tracking","Basic Reports","7 Weeks Delivery"]},{"name":"LMS Enterprise","price":"₹1,49,999","desc":"Full-cycle lending platform","features":["Credit Scoring","Collections Module","NPA Analytics","Multi-branch Support","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('nbfc-portal', 'business-software', 'NBFC / Lending Portal', '', 'A complete web and mobile portal for NBFCs allowing customers to apply for loans, track status, make payments, and agents to manage their portfolios.', '₹54,999', '["Customer Loan Application Portal","Agent / DSA Management Portal","Document Upload (eKYC)","Loan Status Tracker","Online Repayment Gateway","Statement Downloads","Agent Commission Tracking","Admin Dashboard"]'::jsonb, '[{"name":"Customer Portal","price":"₹54,999","desc":"Customer & loan tracking portal","features":["Loan Application","Status Tracker","Repayment Gateway","Document Upload","6 Weeks Delivery"]},{"name":"NBFC Suite","price":"₹99,999","desc":"Customer + Agent portal","features":["Customer Portal","DSA Portal","Commission Tracking","Admin Dashboard","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('investment-platform', 'business-software', 'Investment Platform', '', 'A secure investment platform enabling investors to discover, analyze, and invest in mutual funds, stocks, bonds, or other financial instruments with real-time data.', '₹99,999', '["Investment Discovery & Filtering","Real-time Market Data Integration","Portfolio Dashboard & Analytics","SIP (Systematic Investment Plans)","KYC & SEBI Compliance","Transaction History","Goal-based Investing Tools","Mobile App"]'::jsonb, '[{"name":"MF Platform","price":"₹99,999","desc":"Mutual fund investment portal","features":["Fund Discovery","KYC Integration","SIP Setup","Portfolio View","10 Weeks Delivery"]},{"name":"Wealth Platform","price":"₹1,99,999","desc":"Full-stack wealth management","features":["Multi-asset Classes","Goal Planning Tools","Real-time Market Data","Mobile App","16 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('finance-crm', 'business-software', 'Finance CRM', '', 'A specialized CRM built for banks, NBFCs, and financial advisors to manage the complete client lifecycle from lead to conversion and long-term relationship management.', '₹44,999', '["Lead Capture & Qualification","Client Financial Profile","Product Interest Tracking (Loans, FD, MF)","Follow-up Automation","Agent Assignment","Revenue & Commission Tracking","Cross-sell & Upsell Prompts","Regulatory Audit Logs"]'::jsonb, '[{"name":"Finance CRM","price":"₹44,999","desc":"Core financial CRM","features":["Lead Management","Client Profiles","Follow-up Automation","Basic Reports","5 Weeks Delivery"]},{"name":"Enterprise CRM","price":"₹84,999","desc":"Advanced financial relationship platform","features":["Cross-sell Engine","Commission Tracking","Audit Logs","Advanced Analytics","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-wallet-app', 'mobile-apps', 'Digital Wallet App', '', 'A feature-rich digital wallet application enabling users to add money, make payments, transfer funds, split bills, and manage transactions from their smartphones.', '₹99,999', '["UPI & Bank Account Linking","P2P Money Transfers","QR Code Payments","Bill Payments (Utility, Mobile, DTH)","Transaction History & Statements","Cashback & Rewards Engine","Biometric Authentication","Multi-currency Support"]'::jsonb, '[{"name":"Basic Wallet","price":"₹99,999","desc":"Core payment wallet app","features":["UPI Payments","P2P Transfers","Bill Payments","Android & iOS","10 Weeks Delivery"]},{"name":"Rewards Wallet","price":"₹1,79,999","desc":"Full-featured wallet with rewards","features":["Cashback Engine","Multi-currency","QR Payments","Analytics Dashboard","16 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('financial-analytics-dashboard', 'business-software', 'Financial Analytics Dashboard', '', 'A powerful BI and analytics dashboard that aggregates financial data across portfolios, branches, and products to give leadership real-time visibility and insights.', '₹49,999', '["Revenue & P&L Dashboards","Portfolio Quality Analytics (NPA tracking)","Branch-wise Performance Reports","Agent / Channel Performance","Cash Flow Forecasting","Regulatory Report Automation (RBI)","Drill-down Data Exploration","Scheduled PDF Reports"]'::jsonb, '[{"name":"Standard Dashboard","price":"₹49,999","desc":"Core financial reports","features":["P&L Dashboard","Branch Reports","NPA Tracking","Monthly Reports","5 Weeks Delivery"]},{"name":"Intelligence Suite","price":"₹94,999","desc":"Full BI & analytics platform","features":["Forecasting","Regulatory Reports","Custom KPIs","Drill-down Explorer","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('insurance-website', 'websites', 'Insurance Company Website', '', 'A secure, professional website for insurance companies, brokers, and agents to showcase products, generate leads, and provide customer self-service portals.', '₹24,999', '["Insurance Product Showcases","Premium Calculator Tools","Online Inquiry & Lead Forms","Agent / Branch Locator","Customer Login Portal","Claims Reporting Form","Blog & Resource Center","Mobile-Responsive Design"]'::jsonb, '[{"name":"Agency Website","price":"₹24,999","desc":"For insurance agents & brokers","features":["Up to 15 Pages","Lead Forms","Premium Calculator","Mobile Responsive","3 Weeks Delivery"]},{"name":"Corporate Website","price":"₹54,999","desc":"For insurance companies","features":["Customer Portal","Agent Locator","Claims Form","Blog","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('policy-management-system', 'business-software', 'Policy Management System', '', 'A comprehensive Policy Management System (PMS) to manage the complete lifecycle of insurance policies from issuance, endorsements, and renewals to cancellations.', '₹69,999', '["Policy Issuance & Numbering","Endorsement Management","Automated Renewal Reminders","Premium Payment Tracking","Policy Document Generation (PDF)","Agent & Broker Portal","Customer Self-service Portal","Reporting & Analytics"]'::jsonb, '[{"name":"Basic PMS","price":"₹69,999","desc":"Core policy management","features":["Policy Issuance","Renewal Reminders","Document Generation","Agent Portal","7 Weeks Delivery"]},{"name":"Enterprise PMS","price":"₹1,39,999","desc":"Full lifecycle management","features":["Endorsements","Customer Portal","Advanced Analytics","Multi-product Support","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('claims-management', 'business-software', 'Claims Management System', '', 'A digital claims management platform to streamline FNOL (First Notice of Loss), document collection, adjudication, and settlement, reducing TAT and improving customer satisfaction.', '₹59,999', '["Online FNOL (Claim Intimation)","Digital Document Submission","Claim Status Tracker for Customers","Surveyor Assignment & Workflow","Automated Approval Workflows","Fraud Detection Flags","Settlement Processing","Claims Analytics Dashboard"]'::jsonb, '[{"name":"Basic Claims","price":"₹59,999","desc":"Digital claim submission & tracking","features":["Online FNOL","Document Upload","Status Tracker","Basic Workflow","6 Weeks Delivery"]},{"name":"Smart Claims","price":"₹1,19,999","desc":"Full automated claims platform","features":["Surveyor Portal","Fraud Flags","Auto Approvals","Settlement Processing","11 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('insurance-agent-portal', 'business-software', 'Insurance Agent Portal', '', 'A dedicated web and mobile portal for insurance agents and POSPs to manage their clients, issue policies, track commissions, and access product training materials.', '₹39,999', '["Client Portfolio Management","Online Policy Issuance & Quoting","Commission Tracking & Statements","Lead Management","Product Rate Cards","Training & Exam Portal","Document Repository","Instant Chat Support"]'::jsonb, '[{"name":"Agent Hub","price":"₹39,999","desc":"Core agent management portal","features":["Client Management","Commission Tracker","Document Repository","Mobile Responsive","4 Weeks Delivery"]},{"name":"Agent Pro Suite","price":"₹74,999","desc":"Full-featured agent platform with app","features":["Online Quoting","Training Portal","Mobile App","Performance Analytics","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('insurance-crm', 'business-software', 'Insurance CRM', '', 'A purpose-built CRM for insurance companies and agents to track leads, manage renewals, automate follow-ups, and maximize customer lifetime value.', '₹34,999', '["Lead Capture (Web, WhatsApp, Referral)","Policy Renewal Pipeline","Automated SMS/Email/WhatsApp Reminders","Cross-sell & Upsell Prompts","Agent Assignment & Tracking","Customer 360° Profile","Renewal Due Alerts","Performance Analytics"]'::jsonb, '[{"name":"Insurance CRM","price":"₹34,999","desc":"Core lead & renewal management","features":["Lead Management","Renewal Reminders","Email/SMS Automation","Basic Reports","4 Weeks Delivery"]},{"name":"InsureCRM Pro","price":"₹64,999","desc":"Advanced pipeline & analytics","features":["360° Profiles","Cross-sell Engine","WhatsApp Automation","Performance Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('insurance-mobile-app', 'mobile-apps', 'Insurance Mobile App', '', 'A branded mobile application for policyholders to view policies, pay premiums, file claims, and chat with support — all from their smartphone.', '₹74,999', '["Policy Dashboard & Details","Premium Payment (UPI/Card)","Instant Claim Filing (FNOL)","Digital Policy Cards","Push Notifications for Renewals","Agent Connect & Chat","Loyalty Rewards","Biometric Login"]'::jsonb, '[{"name":"Policyholder App","price":"₹74,999","desc":"View, pay & claim mobile app","features":["Policy Dashboard","Premium Payments","Claim Filing","Push Notifications","8 Weeks Delivery"]},{"name":"Full Insurance App","price":"₹1,29,999","desc":"Complete digital insurance experience","features":["Loyalty Rewards","Agent Connect","Digital Cards","Biometric Login","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('insurance-comparison-portal', 'websites', 'Insurance Comparison Portal', '', 'An aggregator-style insurance comparison portal where users can compare policies across providers on price, features, and ratings and purchase directly online.', '₹99,999', '["Multi-insurer Policy Comparison","Premium Calculator by Profile","Feature-wise Comparison Table","Online Application & KYC","Integrated Payment Gateway","Policy Delivery via Email","Customer Reviews & Ratings","SEO-optimized Content Pages"]'::jsonb, '[{"name":"Comparison Portal","price":"₹99,999","desc":"Core comparison & quoting portal","features":["Multi-insurer Comparison","Premium Calculator","Lead Capture","Basic SEO","10 Weeks Delivery"]},{"name":"Aggregator Platform","price":"₹1,99,999","desc":"Full-featured insurance marketplace","features":["Online Purchase","Payment Gateway","Policy Delivery","Advanced SEO","16 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('logistics-website', 'websites', 'Logistics Company Website', '', 'A high-impact website for logistics, freight, and transport companies to showcase services, generate B2B leads, and provide shipment enquiry tools.', '₹24,999', '["Service Showcase (FTL, LTL, Air, Sea)","Instant Rate/Quote Request Forms","Shipment Tracking Widget","Branch & Network Map","Fleet Photo Gallery","Customer Testimonials","Mobile-Responsive Design","SEO Optimized"]'::jsonb, '[{"name":"Business Website","price":"₹24,999","desc":"Professional logistics website","features":["Up to 15 Pages","Quote Request Form","Fleet Gallery","Mobile Responsive","3 Weeks Delivery"]},{"name":"Lead Gen Website","price":"₹49,999","desc":"Tracking widget & full B2B site","features":["Tracking Widget","Rate Calculator","SEO Optimization","Network Map","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fleet-management-system', 'business-software', 'Fleet Management System', '', 'A comprehensive fleet management platform integrating GPS tracking, driver management, maintenance scheduling, and fuel monitoring for complete fleet control.', '₹44,999', '["Real-time GPS Vehicle Tracking","Driver Management & Behavior Scoring","Fuel Consumption Monitoring","Preventive Maintenance Alerts","Route History & Playback","Geo-fencing & Alerts","Vehicle Documents & Compliance","Fleet Performance Dashboard"]'::jsonb, '[{"name":"Fleet Tracker","price":"₹44,999","desc":"GPS tracking & basic management","features":["Real-time Tracking","Driver Management","Geo-fencing","Basic Reports","5 Weeks Delivery"]},{"name":"Fleet Pro","price":"₹84,999","desc":"Full fleet intelligence platform","features":["Fuel Monitoring","Maintenance Alerts","Driver Scoring","Advanced Analytics","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('shipment-tracking-platform', 'business-software', 'Shipment Tracking Platform', '', 'A multi-courier, multi-modal shipment tracking platform providing real-time visibility across all your logistics partners in a single unified dashboard.', '₹34,999', '["Multi-courier API Integration","Real-time Shipment Status","Customer-facing Tracking Page","Automated SMS/WhatsApp Notifications","Exception & Delay Alerts","Proof of Delivery (ePOD)","Analytics & SLA Reporting","Branded Tracking Experience"]'::jsonb, '[{"name":"Tracking Hub","price":"₹34,999","desc":"Unified tracking dashboard","features":["3 Courier Integrations","Status Dashboard","Email Notifications","Tracking Page","4 Weeks Delivery"]},{"name":"Track Pro","price":"₹69,999","desc":"Full-scale tracking platform","features":["Unlimited Couriers","SMS/WhatsApp Alerts","ePOD","SLA Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('transport-management-system', 'business-software', 'Transport Management System (TMS)', '', 'A full-featured TMS to manage order creation, carrier selection, load planning, dispatch, proof of delivery, and freight billing in one integrated platform.', '₹69,999', '["Order & Load Management","Carrier / Transporter Assignment","Route Planning & Optimization","Driver App (Mobile)","Live Tracking Integration","ePOD (Digital Proof of Delivery)","Freight Invoice & Billing","Analytics & Performance Reports"]'::jsonb, '[{"name":"TMS Core","price":"₹69,999","desc":"Essential transport management","features":["Order Management","Carrier Assignment","Basic Tracking","ePOD","7 Weeks Delivery"]},{"name":"TMS Enterprise","price":"₹1,39,999","desc":"Full-scale transport platform","features":["Route Optimization","Driver App","Freight Billing","Advanced Analytics","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('delivery-tracking-app', 'mobile-apps', 'Delivery Tracking App', '', 'A mobile application for delivery executives to manage daily deliveries, navigate to addresses, capture proof of delivery, and handle cash collections.', '₹39,999', '["Optimized Daily Delivery Route","Google Maps Navigation","Photo & Signature ePOD","Cash Collection & COD Management","Failed Delivery Workflow","Real-time Status Updates to Customer","Offline Mode Support","Performance Analytics"]'::jsonb, '[{"name":"Delivery App","price":"₹39,999","desc":"Core delivery agent app","features":["Route Display","ePOD","Status Updates","Cash Collection","5 Weeks Delivery"]},{"name":"Smart Delivery","price":"₹74,999","desc":"Advanced with optimization & analytics","features":["Route Optimization","Offline Mode","Customer Notifications","Analytics Dashboard","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('logistics-crm', 'business-software', 'Logistics CRM', '', 'A specialized CRM for logistics and freight companies to manage corporate clients, track shipments per client, generate invoices, and grow their B2B business.', '₹34,999', '["Corporate Client Management","Shipment Enquiry & Quote Tracking","Rate Card Management","Invoice & Credit Management","Automated Follow-up Sequences","Service Complaint Tracking","Client Performance Reports","Business Development Pipeline"]'::jsonb, '[{"name":"Logistics CRM","price":"₹34,999","desc":"Core client & quote management","features":["Client Management","Quote Tracking","Invoice Management","Basic Reports","4 Weeks Delivery"]},{"name":"Freight CRM Pro","price":"₹64,999","desc":"Advanced B2B sales platform","features":["Rate Card Management","Business Dev Pipeline","Client Analytics","Complaint Tracking","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('route-optimization-software', 'business-software', 'Route Optimization Software', '', 'An AI-powered route optimization engine that calculates the most efficient delivery routes for multiple stops, reducing fuel costs and delivery time.', '₹54,999', '["Multi-stop Route Optimization","Time Window Constraints","Vehicle Capacity Constraints","Real-time Traffic Integration","Dynamic Re-routing","Driver App Integration","Savings vs Manual Report","API for Integration with TMS/ERP"]'::jsonb, '[{"name":"Route Optimizer","price":"₹54,999","desc":"Core route optimization","features":["Multi-stop Optimization","Time Windows","Driver App Integration","5 Weeks Delivery"]},{"name":"Smart Router Pro","price":"₹94,999","desc":"Full-featured with real-time re-routing","features":["Dynamic Re-routing","Capacity Constraints","TMS API Integration","Savings Analytics","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('automobile-dealership-website', 'websites', 'Automobile Dealership Website', '', 'A high-performance website for car dealerships with dynamic vehicle inventory, virtual showrooms, loan EMI calculators, and test drive booking systems.', '₹34,999', '["Dynamic Vehicle Inventory Listings","Advanced Filter & Search (Brand, Model, Price)","Online Test Drive Booking","EMI Calculator","Comparison Tool","360° Virtual Car Tour","Lead Capture Forms","Mobile-Responsive Design"]'::jsonb, '[{"name":"Dealer Website","price":"₹34,999","desc":"Core dealership web presence","features":["Vehicle Inventory","EMI Calculator","Test Drive Booking","Lead Forms","4 Weeks Delivery"]},{"name":"Virtual Showroom","price":"₹64,999","desc":"Premium online showroom experience","features":["360° Car Tour","Comparison Tool","Loan Calculator","SEO Optimization","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('vehicle-inventory-management', 'business-software', 'Vehicle Inventory Management', '', 'A digital inventory management system for car dealerships and used car platforms to manage stock, track vehicle status, and sync inventory across the website and showroom.', '₹39,999', '["Vehicle Stock Register","VIN-based Vehicle Tracking","Stock Aging Alerts","Automated Website Sync","Multi-location Stock Management","Procurement & Delivery Tracking","PDI (Pre-delivery Inspection) Checklist","Sales Performance by Model"]'::jsonb, '[{"name":"Inventory System","price":"₹39,999","desc":"Core vehicle stock management","features":["Stock Register","Website Sync","Aging Alerts","Basic Reports","4 Weeks Delivery"]},{"name":"Multi-location IMS","price":"₹74,999","desc":"Advanced multi-showroom management","features":["Multi-location Stock","VIN Tracking","PDI Checklist","Sales Analytics","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('car-booking-system', 'business-software', 'Car Booking & Test Drive System', '', 'An online platform enabling customers to book test drives, reserve vehicles, track order status, and schedule delivery — all with automated communications.', '₹24,999', '["Online Test Drive Slot Booking","Vehicle Reservation with Token Payment","Booking Confirmation & Reminders","Order Status Tracker","Delivery Scheduling","Customer Communication Portal","Sales Executive Assignment","Admin Dashboard"]'::jsonb, '[{"name":"Test Drive Booking","price":"₹24,999","desc":"Simple test drive scheduler","features":["Online Booking","Email/SMS Reminders","Admin Dashboard","Calendar Sync","3 Weeks Delivery"]},{"name":"Full Booking System","price":"₹49,999","desc":"Token payments & delivery tracking","features":["Token Payment","Order Tracker","Delivery Scheduling","Customer Portal","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('service-center-management', 'business-software', 'Service Center Management', '', 'A comprehensive management system for automobile service centers to handle job cards, parts inventory, technician assignment, customer updates, and invoicing.', '₹44,999', '["Digital Job Card Creation","Service History per Vehicle (VIN)","Technician Assignment & Tracking","Spare Parts Inventory","Customer Update Notifications (WhatsApp)","Video/Photo of Issues Shared to Customer","Invoice & GST Billing","Service Due Reminders"]'::jsonb, '[{"name":"Service Manager","price":"₹44,999","desc":"Core service center management","features":["Digital Job Cards","Technician Assignment","Basic Invoice","Email Alerts","5 Weeks Delivery"]},{"name":"Service Pro","price":"₹84,999","desc":"Full-featured service center suite","features":["WhatsApp Updates","Parts Inventory","Service History","GST Billing","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('automobile-mobile-app', 'mobile-apps', 'Automobile Mobile App', '', 'A branded mobile app for your automotive brand or dealership allowing customers to browse vehicles, book services, track orders, and access roadside assistance.', '₹69,999', '["Vehicle Browsing & Comparison","Service Booking & History","Service Status Tracker","Emergency Roadside Assistance","Loyalty Points & Rewards","Insurance & RC Reminder","Push Notifications","In-app Chat Support"]'::jsonb, '[{"name":"Service App","price":"₹69,999","desc":"Service booking & tracking app","features":["Service Booking","Status Tracker","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Full Auto App","price":"₹1,24,999","desc":"Complete automotive experience","features":["Vehicle Browsing","Roadside Assistance","Loyalty Program","In-app Chat","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('auto-parts-ecommerce', 'websites', 'Auto Parts E-commerce Store', '', 'A specialized e-commerce platform for auto parts retailers with vehicle compatibility search, bulk ordering for garages, and multi-brand product catalogs.', '₹54,999', '["Vehicle Compatibility Filter (Year/Make/Model)","Multi-brand Parts Catalog","Garage / B2B Bulk Ordering","Real-time Stock Availability","GST-compliant Invoicing","Shipping & Delivery Integration","Parts Enquiry for Rare Items","Mobile-Responsive Store"]'::jsonb, '[{"name":"Parts Store","price":"₹54,999","desc":"Core auto parts e-commerce","features":["Product Catalog","Compatibility Filter","Payment Gateway","GST Invoicing","6 Weeks Delivery"]},{"name":"B2B Auto Store","price":"₹94,999","desc":"B2C + B2B garage ordering platform","features":["Bulk Ordering","Garage Accounts","Credit Management","Advanced Analytics","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('automobile-crm', 'business-software', 'Automobile CRM', '', 'A specialized CRM for car dealerships and service centers to manage walk-in and digital leads, track test drives, schedule follow-ups, and maximize customer lifetime value.', '₹39,999', '["Lead Management (Walk-in, Web, Digital)","Test Drive & Enquiry Tracking","Sales Pipeline & Follow-up Scheduler","Customer Purchase & Service History","Insurance Renewal Alerts","Service Due Reminders","Lost Deal Analysis","Showroom Performance Dashboard"]'::jsonb, '[{"name":"Auto CRM","price":"₹39,999","desc":"Core dealership lead management","features":["Lead Tracking","Test Drive Pipeline","Follow-up Scheduler","Basic Reports","4 Weeks Delivery"]},{"name":"Dealership Pro CRM","price":"₹74,999","desc":"Full-lifecycle automotive CRM","features":["Service Reminders","Insurance Alerts","Lost Deal Analysis","Performance Dashboard","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fitness-gym-website', 'websites', 'Gym & Fitness Center Website', '', 'A high-energy, visually stunning website for gyms and fitness studios to showcase facilities, membership plans, classes, and generate lead enquiries.', '₹19,999', '["Facility & Equipment Showcase","Membership Plan Display","Class Schedule & Timetable","Trainer Profiles","Free Trial Lead Form","Transformation Gallery (Before/After)","Testimonials & Reviews","Mobile-Responsive Design"]'::jsonb, '[{"name":"Gym Website","price":"₹19,999","desc":"Professional gym web presence","features":["Up to 10 Pages","Class Schedule","Lead Form","Mobile Responsive","2 Weeks Delivery"]},{"name":"Fitness Pro Site","price":"₹39,999","desc":"Full-featured fitness website","features":["Membership Plans","Trainer Profiles","Transformation Gallery","SEO Basics","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('gym-member-management', 'business-software', 'Gym Member Management Software', '', 'A complete gym management platform to handle member onboarding, biometric attendance, membership expiry, fee collection, and communications.', '₹29,999', '["Member Onboarding & Profiles","Biometric / QR Code Attendance","Membership Expiry Alerts","Online & Offline Fee Collection","Membership Plan Management","Freeze & Pause Features","Staff & Trainer Management","Revenue & Attendance Reports"]'::jsonb, '[{"name":"Gym Manager","price":"₹29,999","desc":"Core membership management","features":["Member Profiles","Attendance Tracking","Fee Collection","Renewal Alerts","4 Weeks Delivery"]},{"name":"Fitness Suite","price":"₹54,999","desc":"Full-featured gym management","features":["Biometric Integration","Staff Management","Revenue Reports","Online Payments","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('online-class-booking', 'business-software', 'Online Class Booking System', '', 'An intelligent booking system for fitness studios allowing members to browse class schedules, book spots, pay for sessions, and manage their fitness calendar.', '₹24,999', '["Live Class Schedule Display","Spot Booking & Waitlist","One-on-one Trainer Booking","Online Payment & Prepaid Packs","Cancellation & Reschedule Rules","Automated Reminders (SMS/WhatsApp)","Attendance Tracking","Class Capacity Management"]'::jsonb, '[{"name":"Class Scheduler","price":"₹24,999","desc":"Basic class booking","features":["Schedule Display","Spot Booking","Reminders","Admin Dashboard","3 Weeks Delivery"]},{"name":"Booking Pro","price":"₹44,999","desc":"Full booking & payment system","features":["Online Payments","Prepaid Packs","Trainer Booking","Capacity Management","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fitness-mobile-app', 'mobile-apps', 'Fitness Mobile App', '', 'A branded fitness mobile app for gyms and studios to engage members with schedules, workout content, class booking, progress tracking, and community features.', '₹69,999', '["Class Schedule & Booking","Workout Video Library","Progress Tracker (Weight, Reps, Measurements)","Membership Card & QR Code Entry","Push Notifications for Classes & Offers","Trainer Chat","Community Feed & Challenges","In-app Payment"]'::jsonb, '[{"name":"Member App","price":"₹69,999","desc":"Core gym engagement app","features":["Class Booking","Membership Card","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Fitness App Pro","price":"₹1,19,999","desc":"Full fitness community app","features":["Workout Library","Progress Tracker","Community Feed","In-app Payments","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('workout-nutrition-app', 'mobile-apps', 'Workout & Nutrition Tracking App', '', 'A consumer fitness app featuring personalized workout plans, nutrition tracking, calorie counting, progress photos, and AI-powered fitness recommendations.', '₹99,999', '["Personalized Workout Plan Builder","Exercise Library (Video Demonstrations)","Nutrition & Calorie Tracker","Food Database (Indian Food Included)","Progress Photos & Measurements","Body Composition Tracker","AI Workout Suggestions","Water & Sleep Tracking"]'::jsonb, '[{"name":"Fitness Tracker","price":"₹99,999","desc":"Core workout & nutrition app","features":["Workout Plans","Exercise Library","Calorie Tracker","Progress Photos","10 Weeks Delivery"]},{"name":"AI Fitness App","price":"₹1,79,999","desc":"AI-powered personalized fitness","features":["AI Recommendations","Indian Food Database","Body Composition","Subscriptions","16 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('gym-crm', 'business-software', 'Gym CRM', '', 'A specialized CRM for gyms and fitness studios to manage walk-in and online leads, track trial conversions, and build long-term member relationships.', '₹29,999', '["Lead Capture (Walk-in, Web, Social)","Trial Visit Tracking & Follow-up","Sales Pipeline to Membership Conversion","Automated WhatsApp/SMS Drip Sequences","Member Engagement Score","Re-engagement Campaigns for Inactive Members","Staff Performance Dashboard","Revenue Forecasting"]'::jsonb, '[{"name":"Gym CRM","price":"₹29,999","desc":"Core lead & trial management","features":["Lead Management","Trial Tracking","Follow-up Automation","Basic Reports","4 Weeks Delivery"]},{"name":"Fitness CRM Pro","price":"₹54,999","desc":"Advanced member growth platform","features":["Re-engagement Campaigns","Engagement Scoring","Revenue Forecasting","Staff Dashboard","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('fitness-digital-marketing', 'digital-marketing', 'Fitness Digital Marketing', '', 'Specialized digital marketing for gyms and fitness studios, including local Meta Ads, Google Ads, SEO, and social media campaigns to attract new members.', '₹12,999/mo', '["Local Google & Meta Ads Management","Instagram & Facebook Content Creation","Transformation Video Campaigns","Local SEO & Google My Business","Influencer Marketing","Referral Campaign Setup","WhatsApp Broadcast Campaigns","Monthly Analytics Reports"]'::jsonb, '[{"name":"Local Fitness Ads","price":"₹12,999/mo","desc":"Local ads & social media","features":["Meta Ads","Google My Business","Social Content","12 Posts/mo","Monthly Report"]},{"name":"Fitness Growth","price":"₹24,999/mo","desc":"Full-funnel fitness marketing","features":["Google + Meta Ads","Transformation Campaigns","Influencer Outreach","WhatsApp Broadcasts","Bi-weekly Reports"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-company-website', 'websites', 'Event Company Website', '', 'A visually stunning website for event management companies to showcase past events, services, team, and generate corporate and wedding event enquiries.', '₹24,999', '["Portfolio Gallery (Events Showcase)","Service Category Pages (Weddings, Corporate, etc.)","Client Enquiry & Lead Forms","Testimonials & Case Studies","Vendor Partner Listings","Blog & Event Tips","Instagram Feed Integration","Mobile-Responsive Design"]'::jsonb, '[{"name":"Event Website","price":"₹24,999","desc":"Professional event company presence","features":["Up to 15 Pages","Portfolio Gallery","Lead Forms","Mobile Responsive","3 Weeks Delivery"]},{"name":"Premium Event Site","price":"₹44,999","desc":"Premium portfolio & lead gen site","features":["Unlimited Portfolio","Video Showcases","Instagram Feed","SEO Optimization","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-booking-platform', 'websites', 'Event Booking Platform', '', 'A comprehensive event booking platform for clients to explore event packages, request quotations, approve proposals, and manage event planning digitally.', '₹39,999', '["Event Package Browsing","Online Quotation Builder","Client Proposal Approval Portal","Event Checklist & Timeline","Vendor Coordination Module","Budget Tracking","Document Sharing","Communication Hub"]'::jsonb, '[{"name":"Event Portal","price":"₹39,999","desc":"Quotation & client management","features":["Quote Builder","Client Approval Portal","Document Sharing","Basic Comms","5 Weeks Delivery"]},{"name":"Event Suite","price":"₹74,999","desc":"Full event planning platform","features":["Vendor Module","Budget Tracker","Event Checklist","Full Collaboration","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ticketing-rsvp-system', 'business-software', 'Ticketing & RSVP System', '', 'A complete online ticketing and RSVP management system for concerts, conferences, exhibitions, and social events with payment integration and QR code check-in.', '₹29,999', '["Event Landing Pages","Multiple Ticket Tiers (Early Bird, VIP, etc.)","Online Payment Gateway","QR Code Ticket Generation","On-site QR Code Scanner App","Attendee Data Management","Refund & Transfer Management","Post-event Email & Feedback"]'::jsonb, '[{"name":"Event Tickets","price":"₹29,999","desc":"Core ticketing system","features":["Event Landing Page","Ticket Tiers","Payment Gateway","QR Code Tickets","3 Weeks Delivery"]},{"name":"Ticketing Pro","price":"₹54,999","desc":"Full-featured ticketing suite","features":["Check-in Scanner App","Multiple Events","Attendee Management","Refund Management","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-vendor-management', 'business-software', 'Event Vendor Management', '', 'A centralized portal to manage your network of event vendors (caterers, decorators, photographers, etc.) including contracts, payments, and event assignments.', '₹34,999', '["Vendor Profile & Category Directory","Availability Calendar","Event Assignment & Briefing","Digital Contract Management","Invoice & Payment Tracking","Performance Rating System","Communication Hub","Vendor Performance Analytics"]'::jsonb, '[{"name":"Vendor Hub","price":"₹34,999","desc":"Core vendor directory & assignment","features":["Vendor Directory","Event Assignment","Invoice Tracking","Rating System","4 Weeks Delivery"]},{"name":"Vendor Pro","price":"₹64,999","desc":"Full vendor management suite","features":["Contract Management","Payment Workflows","Availability Calendar","Performance Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-mobile-app', 'mobile-apps', 'Event Mobile App', '', 'A mobile application for events — providing attendees with the schedule, speaker info, networking, live polls, and real-time event updates on their smartphones.', '₹64,999', '["Event Agenda & Schedule","Speaker & Session Profiles","Attendee Networking (Connect & Chat)","Live Polls & Q&A","Push Notifications for Updates","Venue Map & Directions","Exhibitor Directory","Photo Gallery & Social Sharing"]'::jsonb, '[{"name":"Event App","price":"₹64,999","desc":"Core event companion app","features":["Agenda & Schedule","Push Notifications","Venue Map","iOS & Android","6 Weeks Delivery"]},{"name":"Engagement App","price":"₹1,09,999","desc":"Full attendee engagement platform","features":["Networking Module","Live Polls & Q&A","Exhibitor Directory","Social Sharing","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('event-crm', 'business-software', 'Event CRM', '', 'A specialized CRM for event management companies to track client leads, manage quotations, follow up on proposals, and maintain long-term relationships.', '₹29,999', '["Lead Source Tracking","Event Enquiry Pipeline","Quotation & Proposal Tracker","Follow-up Automation","Client Communication Logs","Won / Lost Deal Analysis","Revenue Forecasting","Event Calendar Integration"]'::jsonb, '[{"name":"Event CRM","price":"₹29,999","desc":"Core enquiry management","features":["Enquiry Pipeline","Follow-up Automation","Proposal Tracker","Basic Analytics","3 Weeks Delivery"]},{"name":"Event CRM Pro","price":"₹54,999","desc":"Full business development suite","features":["Won/Lost Analysis","Revenue Forecasting","Client History","Advanced Analytics","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-invitations-platform', 'websites', 'Digital Invitations Platform', '', 'A platform to create and distribute stunning digital invitations (wedding cards, corporate event invites) with RSVP collection, guest management, and personalization.', '₹29,999', '["Custom Invitation Design Templates","Personalized E-invites (Animated)","RSVP Collection & Management","WhatsApp & Email Distribution","Guest List Management","Event Countdown Timer","Venue Map Integration","Guest Meal Preference Collection"]'::jsonb, '[{"name":"Invitation Platform","price":"₹29,999","desc":"Core digital invitation system","features":["Template Library","RSVP Collection","WhatsApp Sharing","Guest Management","3 Weeks Delivery"]},{"name":"Premium Invites","price":"₹54,999","desc":"Animated invites & full guest management","features":["Animated Designs","Meal Preferences","Seating Arrangements","Event Microsite","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('agri-website', 'websites', 'Agriculture Company Website', '', 'A professional website for agricultural companies, seed manufacturers, agri-input distributors, and cooperatives to showcase products and reach more customers.', '₹19,999', '["Product & Crop Solution Showcases","Dealer & Distributor Locator","Crop Advisory Blog","Contact & Enquiry Forms","Certification & Compliance Display","Weather Widget Integration","Mobile-Responsive Design","SEO Optimized"]'::jsonb, '[{"name":"Agri Website","price":"₹19,999","desc":"Core agricultural web presence","features":["Up to 12 Pages","Product Catalog","Lead Forms","Mobile Responsive","2 Weeks Delivery"]},{"name":"Agri Business Site","price":"₹39,999","desc":"Full-featured agri company website","features":["Dealer Locator","Crop Advisory Blog","Multiple Languages","SEO Setup","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('farm-management-system', 'business-software', 'Farm Management System', '', 'A comprehensive farm management platform for farmers and agri-businesses to track crops, manage inputs, record labor, and analyze farm productivity.', '₹29,999', '["Farm & Field Mapping","Crop Season Planning","Input (Fertilizer, Pesticide) Records","Labor & Equipment Management","Irrigation Scheduling","Harvest & Yield Records","Cost of Cultivation Tracking","Farm Performance Analytics"]'::jsonb, '[{"name":"Farm Manager","price":"₹29,999","desc":"Core farm recordkeeping","features":["Crop Records","Input Tracking","Labor Management","Basic Analytics","4 Weeks Delivery"]},{"name":"Smart Farm","price":"₹59,999","desc":"Full farm intelligence platform","features":["Field Mapping","Irrigation Scheduling","Cost Analysis","Mobile App","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('crop-monitoring-dashboard', 'business-software', 'Crop Monitoring Dashboard', '', 'An IIoT and satellite-based crop monitoring dashboard providing real-time insights on crop health, soil moisture, weather, and pest risk alerts.', '₹49,999', '["Satellite Imagery (NDVI Analysis)","IoT Soil Moisture & Temperature Sensors","Weather Forecast Integration","Pest & Disease Risk Alerts","Crop Growth Stage Tracking","Irrigation Advisory","Historical Crop Performance","Mobile Alerts for Farmers"]'::jsonb, '[{"name":"Crop Monitor","price":"₹49,999","desc":"Satellite & weather dashboard","features":["NDVI Maps","Weather Forecast","Crop Stage Tracker","Mobile Alerts","5 Weeks Delivery"]},{"name":"Smart Agri Dashboard","price":"₹94,999","desc":"IoT + Satellite precision farming","features":["IoT Sensor Integration","Irrigation Advisory","Pest Risk Alerts","Historical Analysis","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('agriculture-ecommerce', 'websites', 'Agricultural E-commerce Store', '', 'A specialized e-commerce platform for agri-businesses to sell seeds, fertilizers, pesticides, farm equipment, and fresh produce directly to farmers or consumers.', '₹49,999', '["Agri Product Catalog","Crop-based Product Recommendations","Bulk Order Management","Farmer / B2B Pricing Tiers","COD & UPI Payment Options","Rural Delivery Management","Multi-language Product Pages","Agri Advisory Content"]'::jsonb, '[{"name":"Agri Store","price":"₹49,999","desc":"Core agricultural e-commerce","features":["Product Catalog","UPI Payments","COD","Bulk Orders","5 Weeks Delivery"]},{"name":"Agri Marketplace","price":"₹89,999","desc":"Full-featured agri marketplace","features":["Multi-seller","Farmer Pricing","Advisory Content","Rural Delivery","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('cold-chain-management', 'business-software', 'Cold Chain Management System', '', 'A specialized cold chain management system for agri-businesses, dairy companies, and food processors to monitor temperature, track shipments, and ensure product quality.', '₹59,999', '["Real-time Temperature Monitoring (IoT)","Cold Storage Inventory Tracking","Shipment Tracking with Temp Data","Breach Alerts & Notifications","Quality Compliance Documentation","Multi-location Cold Storage View","Expiry & Batch Tracking","Regulatory Compliance Reports"]'::jsonb, '[{"name":"Cold Monitor","price":"₹59,999","desc":"Temperature monitoring & alerts","features":["Real-time Temp Monitoring","Breach Alerts","Basic Reports","5 Locations","6 Weeks Delivery"]},{"name":"Cold Chain Pro","price":"₹1,09,999","desc":"Full cold chain intelligence","features":["Inventory Tracking","Compliance Reports","Shipment Tracking","Unlimited Locations","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('farmer-mobile-app', 'mobile-apps', 'Farmer Mobile App', '', 'A vernacular farmer mobile app providing crop advisories, market price information, weather forecasts, and direct market access through their smartphones.', '₹79,999', '["Crop Advisory (Vernacular Languages)","Daily Mandi Price Updates","7-day Weather Forecast","Pest & Disease Identification (AI)","Soil Test Request & Report","Government Scheme Information","Direct Market Selling Portal","Farm Record Diary"]'::jsonb, '[{"name":"Farmer App","price":"₹79,999","desc":"Core farmer advisory app","features":["Crop Advisory","Mandi Prices","Weather","2 Regional Languages","8 Weeks Delivery"]},{"name":"Smart Farmer App","price":"₹1,39,999","desc":"Full-featured AI farmer companion","features":["AI Pest ID","Market Selling","Scheme Info","5 Regional Languages","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('agriculture-crm', 'business-software', 'Agriculture CRM', '', 'A specialized CRM for agri-businesses to manage their dealer and distributor networks, track farmer outreach, and monitor field executive activities.', '₹34,999', '["Dealer & Distributor Management","Farmer Database & Geo-tagging","Field Executive Activity Tracking","Sales Order & Indent Management","Product Demo & Trial Tracking","Seasonal Campaign Management","Territory & Beat Plan Management","Sales Performance Analytics"]'::jsonb, '[{"name":"Agri CRM","price":"₹34,999","desc":"Dealer & sales management","features":["Dealer Management","Sales Orders","Field Executive App","Basic Reports","4 Weeks Delivery"]},{"name":"Agri Sales Suite","price":"₹64,999","desc":"Full field sales intelligence","features":["Farmer Geo-tagging","Territory Planning","Campaign Tracking","Advanced Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('recruitment-agency-website', 'websites', 'Recruitment Agency Website', '', 'A professional, conversion-optimized website for recruitment agencies and HR consultancies to attract both corporate clients and job seekers.', '₹24,999', '["Live Job Listings Integration","Employer & Candidate Portals","Service Showcase (Temp, Perm, Executive)","Case Studies & Success Stories","Team & Specialist Profiles","Online CV Submission Form","Employer Enquiry Forms","SEO-Optimized Job Pages"]'::jsonb, '[{"name":"Agency Website","price":"₹24,999","desc":"Core recruitment agency site","features":["Job Listings","CV Upload Form","Employer Enquiry","Mobile Responsive","3 Weeks Delivery"]},{"name":"Recruitment Portal","price":"₹49,999","desc":"Full employer & candidate portal","features":["Employer Portal","Candidate Dashboard","Job SEO Pages","ATS Integration","5 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('job-portal-development', 'websites', 'Job Portal Development', '', 'A custom job portal platform for specific industries or geographies, connecting employers and job seekers with advanced search, profile matching, and application management.', '₹74,999', '["Employer & Job Seeker Registration","Job Posting & Application Management","Resume / CV Database","Advanced Search & Filters","AI-based Job Matching","Verified Employer Badges","Premium Listing & Featured Jobs","Email & SMS Alerts for New Jobs"]'::jsonb, '[{"name":"Job Board","price":"₹74,999","desc":"Core niche job portal","features":["Job Listings","CV Database","Advanced Search","Employer & Seeker Portals","8 Weeks Delivery"]},{"name":"Job Marketplace","price":"₹1,39,999","desc":"Full-featured job platform with AI","features":["AI Job Matching","Premium Listings","Monetization Engine","SEO-optimized Pages","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('applicant-tracking-system', 'business-software', 'Applicant Tracking System (ATS)', '', 'A custom ATS to manage the complete hiring pipeline for agencies and corporate HR teams, from job posting and application screening to interviews and offer management.', '₹49,999', '["Multi-source Job Posting (Job Boards, Website)","CV Parsing & Database","Kanban Hiring Pipeline","Automated Interview Scheduling","Interview Feedback Forms","Offer Letter Generation","Background Verification Tracking","Hiring Analytics Dashboard"]'::jsonb, '[{"name":"ATS Core","price":"₹49,999","desc":"Essential applicant tracking","features":["CV Database","Hiring Pipeline","Interview Scheduling","Basic Reports","5 Weeks Delivery"]},{"name":"ATS Enterprise","price":"₹89,999","desc":"Full-featured hiring suite","features":["CV Parsing","Offer Management","Background Check Integration","Analytics Dashboard","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hr-management-system', 'business-software', 'HR Management System', '', 'A comprehensive HRMS to manage employee records, leaves, attendance, payroll, performance reviews, and HR compliance in one integrated system.', '₹69,999', '["Employee Master Records","Leave & Attendance Management","Payroll Processing (Salary, PF, ESI)","Performance Appraisal Module","Onboarding & Offboarding Workflows","HR Policy Document Library","Employee Self-service Portal","HR Analytics Dashboard"]'::jsonb, '[{"name":"HRMS Core","price":"₹69,999","desc":"Core HR management","features":["Employee Records","Leave Management","Attendance","Basic Reports","7 Weeks Delivery"]},{"name":"HRMS Complete","price":"₹1,29,999","desc":"Full-featured HRMS with Payroll","features":["Payroll Processing","Performance Reviews","Employee Portal","HR Analytics","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('recruitment-crm', 'business-software', 'Recruitment CRM', '', 'A recruitment-specific CRM for staffing agencies to manage client relationships, candidate pipelines, placements, and revenue tracking in a unified platform.', '₹34,999', '["Client Company Management","Candidate Database & Tagging","Job Order Management","Candidate-to-Job Matching","Interview & Placement Tracker","Invoice & Placement Fee Management","Consultant Performance Dashboard","Activity & Communication Logs"]'::jsonb, '[{"name":"Recruitment CRM","price":"₹34,999","desc":"Core candidate & job management","features":["Candidate Database","Job Orders","Placement Tracker","Basic Reports","4 Weeks Delivery"]},{"name":"Staffing CRM Pro","price":"₹64,999","desc":"Full recruitment business suite","features":["Fee Management","Consultant Dashboard","Activity Tracking","Revenue Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('candidate-mobile-app', 'mobile-apps', 'Candidate Mobile App', '', 'A mobile application for job seekers to browse jobs, upload profiles, apply, track application status, and receive interview alerts from their smartphones.', '₹69,999', '["Personalized Job Feed","One-tap Job Application","Profile & CV Builder","Application Status Tracker","Interview Slot Booking","Push Notifications for New Jobs","Skill Assessment Quizzes","Salary Insights & Benchmarks"]'::jsonb, '[{"name":"Candidate App","price":"₹69,999","desc":"Core job search mobile app","features":["Job Browsing","One-tap Apply","Status Tracker","Push Notifications","8 Weeks Delivery"]},{"name":"Talent App Pro","price":"₹1,19,999","desc":"Full-featured candidate platform","features":["AI Job Matching","Skill Assessments","Salary Insights","Video Profile","12 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('recruitment-marketing', 'digital-marketing', 'Recruitment Marketing Services', '', 'Specialized digital marketing for recruitment agencies to attract job seekers and employer clients through LinkedIn, Google Ads, job board SEO, and content marketing.', '₹19,999/mo', '["LinkedIn Ads for Recruiters & Employers","Google Ads for Job Seeker Traffic","Job Board SEO Optimization","Social Media Management (LinkedIn, Instagram)","Employer Branding Campaigns","Candidate Testimonial Content","Email & WhatsApp Campaigns to Candidates","Monthly Hiring Analytics Reports"]'::jsonb, '[{"name":"Recruitment Marketing","price":"₹19,999/mo","desc":"Core digital presence","features":["LinkedIn Management","Google Ads","Job SEO","10 Posts/mo","Monthly Report"]},{"name":"Hiring Brand Pro","price":"₹39,999/mo","desc":"Full recruitment marketing suite","features":["LinkedIn + Meta Ads","Employer Branding","Content Marketing","Bi-weekly Reports","WhatsApp Campaigns"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hotel-website-development', 'websites', 'Hotel & Resort Website', '', 'A visually stunning, conversion-optimized hotel website designed to drive direct bookings, reduce OTA commissions, and showcase the property beautifully.', '₹34,999', '["Virtual Property Tour (360° Photos)","Real-time Room Availability & Booking","Rate & Room Type Comparison","Restaurant & Spa Booking","Special Offers & Packages","Guest Reviews Section","Photo & Video Gallery","Mobile-Responsive Design"]'::jsonb, '[{"name":"Hotel Website","price":"₹34,999","desc":"Professional hotel web presence","features":["Up to 15 Pages","Photo Gallery","Enquiry Form","Mobile Responsive","4 Weeks Delivery"]},{"name":"Booking Website","price":"₹64,999","desc":"Direct booking hotel website","features":["Real-time Booking Engine","Room Comparison","Online Payments","SEO Optimization","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hotel-booking-engine', 'business-software', 'Hotel Booking Engine', '', 'A seamless, mobile-friendly booking engine integrated with your website and PMS to enable direct online room reservations with real-time availability.', '₹49,999', '["Real-time Room Availability Calendar","Multiple Rate Plans & Room Types","Promo Code & Corporate Rate Engine","Multi-currency & Multi-language","Upsell Add-ons (Breakfast, Spa, Late Checkout)","Secure Payment Gateway","Booking Confirmation Emails","Channel Manager Integration"]'::jsonb, '[{"name":"Booking Engine","price":"₹49,999","desc":"Core direct booking engine","features":["Real-time Availability","Payment Gateway","Booking Emails","Promo Codes","5 Weeks Delivery"]},{"name":"Smart Booking Engine","price":"₹84,999","desc":"Advanced engine with upsells","features":["Rate Plan Management","Upsell Add-ons","Multi-currency","Channel Integration","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('property-management-system', 'business-software', 'Property Management System (PMS)', '', 'A cloud-based PMS to manage front desk operations, reservations, check-in/out, housekeeping, billing, and guest communications in a single platform.', '₹79,999', '["Reservation Dashboard","Front Desk Check-in/Check-out","Room Status & Housekeeping Module","Guest Profile & CRM","Invoicing & GST Billing","Restaurant POS Integration","Night Audit","Reports & Analytics"]'::jsonb, '[{"name":"PMS Core","price":"₹79,999","desc":"Essential hotel PMS","features":["Reservations","Front Desk","Housekeeping","Billing","8 Weeks Delivery"]},{"name":"PMS Enterprise","price":"₹1,49,999","desc":"Full-featured hotel management","features":["Restaurant POS","Night Audit","Analytics","Multi-property","14 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('restaurant-management-system', 'business-software', 'Restaurant Management System', '', 'A complete restaurant management system covering table reservations, digital menu, order management, kitchen display, billing, and daily sales analytics.', '₹34,999', '["Digital Menu & QR Code Ordering","Table Reservation Management","Order Management (Dine-in, Takeaway, Delivery)","Kitchen Display System (KDS)","Inventory & Recipe Management","GST-compliant POS Billing","Waiter App (Mobile)","Daily Sales Analytics"]'::jsonb, '[{"name":"Restaurant POS","price":"₹34,999","desc":"Core POS & billing system","features":["Digital Menu","POS Billing","Order Management","Basic Reports","4 Weeks Delivery"]},{"name":"Restaurant Suite","price":"₹64,999","desc":"Full restaurant management","features":["KDS","Table Reservations","Inventory","Waiter App","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('loyalty-program-app', 'mobile-apps', 'Guest Loyalty Program App', '', 'A branded mobile loyalty app for hotels to reward repeat guests with points, offer member-exclusive rates, and build long-term guest relationships.', '₹74,999', '["Points Earning & Redemption System","Membership Tier Management (Silver, Gold, Platinum)","Member-exclusive Rates & Offers","Mobile Key & Digital Room Upgrade","Push Notifications for Offers","Booking History & Stay Summary","F&B Loyalty Integration","In-app Feedback & Rating"]'::jsonb, '[{"name":"Loyalty App","price":"₹74,999","desc":"Core guest loyalty app","features":["Points System","Member Offers","Push Notifications","iOS & Android","8 Weeks Delivery"]},{"name":"Premium Loyalty","price":"₹1,29,999","desc":"Full loyalty & engagement platform","features":["Tiered Membership","Mobile Key","F&B Loyalty","Upgrade Engine","13 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('hospitality-crm', 'business-software', 'Hospitality CRM', '', 'A guest relationship management platform that consolidates stay history, preferences, and feedback to enable personalized marketing and service delivery.', '₹34,999', '["Guest Profile & Stay History","Preference & Special Request Tracking","Segmented Email Marketing Campaigns","Pre-arrival & Post-stay Emails","Feedback & Review Management","Birthday & Anniversary Campaigns","Corporate Account Management","Revenue Analytics by Segment"]'::jsonb, '[{"name":"Hotel CRM","price":"₹34,999","desc":"Core guest relationship management","features":["Guest Profiles","Email Campaigns","Feedback Tracking","Basic Analytics","4 Weeks Delivery"]},{"name":"Hospitality CRM Pro","price":"₹64,999","desc":"Advanced personalization platform","features":["Segmented Marketing","Pre/Post-stay Emails","Corporate Management","Revenue Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('revenue-management-system', 'business-software', 'Revenue Management System', '', 'A hospitality revenue management dashboard with competitor rate tracking, demand forecasting, and dynamic pricing recommendations to maximize RevPAR.', '₹59,999', '["Competitor Rate Intelligence","Demand Forecasting (Events, Seasons)","Dynamic Pricing Recommendations","OTA Performance Analytics","RevPAR & Occupancy Dashboard","Channel Revenue Attribution","Pickup & Pace Reports","Rate Parity Monitoring"]'::jsonb, '[{"name":"Revenue Dashboard","price":"₹59,999","desc":"Core revenue intelligence","features":["Competitor Rates","RevPAR Dashboard","Occupancy Reports","5 Weeks Delivery"]},{"name":"Dynamic Pricing Suite","price":"₹109,999","desc":"Full RMS with dynamic pricing","features":["Dynamic Pricing AI","Demand Forecasting","Rate Parity Alerts","Channel Analytics","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('media-company-website', 'websites', 'Media Company Website', '', 'A high-impact website for media companies, news portals, production houses, and creative agencies to showcase content, attract clients, and build audience.', '₹29,999', '["Content & News Publishing Platform","Portfolio & Showreel Showcases","Advertising & Sponsorship Pages","Media Kit & Rate Card Downloads","Team & Talent Profiles","Video Player Integration","Newsletter Signup","SEO-optimized News Pages"]'::jsonb, '[{"name":"Media Website","price":"₹29,999","desc":"Core media company presence","features":["Up to 15 Pages","Video Integration","Newsletter Signup","Media Kit","3 Weeks Delivery"]},{"name":"News Portal","price":"₹59,999","desc":"Full-featured news & media portal","features":["CMS for Journalists","SEO News Pages","Ad Network Integration","Email Newsletter","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('content-streaming-platform', 'business-software', 'Content Streaming Platform', '', 'A custom video or audio streaming platform with subscription tiers, paywall, content management, and analytics for media companies and content creators.', '₹1,49,999', '["Video/Audio Upload & Transcoding","Subscription & Paywall System","Content Library & Categorization","Adaptive Bitrate Streaming (HLS)","Offline Download (for Apps)","Creator/Publisher CMS","Viewer Analytics","Multi-device (Web, App, Smart TV)"]'::jsonb, '[{"name":"Streaming MVP","price":"₹1,49,999","desc":"Core content streaming platform","features":["Video Upload & Streaming","Subscription System","Content CMS","Analytics","12 Weeks Delivery"]},{"name":"OTT Platform","price":"₹2,99,999","desc":"Full multi-device OTT platform","features":["Adaptive Bitrate","Mobile App","Smart TV App","Offline Downloads","20 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ott-app-development', 'mobile-apps', 'OTT App Development', '', 'Native OTT applications across all major platforms — iOS, Android, Android TV, Apple TV, and Amazon Firestick — for your streaming platform or content brand.', '₹1,29,999', '["iOS & Android Mobile Apps","Android TV & Apple TV Apps","Amazon Firestick App","User Authentication & Profiles","Subscription Plan Management","Offline Download","Chromecast Support","Parental Controls"]'::jsonb, '[{"name":"Mobile OTT Apps","price":"₹1,29,999","desc":"iOS & Android streaming apps","features":["iOS App","Android App","User Profiles","Subscription","12 Weeks Delivery"]},{"name":"Full OTT Suite","price":"₹2,49,999","desc":"Mobile + Smart TV apps","features":["Android TV App","Apple TV App","Firestick App","Chromecast","20 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('digital-magazine-portal', 'websites', 'Digital Magazine & News Portal', '', 'An engaging digital magazine or news portal with article publishing, subscription paywalls, digital flipbook magazines, push notifications, and advertising integration.', '₹44,999', '["Article & Issue Publishing (CMS)","Digital Flipbook Magazine Reader","Subscription & Paywall System","Category & Tag-based Navigation","Newsletter Integration","Native Advertising System","Push Notifications for New Issues","Offline Reading Mode (App)"]'::jsonb, '[{"name":"Digital Portal","price":"₹44,999","desc":"Web-based digital magazine","features":["CMS","Paywall","Newsletter","Ad Slots","5 Weeks Delivery"]},{"name":"Magazine App","price":"₹89,999","desc":"Full magazine app & portal","features":["iOS & Android App","Flipbook Reader","Push Notifications","Offline Mode","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('talent-artist-portal', 'websites', 'Talent & Artist Portfolio Portal', '', 'A marketplace-style portal to showcase and book artists, performers, speakers, and creative talent for events, productions, and brand collaborations.', '₹34,999', '["Talent Profile Pages (Video, Photos, Bio)","Searchable Talent Directory","Availability Calendar","Online Booking & Quote Request","Contract Management","Payment Processing","Rating & Review System","Talent Management Dashboard"]'::jsonb, '[{"name":"Talent Portfolio","price":"₹34,999","desc":"Agency talent showcase","features":["Talent Profiles","Booking Requests","Video Gallery","Admin Dashboard","4 Weeks Delivery"]},{"name":"Talent Marketplace","price":"₹74,999","desc":"Full booking marketplace","features":["Talent Directory","Online Booking","Payments","Commission Management","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('media-crm', 'business-software', 'Media & Publisher CRM', '', 'A specialized CRM for media companies to manage advertiser relationships, track ad sales pipelines, manage editorial content workflows, and subscriber engagement.', '₹39,999', '["Advertiser Account Management","Ad Sales Pipeline & Revenue Tracking","Editorial Content Calendar","Subscriber Database & Segmentation","Newsletter Campaign Management","Content Performance Analytics","Advertiser Report Generation","Freelancer & Contributor Management"]'::jsonb, '[{"name":"Media CRM","price":"₹39,999","desc":"Core advertiser & content management","features":["Advertiser Management","Ad Pipeline","Content Calendar","Basic Analytics","4 Weeks Delivery"]},{"name":"Publisher Suite","price":"₹74,999","desc":"Full media business management platform","features":["Subscriber Segmentation","Newsletter Automation","Revenue Reports","Freelancer Management","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('entertainment-marketing', 'digital-marketing', 'Entertainment Digital Marketing', '', 'Performance-focused digital marketing for entertainment brands, OTT platforms, and event promoters to build massive audiences and drive ticket sales or subscriptions.', '₹24,999/mo', '["YouTube Channel Growth Strategy","Instagram & Facebook Fan Page Growth","Trailer & Content Promotion Campaigns","Paid Ads for Ticket Sales & Subscriptions","Influencer & Celebrity Collaborations","Viral Content Campaign Design","PR & Media Coverage Coordination","Audience Analytics & Reporting"]'::jsonb, '[{"name":"Entertainment Buzz","price":"₹24,999/mo","desc":"Audience growth campaigns","features":["Social Media Mgt","Content Promotion","Basic Paid Ads","15 Posts/mo","Monthly Report"]},{"name":"Blockbuster Campaign","price":"₹49,999/mo","desc":"Full-scale launch marketing","features":["Influencer Collaborations","Multi-platform Ads","Viral Campaign Design","PR Outreach","Weekly Reports"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('sports-club-website', 'websites', 'Sports Club & Academy Website', '', 'A dynamic website for sports clubs, academies, and federations to showcase teams, invite member registrations, publish match results, and engage fans.', '₹19,999', '["Team & Player Profiles","Match Fixtures & Results","Online Member Registration","Academy Coaching Programs","Achievement & Trophy Showcase","News & Match Reports","Fan Gallery & Videos","Mobile-Responsive Design"]'::jsonb, '[{"name":"Club Website","price":"₹19,999","desc":"Core sports club presence","features":["Team Profiles","Match Results","News","Member Registration Form","2 Weeks Delivery"]},{"name":"Academy Pro Site","price":"₹39,999","desc":"Full sports academy website","features":["Coaching Programs","Video Gallery","Fan Section","SEO Optimization","4 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('team-management-system', 'business-software', 'Team Management System', '', 'A comprehensive team management platform for coaches and team managers to manage squads, track attendance, schedule training, and analyze player performance.', '₹29,999', '["Squad & Player Management","Training Session Scheduler","Attendance Tracking","Fitness & Medical Records","Video Analysis Module","Coach Communication Hub","Performance Data Dashboard","Youth Academy Management"]'::jsonb, '[{"name":"Team Manager","price":"₹29,999","desc":"Core team management","features":["Squad Management","Training Schedule","Attendance","Basic Stats","4 Weeks Delivery"]},{"name":"Performance Suite","price":"₹59,999","desc":"Full-featured team & performance system","features":["Video Analysis","Fitness Records","Player App","Performance Dashboard","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('sports-booking-platform', 'websites', 'Sports Venue Booking Platform', '', 'An online booking platform for sports venues (cricket grounds, football pitches, badminton courts, swimming pools) to manage time-slot reservations and payments.', '₹24,999', '["Real-time Slot Availability Calendar","Multi-sport & Multi-court Booking","Online Payment Collection","Membership vs Pay-per-Use Pricing","Automated Booking Confirmation","QR Code Access Control","Corporate Group Booking","Revenue & Utilization Reports"]'::jsonb, '[{"name":"Venue Booking","price":"₹24,999","desc":"Core court booking system","features":["Slot Calendar","Online Booking","Payment Gateway","Booking Emails","3 Weeks Delivery"]},{"name":"Venue Pro","price":"₹49,999","desc":"Multi-court with QR access","features":["Multi-sport Courts","QR Access Control","Membership Management","Revenue Reports","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('athlete-performance-app', 'mobile-apps', 'Athlete Performance App', '', 'A mobile app for athletes and coaches to track physical performance metrics, training loads, nutrition, recovery, and mental wellness throughout the season.', '₹79,999', '["GPS Speed & Distance Tracking","Training Load Monitoring (RPE, HRV)","Nutrition & Hydration Logging","Sleep & Recovery Tracking","Injury Prevention Alerts","Coach Feedback Module","Performance Trend Analytics","Competition Preparation Mode"]'::jsonb, '[{"name":"Athlete App","price":"₹79,999","desc":"Core performance tracking app","features":["Training Logs","Nutrition Tracking","Coach Dashboard","Basic Analytics","8 Weeks Delivery"]},{"name":"Elite Performance","price":"₹1,39,999","desc":"Advanced sports science app","features":["Wearable Integration","HRV Monitoring","Injury Alerts","Periodization Planning","13 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('sports-ecommerce', 'websites', 'Sports Equipment E-commerce', '', 'A specialized e-commerce store for sports equipment retailers and sports brands to sell gear, apparel, and merchandise online with club/academy tie-ups.', '₹49,999', '["Sports Equipment & Apparel Catalog","Sport-based Product Filtering","Club & Team Kit Customization","Bulk B2B School / Club Orders","Product Reviews & Expert Ratings","Video Demonstrations","GST Invoicing","Shipping & Delivery Integration"]'::jsonb, '[{"name":"Sports Store","price":"₹49,999","desc":"Core sports e-commerce","features":["Product Catalog","Sports Filters","Payment Gateway","GST Invoicing","5 Weeks Delivery"]},{"name":"Sports Marketplace","price":"₹89,999","desc":"Full B2B + B2C sports platform","features":["Club Kit Customization","Bulk B2B Orders","Video Demos","Expert Reviews","9 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('sports-crm', 'business-software', 'Sports CRM', '', 'A CRM tailored for sports clubs, agencies, and events to manage sponsor relationships, track fan engagement, manage member renewals, and execute targeted communications.', '₹34,999', '["Sponsor Pipeline & Contract Tracking","Fan Database & Segmentation","Member Renewal Management","Season Ticket Sales Pipeline","Event & Match Communication","Merchandise Sales Tracking","Sponsor ROI Reporting","Fan Loyalty Program Integration"]'::jsonb, '[{"name":"Sports CRM","price":"₹34,999","desc":"Core sports commercial management","features":["Sponsor Management","Member Renewals","Fan Database","Basic Reports","4 Weeks Delivery"]},{"name":"Club CRM Pro","price":"₹64,999","desc":"Advanced sports business platform","features":["Season Ticket Pipeline","Sponsor ROI Reports","Loyalty Integration","Advanced Analytics","7 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('tournament-management', 'websites', 'Tournament Management System', '', 'A complete digital system to manage sports tournaments from team registration and draw creation to match scheduling, live scoring, and public leaderboards.', '₹24,999', '["Online Team Registration & Entry Fees","Automated Draw & Bracket Generation","Match Schedule & Venue Management","Live Score Input & Updates","Public Leaderboard & Points Table","Referee/Umpire Assignment","Online Result Publishing","Digital Certificates & Medals Tracking"]'::jsonb, '[{"name":"Tournament Manager","price":"₹24,999","desc":"Core tournament system","features":["Team Registration","Draw System","Match Schedule","Leaderboard","3 Weeks Delivery"]},{"name":"Tournament Pro","price":"₹49,999","desc":"Full tournament management suite","features":["Live Scoring","Referee Assignment","Online Results","Digital Certificates","6 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('saas-product-development', 'business-software', 'SaaS Product Development', '', 'We build production-ready SaaS platforms with multi-tenancy, subscription billing, onboarding flows, usage analytics, and enterprise security — ready to scale to thousands of users.', '₹74,999', '["Multi-tenant Architecture","Subscription Billing (Stripe)","User Onboarding Flows","Role-based Access Control","Usage Analytics & Metering","API & Webhook System","Admin Super Dashboard","Enterprise Security (SSO, 2FA)"]'::jsonb, '[{"name":"Silver Plan","price":"₹74,999","desc":"Basic SaaS (single tier)","features":["Single-tenant Architecture","Core Features","Stripe Billing","Admin Dashboard","8 Weeks Delivery"]},{"name":"Gold Plan","price":"₹1,49,999","desc":"Full multi-tenant SaaS","features":["Multi-tenant","Subscription Plans","Onboarding Flows","Analytics","API System","12 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹2,49,999","desc":"Enterprise SaaS platform","features":["SSO/2FA","Usage Metering","Webhooks","White-label Option","DevOps Setup","18 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('mobile-app-development', 'business-software', 'Mobile App Development', '', 'From consumer apps to B2B tools, we build startup mobile apps with clean UX, fast performance, scalable backends, and app store optimization to get early adopters fast.', '₹59,999', '["React Native/Flutter Development","Backend API Development","User Auth & Profiles","Push Notifications","Analytics & Crash Reporting","App Store Optimization","In-app Purchases","Social Login"]'::jsonb, '[{"name":"Silver Plan","price":"₹59,999","desc":"MVP mobile app (Android)","features":["Android App","Core Features","Firebase Backend","Push Notifications","4 Weeks Delivery"]},{"name":"Gold Plan","price":"₹99,999","desc":"Full startup mobile app","features":["Android + iOS","Custom Backend","Analytics","In-app Purchases","Social Login","6 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,69,999","desc":"Enterprise-grade startup app","features":["All Platforms","Scalable Architecture","Advanced Analytics","CI/CD","ASO Optimization","10 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('ai-integration-services', 'business-software', 'AI Integration Services', '', 'Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.', '₹29,999', '["AI Chatbot Development","Recommendation Engine","Document OCR & Processing","Predictive Analytics","Image Recognition","Natural Language Processing","OpenAI API Integration","Custom ML Model Training"]'::jsonb, '[{"name":"Silver Plan","price":"₹29,999","desc":"Basic AI feature integration","features":["Chatbot or 1 AI Feature","OpenAI Integration","Basic Training","API Endpoint","2 Weeks Delivery"]},{"name":"Gold Plan","price":"₹74,999","desc":"Custom AI module","features":["Custom AI Feature","Data Pipeline","Model Fine-tuning","Dashboard","API + Documentation","4 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹1,49,999","desc":"Enterprise AI platform","features":["Multiple AI Features","Custom ML Models","Real-time Inference","MLOps Pipeline","8 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('branding-services', 'business-software', 'Branding Services', '', 'Complete brand identity design for startups — from logo and color palette to brand guidelines, pitch decks, and marketing collateral.', '₹12,999', '["Logo Design & Variants","Brand Guidelines (Colors, Fonts)","Investor Pitch Deck Template","Business Cards & Letterheads","Social Media Templates","Website Brand Guidelines"]'::jsonb, '[{"name":"Silver Plan","price":"₹12,999","desc":"Core brand identity package","features":["Logo Design","Basic Color Palette","Typography Guide","1 Week Delivery"]},{"name":"Gold Plan","price":"₹24,999","desc":"Complete identity & pitch deck","features":["All Silver features","Brand Guidelines Book","Pitch Deck Template","Business Cards","2 Weeks Delivery"]},{"name":"Platinum Plan","price":"₹44,999","desc":"Full corporate brand system","features":["All Gold features","Social Media Templates","Letterhead & Invoice design","Stationery Pack","3 Weeks Delivery"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;
insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('growth-consulting', 'business-software', 'Growth Consulting', '', 'Work with a dedicated growth consultant to analyze your funnel, design product-led growth loops, run acquisition experiments, and optimize conversion rates.', '₹19,999/mo', '["Funnel & Conversion Audit","North Star Metric Setup","Viral Referral Loops Design","Product-Led Growth (PLG) Strategy","User Retention Analysis","Weekly Growth Sprints","Analytics Dashboard Setup"]'::jsonb, '[{"name":"Silver Plan","price":"₹19,999/mo","desc":"Growth roadmap & advising","features":["Weekly 1-on-1 Consulting","Funnel Optimization Roadmap","Basic Analytics Setup","Cancel anytime"]},{"name":"Gold Plan","price":"₹39,999/mo","desc":"Active growth sprints execution","features":["All Silver features","PLG loops setup","2 A/B tests per month","Mixpanel dashboard setup","Cancel anytime"]},{"name":"Platinum Plan","price":"₹69,999/mo","desc":"Dedicated growth team integration","features":["All Gold features","Daily Slack coordination","Unlimited experiments execution","Custom tracking SDK build","Weekly funnel reviews"]}]'::jsonb, false)
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;

insert into public.faqs (category_id, question, answer) values ('websites', 'Will the website work perfectly on mobile screens?', 'Absolutely. 100% of our website layouts are fully responsive, meaning they look and work beautifully on mobile phones, tablets, laptops, and wide desktop screens.');
insert into public.faqs (category_id, question, answer) values ('websites', 'Is hosting and domain search included in the pricing plans?', 'Yes. Our Silver, Gold, and Platinum plans include 1 Year of High Performance SSD Hosting and a .com/.in domain name without extra charges.');
insert into public.faqs (category_id, question, answer) values ('websites', 'Can I edit the website contents myself without code knowledge?', 'Yes. For our Gold plans, we set up an easy WordPress or Custom CMS admin dashboard. You can modify texts, images, and add new pages without touching a line of code.');
insert into public.faqs (category_id, question, answer) values ('mobile-apps', 'Do you submit the mobile apps to Google Play Store and Apple App Store?', 'Yes. We take full responsibility for setting up your developer profiles, compiling native builds, and getting the applications approved and listed on both stores.');
insert into public.faqs (category_id, question, answer) values ('mobile-apps', 'Which framework do you use to build cross-platform apps?', 'We construct cross-platform apps using Flutter or React Native, giving you a high-performance, single-codebase solution that runs smoothly on both iOS and Android.');
insert into public.faqs (category_id, question, answer) values ('mobile-apps', 'Are push notifications supported?', 'Yes, we integrate Firebase Cloud Messaging (FCM) so you can send target alerts, updates, and custom notifications to all your app users instantly.');
insert into public.faqs (category_id, question, answer) values ('digital-marketing', 'How long does it take to see results from SEO campaigns?', 'SEO is a gradual organic process. While technical code fixes and speed audits provide immediate performance boosts, keyword ranking increases and traffic gains usually take 2 to 4 months of consistent on-page/off-page efforts.');
insert into public.faqs (category_id, question, answer) values ('digital-marketing', 'Do the marketing plan prices include the paid ad spend budgets?', 'No, our plans cover agency setup, graphics creation, target audience research, and copy execution fees. The budget spent directly on Facebook Ads or Google AdWords is paid directly by the client.');
insert into public.faqs (category_id, question, answer) values ('whatsapp-marketing', 'What is the benefit of using the Official WhatsApp Business API?', 'The official API allows you to send mass broadcasts to users who haven’t saved your number without risk of phone number blocking, integrate interactive auto-replies/bots, and apply for the official WhatsApp Green Tick.');
insert into public.faqs (category_id, question, answer) values ('whatsapp-marketing', 'Do you help in getting the verified Green Tick?', 'Yes. We guide you through the Meta Business Verification process and submit the official application for the WhatsApp verified badge.');
insert into public.faqs (category_id, question, answer) values ('gmb', 'How long does Google Business Profile verification take?', 'Google profile verification methods vary (Email, Phone, Video, or Postcard). Postcard verification can take up to 14 days, while digital verification methods are typically completed within 24 to 72 hours once setup is done.');
insert into public.faqs (category_id, question, answer) values ('gmb', 'Can you help remove fake negative reviews on Google Maps?', 'We help you flag policy-violating spam reviews directly to Google Support and set up automated responses/widgets to acquire positive client reviews to balance out the score.');
insert into public.faqs (category_id, question, answer) values ('branding-graphics', 'Who owns the final copyrights to the logo designs?', 'Once the project is completed and paid, you retain 100% intellectual property ownership and copyright of the final vector design concepts.');
insert into public.faqs (category_id, question, answer) values ('branding-graphics', 'What design file formats will I receive?', 'You will receive print-ready vector source files (.AI, .EPS, .SVG) along with high-definition digital formats (.PNG transparent, .PDF, .JPG).');
insert into public.faqs (category_id, question, answer) values ('ai-solutions', 'Can the AI chatbot connect with our CRM or WhatsApp numbers?', 'Yes. We build custom API endpoints, using webhooks to trigger data synchronization with CRMs like Salesforce, HubSpot, or WhatsApp API chats.');
insert into public.faqs (category_id, question, answer) values ('ai-solutions', 'How do you train the AI agent on our company documentation?', 'We employ Retrieval-Augmented Generation (RAG). Your PDFs, website text, and docs are embedded into a vector database, so the AI refers strictly to verified details.');
insert into public.faqs (category_id, question, answer) values ('business-software', 'Can we migrate our existing offline Excel files into the CRM/ERP?', 'Yes. We write custom ETL scripts to map, sanitize, and import your existing legacy XLS or CSV sheets into the new Postgres or MySQL database.');
insert into public.faqs (category_id, question, answer) values ('business-software', 'What server scaling setup is provided?', 'We deploy custom ERPs on managed SSD virtual private servers (VPS) with hourly database failover sync, secure SSH protocols, and performance metrics dashboards.');
insert into public.faqs (category_id, question, answer) values ('industry-solutions', 'Can you integrate doctor consultation video calling?', 'Yes. For clinic portals, we integrate WebRTC or Zoom Web SDK engines for secure, low-latency in-browser patient video consultations.');
insert into public.faqs (category_id, question, answer) values ('industry-solutions', 'Is online fee payment integration secure?', 'Yes, we use secure PCI-DSS compliant payment gateways (Razorpay, Stripe, UPI links) with automated fee receipt generation.');
insert into public.faqs (category_id, question, answer) values ('hosting-domain', 'Do you provide round-the-clock server support?', 'Yes, we set up continuous server health checks. If RAM usage spikes or a node crashes, our automatic recovery scripts trigger and our on-call sysadmins are immediately notified.');
insert into public.faqs (category_id, question, answer) values ('hosting-domain', 'Can we move our hosting from GoDaddy/Hostinger to your cloud?', 'Yes, we offer 100% free server migration services. We move your files, databases, and emails with zero site downtime.');

insert into public.testimonials (category_id, name, role, content) values ('websites', 'Rajesh Kumar', 'Founder, OrganicBites', 'Bubbles Media built our e-commerce portal and it handles over 500 orders a day with zero lag. The checkout flow is extremely smooth!');
insert into public.testimonials (category_id, name, role, content) values ('websites', 'Sneha Patel', 'Marketing Dir, Apex Builders', 'Our company website looks incredibly professional. The loading speed on mobile is under 1.5 seconds, which improved our Google ranks.');
insert into public.testimonials (category_id, name, role, content) values ('mobile-apps', 'Amit Verma', 'CEO, FitTrack India', 'The cross-platform app Flutter build is gorgeous. Our user reviews on Play Store jumped from 3.4 to 4.8 star average!');
insert into public.testimonials (category_id, name, role, content) values ('digital-marketing', 'Vikram Mehta', 'Co-Founder, EduQuest', 'Their SEO package boosted our organic lead count by 320% in just 4 months. The regular progress reports are detailed and insightful.');
insert into public.testimonials (category_id, name, role, content) values ('whatsapp-marketing', 'Rohan Sharma', 'Ops Lead, QuickCart', 'Setting up the API chatbot automated 70% of our routine tracking enquiries. Our support agents can focus on key sales tickets now.');
insert into public.testimonials (category_id, name, role, content) values ('gmb', 'Dr. Priya Shah', 'Chief Dentist, DentalCare Clinic', 'Optimizing our Maps listing brought in a surge of walk-in patients. We rank in the top 3 spots now for dental services in our area!');
insert into public.testimonials (category_id, name, role, content) values ('branding-graphics', 'Karan Johar', 'Partner, Bistro99', 'The visual branding, logo kit, and menu graphic layout they crafted captures the exact cozy, modern vibe of our restaurant.');
insert into public.testimonials (category_id, name, role, content) values ('ai-solutions', 'Nikhil Sen', 'CTO, LogiMove Solutions', 'The custom GPT support bot we launched resolved 4,000 queries in the first month with a 98% satisfaction rate. Simply incredible.');
insert into public.testimonials (category_id, name, role, content) values ('business-software', 'Sanjay Dutt', 'Director, Prime Distributors', 'Their custom inventory and billing POS CRM saved our team hours of manual entry. No more invoice mismatch errors!');
insert into public.testimonials (category_id, name, role, content) values ('industry-solutions', 'Meera Deshmukh', 'Principal, St. Jude School', 'The custom student database and online fee payment page has made school administration extremely transparent for both parents and accounts staff.');
insert into public.testimonials (category_id, name, role, content) values ('hosting-domain', 'Devendra Joshi', 'Systems Head, FinTech Secure', 'Migrating to their high availability AWS cluster solved our site crash issues during marketing campaigns. Highly recommended!');

insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('websites', 'Website Price Estimator', 4999, '[{"id":"pages","label":"Number of Pages","min":1,"max":50,"defaultValue":5,"step":1,"unit":"pages","pricePerUnit":1200}]'::jsonb, '[{"id":"ecommerce","label":"E-commerce Shop (Cart, Payment Gateway)","price":7999},{"id":"seo","label":"Premium SEO Optimization Package","price":3999},{"id":"cms","label":"Admin Dashboard (WordPress / CMS Setup)","price":2999},{"id":"customDesign","label":"Bespoke Figma UI/UX Design Grid","price":4999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('mobile-apps', 'App Development Budget Planner', 24999, '[{"id":"screens","label":"Estimated Screens","min":5,"max":40,"defaultValue":10,"step":1,"unit":"screens","pricePerUnit":2500}]'::jsonb, '[{"id":"ios","label":"iOS App (Native Swift Build)","price":19999},{"id":"android","label":"Android App (Native Kotlin Build)","price":14999},{"id":"backend","label":"Custom Node.js Server & Cloud Database","price":24999},{"id":"chat","label":"Real-time Chat & WebSockets","price":11999},{"id":"push","label":"Smart Push Notifications Service","price":4999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('digital-marketing', 'Growth Budget Calculator', 5999, '[{"id":"keywords","label":"Target SEO Keywords","min":5,"max":50,"defaultValue":15,"step":5,"unit":"keywords","pricePerUnit":300}]'::jsonb, '[{"id":"smm","label":"Social Media Management (12 posts/mo)","price":6999},{"id":"ads","label":"Google & Facebook Paid Ads Optimization","price":8999},{"id":"leads","label":"Lead Generation Form & Auto-call hooks","price":4999},{"id":"reels","label":"Video Production Scripting (4 Reels/mo)","price":5999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('whatsapp-marketing', 'WhatsApp Automation Planner', 3999, '[{"id":"broadcasts","label":"Contacts for Broadcasts /mo","min":1000,"max":50000,"defaultValue":5000,"step":1000,"unit":"contacts","pricePerUnit":0.15}]'::jsonb, '[{"id":"chatbot","label":"Interactive AI Chatbot Flow Builder","price":5999},{"id":"supportDesk","label":"Multi-agent Shared Customer Inbox CRM","price":3999},{"id":"tickVerification","label":"Official Green Tick Verification Aid","price":2999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('gmb', 'Local Visibility Planner', 1999, '[{"id":"citations","label":"Local Directory Citations","min":10,"max":100,"defaultValue":20,"step":5,"unit":"directories","pricePerUnit":120}]'::jsonb, '[{"id":"optimize","label":"Keyword Rich Profile Optimization","price":1999},{"id":"reviewWidget","label":"Review Generator Widget on Website","price":999},{"id":"geoTag","label":"Geo-Tagged Photos Setup","price":1499}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('branding-graphics', 'Brand Assets Value Planner', 1999, '[{"id":"concepts","label":"Logo Design Concepts","min":2,"max":10,"defaultValue":3,"step":1,"unit":"concepts","pricePerUnit":1000}]'::jsonb, '[{"id":"guidelines","label":"Brand Guidelines Guidebook (Colors, Fonts)","price":1999},{"id":"stationery","label":"Letterhead, Business Cards & Envelope Templates","price":1499},{"id":"socialMedia","label":"Social Media Kit (Profile Grids, Cover Banners)","price":2499},{"id":"copyright","label":"Trademark IP Filing Support Assistance","price":3999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('ai-solutions', 'AI Automation & Agents Planner', 14999, '[{"id":"workflows","label":"Automated Multi-Agent Workflows","min":1,"max":10,"defaultValue":2,"step":1,"unit":"workflows","pricePerUnit":8000}]'::jsonb, '[{"id":"gpt4","label":"Upgrade to GPT-4o Enterprise Engine API","price":9999},{"id":"whatsappIntegration","label":"AI Voice & Text WhatsApp Response Bot","price":12999},{"id":"ragKnowledge","label":"Custom RAG (Database/PDF Document reader)","price":14999},{"id":"analyticsBoard","label":"Live AI Agent Usage & Analytics Screen","price":4999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('business-software', 'ERP & CRM Solution Estimator', 44999, '[{"id":"users","label":"Supported CRM/ERP Users","min":5,"max":100,"defaultValue":10,"step":5,"unit":"user logins","pricePerUnit":500}]'::jsonb, '[{"id":"pos","label":"Live Billing & POS Integration","price":14999},{"id":"hrms","label":"HRMS (Employee payroll, attendance)","price":19999},{"id":"inventory","label":"Real-time Stock Alert Inventory","price":11999},{"id":"webhooks","label":"External Accounting APIs Integration","price":9999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('industry-solutions', 'Niche Vertical SaaS Planner', 19999, '[{"id":"listings","label":"Listing Catalog Slots / Slots Limit","min":50,"max":1000,"defaultValue":100,"step":50,"unit":"slots","pricePerUnit":20}]'::jsonb, '[{"id":"bookings","label":"Online Slot Scheduler & Booking Engine","price":7999},{"id":"smsAlerts","label":"Integrated Twilio SMS Alert Reminders","price":3999},{"id":"pdfReports","label":"Automated Billing Invoice PDF generator","price":4999},{"id":"mapLocate","label":"Geo-Map Leaflet Integration","price":2999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('hosting-domain', 'Cloud Infrastructure Planner', 2999, '[{"id":"space","label":"Allocated Cloud Storage (GB)","min":10,"max":200,"defaultValue":30,"step":10,"unit":"GB","pricePerUnit":50}]'::jsonb, '[{"id":"vps","label":"Dedicated VPS Hosting (Root Admin Panel)","price":4999},{"id":"aws","label":"High Availability Multi-zone Backup Node","price":14999},{"id":"businessEmails","label":"25 Professional Business Email Accounts","price":1499},{"id":"cdnSpeed","label":"Cloudflare Enterprise CDN & Firewall Tuning","price":2999}]'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;
