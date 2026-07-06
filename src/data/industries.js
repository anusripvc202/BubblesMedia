// ============================================================
// Tech Mart 24 — INDUSTRIES & SERVICES DATA CONFIG
// Single source of truth for all industry routes + content
// ============================================================

export const industries = [
  {
    "id": "healthcare",
    "slug": "healthcare",
    "name": "Doctors & Healthcare",
    "tagline": "Digital health solutions for clinics, hospitals & practitioners",
    "color": "#0284c7",
    "bgColor": "#f0f9ff",
    "description": "We build powerful digital platforms for the healthcare sector — from hospital websites to telemedicine apps — helping you reach more patients and streamline operations.",
    "services": [
      {
        "slug": "hospital-website-development",
        "title": "Hospital Website Development",
        "tagline": "Professional, trust-building websites for hospitals & clinics",
        "overview": "A modern hospital website is your digital front desk. We build fast, secure, mobile-first websites that showcase your specialties, doctors, facilities, and allow patients to book appointments online.",
        "features": [
          "Doctor Profile Pages",
          "Online Appointment Booking",
          "Department & Specialty Listings",
          "Patient Testimonials",
          "Emergency Contact Banner",
          "Health Blog/News Section",
          "Insurance Partner Listings",
          "HIPAA-Compliant Contact Forms"
        ],
        "benefits": [
          "Attract new patients 24/7",
          "Reduce reception workload",
          "Build trust with professional design",
          "Improve Google search rankings",
          "Showcase specialties and achievements"
        ],
        "process": [
          "Discovery & Requirements",
          "UI/UX Wireframing",
          "Design Mockups",
          "Development",
          "Content Integration",
          "Testing & QA",
          "Launch & Go-Live",
          "Post-Launch Support"
        ],
        "technologies": [
          "Next.js",
          "React",
          "WordPress",
          "Node.js",
          "MongoDB",
          "Cloudinary",
          "Razorpay",
          "Google Maps API"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Perfect for small clinics",
            "features": [
              "5 Pages",
              "Doctor Profiles",
              "Appointment Form",
              "Mobile Responsive",
              "1 Week Delivery",
              "1 Month Support"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "For multi-specialty hospitals",
            "features": [
              "15 Pages",
              "Online Booking System",
              "Patient Portal",
              "Blog/News CMS",
              "SEO Optimization",
              "2 Weeks Delivery",
              "3 Months Support"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Full custom hospital portal",
            "features": [
              "Unlimited Pages",
              "Custom Patient Dashboard",
              "Appointment + Billing Integration",
              "Telemedicine Module",
              "Advanced Analytics",
              "4 Weeks Delivery",
              "6 Months Support"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long does it take to build a hospital website?",
            "a": "Typically 1–4 weeks depending on the plan and complexity. We work efficiently to meet your timeline."
          },
          {
            "q": "Can patients book appointments online?",
            "a": "Yes! Our Gold and Platinum plans include a full online appointment booking system with calendar integration."
          },
          {
            "q": "Is the website mobile-friendly?",
            "a": "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop."
          },
          {
            "q": "Will the website be secure?",
            "a": "Yes — we use SSL certificates, secure forms, and follow best practices for data security."
          }
        ],
        "caseStudies": [
          {
            "title": "City Care Hospital, Pune",
            "result": "3x increase in online appointment bookings within 2 months of launch",
            "industry": "Multi-Specialty Hospital"
          },
          {
            "title": "Dr. Sharma Clinic, Delhi",
            "result": "Reduced reception calls by 40% with online booking integration",
            "industry": "General Practice"
          }
        ]
      },
      {
        "slug": "appointment-booking-system",
        "title": "Appointment Booking System",
        "tagline": "Smart scheduling platform to manage patient appointments seamlessly",
        "overview": "Our appointment booking systems eliminate manual scheduling chaos. Patients book online 24/7, doctors get organized calendars, and you reduce no-shows with automated reminders.",
        "features": [
          "Real-time Calendar Availability",
          "SMS & Email Reminders",
          "Multi-doctor Scheduling",
          "Patient Self-rescheduling",
          "Video Consultation Links",
          "Waiting List Management",
          "Insurance Verification",
          "Appointment History"
        ],
        "benefits": [
          "Zero double-bookings",
          "Reduce no-shows by 60%",
          "Save 3+ hours of admin work daily",
          "Better patient satisfaction",
          "24/7 booking availability"
        ],
        "process": [
          "Workflow Analysis",
          "System Architecture",
          "UI Design",
          "Backend Development",
          "Calendar Integration",
          "Notification Setup",
          "Testing",
          "Deployment & Training"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Twilio SMS",
          "SendGrid",
          "Google Calendar API",
          "Stripe",
          "Socket.io"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Single-doctor scheduling",
            "features": [
              "1 Doctor Profile",
              "Online Booking Form",
              "Email Confirmations",
              "Basic Calendar",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Multi-doctor clinic system",
            "features": [
              "Up to 10 Doctors",
              "SMS + Email Reminders",
              "Patient Portal",
              "Reporting Dashboard",
              "Rescheduling Self-service",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Hospital-grade booking suite",
            "features": [
              "Unlimited Doctors",
              "Video Consultation Integration",
              "Insurance Module",
              "Advanced Analytics",
              "API Integration",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can the system send automatic reminders?",
            "a": "Yes — automated SMS and email reminders are included from the Gold plan onwards."
          },
          {
            "q": "Can patients reschedule their own appointments?",
            "a": "Yes, patients can self-reschedule or cancel through a secure patient portal link sent via email."
          },
          {
            "q": "Does it integrate with existing hospital software?",
            "a": "We can integrate with most HMS (Hospital Management Software) via API."
          }
        ],
        "caseStudies": [
          {
            "title": "Sunshine Dental Clinic, Mumbai",
            "result": "Reduced no-shows by 65% with automated SMS reminders",
            "industry": "Dental Clinic"
          },
          {
            "title": "LifeCare Diagnostics, Bangalore",
            "result": "Managed 200+ daily appointments across 8 labs seamlessly",
            "industry": "Diagnostic Center"
          }
        ]
      },
      {
        "slug": "telemedicine-platform",
        "title": "Telemedicine Platform",
        "tagline": "Consult patients remotely with secure video, chat & prescription tools",
        "overview": "Enable virtual consultations for your patients from anywhere. Our telemedicine platforms include HD video calls, e-prescriptions, secure chat, and payment collection — all in one HIPAA-safe environment.",
        "features": [
          "HD Video Consultations",
          "Secure Patient Chat",
          "E-prescription Generation",
          "Digital Payment Collection",
          "Medical History Access",
          "File/Report Sharing",
          "Multi-device Support",
          "Recording & Session Logs"
        ],
        "benefits": [
          "Serve patients nationwide",
          "Reduce clinic overcrowding",
          "Increase consultation revenue",
          "Convenient for elderly/disabled patients",
          "Attract tech-savvy patients"
        ],
        "process": [
          "Platform Architecture",
          "UI/UX Design",
          "Video Infrastructure Setup",
          "Security Hardening",
          "Payment Integration",
          "E-prescription Module",
          "Testing & Compliance",
          "Launch"
        ],
        "technologies": [
          "WebRTC",
          "Agora.io",
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "AWS",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Basic telemedicine portal",
            "features": [
              "Video Calls (up to 5 doctors)",
              "Patient Registration",
              "Basic E-prescription",
              "Payment Gateway",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹89,999",
            "desc": "Full telemedicine suite",
            "features": [
              "Unlimited Doctors",
              "Secure Chat & File Share",
              "Advanced E-prescription",
              "Medical Records Vault",
              "Analytics Dashboard",
              "5 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Enterprise telehealth platform",
            "features": [
              "White-label Platform",
              "AI Symptom Checker",
              "EHR Integration",
              "Insurance Billing",
              "Dedicated Server",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Is the platform secure and private?",
            "a": "Absolutely. We use end-to-end encrypted video and data storage compliant with healthcare data protection standards."
          },
          {
            "q": "Can doctors generate prescriptions online?",
            "a": "Yes — doctors can generate, sign, and send digital prescriptions to patients during or after the consultation."
          },
          {
            "q": "Does it work on mobile phones?",
            "a": "Yes — fully responsive and available as both a web app and optionally as a mobile app."
          }
        ],
        "caseStudies": [
          {
            "title": "MedConnect India, Hyderabad",
            "result": "Onboarded 50+ doctors and served 500 patients in the first month",
            "industry": "Telemedicine Network"
          }
        ]
      },
      {
        "slug": "patient-management-system",
        "title": "Patient Management System",
        "tagline": "Centralize patient records, history, and clinical workflows",
        "overview": "A complete digital system to manage patient registrations, medical histories, diagnoses, prescriptions, and follow-ups — replacing paper files with an organized, searchable digital database.",
        "features": [
          "Patient Registration & Profiles",
          "Medical History & Diagnosis Records",
          "Prescription Management",
          "Lab Report Uploads",
          "Follow-up Scheduling",
          "Ward/Bed Management",
          "Discharge Summary Generator",
          "Role-based Staff Access"
        ],
        "benefits": [
          "Eliminate paper-based records",
          "Faster patient retrieval",
          "Reduce documentation errors",
          "Secure multi-staff access",
          "NABH compliance support"
        ],
        "process": [
          "Needs Assessment",
          "System Design",
          "Database Architecture",
          "Module Development",
          "Staff Role Configuration",
          "Data Migration",
          "Training",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Django",
          "PostgreSQL",
          "AWS S3",
          "Redis",
          "PDF.js",
          "Docker",
          "Nginx"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Small clinic system",
            "features": [
              "Up to 1,000 Patient Records",
              "Basic Medical History",
              "Prescription Module",
              "Search & Filter",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Hospital-grade PMS",
            "features": [
              "Unlimited Records",
              "Lab Report Management",
              "Ward/Bed Tracking",
              "Multi-staff Roles",
              "Advanced Reports",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise hospital suite",
            "features": [
              "Full EHR System",
              "HL7/FHIR Integration",
              "Billing Module",
              "Insurance Claims",
              "Analytics Dashboard",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can multiple staff access the system?",
            "a": "Yes — role-based access allows doctors, nurses, receptionists, and admins to have appropriate access levels."
          },
          {
            "q": "Can we migrate existing patient data?",
            "a": "Yes, we offer data migration services to transfer your existing records to the new system."
          }
        ],
        "caseStudies": [
          {
            "title": "Green Leaf Hospital, Chennai",
            "result": "Digitized 10,000+ patient records within 2 weeks of deployment",
            "industry": "General Hospital"
          }
        ]
      },
      {
        "slug": "medical-billing-software",
        "title": "Medical Billing Software",
        "tagline": "Streamline billing, payments, and insurance claims effortlessly",
        "overview": "Automate medical billing, generate GST-compliant invoices, track payments, and manage insurance claims — all from one clean dashboard. Reduce billing errors and speed up cash flow.",
        "features": [
          "GST Invoice Generation",
          "Insurance Claim Management",
          "OPD/IPD Billing",
          "Payment Tracking",
          "Outstanding Balance Alerts",
          "Daily/Monthly Reports",
          "Discount & Concession Module",
          "Multi-payment Gateway Support"
        ],
        "benefits": [
          "Reduce billing errors by 80%",
          "Faster payment collection",
          "Automated insurance claims",
          "Real-time financial overview",
          "Audit-ready reports"
        ],
        "process": [
          "Billing Workflow Analysis",
          "System Design",
          "Module Development",
          "Payment Gateway Integration",
          "Insurance API Setup",
          "Testing & Validation",
          "Staff Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MySQL",
          "Razorpay",
          "Stripe",
          "GST API",
          "PDF Generation",
          "Email/SMS APIs"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic billing system",
            "features": [
              "Invoice Generation",
              "Payment Tracking",
              "Basic Reports",
              "OPD Billing",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Full medical billing suite",
            "features": [
              "OPD + IPD Billing",
              "Insurance Claims Module",
              "Outstanding Alerts",
              "Detailed Analytics",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Enterprise billing platform",
            "features": [
              "Multi-branch Billing",
              "Third-party HMS Integration",
              "Custom Reports",
              "Automated Insurance Claims",
              "Dedicated Support",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it support GST invoicing?",
            "a": "Yes — fully GST-compliant invoice generation with GSTIN tracking and tax reports."
          },
          {
            "q": "Can it handle insurance claims?",
            "a": "Yes — the Gold and Platinum plans include an insurance claim module with status tracking."
          }
        ],
        "caseStudies": [
          {
            "title": "Apollo Diagnostics, Jaipur",
            "result": "Reduced billing errors by 85% and improved cash collection by 40%",
            "industry": "Diagnostic Chain"
          }
        ]
      },
      {
        "slug": "healthcare-mobile-app",
        "title": "Healthcare Mobile App",
        "tagline": "Android & iOS apps connecting patients with your hospital",
        "overview": "Give patients a powerful mobile app to book appointments, consult doctors, view reports, and pay bills — all from their smartphone. Increase engagement and loyalty with your branded app.",
        "features": [
          "Appointment Booking",
          "Telemedicine Video Calls",
          "Lab Report Downloads",
          "Medication Reminders",
          "Doctor Profiles & Ratings",
          "Emergency SOS Button",
          "Health Tips Feed",
          "Push Notifications"
        ],
        "benefits": [
          "Increase patient retention",
          "Reduce call center load",
          "24/7 service availability",
          "Branded patient experience",
          "Increase appointment frequency"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Frontend Development",
          "Backend API",
          "Third-party Integrations",
          "QA Testing",
          "App Store Submission",
          "Launch & Support"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Firebase",
          "Node.js",
          "MongoDB",
          "Agora.io",
          "Razorpay",
          "Google Maps"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹59,999",
            "desc": "Basic patient app",
            "features": [
              "Android App",
              "Appointment Booking",
              "Doctor Profiles",
              "Push Notifications",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹99,999",
            "desc": "Full-featured health app",
            "features": [
              "Android + iOS",
              "Video Consultations",
              "Lab Reports",
              "Medication Reminders",
              "Payment Gateway",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,59,999",
            "desc": "Enterprise hospital app",
            "features": [
              "Android + iOS + Web",
              "Full EHR Integration",
              "Emergency SOS",
              "AI Health Tips",
              "Custom Analytics",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Will the app be on Google Play and App Store?",
            "a": "Yes — we handle the full submission process for both Android (Play Store) and iOS (App Store)."
          },
          {
            "q": "How long does approval take?",
            "a": "Android typically takes 2–5 days; iOS takes 1–3 weeks for initial review."
          }
        ],
        "caseStudies": [
          {
            "title": "Fortis HealthConnect, Noida",
            "result": "10,000+ app downloads in first month; 45% increase in repeat appointments",
            "industry": "Hospital Chain"
          }
        ]
      },
      {
        "slug": "seo-for-hospitals",
        "title": "SEO for Hospitals",
        "tagline": "Rank #1 on Google for high-intent healthcare searches",
        "overview": "When patients search for \"best hospital near me\" or specific treatments, we ensure your hospital appears at the top. Our healthcare SEO strategy drives organic traffic and qualified patient leads.",
        "features": [
          "Local SEO & Google Maps Ranking",
          "Medical Keyword Research",
          "On-page Optimization",
          "Technical SEO Audit & Fixes",
          "Healthcare Backlink Building",
          "Google Business Profile Management",
          "Content Writing (Medical Blogs)",
          "Competitor Analysis"
        ],
        "benefits": [
          "Dominate local search results",
          "Attract high-intent patients",
          "Reduce paid ad dependency",
          "Build long-term organic authority",
          "Measurable ROI monthly"
        ],
        "process": [
          "SEO Audit",
          "Keyword Strategy",
          "On-page Optimization",
          "Technical Fixes",
          "Content Plan",
          "Link Building",
          "Monthly Reporting",
          "Ongoing Optimization"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Google Analytics 4",
          "Screaming Frog",
          "BrightLocal",
          "WordPress",
          "Schema Markup"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Local clinic visibility",
            "features": [
              "15 Keywords",
              "On-page Optimization",
              "GMB Management",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Hospital authority building",
            "features": [
              "35 Keywords",
              "Technical SEO",
              "Medical Blog Writing (4/mo)",
              "High-DA Backlinks (8/mo)",
              "Competitor Tracking",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Dominant market leader SEO",
            "features": [
              "60+ Keywords",
              "Daily Monitoring",
              "Medical Blogs (8/mo)",
              "Backlinks (20/mo)",
              "Weekly Reports",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long before we see results?",
            "a": "SEO typically shows meaningful results within 3–6 months. Local GMB improvements can happen within weeks."
          },
          {
            "q": "Is medical content written by medical professionals?",
            "a": "Our content team works with medical reviewers to ensure accuracy in all health-related blog content."
          }
        ],
        "caseStudies": [
          {
            "title": "CureWell Hospitals, Ahmedabad",
            "result": "Ranked #1 for 22 local healthcare keywords; 180% increase in organic traffic",
            "industry": "Multi-specialty Hospital"
          }
        ]
      },
      {
        "slug": "digital-marketing-for-clinics",
        "title": "Digital Marketing for Clinics",
        "tagline": "Full-funnel digital campaigns to grow your patient base",
        "overview": "Attract, engage, and retain patients with targeted digital marketing — Facebook/Instagram ads, Google Ads, WhatsApp campaigns, and reputation management — all handled by our healthcare marketing team.",
        "features": [
          "Facebook & Instagram Ad Campaigns",
          "Google Search Ads (PPC)",
          "WhatsApp Broadcast Campaigns",
          "Review & Reputation Management",
          "Patient Retargeting Ads",
          "Landing Page Design",
          "Lead Tracking Dashboard",
          "Monthly Performance Reports"
        ],
        "benefits": [
          "Consistent patient flow",
          "Low cost per patient lead",
          "Brand authority online",
          "Automated follow-up campaigns",
          "Measurable ad ROI"
        ],
        "process": [
          "Competitor & Audience Analysis",
          "Campaign Strategy",
          "Creative Design",
          "Campaign Setup & Launch",
          "A/B Testing",
          "Optimization",
          "Reporting",
          "Scaling"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Google Ads",
          "WhatsApp Business API",
          "Canva Pro",
          "Hotjar",
          "Google Analytics 4",
          "HubSpot",
          "Mailchimp"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999/mo",
            "desc": "Clinic brand awareness",
            "features": [
              "Facebook + Instagram Ads",
              "12 Creative Posts/month",
              "Basic Lead Tracking",
              "Monthly Report",
              "Cancel anytime"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999/mo",
            "desc": "Growth-focused campaign",
            "features": [
              "FB + Instagram + Google Ads",
              "20 Posts + 4 Video Reels",
              "WhatsApp Campaign",
              "Reputation Management",
              "Bi-weekly Reports",
              "Cancel anytime"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999/mo",
            "desc": "Full digital domination",
            "features": [
              "All Platforms",
              "Daily Posts",
              "Google + Meta + YouTube Ads",
              "Influencer Collaboration",
              "Weekly Strategy Calls",
              "Cancel anytime"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you handle ad creatives?",
            "a": "Yes — our design team creates all ad visuals, videos, and copy for your campaigns."
          },
          {
            "q": "What is the minimum ad budget required?",
            "a": "We recommend a minimum ₹5,000–₹10,000/month ad spend on top of our management fee for meaningful results."
          }
        ],
        "caseStudies": [
          {
            "title": "PrimeCare Clinics, Pune",
            "result": "350+ new patient inquiries in 60 days from Facebook & Google campaigns",
            "industry": "Clinic Chain"
          }
        ]
      }
    ]
  },
  {
    "id": "education",
    "slug": "education",
    "name": "Schools & Colleges",
    "tagline": "EdTech solutions for schools, colleges, and coaching centers",
    "color": "#6366f1",
    "bgColor": "#eef2ff",
    "description": "Empower educational institutions with modern websites, student management systems, learning portals, and marketing tools that streamline administration and enhance learning outcomes.",
    "services": [
      {
        "slug": "school-website-development",
        "title": "School Website Development",
        "tagline": "Modern, informative websites for schools and colleges",
        "overview": "Create a powerful digital presence for your educational institution. Showcase courses, faculty, events, achievements, and allow online admission enquiries with a professionally designed school website.",
        "features": [
          "Course & Program Listings",
          "Faculty Profiles",
          "Online Admission Enquiry",
          "Events Calendar",
          "Gallery & Virtual Tour",
          "Notice Board / Announcements",
          "Alumni Section",
          "Transport & Hostel Info"
        ],
        "benefits": [
          "Attract more students online",
          "Reduce manual enquiry handling",
          "Build institutional credibility",
          "Showcase achievements",
          "Easy content management for staff"
        ],
        "process": [
          "Requirements Gathering",
          "Sitemap Planning",
          "Design Mockups",
          "Development",
          "Content Upload",
          "Testing",
          "Launch",
          "Training & Support"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "MySQL",
          "Cloudinary",
          "Google Maps",
          "EmailJS",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Small school/coaching",
            "features": [
              "8 Pages",
              "Course Listings",
              "Enquiry Form",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "School/college portal",
            "features": [
              "20 Pages",
              "Faculty Profiles",
              "Events Calendar",
              "Gallery",
              "Announcement Board",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Full institution portal",
            "features": [
              "Unlimited Pages",
              "Alumni Network",
              "Virtual Tour",
              "CMS Dashboard",
              "Multi-language",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can teachers update content themselves?",
            "a": "Yes — we provide a simple CMS (Content Management System) so teachers and admin can update notices, events, and content without technical knowledge."
          },
          {
            "q": "Can we show a virtual campus tour?",
            "a": "Yes — the Platinum plan includes a virtual tour module with 360° image support."
          }
        ],
        "caseStudies": [
          {
            "title": "Bright Minds Academy, Nagpur",
            "result": "5x increase in admission enquiries within 3 months of new website launch",
            "industry": "Private School"
          }
        ]
      },
      {
        "slug": "student-management-system",
        "title": "Student Management System",
        "tagline": "Complete digital admin for student records and performance tracking",
        "overview": "Manage student registrations, academic records, attendance, results, and communications — all in one central system. Replace manual paperwork with an efficient, searchable digital platform.",
        "features": [
          "Student Enrollment & Profiles",
          "Class & Section Management",
          "Academic Performance Tracking",
          "Parent Communication Portal",
          "Document Management",
          "ID Card Generation",
          "Transfer Certificate Management",
          "Report Card Generation"
        ],
        "benefits": [
          "Eliminate manual registers",
          "Faster student data access",
          "Transparent parent communication",
          "Generate reports in seconds",
          "Comply with government requirements"
        ],
        "process": [
          "Workflow Analysis",
          "System Design",
          "Module Development",
          "Admin Role Setup",
          "Data Import",
          "Testing",
          "Staff Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Django",
          "PostgreSQL",
          "Redis",
          "PDF Generation",
          "AWS S3",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Small school (up to 500 students)",
            "features": [
              "Student Profiles",
              "Class Management",
              "Attendance Module",
              "Basic Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Medium school (up to 2000 students)",
            "features": [
              "Full Student Management",
              "Parent Portal",
              "Result Management",
              "ID Card Generator",
              "Detailed Analytics",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹74,999",
            "desc": "Large institution suite",
            "features": [
              "Unlimited Students",
              "Multi-campus Support",
              "Transfer Certificates",
              "Govt. Report Formats",
              "API Integration",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can parents view their child's performance online?",
            "a": "Yes — the Gold and Platinum plans include a secure parent login portal for real-time progress tracking."
          },
          {
            "q": "Can we import existing student data?",
            "a": "Yes — we support bulk data import from Excel/CSV files."
          }
        ],
        "caseStudies": [
          {
            "title": "Heritage International School, Surat",
            "result": "Digitized 3,000+ student records and eliminated paper registers in 3 weeks",
            "industry": "CBSE School"
          }
        ]
      },
      {
        "slug": "online-examination-portal",
        "title": "Online Examination Portal",
        "tagline": "Conduct secure, automated exams with instant result generation",
        "overview": "Replace physical exam papers with a powerful online examination system. Create MCQ and descriptive tests, set time limits, prevent cheating, and auto-generate results — saving enormous time and costs.",
        "features": [
          "MCQ & Descriptive Question Banks",
          "Timed Exam Sessions",
          "Anti-Cheating (Tab Switch Detection)",
          "Auto Result Calculation",
          "Randomized Question Order",
          "Instant Score Reports",
          "Multiple Attempt Configurations",
          "Admin Dashboard"
        ],
        "benefits": [
          "Reduce exam paper printing costs",
          "Instant result declaration",
          "Larger exam capacity",
          "Remote exam support",
          "Detailed performance analytics"
        ],
        "process": [
          "Exam Workflow Design",
          "Question Bank Architecture",
          "Portal Development",
          "Anti-cheat Implementation",
          "Scoring Engine",
          "Testing & Load Testing",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "WebSockets",
          "Redis",
          "JWT Auth",
          "AWS EC2",
          "Screen Monitoring"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Small batch exams",
            "features": [
              "Up to 200 Students",
              "MCQ Exams",
              "Auto Scoring",
              "Basic Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹44,999",
            "desc": "School/college platform",
            "features": [
              "Up to 2000 Students",
              "MCQ + Descriptive",
              "Anti-cheat Controls",
              "Detailed Analytics",
              "Question Bank CMS",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹84,999",
            "desc": "Institution-wide platform",
            "features": [
              "Unlimited Students",
              "All Exam Types",
              "Live Proctoring",
              "Custom Reports",
              "Multi-tenant Support",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we prevent cheating in online exams?",
            "a": "Yes — we implement tab-switch detection, random question ordering, and can include webcam proctoring for enhanced security."
          },
          {
            "q": "How many students can take the exam simultaneously?",
            "a": "Depending on the plan, our systems support from 200 to unlimited concurrent exam sessions."
          }
        ],
        "caseStudies": [
          {
            "title": "Apex Coaching Institute, Kota",
            "result": "Conducted online exams for 8,000+ students simultaneously with zero technical issues",
            "industry": "Coaching Institute"
          }
        ]
      },
      {
        "slug": "learning-management-system",
        "title": "Learning Management System (LMS)",
        "tagline": "Build your own online learning platform with courses and certifications",
        "overview": "Create and sell online courses, assign homework, track student progress, and issue certificates — with your own branded LMS. Perfect for schools, coaching centers, and ed-tech businesses.",
        "features": [
          "Course Creation with Video/PDF",
          "Live Class Integration (Zoom/Meet)",
          "Student Progress Tracking",
          "Quiz & Assignment Module",
          "Certificate Generation",
          "Discussion Forums",
          "Mobile-responsive Interface",
          "Stripe/Razorpay Course Sales"
        ],
        "benefits": [
          "Monetize knowledge online",
          "Reach students nationally",
          "Track individual learning progress",
          "Scale teaching beyond classroom",
          "Reduce operational costs"
        ],
        "process": [
          "LMS Architecture Planning",
          "Course Structure Design",
          "Platform Development",
          "Video CDN Setup",
          "Payment Integration",
          "Testing",
          "Content Migration",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "AWS S3/CloudFront",
          "Vimeo API",
          "Zoom SDK",
          "Stripe",
          "PDF Certificate Library"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹34,999",
            "desc": "Basic LMS for 1 teacher",
            "features": [
              "5 Courses",
              "Video Lessons",
              "Student Tracking",
              "Basic Quizzes",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹64,999",
            "desc": "Full coaching platform",
            "features": [
              "Unlimited Courses",
              "Live Class Integration",
              "Assignments",
              "Certificates",
              "Course Sales",
              "5 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,09,999",
            "desc": "Enterprise ed-tech platform",
            "features": [
              "Multi-instructor",
              "Gamification",
              "Mobile App",
              "API Integrations",
              "White-label",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can students access content offline?",
            "a": "The Platinum plan supports offline content downloads for mobile app users."
          },
          {
            "q": "Can we sell courses through the LMS?",
            "a": "Yes — Gold and Platinum plans include full e-commerce with course purchases, discounts, and coupons."
          }
        ],
        "caseStudies": [
          {
            "title": "LearnXcel, Hyderabad",
            "result": "Enrolled 2,000+ students in online courses within 6 weeks of LMS launch",
            "industry": "Online Coaching"
          }
        ]
      },
      {
        "slug": "attendance-management",
        "title": "Attendance Management System",
        "tagline": "Digital attendance with biometric, QR code & parent alerts",
        "overview": "Track student and staff attendance digitally with QR code scanning, biometric integration, and real-time parent SMS alerts. Eliminate manual attendance registers with instant reporting.",
        "features": [
          "QR Code Attendance",
          "Biometric Integration",
          "Real-time Parent SMS Alerts",
          "Class-wise Attendance Dashboards",
          "Late & Absent Tracking",
          "Monthly Attendance Reports",
          "Holiday & Leave Management",
          "Staff Attendance Module"
        ],
        "benefits": [
          "Instant parent notification on absence",
          "Eliminate proxy attendance",
          "Save 1+ hours daily on attendance work",
          "Automated monthly attendance reports",
          "Compliance with school norms"
        ],
        "process": [
          "Requirement Analysis",
          "System Design",
          "QR/Biometric Integration",
          "Notification Engine",
          "Reporting Module",
          "Testing",
          "Hardware Setup Support",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "QR Code Libraries",
          "Twilio SMS",
          "Biometric SDK",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic digital attendance",
            "features": [
              "Manual + QR Attendance",
              "Class Dashboards",
              "Basic Reports",
              "Email Alerts",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Smart attendance with alerts",
            "features": [
              "QR + Biometric Support",
              "SMS Parent Alerts",
              "Monthly Reports",
              "Leave Management",
              "Staff Module",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹49,999",
            "desc": "Enterprise attendance suite",
            "features": [
              "Multi-campus",
              "AI Anomaly Detection",
              "Custom Reports",
              "Integration with SMS",
              "Full Analytics",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it work with existing biometric devices?",
            "a": "Yes — we support most standard biometric devices and can integrate via SDK or API."
          },
          {
            "q": "Will parents get SMS alerts?",
            "a": "Yes — the Gold plan includes instant SMS alerts to parents when a student is marked absent."
          }
        ],
        "caseStudies": [
          {
            "title": "Wisdom Public School, Lucknow",
            "result": "Reduced attendance-related complaints by 90% with real-time parent SMS alerts",
            "industry": "CBSE School"
          }
        ]
      },
      {
        "slug": "fee-management-system",
        "title": "Fee Management System",
        "tagline": "Streamline tuition fee collection, reminders, and receipts",
        "overview": "Automate fee collection with online payment options, automatic reminders for due fees, digital receipts, and detailed financial reports — eliminating manual fee collection chaos.",
        "features": [
          "Online Fee Payment (UPI/Card)",
          "Fee Structure Configuration",
          "Automatic Due Date Reminders",
          "Digital Receipt Generation",
          "Installment Plan Support",
          "Defaulter Reports",
          "Scholarship & Concession Module",
          "Financial Dashboard"
        ],
        "benefits": [
          "Reduce fee collection effort by 70%",
          "Decrease late payment rate",
          "Transparent financial tracking",
          "Easy audit trails",
          "Parent-friendly online payments"
        ],
        "process": [
          "Fee Structure Analysis",
          "System Configuration",
          "Payment Gateway Integration",
          "Notification Engine",
          "Receipt Module",
          "Testing",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Stripe",
          "SendGrid",
          "Twilio",
          "PDF Generation"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic fee collection",
            "features": [
              "Online Payment",
              "Digital Receipts",
              "Basic Reports",
              "Due Reminders",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Complete fee management",
            "features": [
              "Installment Plans",
              "Scholarship Module",
              "Defaulter Reports",
              "SMS Reminders",
              "Financial Dashboard",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Multi-campus fee platform",
            "features": [
              "Multi-branch Fees",
              "ERP Integration",
              "Custom Report Builder",
              "WhatsApp Reminders",
              "Audit Logs",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can fees be paid in installments?",
            "a": "Yes — the Gold plan includes a configurable installment plan with automatic reminders for each installment due date."
          },
          {
            "q": "Will parents get a receipt automatically?",
            "a": "Yes — digital PDF receipts are automatically generated and sent to parents upon payment."
          }
        ],
        "caseStudies": [
          {
            "title": "Bloom English Medium School, Bhopal",
            "result": "95% of fees collected online within 30 days; zero manual follow-up needed",
            "industry": "ICSE School"
          }
        ]
      },
      {
        "slug": "school-mobile-app",
        "title": "School Mobile App",
        "tagline": "Connect parents, students, and teachers on a branded app",
        "overview": "A dedicated mobile app for your school keeps everyone connected — parents get live updates, teachers share homework, students access study material, and announcements reach everyone instantly.",
        "features": [
          "Homework & Assignment Sharing",
          "Push Notifications for Announcements",
          "Attendance Status for Parents",
          "Online Fee Payment",
          "Timetable Access",
          "Result Viewing",
          "Gallery & Events",
          "School Bus Tracking (Optional)"
        ],
        "benefits": [
          "Stronger parent engagement",
          "Instant school-home communication",
          "Reduce circular paper costs",
          "Branded school identity",
          "One app for everything"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Mobile Development",
          "Backend APIs",
          "Push Notification Setup",
          "QA Testing",
          "App Store Submission",
          "Launch & Training"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Firebase",
          "Node.js",
          "MongoDB",
          "FCM Push Notifications",
          "Razorpay",
          "Google Maps"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹39,999",
            "desc": "Basic school app",
            "features": [
              "Android App",
              "Notifications",
              "Homework Module",
              "Fee Payment",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹74,999",
            "desc": "Full school communication app",
            "features": [
              "Android + iOS",
              "Attendance Viewing",
              "Results Module",
              "Gallery",
              "Timetable",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,24,999",
            "desc": "Premium school super-app",
            "features": [
              "Android + iOS + Web",
              "Bus Tracking",
              "Live Classes",
              "Full CMS",
              "Custom Design",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Will parents receive instant notifications?",
            "a": "Yes — real-time push notifications are sent for every announcement, homework, and fee reminder."
          },
          {
            "q": "Can the app include live classes?",
            "a": "Yes — the Platinum plan includes live class streaming integration."
          }
        ],
        "caseStudies": [
          {
            "title": "Scholars International, Indore",
            "result": "95% parent app adoption in first month; zero paper circulars required",
            "industry": "CBSE School"
          }
        ]
      },
      {
        "slug": "education-marketing-services",
        "title": "Education Marketing Services",
        "tagline": "Fill your seats with targeted digital admission campaigns",
        "overview": "Get more admissions with data-driven digital marketing. We run Facebook, Instagram, and Google ads targeting parents in your area, manage your social media, and build your school's online reputation.",
        "features": [
          "Facebook & Instagram Ads",
          "Google Ads for Admissions",
          "Social Media Management",
          "Google Business Profile",
          "Video Reel Production",
          "Review Management",
          "Landing Page Design",
          "Lead Tracking Dashboard"
        ],
        "benefits": [
          "Fill seats faster every year",
          "Target the right parents geographically",
          "Build school brand image",
          "Track every admission lead",
          "ROI-measurable marketing"
        ],
        "process": [
          "Audience & Market Research",
          "Campaign Strategy",
          "Creative Production",
          "Campaign Launch",
          "A/B Testing",
          "Optimization",
          "Reporting",
          "Seasonal Campaigns"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Google Ads",
          "Canva Pro",
          "Video Editing",
          "CRM",
          "Google Analytics 4",
          "WhatsApp API",
          "Mailchimp"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Brand awareness",
            "features": [
              "Social Media Management",
              "12 Posts/month",
              "GMB Optimization",
              "Basic Ad Campaign",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Active admission leads",
            "features": [
              "FB + Google Ads",
              "20 Posts + 4 Reels",
              "Lead Tracking",
              "WhatsApp Campaign",
              "Bi-weekly Reporting"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Full admission funnel",
            "features": [
              "All Platforms",
              "Daily Posts",
              "YouTube Ads",
              "Video Production",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "When is the best time to run admission campaigns?",
            "a": "November to March is peak admission season. We recommend starting campaigns 2–3 months before your admission window opens."
          }
        ],
        "caseStudies": [
          {
            "title": "Sunrise Public School, Patna",
            "result": "400+ admission enquiries in 45 days; 80% seats filled before March",
            "industry": "CBSE School"
          }
        ]
      }
    ]
  },
  {
    "id": "real-estate",
    "slug": "real-estate",
    "name": "Real Estate & Builders",
    "tagline": "Property portals, CRMs, and digital solutions for builders",
    "color": "#f97316",
    "bgColor": "#fff7ed",
    "description": "From property listing portals to builder CRMs and virtual tours, we build digital tools that help real estate professionals showcase properties, capture leads, and close deals faster.",
    "services": [
      {
        "slug": "property-listing-portal",
        "title": "Property Listing Portal",
        "tagline": "Your own real estate marketplace to list and sell properties",
        "overview": "Build a feature-rich property portal where builders can list projects, buyers can search and filter by location, type, and budget, and leads flow directly to your sales team.",
        "features": [
          "Property Search with Filters",
          "Map Integration",
          "Photo & Video Gallery",
          "EMI Calculator",
          "Lead Capture Forms",
          "Admin Property Management",
          "Featured Listings",
          "Comparison Tool"
        ],
        "benefits": [
          "Generate direct buyer leads",
          "Showcase entire portfolio online",
          "Reduce broker dependency",
          "Professional digital presence",
          "Scale to thousands of listings"
        ],
        "process": [
          "Portal Architecture",
          "Design Mockups",
          "Frontend Development",
          "Backend Development",
          "Map & Search Integration",
          "Lead System",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "Cloudinary",
          "Elasticsearch",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹29,999",
            "desc": "Single builder portal",
            "features": [
              "Up to 50 Properties",
              "Search & Filter",
              "Contact Forms",
              "Map View",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹59,999",
            "desc": "Full property portal",
            "features": [
              "Unlimited Properties",
              "EMI Calculator",
              "Lead Management",
              "Comparison Tool",
              "Admin CMS",
              "5 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,09,999",
            "desc": "Multi-builder marketplace",
            "features": [
              "Multi-vendor Listings",
              "Advanced Search Engine",
              "Agent Dashboards",
              "Premium Analytics",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we show 3D virtual tours?",
            "a": "Yes — the Platinum plan supports 360° virtual property tours and 3D walkthroughs."
          },
          {
            "q": "Can multiple builders list on the same portal?",
            "a": "Yes — the Platinum plan supports a multi-vendor marketplace with individual builder dashboards."
          }
        ],
        "caseStudies": [
          {
            "title": "GreenCity Builders, Pune",
            "result": "250+ qualified buyer leads in first 2 months post-launch",
            "industry": "Real Estate Developer"
          }
        ]
      },
      {
        "slug": "crm-for-builders",
        "title": "CRM for Builders",
        "tagline": "Manage leads, follow-ups, and sales pipeline for your projects",
        "overview": "Stop losing leads in WhatsApp and Excel. A dedicated real estate CRM tracks every inquiry, assigns leads to agents, automates follow-ups, and gives you a live view of your sales pipeline.",
        "features": [
          "Lead Capture from All Channels",
          "Agent Assignment & Management",
          "Follow-up Scheduling",
          "Sales Pipeline Kanban View",
          "WhatsApp & Email Integration",
          "Call Logging",
          "Booking & Agreement Management",
          "Revenue Forecasting"
        ],
        "benefits": [
          "Never lose a lead again",
          "Reduce lead response time",
          "Increase conversion rates",
          "Full sales team accountability",
          "Real-time pipeline visibility"
        ],
        "process": [
          "Sales Process Analysis",
          "CRM Architecture",
          "Module Development",
          "Integration Setup",
          "Data Migration",
          "Agent Training",
          "Testing",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "WhatsApp API",
          "Twilio",
          "SendGrid",
          "Zapier",
          "Google Sheets API"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic lead management",
            "features": [
              "Up to 5 Agents",
              "Lead Capture",
              "Follow-up Reminders",
              "Basic Pipeline",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full sales CRM",
            "features": [
              "Up to 25 Agents",
              "WhatsApp Integration",
              "Call Logging",
              "Pipeline Dashboard",
              "Revenue Reports",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise builder CRM",
            "features": [
              "Unlimited Agents",
              "Multi-project Support",
              "Booking Management",
              "Agreement Generation",
              "Full Analytics",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it capture leads from our website and Facebook ads?",
            "a": "Yes — we integrate lead sources from website forms, Facebook Lead Ads, Google Ads, and more into the CRM automatically."
          }
        ],
        "caseStudies": [
          {
            "title": "SkyHigh Properties, Mumbai",
            "result": "Lead conversion rate improved by 3x after switching to Bubbles CRM",
            "industry": "Real Estate Builder"
          }
        ]
      },
      {
        "slug": "virtual-property-tours",
        "title": "Virtual Property Tours",
        "tagline": "360° immersive property experiences that sell homes remotely",
        "overview": "Let buyers explore your properties from anywhere with interactive 360° virtual tours, 3D walkthroughs, and AR-powered visualizations — reducing site visit requirements and accelerating decisions.",
        "features": [
          "360° Photography Integration",
          "3D Walkthrough Development",
          "AR Furniture Placement (Optional)",
          "Hotspot Annotations",
          "Mobile & VR Compatibility",
          "Shareable Tour Links",
          "Embedded on Website",
          "Analytics (Views, Time Spent)"
        ],
        "benefits": [
          "Attract NRI and outstation buyers",
          "Reduce unqualified site visits",
          "Faster decision-making by buyers",
          "Competitive market differentiator",
          "24/7 property showcasing"
        ],
        "process": [
          "360° Photography Coordination",
          "Image Processing",
          "Tour Development",
          "Hotspot Configuration",
          "Website Embedding",
          "Testing",
          "Launch",
          "Sharing Setup"
        ],
        "technologies": [
          "Matterport",
          "Pannellum",
          "Three.js",
          "WebGL",
          "React",
          "AWS CloudFront",
          "Mobile VR SDK",
          "Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Single property tour",
            "features": [
              "360° Photos (1 Unit)",
              "Web Embeddable Tour",
              "Shareable Link",
              "Mobile Compatible",
              "3 Days Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹34,999",
            "desc": "Full project tour suite",
            "features": [
              "Up to 5 Unit Types",
              "3D Walkthrough",
              "Hotspot Annotations",
              "Analytics Dashboard",
              "AR Preview",
              "1 Week Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹74,999",
            "desc": "Full township virtual experience",
            "features": [
              "Unlimited Units",
              "Custom 3D Model Integration",
              "VR Headset Compatible",
              "Full Analytics",
              "Website Integration",
              "2 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you provide photography services?",
            "a": "We coordinate with partner photographers for 360° capture. Alternatively, we can process photos you provide."
          }
        ],
        "caseStudies": [
          {
            "title": "Prestige Villas, Bangalore",
            "result": "60% of NRI buyers made decisions based solely on virtual tours without visiting",
            "industry": "Luxury Real Estate"
          }
        ]
      },
      {
        "slug": "lead-management-system",
        "title": "Lead Management System",
        "tagline": "Capture, track, and convert every real estate inquiry",
        "overview": "A focused lead management platform that aggregates inquiries from all channels — website, social media, portals, calls — and helps your team prioritize, follow up, and convert faster.",
        "features": [
          "Multi-channel Lead Aggregation",
          "Lead Scoring & Priority Tags",
          "Auto-assignment to Agents",
          "Follow-up Calendar",
          "SMS/Email Automation",
          "Lead Source Analytics",
          "Duplicate Detection",
          "Daily Agent Report"
        ],
        "benefits": [
          "Zero leads slip through cracks",
          "Faster response to hot leads",
          "Measure best-performing lead sources",
          "Accountability for every agent",
          "Scale without complexity"
        ],
        "process": [
          "Lead Funnel Mapping",
          "System Architecture",
          "Channel Integrations",
          "Automation Setup",
          "Agent Onboarding",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Twilio",
          "Facebook Ads API",
          "Google Ads API",
          "Zapier",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic lead tracker",
            "features": [
              "Single Channel",
              "Lead List",
              "Follow-up Reminders",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Multi-channel CRM",
            "features": [
              "All Channel Aggregation",
              "Lead Scoring",
              "Auto SMS/Email",
              "Analytics Dashboard",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Full sales intelligence",
            "features": [
              "AI Lead Scoring",
              "Predictive Analytics",
              "Custom Workflows",
              "API Ecosystem",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it work with 99acres and MagicBricks leads?",
            "a": "Yes — we can set up integrations with major portals to automatically import leads into the system."
          }
        ],
        "caseStudies": [
          {
            "title": "RealVista Group, Hyderabad",
            "result": "Lead response time reduced from 4 hours to 15 minutes; 2x conversion improvement",
            "industry": "Real Estate Agency"
          }
        ]
      },
      {
        "slug": "property-booking-platform",
        "title": "Property Booking Platform",
        "tagline": "Online booking, token, and unit reservation management",
        "overview": "Allow buyers to reserve units online with a token payment, track booking status, generate booking forms, and manage unit inventory — eliminating manual booking coordination.",
        "features": [
          "Online Unit Reservation",
          "Token Payment Gateway",
          "Booking Form Generation",
          "Unit Inventory Status (Available/Booked/Hold)",
          "Booking Confirmation PDF",
          "Payment Schedule Tracker",
          "Cancellation Management",
          "Admin Booking Dashboard"
        ],
        "benefits": [
          "Book units 24/7 without agent",
          "Reduce booking paperwork",
          "Real-time unit availability",
          "Transparent payment tracking",
          "Professional buyer experience"
        ],
        "process": [
          "Booking Workflow Design",
          "Inventory Architecture",
          "Platform Development",
          "Payment Gateway Setup",
          "PDF Generation",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "PDF Generation",
          "AWS S3",
          "SendGrid",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic booking system",
            "features": [
              "Online Reservations",
              "Token Payment",
              "Booking PDFs",
              "Basic Inventory",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full booking platform",
            "features": [
              "Unit Inventory Management",
              "Payment Schedule",
              "Cancellation Module",
              "Booking Dashboard",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹84,999",
            "desc": "Enterprise booking suite",
            "features": [
              "Multi-project Inventory",
              "Agreement Generation",
              "Loan Assistance Integration",
              "Full Analytics",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can buyers pay the token amount online?",
            "a": "Yes — secure payment gateway integration allows buyers to pay token amounts with UPI, debit/credit cards."
          }
        ],
        "caseStudies": [
          {
            "title": "Lotus Heights, Noida",
            "result": "Sold 80% of units online within 10 days of launch event",
            "industry": "Residential Developer"
          }
        ]
      },
      {
        "slug": "real-estate-mobile-app",
        "title": "Real Estate Mobile App",
        "tagline": "Property search, booking, and tracking app for buyers",
        "overview": "Give your buyers a branded mobile app to browse projects, view floor plans, take virtual tours, calculate EMI, and book units — on Android and iOS.",
        "features": [
          "Property Search & Filter",
          "Interactive Floor Plans",
          "360° Virtual Tour",
          "EMI Calculator",
          "Online Booking",
          "Push Notifications for New Projects",
          "Saved Favorites",
          "Agent Chat"
        ],
        "benefits": [
          "Engage buyers on mobile",
          "Show projects with rich media",
          "Push new projects to existing users",
          "Branded buyer experience",
          "Generate repeat inquiries"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Frontend Development",
          "Backend APIs",
          "Virtual Tour Integration",
          "QA Testing",
          "App Store Submission",
          "Marketing"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Node.js",
          "MongoDB",
          "Firebase",
          "Razorpay",
          "Matterport",
          "Google Maps"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹54,999",
            "desc": "Basic property app",
            "features": [
              "Android App",
              "Property Search",
              "Contact Forms",
              "EMI Calculator",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹94,999",
            "desc": "Full real estate app",
            "features": [
              "Android + iOS",
              "Virtual Tours",
              "Online Booking",
              "Push Notifications",
              "Agent Chat",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,54,999",
            "desc": "Premium builder app",
            "features": [
              "All Features",
              "AR Property View",
              "Full CRM Integration",
              "Analytics Suite",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can the app show 3D walkthroughs?",
            "a": "Yes — virtual tour integration is included in the Gold and Platinum plans."
          }
        ],
        "caseStudies": [
          {
            "title": "DreamSpace Realty, Chennai",
            "result": "App downloaded 5,000+ times in first month; 30% bookings came through app",
            "industry": "Real Estate Developer"
          }
        ]
      },
      {
        "slug": "seo-for-real-estate",
        "title": "SEO for Real Estate",
        "tagline": "Rank for high-intent property search keywords in your city",
        "overview": "When buyers search \"flats in [your city]\" or \"builder near me,\" your website should be first. Our real estate SEO drives qualified organic traffic that converts to leads.",
        "features": [
          "Local Real Estate SEO",
          "Location Page Optimization",
          "Property Schema Markup",
          "Google Maps Ranking",
          "Area-based Keyword Pages",
          "Backlink Building",
          "Blog Content (Property Guides)",
          "Competitor Analysis"
        ],
        "benefits": [
          "Free organic buyer traffic",
          "Long-term search dominance",
          "Outrank portals like 99acres",
          "Build local market authority",
          "Reduce paid lead cost"
        ],
        "process": [
          "SEO Audit",
          "Keyword Mapping",
          "Technical Fixes",
          "Content Strategy",
          "On-page Optimization",
          "Link Building",
          "Monthly Reports",
          "Ongoing Refinement"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
          "Yoast SEO",
          "Google Analytics 4",
          "BrightLocal",
          "Schema.org"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999/mo",
            "desc": "Local area SEO",
            "features": [
              "20 Keywords",
              "On-page Optimization",
              "GMB Management",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999/mo",
            "desc": "Multi-location SEO",
            "features": [
              "50 Keywords",
              "Location Pages",
              "Property Blogs (4/mo)",
              "Backlinks (10/mo)",
              "Technical SEO",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999/mo",
            "desc": "Market dominance SEO",
            "features": [
              "100+ Keywords",
              "8 Blogs/mo",
              "Backlinks (25/mo)",
              "Schema Markup",
              "Weekly Reports",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we rank above 99acres and MagicBricks?",
            "a": "For specific local and project-based searches, yes — especially with location pages and project-specific content."
          }
        ],
        "caseStudies": [
          {
            "title": "Skyline Infra, Pune",
            "result": "Ranked #1–3 for 35 real estate keywords in 4 months; 220% increase in organic leads",
            "industry": "Real Estate Developer"
          }
        ]
      },
      {
        "slug": "digital-marketing-services",
        "title": "Digital Marketing for Real Estate",
        "tagline": "High-ROI ad campaigns to generate qualified property buyer leads",
        "overview": "Run targeted Facebook, Instagram, and Google campaigns to reach buyers actively searching for properties in your area — with lead tracking, retargeting, and regular creative campaigns.",
        "features": [
          "Facebook & Instagram Lead Ads",
          "Google Search & Display Ads",
          "Video Ad Production",
          "Retargeting Campaigns",
          "Landing Page Design",
          "WhatsApp Lead Campaigns",
          "Lead CRM Integration",
          "ROI Reporting Dashboard"
        ],
        "benefits": [
          "Consistent qualified leads",
          "Hyper-targeted local audiences",
          "Measurable cost per lead",
          "Rapid project launches",
          "Warm buyer pipeline always full"
        ],
        "process": [
          "Audience Research",
          "Campaign Strategy",
          "Creative Design",
          "Campaign Launch",
          "A/B Testing",
          "Lead Optimization",
          "Weekly Reports",
          "Scaling"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Google Ads",
          "Canva Pro",
          "Video Production Tools",
          "CRM Integration",
          "Google Analytics 4",
          "WhatsApp Business API",
          "Hotjar"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999/mo",
            "desc": "Brand awareness ads",
            "features": [
              "FB + Instagram Ads",
              "Landing Page",
              "Basic Lead Tracking",
              "12 Creatives/month",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999/mo",
            "desc": "Active lead generation",
            "features": [
              "FB + Instagram + Google",
              "20 Creatives + 4 Reels",
              "Retargeting",
              "CRM Integration",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999/mo",
            "desc": "Full-funnel campaign",
            "features": [
              "All Channels",
              "Video Production",
              "YouTube Ads",
              "WhatsApp Campaign",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How many leads can we expect per month?",
            "a": "Depending on budget and area, our clients typically see 50–300 qualified leads per month. We optimize continuously for lower cost per lead."
          }
        ],
        "caseStudies": [
          {
            "title": "Horizon Homes, Gurugram",
            "result": "180 qualified leads in 30 days for a new residential project launch",
            "industry": "Real Estate Developer"
          }
        ]
      }
    ]
  },
  {
    "id": "ecommerce",
    "slug": "ecommerce",
    "name": "E-commerce Stores",
    "tagline": "Complete online store solutions from catalog to checkout",
    "color": "#ec4899",
    "bgColor": "#fdf2f8",
    "description": "Launch and scale your e-commerce business with powerful online stores, mobile apps, payment integrations, inventory systems, and growth marketing — all built for Indian markets.",
    "services": [
      {
        "slug": "ecommerce-website-development",
        "title": "E-commerce Website Development",
        "tagline": "Build a powerful online store to sell products nationwide",
        "overview": "Launch a fully-featured e-commerce store with product catalog, secure checkout, payment gateway, inventory management, and admin dashboard — optimized for Indian buyers.",
        "features": [
          "Product Catalog Management",
          "Secure Checkout",
          "Multiple Payment Gateways",
          "Order Management",
          "Inventory Tracking",
          "Customer Accounts",
          "Discount & Coupon System",
          "GST Invoice Generation"
        ],
        "benefits": [
          "Sell 24/7 without a physical store",
          "Reach customers nationwide",
          "Automated order management",
          "Reduce operational overhead",
          "Build loyal customer base"
        ],
        "process": [
          "Store Architecture",
          "UI/UX Design",
          "Product Catalog Setup",
          "Payment Integration",
          "Admin Dashboard",
          "Testing",
          "Launch",
          "Support"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "MongoDB",
          "Razorpay",
          "Stripe",
          "Cloudinary",
          "Redis",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic store (up to 50 products)",
            "features": [
              "Product Catalog",
              "Cart & Checkout",
              "Payment Gateway",
              "Mobile Responsive",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full e-commerce store",
            "features": [
              "Unlimited Products",
              "GST Invoicing",
              "Coupon System",
              "Admin Dashboard",
              "Order Management",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Multi-vendor marketplace",
            "features": [
              "Vendor Dashboard",
              "Advanced Analytics",
              "Return Management",
              "Loyalty Points",
              "Custom App",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it support UPI payments?",
            "a": "Yes — Razorpay integration supports UPI, PhonePe, GPay, cards, netbanking, and wallets."
          },
          {
            "q": "Can we manage inventory from the dashboard?",
            "a": "Yes — the admin dashboard includes full inventory tracking with low-stock alerts."
          }
        ],
        "caseStudies": [
          {
            "title": "FashionKart, Surat",
            "result": "₹15L+ sales in first 3 months post-launch",
            "industry": "Fashion E-commerce"
          }
        ]
      },
      {
        "slug": "payment-gateway-integration",
        "title": "Payment Gateway Integration",
        "tagline": "Accept all payment modes seamlessly in your online business",
        "overview": "Integrate Razorpay, Stripe, PayU, CCAvenue, or PhonePe Business into your website or app for seamless UPI, card, wallet, and EMI payment collection.",
        "features": [
          "Razorpay / Stripe / PayU Integration",
          "UPI & QR Code Payments",
          "EMI Options Setup",
          "Subscription Billing",
          "Refund Management",
          "Payment Analytics Dashboard",
          "Webhook Configuration",
          "Multi-currency Support"
        ],
        "benefits": [
          "Accept all Indian payment modes",
          "Increase checkout conversion",
          "Automated refunds",
          "Subscription revenue model",
          "Payment failure recovery"
        ],
        "process": [
          "Payment Audit",
          "Gateway Selection",
          "API Integration",
          "Webhook Setup",
          "Testing (Live + Sandbox)",
          "Go-Live",
          "Monitoring",
          "Support"
        ],
        "technologies": [
          "Razorpay",
          "Stripe",
          "PayU",
          "CCAvenue",
          "Node.js",
          "React",
          "Webhooks",
          "SSL/TLS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹4,999",
            "desc": "Single gateway integration",
            "features": [
              "1 Payment Gateway",
              "Basic Card + UPI",
              "Success/Fail Pages",
              "Basic Webhooks",
              "3 Days Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹9,999",
            "desc": "Multi-mode payment setup",
            "features": [
              "2 Gateways",
              "EMI Options",
              "Subscription Billing",
              "Refund Module",
              "1 Week Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹19,999",
            "desc": "Enterprise payment system",
            "features": [
              "Multiple Gateways",
              "Smart Routing",
              "Analytics Dashboard",
              "Multi-currency",
              "Failover Setup",
              "2 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Which payment gateways do you support?",
            "a": "We support Razorpay, Stripe, PayU, CCAvenue, PhonePe Business, and more."
          }
        ],
        "caseStudies": [
          {
            "title": "GroceryHub, Bangalore",
            "result": "Checkout abandonment reduced by 35% after multi-gateway integration",
            "industry": "Online Grocery"
          }
        ]
      },
      {
        "slug": "inventory-management-system",
        "title": "Inventory Management System",
        "tagline": "Track stock, warehouses, and orders in real-time",
        "overview": "Manage product stock levels across multiple warehouses, get low-stock alerts, track purchase orders from suppliers, and sync inventory with your online store automatically.",
        "features": [
          "Real-time Stock Tracking",
          "Multi-warehouse Management",
          "Purchase Order Management",
          "Low Stock Alerts",
          "Barcode / QR Scanning",
          "Supplier Management",
          "Stock Valuation Reports",
          "E-commerce Sync"
        ],
        "benefits": [
          "Prevent stockouts and overstock",
          "Reduce inventory costs",
          "Automate reorder points",
          "Unified multi-location stock view",
          "Accurate sales reporting"
        ],
        "process": [
          "Inventory Workflow Analysis",
          "System Design",
          "Module Development",
          "Barcode Integration",
          "E-commerce Sync",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Barcode API",
          "Shopify API",
          "WooCommerce API",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic stock management",
            "features": [
              "Single Warehouse",
              "Stock Tracking",
              "Low Stock Alerts",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full inventory system",
            "features": [
              "Multi-warehouse",
              "Purchase Orders",
              "Barcode Scanning",
              "E-commerce Sync",
              "Detailed Reports",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise IMS",
            "features": [
              "ERP Integration",
              "Supplier Portal",
              "AI Demand Forecasting",
              "Custom Analytics",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it sync with our online store?",
            "a": "Yes — we integrate with Shopify, WooCommerce, and custom stores to keep inventory in sync automatically."
          }
        ],
        "caseStudies": [
          {
            "title": "StyleBazar, Mumbai",
            "result": "Stockout incidents reduced by 80%; inventory accuracy improved to 98.5%",
            "industry": "Fashion Retail"
          }
        ]
      },
      {
        "slug": "ecommerce-mobile-app",
        "title": "E-commerce Mobile App",
        "tagline": "Your brand store app on Android & iOS",
        "overview": "Give your customers a dedicated shopping app with personalized recommendations, easy checkout, order tracking, and push notifications for offers — increasing loyalty and repeat sales.",
        "features": [
          "Product Browsing & Search",
          "Cart & Wishlist",
          "One-tap Checkout",
          "Order Tracking",
          "Push Notifications for Offers",
          "Personalized Recommendations",
          "Loyalty Points",
          "In-app Customer Support"
        ],
        "benefits": [
          "Higher customer retention",
          "3x more sessions vs. website",
          "Push notification marketing",
          "Seamless mobile shopping",
          "App-exclusive offers strategy"
        ],
        "process": [
          "App Architecture",
          "UI/UX Design",
          "Development",
          "Payment & Backend Integration",
          "Push Notification Setup",
          "Testing",
          "App Store Submission",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Firebase",
          "Node.js",
          "MongoDB",
          "Razorpay",
          "FCM",
          "Elasticsearch"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Basic shopping app",
            "features": [
              "Android App",
              "Product Catalog",
              "Cart + Checkout",
              "Push Notifications",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹89,999",
            "desc": "Full e-commerce app",
            "features": [
              "Android + iOS",
              "Order Tracking",
              "Wishlist",
              "Loyalty Points",
              "In-app Support",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Premium retail super-app",
            "features": [
              "All Features",
              "AR Product Preview",
              "AI Recommendations",
              "Multi-vendor",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can customers track their orders in the app?",
            "a": "Yes — real-time order tracking with status updates and push notifications is included from the Gold plan."
          }
        ],
        "caseStudies": [
          {
            "title": "HomeDecor India, Delhi",
            "result": "App drove 40% of total sales within 2 months; 4.6-star rating on Play Store",
            "industry": "Home Decor E-commerce"
          }
        ]
      },
      {
        "slug": "seo-for-ecommerce",
        "title": "SEO for E-commerce",
        "tagline": "Rank your product pages on Google and drive free sales",
        "overview": "Get your products ranking on Google Shopping and organic search with technical e-commerce SEO, product schema markup, category page optimization, and content strategies.",
        "features": [
          "Product Page SEO",
          "Category Page Optimization",
          "Google Shopping Setup",
          "Technical E-commerce SEO",
          "Product Schema Markup",
          "Backlink Building",
          "Content Marketing",
          "Competitor Analysis"
        ],
        "benefits": [
          "Free organic product traffic",
          "Reduce paid advertising costs",
          "Long-term revenue from SEO",
          "Google Shopping visibility",
          "Brand search authority"
        ],
        "process": [
          "E-commerce SEO Audit",
          "Keyword Research",
          "Technical Fixes",
          "On-page Optimization",
          "Google Shopping Setup",
          "Link Building",
          "Content",
          "Monthly Reporting"
        ],
        "technologies": [
          "Google Search Console",
          "Google Merchant Center",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
          "Schema.org",
          "Google Analytics 4",
          "Yoast"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Basic product SEO",
            "features": [
              "25 Product Pages",
              "On-page Optimization",
              "Google Shopping Setup",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Full e-commerce SEO",
            "features": [
              "100 Pages",
              "Technical SEO",
              "Category Optimization",
              "Backlinks (10/mo)",
              "Shopping Ads",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹39,999/mo",
            "desc": "Market leader SEO",
            "features": [
              "Unlimited Pages",
              "Blog Content (6/mo)",
              "Backlinks (20/mo)",
              "Schema Markup",
              "Weekly Reports",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How does SEO help an e-commerce store?",
            "a": "SEO drives free organic traffic from Google searches. Ranking for \"buy [product] online\" can generate consistent sales without ad spend."
          }
        ],
        "caseStudies": [
          {
            "title": "NaturalBrew, Kolkata",
            "result": "300% increase in organic traffic; ₹8L additional monthly revenue from SEO alone",
            "industry": "Organic Products"
          }
        ]
      },
      {
        "slug": "order-tracking-system",
        "title": "Order Tracking System",
        "tagline": "Real-time shipment tracking for your customers",
        "overview": "Integrate with Shiprocket, Delhivery, BlueDart, and other logistics providers to give customers a branded real-time tracking experience — reducing support calls significantly.",
        "features": [
          "Multi-carrier Tracking Integration",
          "Branded Tracking Page",
          "SMS & Email Status Updates",
          "Delivery ETA Display",
          "Return & Refund Portal",
          "Failed Delivery Management",
          "Admin Shipment Dashboard",
          "NDR (Non-Delivery Report) Handling"
        ],
        "benefits": [
          "Reduce \"where is my order\" calls by 70%",
          "Build customer trust with transparency",
          "Automated delivery notifications",
          "Streamlined returns",
          "Professional brand experience"
        ],
        "process": [
          "Logistics API Analysis",
          "Integration Development",
          "Tracking Page Design",
          "Notification Setup",
          "Returns Module",
          "Testing",
          "Launch",
          "Support"
        ],
        "technologies": [
          "Shiprocket API",
          "Delhivery API",
          "BlueDart API",
          "Node.js",
          "React",
          "Twilio SMS",
          "SendGrid",
          "MongoDB"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic tracking",
            "features": [
              "1 Carrier",
              "Tracking Page",
              "Email Updates",
              "Basic Dashboard",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Multi-carrier tracking",
            "features": [
              "3 Carriers",
              "SMS + Email Updates",
              "Return Portal",
              "NDR Management",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Enterprise logistics suite",
            "features": [
              "Unlimited Carriers",
              "Custom Branded Portal",
              "Analytics Dashboard",
              "Smart Routing",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Which couriers do you integrate with?",
            "a": "We integrate with Shiprocket, Delhivery, BlueDart, FedEx India, Ekart, and most major Indian couriers."
          }
        ],
        "caseStudies": [
          {
            "title": "GadgetZone, Hyderabad",
            "result": "Customer support tickets reduced by 65% after tracking system implementation",
            "industry": "Electronics E-commerce"
          }
        ]
      },
      {
        "slug": "social-media-marketing-ecommerce",
        "title": "Social Media Marketing for E-commerce",
        "tagline": "Drive sales with Instagram, Facebook, and influencer campaigns",
        "overview": "Grow your online store with high-converting social media campaigns — product showcases, influencer collaborations, Instagram shopping, retargeting ads, and seasonal sale campaigns.",
        "features": [
          "Instagram & Facebook Product Ads",
          "Instagram Shopping Setup",
          "Influencer Collaboration",
          "Retargeting Campaigns",
          "Seasonal Sale Campaigns",
          "Video Reel Production",
          "UGC Strategy",
          "ROI Tracking Dashboard"
        ],
        "benefits": [
          "Direct product discovery on Instagram",
          "Lower cost per purchase vs. Google",
          "Build community around brand",
          "Seasonal revenue spikes",
          "Sustainable organic growth"
        ],
        "process": [
          "Brand & Audience Analysis",
          "Content Strategy",
          "Creative Design",
          "Campaign Launch",
          "Influencer Outreach",
          "Optimization",
          "Weekly Reports",
          "Scaling"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Instagram Shopping API",
          "Canva Pro",
          "Video Editing",
          "Meta Pixel",
          "Google Analytics 4",
          "CRM",
          "Hotjar"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999/mo",
            "desc": "Brand building",
            "features": [
              "FB + Instagram Management",
              "15 Posts/month",
              "Product Showcase Ads",
              "Basic Retargeting",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999/mo",
            "desc": "Sales-focused campaigns",
            "features": [
              "Instagram Shopping",
              "20 Posts + 6 Reels",
              "Influencer (2/month)",
              "Retargeting Ads",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999/mo",
            "desc": "Full e-commerce growth",
            "features": [
              "All Platforms",
              "Daily Content",
              "Influencer (5/month)",
              "YouTube Ads",
              "Weekly Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can you set up Instagram Shopping for our store?",
            "a": "Yes — we handle the full Instagram Shopping setup including product catalog integration and tagging."
          }
        ],
        "caseStudies": [
          {
            "title": "GlowBeauty, Chennai",
            "result": "₹22L in sales from Instagram campaigns in 90 days; 12K new followers gained",
            "industry": "Beauty & Skincare"
          }
        ]
      },
      {
        "slug": "product-catalog-management",
        "title": "Product Catalog Management",
        "tagline": "Organize thousands of products with smart categorization",
        "overview": "Manage your entire product catalog — categories, variants, pricing, SEO descriptions, and images — through an easy admin panel. Import from Excel or sync from suppliers automatically.",
        "features": [
          "Bulk Product Import (CSV/Excel)",
          "Multi-variant Products",
          "Category & Sub-category Management",
          "SEO Product Descriptions",
          "Image Optimization",
          "Supplier Sync",
          "Price & Discount Rules",
          "Product Status Management"
        ],
        "benefits": [
          "Manage 10,000+ products easily",
          "Consistent product data quality",
          "Faster new product onboarding",
          "SEO-ready product pages",
          "Reduce catalog management time by 80%"
        ],
        "process": [
          "Catalog Audit",
          "Structure Design",
          "System Setup",
          "Bulk Import Configuration",
          "Image Optimization",
          "SEO Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Cloudinary",
          "Elasticsearch",
          "AWS S3",
          "Sharp Image Processing",
          "CSV Parser"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic catalog system",
            "features": [
              "Up to 500 Products",
              "CSV Import",
              "Basic Categories",
              "Image Upload",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Advanced catalog management",
            "features": [
              "Unlimited Products",
              "Multi-variant Support",
              "SEO Descriptions",
              "Supplier Sync",
              "Bulk Operations",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Enterprise PIM system",
            "features": [
              "Multi-channel Sync",
              "AI Product Descriptions",
              "Advanced Analytics",
              "Custom Attributes",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we import products from an Excel file?",
            "a": "Yes — we support bulk product imports from CSV/Excel with all attributes, images, and pricing."
          }
        ],
        "caseStudies": [
          {
            "title": "WholesaleKart, Ahmedabad",
            "result": "Cataloged 25,000+ products in 2 weeks with automated import system",
            "industry": "Wholesale E-commerce"
          }
        ]
      }
    ]
  },
  {
    "id": "restaurants",
    "slug": "restaurants",
    "name": "Restaurants & Cafes",
    "tagline": "Digital dining solutions for restaurants, cafes & cloud kitchens",
    "color": "#d97706",
    "bgColor": "#fffbeb",
    "description": "Help restaurants and cafes grow online with food ordering systems, table reservations, digital menus, loyalty programs, and targeted marketing campaigns.",
    "services": [
      {
        "slug": "restaurant-website-development",
        "title": "Restaurant Website Development",
        "tagline": "Beautiful restaurant websites that attract diners",
        "overview": "Create an appetizing online presence with a stunning restaurant website featuring your menu, photo gallery, table reservations, online ordering, and Google Maps integration.",
        "features": [
          "Digital Menu with Photos",
          "Online Table Reservation",
          "Photo Gallery",
          "Online Food Ordering",
          "Google Maps Integration",
          "Chef & Team Profiles",
          "Reviews & Testimonials",
          "Social Media Feed"
        ],
        "benefits": [
          "Attract new diners online",
          "Direct reservations without commission",
          "Showcase ambiance and food",
          "Reduce phone call bookings",
          "Build brand reputation"
        ],
        "process": [
          "Brand Discovery",
          "Design Mockups",
          "Content Collection",
          "Development",
          "Menu Upload",
          "Testing",
          "Launch",
          "Training"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "Node.js",
          "MySQL",
          "Cloudinary",
          "Google Maps API",
          "EmailJS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic restaurant site",
            "features": [
              "6 Pages",
              "Digital Menu",
              "Reservation Form",
              "Gallery",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full restaurant portal",
            "features": [
              "Unlimited Pages",
              "Online Ordering",
              "Table Reservation System",
              "Blog/Events",
              "CMS Dashboard",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹39,999",
            "desc": "Multi-outlet restaurant",
            "features": [
              "Multi-branch Support",
              "Loyalty Program Integration",
              "Custom Design",
              "Analytics",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can customers order food directly from the website?",
            "a": "Yes — the Gold plan includes an online food ordering module with cart and payment integration."
          }
        ],
        "caseStudies": [
          {
            "title": "Spice Garden, Bangalore",
            "result": "80+ online table reservations per week; 40% reduction in phone booking calls",
            "industry": "Fine Dining Restaurant"
          }
        ]
      },
      {
        "slug": "online-food-ordering-system",
        "title": "Online Food Ordering System",
        "tagline": "Accept direct online orders without Zomato commission",
        "overview": "Get your own food ordering platform — free from Zomato and Swiggy commissions. Customers order directly, you keep 100% revenue. Includes payment, order tracking, and kitchen display.",
        "features": [
          "Custom Online Menu",
          "Cart & Checkout",
          "Payment Gateway Integration",
          "Order Confirmation via SMS",
          "Kitchen Display System",
          "Delivery Zone Setup",
          "Order History",
          "Admin Order Dashboard"
        ],
        "benefits": [
          "Zero commission on direct orders",
          "100% customer data ownership",
          "Higher profit margin per order",
          "Loyalty program integration",
          "Brand-consistent ordering experience"
        ],
        "process": [
          "Menu Architecture",
          "Ordering System Design",
          "Development",
          "Kitchen Integration",
          "Payment Setup",
          "Delivery Zone Config",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Razorpay",
          "Socket.io",
          "Twilio SMS",
          "Firebase",
          "Google Maps API"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic ordering system",
            "features": [
              "Online Menu",
              "Cart + Checkout",
              "Payment Gateway",
              "Email Confirmation",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full ordering platform",
            "features": [
              "Kitchen Display System",
              "SMS Confirmation",
              "Order Dashboard",
              "Delivery Zones",
              "Analytics",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Multi-branch ordering system",
            "features": [
              "Multiple Outlets",
              "Real-time Order Tracking",
              "Driver Management",
              "Loyalty Integration",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it replace Zomato/Swiggy?",
            "a": "Yes — for direct orders, this system eliminates the commission. You can run it alongside Zomato/Swiggy for extra revenue channel."
          }
        ],
        "caseStudies": [
          {
            "title": "Biryani Bliss Cloud Kitchen, Hyderabad",
            "result": "Saved ₹1.8L in commissions in first 3 months through direct ordering",
            "industry": "Cloud Kitchen"
          }
        ]
      },
      {
        "slug": "table-reservation-system",
        "title": "Table Reservation System",
        "tagline": "Smart booking management for dine-in reservations",
        "overview": "Manage table bookings efficiently with an online reservation system — customers book a table, choose their slot, and get an instant confirmation. You manage capacity and reduce no-shows.",
        "features": [
          "Online Table Booking",
          "Time Slot Management",
          "Booking Confirmation Emails/SMS",
          "No-show Reduction Reminders",
          "Floor Plan Management",
          "Walk-in + Reservation Combo",
          "Waitlist Management",
          "Analytics Dashboard"
        ],
        "benefits": [
          "Fill tables efficiently",
          "Reduce no-shows with reminders",
          "Professional guest experience",
          "24/7 booking availability",
          "Better floor utilization"
        ],
        "process": [
          "Floor Plan Analysis",
          "Reservation Workflow",
          "System Development",
          "Notification Setup",
          "Testing",
          "Staff Training",
          "Launch",
          "Optimization"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Twilio",
          "SendGrid",
          "Google Calendar API",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic reservation system",
            "features": [
              "Online Booking Form",
              "Email Confirmation",
              "Admin Calendar View",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full reservation management",
            "features": [
              "Time Slot Control",
              "SMS Reminders",
              "Floor Plan",
              "Waitlist",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Multi-outlet reservation suite",
            "features": [
              "Multi-branch",
              "CRM Integration",
              "Guest Preferences",
              "VIP Management",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Will customers get a reminder before their booking?",
            "a": "Yes — automatic SMS and email reminders are sent 2–3 hours before the reservation time."
          }
        ],
        "caseStudies": [
          {
            "title": "The Rooftop Lounge, Goa",
            "result": "No-shows reduced by 50%; table utilization improved by 35%",
            "industry": "Rooftop Restaurant"
          }
        ]
      },
      {
        "slug": "food-delivery-app",
        "title": "Food Delivery App",
        "tagline": "Your own branded food delivery app like Zomato",
        "overview": "Build your own food delivery app for Android and iOS with real-time order tracking, driver management, push notifications, and multi-restaurant support — complete commission-free delivery.",
        "features": [
          "Customer App (Android + iOS)",
          "Restaurant Partner Dashboard",
          "Driver/Delivery Boy App",
          "Real-time GPS Tracking",
          "Push Notifications",
          "Payment Gateway",
          "Rating & Review System",
          "Analytics Dashboard"
        ],
        "benefits": [
          "Own your delivery ecosystem",
          "Scale to multiple restaurants",
          "Real-time order monitoring",
          "Branded customer experience",
          "Full revenue control"
        ],
        "process": [
          "App Architecture",
          "Three-app Design (Customer/Restaurant/Driver)",
          "Development",
          "GPS Integration",
          "Payment Setup",
          "Testing",
          "App Store Submission",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "Node.js",
          "MongoDB",
          "Firebase",
          "Google Maps API",
          "Socket.io",
          "Razorpay",
          "FCM"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹74,999",
            "desc": "Single restaurant delivery app",
            "features": [
              "Customer App (Android)",
              "Driver App",
              "GPS Tracking",
              "Basic Analytics",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹1,29,999",
            "desc": "Multi-restaurant delivery platform",
            "features": [
              "Customer App (Android + iOS)",
              "Restaurant Dashboard",
              "Driver App",
              "Real-time Tracking",
              "Analytics",
              "10 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,99,999",
            "desc": "Full delivery marketplace",
            "features": [
              "All Three Apps",
              "Multi-city Support",
              "Surge Pricing",
              "AI Recommendations",
              "Full Analytics Suite",
              "14 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it support multiple restaurants?",
            "a": "Yes — the Gold and Platinum plans support multiple restaurant partners with individual dashboards."
          }
        ],
        "caseStudies": [
          {
            "title": "QuickBite App, Pune",
            "result": "Launched with 8 restaurants; processed 2,000+ orders in first month",
            "industry": "Food Delivery Platform"
          }
        ]
      },
      {
        "slug": "pos-system",
        "title": "Restaurant POS System",
        "tagline": "Modern point-of-sale for faster billing and kitchen management",
        "overview": "Replace traditional billing machines with a cloud-based POS that handles table orders, kitchen tickets, inventory, and daily reports — accessible from tablet or PC.",
        "features": [
          "Touch-based Order Taking",
          "Kitchen Display/Printer",
          "Split Bill & Multiple Payments",
          "Menu & Price Management",
          "Daily Sales Reports",
          "Inventory Integration",
          "Staff Login & Role Control",
          "GST Invoice Generation"
        ],
        "benefits": [
          "Faster table turnaround",
          "Reduce order errors",
          "Real-time sales visibility",
          "Inventory auto-deduction",
          "Cloud access from anywhere"
        ],
        "process": [
          "Operations Analysis",
          "POS Architecture",
          "Development",
          "Hardware Setup",
          "Staff Training",
          "Menu Configuration",
          "Testing",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "WebSockets",
          "Thermal Printer SDK",
          "Razorpay",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic restaurant POS",
            "features": [
              "Touch POS Interface",
              "Order Management",
              "GST Billing",
              "Basic Reports",
              "Single Outlet",
              "1 Week Setup"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full restaurant POS",
            "features": [
              "Kitchen Display System",
              "Inventory Integration",
              "Multi-payment",
              "Staff Roles",
              "Analytics",
              "2 Weeks Setup"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Multi-outlet POS chain",
            "features": [
              "Multi-branch",
              "Central Dashboard",
              "Franchise Reports",
              "Custom Integrations",
              "4 Weeks Setup"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it work on a tablet?",
            "a": "Yes — our POS is optimized for touchscreen tablets and works on both Android tablets and iPads."
          }
        ],
        "caseStudies": [
          {
            "title": "Chai & Chill Cafe Chain, Mumbai",
            "result": "Billing speed improved by 3x; daily reconciliation time reduced from 2 hours to 10 minutes",
            "industry": "Cafe Chain (5 outlets)"
          }
        ]
      },
      {
        "slug": "loyalty-program",
        "title": "Restaurant Loyalty Program",
        "tagline": "Reward repeat diners and increase customer lifetime value",
        "overview": "Build a digital loyalty points system that rewards customers for every order or visit, encouraging repeat business. Customers earn points, get birthday offers, and unlock exclusive rewards.",
        "features": [
          "Points Earning System",
          "Reward Redemption",
          "Tiered Membership (Gold/Platinum)",
          "Birthday & Anniversary Offers",
          "WhatsApp Loyalty Updates",
          "Digital Loyalty Card",
          "Analytics Dashboard",
          "Referral Program"
        ],
        "benefits": [
          "Increase repeat visits by 40%",
          "Turn occasional diners into regulars",
          "Personalized customer engagement",
          "Word-of-mouth via referrals",
          "Measure customer lifetime value"
        ],
        "process": [
          "Loyalty Program Design",
          "Points Architecture",
          "Development",
          "WhatsApp Integration",
          "Admin Dashboard",
          "Testing",
          "Launch",
          "Marketing"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "WhatsApp API",
          "Twilio",
          "SendGrid",
          "Firebase",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic loyalty card",
            "features": [
              "Points System",
              "Digital Card",
              "Email Updates",
              "Basic Dashboard",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full loyalty program",
            "features": [
              "Tiers + Rewards",
              "WhatsApp Updates",
              "Birthday Offers",
              "Referral Program",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Enterprise loyalty platform",
            "features": [
              "Multi-outlet",
              "AI Personalization",
              "CRM Integration",
              "Custom App",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How do customers check their points?",
            "a": "Customers receive a digital loyalty card link via WhatsApp/SMS where they can check their balance and redeem rewards."
          }
        ],
        "caseStudies": [
          {
            "title": "The Coffee Collective, Delhi",
            "result": "Repeat visit rate increased by 45% within 3 months of loyalty launch",
            "industry": "Specialty Coffee Chain"
          }
        ]
      },
      {
        "slug": "seo-for-restaurants",
        "title": "SEO for Restaurants",
        "tagline": "Rank #1 on Google when people search \"restaurant near me\"",
        "overview": "When hungry diners search for restaurants in your area, your restaurant should appear first. Our local restaurant SEO and Google Maps optimization drives hungry customers to your door.",
        "features": [
          "Google Maps Ranking",
          "Local Restaurant SEO",
          "Menu Page SEO Optimization",
          "Review Generation Strategy",
          "Google Business Profile Management",
          "Food Keyword Targeting",
          "Local Backlink Building",
          "Monthly Performance Reports"
        ],
        "benefits": [
          "Appear in Google Maps top 3",
          "Attract walk-in customers from search",
          "Outrank competitors nearby",
          "Build 5-star reputation online",
          "Free organic marketing"
        ],
        "process": [
          "Local SEO Audit",
          "GMB Optimization",
          "Menu Page SEO",
          "Review Strategy",
          "Backlinks",
          "Content Plan",
          "Monthly Reports",
          "Ongoing Optimization"
        ],
        "technologies": [
          "Google Business Profile",
          "Google Search Console",
          "SEMrush",
          "BrightLocal",
          "Ahrefs",
          "Yoast",
          "Schema.org",
          "Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999/mo",
            "desc": "Local restaurant visibility",
            "features": [
              "GMB Optimization",
              "10 Keywords",
              "Monthly Report",
              "Review Strategy",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999/mo",
            "desc": "Restaurant SEO growth",
            "features": [
              "25 Keywords",
              "Menu SEO",
              "Food Blogs (2/mo)",
              "Backlinks (5/mo)",
              "Local Citations",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹24,999/mo",
            "desc": "Dominant local presence",
            "features": [
              "50 Keywords",
              "4 Blogs/mo",
              "Backlinks (15/mo)",
              "Schema Markup",
              "Weekly Reports",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How do we get more Google reviews?",
            "a": "We set up a review generation strategy with QR codes at tables and WhatsApp links to make it easy for satisfied diners to leave reviews."
          }
        ],
        "caseStudies": [
          {
            "title": "Tandoor Palace, Jaipur",
            "result": "Ranked #1 on Google Maps for \"best Indian restaurant Jaipur\"; 60% walk-in increase",
            "industry": "North Indian Restaurant"
          }
        ]
      },
      {
        "slug": "instagram-marketing-restaurant",
        "title": "Social Media Marketing for Restaurants",
        "tagline": "Make your food go viral on Instagram and Facebook",
        "overview": "Grow your restaurant's social following, showcase your dishes with mouth-watering content, run targeted local ad campaigns, and turn followers into diners.",
        "features": [
          "Instagram & Facebook Management",
          "Food Photography Direction",
          "Video Reel Production",
          "Targeted Local Ads",
          "Story Campaigns",
          "Influencer Food Review Collaborations",
          "Contest & Giveaway Campaigns",
          "Analytics & Growth Reports"
        ],
        "benefits": [
          "Build a loyal follower community",
          "Attract food lovers in your area",
          "Viral content opportunities",
          "Drive footfall through social",
          "Build aspirational brand image"
        ],
        "process": [
          "Brand Voice & Content Strategy",
          "Content Calendar",
          "Production",
          "Scheduling",
          "Paid Campaign Launch",
          "Influencer Outreach",
          "Reporting",
          "Scaling"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Instagram API",
          "Canva Pro",
          "Adobe Premiere",
          "Google Analytics 4",
          "Later.com",
          "Influencer Platform",
          "CRM"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Brand awareness",
            "features": [
              "Instagram + Facebook",
              "15 Posts/month",
              "Story Updates",
              "Basic Ads",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Growth + leads",
            "features": [
              "20 Posts + 6 Reels",
              "Targeted Local Ads",
              "Influencer (1/month)",
              "Contest Campaign",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Full social domination",
            "features": [
              "All Platforms",
              "Daily Content",
              "Influencer (3/month)",
              "YouTube Shorts",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you handle food photography?",
            "a": "We provide direction and editing for food photos. We can coordinate with local food photographers or work with content you provide."
          }
        ],
        "caseStudies": [
          {
            "title": "The Coastal Kitchen, Mangalore",
            "result": "Instagram grew from 500 to 12,000 followers in 6 months; 30% bookings from Instagram",
            "industry": "Seafood Restaurant"
          }
        ]
      }
    ]
  },
  {
    "id": "salons",
    "slug": "salons",
    "name": "Salons & Wellness",
    "tagline": "Digital tools for salons, spas, and wellness centers",
    "color": "#9333ea",
    "bgColor": "#faf5ff",
    "description": "Elevate your salon or wellness center with online booking systems, loyalty programs, product stores, and glamorous marketing campaigns that attract and retain clients.",
    "services": [
      {
        "slug": "salon-website-development",
        "title": "Salon & Spa Website",
        "tagline": "Elegant websites that reflect your brand luxury",
        "overview": "A stunning salon website showcasing your services, team, gallery, pricing, and online booking — designed to attract premium clients and grow your brand online.",
        "features": [
          "Service Menu with Pricing",
          "Online Appointment Booking",
          "Staff Portfolio Pages",
          "Before/After Gallery",
          "Gift Voucher Sales",
          "Google Maps Integration",
          "Client Testimonials",
          "Social Media Feed"
        ],
        "benefits": [
          "Attract walk-ins from search",
          "Online bookings 24/7",
          "Showcase your work visually",
          "Sell gift vouchers online",
          "Build premium brand image"
        ],
        "process": [
          "Brand Discovery",
          "Design Mockups",
          "Development",
          "Gallery Setup",
          "Booking Integration",
          "Testing",
          "Launch",
          "Training"
        ],
        "technologies": [
          "Next.js",
          "React",
          "WordPress",
          "Acuity Scheduling API",
          "Cloudinary",
          "Stripe",
          "Google Maps",
          "EmailJS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹8,999",
            "desc": "Basic salon website",
            "features": [
              "6 Pages",
              "Service Menu",
              "Booking Form",
              "Gallery",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹17,999",
            "desc": "Full salon portal",
            "features": [
              "15 Pages",
              "Online Appointment Booking",
              "Team Profiles",
              "Gift Voucher Sales",
              "CMS Dashboard",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹32,999",
            "desc": "Premium spa brand website",
            "features": [
              "Custom Design",
              "E-commerce Products",
              "Loyalty Integration",
              "Multi-branch",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can clients book specific staff members online?",
            "a": "Yes — the booking system supports staff selection so clients can book with their preferred stylist."
          }
        ],
        "caseStudies": [
          {
            "title": "Luxe Salon, Bangalore",
            "result": "150+ online bookings per month within 6 weeks of website launch",
            "industry": "Premium Hair Salon"
          }
        ]
      },
      {
        "slug": "appointment-booking-salon",
        "title": "Salon Appointment Booking System",
        "tagline": "Smart scheduling to manage client bookings effortlessly",
        "overview": "Let clients book appointments online 24/7, choose their preferred stylist, get reminders, and reschedule easily — while you manage your full schedule from a single dashboard.",
        "features": [
          "Online Booking with Staff Selection",
          "Real-time Slot Availability",
          "SMS & WhatsApp Reminders",
          "Cancellation & Rescheduling",
          "Multi-service Booking",
          "Walk-in + Online Combo",
          "Waitlist Management",
          "Daily Schedule Dashboard"
        ],
        "benefits": [
          "Zero phone booking hassle",
          "Reduce no-shows by 55%",
          "Full schedule visibility",
          "Staff performance tracking",
          "After-hours booking capture"
        ],
        "process": [
          "Scheduling Workflow",
          "System Design",
          "Development",
          "Staff Setup",
          "Notification Config",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Twilio",
          "WhatsApp API",
          "Google Calendar",
          "Firebase",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999",
            "desc": "Basic booking",
            "features": [
              "Online Booking",
              "Email Confirmations",
              "Admin Calendar",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999",
            "desc": "Smart booking system",
            "features": [
              "Staff Selection",
              "SMS + WhatsApp Reminders",
              "Rescheduling",
              "Waitlist",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹29,999",
            "desc": "Multi-outlet booking",
            "features": [
              "Multi-branch",
              "Customer History",
              "Service Packages",
              "Loyalty Points",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do clients get reminder messages?",
            "a": "Yes — automatic SMS and WhatsApp reminders are sent 24 hours and 1 hour before the appointment."
          }
        ],
        "caseStudies": [
          {
            "title": "Glow & Go Salon, Pune",
            "result": "No-shows dropped by 60%; staff schedules optimized with 40% less idle time",
            "industry": "Beauty Salon"
          }
        ]
      },
      {
        "slug": "salon-management-software",
        "title": "Salon Management Software",
        "tagline": "All-in-one system for billing, inventory, and staff management",
        "overview": "Manage your entire salon operation — billing, inventory, staff performance, client history, membership tracking, and daily reports — from one integrated software.",
        "features": [
          "Point of Sale & Billing",
          "GST Invoice Generation",
          "Inventory & Product Tracking",
          "Staff Commission Calculation",
          "Client History & Preferences",
          "Membership Management",
          "Daily Cash Reports",
          "Multi-branch Dashboard"
        ],
        "benefits": [
          "Complete operational control",
          "Accurate staff commissions",
          "Prevent product theft",
          "Client personalization",
          "Real-time financial overview"
        ],
        "process": [
          "Operations Audit",
          "System Architecture",
          "Module Development",
          "POS Integration",
          "Staff Onboarding",
          "Testing",
          "Training",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "PDF Generation",
          "Redis",
          "AWS",
          "Mobile PWA"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic salon system",
            "features": [
              "Billing + POS",
              "Client Database",
              "Basic Inventory",
              "Daily Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Complete salon management",
            "features": [
              "Staff Commission",
              "Membership Module",
              "Product Inventory",
              "Client History",
              "Analytics",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Salon chain management",
            "features": [
              "Multi-branch",
              "Franchise Reports",
              "CRM Integration",
              "Custom Analytics",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it track which products are used per service?",
            "a": "Yes — product consumption is tracked per service, helping you manage inventory accurately and calculate exact costs."
          }
        ],
        "caseStudies": [
          {
            "title": "Fabulous Hair Studio, Mumbai (4 outlets)",
            "result": "Reconciliation time reduced from 3 hours to 20 minutes; staff commission disputes eliminated",
            "industry": "Salon Chain"
          }
        ]
      },
      {
        "slug": "wellness-mobile-app",
        "title": "Wellness Center Mobile App",
        "tagline": "App for yoga studios, gyms, and wellness centers",
        "overview": "A branded mobile app where members can book classes, track sessions, receive wellness tips, pay memberships, and communicate with instructors — all in one place.",
        "features": [
          "Class Schedule & Booking",
          "Membership Management",
          "Progress Tracking",
          "Push Notifications",
          "Video Content Library",
          "Instructor Profiles",
          "Payment Gateway",
          "Community Forum"
        ],
        "benefits": [
          "Engage members beyond visits",
          "Reduce class no-shows",
          "Sell memberships online",
          "Build community",
          "Track client wellness journey"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Development",
          "Class Booking Engine",
          "Payment Integration",
          "Testing",
          "App Store Submission",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Node.js",
          "Firebase",
          "Razorpay",
          "MongoDB",
          "Zoom SDK",
          "FCM"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹44,999",
            "desc": "Basic wellness app",
            "features": [
              "Android App",
              "Class Booking",
              "Membership Payments",
              "Push Notifications",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹79,999",
            "desc": "Full wellness platform",
            "features": [
              "Android + iOS",
              "Progress Tracking",
              "Video Library",
              "Community Forum",
              "Instructor Profiles",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,29,999",
            "desc": "Premium wellness super-app",
            "features": [
              "All Features",
              "AI Wellness Plan",
              "Live Class Streaming",
              "Custom Design",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can members book specific classes in advance?",
            "a": "Yes — the class booking module shows upcoming schedules and members can book, cancel, or waitlist easily."
          }
        ],
        "caseStudies": [
          {
            "title": "ZenFlow Yoga Studio, Delhi",
            "result": "Class occupancy increased from 60% to 95% within 2 months of app launch",
            "industry": "Yoga Studio"
          }
        ]
      },
      {
        "slug": "loyalty-rewards-salon",
        "title": "Salon Loyalty & Rewards Program",
        "tagline": "Reward clients and increase visit frequency",
        "overview": "Implement a digital loyalty program that rewards clients for every visit and purchase — creating a habit loop that brings them back and increases spend per visit.",
        "features": [
          "Points per Visit/Service",
          "Reward Redemption",
          "Membership Tiers",
          "Birthday & Anniversary Offers",
          "WhatsApp Loyalty Notifications",
          "Referral Bonus Program",
          "Gift Voucher Integration",
          "Client Retention Analytics"
        ],
        "benefits": [
          "40% increase in repeat visits",
          "Personalized client relationships",
          "Word-of-mouth via referrals",
          "Increased average ticket size",
          "Reduce client churn"
        ],
        "process": [
          "Loyalty Design",
          "Points Architecture",
          "Development",
          "WhatsApp Integration",
          "Testing",
          "Launch",
          "Marketing Campaign",
          "Monitoring"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "WhatsApp API",
          "Twilio",
          "Firebase",
          "SendGrid",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999",
            "desc": "Basic rewards card",
            "features": [
              "Points System",
              "Digital Card",
              "Email Updates",
              "Basic Dashboard",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999",
            "desc": "Full loyalty program",
            "features": [
              "Membership Tiers",
              "WhatsApp Alerts",
              "Birthday Offers",
              "Referral Program",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹29,999",
            "desc": "Multi-outlet loyalty",
            "features": [
              "Multi-branch Points",
              "CRM Integration",
              "AI Personalization",
              "Custom Branding",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How do clients access their loyalty balance?",
            "a": "Clients receive a digital loyalty card link via WhatsApp or SMS. They can check balance and rewards anytime on mobile."
          }
        ],
        "caseStudies": [
          {
            "title": "Bliss Beauty Bar, Chandigarh",
            "result": "Client retention rate improved from 45% to 78% after loyalty program launch",
            "industry": "Beauty Salon"
          }
        ]
      },
      {
        "slug": "online-store-salon-products",
        "title": "Online Store for Salon Products",
        "tagline": "Sell salon products online beyond your four walls",
        "overview": "Launch an e-commerce store selling professional beauty products, salon-brand retail items, and gift vouchers — creating a revenue stream that works even when the salon is closed.",
        "features": [
          "Product Catalog",
          "Secure Checkout",
          "Gift Voucher Sales",
          "Subscription Box Option",
          "Customer Accounts",
          "Order Tracking",
          "Inventory Management",
          "Discount & Coupon System"
        ],
        "benefits": [
          "Additional revenue stream",
          "Sell premium products online",
          "Gift vouchers for special occasions",
          "Build brand beyond location",
          "Automate product upselling"
        ],
        "process": [
          "Product Catalog Setup",
          "Store Design",
          "Development",
          "Payment Integration",
          "Order Management",
          "Testing",
          "Launch",
          "Marketing"
        ],
        "technologies": [
          "Next.js",
          "Shopify",
          "WooCommerce",
          "Razorpay",
          "Cloudinary",
          "MongoDB",
          "AWS S3",
          "Shiprocket API"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic product store",
            "features": [
              "Up to 30 Products",
              "Cart + Checkout",
              "Payment Gateway",
              "Gift Vouchers",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full beauty e-commerce",
            "features": [
              "Unlimited Products",
              "Subscription Boxes",
              "Customer Accounts",
              "Inventory Tracking",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Premium beauty marketplace",
            "features": [
              "Multi-brand Products",
              "Loyalty Integration",
              "AR Try-on (Optional)",
              "Full Custom Design",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we sell gift vouchers that can be used in the salon?",
            "a": "Yes — digital gift vouchers can be purchased online and redeemed in-store by showing the voucher code."
          }
        ],
        "caseStudies": [
          {
            "title": "Pro Salon India, Kolkata",
            "result": "₹4.5L in online product sales in the first 2 months post-store launch",
            "industry": "Professional Salon Brand"
          }
        ]
      },
      {
        "slug": "seo-for-salons",
        "title": "SEO for Salons",
        "tagline": "Rank #1 when clients search \"best salon near me\"",
        "overview": "When people search for a haircut or facial in your city, your salon should be the first result. Our local salon SEO drives organic foot traffic and Google Maps visibility.",
        "features": [
          "Google Maps Ranking",
          "Local Salon SEO",
          "Service Page Optimization",
          "Review Generation",
          "GMB Management",
          "Local Backlinks",
          "Beauty Blog Content",
          "Competitor Analysis"
        ],
        "benefits": [
          "Rank for high-intent searches",
          "Attract clients 24/7 organically",
          "Build 5-star online reputation",
          "Outrank local competitors",
          "Reduce paid advertising dependency"
        ],
        "process": [
          "Local SEO Audit",
          "GMB Optimization",
          "Keyword Strategy",
          "Service Page SEO",
          "Review Strategy",
          "Link Building",
          "Content",
          "Monthly Reports"
        ],
        "technologies": [
          "Google Business Profile",
          "SEMrush",
          "BrightLocal",
          "Ahrefs",
          "Google Search Console",
          "Schema.org",
          "Analytics 4",
          "Yoast"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹6,999/mo",
            "desc": "Local salon visibility",
            "features": [
              "GMB Management",
              "10 Keywords",
              "Review Strategy",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹12,999/mo",
            "desc": "Salon SEO growth",
            "features": [
              "20 Keywords",
              "Service Page SEO",
              "Beauty Blogs (2/mo)",
              "Backlinks (5/mo)",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹22,999/mo",
            "desc": "Dominant local presence",
            "features": [
              "40 Keywords",
              "Blogs (4/mo)",
              "Backlinks (12/mo)",
              "Schema Markup",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How quickly can we appear on Google Maps?",
            "a": "With proper GMB optimization and review strategy, improvements in Google Maps rankings typically happen within 4–8 weeks."
          }
        ],
        "caseStudies": [
          {
            "title": "The Style Lounge, Pune",
            "result": "Ranked #1 on Google Maps for 8 salon keywords; 70% increase in walk-in clients",
            "industry": "Unisex Salon"
          }
        ]
      },
      {
        "slug": "instagram-marketing-salon",
        "title": "Instagram Marketing for Salons",
        "tagline": "Build a glamorous Instagram brand that attracts premium clients",
        "overview": "Grow your salon on Instagram with stunning before/after content, trend-driven reels, beauty tips, and targeted local ad campaigns that turn followers into booked appointments.",
        "features": [
          "Before/After Content Strategy",
          "Instagram Reels Production",
          "Targeted Local Ads",
          "Influencer Collaborations",
          "Story Campaigns & Polls",
          "Beauty Trend Content",
          "Hashtag Strategy",
          "Booking Link in Bio Optimization"
        ],
        "benefits": [
          "Attract premium clients",
          "Build aspirational brand image",
          "Viral potential with reels",
          "Direct booking from Instagram",
          "Loyal community growth"
        ],
        "process": [
          "Brand Aesthetic Audit",
          "Content Strategy",
          "Shooting Direction",
          "Editing & Scheduling",
          "Ad Campaigns",
          "Influencer Outreach",
          "Monthly Reports",
          "Growth Optimization"
        ],
        "technologies": [
          "Instagram API",
          "Meta Ads Manager",
          "Canva Pro",
          "Adobe Lightroom",
          "Later.com",
          "Hootsuite",
          "Google Analytics",
          "Influencer Platform"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹8,999/mo",
            "desc": "Brand presence",
            "features": [
              "Instagram Management",
              "15 Posts/month",
              "Stories",
              "Basic Ads",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹16,999/mo",
            "desc": "Active growth",
            "features": [
              "20 Posts + 8 Reels",
              "Targeted Local Ads",
              "Influencer (1/month)",
              "Booking Link Optimization",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹29,999/mo",
            "desc": "Premium brand domination",
            "features": [
              "All Platforms",
              "Daily Content",
              "Influencer (3/month)",
              "YouTube Shorts",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you provide photography direction?",
            "a": "Yes — we provide a content shoot brief with lighting, styling, and composition guidelines to help your team create high-quality content."
          }
        ],
        "caseStudies": [
          {
            "title": "Mane Attraction Salon, Mumbai",
            "result": "Instagram grew from 2K to 18K followers; 45% of new bookings came from Instagram",
            "industry": "Premium Hair Salon"
          }
        ]
      }
    ]
  },
  {
    "id": "travel",
    "slug": "travel",
    "name": "Travel & Tourism",
    "tagline": "Digital solutions for travel agencies and tour operators",
    "color": "#0891b2",
    "bgColor": "#ecfeff",
    "description": "Grow your travel business with stunning tour booking websites, travel apps, CRM systems, and social media campaigns that inspire wanderlust and convert browsers into bookers.",
    "services": [
      {
        "slug": "travel-agency-website",
        "title": "Travel Agency Website",
        "tagline": "Inspiring travel websites that convert browsers into bookers",
        "overview": "Build a visually stunning travel website with tour packages, destination guides, booking forms, photo galleries, and customer testimonials — designed to inspire travel and drive direct bookings.",
        "features": [
          "Tour Package Listings",
          "Destination Photo Galleries",
          "Online Enquiry & Booking Forms",
          "Trip Itinerary Display",
          "Customer Reviews",
          "Blog/Travel Guides",
          "WhatsApp Chat Integration",
          "Mobile Responsive Design"
        ],
        "benefits": [
          "Attract travel-hungry visitors",
          "Direct bookings without OTA commission",
          "Showcase destinations beautifully",
          "Build trust with testimonials",
          "Lead capture 24/7"
        ],
        "process": [
          "Brand & Target Market Analysis",
          "Design Concept",
          "Development",
          "Package Upload",
          "Booking Form Setup",
          "Testing",
          "Launch",
          "SEO Setup"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "Cloudinary",
          "Google Maps",
          "WhatsApp API",
          "EmailJS",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic travel site",
            "features": [
              "10 Pages",
              "Package Listings",
              "Enquiry Forms",
              "Gallery",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full travel portal",
            "features": [
              "Unlimited Packages",
              "Itinerary Pages",
              "Blog/Guides CMS",
              "Review System",
              "WhatsApp Integration",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Premium travel marketplace",
            "features": [
              "Booking System",
              "Multi-operator",
              "Live Availability",
              "Payment Integration",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we show tour itineraries with day-by-day plans?",
            "a": "Yes — each package can have a detailed day-by-day itinerary with maps, photos, and inclusions/exclusions."
          }
        ],
        "caseStudies": [
          {
            "title": "Wanderlust Holidays, Goa",
            "result": "180 direct enquiries per month; eliminated 30% OTA commission dependency",
            "industry": "Tour Operator"
          }
        ]
      },
      {
        "slug": "tour-booking-system",
        "title": "Tour Booking & Management System",
        "tagline": "Automated booking and availability management for tour operators",
        "overview": "Accept online tour bookings, manage availability, collect advance payments, generate booking confirmations, and track all your tours from a single dashboard.",
        "features": [
          "Online Tour Booking",
          "Real-time Seat Availability",
          "Advance Payment Collection",
          "Booking Confirmation PDF",
          "Passenger List Management",
          "Tour Calendar Dashboard",
          "Cancellation & Refund Module",
          "Agent/B2B Booking Portal"
        ],
        "benefits": [
          "24/7 booking without staff",
          "Accurate seat availability",
          "Automated confirmations",
          "Revenue tracking per tour",
          "Agent commission management"
        ],
        "process": [
          "Booking Workflow Design",
          "System Architecture",
          "Development",
          "Payment Integration",
          "Agent Portal",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "SendGrid",
          "Twilio",
          "PDF Generation",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic booking system",
            "features": [
              "Online Bookings",
              "Payment Collection",
              "Confirmation PDF",
              "Basic Dashboard",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Full tour management",
            "features": [
              "Availability Calendar",
              "Agent Portal",
              "Cancellation Module",
              "Revenue Reports",
              "Passenger Lists",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹74,999",
            "desc": "Enterprise tour platform",
            "features": [
              "Multi-operator",
              "Dynamic Pricing",
              "OTA Integration",
              "Full Analytics",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can travel agents book on behalf of customers?",
            "a": "Yes — the B2B agent portal allows registered travel agents to book tours with their commission automatically calculated."
          }
        ],
        "caseStudies": [
          {
            "title": "Kerala Tourisma, Kochi",
            "result": "Online bookings increased from 10% to 65% of total revenue within 4 months",
            "industry": "Tour Operator"
          }
        ]
      },
      {
        "slug": "travel-mobile-app",
        "title": "Travel Mobile App",
        "tagline": "Your branded travel app for tours, bookings, and itineraries",
        "overview": "A feature-rich travel app where customers browse packages, book tours, view itineraries, get trip updates, and share their travel experience — all with your brand front and center.",
        "features": [
          "Package Browsing & Booking",
          "Live Trip Itinerary",
          "Push Notification Updates",
          "Destination Photo Galleries",
          "Offline Itinerary Access",
          "Emergency Contact Features",
          "Customer Review Submission",
          "Payment Gateway Integration"
        ],
        "benefits": [
          "Engage travelers before, during, after trip",
          "Push marketing to existing customers",
          "Improve customer experience on trip",
          "Collect reviews post-trip",
          "Brand loyalty through app"
        ],
        "process": [
          "App Strategy",
          "UX Design",
          "Development",
          "Booking Integration",
          "Push Notifications",
          "Offline Mode",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Node.js",
          "Firebase",
          "MongoDB",
          "Razorpay",
          "FCM",
          "Google Maps"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Basic travel app",
            "features": [
              "Android App",
              "Package Browsing",
              "Booking",
              "Push Notifications",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹89,999",
            "desc": "Full travel companion app",
            "features": [
              "Android + iOS",
              "Live Itinerary",
              "Offline Mode",
              "Reviews",
              "Payment",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Premium travel super-app",
            "features": [
              "All Features",
              "AR Destination Guide",
              "Social Travel Feed",
              "Loyalty Program",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can the app work offline during travel?",
            "a": "Yes — the Gold plan supports offline itinerary access so travelers can view their trip details without internet connection."
          }
        ],
        "caseStudies": [
          {
            "title": "Himalayan Trails App, Manali",
            "result": "8,000+ downloads in 2 months; 70% repeat bookings from app users",
            "industry": "Adventure Travel"
          }
        ]
      },
      {
        "slug": "hotel-booking-platform",
        "title": "Hotel Booking Platform",
        "tagline": "Direct hotel booking system without OTA commission",
        "overview": "Build your own hotel booking engine to accept direct reservations, manage room inventory, process payments, and reduce dependence on OTAs like MakeMyTrip and Booking.com.",
        "features": [
          "Room Type Listings with Photos",
          "Real-time Availability Calendar",
          "Direct Online Booking",
          "Payment Integration",
          "Booking Confirmation Emails",
          "Check-in/Check-out Management",
          "Rate Management",
          "Guest Review System"
        ],
        "benefits": [
          "Eliminate OTA commission (15–25%)",
          "Own customer data directly",
          "Flexible rate control",
          "Personalized guest communication",
          "Higher profit margins"
        ],
        "process": [
          "Hotel Workflow Analysis",
          "Booking Engine Design",
          "Development",
          "Payment Integration",
          "Rate Management Setup",
          "Testing",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Stripe",
          "Calendar API",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic hotel booking",
            "features": [
              "Room Listings",
              "Availability Calendar",
              "Online Booking",
              "Payment Gateway",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full hotel booking engine",
            "features": [
              "Rate Management",
              "Review System",
              "Channel Manager Integration",
              "Analytics Dashboard",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Multi-property PMS",
            "features": [
              "Multi-property",
              "PMS Integration",
              "Dynamic Pricing",
              "Corporate Rates",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it sync with OTAs to avoid double bookings?",
            "a": "Yes — the Gold plan includes channel manager integration to sync availability with OTAs and prevent double bookings."
          }
        ],
        "caseStudies": [
          {
            "title": "Sunrise Boutique Hotel, Ooty",
            "result": "Direct bookings increased by 55%; OTA commission savings of ₹2.5L in 6 months",
            "industry": "Boutique Hotel"
          }
        ]
      },
      {
        "slug": "itinerary-planner",
        "title": "Custom Itinerary Planner",
        "tagline": "AI-powered trip planning tool for your travel clients",
        "overview": "Build a custom itinerary planning tool where travelers input their preferences and get a personalized day-by-day trip plan — with hotel suggestions, activity recommendations, and booking options.",
        "features": [
          "Preference Input Form",
          "AI-generated Itinerary",
          "Day-by-Day Activity Schedule",
          "Map Integration",
          "Hotel & Activity Recommendations",
          "PDF Itinerary Export",
          "Budget Calculator",
          "Shareable Trip Links"
        ],
        "benefits": [
          "Differentiate from competitors",
          "Faster quote generation",
          "Impress clients with personalization",
          "Reduce itinerary creation time by 80%",
          "Upselling opportunities built-in"
        ],
        "process": [
          "Planning Logic Design",
          "AI Integration",
          "Development",
          "Map Setup",
          "PDF Generation",
          "Testing",
          "Launch",
          "Refinement"
        ],
        "technologies": [
          "React",
          "Node.js",
          "OpenAI API",
          "Google Maps API",
          "MongoDB",
          "PDF.js",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Manual itinerary builder",
            "features": [
              "Template-based Builder",
              "Day Plans",
              "PDF Export",
              "Map View",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Semi-automated planner",
            "features": [
              "Preference-based Generation",
              "Hotel Recommendations",
              "Budget Calculator",
              "Shareable Links",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Full AI itinerary platform",
            "features": [
              "Full AI Generation",
              "Real-time Availability",
              "Dynamic Pricing",
              "CRM Integration",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How does the AI generate itineraries?",
            "a": "We integrate with OpenAI to generate context-aware itineraries based on destination, duration, group type, interests, and budget preferences."
          }
        ],
        "caseStudies": [
          {
            "title": "GoExplore Travel, Mumbai",
            "result": "Itinerary creation time reduced from 2 hours to 10 minutes; clients loved the personalization",
            "industry": "Travel Agency"
          }
        ]
      },
      {
        "slug": "crm-for-travel",
        "title": "Travel CRM & Lead Management",
        "tagline": "Never lose a travel inquiry again",
        "overview": "A dedicated CRM for travel agencies to track every lead, manage follow-ups, send automated tour recommendations, and convert more inquiries into confirmed bookings.",
        "features": [
          "Lead Capture & Management",
          "Follow-up Scheduler",
          "Tour Recommendation Engine",
          "WhatsApp & Email Integration",
          "Booking Status Tracking",
          "Agent Performance Dashboard",
          "Revenue Reports",
          "Client Travel History"
        ],
        "benefits": [
          "Structured lead pipeline",
          "Automated follow-up sequences",
          "Full team accountability",
          "Higher conversion rates",
          "Upselling opportunity tracking"
        ],
        "process": [
          "Sales Workflow Analysis",
          "CRM Design",
          "Development",
          "WhatsApp Integration",
          "Agent Setup",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "WhatsApp Business API",
          "Twilio",
          "SendGrid",
          "Zapier",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic lead tracker",
            "features": [
              "Lead Management",
              "Follow-up Reminders",
              "Basic Dashboard",
              "Email Integration",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full travel CRM",
            "features": [
              "WhatsApp Integration",
              "Booking Tracking",
              "Agent Dashboard",
              "Revenue Reports",
              "Client History",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise travel CRM",
            "features": [
              "AI Follow-up Sequences",
              "Multi-branch",
              "Advanced Analytics",
              "API Integrations",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it capture leads from WhatsApp?",
            "a": "Yes — WhatsApp lead capture integration routes incoming messages directly into the CRM as new leads."
          }
        ],
        "caseStudies": [
          {
            "title": "Horizon Holidays, Jaipur",
            "result": "Lead conversion increased from 12% to 31% with structured CRM follow-ups",
            "industry": "Travel Agency"
          }
        ]
      },
      {
        "slug": "seo-for-travel",
        "title": "SEO for Travel Agencies",
        "tagline": "Rank for \"travel packages to [destination]\" searches",
        "overview": "Capture organic search traffic from travelers researching destinations and packages. Our travel SEO strategy includes destination pages, blog guides, and local SEO to drive direct inquiries.",
        "features": [
          "Destination Page SEO",
          "Travel Blog Content Creation",
          "Local Agency SEO",
          "Google Maps Ranking",
          "Package Schema Markup",
          "Backlink Building",
          "Competitor Analysis",
          "Monthly Reports"
        ],
        "benefits": [
          "Free organic lead generation",
          "Rank above OTA competition",
          "Build destination authority",
          "Attract high-intent travelers",
          "Long-term sustainable traffic"
        ],
        "process": [
          "Travel SEO Audit",
          "Destination Keyword Research",
          "Content Strategy",
          "On-page Optimization",
          "Link Building",
          "Blog Production",
          "Monthly Reports",
          "Ongoing Refinement"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Google Analytics 4",
          "Schema.org",
          "Screaming Frog",
          "BrightLocal",
          "WordPress"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Local agency visibility",
            "features": [
              "15 Keywords",
              "Destination Pages",
              "GMB Management",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Travel SEO growth",
            "features": [
              "35 Keywords",
              "Travel Blogs (4/mo)",
              "Backlinks (8/mo)",
              "Package Schema",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Market-leading travel SEO",
            "features": [
              "60+ Keywords",
              "Blogs (8/mo)",
              "Backlinks (20/mo)",
              "Full Schema Markup",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we compete with MakeMyTrip in SEO?",
            "a": "For specific destination and niche travel searches, yes — especially with dedicated destination pages and long-tail keyword targeting."
          }
        ],
        "caseStudies": [
          {
            "title": "TourIndia, Varanasi",
            "result": "Ranked #1–3 for 28 travel package keywords; 400% increase in organic inquiries in 5 months",
            "industry": "Cultural Tour Operator"
          }
        ]
      },
      {
        "slug": "social-media-travel",
        "title": "Social Media Marketing for Travel",
        "tagline": "Inspire wanderlust on Instagram and Facebook",
        "overview": "Grow your travel brand with stunning destination content, travel reels, and targeted campaigns to travelers in your demographic — turning dreamers into booked customers.",
        "features": [
          "Destination Instagram Reels",
          "Facebook Travel Ads",
          "Influencer Travel Collaborations",
          "Story Campaigns",
          "User-Generated Content Strategy",
          "Seasonal Campaign Planning",
          "Engagement Campaigns",
          "Monthly Analytics Reports"
        ],
        "benefits": [
          "Massive organic reach potential",
          "Inspire travel dreams",
          "High-ROI travel ad campaigns",
          "Build destination authority",
          "Community of loyal travelers"
        ],
        "process": [
          "Brand Story & Positioning",
          "Content Strategy",
          "Production Direction",
          "Campaign Launch",
          "Influencer Outreach",
          "Optimization",
          "Reporting",
          "Seasonal Campaigns"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Instagram API",
          "Canva Pro",
          "Adobe Premiere",
          "Later.com",
          "Influencer Platforms",
          "Google Analytics",
          "CRM"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Travel brand building",
            "features": [
              "Instagram + Facebook",
              "15 Posts/month",
              "Basic Ads",
              "Story Updates",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Active booking campaigns",
            "features": [
              "20 Posts + 8 Reels",
              "FB + Instagram Ads",
              "Influencer (1/month)",
              "Seasonal Campaigns",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Travel media domination",
            "features": [
              "All Platforms",
              "Daily Travel Content",
              "Influencer (3/month)",
              "YouTube Travel",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "What type of content works best for travel on Instagram?",
            "a": "Destination reels, before/after travel transformations, day-in-a-destination guides, and behind-the-scenes trip content consistently perform best."
          }
        ],
        "caseStudies": [
          {
            "title": "WanderlustIndia, Rishikesh",
            "result": "Instagram grew from 3K to 45K followers in 6 months; 35% of bookings from Instagram",
            "industry": "Adventure Travel"
          }
        ]
      }
    ]
  },
  {
    "id": "legal",
    "slug": "legal",
    "name": "Law Firms & Advocates",
    "tagline": "Professional digital solutions for legal practitioners",
    "color": "#1e3a5f",
    "bgColor": "#f0f4f8",
    "description": "Help law firms and advocates build a strong digital presence, manage clients, automate legal documents, and attract new clients with targeted SEO and content marketing.",
    "services": [
      {
        "slug": "law-firm-website",
        "title": "Law Firm Website Development",
        "tagline": "Professional, trust-inspiring websites for lawyers and law firms",
        "overview": "Create a credibility-building law firm website that showcases your practice areas, attorney profiles, case results, client testimonials, and allows online consultation scheduling.",
        "features": [
          "Practice Area Pages",
          "Attorney Profiles",
          "Case Study Showcases",
          "Online Consultation Booking",
          "Blog/Legal Articles",
          "Client Testimonials",
          "Secure Contact Forms",
          "Bar Council Compliance"
        ],
        "benefits": [
          "Attract new clients online",
          "Build professional credibility",
          "Showcase expertise and wins",
          "Online appointment scheduling",
          "Position as thought leader"
        ],
        "process": [
          "Legal Brand Discovery",
          "Design Mockups",
          "Development",
          "Content Writing",
          "Consultation Booking Setup",
          "Testing",
          "Launch",
          "SEO Configuration"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "Node.js",
          "MySQL",
          "EmailJS",
          "Calendly Integration",
          "Google Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic law firm site",
            "features": [
              "8 Pages",
              "Practice Areas",
              "Attorney Profiles",
              "Contact Form",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full law firm portal",
            "features": [
              "20 Pages",
              "Online Consultation Booking",
              "Blog/Articles",
              "Testimonials",
              "Case Studies",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Multi-attorney firm website",
            "features": [
              "Unlimited Pages",
              "Client Portal",
              "Document Sharing",
              "CMS Dashboard",
              "Multi-language",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can clients book a consultation online?",
            "a": "Yes — we integrate online consultation scheduling so potential clients can book a time directly from your website."
          }
        ],
        "caseStudies": [
          {
            "title": "Mehta & Associates, Delhi",
            "result": "80+ consultation requests per month after website redesign",
            "industry": "Corporate Law Firm"
          }
        ]
      },
      {
        "slug": "case-management-system",
        "title": "Case Management System",
        "tagline": "Digital case tracking for law firms and legal teams",
        "overview": "Manage all your cases digitally — track case status, court dates, client documents, billing, and tasks from one central legal management platform accessible by your entire team.",
        "features": [
          "Case Registration & Tracking",
          "Court Date Calendar",
          "Document Management",
          "Task Assignment to Staff",
          "Client Communication Log",
          "Billing & Invoice Tracking",
          "Deadline Alerts",
          "Reporting Dashboard"
        ],
        "benefits": [
          "Never miss a court date",
          "Full case visibility for partners",
          "Organized document storage",
          "Accurate client billing",
          "Staff accountability"
        ],
        "process": [
          "Legal Workflow Analysis",
          "System Design",
          "Development",
          "Document System",
          "Calendar Integration",
          "Testing",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Google Calendar API",
          "AWS S3",
          "SendGrid",
          "PDF Generation",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic case tracker",
            "features": [
              "Case Management",
              "Court Calendar",
              "Document Storage",
              "Basic Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Full case management system",
            "features": [
              "Task Management",
              "Client Log",
              "Billing Tracking",
              "Deadline Alerts",
              "Team Roles",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Enterprise legal management",
            "features": [
              "Multi-branch",
              "Advanced Analytics",
              "API Integrations",
              "Custom Workflows",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Is client data secure in the system?",
            "a": "Yes — all data is encrypted at rest and in transit, with role-based access controls limiting who can view sensitive case information."
          }
        ],
        "caseStudies": [
          {
            "title": "Rao Legal Services, Hyderabad",
            "result": "Zero missed court dates in 12 months after system implementation; billing accuracy improved by 95%",
            "industry": "Civil Law Practice"
          }
        ]
      },
      {
        "slug": "legal-document-automation",
        "title": "Legal Document Automation",
        "tagline": "Generate contracts, agreements, and notices in seconds",
        "overview": "Automate repetitive legal document creation with template-based generation — create contracts, notices, affidavits, and agreements in seconds by filling a simple form.",
        "features": [
          "Document Template Library",
          "Form-based Document Generation",
          "E-signature Integration",
          "PDF Download & Print",
          "Template Management",
          "Client Data Auto-fill",
          "Version Control",
          "Secure Document Sharing"
        ],
        "benefits": [
          "80% faster document preparation",
          "Reduce clerical errors",
          "Professional standardized documents",
          "E-signature for remote clients",
          "Template library for all case types"
        ],
        "process": [
          "Document Audit",
          "Template Design",
          "System Development",
          "E-signature Integration",
          "Testing",
          "Staff Training",
          "Launch",
          "Template Expansion"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "DocuSign API",
          "PDF Generation",
          "AWS S3",
          "SendGrid",
          "JWT Auth"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic template system",
            "features": [
              "10 Document Templates",
              "Form-based Generation",
              "PDF Download",
              "Basic Sharing",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full document automation",
            "features": [
              "50 Templates",
              "E-signature Integration",
              "Auto-fill from Database",
              "Version Control",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise legal document suite",
            "features": [
              "Unlimited Templates",
              "Custom Workflow",
              "API Integration",
              "Audit Trails",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can clients sign documents electronically?",
            "a": "Yes — we integrate DocuSign or Aadhaar-based e-signature for secure, legally valid electronic signatures."
          }
        ],
        "caseStudies": [
          {
            "title": "Singh & Partners, Mumbai",
            "result": "Document preparation time reduced from 2 hours to 8 minutes per document on average",
            "industry": "Corporate Law Firm"
          }
        ]
      },
      {
        "slug": "client-portal",
        "title": "Client Portal for Law Firms",
        "tagline": "Secure online portal for client case access and communication",
        "overview": "Give clients a secure portal to view their case status, upload documents, communicate with their lawyer, and pay bills — reducing phone calls and improving client satisfaction.",
        "features": [
          "Secure Client Login",
          "Case Status Dashboard",
          "Document Upload & Download",
          "Secure Messaging with Lawyer",
          "Invoice & Payment Module",
          "Court Date Notifications",
          "Case Timeline View",
          "Mobile Responsive"
        ],
        "benefits": [
          "Reduce client phone calls by 50%",
          "Transparent case communication",
          "Secure document exchange",
          "Convenient online bill payment",
          "Build client trust and loyalty"
        ],
        "process": [
          "Client Journey Design",
          "Portal Architecture",
          "Development",
          "Security Implementation",
          "Payment Integration",
          "Testing",
          "Client Onboarding",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "JWT Auth",
          "Razorpay",
          "AWS S3",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic client access portal",
            "features": [
              "Client Login",
              "Case Status View",
              "Document Download",
              "Messaging",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full client portal",
            "features": [
              "Document Upload",
              "Payment Integration",
              "Court Date Alerts",
              "Secure Messaging",
              "Timeline View",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise client management portal",
            "features": [
              "Multi-firm Support",
              "Custom Branding",
              "Analytics",
              "API Integration",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Is the client portal secure?",
            "a": "Yes — all data is encrypted, and clients access via secure login with OTP verification."
          }
        ],
        "caseStudies": [
          {
            "title": "Joshi Legal, Kolkata",
            "result": "Client satisfaction scores improved by 40%; office phone calls reduced by 60%",
            "industry": "Family Law Practice"
          }
        ]
      },
      {
        "slug": "legal-crm",
        "title": "Legal CRM & Lead Management",
        "tagline": "Track and convert every legal consultation inquiry",
        "overview": "Manage consultation requests, follow up with potential clients, track referral sources, and convert more prospects into retained clients with a legal-specific CRM.",
        "features": [
          "Consultation Request Tracking",
          "Lead Source Attribution",
          "Follow-up Scheduling",
          "Referral Management",
          "Conversion Tracking",
          "Practice Area Categorization",
          "Revenue Pipeline",
          "Analytics Dashboard"
        ],
        "benefits": [
          "Never lose a potential client",
          "Understand best lead sources",
          "Structured follow-up process",
          "Revenue forecasting",
          "Team performance visibility"
        ],
        "process": [
          "Sales Process Design",
          "CRM Development",
          "Lead Source Integration",
          "Referral Setup",
          "Staff Training",
          "Testing",
          "Launch",
          "Optimization"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Twilio",
          "SendGrid",
          "WhatsApp API",
          "Zapier",
          "Google Sheets"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic lead tracker",
            "features": [
              "Consultation Tracking",
              "Follow-up Reminders",
              "Basic Reports",
              "Email Integration",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full legal CRM",
            "features": [
              "Lead Source Tracking",
              "WhatsApp Integration",
              "Pipeline Dashboard",
              "Referral Management",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Enterprise legal CRM",
            "features": [
              "Multi-attorney",
              "Advanced Analytics",
              "Revenue Forecasting",
              "Custom Workflows",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it track where our clients come from?",
            "a": "Yes — each lead is tagged with its source (website, referral, social media, Google) for clear attribution reporting."
          }
        ],
        "caseStudies": [
          {
            "title": "Kapoor Law Chambers, Chandigarh",
            "result": "Client acquisition improved by 2.5x through structured CRM follow-ups",
            "industry": "Criminal Law Practice"
          }
        ]
      },
      {
        "slug": "appointment-scheduling-law",
        "title": "Online Appointment Scheduling",
        "tagline": "Allow clients to book legal consultations online",
        "overview": "A professional consultation booking system for law firms allowing clients to schedule meetings with specific attorneys, pay consultation fees, and receive automated reminders.",
        "features": [
          "Attorney-specific Booking",
          "Online Consultation Fee Collection",
          "Video Consultation Link Generation",
          "Calendar Sync",
          "SMS & Email Reminders",
          "Client Pre-consultation Form",
          "Cancellation Management",
          "Admin Dashboard"
        ],
        "benefits": [
          "Accept consultation bookings 24/7",
          "Collect fees before consultation",
          "Reduce no-shows",
          "Professional booking experience",
          "Full schedule visibility"
        ],
        "process": [
          "Scheduling Workflow",
          "System Design",
          "Development",
          "Payment Integration",
          "Calendar Sync",
          "Testing",
          "Launch",
          "Training"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Google Calendar API",
          "Zoom SDK",
          "Twilio",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic booking system",
            "features": [
              "Online Scheduling",
              "Email Confirmations",
              "Admin Calendar",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Smart legal scheduling",
            "features": [
              "Fee Collection",
              "SMS Reminders",
              "Video Meeting Link",
              "Multi-attorney",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Enterprise legal scheduling",
            "features": [
              "Full Practice Integration",
              "CRM Sync",
              "Analytics",
              "Custom Workflow",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can clients pay consultation fees online?",
            "a": "Yes — payment is collected during booking via Razorpay, ensuring committed appointments."
          }
        ],
        "caseStudies": [
          {
            "title": "Agarwal Advocates, Pune",
            "result": "Consultation no-shows reduced by 70%; ₹1.5L in online consultation fees collected in first quarter",
            "industry": "Tax Law Practice"
          }
        ]
      },
      {
        "slug": "seo-for-law-firms",
        "title": "SEO for Law Firms",
        "tagline": "Rank #1 for \"best lawyer for [case type] in [city]\"",
        "overview": "When people need a lawyer, they Google. Our legal SEO strategy gets your firm to the top of search results for high-intent legal queries in your practice areas and city.",
        "features": [
          "Legal Keyword Research",
          "Practice Area Page SEO",
          "Google Maps for Lawyers",
          "Legal Blog Writing",
          "E-A-T Optimization (Expertise, Authority, Trust)",
          "Backlink Building",
          "Review Generation",
          "Monthly Reports"
        ],
        "benefits": [
          "Dominant search visibility",
          "High-intent client traffic",
          "Build legal expertise authority",
          "Outrank competing law firms",
          "Reduce referral dependency"
        ],
        "process": [
          "Legal SEO Audit",
          "Keyword Mapping",
          "Technical Fixes",
          "Practice Page SEO",
          "E-A-T Strategy",
          "Link Building",
          "Content",
          "Monthly Reports"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
          "BrightLocal",
          "Schema.org",
          "Analytics 4",
          "WordPress"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/mo",
            "desc": "Local law firm visibility",
            "features": [
              "15 Keywords",
              "GMB Management",
              "Practice Page SEO",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/mo",
            "desc": "Legal authority building",
            "features": [
              "30 Keywords",
              "Legal Blog (2/mo)",
              "E-A-T Optimization",
              "Backlinks (8/mo)",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/mo",
            "desc": "Dominant legal SEO",
            "features": [
              "60 Keywords",
              "Blogs (5/mo)",
              "Backlinks (20/mo)",
              "Schema Markup",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "What is E-A-T and why is it important for law firms?",
            "a": "E-A-T (Expertise, Authority, Trust) is Google's quality standard — especially important for legal websites. We optimize attorney credentials, citations, and authoritative content to boost rankings."
          }
        ],
        "caseStudies": [
          {
            "title": "Sharma & Kaul, Bengaluru",
            "result": "Ranked #1 for 15 high-value legal keywords; 120% increase in consultation requests from organic search",
            "industry": "Corporate Law"
          }
        ]
      },
      {
        "slug": "content-marketing-law",
        "title": "Legal Content Marketing",
        "tagline": "Build authority with expert legal articles and guides",
        "overview": "Position your law firm as the go-to legal authority through high-quality blog posts, legal guides, FAQ pages, and video content that educates potential clients and earns search rankings.",
        "features": [
          "Legal Blog Post Writing",
          "FAQ Page Creation",
          "Case Study Articles",
          "Legal Guide E-books",
          "Video Script Writing",
          "Social Media Content",
          "Newsletter Campaigns",
          "Content Calendar Management"
        ],
        "benefits": [
          "Build thought leadership",
          "Organic search authority",
          "Educate potential clients",
          "Build trust before inquiry",
          "Repurpose for social media"
        ],
        "process": [
          "Audience Research",
          "Content Strategy",
          "Editorial Calendar",
          "Writing & Review",
          "SEO Optimization",
          "Publishing",
          "Distribution",
          "Performance Analysis"
        ],
        "technologies": [
          "WordPress",
          "Google Docs",
          "SEMrush",
          "Grammarly",
          "Canva",
          "Mailchimp",
          "LinkedIn API",
          "Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999/mo",
            "desc": "Basic content presence",
            "features": [
              "2 Blog Posts/month",
              "SEO Optimization",
              "Social Distribution",
              "Monthly Analytics",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999/mo",
            "desc": "Active content authority",
            "features": [
              "4 Blog Posts/month",
              "FAQ Pages",
              "Legal Guides (1/quarter)",
              "Newsletter (1/month)",
              "3-month minimum"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹24,999/mo",
            "desc": "Comprehensive content domination",
            "features": [
              "8 Posts/month",
              "Video Scripts",
              "E-book per Quarter",
              "LinkedIn Strategy",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Are articles reviewed by actual lawyers?",
            "a": "Yes — all legal content is reviewed by qualified advocates before publication to ensure accuracy."
          }
        ],
        "caseStudies": [
          {
            "title": "Verma Intellectual Property, Delhi",
            "result": "Blog traffic grew 400% in 6 months; 35% of new clients cited blog articles as first touchpoint",
            "industry": "IP Law Firm"
          }
        ]
      }
    ]
  },
  {
    "id": "manufacturing",
    "slug": "manufacturing",
    "name": "Manufacturing & Industries",
    "tagline": "Digital transformation for factories and industrial businesses",
    "color": "#475569",
    "bgColor": "#f1f5f9",
    "description": "Modernize your manufacturing business with ERP systems, inventory management, B2B portals, and digital marketing tools that increase efficiency and open new markets.",
    "services": [
      {
        "slug": "manufacturing-website",
        "title": "Manufacturing Company Website",
        "tagline": "Professional industrial websites to attract B2B buyers",
        "overview": "Build a credibility-establishing manufacturing website showcasing your products, capabilities, certifications, and case studies — designed to attract B2B buyers, distributors, and international clients.",
        "features": [
          "Product/Catalogue Pages",
          "Manufacturing Capabilities Showcase",
          "Certification & Quality Badges",
          "B2B Inquiry Form",
          "Factory Video/Gallery",
          "Export Markets Section",
          "Case Study Pages",
          "Request for Quote (RFQ) System"
        ],
        "benefits": [
          "Attract B2B buyers nationally and globally",
          "Showcase manufacturing capabilities",
          "Build international credibility",
          "24/7 inquiry generation",
          "Reduce sales team cold-call dependency"
        ],
        "process": [
          "Brand Discovery",
          "Competitor Analysis",
          "Design Mockups",
          "Development",
          "Product Catalog Setup",
          "RFQ Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "Node.js",
          "MySQL",
          "Cloudinary",
          "EmailJS",
          "Google Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic industrial website",
            "features": [
              "10 Pages",
              "Product Catalog",
              "RFQ Form",
              "Gallery",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full manufacturing portal",
            "features": [
              "25 Pages",
              "Product Downloads (Specs)",
              "Case Studies",
              "Certification Pages",
              "Blog/News",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "B2B marketplace portal",
            "features": [
              "Unlimited Pages",
              "B2B Login Portal",
              "Custom RFQ System",
              "Distributor Section",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can international buyers submit inquiries?",
            "a": "Yes — the RFQ system includes international inquiry fields with country selection and GSTIN/Tax ID for export leads."
          }
        ],
        "caseStudies": [
          {
            "title": "Shree Plastics, Rajkot",
            "result": "First export inquiry received within 3 weeks of website launch",
            "industry": "Plastic Components Manufacturer"
          }
        ]
      },
      {
        "slug": "erp-system",
        "title": "ERP System for Manufacturing",
        "tagline": "Enterprise resource planning for factories",
        "overview": "Streamline your entire manufacturing operation with a custom ERP — from raw material procurement to production planning, inventory, quality control, billing, and dispatch.",
        "features": [
          "Production Planning & Scheduling",
          "Raw Material Procurement",
          "Inventory Management",
          "Quality Control Module",
          "Machine Downtime Tracking",
          "Dispatch & Logistics",
          "Financial Accounting",
          "Management Dashboard"
        ],
        "benefits": [
          "End-to-end operational visibility",
          "Reduce material waste",
          "On-time production delivery",
          "Accurate cost accounting",
          "Data-driven management decisions"
        ],
        "process": [
          "Process Mapping",
          "ERP Architecture",
          "Module Development",
          "Integration",
          "Data Migration",
          "Testing",
          "Staff Training",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Django",
          "PostgreSQL",
          "Celery/Redis",
          "Docker",
          "AWS",
          "Power BI",
          "REST APIs"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Basic manufacturing system",
            "features": [
              "Inventory Module",
              "Production Planning",
              "Basic Billing",
              "Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹99,999",
            "desc": "Full manufacturing ERP",
            "features": [
              "All Core Modules",
              "Quality Control",
              "Machine Tracking",
              "Detailed Analytics",
              "Staff Roles",
              "8 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,99,999",
            "desc": "Enterprise ERP platform",
            "features": [
              "Multi-plant",
              "Full Financial Module",
              "API Ecosystem",
              "BI Dashboard",
              "Custom Reports",
              "14 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long does ERP implementation take?",
            "a": "Implementation typically takes 8–14 weeks depending on the complexity and number of modules required."
          }
        ],
        "caseStudies": [
          {
            "title": "Patel Engineering, Ludhiana",
            "result": "Production efficiency improved by 35%; material waste reduced by 22% in first 6 months",
            "industry": "Metal Parts Manufacturing"
          }
        ]
      },
      {
        "slug": "inventory-manufacturing",
        "title": "Inventory Management for Manufacturing",
        "tagline": "Real-time raw material and finished goods tracking",
        "overview": "Track raw materials, WIP (Work-In-Progress), and finished goods across your factory in real-time — with purchase order management, supplier tracking, and automated reorder points.",
        "features": [
          "Raw Material Tracking",
          "WIP Monitoring",
          "Finished Goods Inventory",
          "Purchase Order Management",
          "Supplier Management",
          "Barcode/QR Scanning",
          "Reorder Point Automation",
          "Inventory Valuation Reports"
        ],
        "benefits": [
          "Prevent production halts due to stockouts",
          "Accurate COGS calculation",
          "Reduce excess inventory costs",
          "Supplier performance tracking",
          "Real-time stock visibility"
        ],
        "process": [
          "Inventory Workflow Analysis",
          "System Design",
          "Barcode Integration",
          "Module Development",
          "Data Migration",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Barcode SDK",
          "ERPNext API",
          "AWS",
          "Redis",
          "Excel Import"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic inventory system",
            "features": [
              "Raw Material Tracking",
              "Finished Goods",
              "PO Management",
              "Basic Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Full manufacturing IMS",
            "features": [
              "WIP Tracking",
              "Barcode Scanning",
              "Supplier Management",
              "Reorder Automation",
              "Detailed Analytics",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Enterprise inventory platform",
            "features": [
              "Multi-plant",
              "ERP Integration",
              "Advanced Analytics",
              "Custom Reports",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does it support barcode scanning?",
            "a": "Yes — the Gold and Platinum plans support barcode and QR code scanning via handheld devices or smartphones for warehouse operations."
          }
        ],
        "caseStudies": [
          {
            "title": "Mehta Chemical Industries, Vadodara",
            "result": "Raw material stockouts reduced to zero; inventory accuracy improved to 99.2%",
            "industry": "Chemical Manufacturing"
          }
        ]
      },
      {
        "slug": "b2b-portal",
        "title": "B2B Dealer & Distributor Portal",
        "tagline": "Online ordering portal for your dealers and distributors",
        "overview": "Give your dealers and distributors a dedicated online portal to place orders, view catalogs, check stock, track shipments, and access marketing materials — eliminating manual order taking.",
        "features": [
          "Dealer Login & Registration",
          "Product Catalog with Pricing Tiers",
          "Online Order Placement",
          "Stock Availability View",
          "Shipment Tracking",
          "Invoice & Account Statement",
          "Marketing Asset Downloads",
          "Admin Dealer Management"
        ],
        "benefits": [
          "Automate order taking 24/7",
          "Reduce sales team manual work",
          "Transparent dealer communication",
          "Faster order processing",
          "Dealer performance analytics"
        ],
        "process": [
          "Dealer Workflow Analysis",
          "Portal Architecture",
          "Development",
          "Pricing Tier Setup",
          "Dealer Onboarding",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "AWS S3",
          "Shiprocket API",
          "SendGrid",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹29,999",
            "desc": "Basic dealer portal",
            "features": [
              "Dealer Login",
              "Product Catalog",
              "Order Placement",
              "Basic Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹54,999",
            "desc": "Full B2B portal",
            "features": [
              "Pricing Tiers",
              "Stock Availability",
              "Shipment Tracking",
              "Invoice Module",
              "Analytics",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹94,999",
            "desc": "Enterprise dealer management",
            "features": [
              "Multi-brand Portal",
              "Credit Limit Management",
              "Marketing Assets",
              "Full Analytics Suite",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can different dealers see different prices?",
            "a": "Yes — the Gold plan supports pricing tiers so each dealer category (Silver/Gold/Platinum dealer) sees their negotiated pricing."
          }
        ],
        "caseStudies": [
          {
            "title": "SteelTech Industries, Coimbatore",
            "result": "Manual order processing eliminated; 80% of dealer orders moved online within 3 months",
            "industry": "Steel Products Manufacturer"
          }
        ]
      },
      {
        "slug": "quality-control-system",
        "title": "Quality Control System",
        "tagline": "Digital QC management for manufacturing compliance",
        "overview": "Digitize your quality inspection process — define inspection parameters, record QC results at each production stage, generate non-conformance reports, and track defect trends for continuous improvement.",
        "features": [
          "Inspection Checklist Builder",
          "QC Data Entry (Mobile/Web)",
          "Non-conformance Report (NCR)",
          "Defect Analytics & Trend Reports",
          "ISO Compliance Documentation",
          "Supplier Quality Audit",
          "Customer Complaint Tracking",
          "Real-time QC Dashboard"
        ],
        "benefits": [
          "ISO certification compliance support",
          "Reduce defect rates",
          "Early defect detection",
          "Reduce customer complaint rates",
          "Data-driven quality improvement"
        ],
        "process": [
          "QC Process Mapping",
          "System Design",
          "Module Development",
          "Mobile App",
          "NCR Workflow",
          "Testing",
          "Staff Training",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "React Native",
          "PDF Generation",
          "AWS",
          "Power BI",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic QC system",
            "features": [
              "Inspection Checklists",
              "QC Entry",
              "Basic Reports",
              "NCR Generation",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999",
            "desc": "Full quality management",
            "features": [
              "Defect Analytics",
              "ISO Documentation",
              "Supplier QA",
              "QC Dashboard",
              "Mobile QC Entry",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999",
            "desc": "Enterprise QMS platform",
            "features": [
              "Multi-plant",
              "Advanced Analytics",
              "Customer Complaint CRM",
              "Custom Reports",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Does this help with ISO certification?",
            "a": "Yes — the Gold plan includes documentation templates and audit trails aligned with ISO 9001 requirements."
          }
        ],
        "caseStudies": [
          {
            "title": "Apex Auto Parts, Pune",
            "result": "Customer complaint rate reduced by 75% within 4 months of QC system deployment",
            "industry": "Automotive Components"
          }
        ]
      },
      {
        "slug": "supply-chain-management",
        "title": "Supply Chain Management System",
        "tagline": "End-to-end visibility from supplier to customer delivery",
        "overview": "Track your entire supply chain — from purchase orders to supplier receipts, production, warehousing, and final dispatch — with real-time visibility and automated alerts for delays.",
        "features": [
          "Purchase Order Management",
          "Supplier Performance Tracking",
          "Inbound Logistics Tracking",
          "Warehouse Management",
          "Outbound Dispatch Management",
          "Delivery ETA Calculation",
          "Delay Alert Notifications",
          "Supply Chain Analytics"
        ],
        "benefits": [
          "Reduce supply chain disruptions",
          "Better supplier relationships",
          "On-time delivery performance",
          "Reduce carrying costs",
          "Full traceability"
        ],
        "process": [
          "Supply Chain Mapping",
          "System Design",
          "Module Development",
          "Logistics Integration",
          "Supplier Onboarding",
          "Testing",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "Shiprocket API",
          "Twilio",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic supply chain tracker",
            "features": [
              "PO Management",
              "Supplier Tracking",
              "Basic Dispatch",
              "Reports",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full supply chain platform",
            "features": [
              "End-to-end Tracking",
              "Delay Alerts",
              "Warehouse Module",
              "Supplier Portal",
              "Analytics",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise SCM system",
            "features": [
              "Multi-vendor Coordination",
              "AI Demand Forecasting",
              "Custom Integrations",
              "BI Dashboard",
              "7 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can suppliers access the system to update delivery status?",
            "a": "Yes — the Gold plan includes a supplier portal where vendors can update their delivery status and upload shipping documents."
          }
        ],
        "caseStudies": [
          {
            "title": "Gujarat Textile Mills, Surat",
            "result": "On-time delivery rate improved from 68% to 94% with supply chain visibility system",
            "industry": "Textile Manufacturing"
          }
        ]
      },
      {
        "slug": "industrial-mobile-app",
        "title": "Industrial Operations Mobile App",
        "tagline": "Real-time factory floor monitoring on your mobile",
        "overview": "Empower factory supervisors and managers with a mobile app to monitor production, log machine downtime, capture quality issues, and view real-time dashboards — from any location.",
        "features": [
          "Live Production Dashboard",
          "Machine Downtime Logging",
          "Quality Issue Capture (Photo)",
          "Shift Report Submission",
          "Inventory Check",
          "Push Alert Notifications",
          "Worker Attendance",
          "Management Analytics"
        ],
        "benefits": [
          "Real-time factory visibility",
          "Faster issue escalation",
          "Paperless floor operations",
          "Remote management",
          "Data-driven decisions"
        ],
        "process": [
          "App Architecture",
          "UI/UX Design",
          "Mobile Development",
          "Backend APIs",
          "Notification Setup",
          "Factory Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Node.js",
          "Firebase",
          "PostgreSQL",
          "FCM",
          "Camera API",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹34,999",
            "desc": "Basic factory floor app",
            "features": [
              "Android App",
              "Production Dashboard",
              "Downtime Logging",
              "Basic Reports",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹64,999",
            "desc": "Full operations app",
            "features": [
              "Android + iOS",
              "Quality Capture",
              "Shift Reports",
              "Inventory Check",
              "Push Alerts",
              "5 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,09,999",
            "desc": "Enterprise industrial app",
            "features": [
              "Full ERP Integration",
              "AI Anomaly Detection",
              "Multi-plant",
              "Custom Analytics",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it work without internet inside the factory?",
            "a": "Yes — we build offline-capable features that sync data when connectivity is restored, critical for factory floor environments."
          }
        ],
        "caseStudies": [
          {
            "title": "Bharat Forgings, Jamshedpur",
            "result": "Machine downtime reporting improved 4x; management response time reduced from hours to minutes",
            "industry": "Heavy Manufacturing"
          }
        ]
      },
      {
        "slug": "digital-marketing-manufacturing",
        "title": "B2B Digital Marketing for Manufacturing",
        "tagline": "Generate dealer and export inquiries with targeted campaigns",
        "overview": "Attract B2B buyers, distributors, and export partners through LinkedIn campaigns, Google B2B ads, industry directories, and content marketing that establishes your manufacturing authority.",
        "features": [
          "LinkedIn B2B Campaigns",
          "Google Industrial Search Ads",
          "Industry Directory Listings",
          "Trade Show Digital Campaigns",
          "Technical Content Marketing",
          "Email Campaign to Distributors",
          "Export Market Campaigns",
          "B2B Lead Generation"
        ],
        "benefits": [
          "Generate qualified B2B leads",
          "Reach international buyers",
          "Establish industrial expertise",
          "Build export market presence",
          "Supplement trade show outreach"
        ],
        "process": [
          "Target Market Definition",
          "Platform Strategy",
          "Creative Development",
          "Campaign Launch",
          "LinkedIn Outreach",
          "Optimization",
          "Monthly Reports",
          "Scaling"
        ],
        "technologies": [
          "LinkedIn Ads",
          "Google Ads",
          "Mailchimp",
          "HubSpot",
          "Meta Ads",
          "IndiaMART API",
          "Canva Pro",
          "Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999/mo",
            "desc": "B2B brand visibility",
            "features": [
              "LinkedIn Company Page",
              "10 Posts/month",
              "Google Ads Setup",
              "Directory Listings",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999/mo",
            "desc": "Active B2B lead generation",
            "features": [
              "LinkedIn Lead Ads",
              "Google Search Ads",
              "Email Campaigns",
              "Technical Blog (2/mo)",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999/mo",
            "desc": "Export market campaigns",
            "features": [
              "Multi-platform",
              "Export Market Targeting",
              "Video Production",
              "Trade Show Campaigns",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we target international distributors on LinkedIn?",
            "a": "Yes — LinkedIn advertising supports precise targeting by industry, job title, and geography, ideal for reaching international distributors and procurement managers."
          }
        ],
        "caseStudies": [
          {
            "title": "Precision Pumps India, Chennai",
            "result": "35 qualified B2B inquiries per month including 8 export leads from LinkedIn campaigns",
            "industry": "Industrial Pumps Manufacturing"
          }
        ]
      }
    ]
  },
  {
    "id": "ngo",
    "slug": "ngo",
    "name": "NGOs & Non-Profits",
    "tagline": "Digital solutions to amplify your social impact",
    "color": "#16a34a",
    "bgColor": "#f0fdf4",
    "description": "Empower your NGO with a compelling website, online donation platform, volunteer management, and digital campaigns that attract donors, volunteers, and partners to your cause.",
    "services": [
      {
        "slug": "ngo-website",
        "title": "NGO & Non-Profit Website",
        "tagline": "Impact-driven websites that inspire donors and volunteers",
        "overview": "Create a compelling website that tells your story, showcases your impact, attracts donors, and connects volunteers with your cause — with online donation functionality built-in.",
        "features": [
          "Impact Stories & Statistics",
          "Online Donation Button",
          "Volunteer Registration",
          "Program/Project Pages",
          "Gallery & Field Reports",
          "Newsletter Signup",
          "Corporate Partner Section",
          "Annual Report Downloads"
        ],
        "benefits": [
          "Attract online donors 24/7",
          "Showcase measurable impact",
          "Recruit volunteers easily",
          "Build donor trust and transparency",
          "Reduce offline donation friction"
        ],
        "process": [
          "Mission Discovery",
          "Impact Storytelling Design",
          "Development",
          "Donation Integration",
          "Content Upload",
          "Testing",
          "Launch",
          "SEO Setup"
        ],
        "technologies": [
          "Next.js",
          "WordPress",
          "React",
          "Razorpay",
          "PayPal",
          "Mailchimp",
          "Cloudinary",
          "Google Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic NGO website",
            "features": [
              "6 Pages",
              "Mission & Programs",
              "Donation Button",
              "Volunteer Form",
              "Gallery",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full NGO portal",
            "features": [
              "20 Pages",
              "Impact Dashboard",
              "Newsletter Integration",
              "Annual Reports",
              "Blog/Updates",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Comprehensive cause platform",
            "features": [
              "Donor Portal",
              "Volunteer Management",
              "Corporate Partnership Section",
              "Multi-language",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can donors get a tax exemption receipt automatically?",
            "a": "Yes — we set up automated 80G/12A donation receipt generation and email delivery."
          }
        ],
        "caseStudies": [
          {
            "title": "SaharaHope NGO, Bhopal",
            "result": "Online donations increased by 280% in 3 months; 150+ volunteers registered through website",
            "industry": "Education NGO"
          }
        ]
      },
      {
        "slug": "online-donation-platform",
        "title": "Online Donation Platform",
        "tagline": "Secure, multi-gateway donation collection system",
        "overview": "A dedicated donation platform supporting one-time and recurring donations, campaign-specific fundraising, donor dashboards, 80G receipt generation, and complete analytics.",
        "features": [
          "One-time & Recurring Donations",
          "Campaign-based Fundraising Pages",
          "Multiple Payment Gateways",
          "80G Receipt Generation",
          "Donor Login & History",
          "Donation Matching Feature",
          "Fundraiser Creation Tool",
          "Analytics Dashboard"
        ],
        "benefits": [
          "Grow recurring donor base",
          "Campaign-specific fundraising",
          "Automated 80G compliance",
          "Transparent donor communication",
          "Reduce fundraising overhead"
        ],
        "process": [
          "Platform Architecture",
          "Campaign Design",
          "Payment Integration",
          "80G Receipt System",
          "Donor Portal",
          "Testing",
          "Launch",
          "Donor Onboarding"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "PayPal",
          "Stripe",
          "PDF Generation",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic donation system",
            "features": [
              "One-time Donations",
              "Payment Gateway",
              "80G Receipts",
              "Basic Dashboard",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full fundraising platform",
            "features": [
              "Recurring Donations",
              "Campaign Pages",
              "Donor Portal",
              "Analytics",
              "Email Automation",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise donor management",
            "features": [
              "Fundraiser Creator Tool",
              "Donation Matching",
              "Corporate Donation Module",
              "Full Analytics",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Is the donation platform secure?",
            "a": "Yes — all transactions use bank-grade encryption. We integrate certified payment gateways (Razorpay, PayPal) to ensure complete security."
          }
        ],
        "caseStudies": [
          {
            "title": "GreenEarth Foundation, Mumbai",
            "result": "₹28L raised online in 12 months through recurring donors and campaign pages",
            "industry": "Environment NGO"
          }
        ]
      },
      {
        "slug": "volunteer-management",
        "title": "Volunteer Management System",
        "tagline": "Recruit, engage, and manage volunteers efficiently",
        "overview": "A complete volunteer management platform to recruit volunteers, manage applications, assign tasks, track hours, recognize contributions, and communicate with your volunteer army.",
        "features": [
          "Volunteer Registration Portal",
          "Application Review & Approval",
          "Task & Event Assignment",
          "Volunteer Hour Tracking",
          "Recognition & Certification",
          "Communication Dashboard",
          "Skill-based Matching",
          "Reports & Analytics"
        ],
        "benefits": [
          "Structured volunteer management",
          "Increase volunteer retention",
          "Fair task distribution",
          "Accurate hour reporting for grants",
          "Recognize top volunteers"
        ],
        "process": [
          "Volunteer Journey Mapping",
          "System Design",
          "Development",
          "Application Workflow",
          "Communication Setup",
          "Testing",
          "Volunteer Onboarding",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "Twilio",
          "Firebase",
          "Google Sheets API",
          "PDF Generation"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic volunteer system",
            "features": [
              "Registration Portal",
              "Task Assignment",
              "Hour Tracking",
              "Basic Reports",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full volunteer management",
            "features": [
              "Skill Matching",
              "Event Assignment",
              "Recognition System",
              "Communication Hub",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Enterprise volunteer platform",
            "features": [
              "Multi-program",
              "Grant Reporting",
              "Volunteer App",
              "Advanced Analytics",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we generate volunteer hour certificates?",
            "a": "Yes — digital volunteer certificates with logged hours can be automatically generated and emailed to volunteers."
          }
        ],
        "caseStudies": [
          {
            "title": "JanSeva Trust, Nagpur",
            "result": "Volunteer base grew from 200 to 850 active volunteers in 6 months",
            "industry": "Community NGO"
          }
        ]
      },
      {
        "slug": "fundraising-campaigns",
        "title": "Digital Fundraising Campaigns",
        "tagline": "Online campaigns that inspire action and donations",
        "overview": "Run powerful digital fundraising campaigns — Giving Tuesday drives, birthday fundraisers, emergency campaigns, and year-end appeals — with compelling stories, social media distribution, and donation tracking.",
        "features": [
          "Campaign Landing Page Design",
          "Countdown Timer & Goal Meter",
          "Social Media Distribution",
          "Email Campaign to Donors",
          "WhatsApp Broadcast",
          "Donor Update Stories",
          "Matching Gift Feature",
          "Real-time Campaign Analytics"
        ],
        "benefits": [
          "Maximize campaign fundraising",
          "Build donor excitement and urgency",
          "Reach supporters across all channels",
          "Track donation sources",
          "Create habit of giving"
        ],
        "process": [
          "Campaign Strategy",
          "Story Development",
          "Landing Page Design",
          "Email Sequence",
          "Social Campaign",
          "WhatsApp Broadcasts",
          "Live Updates",
          "Thank You Campaign"
        ],
        "technologies": [
          "React",
          "Razorpay",
          "Mailchimp",
          "Meta Ads Manager",
          "WhatsApp API",
          "Canva Pro",
          "Analytics 4",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999/campaign",
            "desc": "Basic campaign setup",
            "features": [
              "Landing Page",
              "Donation Gateway",
              "Email Blast (1)",
              "Social Posts (5)",
              "Campaign Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999/campaign",
            "desc": "Full campaign management",
            "features": [
              "Custom Landing Page",
              "Email Sequence (5)",
              "WhatsApp Broadcast",
              "Social Ads",
              "Real-time Analytics",
              "Donor Thank-you"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999/campaign",
            "desc": "Maximum impact campaign",
            "features": [
              "Multi-phase Campaign",
              "Video Production",
              "Influencer Outreach",
              "Press Release",
              "Post-campaign Report"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long should a fundraising campaign run?",
            "a": "We recommend 3–4 weeks for most campaigns. Emergency campaigns can be shorter (7–10 days) with high-urgency messaging."
          }
        ],
        "caseStudies": [
          {
            "title": "ChildFirst India, Jaipur",
            "result": "Raised ₹42L in a 30-day Diwali fundraising campaign — 3x their previous best",
            "industry": "Child Welfare NGO"
          }
        ]
      },
      {
        "slug": "event-management-ngo",
        "title": "NGO Event Management System",
        "tagline": "Organize charity events, galas, and fundraisers digitally",
        "overview": "Manage charity events — gala dinners, marathons, benefit concerts, and awareness campaigns — with online ticketing, registration, volunteer coordination, and post-event reporting.",
        "features": [
          "Online Event Registration",
          "Ticket Sales & Payment",
          "Volunteer Assignment for Events",
          "Attendee Management",
          "Event Sponsor Management",
          "QR Code Check-in",
          "Post-event Donation Drive",
          "Impact Report Generation"
        ],
        "benefits": [
          "Sell tickets and collect donations online",
          "Professional event management",
          "Sponsor relationship tracking",
          "Volunteer event coordination",
          "Post-event donor conversion"
        ],
        "process": [
          "Event Planning Design",
          "Registration System",
          "Payment Integration",
          "Volunteer Module",
          "QR Check-in Setup",
          "Sponsor Management",
          "Testing",
          "Event Support"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Razorpay",
          "QR Libraries",
          "SendGrid",
          "Firebase",
          "Google Sheets"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹9,999",
            "desc": "Basic event system",
            "features": [
              "Online Registration",
              "Payment Gateway",
              "Basic Reports",
              "Email Confirmations",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹19,999",
            "desc": "Full event management",
            "features": [
              "Ticketing",
              "QR Check-in",
              "Volunteer Module",
              "Sponsor Tracking",
              "Analytics",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹34,999",
            "desc": "Multi-event platform",
            "features": [
              "Multi-event Management",
              "Live Fundraiser Board",
              "Post-event Donations",
              "Custom Branding",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we collect donations at the event using QR code?",
            "a": "Yes — we set up donation QR codes that can be displayed at events for instant smartphone donations."
          }
        ],
        "caseStudies": [
          {
            "title": "Pragati Foundation, Hyderabad",
            "result": "500+ attendees registered online; ₹6.5L raised at charity gala through integrated donation system",
            "industry": "Social Welfare NGO"
          }
        ]
      },
      {
        "slug": "impact-reporting",
        "title": "Impact Reporting Dashboard",
        "tagline": "Visualize and communicate your NGO's impact to donors",
        "overview": "Create a beautiful, data-driven impact dashboard that shows donors, CSR partners, and government agencies exactly how their contributions are creating change — with live statistics and stories.",
        "features": [
          "Live Impact Metrics Dashboard",
          "Beneficiary Count Tracking",
          "Fund Utilization Visualization",
          "Program Progress Reports",
          "Geographic Impact Maps",
          "Photo & Story Integration",
          "Donor-specific Impact Statements",
          "Annual Report Generation"
        ],
        "benefits": [
          "Increase donor trust and retention",
          "Attract CSR funding with data",
          "Transparent fund utilization",
          "Compelling grant applications",
          "Board reporting made easy"
        ],
        "process": [
          "Impact Metrics Definition",
          "Data Architecture",
          "Dashboard Development",
          "Map Integration",
          "Report Generation",
          "Testing",
          "Data Migration",
          "Launch"
        ],
        "technologies": [
          "React",
          "D3.js",
          "Chart.js",
          "Google Maps API",
          "Node.js",
          "PostgreSQL",
          "PDF Generation",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Basic impact dashboard",
            "features": [
              "Key Metrics Display",
              "Program Progress",
              "Fund Utilization Chart",
              "PDF Export",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full impact reporting suite",
            "features": [
              "Live Dashboard",
              "Geographic Maps",
              "Beneficiary Stories",
              "Donor Statements",
              "Annual Report Generator",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Enterprise impact platform",
            "features": [
              "Multi-program",
              "Custom Metrics",
              "Donor Portal Integration",
              "BI Integration",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can donors see how their specific donation was used?",
            "a": "Yes — the Gold plan includes personalized donor impact statements showing exact fund utilization with stories and photos."
          }
        ],
        "caseStudies": [
          {
            "title": "Aasha Foundation, Bangalore",
            "result": "CSR partnership funding increased by 60% after launching transparent impact dashboard",
            "industry": "Education NGO"
          }
        ]
      },
      {
        "slug": "social-media-ngo",
        "title": "Social Media for NGOs",
        "tagline": "Grow your cause with compelling social storytelling",
        "overview": "Build a powerful social media presence for your NGO — sharing impact stories, volunteer highlights, campaign updates, and awareness content that attracts donors, volunteers, and media attention.",
        "features": [
          "Story-driven Content Creation",
          "Campaign Social Posts",
          "Volunteer Spotlights",
          "Donor Recognition Posts",
          "Awareness Day Campaigns",
          "Video/Reel Production",
          "Crowdfunding Social Drives",
          "Engagement & Community Management"
        ],
        "benefits": [
          "Build cause awareness",
          "Attract new donors through social",
          "Engage existing donor community",
          "Recruit volunteers organically",
          "Media attention through viral content"
        ],
        "process": [
          "Cause Story Development",
          "Content Strategy",
          "Content Calendar",
          "Production",
          "Scheduling",
          "Community Management",
          "Campaign Support",
          "Analytics"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Instagram API",
          "Canva Pro",
          "Video Editing",
          "Later.com",
          "Mailchimp",
          "Google Analytics",
          "Buffer"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999/mo",
            "desc": "Basic cause presence",
            "features": [
              "Instagram + Facebook",
              "12 Posts/month",
              "Basic Ads",
              "Community Management",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999/mo",
            "desc": "Active donor engagement",
            "features": [
              "20 Posts + 6 Reels",
              "Campaign Support",
              "Paid Awareness Ads",
              "Donor Recognition",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹24,999/mo",
            "desc": "Full digital cause campaign",
            "features": [
              "All Platforms",
              "Daily Stories",
              "Influencer Collaboration",
              "Video Production",
              "Media Outreach"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can social media help with fundraising?",
            "a": "Absolutely — social media is one of the most powerful fundraising channels for NGOs. We design posts that directly drive traffic to your donation page."
          }
        ],
        "caseStudies": [
          {
            "title": "WaterHope India, Rajasthan",
            "result": "Instagram awareness campaign went viral (500K+ reach); ₹8.5L raised from social donors in 2 weeks",
            "industry": "Clean Water NGO"
          }
        ]
      },
      {
        "slug": "beneficiary-management",
        "title": "Beneficiary Management System",
        "tagline": "Track and manage program beneficiaries digitally",
        "overview": "Digitize your beneficiary records — track who receives aid, what program they're enrolled in, their progress, and generate reports for donor transparency and government compliance.",
        "features": [
          "Beneficiary Registration & Profiles",
          "Program Enrollment Tracking",
          "Aid/Service Delivery Logging",
          "Progress Milestone Tracking",
          "Document Storage",
          "Geographic Distribution Map",
          "Government Report Generation",
          "Outcome Analytics"
        ],
        "benefits": [
          "Accurate beneficiary data for grants",
          "Eliminate duplicate aid distribution",
          "Transparent program tracking",
          "Government compliance support",
          "Data-driven program design"
        ],
        "process": [
          "Beneficiary Workflow Analysis",
          "System Design",
          "Module Development",
          "Mobile Data Collection",
          "Report Generation",
          "Testing",
          "Field Staff Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Google Maps",
          "Mobile PWA",
          "AWS S3",
          "PDF Generation",
          "Excel Export"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999",
            "desc": "Basic beneficiary tracker",
            "features": [
              "Beneficiary Profiles",
              "Program Enrollment",
              "Basic Reports",
              "Document Storage",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999",
            "desc": "Full beneficiary management",
            "features": [
              "Progress Tracking",
              "Geographic Maps",
              "Outcome Analytics",
              "Govt Report Formats",
              "Mobile Data Entry",
              "3 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999",
            "desc": "Enterprise impact management",
            "features": [
              "Multi-program",
              "Advanced Analytics",
              "Donor Reporting Integration",
              "Custom Reports",
              "5 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can field workers enter data on mobile devices?",
            "a": "Yes — the system includes a mobile-optimized interface for field staff to enter beneficiary data from the ground using any smartphone."
          }
        ],
        "caseStudies": [
          {
            "title": "Seva Setu, Odisha",
            "result": "Digitized 12,000+ beneficiary records; data quality improved from 60% to 97% accuracy",
            "industry": "Rural Development NGO"
          }
        ]
      }
    ]
  },
  {
    "id": "startups",
    "slug": "startups",
    "name": "Startups & Entrepreneurs",
    "tagline": "Launch, grow, and scale your startup with the right digital stack",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "description": "From MVP development to SaaS platforms, investor decks, and growth marketing — we help startups build fast, launch smart, and scale to their next funding milestone.",
    "services": [
      {
        "slug": "startup-website",
        "title": "Startup Website Development",
        "tagline": "Launch-ready startup websites that convert visitors to users",
        "overview": "Build a compelling startup website with your value proposition, product demo, team showcase, investor pitch, and lead capture — designed to convert visitors into signups and investors.",
        "features": [
          "Hero with Clear Value Proposition",
          "Product Feature Highlights",
          "Demo Video/GIF Section",
          "Founder & Team Profiles",
          "Investor Section",
          "Newsletter/Waitlist Signup",
          "Press/Media Mentions",
          "Contact & Partnership Enquiry"
        ],
        "benefits": [
          "Instant credibility for investors",
          "Capture early users on waitlist",
          "Showcase product clearly",
          "Rank on Google from day 1",
          "Professional startup brand"
        ],
        "process": [
          "Startup Story Discovery",
          "Design Sprint",
          "Development",
          "Animation & Interactions",
          "Lead Capture Setup",
          "Launch",
          "Analytics Setup",
          "Iteration"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Framer Motion",
          "Tailwind CSS",
          "Mailchimp",
          "Vercel",
          "Google Analytics 4",
          "Hotjar"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "MVP landing page",
            "features": [
              "3–5 Pages",
              "Value Proposition Hero",
              "Feature List",
              "Waitlist Form",
              "Mobile Responsive",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Full startup website",
            "features": [
              "10 Pages",
              "Product Demo Section",
              "Team Profiles",
              "Investor Section",
              "Blog",
              "Animations",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Premium startup brand",
            "features": [
              "Custom Animations",
              "Micro-interactions",
              "Investor Portal",
              "Press Kit",
              "A/B Testing Ready",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can we update the website ourselves as we grow?",
            "a": "Yes — we set up a CMS so your team can update content, add blog posts, and update team profiles without any technical knowledge."
          }
        ],
        "caseStudies": [
          {
            "title": "Finova, Bangalore",
            "result": "Waitlist of 3,000+ users captured before product launch; featured in startup media",
            "industry": "Fintech Startup"
          }
        ]
      },
      {
        "slug": "mvp-development",
        "title": "MVP Development",
        "tagline": "Build and launch your Minimum Viable Product in 6–12 weeks",
        "overview": "Turn your startup idea into a working product fast. We build focused MVPs with core features that validate your hypothesis, attract early users, and impress investors — without overbuilding.",
        "features": [
          "Core Feature Development",
          "User Authentication",
          "Database & API Architecture",
          "Admin Dashboard",
          "Analytics Integration",
          "Payment Integration (if needed)",
          "Mobile Responsive",
          "Deployment & DevOps"
        ],
        "benefits": [
          "Launch fast before competition",
          "Validate with real users",
          "Investor-ready product demo",
          "Cost-efficient early stage",
          "Iterate based on real feedback"
        ],
        "process": [
          "Feature Prioritization Workshop",
          "Architecture Design",
          "Sprint-based Development",
          "User Testing",
          "Feedback Integration",
          "Launch Preparation",
          "Deployment",
          "Post-launch Support"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL/MongoDB",
          "Vercel",
          "AWS",
          "Stripe",
          "Firebase"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Simple MVP (Web)",
            "features": [
              "Web App",
              "Core Feature Set",
              "Auth + Database",
              "Admin Dashboard",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹89,999",
            "desc": "Full-featured MVP",
            "features": [
              "Web + Mobile Responsive",
              "Payment Integration",
              "Analytics",
              "Admin + User Dashboards",
              "API Architecture",
              "8 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Investor-grade MVP",
            "features": [
              "Web + Mobile App",
              "Scalable Architecture",
              "Advanced Analytics",
              "CI/CD Pipeline",
              "12 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "What exactly is an MVP?",
            "a": "An MVP (Minimum Viable Product) is a working version of your product with just enough core features to attract early users and validate your business idea before full-scale investment."
          },
          {
            "q": "How do we decide what features to include?",
            "a": "We run a feature prioritization workshop to identify your core value proposition and the minimum features needed to validate it — keeping scope lean and focused."
          }
        ],
        "caseStudies": [
          {
            "title": "TaskFlow SaaS, Hyderabad",
            "result": "MVP launched in 7 weeks; 200 beta users onboarded; raised pre-seed round within 3 months",
            "industry": "B2B SaaS Startup"
          }
        ]
      },
      {
        "slug": "saas-product-development",
        "title": "SaaS Product Development",
        "tagline": "Build a scalable, multi-tenant SaaS product",
        "overview": "We build production-ready SaaS platforms with multi-tenancy, subscription billing, onboarding flows, usage analytics, and enterprise security — ready to scale to thousands of users.",
        "features": [
          "Multi-tenant Architecture",
          "Subscription Billing (Stripe)",
          "User Onboarding Flows",
          "Role-based Access Control",
          "Usage Analytics & Metering",
          "API & Webhook System",
          "Admin Super Dashboard",
          "Enterprise Security (SSO, 2FA)"
        ],
        "benefits": [
          "Recurring revenue business model",
          "Scalable to enterprise clients",
          "Self-serve customer onboarding",
          "Clear usage visibility",
          "Enterprise-ready security"
        ],
        "process": [
          "SaaS Architecture Design",
          "Multi-tenant Setup",
          "Auth & Billing",
          "Core Feature Development",
          "Onboarding Flows",
          "Analytics",
          "Security Hardening",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Redis",
          "AWS",
          "Auth0",
          "Segment Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹74,999",
            "desc": "Basic SaaS (single tier)",
            "features": [
              "Single-tenant Architecture",
              "Core Features",
              "Stripe Billing",
              "Admin Dashboard",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹1,49,999",
            "desc": "Full multi-tenant SaaS",
            "features": [
              "Multi-tenant",
              "Subscription Plans",
              "Onboarding Flows",
              "Analytics",
              "API System",
              "12 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹2,49,999",
            "desc": "Enterprise SaaS platform",
            "features": [
              "SSO/2FA",
              "Usage Metering",
              "Webhooks",
              "White-label Option",
              "DevOps Setup",
              "18 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "What is multi-tenancy?",
            "a": "Multi-tenancy means multiple customers (tenants) share the same application but their data is completely isolated — each client gets their own secure workspace."
          }
        ],
        "caseStudies": [
          {
            "title": "InvoiceX, Mumbai",
            "result": "SaaS launched; 500 paying subscribers in 6 months; currently processing ₹2Cr+ in monthly invoices",
            "industry": "Invoicing SaaS"
          }
        ]
      },
      {
        "slug": "crm-development",
        "title": "CRM Development",
        "tagline": "A CRM built exactly for your sales process",
        "overview": "Off-the-shelf CRMs like Salesforce or HubSpot are expensive and rigid. We build custom CRMs tailored to your exact sales workflow, industry terminology, and reporting needs — at a fraction of the cost.",
        "features": [
          "Custom Sales Pipeline",
          "Contact & Company Management",
          "Task & Follow-up Automation",
          "Email & WhatsApp Integration",
          "Custom Reporting & Analytics",
          "Role-based Access",
          "Mobile CRM App",
          "Third-party Integrations"
        ],
        "benefits": [
          "Fits your exact workflow",
          "No monthly per-user license fees",
          "Industry-specific terminology",
          "Custom reports for your KPIs",
          "Full ownership"
        ],
        "process": [
          "Sales Process Mapping",
          "CRM Architecture",
          "Pipeline Configuration",
          "Integration Setup",
          "Reporting Design",
          "Testing",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "WhatsApp API",
          "SendGrid",
          "Twilio",
          "Zapier",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic custom CRM",
            "features": [
              "Up to 5 Users",
              "Pipeline",
              "Contact Management",
              "Basic Reports",
              "Email Integration",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹44,999",
            "desc": "Full custom CRM",
            "features": [
              "Up to 25 Users",
              "WhatsApp Integration",
              "Automation Rules",
              "Custom Reports",
              "Mobile App",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise CRM platform",
            "features": [
              "Unlimited Users",
              "Multi-branch",
              "Advanced Analytics",
              "Full API Ecosystem",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Why build a custom CRM instead of using Salesforce?",
            "a": "Salesforce can cost ₹5,000–₹20,000 per user per month. A custom CRM costs a one-time development fee with no recurring per-user charges, and fits your workflow perfectly."
          }
        ],
        "caseStudies": [
          {
            "title": "AutoDeal Network, Delhi",
            "result": "Replaced Salesforce; saved ₹18L per year in licensing; custom deal workflow improved conversion by 28%",
            "industry": "Auto Dealership Chain"
          }
        ]
      },
      {
        "slug": "mobile-app-development",
        "title": "Mobile App Development",
        "tagline": "Build and ship your startup app on Android & iOS fast",
        "overview": "From consumer apps to B2B tools, we build startup mobile apps with clean UX, fast performance, scalable backends, and app store optimization to get early adopters fast.",
        "features": [
          "React Native/Flutter Development",
          "Backend API Development",
          "User Auth & Profiles",
          "Push Notifications",
          "Analytics & Crash Reporting",
          "App Store Optimization",
          "In-app Purchases",
          "Social Login"
        ],
        "benefits": [
          "Reach users on mobile first",
          "App store organic discovery",
          "Higher engagement vs. web",
          "In-app monetization",
          "Rapid iteration possible"
        ],
        "process": [
          "App Strategy & Scope",
          "UI/UX Design",
          "Development",
          "Backend API",
          "App Store Setup",
          "QA Testing",
          "Beta Release",
          "Public Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Node.js",
          "Firebase",
          "MongoDB",
          "Stripe",
          "FCM",
          "Google Analytics"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹59,999",
            "desc": "MVP mobile app (Android)",
            "features": [
              "Android App",
              "Core Features",
              "Firebase Backend",
              "Push Notifications",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹99,999",
            "desc": "Full startup mobile app",
            "features": [
              "Android + iOS",
              "Custom Backend",
              "Analytics",
              "In-app Purchases",
              "Social Login",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,69,999",
            "desc": "Enterprise-grade startup app",
            "features": [
              "All Platforms",
              "Scalable Architecture",
              "Advanced Analytics",
              "CI/CD",
              "ASO Optimization",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Should we build for Android or iOS first?",
            "a": "For Indian markets, Android covers ~95% of users. We recommend starting Android-only for MVP, then adding iOS once validated."
          }
        ],
        "caseStudies": [
          {
            "title": "NutriAI, Delhi",
            "result": "App launched on Android; 15,000 downloads in first month; featured on Google Play Store",
            "industry": "Health Tech Startup"
          }
        ]
      },
      {
        "slug": "ai-integration-services",
        "title": "AI Integration Services",
        "tagline": "Build intelligent features powered by AI into your product",
        "overview": "Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.",
        "features": [
          "AI Chatbot Development",
          "Recommendation Engine",
          "Document OCR & Processing",
          "Predictive Analytics",
          "Image Recognition",
          "Natural Language Processing",
          "OpenAI API Integration",
          "Custom ML Model Training"
        ],
        "benefits": [
          "Automate repetitive tasks",
          "Personalize user experiences",
          "Extract insights from data",
          "Competitive AI advantage",
          "Reduce operational costs"
        ],
        "process": [
          "AI Use Case Analysis",
          "Data Assessment",
          "Model Selection/Training",
          "Integration Development",
          "Testing & Validation",
          "Deployment",
          "Monitoring",
          "Iteration"
        ],
        "technologies": [
          "OpenAI API",
          "LangChain",
          "Python",
          "TensorFlow",
          "PyTorch",
          "FastAPI",
          "AWS SageMaker",
          "Google Vertex AI"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹29,999",
            "desc": "Basic AI feature integration",
            "features": [
              "Chatbot or 1 AI Feature",
              "OpenAI Integration",
              "Basic Training",
              "API Endpoint",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹74,999",
            "desc": "Custom AI module",
            "features": [
              "Custom AI Feature",
              "Data Pipeline",
              "Model Fine-tuning",
              "Dashboard",
              "API + Documentation",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Enterprise AI platform",
            "features": [
              "Multiple AI Features",
              "Custom ML Models",
              "Real-time Inference",
              "MLOps Pipeline",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can you build a chatbot for our website?",
            "a": "Yes — from simple FAQ chatbots to advanced AI assistants powered by OpenAI GPT that understand your business context and handle complex queries."
          }
        ],
        "caseStudies": [
          {
            "title": "InsureBot, Mumbai",
            "result": "AI chatbot handles 70% of customer queries automatically; customer service cost reduced by 55%",
            "industry": "Insurance Tech"
          }
        ]
      },
      {
        "slug": "cloud-solutions",
        "title": "Cloud Solutions",
        "tagline": "Scalable cloud infrastructure for your digital business",
        "overview": "Migrate to the cloud, optimize your infrastructure, set up CI/CD pipelines, and ensure 99.9% uptime — with expert DevOps engineering on AWS, GCP, or Azure.",
        "features": [
          "Cloud Migration (AWS/GCP/Azure)",
          "CI/CD Pipeline Setup",
          "Docker & Kubernetes",
          "Auto-scaling Architecture",
          "Database Optimization",
          "Security & Compliance",
          "Monitoring & Alerting",
          "Cost Optimization"
        ],
        "benefits": [
          "99.9%+ uptime guarantee",
          "Auto-scale with traffic",
          "Reduce infrastructure costs by 30%",
          "Faster deployment cycles",
          "Enterprise security standards"
        ],
        "process": [
          "Infrastructure Audit",
          "Architecture Design",
          "Migration Planning",
          "Cloud Setup",
          "CI/CD Implementation",
          "Security Hardening",
          "Monitoring Setup",
          "Handover"
        ],
        "technologies": [
          "AWS",
          "Google Cloud",
          "Azure",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Terraform",
          "Prometheus/Grafana"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic cloud setup",
            "features": [
              "Cloud Server Setup",
              "Domain + SSL",
              "Basic CI/CD",
              "Backup Config",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full cloud architecture",
            "features": [
              "Multi-server Setup",
              "CI/CD Pipeline",
              "Auto-scaling",
              "Monitoring",
              "Security Hardening",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise cloud platform",
            "features": [
              "Kubernetes Cluster",
              "Multi-region",
              "DR Setup",
              "Cost Optimization",
              "On-call Support",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Which cloud provider should we use?",
            "a": "AWS is our default recommendation for most businesses due to its reliability and feature set. We can advise the best choice based on your specific tech stack and budget."
          }
        ],
        "caseStudies": [
          {
            "title": "PaySwift, Bangalore",
            "result": "Handled 50x traffic spike during product launch with zero downtime on AWS auto-scaling setup",
            "industry": "Payments Startup"
          }
        ]
      },
      {
        "slug": "branding-services",
        "title": "Branding Services",
        "tagline": "Build a memorable and high-converting brand identity",
        "overview": "Complete brand identity design for startups — from logo and color palette to brand guidelines, pitch decks, and marketing collateral.",
        "features": [
          "Logo Design & Variants",
          "Brand Guidelines (Colors, Fonts)",
          "Investor Pitch Deck Template",
          "Business Cards & Letterheads",
          "Social Media Templates",
          "Website Brand Guidelines"
        ],
        "benefits": [
          "Establish visual credibility instantly",
          "Attract investors with professional design",
          "Maintain consistent brand presence",
          "Save time with reuseable templates",
          "Stand out from competitors"
        ],
        "process": [
          "Brand discovery session",
          "Visual research",
          "Logo design concepts",
          "Identity guidelines",
          "Pitch deck and collateral build",
          "Final asset packaging"
        ],
        "technologies": [
          "Figma",
          "Adobe Illustrator",
          "Photoshop",
          "InDesign"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹12,999",
            "desc": "Core brand identity package",
            "features": [
              "Logo Design",
              "Basic Color Palette",
              "Typography Guide",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹24,999",
            "desc": "Complete identity & pitch deck",
            "features": [
              "All Silver features",
              "Brand Guidelines Book",
              "Pitch Deck Template",
              "Business Cards",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹44,999",
            "desc": "Full corporate brand system",
            "features": [
              "All Gold features",
              "Social Media Templates",
              "Letterhead & Invoice design",
              "Stationery Pack",
              "3 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do I get full ownership of the brand assets?",
            "a": "Yes, full copyrights and vector source files are transferred to you upon project sign-off."
          }
        ]
      },
      {
        "slug": "seo-services",
        "title": "SEO Services",
        "tagline": "Rank higher on Google and drive sustainable organic growth",
        "overview": "A comprehensive SEO and content strategy that targets your ideal customers through Google search, builds your domain authority, and generates consistent organic leads month after month.",
        "features": [
          "Full SEO Audit",
          "Keyword Research & Strategy",
          "On-page & Technical SEO",
          "Content Strategy & Writing",
          "Link Building",
          "Google Business Profile",
          "Analytics & Reporting",
          "Competitor Analysis"
        ],
        "benefits": [
          "Sustainable organic traffic growth",
          "Reduce paid ad dependency over time",
          "Build domain authority",
          "Attract high-intent customers",
          "Long-term compounding returns"
        ],
        "process": [
          "SEO Audit",
          "Keyword Mapping",
          "Technical Fixes",
          "Content Planning",
          "On-page Optimization",
          "Link Building",
          "Content Production",
          "Monthly Reports"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
          "Yoast",
          "WordPress",
          "Google Analytics 4",
          "BrightLocal"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999/mo",
            "desc": "Basic SEO foundation",
            "features": [
              "15 Keywords",
              "On-page Optimization",
              "GMB Setup",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999/mo",
            "desc": "Active SEO growth",
            "features": [
              "30 Keywords",
              "Technical SEO",
              "Content (3/mo)",
              "Backlinks (8/mo)",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹29,999/mo",
            "desc": "SEO market domination",
            "features": [
              "60+ Keywords",
              "Content (8/mo)",
              "Backlinks (20/mo)",
              "Schema Markup",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long before we see SEO results?",
            "a": "Initial improvements in 2–3 months; significant organic traffic growth typically in 4–8 months. SEO is a long-term investment with compounding returns."
          }
        ],
        "caseStudies": [
          {
            "title": "ClearDeals India, Chennai",
            "result": "Organic traffic grew from 500 to 45,000 monthly visitors in 9 months",
            "industry": "Deals & Comparison Website"
          }
        ]
      },
      {
        "slug": "digital-marketing",
        "title": "Digital Marketing",
        "tagline": "Complete digital marketing for any business type",
        "overview": "From brand awareness to lead generation and customer retention — our full-service digital marketing team manages your SEO, social media, paid ads, email marketing, and content strategy.",
        "features": [
          "SEO Strategy & Execution",
          "Social Media Management",
          "Google & Meta Paid Ads",
          "Email Marketing",
          "Content Marketing",
          "WhatsApp Marketing",
          "Analytics & Reporting",
          "Brand Strategy"
        ],
        "benefits": [
          "Integrated multi-channel marketing",
          "Single team for all channels",
          "Data-driven decisions",
          "Consistent brand voice",
          "Measurable ROI"
        ],
        "process": [
          "Digital Audit",
          "Channel Strategy",
          "Content Calendar",
          "Campaign Launch",
          "Optimization Cycles",
          "Monthly Reporting",
          "Quarterly Strategy Review",
          "Scaling"
        ],
        "technologies": [
          "Google Ads",
          "Meta Ads",
          "SEMrush",
          "Ahrefs",
          "Mailchimp",
          "WhatsApp API",
          "Canva Pro",
          "Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999/mo",
            "desc": "Basic digital presence",
            "features": [
              "Social Media (2 platforms)",
              "15 Posts/month",
              "GMB Management",
              "SEO Basics",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999/mo",
            "desc": "Active growth marketing",
            "features": [
              "All Social + Google Ads",
              "25 Posts + 6 Reels",
              "SEO (25 keywords)",
              "Email Campaign/mo",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999/mo",
            "desc": "Full-stack digital domination",
            "features": [
              "All Channels",
              "Daily Content",
              "YouTube Ads",
              "WhatsApp Automation",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you manage ad spend on top of your fee?",
            "a": "Our management fee is separate from the ad spend budget. We recommend a minimum ad budget of ₹10,000–₹20,000/month for meaningful results."
          }
        ],
        "caseStudies": [
          {
            "title": "TechGadgets India, Bengaluru",
            "result": "400% increase in online revenue over 12 months with integrated digital marketing",
            "industry": "Consumer Electronics"
          }
        ]
      },
      {
        "slug": "growth-consulting",
        "title": "Growth Consulting",
        "tagline": "Data-driven growth strategies to scale user acquisition",
        "overview": "Work with a dedicated growth consultant to analyze your funnel, design product-led growth loops, run acquisition experiments, and optimize conversion rates.",
        "features": [
          "Funnel & Conversion Audit",
          "North Star Metric Setup",
          "Viral Referral Loops Design",
          "Product-Led Growth (PLG) Strategy",
          "User Retention Analysis",
          "Weekly Growth Sprints",
          "Analytics Dashboard Setup"
        ],
        "benefits": [
          "Unlock high-conversion acquisition channels",
          "Optimize cost per acquisition (CAC)",
          "Build long-term user retention mechanisms",
          "Structure growth engineering sprints",
          "Make growth data-driven and transparent"
        ],
        "process": [
          "Funnel analysis",
          "Hypothesis formulation",
          "Experiment roadmap design",
          "Sprints execution",
          "Data instrumentation & tracking",
          "Weekly funnel reviews"
        ],
        "technologies": [
          "Mixpanel",
          "Amplitude",
          "Google Analytics 4",
          "Hotjar",
          "Zapier"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999/mo",
            "desc": "Growth roadmap & advising",
            "features": [
              "Weekly 1-on-1 Consulting",
              "Funnel Optimization Roadmap",
              "Basic Analytics Setup",
              "Cancel anytime"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹39,999/mo",
            "desc": "Active growth sprints execution",
            "features": [
              "All Silver features",
              "PLG loops setup",
              "2 A/B tests per month",
              "Mixpanel dashboard setup",
              "Cancel anytime"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹69,999/mo",
            "desc": "Dedicated growth team integration",
            "features": [
              "All Gold features",
              "Daily Slack coordination",
              "Unlimited experiments execution",
              "Custom tracking SDK build",
              "Weekly funnel reviews"
            ]
          }
        ],
        "faqs": [
          {
            "q": "What is growth consulting?",
            "a": "Growth consulting is a hands-on methodology to build viral growth mechanisms and optimize user conversion funnels rather than just buying paid traffic."
          }
        ]
      }
    ]
  },
  {
    "id": "other",
    "slug": "other",
    "name": "More Industries",
    "tagline": "Custom digital solutions for every type of business",
    "color": "#1e293b",
    "bgColor": "#f8fafc",
    "description": "Whatever your business, we have the digital expertise to help you grow. From custom web development to AI solutions and enterprise software, we build what you need.",
    "services": [
      {
        "slug": "custom-web-development",
        "title": "Custom Web Development",
        "tagline": "Bespoke web applications built for your exact requirements",
        "overview": "When off-the-shelf solutions don't fit, we build custom web applications — portals, platforms, tools, and systems — engineered precisely for your business logic and workflow.",
        "features": [
          "Custom Architecture Design",
          "Frontend & Backend Development",
          "API Development & Integration",
          "Database Design",
          "Admin & User Dashboards",
          "Third-party Integration",
          "Security & Performance",
          "DevOps & Deployment"
        ],
        "benefits": [
          "Exact fit for your business process",
          "No recurring software license fees",
          "Full ownership of code and data",
          "Scalable as you grow",
          "Competitive differentiation"
        ],
        "process": [
          "Requirements Discovery",
          "Technical Architecture",
          "UI/UX Design",
          "Agile Development",
          "API Integration",
          "Testing & QA",
          "Deployment",
          "Post-launch Support"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Python/Django",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Docker"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹29,999",
            "desc": "Simple web tool/portal",
            "features": [
              "Core Features",
              "User + Admin Dashboard",
              "Database + API",
              "Mobile Responsive",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹74,999",
            "desc": "Medium complexity web app",
            "features": [
              "Advanced Features",
              "Third-party Integrations",
              "Custom Workflows",
              "Analytics",
              "8 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999+",
            "desc": "Enterprise web platform",
            "features": [
              "Full Custom Platform",
              "Microservices Architecture",
              "DevOps Pipeline",
              "Security Audit",
              "12+ Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you provide source code after development?",
            "a": "Yes — full source code with documentation is delivered to you upon project completion. You own everything."
          }
        ],
        "caseStudies": [
          {
            "title": "LogiTrack Platform, Kolkata",
            "result": "Custom logistics management platform built; handling ₹50Cr+ in shipments annually",
            "industry": "Logistics Tech"
          }
        ]
      },
      {
        "slug": "custom-mobile-app",
        "title": "Custom Mobile App Development",
        "tagline": "Android & iOS apps built precisely for your business",
        "overview": "From simple utility apps to complex platform applications, we build custom mobile apps that solve real business problems — with clean UX, reliable backends, and app store publishing.",
        "features": [
          "Android & iOS Development",
          "Custom UI/UX Design",
          "Backend API Development",
          "Third-party SDK Integration",
          "Push Notification System",
          "Offline Mode Support",
          "Analytics & Crash Reporting",
          "App Store Submission"
        ],
        "benefits": [
          "Mobile-first customer experience",
          "Higher engagement than web",
          "Platform-specific capabilities",
          "App store organic discovery",
          "Full custom functionality"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Development Sprints",
          "Backend Setup",
          "Integration & Testing",
          "Beta Release",
          "App Store Submission",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Swift",
          "Kotlin",
          "Node.js",
          "Firebase",
          "AWS",
          "MongoDB"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "Android-only MVP app",
            "features": [
              "Android App",
              "Core Features",
              "Firebase Backend",
              "Basic Analytics",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹89,999",
            "desc": "Cross-platform mobile app",
            "features": [
              "Android + iOS",
              "Custom Backend",
              "Payment Integration",
              "Advanced Features",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Enterprise mobile platform",
            "features": [
              "All Platforms",
              "Scalable Backend",
              "CI/CD Pipeline",
              "Security Audit",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Flutter or React Native — which is better?",
            "a": "Both are excellent for cross-platform apps. Flutter gives more performance and custom UI fidelity; React Native has a larger ecosystem. We recommend Flutter for most projects."
          }
        ],
        "caseStudies": [
          {
            "title": "ServiceDesk App, Jaipur",
            "result": "Custom service management app built; 5,000+ active users across 3 cities within 4 months",
            "industry": "Field Service Management"
          }
        ]
      },
      {
        "slug": "ai-ml-solutions",
        "title": "AI & Machine Learning Solutions",
        "tagline": "Build intelligent features powered by AI into your product",
        "overview": "Add AI capabilities to your business — chatbots, recommendation engines, document processing, predictive analytics, image recognition, and NLP — built with the latest AI APIs and custom models.",
        "features": [
          "AI Chatbot Development",
          "Recommendation Engine",
          "Document OCR & Processing",
          "Predictive Analytics",
          "Image Recognition",
          "Natural Language Processing",
          "OpenAI API Integration",
          "Custom ML Model Training"
        ],
        "benefits": [
          "Automate repetitive tasks",
          "Personalize user experiences",
          "Extract insights from data",
          "Competitive AI advantage",
          "Reduce operational costs"
        ],
        "process": [
          "AI Use Case Analysis",
          "Data Assessment",
          "Model Selection/Training",
          "Integration Development",
          "Testing & Validation",
          "Deployment",
          "Monitoring",
          "Iteration"
        ],
        "technologies": [
          "OpenAI API",
          "LangChain",
          "Python",
          "TensorFlow",
          "PyTorch",
          "FastAPI",
          "AWS SageMaker",
          "Google Vertex AI"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹29,999",
            "desc": "Basic AI feature integration",
            "features": [
              "Chatbot or 1 AI Feature",
              "OpenAI Integration",
              "Basic Training",
              "API Endpoint",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹74,999",
            "desc": "Custom AI module",
            "features": [
              "Custom AI Feature",
              "Data Pipeline",
              "Model Fine-tuning",
              "Dashboard",
              "API + Documentation",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹1,49,999",
            "desc": "Enterprise AI platform",
            "features": [
              "Multiple AI Features",
              "Custom ML Models",
              "Real-time Inference",
              "MLOps Pipeline",
              "8 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can you build a chatbot for our website?",
            "a": "Yes — from simple FAQ chatbots to advanced AI assistants powered by OpenAI GPT that understand your business context and handle complex queries."
          }
        ],
        "caseStudies": [
          {
            "title": "InsureBot, Mumbai",
            "result": "AI chatbot handles 70% of customer queries automatically; customer service cost reduced by 55%",
            "industry": "Insurance Tech"
          }
        ]
      },
      {
        "slug": "crm-development",
        "title": "Custom CRM Development",
        "tagline": "A CRM built exactly for your sales process",
        "overview": "Off-the-shelf CRMs like Salesforce or HubSpot are expensive and rigid. We build custom CRMs tailored to your exact sales workflow, industry terminology, and reporting needs — at a fraction of the cost.",
        "features": [
          "Custom Sales Pipeline",
          "Contact & Company Management",
          "Task & Follow-up Automation",
          "Email & WhatsApp Integration",
          "Custom Reporting & Analytics",
          "Role-based Access",
          "Mobile CRM App",
          "Third-party Integrations"
        ],
        "benefits": [
          "Fits your exact workflow",
          "No monthly per-user license fees",
          "Industry-specific terminology",
          "Custom reports for your KPIs",
          "Full ownership"
        ],
        "process": [
          "Sales Process Mapping",
          "CRM Architecture",
          "Pipeline Configuration",
          "Integration Setup",
          "Reporting Design",
          "Testing",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "WhatsApp API",
          "SendGrid",
          "Twilio",
          "Zapier",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹19,999",
            "desc": "Basic custom CRM",
            "features": [
              "Up to 5 Users",
              "Pipeline",
              "Contact Management",
              "Basic Reports",
              "Email Integration",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹44,999",
            "desc": "Full custom CRM",
            "features": [
              "Up to 25 Users",
              "WhatsApp Integration",
              "Automation Rules",
              "Custom Reports",
              "Mobile App",
              "4 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise CRM platform",
            "features": [
              "Unlimited Users",
              "Multi-branch",
              "Advanced Analytics",
              "Full API Ecosystem",
              "6 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Why build a custom CRM instead of using Salesforce?",
            "a": "Salesforce can cost ₹5,000–₹20,000 per user per month. A custom CRM costs a one-time development fee with no recurring per-user charges, and fits your workflow perfectly."
          }
        ],
        "caseStudies": [
          {
            "title": "AutoDeal Network, Delhi",
            "result": "Replaced Salesforce; saved ₹18L per year in licensing; custom deal workflow improved conversion by 28%",
            "industry": "Auto Dealership Chain"
          }
        ]
      },
      {
        "slug": "digital-marketing",
        "title": "Full-Service Digital Marketing",
        "tagline": "Complete digital marketing for any business type",
        "overview": "From brand awareness to lead generation and customer retention — our full-service digital marketing team manages your SEO, social media, paid ads, email marketing, and content strategy.",
        "features": [
          "SEO Strategy & Execution",
          "Social Media Management",
          "Google & Meta Paid Ads",
          "Email Marketing",
          "Content Marketing",
          "WhatsApp Marketing",
          "Analytics & Reporting",
          "Brand Strategy"
        ],
        "benefits": [
          "Integrated multi-channel marketing",
          "Single team for all channels",
          "Data-driven decisions",
          "Consistent brand voice",
          "Measurable ROI"
        ],
        "process": [
          "Digital Audit",
          "Channel Strategy",
          "Content Calendar",
          "Campaign Launch",
          "Optimization Cycles",
          "Monthly Reporting",
          "Quarterly Strategy Review",
          "Scaling"
        ],
        "technologies": [
          "Google Ads",
          "Meta Ads",
          "SEMrush",
          "Ahrefs",
          "Mailchimp",
          "WhatsApp API",
          "Canva Pro",
          "Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹14,999/mo",
            "desc": "Basic digital presence",
            "features": [
              "Social Media (2 platforms)",
              "15 Posts/month",
              "GMB Management",
              "SEO Basics",
              "Monthly Report"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹29,999/mo",
            "desc": "Active growth marketing",
            "features": [
              "All Social + Google Ads",
              "25 Posts + 6 Reels",
              "SEO (25 keywords)",
              "Email Campaign/mo",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹54,999/mo",
            "desc": "Full-stack digital domination",
            "features": [
              "All Channels",
              "Daily Content",
              "YouTube Ads",
              "WhatsApp Automation",
              "Weekly Strategy Calls"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Do you manage ad spend on top of your fee?",
            "a": "Our management fee is separate from the ad spend budget. We recommend a minimum ad budget of ₹10,000–₹20,000/month for meaningful results."
          }
        ],
        "caseStudies": [
          {
            "title": "TechGadgets India, Bengaluru",
            "result": "400% increase in online revenue over 12 months with integrated digital marketing",
            "industry": "Consumer Electronics"
          }
        ]
      },
      {
        "slug": "cloud-solutions",
        "title": "Cloud Solutions & DevOps",
        "tagline": "Scalable cloud infrastructure for your digital business",
        "overview": "Migrate to the cloud, optimize your infrastructure, set up CI/CD pipelines, and ensure 99.9% uptime — with expert DevOps engineering on AWS, GCP, or Azure.",
        "features": [
          "Cloud Migration (AWS/GCP/Azure)",
          "CI/CD Pipeline Setup",
          "Docker & Kubernetes",
          "Auto-scaling Architecture",
          "Database Optimization",
          "Security & Compliance",
          "Monitoring & Alerting",
          "Cost Optimization"
        ],
        "benefits": [
          "99.9%+ uptime guarantee",
          "Auto-scale with traffic",
          "Reduce infrastructure costs by 30%",
          "Faster deployment cycles",
          "Enterprise security standards"
        ],
        "process": [
          "Infrastructure Audit",
          "Architecture Design",
          "Migration Planning",
          "Cloud Setup",
          "CI/CD Implementation",
          "Security Hardening",
          "Monitoring Setup",
          "Handover"
        ],
        "technologies": [
          "AWS",
          "Google Cloud",
          "Azure",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Terraform",
          "Prometheus/Grafana"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹24,999",
            "desc": "Basic cloud setup",
            "features": [
              "Cloud Server Setup",
              "Domain + SSL",
              "Basic CI/CD",
              "Backup Config",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹49,999",
            "desc": "Full cloud architecture",
            "features": [
              "Multi-server Setup",
              "CI/CD Pipeline",
              "Auto-scaling",
              "Monitoring",
              "Security Hardening",
              "2 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹89,999",
            "desc": "Enterprise cloud platform",
            "features": [
              "Kubernetes Cluster",
              "Multi-region",
              "DR Setup",
              "Cost Optimization",
              "On-call Support",
              "4 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Which cloud provider should we use?",
            "a": "AWS is our default recommendation for most businesses due to its reliability and feature set. We can advise the best choice based on your specific tech stack and budget."
          }
        ],
        "caseStudies": [
          {
            "title": "PaySwift, Bangalore",
            "result": "Handled 50x traffic spike during product launch with zero downtime on AWS auto-scaling setup",
            "industry": "Payments Startup"
          }
        ]
      },
      {
        "slug": "erp-solutions",
        "title": "Custom ERP Solutions",
        "tagline": "Enterprise resource planning built for your business",
        "overview": "Replace disconnected spreadsheets and tools with a unified ERP that manages your operations, finance, HR, inventory, and customer relationships in one integrated platform.",
        "features": [
          "Finance & Accounting Module",
          "HR & Payroll Management",
          "Inventory & Procurement",
          "CRM & Sales Pipeline",
          "Project Management",
          "Reporting & BI Dashboard",
          "Role-based Access",
          "API Ecosystem"
        ],
        "benefits": [
          "Single source of truth for business data",
          "Eliminate manual data reconciliation",
          "Real-time business visibility",
          "Scalable as operations grow",
          "Reduce operational costs"
        ],
        "process": [
          "Business Process Mapping",
          "ERP Architecture",
          "Module Development",
          "Integration",
          "Data Migration",
          "Staff Training",
          "Phased Rollout",
          "Post-launch Support"
        ],
        "technologies": [
          "React",
          "Python/Django",
          "PostgreSQL",
          "Celery",
          "Redis",
          "Docker",
          "AWS",
          "Power BI"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹49,999",
            "desc": "2–3 core modules",
            "features": [
              "2–3 Modules",
              "Basic Integration",
              "Reporting",
              "User Roles",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹1,24,999",
            "desc": "Full business ERP (5–7 modules)",
            "features": [
              "5–7 Modules",
              "Full Integration",
              "BI Dashboard",
              "API Ecosystem",
              "10 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹2,49,999",
            "desc": "Enterprise ERP platform",
            "features": [
              "All Modules",
              "Multi-entity",
              "Custom Reports",
              "Full DevOps",
              "16 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long does ERP implementation take?",
            "a": "Phased implementation takes 6–16 weeks. We recommend starting with the most critical 2–3 modules and expanding from there."
          }
        ],
        "caseStudies": [
          {
            "title": "PrimeTex Industries, Tirupur",
            "result": "Full ERP replaced 7 disconnected software tools; operational efficiency improved 40%",
            "industry": "Garment Manufacturing"
          }
        ]
      },
      {
        "slug": "seo-services-general",
        "title": "SEO & Content Marketing",
        "tagline": "Rank higher on Google and drive sustainable organic growth",
        "overview": "A comprehensive SEO and content strategy that targets your ideal customers through Google search, builds your domain authority, and generates consistent organic leads month after month.",
        "features": [
          "Full SEO Audit",
          "Keyword Research & Strategy",
          "On-page & Technical SEO",
          "Content Strategy & Writing",
          "Link Building",
          "Google Business Profile",
          "Analytics & Reporting",
          "Competitor Analysis"
        ],
        "benefits": [
          "Sustainable organic traffic growth",
          "Reduce paid ad dependency over time",
          "Build domain authority",
          "Attract high-intent customers",
          "Long-term compounding returns"
        ],
        "process": [
          "SEO Audit",
          "Keyword Mapping",
          "Technical Fixes",
          "Content Planning",
          "On-page Optimization",
          "Link Building",
          "Content Production",
          "Monthly Reports"
        ],
        "technologies": [
          "Google Search Console",
          "SEMrush",
          "Ahrefs",
          "Screaming Frog",
          "Yoast",
          "WordPress",
          "Google Analytics 4",
          "BrightLocal"
        ],
        "pricingPlans": [
          {
            "name": "Silver Plan",
            "price": "₹7,999/mo",
            "desc": "Basic SEO foundation",
            "features": [
              "15 Keywords",
              "On-page Optimization",
              "GMB Setup",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Gold Plan",
            "price": "₹14,999/mo",
            "desc": "Active SEO growth",
            "features": [
              "30 Keywords",
              "Technical SEO",
              "Content (3/mo)",
              "Backlinks (8/mo)",
              "Bi-weekly Reports"
            ],
            "popular": true
          },
          {
            "name": "Platinum Plan",
            "price": "₹29,999/mo",
            "desc": "SEO market domination",
            "features": [
              "60+ Keywords",
              "Content (8/mo)",
              "Backlinks (20/mo)",
              "Schema Markup",
              "No Contract"
            ]
          }
        ],
        "faqs": [
          {
            "q": "How long before we see SEO results?",
            "a": "Initial improvements in 2–3 months; significant organic traffic growth typically in 4–8 months. SEO is a long-term investment with compounding returns."
          }
        ],
        "caseStudies": [
          {
            "title": "ClearDeals India, Chennai",
            "result": "Organic traffic grew from 500 to 45,000 monthly visitors in 9 months",
            "industry": "Deals & Comparison Website"
          }
        ]
      }
    ]
  },
  {
    "id": "travel-tourism",
    "slug": "travel-tourism",
    "name": "Travel & Tourism ✈️",
    "tagline": "Digital solutions for travel agencies, tour operators & hotels",
    "color": "#0ea5e9",
    "bgColor": "#e0f2fe",
    "description": "We build comprehensive digital platforms for the travel and tourism industry — from booking engines and tour management systems to travel CRMs and marketing solutions.",
    "services": [
      {
        "slug": "travel-booking-website",
        "title": "Travel Booking Website",
        "tagline": "Custom travel booking portals for seamless customer experiences",
        "overview": "Launch a fully functional travel booking website that allows users to search, compare, and book flights, hotels, and tours seamlessly online.",
        "features": [
          "Real-time Search & Filtering",
          "Secure Payment Gateway",
          "Multi-currency Support",
          "User Accounts & Booking History",
          "Reviews & Ratings",
          "Dynamic Pricing Engine",
          "Automated Itinerary Generation",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Increase direct bookings",
          "Reduce third-party commissions",
          "Build brand loyalty",
          "Scale globally with multi-currency",
          "Automate customer support"
        ],
        "process": [
          "Discovery & Planning",
          "UI/UX Design",
          "API Integration",
          "Core Development",
          "Testing & QA",
          "Deployment",
          "Training",
          "Maintenance"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Stripe",
          "Amadeus API",
          "Google Maps API"
        ],
        "pricingPlans": [
          {
            "name": "Starter",
            "price": "₹29,999",
            "desc": "Basic booking website",
            "features": [
              "5 Pages",
              "Contact Forms",
              "Basic Search",
              "Mobile Responsive",
              "2 Weeks Delivery",
              "1 Month Support"
            ]
          },
          {
            "name": "Professional",
            "price": "₹59,999",
            "desc": "Advanced booking portal",
            "features": [
              "15 Pages",
              "Payment Integration",
              "User Accounts",
              "Reviews System",
              "SEO Setup",
              "4 Weeks Delivery",
              "3 Months Support"
            ],
            "popular": true
          },
          {
            "name": "Enterprise",
            "price": "₹99,999+",
            "desc": "Full custom OTAs",
            "features": [
              "Unlimited Pages",
              "Flight/Hotel APIs",
              "Dynamic Pricing",
              "CRM Integration",
              "Advanced Analytics",
              "8 Weeks Delivery",
              "6 Months Support"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can you integrate third-party APIs?",
            "a": "Yes, we integrate APIs like Amadeus, Sabre, and Skyscanner for flights, and various hotel aggregators."
          },
          {
            "q": "Is the website optimized for mobile?",
            "a": "Absolutely, a significant portion of travel bookings happen on mobile, so we ensure a flawless mobile experience."
          },
          {
            "q": "Can I manage bookings from an admin panel?",
            "a": "Yes, we provide a comprehensive dashboard to manage all bookings, users, and content."
          }
        ],
        "caseStudies": [
          {
            "title": "Wanderlust Travels",
            "result": "45% increase in online sales in the first quarter",
            "industry": "Travel Agency"
          },
          {
            "title": "Global Tours Inc.",
            "result": "Reduced booking processing time by 60%",
            "industry": "Tour Operator"
          }
        ]
      },
      {
        "slug": "tour-package-management",
        "title": "Tour Package Management",
        "tagline": "Streamline your tour operations and package offerings",
        "overview": "A complete system to create, manage, and sell tour packages online. Includes dynamic itinerary builders, availability calendars, and booking management.",
        "features": [
          "Dynamic Itinerary Builder",
          "Availability & Inventory Management",
          "Multi-day Tour Setup",
          "Custom Add-ons & Extras",
          "B2B & B2C Portals",
          "Automated Vouchers",
          "Supplier Management",
          "Interactive Maps"
        ],
        "benefits": [
          "Streamline tour operations",
          "Upsell with custom add-ons",
          "Manage suppliers easily",
          "Automate document generation",
          "Provide detailed itineraries"
        ],
        "process": [
          "Requirements Gathering",
          "System Architecture",
          "Backend Development",
          "Frontend Integration",
          "Data Migration",
          "Testing",
          "Launch",
          "Support"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "AWS",
          "Mapbox",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Basic",
            "price": "₹34,999",
            "desc": "Simple package management",
            "features": [
              "Up to 50 Packages",
              "Basic Itineraries",
              "Enquiry Forms",
              "Admin Dashboard",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Pro",
            "price": "₹69,999",
            "desc": "Full online booking system",
            "features": [
              "Unlimited Packages",
              "Online Booking",
              "Dynamic Pricing",
              "Supplier Portal",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Enterprise",
            "price": "₹1,19,999",
            "desc": "Custom tour operator platform",
            "features": [
              "B2B/B2C Portals",
              "API Ecosystem",
              "Custom Reports",
              "Mobile App for Guides",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can I set different prices for adults and children?",
            "a": "Yes, the dynamic pricing engine supports complex pricing rules including age, group size, and seasonality."
          }
        ],
        "caseStudies": [
          {
            "title": "Himalayan Adventures",
            "result": "Increased efficiency by 40% with automated voucher generation",
            "industry": "Adventure Tourism"
          }
        ]
      },
      {
        "slug": "hotel-booking-system",
        "title": "Hotel Booking System",
        "tagline": "Direct booking engines for hotels and resorts",
        "overview": "Empower your hotel or resort with a robust direct booking engine. Bypass OTA commissions and take control of your reservations, inventory, and guest data.",
        "features": [
          "Real-time Room Inventory",
          "Secure Online Payments",
          "Channel Manager Integration",
          "Promo Codes & Discounts",
          "Guest Management CRM",
          "Multi-property Support",
          "Housekeeping Dashboard",
          "Automated Emails"
        ],
        "benefits": [
          "Zero commission on direct bookings",
          "Complete control over guest data",
          "Increase direct revenue",
          "Seamless channel synchronization",
          "Automate front-desk tasks"
        ],
        "process": [
          "Property Analysis",
          "UI/UX Design",
          "Booking Engine Setup",
          "Channel Manager Integration",
          "Payment Setup",
          "Testing",
          "Staff Training",
          "Go Live"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Stripe",
          "SiteMinder API"
        ],
        "pricingPlans": [
          {
            "name": "Boutique",
            "price": "₹39,999",
            "desc": "Single property booking engine",
            "features": [
              "Up to 50 Rooms",
              "Direct Booking",
              "Payment Gateway",
              "Basic CRM",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Resort",
            "price": "₹79,999",
            "desc": "Full hotel management system",
            "features": [
              "Unlimited Rooms",
              "Channel Manager Sync",
              "Promo Engine",
              "Advanced CRM",
              "8 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Chain",
            "price": "₹1,49,999",
            "desc": "Multi-property enterprise solution",
            "features": [
              "Multi-Property",
              "Central Reservation",
              "Yield Management",
              "Custom ERP",
              "12 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can it sync with Booking.com and Expedia?",
            "a": "Yes, we integrate with popular channel managers like SiteMinder or Cloudbeds to ensure your inventory is synced across all platforms."
          }
        ],
        "caseStudies": [
          {
            "title": "OceanView Resort",
            "result": "Increased direct bookings by 35% and saved ₹12L in OTA commissions annually",
            "industry": "Hospitality"
          }
        ]
      },
      {
        "slug": "flight-booking-integration",
        "title": "Flight Booking Integration",
        "tagline": "Comprehensive flight search and booking APIs",
        "overview": "Integrate global flight booking capabilities into your travel platform using GDS (Global Distribution System) APIs like Amadeus, Sabre, or Travelport.",
        "features": [
          "Global Flight Search",
          "Real-time Fares & Availability",
          "Multi-city & Round Trip",
          "Seat Selection",
          "Baggage Allowances",
          "Ancillary Services",
          "Markup Management",
          "Automated Ticketing"
        ],
        "benefits": [
          "Offer comprehensive travel services",
          "Earn margins on flight bookings",
          "Seamless booking flow",
          "Real-time accurate data",
          "Automate PNR generation"
        ],
        "process": [
          "API Evaluation",
          "Architecture Design",
          "Integration Development",
          "Testing & Certification",
          "Go Live",
          "Post-launch Support"
        ],
        "technologies": [
          "Node.js",
          "React",
          "Amadeus API",
          "Sabre API",
          "Redis",
          "PostgreSQL"
        ],
        "pricingPlans": [
          {
            "name": "Integration",
            "price": "₹74,999",
            "desc": "Basic flight integration",
            "features": [
              "Single GDS API",
              "Flight Search",
              "Booking Flow",
              "Markup Management",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Advanced",
            "price": "₹1,24,999",
            "desc": "Multi-GDS integration",
            "features": [
              "Multi-GDS / LCCs",
              "Ancillary Services",
              "Advanced Filters",
              "B2B Portal",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Do I need my own IATA certification?",
            "a": "You can either use your own IATA credentials or integrate via aggregators that don't require IATA."
          }
        ],
        "caseStudies": [
          {
            "title": "FlyEasy Portal",
            "result": "Successfully launched flight booking engine with 99.9% API uptime",
            "industry": "Online Travel Agency"
          }
        ]
      },
      {
        "slug": "travel-crm",
        "title": "Travel CRM",
        "tagline": "Customer relationship management tailored for travel agents",
        "overview": "A specialized CRM designed for the travel industry to manage leads, track inquiries, build quotes, and nurture client relationships effectively.",
        "features": [
          "Lead Capture & Management",
          "Custom Itinerary Quotations",
          "Automated Follow-ups",
          "Client Booking History",
          "Supplier Database",
          "Invoice & Payment Tracking",
          "WhatsApp & Email Integration",
          "Sales Analytics"
        ],
        "benefits": [
          "Higher lead conversion rates",
          "Faster quote generation",
          "Centralized client data",
          "Better team collaboration",
          "Automated routine tasks"
        ],
        "process": [
          "Workflow Analysis",
          "CRM Configuration",
          "Data Migration",
          "Template Creation",
          "Integration Setup",
          "Team Training",
          "Deployment",
          "Support"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Starter CRM",
            "price": "₹24,999",
            "desc": "For small travel agencies",
            "features": [
              "Up to 5 Users",
              "Lead Management",
              "Basic Quotes",
              "Email Integration",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Pro CRM",
            "price": "₹54,999",
            "desc": "Advanced automation CRM",
            "features": [
              "Up to 20 Users",
              "Custom Itinerary Builder",
              "WhatsApp API",
              "Advanced Reports",
              "6 Weeks Delivery"
            ],
            "popular": true
          },
          {
            "name": "Enterprise CRM",
            "price": "₹99,999",
            "desc": "Full bespoke CRM",
            "features": [
              "Unlimited Users",
              "Supplier Portal",
              "Accounting Sync",
              "Custom App",
              "10 Weeks Delivery"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Can I send quotes directly via WhatsApp?",
            "a": "Yes, our CRM integrates directly with WhatsApp Business API for instant communication with clients."
          }
        ],
        "caseStudies": [
          {
            "title": "Destinations Unlimited",
            "result": "Reduced time to generate quotes by 70%, leading to a 25% increase in conversions",
            "industry": "Travel Agency"
          }
        ]
      },
      {
        "slug": "travel-mobile-app",
        "title": "Travel Mobile App",
        "tagline": "Your travel services in your customer's pocket",
        "overview": "Build custom iOS and Android applications for your travel business, allowing users to book, manage itineraries, and access travel guides on the go.",
        "features": [
          "Native iOS & Android Apps",
          "Offline Itinerary Access",
          "Push Notifications for Updates",
          "In-App Booking",
          "Location-Based Guides",
          "Digital Vouchers & Tickets",
          "Chat Support",
          "Multilingual Support"
        ],
        "benefits": [
          "Higher customer retention",
          "Instant communication via push",
          "Brand presence on user devices",
          "Convenient booking experience",
          "Enhanced in-destination support"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "API Development",
          "Mobile Dev Sprints",
          "Testing",
          "App Store Submission",
          "Launch"
        ],
        "technologies": [
          "Flutter",
          "React Native",
          "Firebase",
          "Node.js",
          "Google Maps API"
        ],
        "pricingPlans": [
          {
            "name": "Companion App",
            "price": "₹69,999",
            "desc": "Itinerary management app",
            "features": [
              "Offline Itineraries",
              "Digital Vouchers",
              "Push Notifications",
              "Basic Chat",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Booking App",
            "price": "₹1,29,999",
            "desc": "Full booking app",
            "features": [
              "In-App Booking",
              "Payment Gateway",
              "User Profiles",
              "Location Guides",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will the app work offline?",
            "a": "Yes, core features like itinerary viewing and digital vouchers can be cached for offline access, perfect for traveling users without data."
          }
        ],
        "caseStudies": [
          {
            "title": "ExploreMore App",
            "result": "Achieved 50,000+ downloads in the first 6 months with a 4.8 star rating",
            "industry": "Travel Tech"
          }
        ]
      },
      {
        "slug": "visa-management-system",
        "title": "Visa Management System",
        "tagline": "Streamline visa processing and application management",
        "overview": "A secure, efficient system for visa consultants and agencies to manage applications, track statuses, and communicate with clients seamlessly.",
        "features": [
          "Online Application Forms",
          "Document Upload & Verification",
          "Automated Status Updates",
          "Embassy Guidelines Database",
          "Payment Collection",
          "Client Portal",
          "Task Management",
          "Secure Data Storage"
        ],
        "benefits": [
          "Reduce manual paperwork by 80%",
          "Improve client transparency",
          "Ensure document compliance",
          "Faster processing times",
          "High data security"
        ],
        "process": [
          "Process Mapping",
          "System Design",
          "Form Digitization",
          "Portal Development",
          "Security Audit",
          "Testing",
          "Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "Stripe",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Basic Portal",
            "price": "₹34,999",
            "desc": "Simple visa management",
            "features": [
              "Online Forms",
              "Document Upload",
              "Status Tracking",
              "Email Alerts",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Advanced System",
            "price": "₹74,999",
            "desc": "Full automation system",
            "features": [
              "Client Portal",
              "WhatsApp Alerts",
              "Payment Integration",
              "Task Manager",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is applicant data secure?",
            "a": "Yes, we use industry-standard encryption and secure cloud storage to protect all sensitive applicant documents and data."
          }
        ],
        "caseStudies": [
          {
            "title": "Global Visas Consultants",
            "result": "Processed 3x more applications with the same team size through automation",
            "industry": "Visa Consultancy"
          }
        ]
      },
      {
        "slug": "tour-guide-portal",
        "title": "Tour Guide Portal",
        "tagline": "Manage and connect with your freelance tour guides",
        "overview": "A dedicated platform to manage your network of tour guides, assign tours, track availability, and handle payments efficiently.",
        "features": [
          "Guide Profiles & Specialties",
          "Availability Calendar",
          "Automated Tour Assignment",
          "GPS Tracking (Optional)",
          "In-App Messaging",
          "Rating & Review System",
          "Automated Payouts",
          "Digital Tour Manifests"
        ],
        "benefits": [
          "Eliminate scheduling conflicts",
          "Ensure high-quality experiences",
          "Streamline guide payouts",
          "Real-time communication",
          "Easy onboarding of new guides"
        ],
        "process": [
          "Requirements Analysis",
          "Platform Architecture",
          "Mobile App for Guides",
          "Admin Dashboard Dev",
          "Testing",
          "Pilot Launch",
          "Full Rollout"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "Firebase",
          "Stripe Connect"
        ],
        "pricingPlans": [
          {
            "name": "Standard Portal",
            "price": "₹49,999",
            "desc": "Core guide management",
            "features": [
              "Guide Profiles",
              "Availability Calendar",
              "Tour Assignment",
              "Admin Dashboard",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Pro Portal",
            "price": "₹94,999",
            "desc": "Advanced management with App",
            "features": [
              "Mobile App for Guides",
              "Automated Payouts",
              "In-App Chat",
              "Rating System",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can guides accept or reject tour assignments?",
            "a": "Yes, the system allows for automated requests where guides can accept or decline based on their real-time availability."
          }
        ],
        "caseStudies": [
          {
            "title": "Heritage Walks India",
            "result": "Reduced guide scheduling time by 85% and improved guide satisfaction",
            "industry": "Local Tour Operator"
          }
        ]
      },
      {
        "slug": "travel-marketing-services",
        "title": "Travel Marketing Services",
        "tagline": "Performance marketing to drive bookings and brand awareness",
        "overview": "Specialized digital marketing campaigns tailored for the travel industry. We help you reach travelers at every stage of their journey, from inspiration to booking.",
        "features": [
          "Google Ads (Search & Display)",
          "Meta Ads for Travel",
          "Social Media Management",
          "Influencer Collaborations",
          "Email Marketing Campaigns",
          "Retargeting Strategies",
          "Conversion Rate Optimization",
          "ROI Analytics"
        ],
        "benefits": [
          "Lower Cost Per Acquisition (CPA)",
          "Higher ROI on ad spend",
          "Engaging brand presence",
          "Targeted audience reach",
          "Data-driven campaign scaling"
        ],
        "process": [
          "Market Audit",
          "Strategy Formulation",
          "Ad Creative Design",
          "Campaign Setup",
          "Launch & Monitor",
          "A/B Testing",
          "Optimization",
          "Monthly Reporting"
        ],
        "technologies": [
          "Google Ads",
          "Meta Ads Manager",
          "Google Analytics 4",
          "Mailchimp",
          "Canva",
          "Looker Studio"
        ],
        "pricingPlans": [
          {
            "name": "Social Growth",
            "price": "₹19,999/mo",
            "desc": "Build brand awareness",
            "features": [
              "Social Media Mgt",
              "15 Posts/mo",
              "Basic Meta Ads",
              "Monthly Report",
              "3-month minimum"
            ]
          },
          {
            "name": "Performance Pro",
            "price": "₹39,999/mo",
            "desc": "Drive direct bookings",
            "features": [
              "Google + Meta Ads",
              "Social Media Mgt",
              "Email Campaigns",
              "Bi-weekly Reports",
              "Retargeting"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Do you guarantee bookings?",
            "a": "While we can't guarantee specific numbers, our data-driven approach consistently lowers CPA and increases the volume of qualified leads and bookings over time."
          }
        ],
        "caseStudies": [
          {
            "title": "Bali Escapes",
            "result": "Achieved a 5x ROAS (Return on Ad Spend) for their luxury villa campaigns within 3 months",
            "industry": "Luxury Travel"
          }
        ]
      },
      {
        "slug": "seo-for-travel-business",
        "title": "SEO for Travel Business",
        "tagline": "Dominate search results for destinations and travel keywords",
        "overview": "A targeted SEO strategy to help your travel agency, hotel, or tour company rank high on Google for high-intent travel keywords and destination searches.",
        "features": [
          "Travel Keyword Research",
          "Destination Page Optimization",
          "Local SEO & GMB Optimization",
          "Travel Blog Content Creation",
          "High-Quality Backlink Building",
          "Technical Site Speed Optimization",
          "Schema Markup for Tours/Events",
          "Competitor Analysis"
        ],
        "benefits": [
          "Increase organic traffic",
          "Capture high-intent travelers",
          "Build destination authority",
          "Reduce reliance on OTAs",
          "Long-term sustainable growth"
        ],
        "process": [
          "SEO Audit",
          "Keyword Strategy",
          "On-Page Optimization",
          "Content Creation",
          "Link Building Outreach",
          "Technical Fixes",
          "Tracking Setup",
          "Monthly Review"
        ],
        "technologies": [
          "Ahrefs",
          "SEMrush",
          "Google Search Console",
          "WordPress",
          "Yoast SEO",
          "PageSpeed Insights"
        ],
        "pricingPlans": [
          {
            "name": "Destination SEO",
            "price": "₹14,999/mo",
            "desc": "Focus on core offerings",
            "features": [
              "20 Target Keywords",
              "On-page SEO",
              "2 Blog Posts/mo",
              "GMB Management",
              "Monthly Reports"
            ]
          },
          {
            "name": "Travel Authority",
            "price": "₹29,999/mo",
            "desc": "Aggressive growth plan",
            "features": [
              "50 Target Keywords",
              "Technical SEO",
              "4 Blog Posts/mo",
              "Link Building",
              "Schema Markup"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Why is travel SEO different?",
            "a": "Travel SEO requires a strong focus on destination-specific content, local search intent, and rich snippets (schema markup) to compete effectively against large OTAs."
          }
        ],
        "caseStudies": [
          {
            "title": "Kerala Tour Experts",
            "result": "Ranked on page 1 for \"Best Kerala Tour Packages\" resulting in a 150% increase in organic leads",
            "industry": "Tour Operator"
          }
        ]
      }
    ]
  },
  {
    "id": "law-firms-advocates",
    "slug": "law-firms-advocates",
    "name": "Law Firms & Advocates ⚖️",
    "tagline": "Legal portals, case tracking & professional firm marketing",
    "color": "#4b5563",
    "bgColor": "#f3f4f6",
    "description": "We build comprehensive digital solutions for law firms and independent advocates — from professional websites and case management systems to legal CRMs and specialized SEO.",
    "services": [
      {
        "slug": "law-firm-website-development",
        "title": "Law Firm Website Development",
        "tagline": "Professional websites that establish legal authority",
        "overview": "A highly professional, secure, and fast-loading website designed specifically for law firms to showcase practice areas, attorney profiles, and generate client leads.",
        "features": [
          "Practice Area Showcases",
          "Attorney Directory & Profiles",
          "Secure Client Portal",
          "Lead Generation Forms",
          "Blog & Legal Insights",
          "Mobile-Responsive Design",
          "Accessibility Compliance",
          "Fast Loading Speeds"
        ],
        "benefits": [
          "Establish trust and authority",
          "Generate qualified legal leads",
          "Showcase firm expertise",
          "Improve client communication",
          "Mobile-friendly for all users"
        ],
        "process": [
          "Discovery & Branding",
          "UI/UX Design",
          "Development",
          "Content Integration",
          "Security Audit",
          "Testing",
          "Launch",
          "Support"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "WordPress",
          "AWS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Starter",
            "price": "₹24,999",
            "desc": "Basic professional website",
            "features": [
              "Up to 10 Pages",
              "Attorney Profiles",
              "Contact Form",
              "Mobile Responsive",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Professional",
            "price": "₹49,999",
            "desc": "Advanced firm website",
            "features": [
              "Up to 25 Pages",
              "Client Portal",
              "Blog Setup",
              "SEO Basics",
              "4 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Do you provide content writing for legal websites?",
            "a": "Yes, we have specialized content writers who understand legal terminology and can write compelling practice area pages."
          }
        ],
        "caseStudies": [
          {
            "title": "Justice Partners LLC",
            "result": "Increased online client inquiries by 40% in 3 months",
            "industry": "Corporate Law"
          }
        ]
      },
      {
        "slug": "case-management-system",
        "title": "Case Management System",
        "tagline": "Streamline your legal cases and document workflow",
        "overview": "A secure, cloud-based case management system to track case progress, manage court dates, store documents, and collaborate with your legal team.",
        "features": [
          "Case Tracking Dashboard",
          "Court Date Calendar & Reminders",
          "Secure Document Storage",
          "Task Management",
          "Team Collaboration Tools",
          "Client Access Portal",
          "Time Tracking",
          "Conflict Checking"
        ],
        "benefits": [
          "Never miss a court date",
          "Organize all case documents",
          "Improve team productivity",
          "Enhance client transparency",
          "Bank-grade security"
        ],
        "process": [
          "Requirement Gathering",
          "Architecture Design",
          "Custom Development",
          "Security Testing",
          "Data Migration",
          "Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "Redis",
          "Docker"
        ],
        "pricingPlans": [
          {
            "name": "Basic",
            "price": "₹49,999",
            "desc": "Simple case tracking",
            "features": [
              "Case Dashboard",
              "Calendar",
              "Document Storage",
              "Up to 5 Users",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Pro",
            "price": "₹99,999",
            "desc": "Advanced management system",
            "features": [
              "Client Portal",
              "Time Tracking",
              "Conflict Checking",
              "Up to 20 Users",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is the data secure and confidential?",
            "a": "Absolutely. We use end-to-end encryption, regular backups, and strict access controls to ensure attorney-client privilege is maintained."
          }
        ],
        "caseStudies": [
          {
            "title": "Legal Associates",
            "result": "Reduced administrative overhead by 35% through automated case tracking",
            "industry": "Litigation Firm"
          }
        ]
      },
      {
        "slug": "legal-crm",
        "title": "Legal CRM",
        "tagline": "Manage client relationships and intake processes",
        "overview": "A specialized Customer Relationship Management (CRM) tool for law firms to manage client intake, track lead sources, and automate follow-ups.",
        "features": [
          "Automated Client Intake",
          "Lead Source Tracking",
          "Email & SMS Automation",
          "Consultation Scheduling",
          "Custom Intake Forms",
          "Pipeline Management",
          "Reporting & Analytics",
          "Document Generation"
        ],
        "benefits": [
          "Higher conversion rate for new clients",
          "Streamlined intake process",
          "Better follow-up management",
          "Clear ROI on marketing efforts",
          "Save time on manual data entry"
        ],
        "process": [
          "Process Analysis",
          "CRM Setup & Customization",
          "Integration with Website",
          "Automation Rules Setup",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Starter CRM",
            "price": "₹29,999",
            "desc": "Basic intake management",
            "features": [
              "Lead Tracking",
              "Custom Forms",
              "Email Automation",
              "Up to 5 Users",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Pro CRM",
            "price": "₹59,999",
            "desc": "Full pipeline management",
            "features": [
              "Advanced Automation",
              "SMS Integration",
              "Analytics Dashboard",
              "Up to 15 Users",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it integrate with our existing website?",
            "a": "Yes, we can seamlessly integrate intake forms and chatbots on your existing website to feed directly into the CRM."
          }
        ],
        "caseStudies": [
          {
            "title": "Smith & Co. Law",
            "result": "Increased lead-to-client conversion rate by 22%",
            "industry": "Personal Injury Law"
          }
        ]
      },
      {
        "slug": "legal-appointment-booking",
        "title": "Appointment Booking",
        "tagline": "Automated consultation scheduling for lawyers",
        "overview": "An intelligent scheduling system that allows clients to book consultations based on your real-time availability, with automated reminders and payment processing.",
        "features": [
          "Real-time Calendar Sync",
          "Automated Email/SMS Reminders",
          "Online Payment Collection",
          "Video Conferencing Integration",
          "Time Zone Management",
          "Custom Booking Rules",
          "Client Intake Forms",
          "Dashboard Management"
        ],
        "benefits": [
          "Eliminate back-and-forth emails",
          "Reduce no-shows",
          "Collect consultation fees upfront",
          "Seamless virtual meetings",
          "24/7 booking availability"
        ],
        "process": [
          "Calendar Integration",
          "Payment Setup",
          "Notification Configuration",
          "Testing",
          "Deployment"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "Stripe",
          "Google Calendar API",
          "Zoom API"
        ],
        "pricingPlans": [
          {
            "name": "Standard Booking",
            "price": "₹19,999",
            "desc": "Automated scheduling",
            "features": [
              "Calendar Sync",
              "Email Reminders",
              "Intake Forms",
              "1 Week Delivery"
            ]
          },
          {
            "name": "Premium Booking",
            "price": "₹34,999",
            "desc": "Paid & Virtual consultations",
            "features": [
              "Payment Integration",
              "Zoom Integration",
              "SMS Reminders",
              "2 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can I charge a fee for consultations?",
            "a": "Yes, the system can require payment via Stripe or Razorpay before a booking is confirmed."
          }
        ],
        "caseStudies": [
          {
            "title": "Immigration Experts",
            "result": "Reduced no-shows by 40% and saved 10 hours a week on scheduling",
            "industry": "Immigration Law"
          }
        ]
      },
      {
        "slug": "document-management-system",
        "title": "Document Management System",
        "tagline": "Securely store, search, and manage legal documents",
        "overview": "A robust digital filing system tailored for legal professionals, featuring advanced OCR search, version control, and secure sharing capabilities.",
        "features": [
          "OCR Text Search",
          "Version Control & History",
          "Secure Document Sharing",
          "Access Role Management",
          "E-signature Integration",
          "Automated Backups",
          "Audit Trails",
          "Folder Structuring"
        ],
        "benefits": [
          "Find any document in seconds",
          "Ensure document security",
          "Collaborate easily with clients",
          "Go paperless",
          "Maintain compliance"
        ],
        "process": [
          "Requirements & Structuring",
          "System Development",
          "OCR Integration",
          "Security Hardening",
          "Data Migration",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "AWS S3",
          "Elasticsearch",
          "Tesseract OCR"
        ],
        "pricingPlans": [
          {
            "name": "Cloud Docs",
            "price": "₹39,999",
            "desc": "Basic document storage",
            "features": [
              "Secure Storage",
              "Folder Management",
              "Basic Search",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Advanced DMS",
            "price": "₹79,999",
            "desc": "Full featured document system",
            "features": [
              "OCR Search",
              "Version Control",
              "E-signatures",
              "Audit Trails",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How does the search work for scanned PDFs?",
            "a": "We use OCR (Optical Character Recognition) to extract text from scanned documents and images, making them fully searchable."
          }
        ],
        "caseStudies": [
          {
            "title": "Corporate Counsel",
            "result": "Decreased document retrieval time from minutes to seconds",
            "industry": "Corporate Law"
          }
        ]
      },
      {
        "slug": "legal-consultation-portal",
        "title": "Legal Consultation Portal",
        "tagline": "Virtual law office for remote client advising",
        "overview": "A complete virtual platform allowing advocates to provide secure video consultations, share documents, and chat with clients remotely.",
        "features": [
          "Secure Video Conferencing",
          "Encrypted Chat & Messaging",
          "File Sharing",
          "Session Recording (Optional)",
          "Billing & Invoicing",
          "Client Dashboard",
          "Advocate Dashboard",
          "Mobile Responsive"
        ],
        "benefits": [
          "Expand your client base globally",
          "Provide secure remote services",
          "Streamline billing",
          "Modern client experience",
          "Reduce office overhead"
        ],
        "process": [
          "UI/UX Design",
          "WebRTC Integration",
          "Dashboard Development",
          "Security Audits",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "WebRTC",
          "Socket.io",
          "Stripe"
        ],
        "pricingPlans": [
          {
            "name": "Basic Portal",
            "price": "₹59,999",
            "desc": "Secure chat & file sharing",
            "features": [
              "Encrypted Chat",
              "File Sharing",
              "Client Dashboard",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Video Consultation",
            "price": "₹99,999",
            "desc": "Full virtual office",
            "features": [
              "Video Conferencing",
              "Integrated Billing",
              "Session Recording",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is the video conferencing secure?",
            "a": "Yes, we use WebRTC with end-to-end encryption to ensure all consultations remain private and secure."
          }
        ],
        "caseStudies": [
          {
            "title": "Family Law Online",
            "result": "Successfully transitioned 60% of consultations to remote, saving on overhead",
            "industry": "Family Law"
          }
        ]
      },
      {
        "slug": "client-management-system",
        "title": "Client Management System",
        "tagline": "Centralize your client information and communications",
        "overview": "Keep track of every client detail, from contact information to past case history, billing status, and communication logs in one centralized hub.",
        "features": [
          "Centralized Client Database",
          "Communication Logs",
          "Billing & Payment Status",
          "Case History Tracking",
          "Client Portal Access",
          "Automated Notifications",
          "Document Linking",
          "Custom Data Fields"
        ],
        "benefits": [
          "Complete view of every client",
          "Improve client satisfaction",
          "Never lose track of communications",
          "Efficient team handover",
          "Secure data management"
        ],
        "process": [
          "Database Design",
          "Dashboard Development",
          "Integration with Billing/Cases",
          "Data Import",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Standard CMS",
            "price": "₹34,999",
            "desc": "Basic client tracking",
            "features": [
              "Client Database",
              "Communication Logs",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Pro CMS",
            "price": "₹64,999",
            "desc": "Advanced client portal",
            "features": [
              "Client Portal",
              "Billing Integration",
              "Automated Alerts",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can clients log in to see their status?",
            "a": "Yes, the Pro version includes a secure client portal where they can view updates, invoices, and shared documents."
          }
        ],
        "caseStudies": [
          {
            "title": "Defense Attorneys Group",
            "result": "Improved client satisfaction scores by 30% through better communication tracking",
            "industry": "Criminal Defense"
          }
        ]
      },
      {
        "slug": "billing-invoice-management",
        "title": "Billing & Invoice Management",
        "tagline": "Streamline legal billing and accelerate payments",
        "overview": "A specialized billing solution for law firms to track billable hours, generate professional invoices, handle retainer accounts, and accept online payments.",
        "features": [
          "Time & Expense Tracking",
          "Automated Invoice Generation",
          "Retainer Management (Trust Accounting)",
          "Online Payment Gateway",
          "Overdue Invoice Reminders",
          "Financial Reporting",
          "Custom Invoice Templates",
          "Tax Calculation"
        ],
        "benefits": [
          "Reduce billing errors",
          "Get paid faster",
          "Easily track billable hours",
          "Manage trust accounts safely",
          "Professional financial reports"
        ],
        "process": [
          "Accounting Workflow Analysis",
          "System Setup",
          "Payment Gateway Integration",
          "Template Customization",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Razorpay",
          "PDFKit"
        ],
        "pricingPlans": [
          {
            "name": "Basic Billing",
            "price": "₹29,999",
            "desc": "Simple invoicing & tracking",
            "features": [
              "Time Tracking",
              "Invoice Generation",
              "Payment Gateway",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Trust Accounting",
            "price": "₹59,999",
            "desc": "Advanced legal billing",
            "features": [
              "Retainer Management",
              "Automated Reminders",
              "Advanced Reports",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it support trust or retainer accounting?",
            "a": "Yes, the advanced plan includes trust accounting features to properly manage client retainers separate from operating funds."
          }
        ],
        "caseStudies": [
          {
            "title": "Boutique Law Firm",
            "result": "Decreased invoice payment time by 15 days on average",
            "industry": "General Practice"
          }
        ]
      },
      {
        "slug": "legal-mobile-app",
        "title": "Legal Mobile App",
        "tagline": "Your law firm in the palm of your clients' hands",
        "overview": "Custom iOS and Android apps for law firms to offer on-the-go access to case updates, secure messaging, document uploads, and appointment booking.",
        "features": [
          "Native iOS & Android Apps",
          "Push Notifications",
          "Secure Client Messaging",
          "Mobile Document Scanner",
          "Case Status Updates",
          "Invoice Payments",
          "Biometric Login",
          "Appointment Booking"
        ],
        "benefits": [
          "Premium client experience",
          "Instant communication",
          "Easy document submission",
          "High brand visibility",
          "Modernize your practice"
        ],
        "process": [
          "App Strategy & UX",
          "UI Design",
          "API Development",
          "Mobile Dev Sprints",
          "Security Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Client Portal App",
            "price": "₹79,999",
            "desc": "Basic client access app",
            "features": [
              "Status Updates",
              "Secure Messaging",
              "Push Notifications",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Full Firm App",
            "price": "₹1,39,999",
            "desc": "Comprehensive mobile app",
            "features": [
              "Document Scanner",
              "Payments",
              "Biometric Login",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is the app secure enough for legal documents?",
            "a": "Yes, we implement bank-grade encryption, biometric authentication, and secure APIs to protect all sensitive information."
          }
        ],
        "caseStudies": [
          {
            "title": "National Injury Lawyers",
            "result": "Over 10,000 app downloads and a 50% reduction in status-update phone calls",
            "industry": "Personal Injury Law"
          }
        ]
      },
      {
        "slug": "law-firm-seo-services",
        "title": "Law Firm SEO Services",
        "tagline": "Dominate local search and attract high-value cases",
        "overview": "Specialized Search Engine Optimization for law firms. We target high-intent legal keywords and optimize your local presence to ensure you rank when clients need you most.",
        "features": [
          "Local SEO & GMB Optimization",
          "Legal Keyword Strategy",
          "Practice Area Page Optimization",
          "High-Authority Legal Backlinks",
          "Content Marketing (Legal Blogs)",
          "Technical SEO Audits",
          "Conversion Rate Optimization",
          "Monthly Performance Reporting"
        ],
        "benefits": [
          "Rank higher for your practice areas",
          "Attract high-value cases",
          "Build local market dominance",
          "Reduce reliance on paid ads",
          "Establish thought leadership"
        ],
        "process": [
          "Comprehensive SEO Audit",
          "Competitor Analysis",
          "Keyword Mapping",
          "On-Page Optimization",
          "Content Creation",
          "Link Building",
          "Monthly Review"
        ],
        "technologies": [
          "Ahrefs",
          "SEMrush",
          "Google Analytics 4",
          "Google Search Console",
          "Local Citations"
        ],
        "pricingPlans": [
          {
            "name": "Local Domination",
            "price": "₹19,999/mo",
            "desc": "Focus on local search",
            "features": [
              "20 Keywords",
              "GMB Optimization",
              "2 Legal Articles/mo",
              "Local Backlinks",
              "Monthly Report"
            ]
          },
          {
            "name": "Practice Area Growth",
            "price": "₹39,999/mo",
            "desc": "Aggressive growth strategy",
            "features": [
              "50 Keywords",
              "Technical SEO",
              "4 Legal Articles/mo",
              "High-DA Backlinks",
              "Bi-weekly Reports"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Are legal SEO keywords very competitive?",
            "a": "Yes, legal keywords are among the most competitive. Our strategy focuses on long-tail keywords and local SEO to generate the highest ROI."
          }
        ],
        "caseStudies": [
          {
            "title": "City Defense Lawyers",
            "result": "Ranked #1 for \"DUI lawyer [City]\" resulting in a 200% increase in qualified leads",
            "industry": "Criminal Defense"
          }
        ]
      }
    ]
  },
  {
    "id": "manufacturing-industries",
    "slug": "manufacturing-industries",
    "name": "Manufacturing & Industries 🏭",
    "tagline": "B2B catalogs, distributor portals & industrial ERP solutions",
    "color": "#78716c",
    "bgColor": "#f5f5f4",
    "description": "We build robust digital infrastructure for manufacturing businesses — from supply chain management and inventory ERPs to B2B product catalogs and automation dashboards.",
    "services": [
      {
        "slug": "manufacturing-erp",
        "title": "Manufacturing ERP",
        "tagline": "End-to-end enterprise resource planning for factories",
        "overview": "A comprehensive ERP system designed specifically for the manufacturing sector to unify operations, finance, supply chain, and production on a single platform.",
        "features": [
          "BOM (Bill of Materials) Management",
          "Production Scheduling",
          "Financial & Cost Accounting",
          "Procurement & Vendor Portal",
          "Order Management",
          "Real-time Analytics Dashboard",
          "Quality Control Module",
          "Multi-plant Support"
        ],
        "benefits": [
          "Single source of truth for operations",
          "Reduce operational silos",
          "Optimize production costs",
          "Improve delivery times",
          "Scale operations seamlessly"
        ],
        "process": [
          "Business Process Mapping",
          "ERP Architecture",
          "Module Development",
          "Data Migration",
          "System Integration",
          "Staff Training",
          "Go-Live",
          "Support"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Core ERP",
            "price": "₹99,999",
            "desc": "Essential manufacturing modules",
            "features": [
              "Inventory & Orders",
              "Basic BOM",
              "Finance Module",
              "Admin Dashboard",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Enterprise ERP",
            "price": "₹1,99,999",
            "desc": "Full-scale factory management",
            "features": [
              "Multi-plant Support",
              "Advanced Scheduling",
              "Quality Control",
              "Custom API Ecosystem",
              "14 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it integrate with our existing accounting software?",
            "a": "Yes, we can build custom integrations with software like Tally, QuickBooks, or SAP to ensure seamless data flow."
          }
        ],
        "caseStudies": [
          {
            "title": "SteelFab Industries",
            "result": "Reduced production delays by 35% through better scheduling and BOM management",
            "industry": "Metal Fabrication"
          }
        ]
      },
      {
        "slug": "inventory-management",
        "title": "Inventory Management",
        "tagline": "Real-time visibility into stock and materials",
        "overview": "An intelligent inventory tracking system to manage raw materials, work-in-progress (WIP), and finished goods across multiple warehouses with barcode/RFID support.",
        "features": [
          "Real-time Stock Tracking",
          "Barcode & RFID Integration",
          "Automated Reorder Alerts",
          "Multi-Warehouse Support",
          "Batch & Expiry Tracking",
          "WIP Inventory",
          "Valuation Reports (FIFO/LIFO)",
          "Mobile App for Floor Staff"
        ],
        "benefits": [
          "Prevent stockouts and overstocking",
          "Reduce inventory holding costs",
          "Improve order fulfillment rates",
          "Eliminate manual counting errors",
          "Full traceability of materials"
        ],
        "process": [
          "Inventory Audit",
          "System Design",
          "Hardware Integration (Scanners)",
          "Software Development",
          "Testing",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "React Native",
          "Zebra API"
        ],
        "pricingPlans": [
          {
            "name": "Standard IMS",
            "price": "₹49,999",
            "desc": "Single warehouse tracking",
            "features": [
              "Stock Tracking",
              "Reorder Alerts",
              "Basic Reporting",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Advanced IMS",
            "price": "₹89,999",
            "desc": "Multi-location with Barcode",
            "features": [
              "Barcode Integration",
              "Multi-warehouse",
              "Mobile App for Scanners",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it support barcode scanning on mobile phones?",
            "a": "Yes, the mobile app uses the smartphone camera to scan standard barcodes and QR codes for quick stock updates."
          }
        ],
        "caseStudies": [
          {
            "title": "AutoParts Mfg",
            "result": "Inventory accuracy improved from 82% to 99.5% within 3 months",
            "industry": "Automotive Parts"
          }
        ]
      },
      {
        "slug": "production-planning-system",
        "title": "Production Planning System",
        "tagline": "Optimize your manufacturing schedules and resources",
        "overview": "A dynamic scheduling and planning tool that aligns your production capacity with customer demand, minimizing downtime and maximizing throughput.",
        "features": [
          "Visual Gantt Chart Scheduling",
          "Machine & Labor Capacity Planning",
          "Material Requirement Planning (MRP)",
          "Downtime Tracking",
          "Job Routing & Sequencing",
          "Real-time Production Updates",
          "Scrap & Waste Tracking",
          "Shift Management"
        ],
        "benefits": [
          "Maximize machine utilization",
          "Reduce production bottlenecks",
          "Ensure on-time delivery",
          "Lower manufacturing lead times",
          "Data-driven capacity decisions"
        ],
        "process": [
          "Production Workflow Analysis",
          "Algorithm Design",
          "Dashboard Dev",
          "Integration with Inventory",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Python",
          "PostgreSQL",
          "D3.js",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Basic Planner",
            "price": "₹59,999",
            "desc": "Simple job scheduling",
            "features": [
              "Visual Scheduling",
              "Job Routing",
              "Shift Management",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Smart MRP",
            "price": "₹1,19,999",
            "desc": "Advanced material & capacity planning",
            "features": [
              "Full MRP",
              "Capacity Planning",
              "Downtime Tracking",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can the system automatically reschedule if a machine breaks down?",
            "a": "Yes, the advanced planner dynamically adjusts the schedule and highlights impacted orders when a machine is marked offline."
          }
        ],
        "caseStudies": [
          {
            "title": "PackTech Solutions",
            "result": "Increased overall equipment effectiveness (OEE) by 18%",
            "industry": "Packaging"
          }
        ]
      },
      {
        "slug": "supply-chain-management",
        "title": "Supply Chain Management",
        "tagline": "End-to-end visibility of your supply network",
        "overview": "A robust SCM platform to track the flow of goods, information, and finances from suppliers to manufacturers to wholesalers to consumers.",
        "features": [
          "Supplier Portal",
          "Logistics Tracking",
          "Demand Forecasting",
          "Freight & Shipping Management",
          "Purchase Order Automation",
          "Compliance & Document Tracking",
          "Risk Management Analytics",
          "EDI Integration"
        ],
        "benefits": [
          "Reduce supply chain disruptions",
          "Lower procurement costs",
          "Improve supplier collaboration",
          "Better demand forecasting",
          "Ensure compliance"
        ],
        "process": [
          "Supply Chain Mapping",
          "Portal Development",
          "Third-party API Integration",
          "Security Hardening",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "AWS",
          "Elasticsearch",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "SCM Core",
            "price": "₹69,999",
            "desc": "Supplier & PO management",
            "features": [
              "Supplier Portal",
              "PO Automation",
              "Basic Tracking",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "SCM Enterprise",
            "price": "₹1,39,999",
            "desc": "Full supply chain visibility",
            "features": [
              "Demand Forecasting",
              "Logistics Integration",
              "Advanced Analytics",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can suppliers log in to update delivery statuses?",
            "a": "Yes, the Supplier Portal allows vendors to acknowledge POs, upload invoices, and update shipping details directly."
          }
        ],
        "caseStudies": [
          {
            "title": "Global Tex",
            "result": "Reduced raw material procurement cycle by 12 days",
            "industry": "Textiles"
          }
        ]
      },
      {
        "slug": "warehouse-management",
        "title": "Warehouse Management",
        "tagline": "Digital control over your storage facilities",
        "overview": "A complete Warehouse Management System (WMS) to optimize storage space, streamline picking and packing, and speed up dispatch operations.",
        "features": [
          "3D Warehouse Mapping",
          "Put-away Optimization",
          "Pick & Pack Workflows",
          "Cross-docking Support",
          "Shipping Label Generation",
          "Courier API Integration",
          "Labor Management",
          "Returns Processing"
        ],
        "benefits": [
          "Optimize warehouse space utilization",
          "Reduce picking errors",
          "Faster order dispatch",
          "Improve worker productivity",
          "Seamless courier handoff"
        ],
        "process": [
          "Warehouse Layout Analysis",
          "Workflow Design",
          "System Development",
          "Integration with Couriers",
          "On-site Testing",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "React Native",
          "Shiprocket/FedEx APIs"
        ],
        "pricingPlans": [
          {
            "name": "Basic WMS",
            "price": "₹54,999",
            "desc": "Simple pick/pack/ship",
            "features": [
              "Storage Location Mapping",
              "Pick Lists",
              "Label Generation",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Smart WMS",
            "price": "₹99,999",
            "desc": "Advanced routing & courier sync",
            "features": [
              "Optimized Pick Routing",
              "Courier API Integration",
              "Returns Management",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does the system suggest where to store incoming items?",
            "a": "Yes, the put-away optimization feature suggests the best bins based on product size, turnover rate, and current capacity."
          }
        ],
        "caseStudies": [
          {
            "title": "ElectroDistributors",
            "result": "Order picking time reduced by 40% using optimized routing",
            "industry": "Electronics Distribution"
          }
        ]
      },
      {
        "slug": "vendor-management",
        "title": "Vendor Management",
        "tagline": "Streamline procurement and supplier relationships",
        "overview": "A centralized portal to onboard vendors, manage contracts, evaluate supplier performance, and process payments securely.",
        "features": [
          "Digital Vendor Onboarding",
          "Contract Lifecycle Management",
          "Supplier Performance Scorecards",
          "RFP / Quotation Bidding",
          "Invoice Processing",
          "Compliance Tracking",
          "Automated Payment Workflows",
          "Communication Hub"
        ],
        "benefits": [
          "Faster vendor onboarding",
          "Ensure compliance and mitigate risk",
          "Negotiate better rates through bidding",
          "Transparent supplier performance",
          "Streamline accounts payable"
        ],
        "process": [
          "Procurement Audit",
          "Portal Design",
          "Workflow Automation",
          "Integration with ERP",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "AWS S3",
          "Stripe/RazorpayX"
        ],
        "pricingPlans": [
          {
            "name": "Vendor Portal",
            "price": "₹39,999",
            "desc": "Onboarding & Invoicing",
            "features": [
              "Digital Onboarding",
              "Invoice Uploads",
              "Basic Directory",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Procurement Suite",
            "price": "₹79,999",
            "desc": "Bidding & Scorecards",
            "features": [
              "RFP/Bidding Engine",
              "Performance Scorecards",
              "Contract Management",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we track vendor compliance documents like ISO certificates?",
            "a": "Yes, the system tracks document expiry dates and automatically alerts vendors to upload renewed certificates."
          }
        ],
        "caseStudies": [
          {
            "title": "BuildCorp Materials",
            "result": "Reduced vendor onboarding time from 3 weeks to 3 days",
            "industry": "Construction Materials"
          }
        ]
      },
      {
        "slug": "crm-for-manufacturing",
        "title": "CRM for Manufacturing",
        "tagline": "Manage B2B sales cycles and distributor networks",
        "overview": "A specialized CRM tailored for the long sales cycles, complex quoting, and distributor relationship management typical in manufacturing.",
        "features": [
          "B2B Account Management",
          "Complex Quote & Proposal Generator",
          "Sales Pipeline Tracking",
          "Distributor Portal",
          "Sample Request Tracking",
          "Territory Management",
          "Contract Renewals",
          "Sales Forecasting Analytics"
        ],
        "benefits": [
          "Improve B2B win rates",
          "Faster quote generation",
          "Better visibility into distributor sales",
          "Align sales with production forecasts",
          "Never miss a contract renewal"
        ],
        "process": [
          "Sales Workflow Mapping",
          "CRM Customization",
          "Quote Template Design",
          "Data Import",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Sales Tracker",
            "price": "₹44,999",
            "desc": "Manage direct B2B sales",
            "features": [
              "Account Management",
              "Pipeline Tracking",
              "Basic Quoting",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Channel CRM",
            "price": "₹84,999",
            "desc": "Direct sales + Distributor portal",
            "features": [
              "Distributor Portal",
              "Complex Quoting",
              "Sales Forecasting",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can distributors place orders directly through the CRM?",
            "a": "Yes, the Channel CRM plan includes a portal where distributors can view price lists and place direct orders."
          }
        ],
        "caseStudies": [
          {
            "title": "ChemPro Industries",
            "result": "Increased sales team efficiency by 30% with automated proposal generation",
            "industry": "Chemical Manufacturing"
          }
        ]
      },
      {
        "slug": "quality-control-software",
        "title": "Quality Control Software",
        "tagline": "Digitize your QA processes and compliance",
        "overview": "A digital QMS (Quality Management System) to standardize inspections, track defects, manage non-conformances (NCR), and ensure ISO compliance.",
        "features": [
          "Digital Inspection Checklists",
          "Defect Tracking & Logging",
          "CAPA (Corrective & Preventive Action)",
          "SPC (Statistical Process Control) Charts",
          "Document Control & SOPs",
          "Audit Management",
          "Calibration Tracking",
          "Supplier Quality Ratings"
        ],
        "benefits": [
          "Reduce scrap and rework",
          "Ensure regulatory compliance (ISO/FDA)",
          "Identify root causes faster",
          "Paperless QA department",
          "Improve overall product quality"
        ],
        "process": [
          "QA Process Audit",
          "Checklist Digitization",
          "System Development",
          "Integration with Production",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "D3.js",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Digital QA",
            "price": "₹49,999",
            "desc": "Digital checklists & tracking",
            "features": [
              "Digital Checklists",
              "Defect Logging",
              "Basic Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Full QMS",
            "price": "₹94,999",
            "desc": "Complete compliance suite",
            "features": [
              "CAPA Workflows",
              "SPC Charts",
              "Document Control",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can floor inspectors use tablets for checklists?",
            "a": "Yes, the interface is optimized for industrial tablets so inspectors can log data directly on the shop floor."
          }
        ],
        "caseStudies": [
          {
            "title": "Precision MedTech",
            "result": "Achieved ISO 13485 certification 2 months ahead of schedule using digital document control",
            "industry": "Medical Devices"
          }
        ]
      },
      {
        "slug": "factory-automation-dashboard",
        "title": "Factory Automation Dashboard",
        "tagline": "Real-time IIoT monitoring for your shop floor",
        "overview": "An Industrial IoT (IIoT) dashboard that connects to your PLC/SCADA systems to provide real-time visibility into machine health, production rates, and OEE.",
        "features": [
          "Real-time Machine Monitoring",
          "OEE (Overall Equipment Effectiveness) Calculation",
          "Predictive Maintenance Alerts",
          "Energy Consumption Tracking",
          "Custom KPI Dashboards",
          "Historical Data Trending",
          "Mobile Alerts & Notifications",
          "API Integration with PLCs"
        ],
        "benefits": [
          "Identify hidden production losses",
          "Prevent unplanned machine downtime",
          "Reduce energy waste",
          "Data-driven continuous improvement",
          "Remote factory visibility"
        ],
        "process": [
          "Hardware Assessment",
          "Protocol Integration (OPC-UA/MQTT)",
          "Dashboard Design",
          "Data Pipeline Setup",
          "Testing",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "TimescaleDB",
          "MQTT",
          "Grafana",
          "WebSockets"
        ],
        "pricingPlans": [
          {
            "name": "Basic Monitoring",
            "price": "₹64,999",
            "desc": "Machine status & counts",
            "features": [
              "Real-time Status",
              "Production Counts",
              "Basic Dashboard",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Factory",
            "price": "₹1,24,999",
            "desc": "OEE & Predictive analytics",
            "features": [
              "OEE Analytics",
              "Predictive Alerts",
              "Energy Tracking",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How do you connect to our existing machines?",
            "a": "We typically connect via standard industrial protocols like OPC-UA, Modbus, or MQTT, or through edge gateways if machines are legacy."
          }
        ],
        "caseStudies": [
          {
            "title": "PlastiMould Inc.",
            "result": "Reduced unplanned downtime by 22% through predictive maintenance alerts",
            "industry": "Plastics Manufacturing"
          }
        ]
      },
      {
        "slug": "industrial-website-development",
        "title": "Industrial Website Development",
        "tagline": "B2B websites that generate qualified industrial leads",
        "overview": "Professional, technical websites designed for manufacturing companies to showcase capabilities, product catalogs, and certifications to global buyers.",
        "features": [
          "Dynamic Product Catalogs",
          "Technical Spec Sheet Downloads",
          "Facility & Equipment Showcase",
          "Request for Quote (RFQ) Engine",
          "Certification Display (ISO, etc.)",
          "Distributor Locator Map",
          "Multi-language Support",
          "B2B Lead Generation Forms"
        ],
        "benefits": [
          "Attract international buyers",
          "Showcase manufacturing capabilities",
          "Streamline the RFQ process",
          "Build credibility with enterprise clients",
          "Improve search engine visibility"
        ],
        "process": [
          "Brand Discovery",
          "Catalog Structuring",
          "UI/UX Design",
          "Development",
          "Content Integration",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Sanity CMS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Corporate Profile",
            "price": "₹29,999",
            "desc": "Professional capability showcase",
            "features": [
              "Up to 15 Pages",
              "Facility Showcase",
              "Basic Contact Forms",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Digital Catalog",
            "price": "₹59,999",
            "desc": "Full product & RFQ site",
            "features": [
              "Dynamic Product Catalog",
              "RFQ Engine",
              "Spec Downloads",
              "SEO Setup",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we update the product catalog ourselves?",
            "a": "Yes, we integrate a headless CMS that makes it easy for your team to add new products and spec sheets without coding."
          }
        ],
        "caseStudies": [
          {
            "title": "Apex Valve Corp",
            "result": "Increased international RFQs by 150% within 6 months of launching the new catalog site",
            "industry": "Industrial Valves"
          }
        ]
      }
    ]
  },
  {
    "id": "ngos-non-profits",
    "slug": "ngos-non-profits",
    "name": "NGOs & Non-Profits 🤝",
    "tagline": "Donation portals, fundraising campaigns & digital impact tools",
    "color": "#8b5cf6",
    "bgColor": "#f5f3ff",
    "description": "We empower NGOs and non-profit organizations with purpose-driven digital solutions — from donation management systems and volunteer portals to campaign management platforms and impactful digital marketing.",
    "services": [
      {
        "slug": "ngo-website-development",
        "title": "NGO Website Development",
        "tagline": "Purpose-driven websites that inspire action and donations",
        "overview": "A professionally designed, high-impact website for your NGO or non-profit that communicates your mission, builds trust with donors, and drives conversions.",
        "features": [
          "Impact Storytelling Pages",
          "Online Donation Integration",
          "Project & Program Showcases",
          "Beneficiary Stories & Galleries",
          "Volunteer Sign-up Forms",
          "Annual Reports Display",
          "FCRA / Legal Compliance Pages",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Build credibility and donor trust",
          "Increase online donations",
          "Tell your impact story effectively",
          "Attract volunteers and partners",
          "Comply with transparency norms"
        ],
        "process": [
          "Mission Discovery",
          "Content Strategy",
          "UI/UX Design",
          "Development",
          "Donation Integration",
          "Testing",
          "Launch",
          "Support"
        ],
        "technologies": [
          "Next.js",
          "React",
          "WordPress",
          "Razorpay",
          "AWS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Impact Starter",
            "price": "₹19,999",
            "desc": "Essential NGO online presence",
            "features": [
              "Up to 10 Pages",
              "Donation Button",
              "Volunteer Form",
              "Mobile Responsive",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Mission Pro",
            "price": "₹39,999",
            "desc": "Full-featured NGO website",
            "features": [
              "Up to 25 Pages",
              "Donation Gateway",
              "Project Showcases",
              "Blog & News",
              "4 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we accept donations directly on the website?",
            "a": "Yes, we integrate trusted payment gateways like Razorpay or Stripe directly into your site for seamless donor transactions."
          }
        ],
        "caseStudies": [
          {
            "title": "Green Earth Foundation",
            "result": "Online donations increased by 180% within 4 months of the new website launch",
            "industry": "Environmental NGO"
          }
        ]
      },
      {
        "slug": "donation-management-system",
        "title": "Donation Management System",
        "tagline": "Track, manage, and acknowledge every donation seamlessly",
        "overview": "A comprehensive digital system to accept online donations, manage donor records, generate tax receipts (80G), and analyze fundraising performance.",
        "features": [
          "Online Payment Gateway (UPI, Card, Net Banking)",
          "Automated 80G Tax Receipt Generation",
          "Donor Database & History",
          "Recurring Donation Setup",
          "Campaign-wise Donation Tracking",
          "Real-time Fundraising Dashboard",
          "WhatsApp & Email Acknowledgments",
          "Detailed Financial Reports"
        ],
        "benefits": [
          "Never miss a donation or acknowledgment",
          "Automate tax receipts (FCRA/80G)",
          "Build long-term donor relationships",
          "Track campaign-wise fundraising",
          "Full financial transparency"
        ],
        "process": [
          "Requirements Analysis",
          "Payment Gateway Setup",
          "CRM Build",
          "Receipt Automation",
          "Testing",
          "Deployment",
          "Training"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Standard DMS",
            "price": "₹34,999",
            "desc": "Core donation tracking",
            "features": [
              "Online Payment Gateway",
              "80G Receipt Generation",
              "Donor Database",
              "Email Alerts",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Advanced DMS",
            "price": "₹69,999",
            "desc": "Full fundraising intelligence",
            "features": [
              "Recurring Donations",
              "Campaign Tracking",
              "Financial Reports",
              "WhatsApp Integration",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it generate 80G certificates automatically?",
            "a": "Yes, the system auto-generates and emails 80G-compliant tax receipts immediately after each donation is confirmed."
          }
        ],
        "caseStudies": [
          {
            "title": "Asha Kiran Trust",
            "result": "Processed over ₹50 Lakh in online donations in year one with zero manual receipt work",
            "industry": "Child Welfare NGO"
          }
        ]
      },
      {
        "slug": "volunteer-management",
        "title": "Volunteer Management",
        "tagline": "Recruit, coordinate, and retain your volunteer force",
        "overview": "A dedicated platform to manage your volunteer lifecycle — from online applications and onboarding to scheduling, hour tracking, and appreciation.",
        "features": [
          "Online Volunteer Application Forms",
          "Skills & Interest Matching",
          "Event & Shift Scheduling",
          "Volunteer Hour Tracking",
          "Communication Hub (In-app Messaging)",
          "Digital Certificate Generation",
          "Performance Reporting",
          "Mobile App for Volunteers"
        ],
        "benefits": [
          "Streamline volunteer onboarding",
          "Reduce coordinator workload",
          "Improve volunteer retention",
          "Recognize and appreciate volunteers",
          "Real-time workforce visibility"
        ],
        "process": [
          "Workflow Design",
          "Platform Development",
          "Mobile App Build",
          "Testing",
          "Onboarding Campaign",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "React Native",
          "Firebase",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Volunteer Hub",
            "price": "₹29,999",
            "desc": "Core volunteer coordination",
            "features": [
              "Application Forms",
              "Scheduling",
              "Hour Tracking",
              "Email Alerts",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Volunteer Pro",
            "price": "₹54,999",
            "desc": "Advanced management with App",
            "features": [
              "Mobile App",
              "Digital Certificates",
              "Skills Matching",
              "Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can volunteers check their schedules on a mobile app?",
            "a": "Yes, the Pro plan includes a dedicated mobile app where volunteers can view shifts, log hours, and receive notifications."
          }
        ],
        "caseStudies": [
          {
            "title": "Youth for Change",
            "result": "Managed 500+ active volunteers across 3 cities with zero scheduling conflicts",
            "industry": "Youth Development NGO"
          }
        ]
      },
      {
        "slug": "event-management-platform",
        "title": "Event Management Platform",
        "tagline": "Organize impactful fundraising events with ease",
        "overview": "A complete digital platform to plan, promote, and manage NGO events — from gala dinners and marathon runs to webinars and community drives.",
        "features": [
          "Event Creation & Landing Pages",
          "Online Ticket & RSVP Management",
          "Donation Goal Thermometer",
          "Sponsor Management",
          "QR Code Check-in System",
          "Volunteer Assignment for Events",
          "Post-Event Reports & Analytics",
          "Email & WhatsApp Blast Tools"
        ],
        "benefits": [
          "Seamlessly manage large-scale events",
          "Increase event attendance & donations",
          "Reduce on-ground administrative chaos",
          "Engage sponsors effectively",
          "Measure event ROI accurately"
        ],
        "process": [
          "Event Requirements",
          "Platform Design",
          "Ticketing Integration",
          "Check-in App Build",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "QR Code APIs",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Event Starter",
            "price": "₹24,999",
            "desc": "Single event management",
            "features": [
              "Event Landing Page",
              "RSVP Management",
              "QR Check-in",
              "Email Blast",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Event Suite",
            "price": "₹49,999",
            "desc": "Multi-event management platform",
            "features": [
              "Multi-event Dashboard",
              "Ticketing & Donations",
              "Sponsor Portal",
              "Analytics",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can attendees donate at the time of RSVP?",
            "a": "Yes, we can configure an optional donation step within the RSVP/ticket purchase flow to maximize fundraising."
          }
        ],
        "caseStudies": [
          {
            "title": "Run for Hope Marathon",
            "result": "Raised ₹25 Lakh at a single event, managing 2,000+ registrations digitally",
            "industry": "Health & Wellness NGO"
          }
        ]
      },
      {
        "slug": "membership-management",
        "title": "Membership Management",
        "tagline": "Grow and manage your community of supporters",
        "overview": "A structured membership system to define tiers, collect annual fees, provide member benefits, and build a loyal community around your cause.",
        "features": [
          "Tiered Membership Plans",
          "Online Membership Fee Collection",
          "Member-only Content & Resources",
          "Automatic Renewal Reminders",
          "Digital Membership Cards",
          "Member Directory",
          "Voting & Polls for Members",
          "Engagement Analytics"
        ],
        "benefits": [
          "Create predictable recurring revenue",
          "Foster a strong community",
          "Reward loyal supporters",
          "Improve member engagement",
          "Track retention rates"
        ],
        "process": [
          "Membership Tier Design",
          "Portal Development",
          "Payment Integration",
          "Content Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Basic Membership",
            "price": "₹24,999",
            "desc": "Simple membership portal",
            "features": [
              "2 Membership Tiers",
              "Fee Collection",
              "Member Database",
              "Email Reminders",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Community Pro",
            "price": "₹49,999",
            "desc": "Full membership community",
            "features": [
              "Unlimited Tiers",
              "Digital Cards",
              "Member-only Content",
              "Voting & Polls",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can members access exclusive content after joining?",
            "a": "Yes, the Pro plan supports a member-only resource library including documents, videos, and webinar recordings."
          }
        ],
        "caseStudies": [
          {
            "title": "Wildlife Guardians Society",
            "result": "Grew paid membership from 200 to 1,500+ within one year",
            "industry": "Conservation NGO"
          }
        ]
      },
      {
        "slug": "fundraising-portal",
        "title": "Fundraising Portal",
        "tagline": "A dedicated platform to power your fundraising campaigns",
        "overview": "A multi-campaign fundraising portal where donors can browse active causes, make donations, track impact, and share campaigns on social media.",
        "features": [
          "Multi-campaign Listing",
          "Individual Campaign Pages with Goal Tracker",
          "Peer-to-Peer Fundraising",
          "Social Sharing Integration",
          "Donor Wall of Fame",
          "Real-time Fundraising Thermometer",
          "Impact Reporting per Campaign",
          "Matching Gift Prompts"
        ],
        "benefits": [
          "Run multiple campaigns simultaneously",
          "Enable peer fundraising to multiply reach",
          "Build donor confidence with transparency",
          "Increase average donation size",
          "Create viral campaign sharing"
        ],
        "process": [
          "Portal Architecture",
          "Campaign Page Design",
          "Payment Integration",
          "Social Sharing Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "AWS",
          "Social APIs"
        ],
        "pricingPlans": [
          {
            "name": "Campaign Portal",
            "price": "₹39,999",
            "desc": "Up to 5 active campaigns",
            "features": [
              "5 Campaign Pages",
              "Goal Tracker",
              "Donation Gateway",
              "Social Sharing",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Impact Platform",
            "price": "₹74,999",
            "desc": "Full peer-to-peer fundraising",
            "features": [
              "Unlimited Campaigns",
              "Peer-to-Peer Tools",
              "Donor Wall",
              "Advanced Analytics",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "What is peer-to-peer fundraising?",
            "a": "P2P fundraising allows individual supporters to create personal fundraising pages for your cause, dramatically multiplying your reach."
          }
        ],
        "caseStudies": [
          {
            "title": "Education for All",
            "result": "Raised ₹1.2 Crore in a single month through a peer-to-peer campaign",
            "industry": "Education NGO"
          }
        ]
      },
      {
        "slug": "campaign-management",
        "title": "Campaign Management",
        "tagline": "Plan, execute, and track your advocacy campaigns",
        "overview": "A digital command center to plan and manage awareness campaigns — coordinating messaging, channels, volunteers, and outcomes from a single dashboard.",
        "features": [
          "Campaign Planning & Calendar",
          "Multi-channel Message Scheduling (Email, WhatsApp, Social)",
          "Petition & Pledge Collection",
          "Supporter Database Segmentation",
          "A/B Testing for Messaging",
          "Real-time Campaign Analytics",
          "Volunteer Task Assignment",
          "Campaign Impact Report Generator"
        ],
        "benefits": [
          "Coordinate large campaigns effortlessly",
          "Reach supporters across multiple channels",
          "Measure awareness and petition signatures",
          "Improve messaging with A/B testing",
          "Generate compelling impact reports for donors"
        ],
        "process": [
          "Campaign Strategy",
          "Platform Setup",
          "Channel Integration",
          "Automation Config",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "SendGrid",
          "Twilio",
          "Meta API"
        ],
        "pricingPlans": [
          {
            "name": "Campaign Hub",
            "price": "₹34,999",
            "desc": "Manage one campaign at a time",
            "features": [
              "Campaign Dashboard",
              "Email & WhatsApp Blasts",
              "Petition Forms",
              "Basic Analytics",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Multi-Campaign Suite",
            "price": "₹64,999",
            "desc": "Run multiple campaigns simultaneously",
            "features": [
              "Unlimited Campaigns",
              "Supporter Segmentation",
              "A/B Testing",
              "Full Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we send mass WhatsApp messages to our supporters?",
            "a": "Yes, we integrate with the official WhatsApp Business API to send bulk, personalized messages to your supporter list."
          }
        ],
        "caseStudies": [
          {
            "title": "Climate Action India",
            "result": "Gathered 1,00,000 petition signatures in 3 weeks using the multi-channel campaign tool",
            "industry": "Environmental Advocacy"
          }
        ]
      },
      {
        "slug": "ngo-mobile-app",
        "title": "NGO Mobile App",
        "tagline": "Your cause in every supporter's pocket",
        "overview": "A branded iOS and Android mobile application for your NGO to engage donors, update supporters, register volunteers, and process donations on the go.",
        "features": [
          "Branded iOS & Android App",
          "In-App Donation with UPI/Card",
          "Push Notifications for Campaigns & Updates",
          "Project Progress Updates",
          "Volunteer Registration & Scheduling",
          "Event Listings & RSVP",
          "Impact Stories & Photo Galleries",
          "Offline Content Access"
        ],
        "benefits": [
          "Stay connected with supporters 24/7",
          "Enable instant mobile donations",
          "Build a loyal, engaged community",
          "Powerful push notification channel",
          "Showcase real-time field impact"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Backend API Build",
          "iOS & Android Dev",
          "Security Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "Razorpay SDK",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Supporter App",
            "price": "₹69,999",
            "desc": "Engage donors & supporters",
            "features": [
              "iOS & Android App",
              "Push Notifications",
              "In-App Donations",
              "News Feed",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Full NGO App",
            "price": "₹1,19,999",
            "desc": "Complete NGO mobile platform",
            "features": [
              "Volunteer Management",
              "Event RSVPs",
              "Campaign Updates",
              "Offline Content",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will the app be listed on both the App Store and Play Store?",
            "a": "Yes, we handle the end-to-end submission process to both Apple App Store and Google Play Store, including all compliance requirements."
          }
        ],
        "caseStudies": [
          {
            "title": "HelpIndia Foundation",
            "result": "Drove 40% of all monthly donations through the mobile app within 6 months",
            "industry": "Multi-cause NGO"
          }
        ]
      },
      {
        "slug": "crm-for-ngos",
        "title": "CRM for NGOs",
        "tagline": "Manage every donor, volunteer, and partner relationship",
        "overview": "A purpose-built CRM for non-profits to consolidate donor data, track interactions, segment audiences, and run targeted communications to build lasting relationships.",
        "features": [
          "360° Donor Profiles",
          "Donation History & RFM Analysis",
          "Volunteer & Partner Tracking",
          "Automated Follow-up Sequences",
          "Segmented Email & WhatsApp Campaigns",
          "Grant Application Tracking",
          "Lapsed Donor Re-engagement Workflows",
          "Custom Reports & Dashboards"
        ],
        "benefits": [
          "Understand and retain your donors",
          "Personalize donor communications",
          "Identify major gift prospects",
          "Track every relationship interaction",
          "Improve fundraising efficiency"
        ],
        "process": [
          "CRM Requirements",
          "Data Architecture",
          "System Build",
          "Data Migration",
          "Automation Setup",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "NGO CRM Starter",
            "price": "₹29,999",
            "desc": "Core donor management",
            "features": [
              "Donor Profiles",
              "Donation History",
              "Email Campaigns",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "NGO CRM Pro",
            "price": "₹59,999",
            "desc": "Advanced relationship intelligence",
            "features": [
              "RFM Analysis",
              "Automated Workflows",
              "Grant Tracking",
              "Advanced Dashboards",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we migrate our existing donor data from spreadsheets?",
            "a": "Yes, we handle complete data migration from Excel or any existing CRM, with data cleaning and deduplication included."
          }
        ],
        "caseStudies": [
          {
            "title": "Bhumi NGO",
            "result": "Reduced donor churn by 28% through automated re-engagement campaigns",
            "industry": "Education & Environment NGO"
          }
        ]
      },
      {
        "slug": "digital-marketing-for-ngos",
        "title": "Digital Marketing for NGOs",
        "tagline": "Amplify your impact with purpose-driven digital campaigns",
        "overview": "Specialized digital marketing services for non-profits, including Google Ad Grants management, social media campaigns, SEO for NGO websites, and email marketing.",
        "features": [
          "Google Ad Grants Management ($10,000/mo)",
          "Meta Ads for Cause Awareness & Donations",
          "SEO for NGO Websites",
          "Social Media Management",
          "Email Campaign Automation",
          "YouTube Fundraising Appeals",
          "Influencer & Ambassador Outreach",
          "Impact Report Design & Distribution"
        ],
        "benefits": [
          "Access $10K/month in free Google Ads",
          "Reach highly targeted donor audiences",
          "Build organic authority on search engines",
          "Grow your social media following",
          "Launch viral fundraising campaigns"
        ],
        "process": [
          "Digital Audit",
          "Google Ad Grants Setup",
          "Strategy Formulation",
          "Content Creation",
          "Campaign Launch",
          "Optimization",
          "Monthly Reporting"
        ],
        "technologies": [
          "Google Ads (Grants)",
          "Meta Business Suite",
          "Mailchimp",
          "SEMrush",
          "Canva Pro",
          "Google Analytics 4"
        ],
        "pricingPlans": [
          {
            "name": "NGO Growth",
            "price": "₹14,999/mo",
            "desc": "Awareness & social growth",
            "features": [
              "Social Media Mgt",
              "Google Grants Setup",
              "Basic SEO",
              "10 Posts/mo",
              "Monthly Report"
            ]
          },
          {
            "name": "NGO Impact",
            "price": "₹29,999/mo",
            "desc": "Full-funnel digital strategy",
            "features": [
              "Google Grants Mgt",
              "Meta Donation Ads",
              "Email Campaigns",
              "Advanced SEO",
              "Bi-weekly Reports"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "What is the Google Ad Grant and are we eligible?",
            "a": "The Google Ad Grant gives eligible 501(c)(3) or FCRA-registered NGOs $10,000/month in free Google Ads. We handle the application and full management."
          }
        ],
        "caseStudies": [
          {
            "title": "Save the Rivers",
            "result": "Gained 500,000+ impressions per month leveraging $10K Google Ad Grants, at zero ad spend",
            "industry": "Environmental NGO"
          }
        ]
      }
    ]
  },
  {
    "id": "finance-banking",
    "slug": "finance-banking",
    "name": "Finance & Banking",
    "tagline": "Fintech apps, banking portals & financial management solutions",
    "color": "#1d4ed8",
    "bgColor": "#eff6ff",
    "description": "We build secure, compliant, and scalable digital solutions for banks, NBFCs, fintech startups, and financial service providers — from lending portals to investment platforms.",
    "services": [
      {
        "slug": "fintech-app-development",
        "title": "Fintech App Development",
        "tagline": "Innovative financial applications for the digital economy",
        "overview": "Custom fintech applications including digital banking, payments, lending, and investment platforms built with security and regulatory compliance at the core.",
        "features": [
          "UPI & Payment Gateway Integration",
          "eKYC & Aadhaar Verification",
          "Real-time Transaction Monitoring",
          "Multi-factor Authentication",
          "Loan Origination Module",
          "Investment Portfolio Tracker",
          "Spending Analytics",
          "Compliance & Audit Logs"
        ],
        "benefits": [
          "Accelerate financial product launch",
          "Bank-grade security standards",
          "Seamless user onboarding",
          "Regulatory compliance built-in",
          "Scalable cloud architecture"
        ],
        "process": [
          "Discovery & Compliance Review",
          "Architecture Design",
          "Security Planning",
          "Development Sprints",
          "Penetration Testing",
          "Regulatory Review",
          "Launch"
        ],
        "technologies": [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Razorpay",
          "Setu APIs",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "Fintech MVP",
            "price": "₹1,49,999",
            "desc": "Core fintech application",
            "features": [
              "Payment Integration",
              "eKYC",
              "User Dashboard",
              "Security Hardening",
              "10 Weeks Delivery"
            ]
          },
          {
            "name": "Enterprise Fintech",
            "price": "₹2,99,999",
            "desc": "Full-scale fintech platform",
            "features": [
              "Multi-product Suite",
              "Advanced Analytics",
              "Admin Panel",
              "API Marketplace",
              "18 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How do you ensure RBI compliance?",
            "a": "We work closely with your legal team and build features aligned with RBI guidelines including KYC norms, data localization, and audit trail requirements."
          }
        ],
        "caseStudies": [
          {
            "title": "PayReach Fintech",
            "result": "Launched a UPI-based lending app to 50,000 users in 4 months",
            "industry": "Fintech Lending"
          }
        ]
      },
      {
        "slug": "banking-website",
        "title": "Banking & Finance Website",
        "tagline": "Professional websites for financial institutions",
        "overview": "Secure, trust-inspiring websites for banks, NBFCs, credit unions, and financial advisory firms that drive customer acquisition and provide self-service portals.",
        "features": [
          "Product & Scheme Showcases",
          "EMI Calculator Tools",
          "Branch & ATM Locator",
          "Loan Application Forms",
          "Customer Login Portal",
          "Regulatory Disclosure Pages",
          "Mobile-Responsive Design",
          "ADA Accessibility"
        ],
        "benefits": [
          "Build institutional trust",
          "Generate qualified loan leads",
          "Reduce branch footfall",
          "Provide 24/7 self-service",
          "Ensure regulatory compliance"
        ],
        "process": [
          "Compliance Audit",
          "UX Design",
          "Development",
          "Security Review",
          "Content Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "AWS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Institutional Website",
            "price": "₹39,999",
            "desc": "Professional finance website",
            "features": [
              "Up to 20 Pages",
              "EMI Calculators",
              "Lead Forms",
              "Mobile Responsive",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Enterprise Portal",
            "price": "₹74,999",
            "desc": "Full self-service website",
            "features": [
              "Customer Login Portal",
              "Branch Locator",
              "Application Forms",
              "ADA Compliant",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is the website secure for financial data?",
            "a": "Yes, we implement SSL, security headers, form encryption, and VAPT testing to ensure the highest level of website security."
          }
        ],
        "caseStudies": [
          {
            "title": "Sahara NBFC",
            "result": "Increased online loan applications by 120% within 3 months of launch",
            "industry": "Non-Banking Finance"
          }
        ]
      },
      {
        "slug": "loan-management-software",
        "title": "Loan Management Software",
        "tagline": "End-to-end digital lending lifecycle management",
        "overview": "A comprehensive software system to manage the complete loan lifecycle from origination, underwriting, and disbursement to repayment tracking and collections.",
        "features": [
          "Digital Loan Application & Origination",
          "Automated Credit Scoring",
          "Document Management (eKYC)",
          "Loan Disbursement Workflows",
          "EMI Schedule Generation",
          "Collections & Recovery Module",
          "Repayment Reminders (SMS/Email)",
          "NPA Reporting & Analytics"
        ],
        "benefits": [
          "Reduce loan processing time by 60%",
          "Minimize default risk with scoring",
          "Complete audit trail",
          "Automate collections",
          "Regulatory reporting ready"
        ],
        "process": [
          "LMS Architecture",
          "Core Module Build",
          "Credit Bureau Integration",
          "Testing",
          "Compliance Audit",
          "Deployment",
          "Training"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Experian/CIBIL API",
          "AWS",
          "Redis"
        ],
        "pricingPlans": [
          {
            "name": "LMS Core",
            "price": "₹79,999",
            "desc": "Essential loan management",
            "features": [
              "Origination",
              "EMI Scheduling",
              "Repayment Tracking",
              "Basic Reports",
              "7 Weeks Delivery"
            ]
          },
          {
            "name": "LMS Enterprise",
            "price": "₹1,49,999",
            "desc": "Full-cycle lending platform",
            "features": [
              "Credit Scoring",
              "Collections Module",
              "NPA Analytics",
              "Multi-branch Support",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it integrate with credit bureaus like CIBIL?",
            "a": "Yes, we have pre-built integrations with Experian, CIBIL, and Equifax APIs for real-time credit score fetching."
          }
        ],
        "caseStudies": [
          {
            "title": "GoldFinance Co.",
            "result": "Reduced loan processing time from 5 days to 4 hours through automation",
            "industry": "Gold Loan NBFC"
          }
        ]
      },
      {
        "slug": "nbfc-portal",
        "title": "NBFC / Lending Portal",
        "tagline": "Self-service portals for borrowers and loan agents",
        "overview": "A complete web and mobile portal for NBFCs allowing customers to apply for loans, track status, make payments, and agents to manage their portfolios.",
        "features": [
          "Customer Loan Application Portal",
          "Agent / DSA Management Portal",
          "Document Upload (eKYC)",
          "Loan Status Tracker",
          "Online Repayment Gateway",
          "Statement Downloads",
          "Agent Commission Tracking",
          "Admin Dashboard"
        ],
        "benefits": [
          "Reduce agent management overhead",
          "Empower customers with self-service",
          "Increase digital loan applications",
          "Streamline DSA workflows",
          "Real-time visibility for management"
        ],
        "process": [
          "Portal Architecture",
          "UX Design",
          "Development",
          "Payment Integration",
          "Security Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "AWS S3",
          "Firebase"
        ],
        "pricingPlans": [
          {
            "name": "Customer Portal",
            "price": "₹54,999",
            "desc": "Customer & loan tracking portal",
            "features": [
              "Loan Application",
              "Status Tracker",
              "Repayment Gateway",
              "Document Upload",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "NBFC Suite",
            "price": "₹99,999",
            "desc": "Customer + Agent portal",
            "features": [
              "Customer Portal",
              "DSA Portal",
              "Commission Tracking",
              "Admin Dashboard",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can our field agents use this on their mobile phones?",
            "a": "Yes, the agent portal is fully mobile-responsive and can be wrapped as a PWA for offline-capable access on the go."
          }
        ],
        "caseStudies": [
          {
            "title": "MicroLend India",
            "result": "Onboarded 200+ DSA agents digitally, increasing loan disbursals by 45%",
            "industry": "Microfinance NBFC"
          }
        ]
      },
      {
        "slug": "investment-platform",
        "title": "Investment Platform",
        "tagline": "Digital platforms for mutual funds, stocks & wealth management",
        "overview": "A secure investment platform enabling investors to discover, analyze, and invest in mutual funds, stocks, bonds, or other financial instruments with real-time data.",
        "features": [
          "Investment Discovery & Filtering",
          "Real-time Market Data Integration",
          "Portfolio Dashboard & Analytics",
          "SIP (Systematic Investment Plans)",
          "KYC & SEBI Compliance",
          "Transaction History",
          "Goal-based Investing Tools",
          "Mobile App"
        ],
        "benefits": [
          "Attract retail investors digitally",
          "Build trust with transparent data",
          "Increase AUM through automation",
          "SEBI/AMFI compliant",
          "Personalized investment experience"
        ],
        "process": [
          "Compliance Framework",
          "UX Design",
          "API Integrations (NSE/BSE)",
          "Platform Development",
          "Security Testing",
          "Regulatory Review",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "NSE/BSE APIs",
          "Kite Connect",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "MF Platform",
            "price": "₹99,999",
            "desc": "Mutual fund investment portal",
            "features": [
              "Fund Discovery",
              "KYC Integration",
              "SIP Setup",
              "Portfolio View",
              "10 Weeks Delivery"
            ]
          },
          {
            "name": "Wealth Platform",
            "price": "₹1,99,999",
            "desc": "Full-stack wealth management",
            "features": [
              "Multi-asset Classes",
              "Goal Planning Tools",
              "Real-time Market Data",
              "Mobile App",
              "16 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is it SEBI registered or compliant?",
            "a": "The platform is built to be compliant with SEBI/AMFI regulations. We provide a compliance-ready architecture; you will need to hold the applicable SEBI registration."
          }
        ],
        "caseStudies": [
          {
            "title": "WealthNest Advisors",
            "result": "Grew AUM by ₹100 Crore in 18 months with the digital investment platform",
            "industry": "Wealth Management"
          }
        ]
      },
      {
        "slug": "finance-crm",
        "title": "Finance CRM",
        "tagline": "Manage leads, clients & financial advisory relationships",
        "overview": "A specialized CRM built for banks, NBFCs, and financial advisors to manage the complete client lifecycle from lead to conversion and long-term relationship management.",
        "features": [
          "Lead Capture & Qualification",
          "Client Financial Profile",
          "Product Interest Tracking (Loans, FD, MF)",
          "Follow-up Automation",
          "Agent Assignment",
          "Revenue & Commission Tracking",
          "Cross-sell & Upsell Prompts",
          "Regulatory Audit Logs"
        ],
        "benefits": [
          "Higher lead-to-customer conversion",
          "Better cross-selling opportunities",
          "Streamlined agent workflows",
          "Complete client financial history",
          "Compliance-ready communication logs"
        ],
        "process": [
          "CRM Design",
          "Build & Integration",
          "Data Migration",
          "Automation Setup",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Finance CRM",
            "price": "₹44,999",
            "desc": "Core financial CRM",
            "features": [
              "Lead Management",
              "Client Profiles",
              "Follow-up Automation",
              "Basic Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Enterprise CRM",
            "price": "₹84,999",
            "desc": "Advanced financial relationship platform",
            "features": [
              "Cross-sell Engine",
              "Commission Tracking",
              "Audit Logs",
              "Advanced Analytics",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it manage leads from multiple sources like web, WhatsApp, and walk-in?",
            "a": "Yes, the CRM aggregates leads from website forms, WhatsApp, phone calls, and manual entry into a single unified dashboard."
          }
        ],
        "caseStudies": [
          {
            "title": "FirstChoice Financial",
            "result": "Improved lead conversion by 33% using automated follow-up workflows",
            "industry": "Financial Advisory"
          }
        ]
      },
      {
        "slug": "digital-wallet-app",
        "title": "Digital Wallet App",
        "tagline": "Secure mobile payment and wallet solutions",
        "overview": "A feature-rich digital wallet application enabling users to add money, make payments, transfer funds, split bills, and manage transactions from their smartphones.",
        "features": [
          "UPI & Bank Account Linking",
          "P2P Money Transfers",
          "QR Code Payments",
          "Bill Payments (Utility, Mobile, DTH)",
          "Transaction History & Statements",
          "Cashback & Rewards Engine",
          "Biometric Authentication",
          "Multi-currency Support"
        ],
        "benefits": [
          "Offer a branded payment experience",
          "Increase customer stickiness",
          "Drive loyalty through rewards",
          "Reduce payment friction",
          "Monetize through transaction fees"
        ],
        "process": [
          "Wallet Architecture",
          "RBI Compliance Review",
          "API Integration (UPI, NPCI)",
          "App Development",
          "Security Audit",
          "Launch"
        ],
        "technologies": [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "UPI APIs",
          "AWS",
          "Razorpay"
        ],
        "pricingPlans": [
          {
            "name": "Basic Wallet",
            "price": "₹99,999",
            "desc": "Core payment wallet app",
            "features": [
              "UPI Payments",
              "P2P Transfers",
              "Bill Payments",
              "Android & iOS",
              "10 Weeks Delivery"
            ]
          },
          {
            "name": "Rewards Wallet",
            "price": "₹1,79,999",
            "desc": "Full-featured wallet with rewards",
            "features": [
              "Cashback Engine",
              "Multi-currency",
              "QR Payments",
              "Analytics Dashboard",
              "16 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is a Payment Aggregator (PA) license required?",
            "a": "For a full-scale wallet, RBI mandates a PA license. We can build the technology; your legal team handles the licensing, or we can help you integrate with a licensed PA."
          }
        ],
        "caseStudies": [
          {
            "title": "QuickPay Wallet",
            "result": "Acquired 1 Lakh users in the first 6 months with a 4.5-star app rating",
            "industry": "Digital Payments"
          }
        ]
      },
      {
        "slug": "financial-analytics-dashboard",
        "title": "Financial Analytics Dashboard",
        "tagline": "Real-time financial intelligence for informed decisions",
        "overview": "A powerful BI and analytics dashboard that aggregates financial data across portfolios, branches, and products to give leadership real-time visibility and insights.",
        "features": [
          "Revenue & P&L Dashboards",
          "Portfolio Quality Analytics (NPA tracking)",
          "Branch-wise Performance Reports",
          "Agent / Channel Performance",
          "Cash Flow Forecasting",
          "Regulatory Report Automation (RBI)",
          "Drill-down Data Exploration",
          "Scheduled PDF Reports"
        ],
        "benefits": [
          "Real-time financial visibility",
          "Proactive risk management",
          "Data-driven product strategy",
          "Faster board-level reporting",
          "Reduce reporting manual effort"
        ],
        "process": [
          "Data Source Audit",
          "Data Warehouse Design",
          "Dashboard Build",
          "KPI Definition",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Python",
          "Power BI",
          "PostgreSQL",
          "AWS Redshift",
          "Node.js"
        ],
        "pricingPlans": [
          {
            "name": "Standard Dashboard",
            "price": "₹49,999",
            "desc": "Core financial reports",
            "features": [
              "P&L Dashboard",
              "Branch Reports",
              "NPA Tracking",
              "Monthly Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Intelligence Suite",
            "price": "₹94,999",
            "desc": "Full BI & analytics platform",
            "features": [
              "Forecasting",
              "Regulatory Reports",
              "Custom KPIs",
              "Drill-down Explorer",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it pull data from our existing core banking system?",
            "a": "Yes, we build custom data connectors to pull data from your CBS (like Finacle, Temenos, or custom systems) via APIs or direct DB connections."
          }
        ],
        "caseStudies": [
          {
            "title": "Metro Co-operative Bank",
            "result": "Reduced monthly financial reporting effort from 3 days to 2 hours",
            "industry": "Co-operative Banking"
          }
        ]
      }
    ]
  },
  {
    "id": "insurance-solutions",
    "slug": "insurance-solutions",
    "name": "Insurance Solutions",
    "tagline": "Policy portals, claims management & insurance CRM systems",
    "color": "#0f766e",
    "bgColor": "#f0fdfa",
    "description": "We build digital transformation solutions for insurance companies, brokers, and agents — from policy management portals and claims automation to agent management systems.",
    "services": [
      {
        "slug": "insurance-website",
        "title": "Insurance Company Website",
        "tagline": "Professional websites that build trust and generate leads",
        "overview": "A secure, professional website for insurance companies, brokers, and agents to showcase products, generate leads, and provide customer self-service portals.",
        "features": [
          "Insurance Product Showcases",
          "Premium Calculator Tools",
          "Online Inquiry & Lead Forms",
          "Agent / Branch Locator",
          "Customer Login Portal",
          "Claims Reporting Form",
          "Blog & Resource Center",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Generate qualified insurance leads",
          "Build institutional trust",
          "Provide 24/7 self-service",
          "Showcase all insurance products",
          "Regulatory compliance pages"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Development",
          "Calculator Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "AWS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Agency Website",
            "price": "₹24,999",
            "desc": "For insurance agents & brokers",
            "features": [
              "Up to 15 Pages",
              "Lead Forms",
              "Premium Calculator",
              "Mobile Responsive",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Corporate Website",
            "price": "₹54,999",
            "desc": "For insurance companies",
            "features": [
              "Customer Portal",
              "Agent Locator",
              "Claims Form",
              "Blog",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can customers view their policy details on the website?",
            "a": "Yes, the Corporate plan includes a customer portal where policyholders can login to view their policies and download documents."
          }
        ],
        "caseStudies": [
          {
            "title": "ShieldCover Insurance",
            "result": "Online lead generation increased by 85% within 2 months of website launch",
            "industry": "General Insurance"
          }
        ]
      },
      {
        "slug": "policy-management-system",
        "title": "Policy Management System",
        "tagline": "Centralize and automate your policy lifecycle",
        "overview": "A comprehensive Policy Management System (PMS) to manage the complete lifecycle of insurance policies from issuance, endorsements, and renewals to cancellations.",
        "features": [
          "Policy Issuance & Numbering",
          "Endorsement Management",
          "Automated Renewal Reminders",
          "Premium Payment Tracking",
          "Policy Document Generation (PDF)",
          "Agent & Broker Portal",
          "Customer Self-service Portal",
          "Reporting & Analytics"
        ],
        "benefits": [
          "Eliminate manual policy processing",
          "Zero missed renewals",
          "Reduce policy issuance time",
          "Improve agent productivity",
          "Complete audit trails"
        ],
        "process": [
          "Policy Workflow Analysis",
          "PMS Architecture",
          "Development",
          "Integration",
          "UAT",
          "Deployment",
          "Training"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "PDFKit",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Basic PMS",
            "price": "₹69,999",
            "desc": "Core policy management",
            "features": [
              "Policy Issuance",
              "Renewal Reminders",
              "Document Generation",
              "Agent Portal",
              "7 Weeks Delivery"
            ]
          },
          {
            "name": "Enterprise PMS",
            "price": "₹1,39,999",
            "desc": "Full lifecycle management",
            "features": [
              "Endorsements",
              "Customer Portal",
              "Advanced Analytics",
              "Multi-product Support",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it handle multiple lines of insurance (health, motor, life)?",
            "a": "Yes, the Enterprise PMS is designed to handle multiple product lines with configurable policy structures for each."
          }
        ],
        "caseStudies": [
          {
            "title": "PrimeCover Brokers",
            "result": "Policy renewal rate improved from 60% to 88% through automated reminders",
            "industry": "Insurance Broking"
          }
        ]
      },
      {
        "slug": "claims-management",
        "title": "Claims Management System",
        "tagline": "Automate and accelerate your claims processing",
        "overview": "A digital claims management platform to streamline FNOL (First Notice of Loss), document collection, adjudication, and settlement, reducing TAT and improving customer satisfaction.",
        "features": [
          "Online FNOL (Claim Intimation)",
          "Digital Document Submission",
          "Claim Status Tracker for Customers",
          "Surveyor Assignment & Workflow",
          "Automated Approval Workflows",
          "Fraud Detection Flags",
          "Settlement Processing",
          "Claims Analytics Dashboard"
        ],
        "benefits": [
          "Reduce claims TAT by 50%",
          "Improve customer satisfaction",
          "Detect fraudulent claims",
          "Paperless claims process",
          "Complete claims audit trail"
        ],
        "process": [
          "Claims Process Mapping",
          "System Design",
          "Development",
          "Fraud Logic Integration",
          "Testing",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Basic Claims",
            "price": "₹59,999",
            "desc": "Digital claim submission & tracking",
            "features": [
              "Online FNOL",
              "Document Upload",
              "Status Tracker",
              "Basic Workflow",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Claims",
            "price": "₹1,19,999",
            "desc": "Full automated claims platform",
            "features": [
              "Surveyor Portal",
              "Fraud Flags",
              "Auto Approvals",
              "Settlement Processing",
              "11 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How does the fraud detection work?",
            "a": "The system uses rule-based flags (e.g., duplicate claims, suspicious timing) that alert the claims team for manual review before approval."
          }
        ],
        "caseStudies": [
          {
            "title": "MotorGuard Insurance",
            "result": "Reduced average claim settlement time from 21 days to 7 days",
            "industry": "Motor Insurance"
          }
        ]
      },
      {
        "slug": "insurance-agent-portal",
        "title": "Insurance Agent Portal",
        "tagline": "Empower your agent network with digital tools",
        "overview": "A dedicated web and mobile portal for insurance agents and POSPs to manage their clients, issue policies, track commissions, and access product training materials.",
        "features": [
          "Client Portfolio Management",
          "Online Policy Issuance & Quoting",
          "Commission Tracking & Statements",
          "Lead Management",
          "Product Rate Cards",
          "Training & Exam Portal",
          "Document Repository",
          "Instant Chat Support"
        ],
        "benefits": [
          "Increase agent productivity",
          "Reduce branch support calls",
          "Transparent commission visibility",
          "Better trained agent force",
          "Track agent performance KPIs"
        ],
        "process": [
          "Agent Workflow Design",
          "Portal Development",
          "Integration with PMS",
          "Testing",
          "Agent Onboarding",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "React Native",
          "Firebase"
        ],
        "pricingPlans": [
          {
            "name": "Agent Hub",
            "price": "₹39,999",
            "desc": "Core agent management portal",
            "features": [
              "Client Management",
              "Commission Tracker",
              "Document Repository",
              "Mobile Responsive",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Agent Pro Suite",
            "price": "₹74,999",
            "desc": "Full-featured agent platform with app",
            "features": [
              "Online Quoting",
              "Training Portal",
              "Mobile App",
              "Performance Analytics",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can agents issue policies directly from the portal?",
            "a": "Yes, the Pro Suite includes an online quoting and policy issuance module so agents can issue policies without visiting the office."
          }
        ],
        "caseStudies": [
          {
            "title": "InsureNet Brokers",
            "result": "Agent digital adoption reached 90%, reducing HO support calls by 60%",
            "industry": "Life Insurance Broking"
          }
        ]
      },
      {
        "slug": "insurance-crm",
        "title": "Insurance CRM",
        "tagline": "Manage every lead, policy, and renewal relationship",
        "overview": "A purpose-built CRM for insurance companies and agents to track leads, manage renewals, automate follow-ups, and maximize customer lifetime value.",
        "features": [
          "Lead Capture (Web, WhatsApp, Referral)",
          "Policy Renewal Pipeline",
          "Automated SMS/Email/WhatsApp Reminders",
          "Cross-sell & Upsell Prompts",
          "Agent Assignment & Tracking",
          "Customer 360° Profile",
          "Renewal Due Alerts",
          "Performance Analytics"
        ],
        "benefits": [
          "Never miss a renewal opportunity",
          "Higher cross-sell rates",
          "Streamline agent follow-ups",
          "Complete customer history",
          "Measure campaign ROI"
        ],
        "process": [
          "CRM Design",
          "Build & Integration",
          "Data Migration",
          "Automation Setup",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Twilio",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Insurance CRM",
            "price": "₹34,999",
            "desc": "Core lead & renewal management",
            "features": [
              "Lead Management",
              "Renewal Reminders",
              "Email/SMS Automation",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "InsureCRM Pro",
            "price": "₹64,999",
            "desc": "Advanced pipeline & analytics",
            "features": [
              "360° Profiles",
              "Cross-sell Engine",
              "WhatsApp Automation",
              "Performance Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it import our existing customer data?",
            "a": "Yes, we handle complete data migration from Excel, existing CRMs, or your PMS into the new CRM with deduplication."
          }
        ],
        "caseStudies": [
          {
            "title": "SecureLife Advisors",
            "result": "Policy renewal rate improved by 22 percentage points through automated campaigns",
            "industry": "Life Insurance Advisory"
          }
        ]
      },
      {
        "slug": "insurance-mobile-app",
        "title": "Insurance Mobile App",
        "tagline": "Your insurance business in every customer's pocket",
        "overview": "A branded mobile application for policyholders to view policies, pay premiums, file claims, and chat with support — all from their smartphone.",
        "features": [
          "Policy Dashboard & Details",
          "Premium Payment (UPI/Card)",
          "Instant Claim Filing (FNOL)",
          "Digital Policy Cards",
          "Push Notifications for Renewals",
          "Agent Connect & Chat",
          "Loyalty Rewards",
          "Biometric Login"
        ],
        "benefits": [
          "Improve customer retention",
          "Reduce servicing costs",
          "Instant claim filing reduces TAT",
          "High-value engagement channel",
          "Brand loyalty through app presence"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "API Development",
          "iOS & Android Dev",
          "Security Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Policyholder App",
            "price": "₹74,999",
            "desc": "View, pay & claim mobile app",
            "features": [
              "Policy Dashboard",
              "Premium Payments",
              "Claim Filing",
              "Push Notifications",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Full Insurance App",
            "price": "₹1,29,999",
            "desc": "Complete digital insurance experience",
            "features": [
              "Loyalty Rewards",
              "Agent Connect",
              "Digital Cards",
              "Biometric Login",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will the app be published under our brand name on the app stores?",
            "a": "Yes, the app will be published under your brand name and account on both the Apple App Store and Google Play Store."
          }
        ],
        "caseStudies": [
          {
            "title": "FutureSafe Insurance",
            "result": "60% of premium renewals now happen through the mobile app",
            "industry": "Health Insurance"
          }
        ]
      },
      {
        "slug": "insurance-comparison-portal",
        "title": "Insurance Comparison Portal",
        "tagline": "Help customers compare and buy the right insurance",
        "overview": "An aggregator-style insurance comparison portal where users can compare policies across providers on price, features, and ratings and purchase directly online.",
        "features": [
          "Multi-insurer Policy Comparison",
          "Premium Calculator by Profile",
          "Feature-wise Comparison Table",
          "Online Application & KYC",
          "Integrated Payment Gateway",
          "Policy Delivery via Email",
          "Customer Reviews & Ratings",
          "SEO-optimized Content Pages"
        ],
        "benefits": [
          "Generate revenue from policy issuances",
          "Provide genuine value to customers",
          "SEO drives free traffic",
          "Build a marketplace business model",
          "Partner with multiple insurers"
        ],
        "process": [
          "Insurer APIs Integration",
          "Comparison Engine Design",
          "Portal Development",
          "Payment Setup",
          "SEO Structure",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Insurer APIs",
          "Razorpay",
          "Elasticsearch"
        ],
        "pricingPlans": [
          {
            "name": "Comparison Portal",
            "price": "₹99,999",
            "desc": "Core comparison & quoting portal",
            "features": [
              "Multi-insurer Comparison",
              "Premium Calculator",
              "Lead Capture",
              "Basic SEO",
              "10 Weeks Delivery"
            ]
          },
          {
            "name": "Aggregator Platform",
            "price": "₹1,99,999",
            "desc": "Full-featured insurance marketplace",
            "features": [
              "Online Purchase",
              "Payment Gateway",
              "Policy Delivery",
              "Advanced SEO",
              "16 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Do you have existing insurer API integrations?",
            "a": "We have experience integrating with major insurers via platforms like PolicyBazaar APIs, direct insurer APIs, and middleware aggregator APIs."
          }
        ],
        "caseStudies": [
          {
            "title": "CompareRight",
            "result": "Reached 10,000 monthly active users generating 2,000+ policy leads per month within one year",
            "industry": "Insurance Aggregation"
          }
        ]
      }
    ]
  },
  {
    "id": "logistics-solutions",
    "slug": "logistics-solutions",
    "name": "Logistics Solutions",
    "tagline": "Fleet management, shipment tracking & logistics automation",
    "color": "#b45309",
    "bgColor": "#fffbeb",
    "description": "We digitize logistics and transportation businesses with intelligent fleet management, real-time shipment tracking, and end-to-end TMS solutions.",
    "services": [
      {
        "slug": "logistics-website",
        "title": "Logistics Company Website",
        "tagline": "Professional websites for freight and transport companies",
        "overview": "A high-impact website for logistics, freight, and transport companies to showcase services, generate B2B leads, and provide shipment enquiry tools.",
        "features": [
          "Service Showcase (FTL, LTL, Air, Sea)",
          "Instant Rate/Quote Request Forms",
          "Shipment Tracking Widget",
          "Branch & Network Map",
          "Fleet Photo Gallery",
          "Customer Testimonials",
          "Mobile-Responsive Design",
          "SEO Optimized"
        ],
        "benefits": [
          "Generate B2B freight leads",
          "Showcase logistics capabilities",
          "Build trust with enterprise clients",
          "Provide 24/7 online enquiries",
          "Improve search engine visibility"
        ],
        "process": [
          "Discovery",
          "UI/UX Design",
          "Development",
          "Integration",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Vercel",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Business Website",
            "price": "₹24,999",
            "desc": "Professional logistics website",
            "features": [
              "Up to 15 Pages",
              "Quote Request Form",
              "Fleet Gallery",
              "Mobile Responsive",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Lead Gen Website",
            "price": "₹49,999",
            "desc": "Tracking widget & full B2B site",
            "features": [
              "Tracking Widget",
              "Rate Calculator",
              "SEO Optimization",
              "Network Map",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can customers track their shipments on the website?",
            "a": "Yes, we integrate a shipment tracking widget that connects to your TMS or third-party courier APIs for real-time status."
          }
        ],
        "caseStudies": [
          {
            "title": "TransLog India",
            "result": "Generated 300+ B2B freight enquiries per month from the new website",
            "industry": "Road Freight"
          }
        ]
      },
      {
        "slug": "fleet-management-system",
        "title": "Fleet Management System",
        "tagline": "Real-time visibility and control of your vehicle fleet",
        "overview": "A comprehensive fleet management platform integrating GPS tracking, driver management, maintenance scheduling, and fuel monitoring for complete fleet control.",
        "features": [
          "Real-time GPS Vehicle Tracking",
          "Driver Management & Behavior Scoring",
          "Fuel Consumption Monitoring",
          "Preventive Maintenance Alerts",
          "Route History & Playback",
          "Geo-fencing & Alerts",
          "Vehicle Documents & Compliance",
          "Fleet Performance Dashboard"
        ],
        "benefits": [
          "Reduce fuel costs by 15-20%",
          "Prevent vehicle theft",
          "Improve driver safety",
          "Eliminate maintenance surprises",
          "Complete operational visibility"
        ],
        "process": [
          "GPS Hardware Selection",
          "API Integration",
          "FMS Development",
          "Alert Configuration",
          "Testing",
          "Fleet Onboarding",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "MQTT",
          "WebSockets",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Fleet Tracker",
            "price": "₹44,999",
            "desc": "GPS tracking & basic management",
            "features": [
              "Real-time Tracking",
              "Driver Management",
              "Geo-fencing",
              "Basic Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Fleet Pro",
            "price": "₹84,999",
            "desc": "Full fleet intelligence platform",
            "features": [
              "Fuel Monitoring",
              "Maintenance Alerts",
              "Driver Scoring",
              "Advanced Analytics",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it work with any GPS hardware?",
            "a": "Yes, we integrate with most standard GPS tracking devices via GPRS/MQTT protocols. We can recommend hardware brands if needed."
          }
        ],
        "caseStudies": [
          {
            "title": "Swift Carriers",
            "result": "Reduced fleet fuel costs by 18% and eliminated 3 instances of unauthorized vehicle use",
            "industry": "Road Logistics"
          }
        ]
      },
      {
        "slug": "shipment-tracking-platform",
        "title": "Shipment Tracking Platform",
        "tagline": "End-to-end shipment visibility for you and your customers",
        "overview": "A multi-courier, multi-modal shipment tracking platform providing real-time visibility across all your logistics partners in a single unified dashboard.",
        "features": [
          "Multi-courier API Integration",
          "Real-time Shipment Status",
          "Customer-facing Tracking Page",
          "Automated SMS/WhatsApp Notifications",
          "Exception & Delay Alerts",
          "Proof of Delivery (ePOD)",
          "Analytics & SLA Reporting",
          "Branded Tracking Experience"
        ],
        "benefits": [
          "Reduce \"where is my order\" calls by 70%",
          "Improve customer satisfaction",
          "Identify delivery bottlenecks",
          "SLA compliance monitoring",
          "Single view across all carriers"
        ],
        "process": [
          "Courier API Integrations",
          "Platform Build",
          "Notification Setup",
          "Customer Page Design",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "MongoDB",
          "Twilio",
          "Shiprocket API",
          "WebSockets"
        ],
        "pricingPlans": [
          {
            "name": "Tracking Hub",
            "price": "₹34,999",
            "desc": "Unified tracking dashboard",
            "features": [
              "3 Courier Integrations",
              "Status Dashboard",
              "Email Notifications",
              "Tracking Page",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Track Pro",
            "price": "₹69,999",
            "desc": "Full-scale tracking platform",
            "features": [
              "Unlimited Couriers",
              "SMS/WhatsApp Alerts",
              "ePOD",
              "SLA Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How many courier partners can it integrate with?",
            "a": "We have pre-built integrations for 30+ major couriers including Delhivery, BlueDart, DTDC, FedEx, and can add custom integrations."
          }
        ],
        "caseStudies": [
          {
            "title": "QuickShip Logistics",
            "result": "Reduced customer service calls about delivery status by 65%",
            "industry": "E-commerce Logistics"
          }
        ]
      },
      {
        "slug": "transport-management-system",
        "title": "Transport Management System (TMS)",
        "tagline": "Optimize the movement and management of goods",
        "overview": "A full-featured TMS to manage order creation, carrier selection, load planning, dispatch, proof of delivery, and freight billing in one integrated platform.",
        "features": [
          "Order & Load Management",
          "Carrier / Transporter Assignment",
          "Route Planning & Optimization",
          "Driver App (Mobile)",
          "Live Tracking Integration",
          "ePOD (Digital Proof of Delivery)",
          "Freight Invoice & Billing",
          "Analytics & Performance Reports"
        ],
        "benefits": [
          "Reduce freight costs",
          "Improve delivery performance",
          "Eliminate manual paper-based processes",
          "Real-time operational visibility",
          "Data-driven carrier management"
        ],
        "process": [
          "Process Mapping",
          "TMS Architecture",
          "Driver App Build",
          "Integration",
          "UAT",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "TMS Core",
            "price": "₹69,999",
            "desc": "Essential transport management",
            "features": [
              "Order Management",
              "Carrier Assignment",
              "Basic Tracking",
              "ePOD",
              "7 Weeks Delivery"
            ]
          },
          {
            "name": "TMS Enterprise",
            "price": "₹1,39,999",
            "desc": "Full-scale transport platform",
            "features": [
              "Route Optimization",
              "Driver App",
              "Freight Billing",
              "Advanced Analytics",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it include a mobile app for drivers?",
            "a": "Yes, the Enterprise plan includes a dedicated driver mobile app for Android to receive trip assignments, navigate, and submit ePOD."
          }
        ],
        "caseStudies": [
          {
            "title": "NationalMove Logistics",
            "result": "Improved on-time delivery rate from 72% to 95% within 6 months",
            "industry": "3PL Logistics"
          }
        ]
      },
      {
        "slug": "delivery-tracking-app",
        "title": "Delivery Tracking App",
        "tagline": "Last-mile delivery management for delivery agents",
        "overview": "A mobile application for delivery executives to manage daily deliveries, navigate to addresses, capture proof of delivery, and handle cash collections.",
        "features": [
          "Optimized Daily Delivery Route",
          "Google Maps Navigation",
          "Photo & Signature ePOD",
          "Cash Collection & COD Management",
          "Failed Delivery Workflow",
          "Real-time Status Updates to Customer",
          "Offline Mode Support",
          "Performance Analytics"
        ],
        "benefits": [
          "Faster last-mile delivery",
          "Eliminate paper delivery sheets",
          "Reduce failed deliveries",
          "Transparent delivery proof",
          "Track agent performance"
        ],
        "process": [
          "Workflow Design",
          "App Architecture",
          "Android Development",
          "Offline Mode Setup",
          "Testing",
          "Rollout"
        ],
        "technologies": [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Delivery App",
            "price": "₹39,999",
            "desc": "Core delivery agent app",
            "features": [
              "Route Display",
              "ePOD",
              "Status Updates",
              "Cash Collection",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Delivery",
            "price": "₹74,999",
            "desc": "Advanced with optimization & analytics",
            "features": [
              "Route Optimization",
              "Offline Mode",
              "Customer Notifications",
              "Analytics Dashboard",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does the app work without internet in remote areas?",
            "a": "Yes, the Smart Delivery plan supports offline mode where delivery agents can capture ePOD offline and sync when connectivity is restored."
          }
        ],
        "caseStudies": [
          {
            "title": "CityDeliver",
            "result": "Delivery agent productivity improved by 30%, with ePOD disputes eliminated",
            "industry": "Hyperlocal Delivery"
          }
        ]
      },
      {
        "slug": "logistics-crm",
        "title": "Logistics CRM",
        "tagline": "Manage B2B freight clients and grow your business",
        "overview": "A specialized CRM for logistics and freight companies to manage corporate clients, track shipments per client, generate invoices, and grow their B2B business.",
        "features": [
          "Corporate Client Management",
          "Shipment Enquiry & Quote Tracking",
          "Rate Card Management",
          "Invoice & Credit Management",
          "Automated Follow-up Sequences",
          "Service Complaint Tracking",
          "Client Performance Reports",
          "Business Development Pipeline"
        ],
        "benefits": [
          "Retain more corporate clients",
          "Faster quote-to-booking conversion",
          "Clear invoice management",
          "Identify top-revenue clients",
          "Proactive complaint resolution"
        ],
        "process": [
          "CRM Design",
          "Build & Customization",
          "Data Import",
          "Integration",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Logistics CRM",
            "price": "₹34,999",
            "desc": "Core client & quote management",
            "features": [
              "Client Management",
              "Quote Tracking",
              "Invoice Management",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Freight CRM Pro",
            "price": "₹64,999",
            "desc": "Advanced B2B sales platform",
            "features": [
              "Rate Card Management",
              "Business Dev Pipeline",
              "Client Analytics",
              "Complaint Tracking",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it generate freight invoices automatically?",
            "a": "Yes, the CRM can generate and email freight invoices based on the agreed rate cards and completed shipments."
          }
        ],
        "caseStudies": [
          {
            "title": "CargoPro Freight",
            "result": "Grew corporate client base by 40% using structured CRM-driven business development",
            "industry": "Air Freight"
          }
        ]
      },
      {
        "slug": "route-optimization-software",
        "title": "Route Optimization Software",
        "tagline": "Reduce delivery costs with intelligent routing",
        "overview": "An AI-powered route optimization engine that calculates the most efficient delivery routes for multiple stops, reducing fuel costs and delivery time.",
        "features": [
          "Multi-stop Route Optimization",
          "Time Window Constraints",
          "Vehicle Capacity Constraints",
          "Real-time Traffic Integration",
          "Dynamic Re-routing",
          "Driver App Integration",
          "Savings vs Manual Report",
          "API for Integration with TMS/ERP"
        ],
        "benefits": [
          "Reduce fuel costs by 20-25%",
          "Increase deliveries per route",
          "Reduce driver overtime",
          "Lower carbon footprint",
          "API-based, easy to integrate"
        ],
        "process": [
          "Delivery Data Analysis",
          "Optimization Algorithm Config",
          "Integration Build",
          "Testing with Real Routes",
          "Deployment"
        ],
        "technologies": [
          "Python (OR-Tools/Google Optimization)",
          "Node.js",
          "Google Maps API",
          "React",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Route Optimizer",
            "price": "₹54,999",
            "desc": "Core route optimization",
            "features": [
              "Multi-stop Optimization",
              "Time Windows",
              "Driver App Integration",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Router Pro",
            "price": "₹94,999",
            "desc": "Full-featured with real-time re-routing",
            "features": [
              "Dynamic Re-routing",
              "Capacity Constraints",
              "TMS API Integration",
              "Savings Analytics",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How much fuel cost reduction can we expect?",
            "a": "Based on our client data, companies typically see 15-25% reduction in total distance driven after implementing route optimization."
          }
        ],
        "caseStudies": [
          {
            "title": "FreshRoute Logistics",
            "result": "Reduced delivery distance by 22%, saving ₹18 Lakh annually in fuel costs",
            "industry": "Cold Chain Logistics"
          }
        ]
      }
    ]
  },
  {
    "id": "automobile-solutions",
    "slug": "automobile-solutions",
    "name": "Automobile Solutions",
    "tagline": "Dealership portals, service management & auto e-commerce",
    "color": "#374151",
    "bgColor": "#f9fafb",
    "description": "We build powerful digital solutions for car dealerships, auto service centers, and automobile brands — from dealership websites and inventory management to service CRMs and auto parts e-commerce.",
    "services": [
      {
        "slug": "automobile-dealership-website",
        "title": "Automobile Dealership Website",
        "tagline": "Showcase your inventory and generate test drive leads online",
        "overview": "A high-performance website for car dealerships with dynamic vehicle inventory, virtual showrooms, loan EMI calculators, and test drive booking systems.",
        "features": [
          "Dynamic Vehicle Inventory Listings",
          "Advanced Filter & Search (Brand, Model, Price)",
          "Online Test Drive Booking",
          "EMI Calculator",
          "Comparison Tool",
          "360° Virtual Car Tour",
          "Lead Capture Forms",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Generate quality test drive leads",
          "Showcase full inventory online",
          "Reduce showroom walk-in friction",
          "Improve digital discoverability",
          "Calculate EMIs instantly for buyers"
        ],
        "process": [
          "Inventory Structure Design",
          "UI/UX Design",
          "Development",
          "Inventory Upload",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "AWS",
          "Sanity CMS"
        ],
        "pricingPlans": [
          {
            "name": "Dealer Website",
            "price": "₹34,999",
            "desc": "Core dealership web presence",
            "features": [
              "Vehicle Inventory",
              "EMI Calculator",
              "Test Drive Booking",
              "Lead Forms",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Virtual Showroom",
            "price": "₹64,999",
            "desc": "Premium online showroom experience",
            "features": [
              "360° Car Tour",
              "Comparison Tool",
              "Loan Calculator",
              "SEO Optimization",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we update the vehicle inventory ourselves?",
            "a": "Yes, we provide a simple CMS where your team can add, update, or mark vehicles as sold without any technical knowledge."
          }
        ],
        "caseStudies": [
          {
            "title": "AutoNation Dealers",
            "result": "Test drive bookings increased by 200% within 3 months of the new website launch",
            "industry": "Multi-brand Car Dealership"
          }
        ]
      },
      {
        "slug": "vehicle-inventory-management",
        "title": "Vehicle Inventory Management",
        "tagline": "Full control over your vehicle stock in real-time",
        "overview": "A digital inventory management system for car dealerships and used car platforms to manage stock, track vehicle status, and sync inventory across the website and showroom.",
        "features": [
          "Vehicle Stock Register",
          "VIN-based Vehicle Tracking",
          "Stock Aging Alerts",
          "Automated Website Sync",
          "Multi-location Stock Management",
          "Procurement & Delivery Tracking",
          "PDI (Pre-delivery Inspection) Checklist",
          "Sales Performance by Model"
        ],
        "benefits": [
          "Zero discrepancies between stock and website",
          "Instant stock visibility",
          "Reduce slow-moving inventory",
          "Streamline procurement",
          "Data-driven purchasing decisions"
        ],
        "process": [
          "Inventory Workflow Analysis",
          "System Development",
          "Website Integration",
          "Data Import",
          "Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Barcode APIs"
        ],
        "pricingPlans": [
          {
            "name": "Inventory System",
            "price": "₹39,999",
            "desc": "Core vehicle stock management",
            "features": [
              "Stock Register",
              "Website Sync",
              "Aging Alerts",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Multi-location IMS",
            "price": "₹74,999",
            "desc": "Advanced multi-showroom management",
            "features": [
              "Multi-location Stock",
              "VIN Tracking",
              "PDI Checklist",
              "Sales Analytics",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it sync vehicle availability with our website in real-time?",
            "a": "Yes, the system syncs with your dealership website instantly when a vehicle is sold or a new vehicle arrives."
          }
        ],
        "caseStudies": [
          {
            "title": "PremiumWheels Group",
            "result": "Eliminated manual stock spreadsheets across 4 showrooms, saving 15 hours/week",
            "industry": "Luxury Car Dealership"
          }
        ]
      },
      {
        "slug": "car-booking-system",
        "title": "Car Booking & Test Drive System",
        "tagline": "Streamline test drives and car deliveries digitally",
        "overview": "An online platform enabling customers to book test drives, reserve vehicles, track order status, and schedule delivery — all with automated communications.",
        "features": [
          "Online Test Drive Slot Booking",
          "Vehicle Reservation with Token Payment",
          "Booking Confirmation & Reminders",
          "Order Status Tracker",
          "Delivery Scheduling",
          "Customer Communication Portal",
          "Sales Executive Assignment",
          "Admin Dashboard"
        ],
        "benefits": [
          "Reduce no-shows with reminders",
          "Accept token booking online",
          "Improve customer experience",
          "Sales team stays organized",
          "Capture hot leads digitally"
        ],
        "process": [
          "UX Design",
          "Booking Engine Development",
          "Payment Integration",
          "Notification Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "SendGrid",
          "Twilio"
        ],
        "pricingPlans": [
          {
            "name": "Test Drive Booking",
            "price": "₹24,999",
            "desc": "Simple test drive scheduler",
            "features": [
              "Online Booking",
              "Email/SMS Reminders",
              "Admin Dashboard",
              "Calendar Sync",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Full Booking System",
            "price": "₹49,999",
            "desc": "Token payments & delivery tracking",
            "features": [
              "Token Payment",
              "Order Tracker",
              "Delivery Scheduling",
              "Customer Portal",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we charge a refundable token amount during booking?",
            "a": "Yes, the Full Booking System includes payment integration to collect refundable or non-refundable token amounts online."
          }
        ],
        "caseStudies": [
          {
            "title": "RoadStar Motors",
            "result": "Reduced test drive no-shows by 55% through automated WhatsApp reminders",
            "industry": "New Car Dealership"
          }
        ]
      },
      {
        "slug": "service-center-management",
        "title": "Service Center Management",
        "tagline": "Digitize your automobile service operations",
        "overview": "A comprehensive management system for automobile service centers to handle job cards, parts inventory, technician assignment, customer updates, and invoicing.",
        "features": [
          "Digital Job Card Creation",
          "Service History per Vehicle (VIN)",
          "Technician Assignment & Tracking",
          "Spare Parts Inventory",
          "Customer Update Notifications (WhatsApp)",
          "Video/Photo of Issues Shared to Customer",
          "Invoice & GST Billing",
          "Service Due Reminders"
        ],
        "benefits": [
          "Eliminate paper job cards",
          "Improve customer transparency",
          "Faster vehicle turnaround",
          "Control spare parts inventory",
          "Build customer trust and loyalty"
        ],
        "process": [
          "Process Mapping",
          "System Development",
          "Parts Integration",
          "Notification Setup",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "React Native",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Service Manager",
            "price": "₹44,999",
            "desc": "Core service center management",
            "features": [
              "Digital Job Cards",
              "Technician Assignment",
              "Basic Invoice",
              "Email Alerts",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Service Pro",
            "price": "₹84,999",
            "desc": "Full-featured service center suite",
            "features": [
              "WhatsApp Updates",
              "Parts Inventory",
              "Service History",
              "GST Billing",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can customers see live updates of their vehicle service?",
            "a": "Yes, the Service Pro plan sends WhatsApp and SMS updates at each stage of the service, keeping customers informed without them needing to call."
          }
        ],
        "caseStudies": [
          {
            "title": "ServicePro Center",
            "result": "Customer satisfaction (NPS) improved from 52 to 78 through proactive update notifications",
            "industry": "Multi-brand Service Center"
          }
        ]
      },
      {
        "slug": "automobile-mobile-app",
        "title": "Automobile Mobile App",
        "tagline": "Your dealership and service in every driver's pocket",
        "overview": "A branded mobile app for your automotive brand or dealership allowing customers to browse vehicles, book services, track orders, and access roadside assistance.",
        "features": [
          "Vehicle Browsing & Comparison",
          "Service Booking & History",
          "Service Status Tracker",
          "Emergency Roadside Assistance",
          "Loyalty Points & Rewards",
          "Insurance & RC Reminder",
          "Push Notifications",
          "In-app Chat Support"
        ],
        "benefits": [
          "Build long-term customer loyalty",
          "Drive repeat service bookings",
          "Premium brand experience",
          "Reduce customer service calls",
          "Roadside assistance differentiator"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "API Development",
          "iOS & Android Dev",
          "Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "AWS",
          "Razorpay"
        ],
        "pricingPlans": [
          {
            "name": "Service App",
            "price": "₹69,999",
            "desc": "Service booking & tracking app",
            "features": [
              "Service Booking",
              "Status Tracker",
              "Push Notifications",
              "iOS & Android",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Full Auto App",
            "price": "₹1,24,999",
            "desc": "Complete automotive experience",
            "features": [
              "Vehicle Browsing",
              "Roadside Assistance",
              "Loyalty Program",
              "In-app Chat",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can the app show the real-time service status of the customer's car?",
            "a": "Yes, the app syncs with the service center management system to show real-time job card status and updates."
          }
        ],
        "caseStudies": [
          {
            "title": "DriveElite Motors",
            "result": "App achieved 20,000+ downloads with 70% of service bookings now done via the app",
            "industry": "Luxury Car Dealership"
          }
        ]
      },
      {
        "slug": "auto-parts-ecommerce",
        "title": "Auto Parts E-commerce Store",
        "tagline": "Sell genuine and aftermarket auto parts online",
        "overview": "A specialized e-commerce platform for auto parts retailers with vehicle compatibility search, bulk ordering for garages, and multi-brand product catalogs.",
        "features": [
          "Vehicle Compatibility Filter (Year/Make/Model)",
          "Multi-brand Parts Catalog",
          "Garage / B2B Bulk Ordering",
          "Real-time Stock Availability",
          "GST-compliant Invoicing",
          "Shipping & Delivery Integration",
          "Parts Enquiry for Rare Items",
          "Mobile-Responsive Store"
        ],
        "benefits": [
          "Reach customers beyond your geography",
          "Streamline B2B garage orders",
          "Reduce order errors with compatibility filter",
          "Online GST invoicing",
          "Build a loyal garage customer base"
        ],
        "process": [
          "Catalog Structure Design",
          "E-commerce Platform Build",
          "Compatibility Engine",
          "Payment Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Shiprocket",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Parts Store",
            "price": "₹54,999",
            "desc": "Core auto parts e-commerce",
            "features": [
              "Product Catalog",
              "Compatibility Filter",
              "Payment Gateway",
              "GST Invoicing",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "B2B Auto Store",
            "price": "₹94,999",
            "desc": "B2C + B2B garage ordering platform",
            "features": [
              "Bulk Ordering",
              "Garage Accounts",
              "Credit Management",
              "Advanced Analytics",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How does the vehicle compatibility filter work?",
            "a": "Customers select their vehicle Year, Make, and Model, and the system automatically filters to show only compatible parts from your catalog."
          }
        ],
        "caseStudies": [
          {
            "title": "AutoGenuine Parts",
            "result": "Online sales grew to 30% of total revenue within 12 months of launching the e-commerce store",
            "industry": "Auto Parts Retail"
          }
        ]
      },
      {
        "slug": "automobile-crm",
        "title": "Automobile CRM",
        "tagline": "Manage leads, follow-ups, and loyalty for auto businesses",
        "overview": "A specialized CRM for car dealerships and service centers to manage walk-in and digital leads, track test drives, schedule follow-ups, and maximize customer lifetime value.",
        "features": [
          "Lead Management (Walk-in, Web, Digital)",
          "Test Drive & Enquiry Tracking",
          "Sales Pipeline & Follow-up Scheduler",
          "Customer Purchase & Service History",
          "Insurance Renewal Alerts",
          "Service Due Reminders",
          "Lost Deal Analysis",
          "Showroom Performance Dashboard"
        ],
        "benefits": [
          "Never lose a potential buyer",
          "Higher lead-to-sale conversion",
          "Maximize after-sales service revenue",
          "Proactively manage renewals",
          "Sales team accountability"
        ],
        "process": [
          "CRM Design",
          "Development",
          "Data Migration",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Twilio",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Auto CRM",
            "price": "₹39,999",
            "desc": "Core dealership lead management",
            "features": [
              "Lead Tracking",
              "Test Drive Pipeline",
              "Follow-up Scheduler",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Dealership Pro CRM",
            "price": "₹74,999",
            "desc": "Full-lifecycle automotive CRM",
            "features": [
              "Service Reminders",
              "Insurance Alerts",
              "Lost Deal Analysis",
              "Performance Dashboard",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it send automatic WhatsApp reminders for service due dates?",
            "a": "Yes, the Pro CRM integrates with WhatsApp Business API to send automated reminders when a vehicle's service is due."
          }
        ],
        "caseStudies": [
          {
            "title": "SpeedWay Motors",
            "result": "Increased after-sales service bookings by 35% through automated service due reminders",
            "industry": "Car Dealership"
          }
        ]
      }
    ]
  },
  {
    "id": "fitness-solutions",
    "slug": "fitness-solutions",
    "name": "Fitness Solutions",
    "tagline": "Gym management, member apps & online fitness platforms",
    "color": "#16a34a",
    "bgColor": "#f0fdf4",
    "description": "We build high-energy digital platforms for gyms, fitness studios, and wellness brands — from member management and online class booking to personal fitness apps and digital marketing.",
    "services": [
      {
        "slug": "fitness-gym-website",
        "title": "Gym & Fitness Center Website",
        "tagline": "Energetic websites that convert visitors to members",
        "overview": "A high-energy, visually stunning website for gyms and fitness studios to showcase facilities, membership plans, classes, and generate lead enquiries.",
        "features": [
          "Facility & Equipment Showcase",
          "Membership Plan Display",
          "Class Schedule & Timetable",
          "Trainer Profiles",
          "Free Trial Lead Form",
          "Transformation Gallery (Before/After)",
          "Testimonials & Reviews",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Generate quality membership leads",
          "Showcase facilities impressively",
          "Build social proof",
          "Allow easy online trial bookings",
          "Improve Google Maps visibility"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Development",
          "Content Upload",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Vercel",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Gym Website",
            "price": "₹19,999",
            "desc": "Professional gym web presence",
            "features": [
              "Up to 10 Pages",
              "Class Schedule",
              "Lead Form",
              "Mobile Responsive",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Fitness Pro Site",
            "price": "₹39,999",
            "desc": "Full-featured fitness website",
            "features": [
              "Membership Plans",
              "Trainer Profiles",
              "Transformation Gallery",
              "SEO Basics",
              "4 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can members see the class schedule and book online?",
            "a": "Yes, we can integrate a live class schedule with online booking so members can reserve spots for classes directly from the website."
          }
        ],
        "caseStudies": [
          {
            "title": "IronZone Fitness",
            "result": "Generated 150+ monthly trial leads from the new website within 2 months",
            "industry": "Premium Gym"
          }
        ]
      },
      {
        "slug": "gym-member-management",
        "title": "Gym Member Management Software",
        "tagline": "Manage memberships, attendance & renewals effortlessly",
        "overview": "A complete gym management platform to handle member onboarding, biometric attendance, membership expiry, fee collection, and communications.",
        "features": [
          "Member Onboarding & Profiles",
          "Biometric / QR Code Attendance",
          "Membership Expiry Alerts",
          "Online & Offline Fee Collection",
          "Membership Plan Management",
          "Freeze & Pause Features",
          "Staff & Trainer Management",
          "Revenue & Attendance Reports"
        ],
        "benefits": [
          "Eliminate paper registers and manual tracking",
          "Never miss a membership renewal",
          "Automate fee collection follow-ups",
          "Monitor gym utilization",
          "Reduce front desk workload"
        ],
        "process": [
          "Workflow Design",
          "System Development",
          "Biometric Integration",
          "Data Import",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Biometric SDK",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Gym Manager",
            "price": "₹29,999",
            "desc": "Core membership management",
            "features": [
              "Member Profiles",
              "Attendance Tracking",
              "Fee Collection",
              "Renewal Alerts",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Fitness Suite",
            "price": "₹54,999",
            "desc": "Full-featured gym management",
            "features": [
              "Biometric Integration",
              "Staff Management",
              "Revenue Reports",
              "Online Payments",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it integrate with our existing biometric attendance device?",
            "a": "Yes, we integrate with most standard biometric devices via their SDK or direct DB connection to sync attendance in real-time."
          }
        ],
        "caseStudies": [
          {
            "title": "FitLife Centers",
            "result": "Membership renewal rate improved from 65% to 88% through automated WhatsApp reminders",
            "industry": "Fitness Chain"
          }
        ]
      },
      {
        "slug": "online-class-booking",
        "title": "Online Class Booking System",
        "tagline": "Let members book classes, sessions & trainers online",
        "overview": "An intelligent booking system for fitness studios allowing members to browse class schedules, book spots, pay for sessions, and manage their fitness calendar.",
        "features": [
          "Live Class Schedule Display",
          "Spot Booking & Waitlist",
          "One-on-one Trainer Booking",
          "Online Payment & Prepaid Packs",
          "Cancellation & Reschedule Rules",
          "Automated Reminders (SMS/WhatsApp)",
          "Attendance Tracking",
          "Class Capacity Management"
        ],
        "benefits": [
          "Reduce front desk phone calls",
          "Maximize class attendance",
          "Generate advance revenue via packs",
          "Reduce no-shows with reminders",
          "Manage capacity effortlessly"
        ],
        "process": [
          "Booking Flow Design",
          "Platform Development",
          "Payment Integration",
          "Notification Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Twilio",
          "Firebase"
        ],
        "pricingPlans": [
          {
            "name": "Class Scheduler",
            "price": "₹24,999",
            "desc": "Basic class booking",
            "features": [
              "Schedule Display",
              "Spot Booking",
              "Reminders",
              "Admin Dashboard",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Booking Pro",
            "price": "₹44,999",
            "desc": "Full booking & payment system",
            "features": [
              "Online Payments",
              "Prepaid Packs",
              "Trainer Booking",
              "Capacity Management",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we sell multi-session packs that members use to book classes?",
            "a": "Yes, members can purchase prepaid packs and use credits to book individual classes or sessions without per-class payments."
          }
        ],
        "caseStudies": [
          {
            "title": "FlowYoga Studio",
            "result": "Online class bookings replaced 80% of phone-in bookings, saving 10 staff hours per week",
            "industry": "Yoga Studio"
          }
        ]
      },
      {
        "slug": "fitness-mobile-app",
        "title": "Fitness Mobile App",
        "tagline": "Your gym in every member's smartphone",
        "overview": "A branded fitness mobile app for gyms and studios to engage members with schedules, workout content, class booking, progress tracking, and community features.",
        "features": [
          "Class Schedule & Booking",
          "Workout Video Library",
          "Progress Tracker (Weight, Reps, Measurements)",
          "Membership Card & QR Code Entry",
          "Push Notifications for Classes & Offers",
          "Trainer Chat",
          "Community Feed & Challenges",
          "In-app Payment"
        ],
        "benefits": [
          "Increase member retention",
          "Build a fitness community",
          "Premium brand experience",
          "Reduce churn with engagement",
          "Additional revenue via in-app sales"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Backend API",
          "iOS & Android Dev",
          "Content Upload",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Member App",
            "price": "₹69,999",
            "desc": "Core gym engagement app",
            "features": [
              "Class Booking",
              "Membership Card",
              "Push Notifications",
              "iOS & Android",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Fitness App Pro",
            "price": "₹1,19,999",
            "desc": "Full fitness community app",
            "features": [
              "Workout Library",
              "Progress Tracker",
              "Community Feed",
              "In-app Payments",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can our trainers upload workout videos directly to the app?",
            "a": "Yes, we provide a trainer content panel where coaches can upload workout videos and programs that members can access within the app."
          }
        ],
        "caseStudies": [
          {
            "title": "PeakForm Fitness",
            "result": "Member retention improved by 25% after launching the community-focused mobile app",
            "industry": "Boutique Fitness Studio"
          }
        ]
      },
      {
        "slug": "workout-nutrition-app",
        "title": "Workout & Nutrition Tracking App",
        "tagline": "Help users achieve their fitness goals digitally",
        "overview": "A consumer fitness app featuring personalized workout plans, nutrition tracking, calorie counting, progress photos, and AI-powered fitness recommendations.",
        "features": [
          "Personalized Workout Plan Builder",
          "Exercise Library (Video Demonstrations)",
          "Nutrition & Calorie Tracker",
          "Food Database (Indian Food Included)",
          "Progress Photos & Measurements",
          "Body Composition Tracker",
          "AI Workout Suggestions",
          "Water & Sleep Tracking"
        ],
        "benefits": [
          "Monetize fitness expertise digitally",
          "Build a scalable SaaS fitness product",
          "Improve user health outcomes",
          "High engagement and retention",
          "Premium subscription model"
        ],
        "process": [
          "Product Strategy",
          "UI/UX Design",
          "API & AI Development",
          "Mobile Dev",
          "Content Upload",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Python (AI)",
          "Node.js",
          "PostgreSQL",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Fitness Tracker",
            "price": "₹99,999",
            "desc": "Core workout & nutrition app",
            "features": [
              "Workout Plans",
              "Exercise Library",
              "Calorie Tracker",
              "Progress Photos",
              "10 Weeks Delivery"
            ]
          },
          {
            "name": "AI Fitness App",
            "price": "₹1,79,999",
            "desc": "AI-powered personalized fitness",
            "features": [
              "AI Recommendations",
              "Indian Food Database",
              "Body Composition",
              "Subscriptions",
              "16 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does the food database include Indian foods?",
            "a": "Yes, we include a comprehensive Indian food database with calories and macros for common dishes, dals, rotis, and more."
          }
        ],
        "caseStudies": [
          {
            "title": "NutriFit App",
            "result": "Reached 25,000 active subscribers within 8 months of launch",
            "industry": "Health & Fitness Tech"
          }
        ]
      },
      {
        "slug": "gym-crm",
        "title": "Gym CRM",
        "tagline": "Convert more leads and retain more members",
        "overview": "A specialized CRM for gyms and fitness studios to manage walk-in and online leads, track trial conversions, and build long-term member relationships.",
        "features": [
          "Lead Capture (Walk-in, Web, Social)",
          "Trial Visit Tracking & Follow-up",
          "Sales Pipeline to Membership Conversion",
          "Automated WhatsApp/SMS Drip Sequences",
          "Member Engagement Score",
          "Re-engagement Campaigns for Inactive Members",
          "Staff Performance Dashboard",
          "Revenue Forecasting"
        ],
        "benefits": [
          "Convert more leads to paid members",
          "Reactivate dormant members",
          "Structured follow-up workflow for sales staff",
          "Measure staff performance",
          "Predict monthly revenue"
        ],
        "process": [
          "CRM Design",
          "Build",
          "Integration with Booking System",
          "Data Import",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Twilio",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Gym CRM",
            "price": "₹29,999",
            "desc": "Core lead & trial management",
            "features": [
              "Lead Management",
              "Trial Tracking",
              "Follow-up Automation",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Fitness CRM Pro",
            "price": "₹54,999",
            "desc": "Advanced member growth platform",
            "features": [
              "Re-engagement Campaigns",
              "Engagement Scoring",
              "Revenue Forecasting",
              "Staff Dashboard",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we track which consultant made which placement?",
            "a": "Yes, every placement and associated fee is tracked against the responsible consultant, enabling fair performance and commission management."
          }
        ],
        "caseStudies": [
          {
            "title": "MaxFit Gym Network",
            "result": "Trial-to-membership conversion rate improved from 28% to 52%",
            "industry": "Fitness Chain"
          }
        ]
      },
      {
        "slug": "fitness-digital-marketing",
        "title": "Fitness Digital Marketing",
        "tagline": "Fill your gym with qualified local members",
        "overview": "Specialized digital marketing for gyms and fitness studios, including local Meta Ads, Google Ads, SEO, and social media campaigns to attract new members.",
        "features": [
          "Local Google & Meta Ads Management",
          "Instagram & Facebook Content Creation",
          "Transformation Video Campaigns",
          "Local SEO & Google My Business",
          "Influencer Marketing",
          "Referral Campaign Setup",
          "WhatsApp Broadcast Campaigns",
          "Monthly Analytics Reports"
        ],
        "benefits": [
          "Attract members from local target areas",
          "Low cost per lead with targeted ads",
          "Build strong social media presence",
          "Leverage member success stories",
          "Measurable ROI on marketing spend"
        ],
        "process": [
          "Competitor Analysis",
          "Strategy",
          "Ad Creative Design",
          "Campaign Setup",
          "Launch",
          "Optimize",
          "Monthly Report"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Google Ads",
          "Instagram",
          "WhatsApp Business API",
          "Canva"
        ],
        "pricingPlans": [
          {
            "name": "Local Fitness Ads",
            "price": "₹12,999/mo",
            "desc": "Local ads & social media",
            "features": [
              "Meta Ads",
              "Google My Business",
              "Social Content",
              "12 Posts/mo",
              "Monthly Report"
            ]
          },
          {
            "name": "Fitness Growth",
            "price": "₹24,999/mo",
            "desc": "Full-funnel fitness marketing",
            "features": [
              "Google + Meta Ads",
              "Transformation Campaigns",
              "Influencer Outreach",
              "WhatsApp Broadcasts",
              "Bi-weekly Reports"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How quickly will we see new member leads from ads?",
            "a": "Typically, Meta and Google Ads begin generating leads within the first week of launch. You should expect consistent quality leads from the second week onwards."
          }
        ],
        "caseStudies": [
          {
            "title": "FitCore Studios",
            "result": "Signed up 80 new members in the first month at a Cost Per Acquisition of ₹1,200",
            "industry": "CrossFit Studio"
          }
        ]
      }
    ]
  },
  {
    "id": "event-management-solutions",
    "slug": "event-management-solutions",
    "name": "Event Management Solutions",
    "tagline": "Event company websites, booking portals & vendor management",
    "color": "#7c3aed",
    "bgColor": "#faf5ff",
    "description": "We build cutting-edge digital platforms for event management companies, venues, and planners — from event booking portals and ticketing systems to vendor management and digital invitations.",
    "services": [
      {
        "slug": "event-company-website",
        "title": "Event Company Website",
        "tagline": "Showcase your events portfolio and attract corporate clients",
        "overview": "A visually stunning website for event management companies to showcase past events, services, team, and generate corporate and wedding event enquiries.",
        "features": [
          "Portfolio Gallery (Events Showcase)",
          "Service Category Pages (Weddings, Corporate, etc.)",
          "Client Enquiry & Lead Forms",
          "Testimonials & Case Studies",
          "Vendor Partner Listings",
          "Blog & Event Tips",
          "Instagram Feed Integration",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Attract premium event clients",
          "Showcase portfolio effectively",
          "Build credibility and trust",
          "Generate consistent online leads",
          "Showcase social media presence"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Development",
          "Portfolio Upload",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Vercel",
          "Sanity CMS"
        ],
        "pricingPlans": [
          {
            "name": "Event Website",
            "price": "₹24,999",
            "desc": "Professional event company presence",
            "features": [
              "Up to 15 Pages",
              "Portfolio Gallery",
              "Lead Forms",
              "Mobile Responsive",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Premium Event Site",
            "price": "₹44,999",
            "desc": "Premium portfolio & lead gen site",
            "features": [
              "Unlimited Portfolio",
              "Video Showcases",
              "Instagram Feed",
              "SEO Optimization",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we easily add new events to the portfolio ourselves?",
            "a": "Yes, we integrate a user-friendly CMS so you can add new event photos, videos, and descriptions without any coding."
          }
        ],
        "caseStudies": [
          {
            "title": "GrandFete Events",
            "result": "Corporate event inquiries increased by 120% within 3 months of website launch",
            "industry": "Corporate Events"
          }
        ]
      },
      {
        "slug": "event-booking-platform",
        "title": "Event Booking Platform",
        "tagline": "An all-in-one platform to plan, book, and manage events",
        "overview": "A comprehensive event booking platform for clients to explore event packages, request quotations, approve proposals, and manage event planning digitally.",
        "features": [
          "Event Package Browsing",
          "Online Quotation Builder",
          "Client Proposal Approval Portal",
          "Event Checklist & Timeline",
          "Vendor Coordination Module",
          "Budget Tracking",
          "Document Sharing",
          "Communication Hub"
        ],
        "benefits": [
          "Streamline client-planner communication",
          "Paperless event planning",
          "Professional proposal experience",
          "Track all event tasks in one place",
          "Reduce planning errors"
        ],
        "process": [
          "Platform Architecture",
          "UX Design",
          "Development",
          "Client Portal Build",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "SendGrid",
          "Stripe"
        ],
        "pricingPlans": [
          {
            "name": "Event Portal",
            "price": "₹39,999",
            "desc": "Quotation & client management",
            "features": [
              "Quote Builder",
              "Client Approval Portal",
              "Document Sharing",
              "Basic Comms",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Event Suite",
            "price": "₹74,999",
            "desc": "Full event planning platform",
            "features": [
              "Vendor Module",
              "Budget Tracker",
              "Event Checklist",
              "Full Collaboration",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can clients sign off on proposals digitally?",
            "a": "Yes, the platform includes digital proposal approval with e-signature so clients can approve and confirm without physical paperwork."
          }
        ],
        "caseStudies": [
          {
            "title": "PerfectMoments Planning",
            "result": "Reduced event planning coordination time by 40% using the digital platform",
            "industry": "Wedding Planning"
          }
        ]
      },
      {
        "slug": "ticketing-rsvp-system",
        "title": "Ticketing & RSVP System",
        "tagline": "Sell tickets and manage registrations for any event",
        "overview": "A complete online ticketing and RSVP management system for concerts, conferences, exhibitions, and social events with payment integration and QR code check-in.",
        "features": [
          "Event Landing Pages",
          "Multiple Ticket Tiers (Early Bird, VIP, etc.)",
          "Online Payment Gateway",
          "QR Code Ticket Generation",
          "On-site QR Code Scanner App",
          "Attendee Data Management",
          "Refund & Transfer Management",
          "Post-event Email & Feedback"
        ],
        "benefits": [
          "Sell tickets 24/7 online",
          "Eliminate paper tickets",
          "Manage large events effortlessly",
          "Real-time sales tracking",
          "Collect attendee data for follow-up"
        ],
        "process": [
          "Event Setup",
          "Platform Configuration",
          "Payment Integration",
          "Check-in App Build",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "QR APIs",
          "React Native"
        ],
        "pricingPlans": [
          {
            "name": "Event Tickets",
            "price": "₹29,999",
            "desc": "Core ticketing system",
            "features": [
              "Event Landing Page",
              "Ticket Tiers",
              "Payment Gateway",
              "QR Code Tickets",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Ticketing Pro",
            "price": "₹54,999",
            "desc": "Full-featured ticketing suite",
            "features": [
              "Check-in Scanner App",
              "Multiple Events",
              "Attendee Management",
              "Refund Management",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Is there a per-ticket fee charged by you?",
            "a": "No, we charge a one-time development fee with no per-ticket commission. Payment gateway charges (typically 2%) apply per transaction."
          }
        ],
        "caseStudies": [
          {
            "title": "TechConf India",
            "result": "Sold 3,000 conference tickets online within 2 weeks, with zero manual processing",
            "industry": "Tech Conference"
          }
        ]
      },
      {
        "slug": "event-vendor-management",
        "title": "Event Vendor Management",
        "tagline": "Coordinate all your event vendors in one platform",
        "overview": "A centralized portal to manage your network of event vendors (caterers, decorators, photographers, etc.) including contracts, payments, and event assignments.",
        "features": [
          "Vendor Profile & Category Directory",
          "Availability Calendar",
          "Event Assignment & Briefing",
          "Digital Contract Management",
          "Invoice & Payment Tracking",
          "Performance Rating System",
          "Communication Hub",
          "Vendor Performance Analytics"
        ],
        "benefits": [
          "Never double-book a vendor",
          "Streamline vendor onboarding",
          "Track all vendor payments in one place",
          "Build a reliable vendor network",
          "Measure vendor quality consistently"
        ],
        "process": [
          "Vendor Workflow Design",
          "Platform Development",
          "Contract Integration",
          "Payment Setup",
          "Vendor Onboarding",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "Razorpay",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "Vendor Hub",
            "price": "₹34,999",
            "desc": "Core vendor directory & assignment",
            "features": [
              "Vendor Directory",
              "Event Assignment",
              "Invoice Tracking",
              "Rating System",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Vendor Pro",
            "price": "₹64,999",
            "desc": "Full vendor management suite",
            "features": [
              "Contract Management",
              "Payment Workflows",
              "Availability Calendar",
              "Performance Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can vendors log in and update their availability?",
            "a": "Yes, vendors have their own portal login where they can update their calendar, view upcoming assignments, and submit invoices."
          }
        ],
        "caseStudies": [
          {
            "title": "Elite Events Co.",
            "result": "Managed 150+ vendors across 200+ events per year with zero scheduling conflicts",
            "industry": "Event Management"
          }
        ]
      },
      {
        "slug": "event-mobile-app",
        "title": "Event Mobile App",
        "tagline": "A branded app for your event or event company",
        "overview": "A mobile application for events — providing attendees with the schedule, speaker info, networking, live polls, and real-time event updates on their smartphones.",
        "features": [
          "Event Agenda & Schedule",
          "Speaker & Session Profiles",
          "Attendee Networking (Connect & Chat)",
          "Live Polls & Q&A",
          "Push Notifications for Updates",
          "Venue Map & Directions",
          "Exhibitor Directory",
          "Photo Gallery & Social Sharing"
        ],
        "benefits": [
          "Premium attendee experience",
          "Real-time communication channel",
          "Networking opportunities",
          "Reduce printing costs",
          "Gather live engagement data"
        ],
        "process": [
          "App Strategy",
          "UI/UX Design",
          "Development",
          "Content Setup",
          "Testing",
          "Event Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "WebSockets",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Event App",
            "price": "₹64,999",
            "desc": "Core event companion app",
            "features": [
              "Agenda & Schedule",
              "Push Notifications",
              "Venue Map",
              "iOS & Android",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Engagement App",
            "price": "₹1,09,999",
            "desc": "Full attendee engagement platform",
            "features": [
              "Networking Module",
              "Live Polls & Q&A",
              "Exhibitor Directory",
              "Social Sharing",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we reuse this app for multiple events?",
            "a": "Yes, the Engagement App is built as a reusable platform where you can configure new event content for each event without rebuilding from scratch."
          }
        ],
        "caseStudies": [
          {
            "title": "India Leaders Summit",
            "result": "App achieved 2,500 downloads with 85% attendee adoption, replacing a 200-page printed guide",
            "industry": "Corporate Conference"
          }
        ]
      },
      {
        "slug": "event-crm",
        "title": "Event CRM",
        "tagline": "Manage leads, clients, and events in one place",
        "overview": "A specialized CRM for event management companies to track client leads, manage quotations, follow up on proposals, and maintain long-term relationships.",
        "features": [
          "Lead Source Tracking",
          "Event Enquiry Pipeline",
          "Quotation & Proposal Tracker",
          "Follow-up Automation",
          "Client Communication Logs",
          "Won / Lost Deal Analysis",
          "Revenue Forecasting",
          "Event Calendar Integration"
        ],
        "benefits": [
          "Higher lead-to-booking conversion",
          "Never miss a follow-up",
          "Analyze winning proposal patterns",
          "Clear revenue pipeline visibility",
          "Build long-term client relationships"
        ],
        "process": [
          "CRM Design",
          "Development",
          "Data Import",
          "Automation Setup",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Event CRM",
            "price": "₹29,999",
            "desc": "Core enquiry management",
            "features": [
              "Enquiry Pipeline",
              "Follow-up Automation",
              "Proposal Tracker",
              "Basic Analytics",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Event CRM Pro",
            "price": "₹54,999",
            "desc": "Full business development suite",
            "features": [
              "Won/Lost Analysis",
              "Revenue Forecasting",
              "Client History",
              "Advanced Analytics",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it remind us to follow up with clients who requested quotes but didn't confirm?",
            "a": "Yes, the CRM automatically schedules follow-up reminders and can even send automated WhatsApp messages to re-engage unresponsive prospects."
          }
        ],
        "caseStudies": [
          {
            "title": "Eventify Planners",
            "result": "Increased event booking rate from 20% to 38% of enquiries through structured CRM follow-ups",
            "industry": "Social & Corporate Events"
          }
        ]
      },
      {
        "slug": "digital-invitations-platform",
        "title": "Digital Invitations Platform",
        "tagline": "Beautiful digital invitations and event microsites",
        "overview": "A platform to create and distribute stunning digital invitations (wedding cards, corporate event invites) with RSVP collection, guest management, and personalization.",
        "features": [
          "Custom Invitation Design Templates",
          "Personalized E-invites (Animated)",
          "RSVP Collection & Management",
          "WhatsApp & Email Distribution",
          "Guest List Management",
          "Event Countdown Timer",
          "Venue Map Integration",
          "Guest Meal Preference Collection"
        ],
        "benefits": [
          "Eliminate printing costs",
          "Instant delivery to guests",
          "Collect RSVPs digitally",
          "Beautiful, shareable experience",
          "Environment-friendly alternative"
        ],
        "process": [
          "Design Templates",
          "Platform Development",
          "RSVP System",
          "Distribution Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "MongoDB",
          "Twilio",
          "SendGrid",
          "Canvas API"
        ],
        "pricingPlans": [
          {
            "name": "Invitation Platform",
            "price": "₹29,999",
            "desc": "Core digital invitation system",
            "features": [
              "Template Library",
              "RSVP Collection",
              "WhatsApp Sharing",
              "Guest Management",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Premium Invites",
            "price": "₹54,999",
            "desc": "Animated invites & full guest management",
            "features": [
              "Animated Designs",
              "Meal Preferences",
              "Seating Arrangements",
              "Event Microsite",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we create custom branded templates for corporate clients?",
            "a": "Yes, we design fully branded invitation templates matching your corporate client's identity and house style."
          }
        ],
        "caseStudies": [
          {
            "title": "InviteArt Studio",
            "result": "Delivered 50,000+ digital invitations in the first year, saving clients ₹40 Lakh in printing costs",
            "industry": "Wedding & Events"
          }
        ]
      }
    ]
  },
  {
    "id": "agriculture-solutions",
    "slug": "agriculture-solutions",
    "name": "Agriculture Solutions",
    "tagline": "AgriTech portals, farm management & crop monitoring systems",
    "color": "#65a30d",
    "bgColor": "#f7fee7",
    "description": "We build innovative AgriTech digital solutions for farmers, agri-businesses, and agricultural cooperatives — from farm management systems and crop monitoring dashboards to agricultural e-commerce platforms.",
    "services": [
      {
        "slug": "agri-website",
        "title": "Agriculture Company Website",
        "tagline": "Professional websites for agri-businesses and cooperatives",
        "overview": "A professional website for agricultural companies, seed manufacturers, agri-input distributors, and cooperatives to showcase products and reach more customers.",
        "features": [
          "Product & Crop Solution Showcases",
          "Dealer & Distributor Locator",
          "Crop Advisory Blog",
          "Contact & Enquiry Forms",
          "Certification & Compliance Display",
          "Weather Widget Integration",
          "Mobile-Responsive Design",
          "SEO Optimized"
        ],
        "benefits": [
          "Reach farmers and agri-businesses online",
          "Showcase product range effectively",
          "Build brand credibility",
          "Generate dealer/distributor enquiries",
          "Provide crop advisory content"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Development",
          "Content Upload",
          "SEO",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "WordPress",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Agri Website",
            "price": "₹19,999",
            "desc": "Core agricultural web presence",
            "features": [
              "Up to 12 Pages",
              "Product Catalog",
              "Lead Forms",
              "Mobile Responsive",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Agri Business Site",
            "price": "₹39,999",
            "desc": "Full-featured agri company website",
            "features": [
              "Dealer Locator",
              "Crop Advisory Blog",
              "Multiple Languages",
              "SEO Setup",
              "4 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can the website be in regional languages like Hindi, Tamil, or Marathi?",
            "a": "Yes, we can build multilingual websites so your content reaches farmers in their regional language."
          }
        ],
        "caseStudies": [
          {
            "title": "AgroGrow Seeds",
            "result": "Dealer enquiries grew by 80% within 3 months of launching the new website",
            "industry": "Seed Manufacturing"
          }
        ]
      },
      {
        "slug": "farm-management-system",
        "title": "Farm Management System",
        "tagline": "Digitize your farm operations from field to market",
        "overview": "A comprehensive farm management platform for farmers and agri-businesses to track crops, manage inputs, record labor, and analyze farm productivity.",
        "features": [
          "Farm & Field Mapping",
          "Crop Season Planning",
          "Input (Fertilizer, Pesticide) Records",
          "Labor & Equipment Management",
          "Irrigation Scheduling",
          "Harvest & Yield Records",
          "Cost of Cultivation Tracking",
          "Farm Performance Analytics"
        ],
        "benefits": [
          "Complete record of farm operations",
          "Reduce input wastage",
          "Improve crop yield through data",
          "Access to financing (digitized records)",
          "Comply with agri-export traceability"
        ],
        "process": [
          "Farm Workflow Analysis",
          "System Design",
          "Mobile App Build",
          "Testing",
          "Farmer Training",
          "Deployment"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Farm Manager",
            "price": "₹29,999",
            "desc": "Core farm recordkeeping",
            "features": [
              "Crop Records",
              "Input Tracking",
              "Labor Management",
              "Basic Analytics",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Farm",
            "price": "₹59,999",
            "desc": "Full farm intelligence platform",
            "features": [
              "Field Mapping",
              "Irrigation Scheduling",
              "Cost Analysis",
              "Mobile App",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can farmers use this on basic Android phones?",
            "a": "Yes, the mobile app is optimized for low-end Android devices and supports offline data entry for use in areas with poor connectivity."
          }
        ],
        "caseStudies": [
          {
            "title": "AgriCoop Maharashtra",
            "result": "Enabled 500+ member farmers to digitize records, unlocking ₹50 Crore in cooperative credit",
            "industry": "Farmer Cooperative"
          }
        ]
      },
      {
        "slug": "crop-monitoring-dashboard",
        "title": "Crop Monitoring Dashboard",
        "tagline": "Satellite and IoT-based crop health monitoring",
        "overview": "An IIoT and satellite-based crop monitoring dashboard providing real-time insights on crop health, soil moisture, weather, and pest risk alerts.",
        "features": [
          "Satellite Imagery (NDVI Analysis)",
          "IoT Soil Moisture & Temperature Sensors",
          "Weather Forecast Integration",
          "Pest & Disease Risk Alerts",
          "Crop Growth Stage Tracking",
          "Irrigation Advisory",
          "Historical Crop Performance",
          "Mobile Alerts for Farmers"
        ],
        "benefits": [
          "Early detection of crop stress",
          "Precision irrigation to save water",
          "Reduce pesticide usage",
          "Improve yield predictability",
          "Data-driven agronomy decisions"
        ],
        "process": [
          "Hardware Assessment",
          "API Integration (Satellite/Weather)",
          "Dashboard Build",
          "IoT Connectivity",
          "Testing",
          "Field Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "Python",
          "NDVI APIs",
          "OpenWeather API",
          "MQTT",
          "AWS IoT"
        ],
        "pricingPlans": [
          {
            "name": "Crop Monitor",
            "price": "₹49,999",
            "desc": "Satellite & weather dashboard",
            "features": [
              "NDVI Maps",
              "Weather Forecast",
              "Crop Stage Tracker",
              "Mobile Alerts",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Agri Dashboard",
            "price": "₹94,999",
            "desc": "IoT + Satellite precision farming",
            "features": [
              "IoT Sensor Integration",
              "Irrigation Advisory",
              "Pest Risk Alerts",
              "Historical Analysis",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does the farmer need to buy IoT sensors separately?",
            "a": "Yes, IoT sensors (soil probes) are hardware purchased separately. We handle the software, dashboard, and all API integrations."
          }
        ],
        "caseStudies": [
          {
            "title": "GreenField FPO",
            "result": "Reduced crop losses by 20% through early pest detection and precision irrigation",
            "industry": "Farmer Producer Organization"
          }
        ]
      },
      {
        "slug": "agriculture-ecommerce",
        "title": "Agricultural E-commerce Store",
        "tagline": "Sell agri-inputs, equipment, and produce online",
        "overview": "A specialized e-commerce platform for agri-businesses to sell seeds, fertilizers, pesticides, farm equipment, and fresh produce directly to farmers or consumers.",
        "features": [
          "Agri Product Catalog",
          "Crop-based Product Recommendations",
          "Bulk Order Management",
          "Farmer / B2B Pricing Tiers",
          "COD & UPI Payment Options",
          "Rural Delivery Management",
          "Multi-language Product Pages",
          "Agri Advisory Content"
        ],
        "benefits": [
          "Reach farmers across India directly",
          "Eliminate middleman distribution costs",
          "Accept bulk B2B farm orders",
          "Provide advisory content to drive purchase",
          "Multiple payment options for rural customers"
        ],
        "process": [
          "Catalog Design",
          "E-commerce Build",
          "Payment Integration",
          "Delivery Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Shiprocket",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Agri Store",
            "price": "₹49,999",
            "desc": "Core agricultural e-commerce",
            "features": [
              "Product Catalog",
              "UPI Payments",
              "COD",
              "Bulk Orders",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Agri Marketplace",
            "price": "₹89,999",
            "desc": "Full-featured agri marketplace",
            "features": [
              "Multi-seller",
              "Farmer Pricing",
              "Advisory Content",
              "Rural Delivery",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we offer different prices for farmers vs distributors?",
            "a": "Yes, we implement tiered pricing where registered farmers and distributors see different, negotiated prices from retail customers."
          }
        ],
        "caseStudies": [
          {
            "title": "KisanShop",
            "result": "Processed ₹2 Crore in agri-input orders within the first year of launch",
            "industry": "Agri-Input Distribution"
          }
        ]
      },
      {
        "slug": "cold-chain-management",
        "title": "Cold Chain Management System",
        "tagline": "Monitor and manage your perishable supply chain",
        "overview": "A specialized cold chain management system for agri-businesses, dairy companies, and food processors to monitor temperature, track shipments, and ensure product quality.",
        "features": [
          "Real-time Temperature Monitoring (IoT)",
          "Cold Storage Inventory Tracking",
          "Shipment Tracking with Temp Data",
          "Breach Alerts & Notifications",
          "Quality Compliance Documentation",
          "Multi-location Cold Storage View",
          "Expiry & Batch Tracking",
          "Regulatory Compliance Reports"
        ],
        "benefits": [
          "Zero product spoilage from temperature breach",
          "Comply with FSSAI and export regulations",
          "Complete cold chain audit trail",
          "Real-time visibility for remote monitoring",
          "Reduce insurance claims from spoilage"
        ],
        "process": [
          "Hardware Selection (Temp Sensors)",
          "IoT Integration",
          "Platform Build",
          "Alert Configuration",
          "Testing",
          "Deployment"
        ],
        "technologies": [
          "React",
          "Node.js",
          "TimescaleDB",
          "MQTT",
          "AWS IoT",
          "WebSockets"
        ],
        "pricingPlans": [
          {
            "name": "Cold Monitor",
            "price": "₹59,999",
            "desc": "Temperature monitoring & alerts",
            "features": [
              "Real-time Temp Monitoring",
              "Breach Alerts",
              "Basic Reports",
              "5 Locations",
              "6 Weeks Delivery"
            ]
          },
          {
            "name": "Cold Chain Pro",
            "price": "₹1,09,999",
            "desc": "Full cold chain intelligence",
            "features": [
              "Inventory Tracking",
              "Compliance Reports",
              "Shipment Tracking",
              "Unlimited Locations",
              "10 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "What happens if the temperature goes out of range at night?",
            "a": "The system sends instant SMS and WhatsApp alerts to designated contacts as soon as a temperature breach is detected, 24/7."
          }
        ],
        "caseStudies": [
          {
            "title": "FreshMilk Dairies",
            "result": "Reduced milk spoilage by 35% through real-time temperature monitoring across 12 cold storage units",
            "industry": "Dairy Processing"
          }
        ]
      },
      {
        "slug": "farmer-mobile-app",
        "title": "Farmer Mobile App",
        "tagline": "Connecting farmers to markets, weather, and advice",
        "overview": "A vernacular farmer mobile app providing crop advisories, market price information, weather forecasts, and direct market access through their smartphones.",
        "features": [
          "Crop Advisory (Vernacular Languages)",
          "Daily Mandi Price Updates",
          "7-day Weather Forecast",
          "Pest & Disease Identification (AI)",
          "Soil Test Request & Report",
          "Government Scheme Information",
          "Direct Market Selling Portal",
          "Farm Record Diary"
        ],
        "benefits": [
          "Empower farmers with real-time information",
          "Help farmers get better market prices",
          "AI-assisted pest identification",
          "Access to government schemes",
          "Digital record-keeping for credit"
        ],
        "process": [
          "App Strategy",
          "Vernacular Content Design",
          "AI Integration",
          "Mobile Dev",
          "Field Testing with Farmers",
          "Launch"
        ],
        "technologies": [
          "React Native",
          "Python (AI)",
          "Node.js",
          "Firebase",
          "AWS",
          "OpenWeather API"
        ],
        "pricingPlans": [
          {
            "name": "Farmer App",
            "price": "₹79,999",
            "desc": "Core farmer advisory app",
            "features": [
              "Crop Advisory",
              "Mandi Prices",
              "Weather",
              "2 Regional Languages",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Farmer App",
            "price": "₹1,39,999",
            "desc": "Full-featured AI farmer companion",
            "features": [
              "AI Pest ID",
              "Market Selling",
              "Scheme Info",
              "5 Regional Languages",
              "14 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "In which regional languages is the app available?",
            "a": "We currently support Hindi, Marathi, Tamil, Telugu, Gujarati, and Punjabi. Additional languages can be added based on requirements."
          }
        ],
        "caseStudies": [
          {
            "title": "Agro Mitra App",
            "result": "1,00,000 farmer downloads in 6 months, with 4.4-star rating on Google Play",
            "industry": "AgriTech Platform"
          }
        ]
      },
      {
        "slug": "agriculture-crm",
        "title": "Agriculture CRM",
        "tagline": "Manage dealer networks and farmer relationships",
        "overview": "A specialized CRM for agri-businesses to manage their dealer and distributor networks, track farmer outreach, and monitor field executive activities.",
        "features": [
          "Dealer & Distributor Management",
          "Farmer Database & Geo-tagging",
          "Field Executive Activity Tracking",
          "Sales Order & Indent Management",
          "Product Demo & Trial Tracking",
          "Seasonal Campaign Management",
          "Territory & Beat Plan Management",
          "Sales Performance Analytics"
        ],
        "benefits": [
          "Clear visibility of field sales activities",
          "Manage dealer network effectively",
          "Track farmer engagement programs",
          "Data-driven territory planning",
          "Increase market penetration"
        ],
        "process": [
          "CRM Design",
          "Build",
          "Field App Integration",
          "Data Import",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Google Maps API",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Agri CRM",
            "price": "₹34,999",
            "desc": "Dealer & sales management",
            "features": [
              "Dealer Management",
              "Sales Orders",
              "Field Executive App",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Agri Sales Suite",
            "price": "₹64,999",
            "desc": "Full field sales intelligence",
            "features": [
              "Farmer Geo-tagging",
              "Territory Planning",
              "Campaign Tracking",
              "Advanced Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can field officers use this app on their mobile phones in the field?",
            "a": "Yes, the Field Executive App works on Android smartphones and supports offline mode for areas with poor network coverage."
          }
        ],
        "caseStudies": [
          {
            "title": "KisanCare Agro",
            "result": "Field team productivity improved by 35% with geo-tagged daily activity tracking",
            "industry": "Agri-Input Company"
          }
        ]
      }
    ]
  },
  {
    "id": "recruitment-solutions",
    "slug": "recruitment-solutions",
    "name": "Recruitment Solutions",
    "tagline": "Job portals, ATS systems & recruitment agency platforms",
    "color": "#0369a1",
    "bgColor": "#e0f2fe",
    "description": "We build smart digital platforms for recruitment agencies, HR consultancies, and corporate HR teams — from job portals and applicant tracking systems to HR management software.",
    "services": [
      {
        "slug": "recruitment-agency-website",
        "title": "Recruitment Agency Website",
        "tagline": "Build your recruitment brand and attract clients & candidates",
        "overview": "A professional, conversion-optimized website for recruitment agencies and HR consultancies to attract both corporate clients and job seekers.",
        "features": [
          "Live Job Listings Integration",
          "Employer & Candidate Portals",
          "Service Showcase (Temp, Perm, Executive)",
          "Case Studies & Success Stories",
          "Team & Specialist Profiles",
          "Online CV Submission Form",
          "Employer Enquiry Forms",
          "SEO-Optimized Job Pages"
        ],
        "benefits": [
          "Attract corporate clients online",
          "Generate candidate applications 24/7",
          "Showcase expertise and success",
          "Rank for industry-specific job keywords",
          "Build employer and candidate trust"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Job Board Integration",
          "Development",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Vercel",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Agency Website",
            "price": "₹24,999",
            "desc": "Core recruitment agency site",
            "features": [
              "Job Listings",
              "CV Upload Form",
              "Employer Enquiry",
              "Mobile Responsive",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Recruitment Portal",
            "price": "₹49,999",
            "desc": "Full employer & candidate portal",
            "features": [
              "Employer Portal",
              "Candidate Dashboard",
              "Job SEO Pages",
              "ATS Integration",
              "5 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can job seekers apply directly from the website?",
            "a": "Yes, candidates can browse live job listings and apply directly through the website, with their CVs flowing into your ATS."
          }
        ],
        "caseStudies": [
          {
            "title": "TalentFirst Recruitment",
            "result": "Candidate applications increased by 300% after launching the new job portal website",
            "industry": "IT Recruitment"
          }
        ]
      },
      {
        "slug": "job-portal-development",
        "title": "Job Portal Development",
        "tagline": "Build your own niche job board or job marketplace",
        "overview": "A custom job portal platform for specific industries or geographies, connecting employers and job seekers with advanced search, profile matching, and application management.",
        "features": [
          "Employer & Job Seeker Registration",
          "Job Posting & Application Management",
          "Resume / CV Database",
          "Advanced Search & Filters",
          "AI-based Job Matching",
          "Verified Employer Badges",
          "Premium Listing & Featured Jobs",
          "Email & SMS Alerts for New Jobs"
        ],
        "benefits": [
          "Build a niche recruitment platform",
          "Monetize through paid employer listings",
          "Serve underserved job markets",
          "AI-powered job matching",
          "Large database of resumes for clients"
        ],
        "process": [
          "Portal Architecture",
          "AI Matching Engine",
          "Development",
          "Payment Integration",
          "Testing",
          "Launch",
          "SEO"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Elasticsearch",
          "Python (AI)",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Job Board",
            "price": "₹74,999",
            "desc": "Core niche job portal",
            "features": [
              "Job Listings",
              "CV Database",
              "Advanced Search",
              "Employer & Seeker Portals",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Job Marketplace",
            "price": "₹1,39,999",
            "desc": "Full-featured job platform with AI",
            "features": [
              "AI Job Matching",
              "Premium Listings",
              "Monetization Engine",
              "SEO-optimized Pages",
              "14 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we charge employers to post jobs on our platform?",
            "a": "Yes, the Marketplace plan includes a monetization engine with paid job posting credits, featured listings, and subscription packages."
          }
        ],
        "caseStudies": [
          {
            "title": "NurseJobs India",
            "result": "Built a niche nursing job portal that reached 50,000 registered nurses within 12 months",
            "industry": "Healthcare Recruitment"
          }
        ]
      },
      {
        "slug": "applicant-tracking-system",
        "title": "Applicant Tracking System (ATS)",
        "tagline": "Streamline your hiring pipeline from application to offer",
        "overview": "A custom ATS to manage the complete hiring pipeline for agencies and corporate HR teams, from job posting and application screening to interviews and offer management.",
        "features": [
          "Multi-source Job Posting (Job Boards, Website)",
          "CV Parsing & Database",
          "Kanban Hiring Pipeline",
          "Automated Interview Scheduling",
          "Interview Feedback Forms",
          "Offer Letter Generation",
          "Background Verification Tracking",
          "Hiring Analytics Dashboard"
        ],
        "benefits": [
          "Reduce time-to-hire",
          "Centralize all applications",
          "Eliminate email-based hiring chaos",
          "Structured interview process",
          "Measure hiring team performance"
        ],
        "process": [
          "Hiring Process Mapping",
          "ATS Architecture",
          "CV Parser Integration",
          "Pipeline Build",
          "Testing",
          "HR Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Python (CV Parser)",
          "SendGrid",
          "Calendly API",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "ATS Core",
            "price": "₹49,999",
            "desc": "Essential applicant tracking",
            "features": [
              "CV Database",
              "Hiring Pipeline",
              "Interview Scheduling",
              "Basic Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "ATS Enterprise",
            "price": "₹89,999",
            "desc": "Full-featured hiring suite",
            "features": [
              "CV Parsing",
              "Offer Management",
              "Background Check Integration",
              "Analytics Dashboard",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it post jobs automatically to Naukri, LinkedIn, and Indeed?",
            "a": "Yes, the ATS Enterprise supports multi-channel job posting to major job boards via API or direct integrations."
          }
        ],
        "caseStudies": [
          {
            "title": "HireFast Corp",
            "result": "Reduced average time-to-hire from 32 days to 14 days using the ATS",
            "industry": "Corporate HR"
          }
        ]
      },
      {
        "slug": "hr-management-system",
        "title": "HR Management System",
        "tagline": "Digital HR for the modern workforce",
        "overview": "A comprehensive HRMS to manage employee records, leaves, attendance, payroll, performance reviews, and HR compliance in one integrated system.",
        "features": [
          "Employee Master Records",
          "Leave & Attendance Management",
          "Payroll Processing (Salary, PF, ESI)",
          "Performance Appraisal Module",
          "Onboarding & Offboarding Workflows",
          "HR Policy Document Library",
          "Employee Self-service Portal",
          "HR Analytics Dashboard"
        ],
        "benefits": [
          "Eliminate manual HR processes",
          "Accurate, compliant payroll",
          "Employee satisfaction through self-service",
          "Data-driven performance management",
          "Complete HR audit trail"
        ],
        "process": [
          "HR Process Audit",
          "HRMS Architecture",
          "Core Module Build",
          "Payroll Integration",
          "UAT",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "PDFKit",
          "SendGrid"
        ],
        "pricingPlans": [
          {
            "name": "HRMS Core",
            "price": "₹69,999",
            "desc": "Core HR management",
            "features": [
              "Employee Records",
              "Leave Management",
              "Attendance",
              "Basic Reports",
              "7 Weeks Delivery"
            ]
          },
          {
            "name": "HRMS Complete",
            "price": "₹1,29,999",
            "desc": "Full-featured HRMS with Payroll",
            "features": [
              "Payroll Processing",
              "Performance Reviews",
              "Employee Portal",
              "HR Analytics",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it handle PF and ESI calculations?",
            "a": "Yes, the HRMS Complete plan includes automated PF, ESI, and TDS calculations along with salary slip generation."
          }
        ],
        "caseStudies": [
          {
            "title": "TechForce Solutions",
            "result": "HR processing time reduced by 60% after deploying the HRMS for 500+ employees",
            "industry": "IT Services"
          }
        ]
      },
      {
        "slug": "recruitment-crm",
        "title": "Recruitment CRM",
        "tagline": "Manage clients, candidates, and placements in one place",
        "overview": "A recruitment-specific CRM for staffing agencies to manage client relationships, candidate pipelines, placements, and revenue tracking in a unified platform.",
        "features": [
          "Client Company Management",
          "Candidate Database & Tagging",
          "Job Order Management",
          "Candidate-to-Job Matching",
          "Interview & Placement Tracker",
          "Invoice & Placement Fee Management",
          "Consultant Performance Dashboard",
          "Activity & Communication Logs"
        ],
        "benefits": [
          "Never lose a candidate or client opportunity",
          "Track all placements and fees",
          "Consultant accountability",
          "Measure recruiter performance",
          "Maximize client relationship value"
        ],
        "process": [
          "CRM Design",
          "Development",
          "Data Migration",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Recruitment CRM",
            "price": "₹34,999",
            "desc": "Core candidate & job management",
            "features": [
              "Candidate Database",
              "Job Orders",
              "Placement Tracker",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Staffing CRM Pro",
            "price": "₹64,999",
            "desc": "Full recruitment business suite",
            "features": [
              "Fee Management",
              "Consultant Dashboard",
              "Activity Tracking",
              "Revenue Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we track which consultant made which placement?",
            "a": "Yes, every placement and associated fee is tracked against the responsible consultant, enabling fair performance and commission management."
          }
        ],
        "caseStudies": [
          {
            "title": "StaffRight Agency",
            "result": "Increased revenue per recruiter by 28% through better pipeline visibility and follow-up",
            "industry": "General Staffing"
          }
        ]
      },
      {
        "slug": "candidate-mobile-app",
        "title": "Candidate Mobile App",
        "tagline": "A seamless job search experience for candidates",
        "overview": "A mobile application for job seekers to browse jobs, upload profiles, apply, track application status, and receive interview alerts from their smartphones.",
        "features": [
          "Personalized Job Feed",
          "One-tap Job Application",
          "Profile & CV Builder",
          "Application Status Tracker",
          "Interview Slot Booking",
          "Push Notifications for New Jobs",
          "Skill Assessment Quizzes",
          "Salary Insights & Benchmarks"
        ],
        "benefits": [
          "Higher candidate engagement",
          "More applications via mobile",
          "Competitive advantage in candidate experience",
          "Build a loyal talent community",
          "Reduce drop-off in application process"
        ],
        "process": [
          "App Strategy",
          "UX Design",
          "ATS Integration",
          "iOS & Android Dev",
          "Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Candidate App",
            "price": "₹69,999",
            "desc": "Core job search mobile app",
            "features": [
              "Job Browsing",
              "One-tap Apply",
              "Status Tracker",
              "Push Notifications",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Talent App Pro",
            "price": "₹1,19,999",
            "desc": "Full-featured candidate platform",
            "features": [
              "AI Job Matching",
              "Skill Assessments",
              "Salary Insights",
              "Video Profile",
              "12 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will the app sync with our ATS?",
            "a": "Yes, the candidate app integrates directly with your ATS, pushing all applications and candidate data seamlessly."
          }
        ],
        "caseStudies": [
          {
            "title": "HireMe App",
            "result": "30,000+ candidate downloads with 4.6-star rating and 40% increase in job application volume",
            "industry": "Recruitment Tech"
          }
        ]
      },
      {
        "slug": "recruitment-marketing",
        "title": "Recruitment Marketing Services",
        "tagline": "Attract top candidates and corporate clients digitally",
        "overview": "Specialized digital marketing for recruitment agencies to attract job seekers and employer clients through LinkedIn, Google Ads, job board SEO, and content marketing.",
        "features": [
          "LinkedIn Ads for Recruiters & Employers",
          "Google Ads for Job Seeker Traffic",
          "Job Board SEO Optimization",
          "Social Media Management (LinkedIn, Instagram)",
          "Employer Branding Campaigns",
          "Candidate Testimonial Content",
          "Email & WhatsApp Campaigns to Candidates",
          "Monthly Hiring Analytics Reports"
        ],
        "benefits": [
          "Build strong employer & candidate brand",
          "Attract top-quality candidates",
          "Generate corporate client leads",
          "Dominate LinkedIn in your niche",
          "Measurable ROI on recruitment marketing"
        ],
        "process": [
          "Audit",
          "Strategy",
          "Content Creation",
          "Campaign Launch",
          "Optimization",
          "Monthly Reporting"
        ],
        "technologies": [
          "LinkedIn Ads",
          "Google Ads",
          "Mailchimp",
          "Meta Ads",
          "Canva",
          "SEMrush"
        ],
        "pricingPlans": [
          {
            "name": "Recruitment Marketing",
            "price": "₹19,999/mo",
            "desc": "Core digital presence",
            "features": [
              "LinkedIn Management",
              "Google Ads",
              "Job SEO",
              "10 Posts/mo",
              "Monthly Report"
            ]
          },
          {
            "name": "Hiring Brand Pro",
            "price": "₹39,999/mo",
            "desc": "Full recruitment marketing suite",
            "features": [
              "LinkedIn + Meta Ads",
              "Employer Branding",
              "Content Marketing",
              "Bi-weekly Reports",
              "WhatsApp Campaigns"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can you help us attract clients, not just candidates?",
            "a": "Yes, our Hiring Brand Pro plan includes a dedicated B2B strategy to attract corporate HR teams and hiring managers as clients."
          }
        ],
        "caseStudies": [
          {
            "title": "ProStaff Recruiters",
            "result": "Grew LinkedIn following from 500 to 15,000 and generated 30 new employer clients in 6 months",
            "industry": "Executive Search"
          }
        ]
      }
    ]
  },
  {
    "id": "hospitality-solutions",
    "slug": "hospitality-solutions",
    "name": "Hospitality Solutions",
    "tagline": "Hotel booking engines, PMS & hospitality management systems",
    "color": "#b45309",
    "bgColor": "#fef3c7",
    "description": "We deliver end-to-end digital solutions for hotels, resorts, restaurants, and hospitality groups — from commission-free booking engines and property management systems to revenue management and loyalty apps.",
    "services": [
      {
        "slug": "hotel-website-development",
        "title": "Hotel & Resort Website",
        "tagline": "Drive direct bookings with a stunning hotel website",
        "overview": "A visually stunning, conversion-optimized hotel website designed to drive direct bookings, reduce OTA commissions, and showcase the property beautifully.",
        "features": [
          "Virtual Property Tour (360° Photos)",
          "Real-time Room Availability & Booking",
          "Rate & Room Type Comparison",
          "Restaurant & Spa Booking",
          "Special Offers & Packages",
          "Guest Reviews Section",
          "Photo & Video Gallery",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Drive commission-free direct bookings",
          "Reduce OTA dependency",
          "Stunning first impression for guests",
          "Showcase all property amenities",
          "Increase ancillary service bookings"
        ],
        "process": [
          "Property Discovery",
          "Visual Design",
          "Booking Engine Integration",
          "Content Upload",
          "SEO Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "AWS",
          "Stripe",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Hotel Website",
            "price": "₹34,999",
            "desc": "Professional hotel web presence",
            "features": [
              "Up to 15 Pages",
              "Photo Gallery",
              "Enquiry Form",
              "Mobile Responsive",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Booking Website",
            "price": "₹64,999",
            "desc": "Direct booking hotel website",
            "features": [
              "Real-time Booking Engine",
              "Room Comparison",
              "Online Payments",
              "SEO Optimization",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will this reduce our OTA commission costs?",
            "a": "Yes, a strong direct booking website with SEO and Google Ads can significantly shift bookings from OTAs to direct, saving 15-25% in commission."
          }
        ],
        "caseStudies": [
          {
            "title": "The Grand Retreat Resort",
            "result": "Direct bookings increased from 15% to 42% of total revenue within 6 months",
            "industry": "Luxury Resort"
          }
        ]
      },
      {
        "slug": "hotel-booking-engine",
        "title": "Hotel Booking Engine",
        "tagline": "Commission-free direct bookings on your own platform",
        "overview": "A seamless, mobile-friendly booking engine integrated with your website and PMS to enable direct online room reservations with real-time availability.",
        "features": [
          "Real-time Room Availability Calendar",
          "Multiple Rate Plans & Room Types",
          "Promo Code & Corporate Rate Engine",
          "Multi-currency & Multi-language",
          "Upsell Add-ons (Breakfast, Spa, Late Checkout)",
          "Secure Payment Gateway",
          "Booking Confirmation Emails",
          "Channel Manager Integration"
        ],
        "benefits": [
          "Accept direct bookings 24/7",
          "Eliminate OTA commissions",
          "Upsell ancillary revenue",
          "Custom rate plans for corporates",
          "Zero per-booking fees (unlike OTAs)"
        ],
        "process": [
          "Rate Structure Design",
          "Engine Development",
          "PMS Integration",
          "Payment Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "Razorpay",
          "Channel Manager APIs"
        ],
        "pricingPlans": [
          {
            "name": "Booking Engine",
            "price": "₹49,999",
            "desc": "Core direct booking engine",
            "features": [
              "Real-time Availability",
              "Payment Gateway",
              "Booking Emails",
              "Promo Codes",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Smart Booking Engine",
            "price": "₹84,999",
            "desc": "Advanced engine with upsells",
            "features": [
              "Rate Plan Management",
              "Upsell Add-ons",
              "Multi-currency",
              "Channel Integration",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it sync with OTA channels like Booking.com?",
            "a": "Yes, the Smart Engine integrates with channel managers like SiteMinder or Hotelogix to keep availability in sync across all channels."
          }
        ],
        "caseStudies": [
          {
            "title": "Spice Garden Hotels",
            "result": "Saved ₹24 Lakh annually in OTA commissions by switching 35% of bookings to direct",
            "industry": "Boutique Hotel Chain"
          }
        ]
      },
      {
        "slug": "property-management-system",
        "title": "Property Management System (PMS)",
        "tagline": "Manage your hotel operations end-to-end",
        "overview": "A cloud-based PMS to manage front desk operations, reservations, check-in/out, housekeeping, billing, and guest communications in a single platform.",
        "features": [
          "Reservation Dashboard",
          "Front Desk Check-in/Check-out",
          "Room Status & Housekeeping Module",
          "Guest Profile & CRM",
          "Invoicing & GST Billing",
          "Restaurant POS Integration",
          "Night Audit",
          "Reports & Analytics"
        ],
        "benefits": [
          "Streamline all hotel operations",
          "Eliminate paper-based front desk",
          "Real-time room status visibility",
          "Integrated billing & invoicing",
          "Data-driven hotel management"
        ],
        "process": [
          "Operations Mapping",
          "PMS Architecture",
          "Development",
          "Staff Training",
          "Data Migration",
          "Go-Live"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Stripe",
          "AWS",
          "React Native"
        ],
        "pricingPlans": [
          {
            "name": "PMS Core",
            "price": "₹79,999",
            "desc": "Essential hotel PMS",
            "features": [
              "Reservations",
              "Front Desk",
              "Housekeeping",
              "Billing",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "PMS Enterprise",
            "price": "₹1,49,999",
            "desc": "Full-featured hotel management",
            "features": [
              "Restaurant POS",
              "Night Audit",
              "Analytics",
              "Multi-property",
              "14 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it manage multiple properties from one account?",
            "a": "Yes, the PMS Enterprise plan supports multi-property management, allowing a hotel group to manage all properties from one central dashboard."
          }
        ],
        "caseStudies": [
          {
            "title": "Heritage Hotels Group",
            "result": "Unified management of 5 properties into one system, reducing front desk errors by 90%",
            "industry": "Hotel Group"
          }
        ]
      },
      {
        "slug": "restaurant-management-system",
        "title": "Restaurant Management System",
        "tagline": "Manage tables, orders, kitchen, and billing digitally",
        "overview": "A complete restaurant management system covering table reservations, digital menu, order management, kitchen display, billing, and daily sales analytics.",
        "features": [
          "Digital Menu & QR Code Ordering",
          "Table Reservation Management",
          "Order Management (Dine-in, Takeaway, Delivery)",
          "Kitchen Display System (KDS)",
          "Inventory & Recipe Management",
          "GST-compliant POS Billing",
          "Waiter App (Mobile)",
          "Daily Sales Analytics"
        ],
        "benefits": [
          "Faster order processing",
          "Reduce billing errors",
          "Go paperless with digital menus",
          "Real-time kitchen coordination",
          "Complete daily P&L visibility"
        ],
        "process": [
          "Restaurant Workflow Design",
          "POS & KDS Development",
          "Waiter App Build",
          "Hardware Setup",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "WebSockets"
        ],
        "pricingPlans": [
          {
            "name": "Restaurant POS",
            "price": "₹34,999",
            "desc": "Core POS & billing system",
            "features": [
              "Digital Menu",
              "POS Billing",
              "Order Management",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Restaurant Suite",
            "price": "₹64,999",
            "desc": "Full restaurant management",
            "features": [
              "KDS",
              "Table Reservations",
              "Inventory",
              "Waiter App",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can customers scan a QR code and order from their phone?",
            "a": "Yes, the QR Code Ordering feature lets guests scan the table QR, view the digital menu, and place orders directly to the kitchen."
          }
        ],
        "caseStudies": [
          {
            "title": "Spice Garden Restaurant",
            "result": "Order-to-table time reduced by 40%, with billing errors eliminated completely",
            "industry": "Fine Dining Restaurant"
          }
        ]
      },
      {
        "slug": "loyalty-program-app",
        "title": "Guest Loyalty Program App",
        "tagline": "Reward guests and drive repeat bookings",
        "overview": "A branded mobile loyalty app for hotels to reward repeat guests with points, offer member-exclusive rates, and build long-term guest relationships.",
        "features": [
          "Points Earning & Redemption System",
          "Membership Tier Management (Silver, Gold, Platinum)",
          "Member-exclusive Rates & Offers",
          "Mobile Key & Digital Room Upgrade",
          "Push Notifications for Offers",
          "Booking History & Stay Summary",
          "F&B Loyalty Integration",
          "In-app Feedback & Rating"
        ],
        "benefits": [
          "Increase direct repeat bookings",
          "Reward and retain loyal guests",
          "Build premium brand perception",
          "Reduce OTA dependency for repeat guests",
          "Gather direct guest feedback"
        ],
        "process": [
          "Program Design",
          "App Development",
          "PMS Integration",
          "Points Engine Build",
          "Testing",
          "App Store Launch"
        ],
        "technologies": [
          "React Native",
          "Flutter",
          "Node.js",
          "Firebase",
          "Razorpay",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Loyalty App",
            "price": "₹74,999",
            "desc": "Core guest loyalty app",
            "features": [
              "Points System",
              "Member Offers",
              "Push Notifications",
              "iOS & Android",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Premium Loyalty",
            "price": "₹1,29,999",
            "desc": "Full loyalty & engagement platform",
            "features": [
              "Tiered Membership",
              "Mobile Key",
              "F&B Loyalty",
              "Upgrade Engine",
              "13 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can the app work as a digital room key?",
            "a": "Yes, the Premium plan includes a mobile key integration that uses Bluetooth/NFC to allow guests to unlock their room with the app."
          }
        ],
        "caseStudies": [
          {
            "title": "The Regency Group",
            "result": "Repeat guest bookings increased by 40% within 18 months of launching the loyalty app",
            "industry": "Business Hotel Chain"
          }
        ]
      },
      {
        "slug": "hospitality-crm",
        "title": "Hospitality CRM",
        "tagline": "Personalize every guest experience with data",
        "overview": "A guest relationship management platform that consolidates stay history, preferences, and feedback to enable personalized marketing and service delivery.",
        "features": [
          "Guest Profile & Stay History",
          "Preference & Special Request Tracking",
          "Segmented Email Marketing Campaigns",
          "Pre-arrival & Post-stay Emails",
          "Feedback & Review Management",
          "Birthday & Anniversary Campaigns",
          "Corporate Account Management",
          "Revenue Analytics by Segment"
        ],
        "benefits": [
          "Personalized guest experience",
          "Increase direct repeat bookings",
          "Proactive review management",
          "Higher average spend per guest",
          "Corporate account retention"
        ],
        "process": [
          "CRM Design",
          "PMS Integration",
          "Data Migration",
          "Campaign Setup",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Hotel CRM",
            "price": "₹34,999",
            "desc": "Core guest relationship management",
            "features": [
              "Guest Profiles",
              "Email Campaigns",
              "Feedback Tracking",
              "Basic Analytics",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Hospitality CRM Pro",
            "price": "₹64,999",
            "desc": "Advanced personalization platform",
            "features": [
              "Segmented Marketing",
              "Pre/Post-stay Emails",
              "Corporate Management",
              "Revenue Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it send automated birthday emails with a special offer?",
            "a": "Yes, the system tracks guest birthdays and automatically sends personalized emails with exclusive member rates or complimentary upgrades."
          }
        ],
        "caseStudies": [
          {
            "title": "Palm Villa Resorts",
            "result": "Repeat booking revenue grew by 22% through personalized email campaigns",
            "industry": "Resort & Spa"
          }
        ]
      },
      {
        "slug": "revenue-management-system",
        "title": "Revenue Management System",
        "tagline": "Maximize revenue with dynamic pricing intelligence",
        "overview": "A hospitality revenue management dashboard with competitor rate tracking, demand forecasting, and dynamic pricing recommendations to maximize RevPAR.",
        "features": [
          "Competitor Rate Intelligence",
          "Demand Forecasting (Events, Seasons)",
          "Dynamic Pricing Recommendations",
          "OTA Performance Analytics",
          "RevPAR & Occupancy Dashboard",
          "Channel Revenue Attribution",
          "Pickup & Pace Reports",
          "Rate Parity Monitoring"
        ],
        "benefits": [
          "Maximize revenue per available room",
          "Stay competitive with dynamic pricing",
          "Identify demand patterns early",
          "Reduce OTA over-dependency",
          "Data-driven rate decisions"
        ],
        "process": [
          "Data Source Integration",
          "Competitor Scraping Setup",
          "Dashboard Build",
          "Forecasting Algorithm",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "Python",
          "Node.js",
          "PostgreSQL",
          "Scrapy (Web Scraping)",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Revenue Dashboard",
            "price": "₹59,999",
            "desc": "Core revenue intelligence",
            "features": [
              "Competitor Rates",
              "RevPAR Dashboard",
              "Occupancy Reports",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Dynamic Pricing Suite",
            "price": "₹109,999",
            "desc": "Full RMS with dynamic pricing",
            "features": [
              "Dynamic Pricing AI",
              "Demand Forecasting",
              "Rate Parity Alerts",
              "Channel Analytics",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "How does it track competitor hotel rates?",
            "a": "We build automated rate scrapers for OTA platforms (Booking.com, Expedia, MakeMyTrip) that update competitor pricing data daily or hourly."
          }
        ],
        "caseStudies": [
          {
            "title": "MetroStay Hotels",
            "result": "RevPAR improved by 18% in 6 months after implementing dynamic pricing recommendations",
            "industry": "Business Hotel"
          }
        ]
      }
    ]
  },
  {
    "id": "media-entertainment-solutions",
    "slug": "media-entertainment-solutions",
    "name": "Media & Entertainment Solutions",
    "tagline": "OTT platforms, content portals & entertainment mobile apps",
    "color": "#dc2626",
    "bgColor": "#fff1f2",
    "description": "We build powerful digital platforms for media houses, content creators, OTT companies, and entertainment brands — from streaming platforms and digital magazines to artist portals and entertainment marketing.",
    "services": [
      {
        "slug": "media-company-website",
        "title": "Media Company Website",
        "tagline": "A professional digital home for your media brand",
        "overview": "A high-impact website for media companies, news portals, production houses, and creative agencies to showcase content, attract clients, and build audience.",
        "features": [
          "Content & News Publishing Platform",
          "Portfolio & Showreel Showcases",
          "Advertising & Sponsorship Pages",
          "Media Kit & Rate Card Downloads",
          "Team & Talent Profiles",
          "Video Player Integration",
          "Newsletter Signup",
          "SEO-optimized News Pages"
        ],
        "benefits": [
          "Build media brand credibility",
          "Attract advertisers and sponsors",
          "Showcase content portfolio",
          "Grow subscriber base",
          "SEO-driven audience growth"
        ],
        "process": [
          "Brand Discovery",
          "CMS Architecture",
          "UI/UX Design",
          "Development",
          "Content Migration",
          "SEO",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Sanity CMS",
          "Node.js",
          "AWS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Media Website",
            "price": "₹29,999",
            "desc": "Core media company presence",
            "features": [
              "Up to 15 Pages",
              "Video Integration",
              "Newsletter Signup",
              "Media Kit",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "News Portal",
            "price": "₹59,999",
            "desc": "Full-featured news & media portal",
            "features": [
              "CMS for Journalists",
              "SEO News Pages",
              "Ad Network Integration",
              "Email Newsletter",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can our journalists publish articles directly without a developer?",
            "a": "Yes, we integrate a user-friendly CMS (like Sanity or WordPress) so your editorial team can publish, edit, and schedule articles independently."
          }
        ],
        "caseStudies": [
          {
            "title": "CityNews Today",
            "result": "Grew to 1 Million monthly page views within 12 months using SEO-optimized article structure",
            "industry": "Digital News Media"
          }
        ]
      },
      {
        "slug": "content-streaming-platform",
        "title": "Content Streaming Platform",
        "tagline": "Build your own video or audio content platform",
        "overview": "A custom video or audio streaming platform with subscription tiers, paywall, content management, and analytics for media companies and content creators.",
        "features": [
          "Video/Audio Upload & Transcoding",
          "Subscription & Paywall System",
          "Content Library & Categorization",
          "Adaptive Bitrate Streaming (HLS)",
          "Offline Download (for Apps)",
          "Creator/Publisher CMS",
          "Viewer Analytics",
          "Multi-device (Web, App, Smart TV)"
        ],
        "benefits": [
          "Monetize content directly without middlemen",
          "Own your subscriber relationship",
          "Scale to millions of concurrent viewers",
          "Deep viewer analytics",
          "Premium content experience"
        ],
        "process": [
          "Platform Architecture",
          "CDN Setup",
          "Streaming Integration",
          "Payment Build",
          "App Dev",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "AWS CloudFront",
          "HLS.js",
          "Razorpay",
          "FFmpeg"
        ],
        "pricingPlans": [
          {
            "name": "Streaming MVP",
            "price": "₹1,49,999",
            "desc": "Core content streaming platform",
            "features": [
              "Video Upload & Streaming",
              "Subscription System",
              "Content CMS",
              "Analytics",
              "12 Weeks Delivery"
            ]
          },
          {
            "name": "OTT Platform",
            "price": "₹2,99,999",
            "desc": "Full multi-device OTT platform",
            "features": [
              "Adaptive Bitrate",
              "Mobile App",
              "Smart TV App",
              "Offline Downloads",
              "20 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it handle 10,000 concurrent viewers?",
            "a": "Yes, we architect on AWS CloudFront CDN which can auto-scale to handle hundreds of thousands of concurrent viewers globally."
          }
        ],
        "caseStudies": [
          {
            "title": "Regional Film OTT",
            "result": "Launched a regional language OTT platform that reached 50,000 paid subscribers in 8 months",
            "industry": "Regional Entertainment"
          }
        ]
      },
      {
        "slug": "ott-app-development",
        "title": "OTT App Development",
        "tagline": "iOS, Android, Smart TV & Firestick OTT apps",
        "overview": "Native OTT applications across all major platforms — iOS, Android, Android TV, Apple TV, and Amazon Firestick — for your streaming platform or content brand.",
        "features": [
          "iOS & Android Mobile Apps",
          "Android TV & Apple TV Apps",
          "Amazon Firestick App",
          "User Authentication & Profiles",
          "Subscription Plan Management",
          "Offline Download",
          "Chromecast Support",
          "Parental Controls"
        ],
        "benefits": [
          "Reach viewers on every screen",
          "Native performance on each platform",
          "Consistent brand experience",
          "Monetize across all devices",
          "Compete with major OTT platforms"
        ],
        "process": [
          "App Architecture",
          "UI/UX Design per Platform",
          "Mobile App Dev",
          "TV App Dev",
          "Integration with Streaming Backend",
          "Testing",
          "Store Submission"
        ],
        "technologies": [
          "React Native",
          "Swift (iOS)",
          "Kotlin (Android TV)",
          "tvOS",
          "Flutter",
          "Node.js",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Mobile OTT Apps",
            "price": "₹1,29,999",
            "desc": "iOS & Android streaming apps",
            "features": [
              "iOS App",
              "Android App",
              "User Profiles",
              "Subscription",
              "12 Weeks Delivery"
            ]
          },
          {
            "name": "Full OTT Suite",
            "price": "₹2,49,999",
            "desc": "Mobile + Smart TV apps",
            "features": [
              "Android TV App",
              "Apple TV App",
              "Firestick App",
              "Chromecast",
              "20 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Will the apps be published on the App Store and Google Play?",
            "a": "Yes, we handle the complete submission and approval process for all stores, including Apple App Store, Google Play, and Amazon Appstore."
          }
        ],
        "caseStudies": [
          {
            "title": "DevotionalStream",
            "result": "Launched on 5 platforms simultaneously with 4.7-star rating and 2 Lakh downloads in 3 months",
            "industry": "Religious Content OTT"
          }
        ]
      },
      {
        "slug": "digital-magazine-portal",
        "title": "Digital Magazine & News Portal",
        "tagline": "A beautiful digital publishing experience",
        "overview": "An engaging digital magazine or news portal with article publishing, subscription paywalls, digital flipbook magazines, push notifications, and advertising integration.",
        "features": [
          "Article & Issue Publishing (CMS)",
          "Digital Flipbook Magazine Reader",
          "Subscription & Paywall System",
          "Category & Tag-based Navigation",
          "Newsletter Integration",
          "Native Advertising System",
          "Push Notifications for New Issues",
          "Offline Reading Mode (App)"
        ],
        "benefits": [
          "Monetize content via subscriptions & ads",
          "Beautiful digital reading experience",
          "Push new issues to subscribers instantly",
          "Reduce print distribution costs",
          "Grow digital subscriber base"
        ],
        "process": [
          "CMS Architecture",
          "Flipbook Integration",
          "Subscription Build",
          "App Development",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React Native",
          "Sanity CMS",
          "Node.js",
          "FlipHTML5 API",
          "Razorpay"
        ],
        "pricingPlans": [
          {
            "name": "Digital Portal",
            "price": "₹44,999",
            "desc": "Web-based digital magazine",
            "features": [
              "CMS",
              "Paywall",
              "Newsletter",
              "Ad Slots",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Magazine App",
            "price": "₹89,999",
            "desc": "Full magazine app & portal",
            "features": [
              "iOS & Android App",
              "Flipbook Reader",
              "Push Notifications",
              "Offline Mode",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we import our existing print magazine PDF as a digital flipbook?",
            "a": "Yes, we integrate PDF-to-flipbook conversion so your print magazine PDFs are automatically converted into a beautiful digital page-turning experience."
          }
        ],
        "caseStudies": [
          {
            "title": "StyleVogue Magazine",
            "result": "Grew digital subscribers from 0 to 15,000 in 12 months after going digital",
            "industry": "Fashion & Lifestyle Magazine"
          }
        ]
      },
      {
        "slug": "talent-artist-portal",
        "title": "Talent & Artist Portfolio Portal",
        "tagline": "Discover and book talent digitally",
        "overview": "A marketplace-style portal to showcase and book artists, performers, speakers, and creative talent for events, productions, and brand collaborations.",
        "features": [
          "Talent Profile Pages (Video, Photos, Bio)",
          "Searchable Talent Directory",
          "Availability Calendar",
          "Online Booking & Quote Request",
          "Contract Management",
          "Payment Processing",
          "Rating & Review System",
          "Talent Management Dashboard"
        ],
        "benefits": [
          "Showcase talent professionally",
          "Streamline booking inquiries",
          "Build a talent marketplace business",
          "Transparent pricing for clients",
          "Earn commissions on talent bookings"
        ],
        "process": [
          "Platform Architecture",
          "Profile Design",
          "Booking Engine",
          "Payment Integration",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "Razorpay",
          "Calendly API"
        ],
        "pricingPlans": [
          {
            "name": "Talent Portfolio",
            "price": "₹34,999",
            "desc": "Agency talent showcase",
            "features": [
              "Talent Profiles",
              "Booking Requests",
              "Video Gallery",
              "Admin Dashboard",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Talent Marketplace",
            "price": "₹74,999",
            "desc": "Full booking marketplace",
            "features": [
              "Talent Directory",
              "Online Booking",
              "Payments",
              "Commission Management",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can talent upload their own profiles and videos?",
            "a": "Yes, each talent gets a personal login to manage their profile, upload media, update availability, and receive booking requests."
          }
        ],
        "caseStudies": [
          {
            "title": "ArtistConnect India",
            "result": "Facilitated 500+ successful talent bookings in the first year of the platform",
            "industry": "Talent & Artist Management"
          }
        ]
      },
      {
        "slug": "media-crm",
        "title": "Media & Publisher CRM",
        "tagline": "Manage advertisers, subscribers, and content pipelines",
        "overview": "A specialized CRM for media companies to manage advertiser relationships, track ad sales pipelines, manage editorial content workflows, and subscriber engagement.",
        "features": [
          "Advertiser Account Management",
          "Ad Sales Pipeline & Revenue Tracking",
          "Editorial Content Calendar",
          "Subscriber Database & Segmentation",
          "Newsletter Campaign Management",
          "Content Performance Analytics",
          "Advertiser Report Generation",
          "Freelancer & Contributor Management"
        ],
        "benefits": [
          "Maximize advertising revenue",
          "Streamline editorial workflows",
          "Grow and engage subscriber base",
          "Data-driven content strategy",
          "Professional advertiser reporting"
        ],
        "process": [
          "CRM Design",
          "Build",
          "Integration with CMS",
          "Data Import",
          "Team Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "Mailchimp",
          "SendGrid",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Media CRM",
            "price": "₹39,999",
            "desc": "Core advertiser & content management",
            "features": [
              "Advertiser Management",
              "Ad Pipeline",
              "Content Calendar",
              "Basic Analytics",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Publisher Suite",
            "price": "₹74,999",
            "desc": "Full media business management platform",
            "features": [
              "Subscriber Segmentation",
              "Newsletter Automation",
              "Revenue Reports",
              "Freelancer Management",
              "8 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can it generate ad performance reports for our advertisers?",
            "a": "Yes, the Publisher Suite includes branded advertiser reporting with impressions, clicks, and campaign performance summaries."
          }
        ],
        "caseStudies": [
          {
            "title": "TechPulse Media",
            "result": "Grew advertising revenue by 45% through structured sales pipeline management",
            "industry": "B2B Tech Media"
          }
        ]
      },
      {
        "slug": "entertainment-marketing",
        "title": "Entertainment Digital Marketing",
        "tagline": "Build buzz, grow audiences & drive ticket sales",
        "overview": "Performance-focused digital marketing for entertainment brands, OTT platforms, and event promoters to build massive audiences and drive ticket sales or subscriptions.",
        "features": [
          "YouTube Channel Growth Strategy",
          "Instagram & Facebook Fan Page Growth",
          "Trailer & Content Promotion Campaigns",
          "Paid Ads for Ticket Sales & Subscriptions",
          "Influencer & Celebrity Collaborations",
          "Viral Content Campaign Design",
          "PR & Media Coverage Coordination",
          "Audience Analytics & Reporting"
        ],
        "benefits": [
          "Build a large, engaged online fan base",
          "Maximize ticket and subscription sales",
          "Create viral launch campaigns",
          "Leverage influencer reach",
          "Measurable campaign ROI"
        ],
        "process": [
          "Audience Research",
          "Campaign Strategy",
          "Creative Production",
          "Channel Setup",
          "Campaign Launch",
          "Optimization",
          "Reporting"
        ],
        "technologies": [
          "Meta Ads Manager",
          "Google Ads",
          "YouTube Studio",
          "Instagram",
          "Canva Pro",
          "Influencer Platforms"
        ],
        "pricingPlans": [
          {
            "name": "Entertainment Buzz",
            "price": "₹24,999/mo",
            "desc": "Audience growth campaigns",
            "features": [
              "Social Media Mgt",
              "Content Promotion",
              "Basic Paid Ads",
              "15 Posts/mo",
              "Monthly Report"
            ]
          },
          {
            "name": "Blockbuster Campaign",
            "price": "₹49,999/mo",
            "desc": "Full-scale launch marketing",
            "features": [
              "Influencer Collaborations",
              "Multi-platform Ads",
              "Viral Campaign Design",
              "PR Outreach",
              "Weekly Reports"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can you help launch a new OTT platform with zero subscribers?",
            "a": "Yes, we specialize in zero-to-launch growth campaigns including organic content seeding, influencer partnerships, and paid acquisition strategies."
          }
        ],
        "caseStudies": [
          {
            "title": "StreamFirst Launch",
            "result": "Acquired 10,000 paid subscribers in 30 days of launch through a coordinated multi-channel campaign",
            "industry": "New OTT Launch"
          }
        ]
      }
    ]
  },
  {
    "id": "sports-management-solutions",
    "slug": "sports-management-solutions",
    "name": "Sports Management Solutions",
    "tagline": "Sports club portals, team management & athlete performance apps",
    "color": "#ea580c",
    "bgColor": "#fff7ed",
    "description": "We build high-performance digital platforms for sports clubs, academies, national federations, and sports brands — from team management systems and athlete performance apps to tournament management and fan engagement.",
    "services": [
      {
        "slug": "sports-club-website",
        "title": "Sports Club & Academy Website",
        "tagline": "Energetic websites for sports clubs and academies",
        "overview": "A dynamic website for sports clubs, academies, and federations to showcase teams, invite member registrations, publish match results, and engage fans.",
        "features": [
          "Team & Player Profiles",
          "Match Fixtures & Results",
          "Online Member Registration",
          "Academy Coaching Programs",
          "Achievement & Trophy Showcase",
          "News & Match Reports",
          "Fan Gallery & Videos",
          "Mobile-Responsive Design"
        ],
        "benefits": [
          "Attract new members and students",
          "Showcase club achievements",
          "Engage fans digitally",
          "Simplify member registration",
          "Build club brand identity"
        ],
        "process": [
          "Brand Discovery",
          "UI/UX Design",
          "Development",
          "Content Upload",
          "SEO",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Sanity CMS",
          "Vercel"
        ],
        "pricingPlans": [
          {
            "name": "Club Website",
            "price": "₹19,999",
            "desc": "Core sports club presence",
            "features": [
              "Team Profiles",
              "Match Results",
              "News",
              "Member Registration Form",
              "2 Weeks Delivery"
            ]
          },
          {
            "name": "Academy Pro Site",
            "price": "₹39,999",
            "desc": "Full sports academy website",
            "features": [
              "Coaching Programs",
              "Video Gallery",
              "Fan Section",
              "SEO Optimization",
              "4 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we update match results and player stats ourselves?",
            "a": "Yes, we integrate a simple CMS where your team admin can update results, player stats, and news articles without any technical help."
          }
        ],
        "caseStudies": [
          {
            "title": "Metro FC Academy",
            "result": "Academy enrollment inquiries grew by 150% through online registration and SEO",
            "industry": "Football Academy"
          }
        ]
      },
      {
        "slug": "team-management-system",
        "title": "Team Management System",
        "tagline": "Manage your teams, training, and performance data",
        "overview": "A comprehensive team management platform for coaches and team managers to manage squads, track attendance, schedule training, and analyze player performance.",
        "features": [
          "Squad & Player Management",
          "Training Session Scheduler",
          "Attendance Tracking",
          "Fitness & Medical Records",
          "Video Analysis Module",
          "Coach Communication Hub",
          "Performance Data Dashboard",
          "Youth Academy Management"
        ],
        "benefits": [
          "Streamline squad administration",
          "Data-driven player development",
          "Improve training planning",
          "Centralize all team information",
          "Track athlete health & fitness"
        ],
        "process": [
          "Team Workflow Design",
          "System Build",
          "Mobile App for Players",
          "Testing",
          "Staff Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Team Manager",
            "price": "₹29,999",
            "desc": "Core team management",
            "features": [
              "Squad Management",
              "Training Schedule",
              "Attendance",
              "Basic Stats",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Performance Suite",
            "price": "₹59,999",
            "desc": "Full-featured team & performance system",
            "features": [
              "Video Analysis",
              "Fitness Records",
              "Player App",
              "Performance Dashboard",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can players access their individual performance data?",
            "a": "Yes, each player gets a personal login to see their match stats, fitness data, and coach feedback through the player app."
          }
        ],
        "caseStudies": [
          {
            "title": "State Cricket Association",
            "result": "Enabled coaches to track 200+ players across 5 teams from a single dashboard",
            "industry": "Cricket Administration"
          }
        ]
      },
      {
        "slug": "sports-booking-platform",
        "title": "Sports Venue Booking Platform",
        "tagline": "Online court, ground, and facility booking made easy",
        "overview": "An online booking platform for sports venues (cricket grounds, football pitches, badminton courts, swimming pools) to manage time-slot reservations and payments.",
        "features": [
          "Real-time Slot Availability Calendar",
          "Multi-sport & Multi-court Booking",
          "Online Payment Collection",
          "Membership vs Pay-per-Use Pricing",
          "Automated Booking Confirmation",
          "QR Code Access Control",
          "Corporate Group Booking",
          "Revenue & Utilization Reports"
        ],
        "benefits": [
          "Maximize facility utilization",
          "Reduce front desk booking calls",
          "Accept online advance payment",
          "Clear revenue tracking",
          "Manage memberships and walk-ins together"
        ],
        "process": [
          "Facility Mapping",
          "Booking Engine Build",
          "Payment Integration",
          "QR Access Setup",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "QR APIs",
          "Firebase"
        ],
        "pricingPlans": [
          {
            "name": "Venue Booking",
            "price": "₹24,999",
            "desc": "Core court booking system",
            "features": [
              "Slot Calendar",
              "Online Booking",
              "Payment Gateway",
              "Booking Emails",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Venue Pro",
            "price": "₹49,999",
            "desc": "Multi-court with QR access",
            "features": [
              "Multi-sport Courts",
              "QR Access Control",
              "Membership Management",
              "Revenue Reports",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can members have a different (lower) price than non-members?",
            "a": "Yes, the system supports tiered pricing where registered members automatically see member rates while public users see standard rates."
          }
        ],
        "caseStudies": [
          {
            "title": "Urban Sportiz",
            "result": "Increased court utilization from 55% to 89% within 4 months of launching online booking",
            "industry": "Multi-Sport Complex"
          }
        ]
      },
      {
        "slug": "athlete-performance-app",
        "title": "Athlete Performance App",
        "tagline": "Track, analyze, and improve athlete performance",
        "overview": "A mobile app for athletes and coaches to track physical performance metrics, training loads, nutrition, recovery, and mental wellness throughout the season.",
        "features": [
          "GPS Speed & Distance Tracking",
          "Training Load Monitoring (RPE, HRV)",
          "Nutrition & Hydration Logging",
          "Sleep & Recovery Tracking",
          "Injury Prevention Alerts",
          "Coach Feedback Module",
          "Performance Trend Analytics",
          "Competition Preparation Mode"
        ],
        "benefits": [
          "Prevent overtraining and injuries",
          "Optimize peak performance timing",
          "Data-driven coaching decisions",
          "Athlete accountability",
          "Long-term career performance tracking"
        ],
        "process": [
          "Sport Science Consultation",
          "App Architecture",
          "Wearable Integration",
          "Mobile Dev",
          "Testing",
          "Beta with Athletes",
          "Launch"
        ],
        "technologies": [
          "React Native",
          "Python (Analytics)",
          "Node.js",
          "HealthKit/Google Fit",
          "Firebase",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Athlete App",
            "price": "₹79,999",
            "desc": "Core performance tracking app",
            "features": [
              "Training Logs",
              "Nutrition Tracking",
              "Coach Dashboard",
              "Basic Analytics",
              "8 Weeks Delivery"
            ]
          },
          {
            "name": "Elite Performance",
            "price": "₹1,39,999",
            "desc": "Advanced sports science app",
            "features": [
              "Wearable Integration",
              "HRV Monitoring",
              "Injury Alerts",
              "Periodization Planning",
              "13 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Does it integrate with fitness wearables like Garmin or Polar?",
            "a": "Yes, the Elite Performance app integrates with major sports wearables via their APIs including Garmin Connect IQ, Polar, and Whoop."
          }
        ],
        "caseStudies": [
          {
            "title": "National Athletics Federation",
            "result": "Reduced soft tissue injuries by 18% among national squad athletes through load monitoring",
            "industry": "Track & Field"
          }
        ]
      },
      {
        "slug": "sports-ecommerce",
        "title": "Sports Equipment E-commerce",
        "tagline": "Sell sports gear and merchandise online",
        "overview": "A specialized e-commerce store for sports equipment retailers and sports brands to sell gear, apparel, and merchandise online with club/academy tie-ups.",
        "features": [
          "Sports Equipment & Apparel Catalog",
          "Sport-based Product Filtering",
          "Club & Team Kit Customization",
          "Bulk B2B School / Club Orders",
          "Product Reviews & Expert Ratings",
          "Video Demonstrations",
          "GST Invoicing",
          "Shipping & Delivery Integration"
        ],
        "benefits": [
          "Reach sports enthusiasts nationally",
          "Accept bulk institutional orders",
          "Custom kit branding for clubs",
          "Expert content to drive purchase decisions",
          "Online GST-compliant invoicing"
        ],
        "process": [
          "Catalog Structure",
          "E-commerce Build",
          "Customization Module",
          "Payment Integration",
          "Shipping Setup",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "Shiprocket",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Sports Store",
            "price": "₹49,999",
            "desc": "Core sports e-commerce",
            "features": [
              "Product Catalog",
              "Sports Filters",
              "Payment Gateway",
              "GST Invoicing",
              "5 Weeks Delivery"
            ]
          },
          {
            "name": "Sports Marketplace",
            "price": "₹89,999",
            "desc": "Full B2B + B2C sports platform",
            "features": [
              "Club Kit Customization",
              "Bulk B2B Orders",
              "Video Demos",
              "Expert Reviews",
              "9 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we type or order custom-branded kits?",
            "a": "Yes, we build a kit customization module where institutional buyers can upload their logo and select kit colors for custom bulk manufacturing orders."
          }
        ],
        "caseStudies": [
          {
            "title": "ProSport Equipment",
            "result": "Online sales grew to 45% of total revenue within 12 months of launching the e-commerce store",
            "industry": "Sports Retail"
          }
        ]
      },
      {
        "slug": "sports-crm",
        "title": "Sports CRM",
        "tagline": "Manage sponsors, fans, and club relationships",
        "overview": "A CRM tailored for sports clubs, agencies, and events to manage sponsor relationships, track fan engagement, manage member renewals, and execute targeted communications.",
        "features": [
          "Sponsor Pipeline & Contract Tracking",
          "Fan Database & Segmentation",
          "Member Renewal Management",
          "Season Ticket Sales Pipeline",
          "Event & Match Communication",
          "Merchandise Sales Tracking",
          "Sponsor ROI Reporting",
          "Fan Loyalty Program Integration"
        ],
        "benefits": [
          "Maximize sponsorship revenue",
          "Build a loyal, engaged fan base",
          "Never miss a member renewal",
          "Measure sponsor ROI transparently",
          "Streamline all commercial relationships"
        ],
        "process": [
          "CRM Design",
          "Build",
          "Data Import",
          "Integration",
          "Training",
          "Launch"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL",
          "SendGrid",
          "Twilio",
          "AWS"
        ],
        "pricingPlans": [
          {
            "name": "Sports CRM",
            "price": "₹34,999",
            "desc": "Core sports commercial management",
            "features": [
              "Sponsor Management",
              "Member Renewals",
              "Fan Database",
              "Basic Reports",
              "4 Weeks Delivery"
            ]
          },
          {
            "name": "Club CRM Pro",
            "price": "₹64,999",
            "desc": "Advanced sports business platform",
            "features": [
              "Season Ticket Pipeline",
              "Sponsor ROI Reports",
              "Loyalty Integration",
              "Advanced Analytics",
              "7 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we generate sponsorship proposal reports showing sponsor ROI?",
            "a": "Yes, the Club CRM Pro generates branded sponsor reports showing logo placements, match-day visibility, digital reach, and audience demographics."
          }
        ],
        "caseStudies": [
          {
            "title": "Premier Sports Club",
            "result": "Grew sponsorship revenue by 60% in one season through structured sponsor management and ROI reporting",
            "industry": "Professional Sports Club"
          }
        ]
      },
      {
        "slug": "tournament-management",
        "title": "Tournament Management System",
        "tagline": "Run tournaments, leagues, and cups digitally",
        "overview": "A complete digital system to manage sports tournaments from team registration and draw creation to match scheduling, live scoring, and public leaderboards.",
        "features": [
          "Online Team Registration & Entry Fees",
          "Automated Draw & Bracket Generation",
          "Match Schedule & Venue Management",
          "Live Score Input & Updates",
          "Public Leaderboard & Points Table",
          "Referee/Umpire Assignment",
          "Online Result Publishing",
          "Digital Certificates & Medals Tracking"
        ],
        "benefits": [
          "Eliminate paper-based tournament administration",
          "Real-time results visible to all teams",
          "Professional participant experience",
          "Scale to 100s of teams",
          "Complete tournament archive"
        ],
        "process": [
          "Tournament Format Design",
          "System Build",
          "Draw Algorithm",
          "Scoring Module",
          "Testing",
          "Launch"
        ],
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL",
          "Razorpay",
          "WebSockets"
        ],
        "pricingPlans": [
          {
            "name": "Tournament Manager",
            "price": "₹24,999",
            "desc": "Core tournament system",
            "features": [
              "Team Registration",
              "Draw System",
              "Match Schedule",
              "Leaderboard",
              "3 Weeks Delivery"
            ]
          },
          {
            "name": "Tournament Pro",
            "price": "₹49,999",
            "desc": "Full tournament management suite",
            "features": [
              "Live Scoring",
              "Referee Assignment",
              "Online Results",
              "Digital Certificates",
              "6 Weeks Delivery"
            ],
            "popular": true
          }
        ],
        "faqs": [
          {
            "q": "Can we run multiple tournaments on the same system simultaneously?",
            "a": "Yes, the Tournament Pro plan is a multi-tournament platform where you can run parallel tournaments (different sports or age groups) independently."
          }
        ],
        "caseStudies": [
          {
            "title": "State Badminton Association",
            "result": "Ran an 800-player state tournament with zero paper, real-time results, and 100% participant satisfaction",
            "industry": "Badminton Federation"
          }
        ]
      }
    ]
  }
];
