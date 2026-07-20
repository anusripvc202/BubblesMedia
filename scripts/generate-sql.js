const fs = require('fs');
const path = require('path');

// Target paths
const servicesDataPath = path.join(__dirname, '../src/data/servicesData.js');
const industriesPath = path.join(__dirname, '../src/data/industries.js');
const outputPath = path.join(__dirname, '../supabase/seed_catalog.sql');

console.log('Reading servicesData.js...');
let servicesContent = fs.readFileSync(servicesDataPath, 'utf8');

// Replace JSX SVGs with string templates so Node can parse it without JSX compiler
servicesContent = servicesContent.replace(/import React from 'react';/g, '');
servicesContent = servicesContent.replace(/import React,[\s\S]*?from 'react';/g, '');

// Match JSX icon: ( <svg ... </svg> )
const svgRegex = /icon:\s*\([\s\S]*?(<svg[\s\S]*?<\/svg>)\s*\)/g;
servicesContent = servicesContent.replace(svgRegex, (match, svg) => {
  // Normalize double quotes and newlines
  const cleanSvg = svg.replace(/`/g, '\\`').replace(/\r?\n/g, ' ');
  return `icon: \`${cleanSvg}\``;
});

// Write to a temporary file
const tempServicesPath = path.join(__dirname, 'temp_servicesData.js');
fs.writeFileSync(tempServicesPath, servicesContent, 'utf8');

// Require the temp file
const tempServices = require('./temp_servicesData.js');

// Parse industries
console.log('Reading industries.js...');
let industriesContent = fs.readFileSync(industriesPath, 'utf8');
const tempIndustriesPath = path.join(__dirname, 'temp_industries.js');
fs.writeFileSync(tempIndustriesPath, industriesContent, 'utf8');

const tempIndustries = require('./temp_industries.js');

// Clean up temp files when script exits
process.on('exit', () => {
  try { fs.unlinkSync(tempServicesPath); } catch (e) {}
  try { fs.unlinkSync(tempIndustriesPath); } catch (e) {}
});

// Start generating SQL
let sql = `-- ============================================================
-- SEED CATALOG DATA FOR BUBBLESMEDIA
-- ============================================================

-- Clean existing data
truncate table public.calculator_configs cascade;
truncate table public.faqs cascade;
truncate table public.services cascade;
truncate table public.categories cascade;
truncate table public.testimonials cascade;

`;

// 1. Seed Categories
console.log('Extracting categories...');
const categoriesList = tempServices.categories || [];
categoriesList.forEach(cat => {
  const statsJson = JSON.stringify(cat.stats || []);
  const escapedIcon = cat.icon.replace(/'/g, "''");
  
  sql += `insert into public.categories (id, name, "desc", tagline, color_theme, accent_color, stats, icon_svg)
values ('${cat.id}', '${cat.name.replace(/'/g, "''")}', '${cat.desc.replace(/'/g, "''")}', '${cat.tagline.replace(/'/g, "''")}', '${cat.colorTheme}', '${cat.accentColor}', '${statsJson}'::jsonb, '${escapedIcon}')
on conflict (id) do update set 
  name = excluded.name, 
  "desc" = excluded."desc", 
  tagline = excluded.tagline, 
  color_theme = excluded.color_theme, 
  accent_color = excluded.accent_color, 
  stats = excluded.stats, 
  icon_svg = excluded.icon_svg;\n`;
});

sql += '\n';

// 2. Seed Services from serviceDatabase & industries
console.log('Extracting services...');
const servicesMap = tempServices.serviceDatabase || {};
const addedServiceIds = new Set();

const addServiceSQL = (id, categoryId, title, tagline, desc, price, features, plans, popular) => {
  if (addedServiceIds.has(id)) return;
  addedServiceIds.add(id);

  const cleanTitle = title.replace(/'/g, "''");
  const cleanTagline = tagline.replace(/'/g, "''");
  const cleanDesc = desc.replace(/'/g, "''");
  const cleanPrice = price.replace(/'/g, "''");
  const featuresJson = JSON.stringify(features || []);
  const plansJson = JSON.stringify(plans || []);

  sql += `insert into public.services (id, category_id, title, tagline, "desc", price, features, plans, popular)
values ('${id}', '${categoryId}', '${cleanTitle}', '${cleanTagline}', '${cleanDesc}', '${cleanPrice}', '${featuresJson}'::jsonb, '${plansJson}'::jsonb, ${popular ? 'true' : 'false'})
on conflict (id) do update set 
  category_id = excluded.category_id,
  title = excluded.title,
  tagline = excluded.tagline,
  "desc" = excluded."desc",
  price = excluded.price,
  features = excluded.features,
  plans = excluded.plans,
  popular = excluded.popular;\n`;
};

// Seed services from categories database
Object.keys(servicesMap).forEach(serviceId => {
  const srv = servicesMap[serviceId];
  if (!srv) return;
  const catId = srv.category;
  const features = srv.features || [];
  const plans = srv.plans || [];
  addServiceSQL(serviceId, catId, srv.title, srv.tagline || '', srv.desc || srv.description || '', srv.price || 'Contact Us', features, plans, srv.popular || false);
});

// Seed services from industries list (they map to "industry-solutions" category)
const industriesList = tempIndustries.industries || [];
industriesList.forEach(ind => {
  const indServices = ind.services || [];
  indServices.forEach(srv => {
    // Generate an ID for the industry service
    const id = srv.slug;
    const features = srv.features || [];
    
    // map pricingPlans to plans
    const plans = (srv.pricingPlans || []).map(p => ({
      name: p.name,
      price: p.price,
      desc: p.desc || '',
      features: p.features || [],
      popular: p.popular || false
    }));

    addServiceSQL(id, 'industry-solutions', srv.title, srv.tagline || '', srv.overview || '', srv.price || 'Contact Us', features, plans, false);
  });
});

sql += '\n';

// 3. Seed FAQs
console.log('Extracting FAQs...');
const faqsMap = tempServices.faqsDatabase || {};
Object.keys(faqsMap).forEach(catId => {
  const list = faqsMap[catId] || [];
  list.forEach(faq => {
    const q = faq.q.replace(/'/g, "''");
    const a = faq.a.replace(/'/g, "''");
    sql += `insert into public.faqs (category_id, question, answer) values ('${catId}', '${q}', '${a}');\n`;
  });
});

sql += '\n';

// 4. Seed Testimonials
console.log('Extracting Testimonials...');
const testimonialsMap = tempServices.testimonialsDatabase || {};
Object.keys(testimonialsMap).forEach(catId => {
  const list = testimonialsMap[catId] || [];
  list.forEach(test => {
    const name = test.name.replace(/'/g, "''");
    const role = test.role.replace(/'/g, "''");
    const content = test.content.replace(/'/g, "''");
    sql += `insert into public.testimonials (category_id, name, role, content) values ('${catId}', '${name}', '${role}', '${content}');\n`;
  });
});

sql += '\n';

// 5. Seed Calculator Configs
console.log('Extracting Calculator Configs...');
const calcConfigs = tempServices.calculatorConfigs || {};
Object.keys(calcConfigs).forEach(catId => {
  const config = calcConfigs[catId];
  if (!config) return;

  const title = config.title.replace(/'/g, "''");
  const basePrice = config.basePrice || 0;
  const slidersJson = JSON.stringify(config.sliders || []);
  const checkboxesJson = JSON.stringify(config.checkboxes || []);

  sql += `insert into public.calculator_configs (category_id, title, base_price, sliders, checkboxes)
values ('${catId}', '${title}', ${basePrice}, '${slidersJson}'::jsonb, '${checkboxesJson}'::jsonb)
on conflict (category_id) do update set
  title = excluded.title,
  base_price = excluded.base_price,
  sliders = excluded.sliders,
  checkboxes = excluded.checkboxes;\n`;
});

// Save to disk
fs.writeFileSync(outputPath, sql, 'utf8');
console.log(`Successfully generated ${outputPath}!`);
