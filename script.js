/**
 * Osprey Web Studio — Main Interactive Script
 * Features: Styleco aesthetic interactions, project lightbox, filter tabs,
 * clipboard copy, direct WhatsApp inquiry generator, and responsive nav.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Data Store for Projects Lightbox ---
  const projectsData = {
    styleco: {
      title: 'Styleco. Fashion & Luxury',
      category: 'Fashion & E-Commerce',
      image: 'Assets/Stylco_Webpng.png',
      description: 'A minimalist luxury fashion showcase emphasizing visual clarity, serene lighting gradient transitions, and editorial typography. Designed to deliver an unforgettable brand impression with an ultra-clean digital catalog.',
      client: 'Styleco Apparel & Studio',
      tech: 'HTML5, Modern CSS3, JavaScript, UI/UX Craft'
    },
    prodent: {
      title: 'PRODENT Dental Clinic',
      category: 'Healthcare & Dental Platform',
      image: 'Assets/Clinic_Web.png',
      description: 'An intuitive medical clinic web platform featuring service exploration, dental implant modules, doctor credentials, and streamlined patient consultation booking for modern healthcare practices.',
      client: 'PRODENT Medical Care',
      tech: 'HTML5, CSS3, Responsive Grid, Consultation Engine'
    },
    repzone: {
      title: 'Rep Zone Athletic Club',
      category: 'Fitness & Athletic Platform',
      image: 'Assets/Gym_web.png',
      description: 'High-energy athletic dark-mode website built for a premier training facility. Includes working hour schedules, multi-lingual navigation (Arabic, English, French), and gym location guidance.',
      client: 'Rep Zone Fitness Center',
      tech: 'Dark Mode UI, Multi-Language, Performance Optimization'
    },
    restoflow: {
      title: 'RestoFlow Restaurant ERP & POS',
      category: 'Restaurant SaaS & ERP',
      image: 'Assets/Restaurent_Web.png',
      description: 'Smart restaurant management dashboard and portal. Built to manage kitchen workflows, point-of-sale orders, and staff operations with an eye-catching illustration and secured authentication.',
      client: 'RestoFlow FoodTech Systems',
      tech: 'SaaS Platform, ERP Workflow, Authentication, Responsive'
    }
  };

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

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking links
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Projects Category Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
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
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalClient = document.getElementById('modal-client');
  const modalTech = document.getElementById('modal-tech');

  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalDesc.textContent = data.description;
    modalClient.textContent = data.client;
    modalTech.textContent = data.tech;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
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

  // --- Copy Phone Number Functionality ---
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const copyPhoneText = document.getElementById('copy-phone-text');

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', async () => {
      const phone = copyPhoneBtn.getAttribute('data-phone') || '0793941017';
      try {
        await navigator.clipboard.writeText(phone);
        if (copyPhoneText) copyPhoneText.textContent = 'Copied!';
        showToast('Phone number 0793941017 copied to clipboard!');
        setTimeout(() => {
          if (copyPhoneText) copyPhoneText.textContent = 'Copy';
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = phone;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copyPhoneText) copyPhoneText.textContent = 'Copied!';
        showToast('Phone number 0793941017 copied!');
        setTimeout(() => {
          if (copyPhoneText) copyPhoneText.textContent = 'Copy';
        }, 2500);
      }
  }
});
