const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;
let slideCount = 0;
const maxAutoSlides = 5;

function updateCarousel() {
  const width = carouselInner.offsetWidth;
  carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
window.addEventListener("resize", updateCarousel);

let carouselInterval = setInterval(() => {
  if (slideCount < maxAutoSlides) {
    nextSlide();
    slideCount++;
  } else {
    stopCarousel();
  }
}, 4000);

function stopCarousel() {
  clearInterval(carouselInterval);
}

function startCarousel() {
  if (slideCount < maxAutoSlides) {
    carouselInterval = setInterval(() => {
      if (slideCount < maxAutoSlides) {
        nextSlide();
        slideCount++;
      } else {
        stopCarousel();
      }
    }, 4000);
  }
}

updateCarousel();

// YouTube API logic
let players = [];
let playingCount = 0;

function onYouTubeIframeAPIReady() {
  const videoIds = [
    "vaibhawVideo1",
    "vaibhawVideo2",
    "vaibhawVideo3",
    "vaibhawVideo4",
    "vaibhawVideo5"
  ];

  videoIds.forEach((id, index) => {
    const el = document.getElementById(id);
    if (el) {
      players[index] = new YT.Player(id, {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    playingCount++;
    stopCarousel();
  } else if (
    event.data === YT.PlayerState.PAUSED ||
    event.data === YT.PlayerState.ENDED
  ) {
    playingCount = Math.max(0, playingCount - 1);
    if (playingCount === 0) {
      startCarousel();
    }
  }
}

// Load YouTube IFrame API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//hamburger-menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links-hamburger");

  function resetNavLinks() {
    if (window.innerWidth > 667) {
      navLinks.style.display = "none";
    }
  }

  hamburger.addEventListener("click", function () {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    console.log(navLinks.style.display);
    hamburger.classList.toggle("open");
  });

  window.addEventListener("resize", resetNavLinks);
  if (window.innerWidth < 667) {
    navLinks.style.display = "none";

  }
  resetNavLinks();
});


window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (document.documentElement.scrollTop > 150) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
