//load page backgorund

window.addEventListener("load", function () {
  let overlay = document.getElementById("page-bg");
  overlay.style.opacity = "0";
  // Optional: Remove overlay from DOM after fade-out
  overlay.addEventListener("transitionend", function () {
    overlay.parentNode.removeChild(overlay);
  });
});

// navbar list
document
  .querySelector(".navbar-toggler-icon")
  .addEventListener("dblclick", function () {
    const navItems = document.querySelectorAll(".navbar-nav .nav-item");
    navItems.forEach((item) => {
      item.classList.toggle("hidden");
    });
  });

// Scroll header
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-inner");
    if (header && window.scrollY > 100) {
      header.classList.add("scrolled");
    } else if (header) {
      header.classList.remove("scrolled");
    }
  });

  // Service card flip
  const card = document.querySelector(".flip__container");
  if (card) {
    // Flip the card when mouse enters
    card.addEventListener("mouseenter", function () {
      card.classList.add("is-flipped");
    });

    // Unflip the card when mouse leaves
    card.addEventListener("mouseleave", function () {
      card.classList.remove("is-flipped");
    });
  }
});

// counter section
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  // Intersection Observer callback function
  const startCounting = (entry, observer) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = target / 100;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(counter); // Stop observing after starting the count
    }
  };
  // Create the intersection observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => startCounting(entry, observer));
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the section is in view

  // Observe each counter element
  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// menu
document.addEventListener("DOMContentLoaded", function () {
  // Show the first tab content
  const firstTabContent = document.querySelector(".tab-content");
  if (firstTabContent) {
    firstTabContent.classList.add("active");
  }
  const firstTabLink = document.querySelector(".tabs-menu li:first-child a");
  if (firstTabLink) {
    const firstTabBg = firstTabLink.getAttribute("data-bgtab");
    const sectionContainer = document.querySelector("#section5");
    if (sectionContainer) {
      sectionContainer.style.backgroundImage = "url(" + firstTabBg + ")";
    }
  }

  // On clicking a tab
  const tabLinks = document.querySelectorAll(".tabs-menu a");
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor link action
      // Remove the 'current' class from all tabs
      const allTabLinks = document.querySelectorAll(".tabs-menu li");
      allTabLinks.forEach(function (tabLink) {
        tabLink.classList.remove("current");
      });
      // Add the 'current' class to the clicked tab
      this.parentElement.classList.add("current");
      const targetTab = document.querySelector(
        this.getAttribute("data-target")
      );
      // Hide all tabs and show the selected one
      const allTabContents = document.querySelectorAll(".tab-content");
      allTabContents.forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });

      if (targetTab) {
        targetTab.classList.add("active");
      }

      // Change background image
      const bgImage = this.getAttribute("data-bgtab");
      const sectionContainer = document.querySelector("#section5");
      if (sectionContainer) {
        sectionContainer.style.opacity = 0;
        setTimeout(function () {
          sectionContainer.style.backgroundImage = "url(" + bgImage + ")";
          sectionContainer.style.transition = "opacity 0.9s";
          sectionContainer.style.opacity = 1;
        }, 300);
      }
    });
  });
});

// Gallery
document.addEventListener("DOMContentLoaded", function () {
  // Select all the tab links
  const tabs = document.querySelectorAll(".nav-link");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all tabs and tab content
      document.querySelectorAll(".nav-link").forEach(function (tabItem) {
        tabItem.classList.remove("active");
      });
      document.querySelectorAll(".tab-contentt").forEach(function (content) {
        content.classList.remove("show", "active", "fade-in");
        content.classList.add("fade-out"); //for the content
      });

      // Add 'active' class to the clicked tab
      tab.classList.add("active");

      // Add 'show active' class to the corresponding content section
      const targetContent = document.querySelector(
        tab.getAttribute("data-bs-target")
      );
      targetContent.classList.add("show", "active", "fade-in");
      targetContent.classList.remove("fade-out"); // Remove fade-out
    });
  });
});

// reviews
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true, // This will center the active slide
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 3 }, // On tablets and above, show 3
    576: { slidesPerView: 2 }, // On smaller screens, show 2
    0: { slidesPerView: 1 }, // On mobile, show 1
  },
});
