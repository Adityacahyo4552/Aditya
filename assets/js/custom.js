"use strict";
const scrollHeader = document.querySelector(".header"),
  navHeader = document.querySelector(".nav-links"),
  btnMenu = document.querySelector("#hamburger"),
  sections = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll("header nav ul a"),
  overLay = document.querySelector(".overlay"),
  mode = document.querySelector("body"),
  modeToggle = document.querySelector("#mode"),
  dataModalContainer = document.querySelector("#data-modal-container"),
  itemDetileBtn = document.querySelectorAll(".item-detail-button");

// scroll active navbar menu

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    scrollHeader.classList.add("active");
  } else {
    scrollHeader.classList.remove("active");
  }
});

// toggle menu sidebar
document.querySelector("#hamburger").onclick = (e) => {
  navHeader.classList.toggle("active");
  overLay.classList.toggle("active");
  e.preventDefault();
};

// Click the sidebar to remove the navbar menu
document.addEventListener("click", function (r) {
  if (!btnMenu.contains(r.target) && !navHeader.contains(r.target)) {
    navHeader.classList.remove("active");
    overLay.classList.remove("active");
  }
});

// toggle link menu navbar
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 160;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// light mode toggle
modeToggle.addEventListener("click", function () {
  if (mode.classList.toggle("light")) {
    modeToggle.classList.remove("fa-moon");
    modeToggle.classList.add("fa-sun");
  } else {
    modeToggle.classList.remove("fa-sun");
    modeToggle.classList.add("fa-moon");
  }
});

// Typed js

const typedJs = new Typed(".element", {
  strings: ["Frontend Developer", "Backend Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Detile Modal Certificate
itemDetileBtn.forEach((btn) => {
  btn.onclick = (e) => {
    dataModalContainer.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .modal-container .close-icon").onclick = (e) => {
  dataModalContainer.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === dataModalContainer) {
    dataModalContainer.style.display = "none";
  }
};
