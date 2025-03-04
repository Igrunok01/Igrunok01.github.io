document.addEventListener("DOMContentLoaded", function () {
  let swiperInstance = null;

  function initializeSwiper() {
    if (window.innerWidth < 768 && !swiperInstance) {
      swiperInstance = new Swiper(".swiper", {
        speed: 800,
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1.3,
          },
          350: {
            slidesPerView: 1.5,
          },
          390: {
            slidesPerView: 1.7,
          },
          540: {
            slidesPerView: 2.4,
          },
          768: {
            enabled: false,
          },
        },
      });
    }

    if (window.innerWidth >= 768 && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  initializeSwiper();
  window.addEventListener("resize", initializeSwiper);

  const toggleButton = document.querySelector(".brands__toggle");
  const toggleIcon = toggleButton.querySelector(".brands__toggle-icon");
  const toggleText = toggleButton.querySelector(".brands__toggle-text");
  const brandsBlock = document.querySelector(".brands");

  toggleButton.addEventListener("click", function () {
    brandsBlock.classList.toggle("brands--expanded");

    if (brandsBlock.classList.contains("brands--expanded")) {
      toggleText.textContent = "Скрыть";
      toggleIcon.src = "images/hide.svg";
    } else {
      toggleText.textContent = "Показать все";
      toggleIcon.src = "images/show-all.svg";
    }
  });
});