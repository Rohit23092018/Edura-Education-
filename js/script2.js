document.addEventListener('DOMContentLoaded', () => {
  // Navbar functionality
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = hamburger.getElementsByTagName('span');
    spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
  });

  // Sticky navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  // Campus Tour Carousel
  const carousel = document.getElementById('tourCarousel');
  const slides = carousel?.getElementsByClassName('carousel-slide') || [];
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;
  let autoplayInterval;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  if (prevBtn && nextBtn && carousel) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoplay();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoplay();
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  // // Contact Form
  // const contactForm = document.getElementById('contactForm');
  // const alertSuccess = document.getElementById('alertSuccess');
  // const alertDanger = document.getElementById('alertDanger');

  // contactForm.addEventListener('submit', function (e) {
  //   e.preventDefault();

  //   const name = document.getElementById('name').value;
  //   const email = document.getElementById('email').value;
  //   const question = document.getElementById('question').value;

  //   if (!name || !email || !question) {
  //     showAlert('danger', 'Please fill all required fields.');
  //     return;
  //   }

  //   emailjs.sendForm('service_7id1sbu', 'template_nx30ggi', this)
  //     .then(function (response) {
  //       showAlert('success', 'Message sent successfully!');
  //       contactForm.reset();
  //     }, function (error) {
  //       showAlert('danger', 'Oops! Something went wrong.');
  //       console.error(error);
  //     });
  // });

  // function showAlert(type, message) {
  //   const alert = type === 'success' ? alertSuccess : alertDanger;
  //   alert.textContent = message;
  //   alert.classList.add('active');

  //   setTimeout(() => {
  //     alert.classList.remove('active');
  //   }, 3000);
  // }

  // EmailJS init
emailjs.init("c53z15cF-GezgGQVk");

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values correctly from existing IDs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const question = document.getElementById('question').value;

  if (!name || !email || !question) {
    alert('Please fill all required fields.');
    return;
  }

  emailjs.sendForm('service_7id1sbu', 'template_nx30ggi', this)
    .then(function (response) {
      // Show success message in alert
      alert('Message sent successfully!');
      // Reload after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, function (error) {
      alert('Oops! Something went wrong.');
      console.error(error);
    });
});


  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
