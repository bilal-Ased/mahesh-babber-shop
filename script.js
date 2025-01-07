// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  initializeLoading();
  initializeNavigation();
  initializeBookingSystem();
  initializeGallery();
  initializeTestimonials();
  emailjs.init("EevX8WfcudHu9GwPh");
  //initializeScrollEffects();
  //initializeFormValidation();
  //initializeToasts();

  // Attach the function to a button or element that triggers scrolling
});

// Loading Screen
function initializeLoading() {
  const loader = document.querySelector(".loading-screen");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  });
}

//Scrooll user to booking form
function scrollToBooking() {
  const bookingSection = document.getElementById("booking");
  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.error("Booking section not found!");
  }
}

// Add multiple ways to trigger the scroll
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to hero CTA button
  const heroCTA = document.querySelector(".hero-cta");
  if (heroCTA) {
    heroCTA.addEventListener("click", scrollToBooking);
  }

  // Add event listener to navigation 'Book Now' link
  const bookNowLink = document.querySelector('a[href="#booking"]');
  if (bookNowLink) {
    bookNowLink.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToBooking();
    });
  }

  // Optional: Add global method to window for manual triggering if needed
  window.scrollToBooking = scrollToBooking;
});

//services section
// Scroll-Based Animation on Service Cards
const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

serviceCards.forEach((card) => observer.observe(card));

// Button Ripple Effect on Click
const buttons = document.querySelectorAll(".btn-book");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
    this.appendChild(ripple);

    // Remove the ripple after animation
    setTimeout(() => ripple.remove(), 600);
  });
});

// Parallax Effect on Service Cards
serviceCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

//Scroll to the booking form on click on the service card
document.addEventListener("DOMContentLoaded", () => {
  const btnBook = document.querySelector(".btnBook");
  if (btnBook) {
    btnBook.addEventListener("click", scrollToBooking);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const btnBookTwo = document.querySelector(".btnBookTwo");
  if (btnBookTwo) {
    btnBookTwo.addEventListener("click", scrollToBooking);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const btnBookThree = document.querySelector(".btnBookThree");
  if (btnBookThree) {
    btnBookThree.addEventListener("click", scrollToBooking);
  }
});

//Gallery section
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("previous");

let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
// let thumbnailDom = document.querySelector('.item .thumbnail');
let thumbnailDom = document.querySelector(".carousel .thumbnail");

//when user click next
nextDom.onclick = function () {
  showSlider("next");
};
//when user clicks previous
prevDom.onclick = function () {
  showSlider("previous");
};

//autorun the slider function
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  //varible that select all the items and thumbnails
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("previous");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("previous");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
// pause on hover
carouselDom.addEventListener("mouseenter", () => {
  clearTimeout(runAutoRun);
});

carouselDom.addEventListener("mouseleave", () => {
  startAutoRun();
});
//mobile touchpoint support
let touchStartX = 0;
let touchEndX = 0;

carouselDom.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselDom.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    showSlider("next");
  } else if (touchEndX - touchStartX > 50) {
    showSlider("previous");
  }
});

//booking button
document.addEventListener("DOMContentLoaded", () => {
  const btnBookFour = document.querySelector(".btnBookFour");
  if (btnBookFour) {
    btnBookFour.addEventListener("click", scrollToBooking);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const btnBookFive = document.querySelector(".btnBookFive");
  if (btnBookFive) {
    btnBookFive.addEventListener("click", scrollToBooking);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const btnBookSix = document.querySelector(".btnBookSix");
  if (btnBookSix) {
    btnBookSix.addEventListener("click", scrollToBooking);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const btnBookSeven = document.querySelector(".btnBookSeven");
  if (btnBookSeven) {
    btnBookSeven.addEventListener("click", scrollToBooking);
  }
});

// // Booking Form
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector("#bookingForm");
  const popup = document.getElementById("popup");
  const bookingFormButton = document.getElementById("bookingFormButton");
  const closeBtn = document.getElementById("closeBtn");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      selectBooking();
    });
  }

  function selectBooking() {
    // Collect form data
    const parameters = {
      customerName: document.querySelector("#customerName").value,
      customerPhone: document.querySelector("#customerPhone").value,
      service: document.querySelector("#service").value,
      stylist: document.querySelector("#stylist").value,
      date: document.querySelector("#date").value,
      time: document.querySelector("#time").value,
    };

    // Validate form fields
    const requiredFields = [
      "customerName",
      "customerPhone",
      "service",
      "stylist",
      "date",
      "time",
    ];

    for (let field of requiredFields) {
      if (!parameters[field] || parameters[field].trim() === "") {
        alert(
          `Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`,
        );
        return;
      }
    }

    // Send email using EmailJS
    emailjs
      .send("service_2pmrqw8", "Booking_Form_Id", parameters)
      .then(() => {
        openPopup();
      })
      .catch((error) => {
        console.error("Failed to send email: ", error);
        alert("There was an issue sending your booking. Please try again.");
      });
  }

  // Open popup function
  function openPopup() {
    if (popup) {
      popup.classList.add("open-popup");
    }
  }

  // Close popup function
  function closePopup() {
    if (popup) {
      popup.classList.remove("open-popup");
    }
  }

  // Event listeners
  if (bookingFormButton) {
    bookingFormButton.addEventListener("click", function (event) {
      event.preventDefault();
      selectBooking();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      closePopup();
    });
  }
});

//Contact Us Form
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  (function () {
    emailjs.init("EevX8WfcudHu9GwPh");
  })();

  const contactForm = document.querySelector("#contactForm");
  const popupTwo = document.getElementById("popupTwo");
  const closeBtnTwo = document.getElementById("closeBtnTwo");

  function showCustomAlert(message) {
    // Remove any existing custom alerts
    const existingAlert = document.querySelector(".custom-alert");
    if (existingAlert) {
      existingAlert.remove();
    }

    // Create custom alert
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("custom-alert");
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    // Show alert
    setTimeout(() => {
      alertDiv.classList.add("show");
    }, 10);

    // Hide alert after 3 seconds
    setTimeout(() => {
      alertDiv.classList.remove("show");
      setTimeout(() => {
        alertDiv.remove();
      }, 300);
    }, 3000);
  }

  function validateForm() {
    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const email = document.querySelector("#user_email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !phone || !email || !message) {
      showCustomAlert("Please fill in all fields");
      return false;
    }

    // Optional: Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showCustomAlert("Please enter a valid email address");
      return false;
    }

    return true;
  }

  function contactEmail(event) {
    event.preventDefault();

    // Validate form first
    if (!validateForm()) {
      return;
    }

    const params = {
      name: document.querySelector("#name").value,
      phone: document.querySelector("#phone").value,
      user_email: document.querySelector("#user_email").value,
      message: document.querySelector("#message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_2pmrqw8", "Mahesh_Contact_US_ID", params)
      .then(() => {
        // Open success popup
        if (popupTwo) {
          popupTwo.classList.add("open-popupTwo");
        }

        // Reset form
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Failed to send email: ", error);
        showCustomAlert(
          "There was an issue sending your message. Please try again.",
        );
      });
  }

  // Event Listeners
  if (contactForm) {
    contactForm.addEventListener("submit", contactEmail);
  }

  if (closeBtnTwo) {
    closeBtnTwo.addEventListener("click", function (event) {
      event.preventDefault();
      if (popupTwo) {
        popupTwo.classList.remove("open-popupTwo");
      }
    });
  }
});

const slider = new TestimonialsSlider("testimonials-slider");

// With options
const sliderWithOptions = new TestimonialsSlider("testimonials-slider", {
  autoPlayDelay: 4000,
  enableAutoPlay: true,
  enableTouchSwipe: true,
  enableKeyboardNav: true,
  transitionDuration: 400,
  onSlideChange: () => console.log("Slide changed"),
});

class TestimonialsManager {
  /**
   * @typedef {Object} TestimonialOptions
   * @property {number} autoPlayInterval - Interval in ms for auto-play (default: 5000)
   * @property {boolean} enableAutoPlay - Whether to enable auto-play (default: true)
   * @property {number} animationDuration - Duration in ms for slide transitions (default: 500)
   * @property {number} touchThreshold - Minimum swipe distance for touch events (default: 50)
   */

  /**
   * Initialize the testimonials slider with options
   * @param {TestimonialOptions} options - Configuration options
   */
  constructor(options = {}) {
    // Configuration
    this.options = {
      autoPlayInterval: options.autoPlayInterval || 5000,
      enableAutoPlay: options.enableAutoPlay ?? true,
      animationDuration: options.animationDuration || 500,
      touchThreshold: options.touchThreshold || 50,
    };

    // State
    this.state = {
      currentIndex: 0,
      isAnimating: false,
      isPaused: false,
      autoPlayInterval: null,
      touchStartX: 0,
      touchStartY: 0,
    };

    // DOM Elements
    this.elements = {
      container: document.querySelector(".testimonials-slider"),
      slideTrack: document.querySelector(".slider-container"),
      slides: Array.from(document.querySelectorAll(".testimonial-card")),
      dots: Array.from(document.querySelectorAll(".dot")),
      prevButton: document.querySelector(".control-button.prev"),
      nextButton: document.querySelector(".control-button.next"),
      likeButtons: document.querySelectorAll(".like-button"),
    };

    // Validation
    if (!this.validateElements()) {
      console.error(
        "Required DOM elements not found. Check your HTML structure.",
      );
      return;
    }

    // Initialize
    this.init();
  }

  /**
   * Validate required DOM elements
   * @returns {boolean} - Whether all required elements are present
   */
  validateElements() {
    return Object.values(this.elements).every(
      (element) =>
        element && (element.length !== undefined || element instanceof Element),
    );
  }

  /**
   * Initialize the testimonials slider
   */
  init() {
    this.setupEventListeners();
    this.setupAccessibility();
    this.initializeLikeSystem();

    if (this.options.enableAutoPlay) {
      this.startAutoPlay();
    }

    this.updateControls();
    this.setInitialState();
  }

  /**
   * Set up all event listeners
   */
  setupEventListeners() {
    // Navigation Controls
    this.elements.prevButton?.addEventListener("click", () =>
      this.navigate("prev"),
    );
    this.elements.nextButton?.addEventListener("click", () =>
      this.navigate("next"),
    );

    // Dot Navigation
    this.elements.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Touch Events
    this.setupTouchEvents();

    // Pause on hover
    this.elements.container.addEventListener("mouseenter", () => this.pause());
    this.elements.container.addEventListener("mouseleave", () => this.resume());

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => this.handleKeyboard(e));

    // Visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });

    // Resize handling
    window.addEventListener(
      "resize",
      this.debounce(() => this.handleResize(), 250),
    );
  }

  /**
   * Set up touch event handling
   */
  setupTouchEvents() {
    const handleTouchStart = (e) => {
      this.state.touchStartX = e.touches[0].clientX;
      this.state.touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!this.state.touchStartX) return;

      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;

      const deltaX = this.state.touchStartX - touchEndX;
      const deltaY = this.state.touchStartY - touchEndY;

      // Prevent vertical scrolling when swiping horizontally
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!this.state.touchStartX) return;

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = this.state.touchStartX - touchEndX;

      if (Math.abs(deltaX) > this.options.touchThreshold) {
        if (deltaX > 0) {
          this.navigate("next");
        } else {
          this.navigate("prev");
        }
      }

      this.state.touchStartX = 0;
      this.state.touchStartY = 0;
    };

    this.elements.container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    this.elements.container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    this.elements.container.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
  }

  /**
   * Handle keyboard navigation
   * @param {KeyboardEvent} event
   */
  handleKeyboard(event) {
    if (!this.elements.container.matches(":focus-within")) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        this.navigate("prev");
        break;
      case "ArrowRight":
        event.preventDefault();
        this.navigate("next");
        break;
    }
  }

  /**
   * Set up accessibility attributes and features
   */
  setupAccessibility() {
    this.elements.container.setAttribute("role", "region");
    this.elements.container.setAttribute("aria-label", "Testimonials Slider");

    this.elements.slides.forEach((slide, index) => {
      slide.setAttribute("role", "tabpanel");
      slide.setAttribute("aria-hidden", index !== 0 ? "true" : "false");
      slide.setAttribute("id", `testimonial-${index}`);
    });

    this.elements.dots.forEach((dot, index) => {
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-controls", `testimonial-${index}`);
      dot.setAttribute("aria-selected", index === 0 ? "true" : "false");
    });
  }

  /**
   * Initialize the like system
   */
  initializeLikeSystem() {
    this.elements.likeButtons.forEach((button) => {
      button.addEventListener("click", () => this.handleLike(button));
    });
  }

  /**
   * Handle like button click
   * @param {HTMLElement} button
   */
  handleLike(button) {
    if (button.classList.contains("liked")) return;

    const countElement = button.querySelector(".like-count");
    if (countElement) {
      const currentCount = parseInt(countElement.textContent);
      countElement.textContent = currentCount + 1;

      button.classList.add("liked");
      button.setAttribute("aria-pressed", "true");

      // Optional: Save like state to localStorage
      const testimonialId = button.closest(".testimonial-card").id;
      localStorage.setItem(`liked_${testimonialId}`, "true");
    }
  }

  /**
   * Navigate to previous or next slide
   * @param {'prev' | 'next'} direction
   */
  navigate(direction) {
    if (this.state.isAnimating) return;

    const newIndex =
      direction === "next"
        ? Math.min(this.state.currentIndex + 1, this.elements.slides.length - 1)
        : Math.max(this.state.currentIndex - 1, 0);

    this.goToSlide(newIndex);
  }

  /**
   * Go to a specific slide
   * @param {number} index
   */
  goToSlide(index) {
    if (
      this.state.isAnimating ||
      index === this.state.currentIndex ||
      index < 0 ||
      index >= this.elements.slides.length
    )
      return;

    this.state.isAnimating = true;
    this.state.currentIndex = index;

    // Update transform
    const offset = -100 * index;
    this.elements.slideTrack.style.transform = `translateX(${offset}%)`;

    // Update UI
    this.updateDots();
    this.updateControls();
    this.updateAriaAttributes();

    // Reset animation state
    setTimeout(() => {
      this.state.isAnimating = false;
    }, this.options.animationDuration);
  }

  /**
   * Update dot indicators
   */
  updateDots() {
    this.elements.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.state.currentIndex);
      dot.setAttribute(
        "aria-selected",
        index === this.state.currentIndex ? "true" : "false",
      );
    });
  }

  /**
   * Update navigation controls
   */
  updateControls() {
    const isFirst = this.state.currentIndex === 0;
    const isLast = this.state.currentIndex === this.elements.slides.length - 1;

    this.elements.prevButton.disabled = isFirst;
    this.elements.nextButton.disabled = isLast;

    this.elements.prevButton.setAttribute("aria-disabled", isFirst);
    this.elements.nextButton.setAttribute("aria-disabled", isLast);
  }

  /**
   * Update ARIA attributes for accessibility
   */
  updateAriaAttributes() {
    this.elements.slides.forEach((slide, index) => {
      slide.setAttribute(
        "aria-hidden",
        index !== this.state.currentIndex ? "true" : "false",
      );
    });
  }

  /**
   * Start auto-play functionality
   */
  startAutoPlay() {
    if (this.state.autoPlayInterval || !this.options.enableAutoPlay) return;

    this.state.autoPlayInterval = setInterval(() => {
      if (!this.state.isPaused) {
        if (this.state.currentIndex < this.elements.slides.length - 1) {
          this.navigate("next");
        } else {
          this.goToSlide(0);
        }
      }
    }, this.options.autoPlayInterval);
  }

  /**
   * Pause auto-play
   */
  pause() {
    this.state.isPaused = true;
  }

  /**
   * Resume auto-play
   */
  resume() {
    if (this.options.enableAutoPlay) {
      this.state.isPaused = false;
    }
  }

  /**
   * Handle window resize
   */
  handleResize() {
    // Reset transform on resize to maintain alignment
    const offset = -100 * this.state.currentIndex;
    this.elements.slideTrack.style.transform = `translateX(${offset}%)`;
  }

  /**
   * Set initial state
   */
  setInitialState() {
    // Restore like states from localStorage
    this.elements.likeButtons.forEach((button) => {
      const testimonialId = button.closest(".testimonial-card").id;
      if (localStorage.getItem(`liked_${testimonialId}`) === "true") {
        button.classList.add("liked");
        button.setAttribute("aria-pressed", "true");
      }
    });
  }

  /**
   * Debounce function for resize handling
   * @param {Function} func
   * @param {number} wait
   * @returns {Function}
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Destroy the slider instance and clean up
   */
  destroy() {
    // Clear intervals
    if (this.state.autoPlayInterval) {
      clearInterval(this.state.autoPlayInterval);
    }

    // Remove event listeners (if needed)
    // Reset styles
    this.elements.slideTrack.style.transform = "";

    // Clear state
    this.state = null;

    // Remove references
    this.elements = null;
  }
}

// Initialize with options
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = new TestimonialsManager({
    autoPlayInterval: 5000,
    enableAutoPlay: true,
    animationDuration: 500,
    touchThreshold: 50,
  });
});

// Export for module usage
export default TestimonialsManager;

// Navigation
function initializeNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const header = document.querySelector(".header");

  // Toggle mobile menu
  navToggle?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        navMenu.classList.remove("active");
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });
}

// Booking System
function initializeBookingSystem() {
  const bookingForm = document.getElementById("bookingForm");
  const bookingModal = document.getElementById("bookingModal");
  const virtualTryModal = document.getElementById("virtualTryModal");
  const virtualTryButton = document.querySelector("[data-virtual-try]");

  bookingForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(bookingForm);
    const bookingData = Object.fromEntries(formData.entries());

    try {
      // Validate booking data
      if (!validateBookingData(bookingData)) {
        throw new Error("Please fill all required fields");
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      showToast("Booking confirmed successfully!", "success");
      bookingForm.reset();
    } catch (error) {
      showToast(
        error.message || "Failed to book appointment. Please try again.",
        "error",
      );
    }
  });
}

// Form Validation
function validateBookingData(data) {
  const requiredFields = ["service", "stylist", "date", "time"];
  return requiredFields.every(
    (field) => data[field] && data[field].trim() !== "",
  );
}

// Gallery
function initializeGallery() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter gallery items
      const filter = btn.dataset.filter;
      galleryItems.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Initialize lightbox for gallery items
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        openLightbox(img.src, item.querySelector("h4")?.textContent);
      }
    });
  });
}

// Lightbox
function openLightbox(src, caption) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${caption || ""}" />
            ${caption ? `<p>${caption}</p>` : ""}
            <button class="lightbox-close">&times;</button>
        </div>
    `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = "hidden";

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.className === "lightbox-close") {
      document.body.removeChild(lightbox);
      document.body.style.overflow = "";
    }
  });
}

// Testimonials Slider
function initializeTestimonials() {
  const testimonials = document.querySelector(".testimonials-slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  if (testimonials) {
    testimonials.addEventListener("mousedown", (e) => {
      isDown = true;
      testimonials.classList.add("active");
      startX = e.pageX - testimonials.offsetLeft;
      scrollLeft = testimonials.scrollLeft;
    });

    testimonials.addEventListener("mouseleave", () => {
      isDown = false;
      testimonials.classList.remove("active");
    });

    testimonials.addEventListener("mouseup", () => {
      isDown = false;
      testimonials.classList.remove("active");
    });

    testimonials.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testimonials.offsetLeft;
      const walk = (x - startX) * 2;
      testimonials.scrollLeft = scrollLeft - walk;
    });

    // Auto scroll
    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        testimonials.scrollLeft += 2;
        if (
          testimonials.scrollLeft >=
          testimonials.scrollWidth - testimonials.clientWidth
        ) {
          testimonials.scrollLeft = 0;
        }
      }, 50);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    testimonials.addEventListener("mouseenter", stopAutoScroll);
    testimonials.addEventListener("mouseleave", startAutoScroll);
    startAutoScroll();
  }
}

// Toast Notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  const container = document.querySelector(".toast-container");
  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  });

  // Remove after delay
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(100%)";
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

console.log(1 + 1);

// Initialize all components
window.addEventListener("load", () => {
  initializeNewsletterForm();
});

// Export for module usage
export {
  showToast,
  initializeBookingSystem,
  initializeGallery,
  initializeTestimonials,
};

console.log(1 + 1);
