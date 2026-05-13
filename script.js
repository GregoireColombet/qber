/* ============================================================================
   QBER B2B PRESENTATION WEBSITE - JAVASCRIPT
   Page Navigation, Mobile Menu, Form Handling, Smooth Interactions
   ============================================================================ */

// ============================================================================
// DOM Elements
// ============================================================================

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contactForm");

// ============================================================================
// Mobile Menu Toggle
// ============================================================================

/**
 * Open mobile navigation menu
 */
function openNavMenu() {
  navMenu.classList.add("active");
  navToggle.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * Close mobile navigation menu
 */
function closeNavMenu() {
  navMenu.classList.remove("active");
  navToggle.classList.remove("active");
  document.body.style.overflow = "";

  // Close dropdowns
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
}

/**
 * Toggle mobile navigation menu
 */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      closeNavMenu();
    } else {
      openNavMenu();
    }
  });
}

/**
 * Handle dropdown menus on mobile
 */
document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  const link = dropdown.querySelector(".nav-link");
  const menu = dropdown.querySelector(".dropdown-menu");

  if (link && menu) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        } else {
          // Close other dropdowns
          document.querySelectorAll(".dropdown-menu").forEach((m) => {
            if (m !== menu) m.classList.remove("active");
          });
          menu.classList.add("active");
        }
      }
    });
  }
});

/**
 * Close menu when nav link is clicked
 */
if (navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeNavMenu();
      }
    });
  });
}

// ============================================================================
// Form Handling
// ============================================================================

/**
 * Handle contact form submission
 */
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      company: document.getElementById("company").value,
      interest: document.getElementById("interest").value,
      message: document.getElementById("message").value,
    };

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.interest ||
      !formData.message
    ) {
      showAlert("Please fill in all required fields.", "error");
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      showAlert("Please enter a valid email address.", "error");
      return;
    }

    // Simulate form submission (in production, this would send to a server)
    showAlert(
      "Thank you for your inquiry! We will contact you shortly.",
      "success"
    );

    // Log form data (replace with actual API call in production)
    console.log("Contact Form Submission:", formData);

    // Reset form
    contactForm.reset();
  });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Show alert message
 */
function showAlert(message, type) {
  // Create alert element
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

  if (type === "success") {
    alert.style.backgroundColor = "#4caf50";
    alert.style.color = "white";
  } else if (type === "error") {
    alert.style.backgroundColor = "#f44336";
    alert.style.color = "white";
  }

  document.body.appendChild(alert);

  // Auto-remove alert after 4 seconds
  setTimeout(() => {
    alert.style.animation = "slideOut 0.3s ease";
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}

// ============================================================================
// Animations & Effects
// ============================================================================

/**
 * Intersection Observer for scroll animations.
 * Elements start visible (no opacity:0 inline style) and gain the
 * .animate-in class once they enter the viewport, triggering a CSS
 * transition. This prevents cards from getting stuck invisible.
 */
const observerOptions = {
  threshold: 0.08,
  rootMargin: "0px 0px 0px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards — CSS handles the initial state and transition
document.querySelectorAll(".strength-card, .app-tile, .research-item, .cert-card").forEach((el) => {
  el.classList.add("animate-ready");
  observer.observe(el);
});

// ============================================================================
// Navbar Sticky Behavior
// ============================================================================

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "none";
  }

  lastScrollTop = scrollTop;
});

// ============================================================================
// Initialize Page
// ============================================================================

/**
 * Initialize page on load - ensure all elements are visible
 */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure navbar is visible
  if (navbar) {
    navbar.style.display = 'block';
    navbar.style.visibility = 'visible';
  }
  
  // Ensure all main content is visible
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.style.display = 'block';
    mainElement.style.visibility = 'visible';
  }
  
  // Scroll to top on fresh page load
  window.scrollTo(0, 0);

  // Add keyboard shortcut for close (ESC)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNavMenu();
    }
  });
});

/**
 * Get query parameter from URL
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Scroll to top
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
