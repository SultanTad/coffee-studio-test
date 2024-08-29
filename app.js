const tabs = document.querySelector(".product__tabs");
const tabsBtn = document.querySelectorAll(".product__tabs-btn");
const tabsContent = document.querySelectorAll(".product__tabs-content");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile__menu");
const body = document.querySelector(".body")

//Реализация табов
document.addEventListener("DOMContentLoaded", () => {
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("product__tabs-btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach((el) => {
      el.classList.remove("tabs__btn--active");
    });
    document
      .querySelector(`[data-tabs-path="${path}"]`)
      .classList.add("tabs__btn--active");

    tabsContent.forEach((el) => {
      el.classList.remove("tabs__content--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  };
});

//Закрытие-открытие бургер-меню
burger.addEventListener("click", () => {
  burger.classList.toggle("activeBurger");
  mobileMenu.classList.toggle("activeMenu");
  body.classList.toggle("activeBody")
});

//Реализация слайдеров
let swiperProductThumbs = new Swiper(".thumbs__swiper", {
  direction: "vertical",
});

let swiperProductImage = new Swiper(".main__image-swiper", {
  slidesPerView: "auto",
  thumbs: {
    swiper: swiperProductThumbs,
  },
});
