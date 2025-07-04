AOS.init();

// Loader logic (3 second splash)
    window.addEventListener('DOMContentLoaded', () => {
      const loader = document.querySelector('.preloader');
      setTimeout(() => {
        loader.classList.add('preloader-deactivate');
        setTimeout(() => loader.style.display = 'none', 900);
      }, 3000);
    });

// Reveal on scroll (works for both up and down scroll)
function revealOnScroll() {
  const trigger = window.innerHeight - 80;
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hamburger menu for mobile
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('header .navbar');
menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', navbar.classList.contains('active') ? 'true' : 'false');
};
// Close navbar on link click (mobile)
document.querySelectorAll('header .navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  };
});


// Show Details toggle
const detailBtns = document.querySelectorAll('.zshow-btn');
detailBtns.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show Details' : 'Hide Details';
  });
});

// Back to top button show/hide
const backToTop = document.getElementById('back-to-top');
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  revealOnScroll();
};

// Typing effect
const typingTarget = document.getElementById('typing');
const typingTexts = [
  "I'm Divyanshu Pandey",
  'Web Developer',
  'Student & Coder',
  'HTML & CSS Enthusiast'
];
let tIdx = 0, lIdx = 0, isDeleting = false;
function type() {
  let text = typingTexts[tIdx];
  typingTarget.textContent = isDeleting ? text.substring(0, lIdx--) : text.substring(0, lIdx++);
  if (!isDeleting && lIdx === text.length + 1) setTimeout(() => isDeleting = true, 1000);
  else if (isDeleting && lIdx === 0) { tIdx = (tIdx + 1) % typingTexts.length; isDeleting = false; }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
let activeTestimonial = 0;
function showTestimonial(idx) {
  testimonials.forEach((el, i) => el.classList.toggle('active', i === idx));
}
document.querySelector('.testimonials-carousel .next').onclick = () => {
  activeTestimonial = (activeTestimonial + 1) % testimonials.length;
  showTestimonial(activeTestimonial);
};
document.querySelector('.testimonials-carousel .prev').onclick = () => {
  activeTestimonial = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(activeTestimonial);
};
showTestimonial(activeTestimonial);

// Contact form validation & success message
const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default submit for now

      // Simulate successful submission
      setTimeout(() => {
        form.reset();
        successMessage.style.display = 'block';

        // Hide the success message after 4 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 4000);
      }, 500);
    });
  

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

