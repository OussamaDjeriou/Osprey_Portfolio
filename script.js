/**
 * Osprey Web Studio — Main Interactive Script
 * Features: Styleco aesthetic interactions, project lightbox, filter tabs,
 * clipboard copy, direct WhatsApp inquiry generator, responsive nav,
 * and full EN / FR / AR multilingual support.
 */

// ==========================================================================
//  TRANSLATION SYSTEM
// ==========================================================================
const translations = {
  en: {
    'nav-home': 'Home', 'nav-projects': 'Projects', 'nav-contact': 'Contact',
    'nav-wa-btn': 'WhatsApp Direct',
    'hero-stat-label': 'BESPOKE WEB DEVELOPMENT',
    'hero-stat-sub': 'Designed with precision, crafted for performance.',
    'hero-manifesto': '<strong>Osprey</strong> is a high-end web design &amp; development studio crafting minimalist, ultra-responsive digital products that balance aesthetic purity with commercial impact.',
    'hero-btn-portfolio': 'View Portfolio', 'hero-btn-touch': 'Get in Touch',
    'hero-scroll': 'EXPLORE WORK',
    'section-tag-projects': 'SELECTED WORKS', 'section-tag-projects-sub': 'المشاريع المنجزة',
    'section-title-projects': 'Crafted with Precision & Modern Elegance.',
    'section-subtitle-projects': 'Explore a curated selection of commercial web experiences built from ground up with clean structure, fluid aesthetics, and flawless responsiveness.',
    'filter-all': 'All Projects', 'filter-fashion': 'Fashion & Luxury',
    'filter-health': 'Healthcare', 'filter-fitness': 'Fitness', 'filter-pos': 'SaaS & POS',
    'project-preview': 'Preview Project', 'project-view-details': 'View Details',
    'cat-fashion': 'Fashion & E-Commerce', 'cat-health': 'Healthcare & Clinic',
    'cat-fitness': 'Fitness & Athletics', 'cat-pos': 'Restaurant SaaS & ERP',
    'proj-styleco-desc': 'A minimalist luxury fashion showcase emphasizing visual clarity, serene lighting gradient transitions, and editorial typography. Designed to deliver an unforgettable brand impression.',
    'proj-prodent-desc': 'An intuitive medical clinic web platform featuring service exploration, dental implant modules, doctor credentials, and streamlined patient consultation booking.',
    'proj-repzone-desc': 'High-energy athletic dark-mode website built for a premier training facility. Includes working hour schedules, multi-lingual navigation (Arabic, English, French), and gym location guidance.',
    'proj-restoflow-desc': 'Smart restaurant management dashboard and portal. Built to manage kitchen workflows, point-of-sale orders, and staff operations with an eye-catching illustration and secured authentication.',
    'section-tag-contact': 'GET IN TOUCH', 'section-tag-contact-sub': 'تواصل معنا',
    'section-title-contact': 'Ready to launch your next standout project?',
    'section-subtitle-contact': "Reach out directly through WhatsApp, phone, or social channels. Let's discuss your project and turn your vision into an exceptional web platform.",
    'contact-wa-label': 'WhatsApp & Phone',
    'contact-wa-desc': 'Direct line available for inquiries, quotes, and project discussions.',
    'btn-chat-wa': 'Chat on WhatsApp', 'btn-call': 'Call Now', 'btn-copy': 'Copy', 'btn-copied': 'Copied!',
    'contact-ig-label': 'Instagram',
    'contact-ig-desc': 'Follow our latest design drops, behind-the-scenes workflows, and tech reels.',
    'btn-view-ig': 'View Instagram',
    'contact-fb-label': 'Facebook',
    'contact-fb-desc': 'Connect with our official Facebook page for announcements and client updates.',
    'btn-view-fb': 'View Facebook',
    'footer-tagline': 'Crafting minimalist, high-impact digital experiences for forward-thinking brands.',
    'footer-nav-title': 'Navigation', 'footer-contact-title': 'Get in Touch',
    'footer-home': 'Home', 'footer-projects': 'Projects', 'footer-contact-link': 'Contact',
    'footer-phone-label': 'Phone & WA:', 'footer-fb-label': 'Facebook:', 'footer-ig-label': 'Instagram:',
    'copyright': '© 2026 Osprey Web Studio. All rights reserved.',
    'back-top': 'Back to Top',
    'modal-client-label': 'Client / Focus', 'modal-year-label': 'Year', 'modal-tech-label': 'Tech Stack',
    'modal-request-btn': 'Request Similar Project',
    'toast-copied': 'Phone number copied to clipboard!',
  },
  fr: {
    'nav-home': 'Accueil', 'nav-projects': 'Projets', 'nav-contact': 'Contact',
    'nav-wa-btn': 'WhatsApp Direct',
    'hero-stat-label': 'DÉVELOPPEMENT WEB SUR MESURE',
    'hero-stat-sub': 'Conçu avec précision, créé pour la performance.',
    'hero-manifesto': '<strong>Osprey</strong> est un studio de conception web haut de gamme créant des produits numériques minimalistes et ultra-responsifs qui équilibrent pureté esthétique et impact commercial.',
    'hero-btn-portfolio': 'Voir le Portfolio', 'hero-btn-touch': 'Nous contacter',
    'hero-scroll': 'EXPLORER',
    'section-tag-projects': 'TRAVAUX SÉLECTIONNÉS', 'section-tag-projects-sub': 'المشاريع المنجزة',
    'section-title-projects': 'Conçu avec précision & élégance moderne.',
    'section-subtitle-projects': "Découvrez une sélection d'expériences web commerciales construites de A à Z avec une structure propre, une esthétique fluide et une réactivité parfaite.",
    'filter-all': 'Tous les projets', 'filter-fashion': 'Mode & Luxe',
    'filter-health': 'Santé', 'filter-fitness': 'Fitness', 'filter-pos': 'SaaS & PDV',
    'project-preview': 'Aperçu du projet', 'project-view-details': 'Voir les détails',
    'cat-fashion': 'Mode & E-Commerce', 'cat-health': 'Santé & Clinique',
    'cat-fitness': 'Fitness & Athlétisme', 'cat-pos': 'Restaurant SaaS & ERP',
    'proj-styleco-desc': "Une vitrine de mode luxe minimaliste mettant l'accent sur la clarté visuelle, les transitions lumineuses et la typographie éditoriale. Conçu pour offrir une impression de marque inoubliable.",
    'proj-prodent-desc': "Une plateforme web médicale intuitive avec exploration des services, modules d'implants dentaires, accréditations des médecins et réservation simplifiée de consultations.",
    'proj-repzone-desc': 'Site web sportif en mode sombre haute énergie pour une installation de premier plan. Comprend les horaires, la navigation multilingue (arabe, anglais, français) et les indications.',
    'proj-restoflow-desc': 'Tableau de bord intelligent de gestion de restaurant. Gérez les flux de cuisine, les commandes en point de vente et les opérations du personnel avec une interface attrayante.',
    'section-tag-contact': 'PRENEZ CONTACT', 'section-tag-contact-sub': 'تواصل معنا',
    'section-title-contact': 'Prêt à lancer votre prochain projet remarquable?',
    'section-subtitle-contact': "Contactez-nous via WhatsApp, téléphone ou réseaux sociaux. Discutons de votre projet et transformons votre vision en une plateforme web exceptionnelle.",
    'contact-wa-label': 'WhatsApp & Téléphone',
    'contact-wa-desc': 'Ligne directe disponible pour les demandes, devis et discussions de projet.',
    'btn-chat-wa': 'Discuter sur WhatsApp', 'btn-call': 'Appeler', 'btn-copy': 'Copier', 'btn-copied': 'Copié!',
    'contact-ig-label': 'Instagram',
    'contact-ig-desc': 'Suivez nos dernières créations, coulisses et reels techniques.',
    'btn-view-ig': 'Voir Instagram',
    'contact-fb-label': 'Facebook',
    'contact-fb-desc': 'Connectez-vous à notre page Facebook officielle pour les annonces et mises à jour.',
    'btn-view-fb': 'Voir Facebook',
    'footer-tagline': 'Créer des expériences numériques minimalistes et percutantes pour des marques visionnaires.',
    'footer-nav-title': 'Navigation', 'footer-contact-title': 'Nous contacter',
    'footer-home': 'Accueil', 'footer-projects': 'Projets', 'footer-contact-link': 'Contact',
    'footer-phone-label': 'Tél & WA:', 'footer-fb-label': 'Facebook:', 'footer-ig-label': 'Instagram:',
    'copyright': '© 2026 Osprey Web Studio. Tous droits réservés.',
    'back-top': 'Haut de page',
    'modal-client-label': 'Client / Focus', 'modal-year-label': 'Année', 'modal-tech-label': 'Technologies',
    'modal-request-btn': 'Demander un projet similaire',
    'toast-copied': 'Numéro copié dans le presse-papiers!',
  },
  ar: {
    'nav-home': 'الرئيسية', 'nav-projects': 'المشاريع', 'nav-contact': 'تواصل',
    'nav-wa-btn': 'واتساب مباشر',
    'hero-stat-label': 'تطوير ويب احترافي حصري',
    'hero-stat-sub': 'مصمم بدقة، مبني للأداء.',
    'hero-manifesto': '<strong>Osprey</strong> استوديو تصميم وتطوير ويب متخصص في بناء منتجات رقمية راقية تجمع بين الجماليات المينيمالية والتأثير التجاري الحقيقي.',
    'hero-btn-portfolio': 'عرض الأعمال', 'hero-btn-touch': 'تواصل معنا',
    'hero-scroll': 'استكشف الأعمال',
    'section-tag-projects': 'أبرز الأعمال', 'section-tag-projects-sub': 'المشاريع المنجزة',
    'section-title-projects': 'مصنوع بدقة وأناقة عصرية.',
    'section-subtitle-projects': 'استكشف مجموعة مختارة من تجارب الويب التجارية المبنية من الصفر بهيكل نظيف وجماليات سلسة واستجابة مثالية.',
    'filter-all': 'جميع المشاريع', 'filter-fashion': 'الأزياء والفخامة',
    'filter-health': 'الرعاية الصحية', 'filter-fitness': 'اللياقة البدنية', 'filter-pos': 'SaaS ونقاط البيع',
    'project-preview': 'معاينة المشروع', 'project-view-details': 'عرض التفاصيل',
    'cat-fashion': 'الأزياء والتجارة الإلكترونية', 'cat-health': 'الصحة والعيادة',
    'cat-fitness': 'اللياقة والرياضة', 'cat-pos': 'SaaS للمطاعم وERP',
    'proj-styleco-desc': 'واجهة أزياء فاخرة مينيمالية تركز على الوضوح البصري والتدرجات اللونية الهادئة والطباعة التحريرية. مصممة لتقديم انطباع استثنائي لا يُنسى.',
    'proj-prodent-desc': 'منصة ويب طبية سهلة الاستخدام تضم استكشاف الخدمات ووحدات زراعة الأسنان وأوراق اعتماد الأطباء وحجز الاستشارات بسهولة.',
    'proj-repzone-desc': 'موقع رياضي بالوضع المظلم مليء بالطاقة، مبني لمركز تدريب متميز. يشمل جداول ساعات العمل والتنقل متعدد اللغات وإرشادات الوصول.',
    'proj-restoflow-desc': 'لوحة قيادة ذكية لإدارة المطاعم. تتيح إدارة سير عمل المطبخ وطلبات نقطة البيع وعمليات الموظفين بواجهة جذابة ومنظومة مصادقة آمنة.',
    'section-tag-contact': 'تواصل معنا', 'section-tag-contact-sub': 'تواصل معنا',
    'section-title-contact': 'هل أنت مستعد لإطلاق مشروعك الرائع القادم؟',
    'section-subtitle-contact': 'تواصل معنا مباشرة عبر واتساب أو الهاتف أو القنوات الاجتماعية. دعنا نناقش مشروعك ونحول رؤيتك إلى منصة ويب استثنائية.',
    'contact-wa-label': 'واتساب والهاتف',
    'contact-wa-desc': 'خط مباشر متاح للاستفسارات والعروض ومناقشات المشاريع.',
    'btn-chat-wa': 'تحدث على واتساب', 'btn-call': 'اتصل الآن', 'btn-copy': 'نسخ', 'btn-copied': 'تم النسخ!',
    'contact-ig-label': 'إنستغرام',
    'contact-ig-desc': 'تابع آخر إبداعاتنا التصميمية والكواليس والمحتوى التقني.',
    'btn-view-ig': 'زيارة إنستغرام',
    'contact-fb-label': 'فيسبوك',
    'contact-fb-desc': 'تواصل مع صفحتنا الرسمية للإعلانات والتحديثات.',
    'btn-view-fb': 'زيارة فيسبوك',
    'footer-tagline': 'نصنع تجارب رقمية مينيمالية عالية التأثير للعلامات التجارية الطموحة.',
    'footer-nav-title': 'التنقل', 'footer-contact-title': 'تواصل معنا',
    'footer-home': 'الرئيسية', 'footer-projects': 'المشاريع', 'footer-contact-link': 'تواصل',
    'footer-phone-label': 'الهاتف وWA:', 'footer-fb-label': 'فيسبوك:', 'footer-ig-label': 'إنستغرام:',
    'copyright': '© 2026 استوديو أوسبري. جميع الحقوق محفوظة.',
    'back-top': 'العودة للأعلى',
    'modal-client-label': 'العميل / المحور', 'modal-year-label': 'السنة', 'modal-tech-label': 'التقنيات',
    'modal-request-btn': 'طلب مشروع مماثل',
    'toast-copied': 'تم نسخ رقم الهاتف!',
  }
};

let currentLang = localStorage.getItem('osprey-lang') || 'en';
let currentOpenProjectId = null;

const pageTitles = {
  en: 'Osprey — Web Development & Digital Design Studio',
  fr: 'Osprey — Studio de Conception & Développement Web',
  ar: 'Osprey — استوديو تصميم وتطوير الويب الراقي'
};

const waContactMessages = {
  en: "Hello Osprey Web, I'd like to discuss a new website project!",
  fr: "Bonjour Osprey Web, j'aimerais discuter d'un nouveau projet web!",
  ar: "مرحباً Osprey Web، أود مناقشة مشروع موقع ويب جديد!"
};

const waModalMessages = {
  en: "Hello Osprey Web, I'm interested in a project like this!",
  fr: "Bonjour Osprey Web, je suis intéressé par un projet similaire!",
  ar: "مرحباً Osprey Web، أنا مهتم بمشروع مماثل لهذا!"
};

// --- Multilingual Data Store for Projects Lightbox ---
const projectsData = {
  styleco: {
    image: 'Assets/Stylco_Webpng.jpg',
    en: {
      title: 'Styleco. Fashion & Luxury',
      category: 'Fashion & E-Commerce',
      description: 'A minimalist luxury fashion showcase emphasizing visual clarity, serene lighting gradient transitions, and editorial typography. Designed to deliver an unforgettable brand impression with an ultra-clean digital catalog.',
      client: 'Styleco Apparel & Studio',
      tech: 'HTML5, Modern CSS3, JavaScript, UI/UX Craft'
    },
    fr: {
      title: 'Styleco. Mode & Luxe',
      category: 'Mode & E-Commerce',
      description: "Une vitrine de mode de luxe minimaliste mettant l'accent sur la clarté visuelle, des transitions douces et une typographie éditoriale. Conçue pour offrir une impression mémorable avec un catalogue numérique épuré.",
      client: 'Styleco Apparel & Studio',
      tech: 'HTML5, CSS3 Moderne, JavaScript, Design UI/UX'
    },
    ar: {
      title: 'Styleco. للأزياء والفخامة',
      category: 'الأزياء والتجارة الإلكترونية',
      description: 'واجهة أزياء فاخرة مينيمالية تركز على الوضوح البصري والتدرجات اللونية الهادئة والطباعة التحريرية. مصممة لتقديم انطباع استثنائي لا يُنسى مع كتالوج رقمي فائق النقاء.',
      client: 'ستوديو ستايلكو للأزياء',
      tech: 'HTML5، CSS3 حديث، JavaScript، تصميم UI/UX'
    }
  },
  prodent: {
    image: 'Assets/Clinic_Web.jpg',
    en: {
      title: 'PRODENT Dental Clinic',
      category: 'Healthcare & Dental Platform',
      description: 'An intuitive medical clinic web platform featuring service exploration, dental implant modules, doctor credentials, and streamlined patient consultation booking for modern healthcare practices.',
      client: 'PRODENT Medical Care',
      tech: 'HTML5, CSS3, Responsive Grid, Consultation Engine'
    },
    fr: {
      title: 'Clinique Dentaire PRODENT',
      category: 'Santé & Clinique Dentaire',
      description: "Une plateforme médicale intuitive avec exploration des services, modules d'implants dentaires, profils des médecins et prise de rendez-vous fluide pour les cabinets de santé modernes.",
      client: 'PRODENT Soins Médicaux',
      tech: 'HTML5, CSS3, Grille Responsive, Moteur de Consultation'
    },
    ar: {
      title: 'عيادة برودنت لطب الأسنان',
      category: 'الصحة والعيادة الطبية',
      description: 'منصة ويب طبية سهلة الاستخدام تضم استكشاف الخدمات ووحدات زراعة الأسنان وأوراق اعتماد الأطباء وحجز الاستشارات بسهولة للممارسات الطبية الحديثة.',
      client: 'برودنت للرعاية الطبية',
      tech: 'HTML5، CSS3، شبكة متجاوبة، نظام استشارات'
    }
  },
  repzone: {
    image: 'Assets/Gym_web.jpg',
    en: {
      title: 'Rep Zone Athletic Club',
      category: 'Fitness & Athletic Platform',
      description: 'High-energy athletic dark-mode website built for a premier training facility. Includes working hour schedules, multi-lingual navigation (Arabic, English, French), and gym location guidance.',
      client: 'Rep Zone Fitness Center',
      tech: 'Dark Mode UI, Multi-Language, Performance Optimization'
    },
    fr: {
      title: 'Rep Zone Athletic Club',
      category: 'Fitness & Sport Athlétique',
      description: "Site web athlétique en mode sombre conçu pour une salle d'entraînement d'élite. Comprend les horaires d'ouverture, la navigation multilingue (arabe, anglais, français) et la géolocalisation.",
      client: 'Centre de Fitness Rep Zone',
      tech: 'UI Mode Sombre, Multilingue, Optimisation Performances'
    },
    ar: {
      title: 'نادي ريب زون الرياضي',
      category: 'اللياقة والرياضة البدنية',
      description: 'موقع رياضي بالوضع المظلم مليء بالطاقة، مبني لمركز تدريب متميز. يشمل جداول ساعات العمل والتنقل متعدد اللغات وإرشادات الوصول للنادي.',
      client: 'مركز ريب زون للياقة',
      tech: 'واجهة الوضع الليلي، متعدد اللغات، أداء عالي السرعة'
    }
  },
  restoflow: {
    image: 'Assets/Restaurent_Web.jpg',
    en: {
      title: 'RestoFlow Restaurant ERP & POS',
      category: 'Restaurant SaaS & ERP',
      description: 'Smart restaurant management dashboard and portal. Built to manage kitchen workflows, point-of-sale orders, and staff operations with an eye-catching illustration and secured authentication.',
      client: 'RestoFlow FoodTech Systems',
      tech: 'SaaS Platform, ERP Workflow, Authentication, Responsive'
    },
    fr: {
      title: 'RestoFlow ERP & Caisse Restaurant',
      category: 'SaaS & ERP Restauration',
      description: "Tableau de bord intelligent pour la gestion de restaurant. Flux de cuisine, commandes en caisse et opérations du personnel avec interface sécurisée.",
      client: 'Systèmes FoodTech RestoFlow',
      tech: 'Plateforme SaaS, Flux ERP, Authentification, Responsive'
    },
    ar: {
      title: 'ريستوفلو لإدارة المطاعم ونقاط البيع',
      category: 'SaaS للمطاعم وERP',
      description: 'لوحة قيادة ذكية لإدارة المطاعم. تتيح إدارة سير عمل المطبخ وطلبات نقطة البيع وعمليات الموظفين بواجهة جذابة ومنظومة مصادقة آمنة.',
      client: 'أنظمة ريستوفلو للتقنية الغذائية',
      tech: 'منصة سحابية SaaS، إدارة عمليات ERP، أمان عالي'
    }
  }
};

function renderModalContent(projectId) {
  const data = projectsData[projectId];
  if (!data) return;
  const langData = data[currentLang] || data['en'];

  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalClient = document.getElementById('modal-client');
  const modalTech = document.getElementById('modal-tech');

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = langData.title;
  }
  if (modalTitle) modalTitle.textContent = langData.title;
  if (modalCategory) modalCategory.textContent = langData.category;
  if (modalDesc) modalDesc.textContent = langData.description;
  if (modalClient) modalClient.textContent = langData.client;
  if (modalTech) modalTech.textContent = langData.tech;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('osprey-lang', lang);

  // Direction + lang attribute
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.classList.toggle('rtl', lang === 'ar');

  // Page title
  if (pageTitles[lang]) {
    document.title = pageTitles[lang];
  }

  const t = translations[lang];

  // Update textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update innerHTML elements (for <strong> tags etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update WhatsApp direct links with localized prefilled message
  const contactWaBtn = document.querySelector('.contact-btn-group .btn-whatsapp');
  if (contactWaBtn && waContactMessages[lang]) {
    contactWaBtn.href = `https://wa.me/213793941017?text=${encodeURIComponent(waContactMessages[lang])}`;
  }

  const modalWaBtn = document.querySelector('.modal-actions .btn-whatsapp');
  if (modalWaBtn && waModalMessages[lang]) {
    modalWaBtn.href = `https://wa.me/213793941017?text=${encodeURIComponent(waModalMessages[lang])}`;
  }

  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render modal if open
  if (currentOpenProjectId) {
    renderModalContent(currentOpenProjectId);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Header on Scroll ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Scrollspy: Active Navigation Links ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main section[id]');

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --- Mobile Navigation Drawer Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');

  const closeNav = () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (navOverlay) navOverlay.classList.remove('active');
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (navOverlay) navOverlay.classList.toggle('active', isOpen);
    });

    // Close menu when clicking links
    navLinks.forEach((link) => {
      link.addEventListener('click', closeNav);
    });
  }

  // Close nav when clicking overlay
  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  // --- Language Switcher Listeners ---
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Apply default or stored language on startup
  applyLanguage(currentLang);

  // --- Projects Category Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --- Project Modal / Lightbox ---
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const openModal = (projectId) => {
    currentOpenProjectId = projectId;
    renderModalContent(projectId);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    currentOpenProjectId = null;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach event listeners to all project open buttons
  document.querySelectorAll('.open-modal-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- Toast Notification Helper ---
  const toast = document.getElementById('toast-notify');
  let toastTimeout;

  const showToast = (message) => {
    if (!toast) return;
    const toastMsgEl = toast.querySelector('.toast-msg');
    if (toastMsgEl && message) {
      toastMsgEl.textContent = message;
    }
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // --- Copy Phone Number Functionality with i18n ---
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const copyPhoneText = document.getElementById('copy-phone-text');

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', async () => {
      const phone = copyPhoneBtn.getAttribute('data-phone') || '0793941017';
      const t = translations[currentLang] || translations.en;
      const copiedMsg = t['toast-copied'] || 'Phone number copied to clipboard!';
      const copiedBtnText = t['btn-copied'] || 'Copied!';
      const copyBtnText = t['btn-copy'] || 'Copy';

      try {
        await navigator.clipboard.writeText(phone);
        if (copyPhoneText) copyPhoneText.textContent = copiedBtnText;
        showToast(copiedMsg);
        setTimeout(() => {
          if (copyPhoneText) copyPhoneText.textContent = copyBtnText;
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = phone;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copyPhoneText) copyPhoneText.textContent = copiedBtnText;
        showToast(copiedMsg);
        setTimeout(() => {
          if (copyPhoneText) copyPhoneText.textContent = copyBtnText;
        }, 2500);
      }
    });
  }
});

