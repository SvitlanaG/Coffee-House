import { createElement } from "./sliderComponent";
import coffeeCup from "../assets/icons/coffee-cup.svg";

let burgerMenuContainer = null;

function createBurgerMenuComponent() {
  burgerMenuContainer = createElement("div", [
    "mobile__nav",
    "hide-for-desktop",
  ]);
  const burgerMenuNav = createElement("nav", []);
  const burgerMenuList = createElement("ul", [
    "flex",
    "flex-fd-column",
    "flex-ai-center",
  ]);
  const burgerMenuListItem1 = createElement("li", []);
  const burgerMenuListItem2 = createElement("li", []);
  const burgerMenuListItem3 = createElement("li", []);
  const burgerMenuListItem4 = createElement("li", []);
  const burgerMenuLink1 = createElement("a", ["mobile__link"]);
  burgerMenuLink1.href = "#favcoffee";
  burgerMenuLink1.textContent = "Favorite coffee";
  burgerMenuLink1.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  const burgerMenuLink2 = createElement("a", ["mobile__link"]);
  burgerMenuLink2.href = "#about";
  burgerMenuLink2.textContent = "About";
  burgerMenuLink2.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  const burgerMenuLink3 = createElement("a", ["mobile__link"]);
  burgerMenuLink3.href = "#mobile-app";
  burgerMenuLink3.textContent = "Mobile app";
  burgerMenuLink3.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  const burgerMenuLink4 = createElement("a", ["mobile__link"]);
  burgerMenuLink4.href = "#footer";
  burgerMenuLink4.textContent = "Contact us";
  burgerMenuLink4.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  const burgerMenuLinkMenu = createElement("a", ["mobile__link"]);
  burgerMenuLinkMenu.href = "#menu";
  burgerMenuLinkMenu.textContent = "Menu";
  burgerMenuLinkMenu.setAttribute("id", "burger-menu-btn");
  const coffeeCupImg = createElement("img", []);
  coffeeCupImg.src = coffeeCup;
  coffeeCupImg.alt = "Coffee Cup";
  burgerMenuLinkMenu.onclick = function () {
    burgerBtnClickHandler();
    goToMenu();
  };
  burgerMenuLinkMenu.append(coffeeCupImg);

  burgerMenuListItem1.append(burgerMenuLink1);
  burgerMenuListItem2.append(burgerMenuLink2);
  burgerMenuListItem3.append(burgerMenuLink3);
  burgerMenuListItem4.append(burgerMenuLink4);

  burgerMenuList.append(burgerMenuListItem1);
  burgerMenuList.append(burgerMenuListItem2);
  burgerMenuList.append(burgerMenuListItem3);
  burgerMenuList.append(burgerMenuListItem4);
  burgerMenuList.append(burgerMenuLinkMenu);

  burgerMenuNav.append(burgerMenuList);

  burgerMenuContainer.append(burgerMenuNav);

  return burgerMenuContainer;
}

function burgerBtnClickHandler() {
  const burgerBtn = document.getElementById("burger-link");
  burgerMenuContainer.classList.toggle("mobile__nav-active");
  burgerBtn.classList.toggle("mobile__btn-active");

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
}

function toggleSections() {
  const sections = document.getElementsByTagName("section");
  const menuButton = document.getElementById("menu-btn");
  const burgerMenuButton = document.getElementById("burger-menu-btn");

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("section-hidden");
    sections[i].classList.toggle("section-visible");
  }
  if (!isHomePage()) {
    menuButton.style["pointer-events"] = "none";
    burgerMenuButton.style["pointer-events"] = "none";
    menuButton.style["border-bottom"] = "2px solid #403f3d";
    burgerMenuButton.style["border-bottom"] = "2px solid #403f3d";
  } else if (isHomePage) {
    menuButton.style["pointer-events"] = "auto";
    burgerMenuButton.style["pointer-events"] = "auto";
    menuButton.style["border-bottom"] = "2px solid transparent";
    burgerMenuButton.style["border-bottom"] = "2px solid transparent";
  }
}

function goToMenu() {
  if (isHomePage()) {
    const burgerMenuButton = document.getElementById("burger-menu-btn");
    burgerMenuButton.style["pointer-events"] = "none";
    burgerMenuButton.style["border-bottom"] = "2px solid #403f3d";

    toggleSections();
  }
}

function isHomePage() {
  const menuSegment = document.getElementById("menu");
  const isHomePage = menuSegment.classList.contains("section-hidden");

  return isHomePage;
}

export { burgerBtnClickHandler, createBurgerMenuComponent };
