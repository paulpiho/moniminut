var sections = document.getElementsByClassName("nav-link");
var navbar = document.getElementById("menu");
var menuList = document.getElementById("menu-list");
var mobileMenuBtn = document.getElementById("mobile-header");
var desktopHeader = document.getElementById("desktop-header");
var sectionContainers = document.getElementsByClassName("section-container");

// displaying one section at a time
// menu buttons functionality
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click", function() {
    let clickedOnId = this.id;
    for (let i = 0; i < sectionContainers.length; i++) {
      if (clickedOnId === sectionContainers[i].id) {
        sectionContainers[i].classList.remove("hidden");
        sectionContainers[i].classList.add("display");
        if (x.matches) {
          navbar.classList.remove("navbar-mobile-open");
          menuList.classList.add("hidden");
        }
      } else {
        sectionContainers[i].classList.remove("display");
        sectionContainers[i].classList.add("hidden");
      }
    }
  });
}

// navlink style display toggle
// add underline on active
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click", function() {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove("active");
    }
    sections[i].classList.add("active");
  });
}

// mobile menu button
// mobile nav functionality
mobileMenuBtn.addEventListener("click", function() {
  navbar.classList.toggle("navbar-mobile-open");
  menuList.classList.toggle("hidden");
});

// mobile media query
// change menu type based on media query
function mobileMediaQuery(x) {
  if (x.matches) {
    navbar.classList.remove("navbar-desktop");
    navbar.classList.add("navbar-mobile");
    mobileMenuBtn.classList.remove("hidden");
    desktopHeader.classList.add("hidden");
    menuList.classList.add("hidden");
    document.getElementById("main-container").style.color = "blue";
    document.getElementById("main-container").style.marginLeft = "0";
  } else {
    document.getElementById("main-container").style.marginLeft = "275px";
    navbar.classList.add("navbar-desktop");
    navbar.classList.remove("navbar-mobile");
    mobileMenuBtn.classList.add("hidden");
    desktopHeader.classList.remove("hidden");
    navbar.classList.remove("navbar-mobile-open");
    menuList.classList.remove("hidden");
  }
}

var x = window.matchMedia("(max-width: 800px)");
mobileMediaQuery(x); // Call listener function at run time
x.addListener(mobileMediaQuery); // Attach listener function on state changes
