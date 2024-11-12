// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initializeLoading();
    initializeNavigation();
    initializeBookingSystem();
    initializeGallery();
    initializeTestimonials();
    //initializeScrollEffects();
    //initializeFormValidation();
    //initializeToasts();
});

// Loading Screen
function initializeLoading() {
    const loader = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

console.log(1+1);

//services section 
// Scroll-Based Animation on Service Cards
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

serviceCards.forEach(card => observer.observe(card));

// Button Ripple Effect on Click
const buttons = document.querySelectorAll('.btn-book');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
    this.appendChild(ripple);

    // Remove the ripple after animation
    setTimeout(() => ripple.remove(), 600);
  });
});

// Parallax Effect on Service Cards
serviceCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

//Gallery section
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('previous');

let carouselDom = document.querySelector('.carousel');
let SliderDom= carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
//let timeDome= document.querySelector('.carousel .time');
// let thumbnailDom = document.querySelector('.carousel .thumbnail');

//thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

//when user click next
nextDom.onclick = function(){
    showSlider('next');
}
//when user clicks previous
prevDom.onclick = function(){
    showSlider('previous');
}

//autorun the slider function
let runTimeOut;
let runAutoRun = setTimeout(()=> {
    nextDom.click();
}, timeAutoNext);


function showSlider(type){
    //varible that select all the items and thumbnails
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = document.querySelectorAll('.item');

    //if the user clicks the next button
    //append child/current item to move at the end of the row

    // Check for items in DOM to prevent errors
    if (SliderItemsDom.length === 0 || thumbnailItemsDom.length === 0) return;

    if(type === 'next' ){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        // let positionLastItem = itemSlider.length - 1;
        // listItemDom.prepend(itemSlider[positionLastItem]);
        // thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        // carouselDom.classList.add('previous')
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('previous');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('previous');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=> {
        next.click();
    }, timeAutoNext);

}


















// Navigation
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    // Toggle mobile menu
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
}


// Booking System
function initializeBookingSystem() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = document.getElementById('bookingModal');
    const virtualTryModal = document.getElementById('virtualTryModal');
    const virtualTryButton = document.querySelector('[data-virtual-try]');
    
    bookingForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const bookingData = Object.fromEntries(formData.entries());
        
        try {
            // Validate booking data
            if (!validateBookingData(bookingData)) {
                throw new Error('Please fill all required fields');
            }
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            showToast('Booking confirmed successfully!', 'success');
            bookingForm.reset();
        } catch (error) {
            showToast(error.message || 'Failed to book appointment. Please try again.', 'error');
        }
    });

    // Virtual Try-On Feature
    virtualTryButton?.addEventListener('click', () => {
        virtualTryModal.style.display = 'flex';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
        if (e.target === virtualTryModal) {
            virtualTryModal.style.display = 'none';
        }
    });
}

// Form Validation
function validateBookingData(data) {
    const requiredFields = ['service', 'stylist', 'date', 'time'];
    return requiredFields.every(field => data[field] && data[field].trim() !== '');
}

// Gallery
function initializeGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery items
            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize lightbox for gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                openLightbox(img.src, item.querySelector('h4')?.textContent);
            }
        });
    });
}

// Lightbox
function openLightbox(src, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${caption || ''}" />
            ${caption ? `<p>${caption}</p>` : ''}
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        }
    });
}

// Testimonials Slider
function initializeTestimonials() {
    const testimonials = document.querySelector('.testimonials-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (testimonials) {
        testimonials.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonials.classList.add('active');
            startX = e.pageX - testimonials.offsetLeft;
            scrollLeft = testimonials.scrollLeft;
        });

        testimonials.addEventListener('mouseleave', () => {
            isDown = false;
            testimonials.classList.remove('active');
        });

        testimonials.addEventListener('mouseup', () => {
            isDown = false;
            testimonials.classList.remove('active');
        });

        testimonials.addEventListener('mousemove', (e) => {
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
                if (testimonials.scrollLeft >= testimonials.scrollWidth - testimonials.clientWidth) {
                    testimonials.scrollLeft = 0;
                }
            }, 50);
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        testimonials.addEventListener('mouseenter', stopAutoScroll);
        testimonials.addEventListener('mouseleave', startAutoScroll);
        startAutoScroll();
    }
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container');
    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    
    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(100%)';
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Newsletter Form
function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            showToast('Successfully subscribed to newsletter!', 'success');
            form.reset();
        } catch (error) {
            showToast('Failed to subscribe. Please try again.', 'error');
        }
    });
}

// Initialize all components
window.addEventListener('load', () => {
    initializeNewsletterForm();
});

// Export for module usage
export {
    showToast,
    initializeBookingSystem,
    initializeGallery,
    initializeTestimonials
};
