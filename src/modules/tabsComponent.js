import { createElement } from "./sliderComponent";
import coffeeIcon from "../assets/icons/coffee.svg";
import teaIcon from "../assets/icons/tea.svg";
import dessertIcon from "../assets/icons/dessert.svg";
import { productsJSON } from "../products";
import { createMenuComponent } from "./menuComponent";
import { refreshBtnClickHandler } from "./menuComponent";

let cardsToShow = getCardsToShow("coffee");
let currentProductsCategory = "coffee";
let menuTabs = null;

function createTabsComponent() {
  menuTabs = createElement("div", ["menu_tabs", "flex", "flex-jc-center"]);
  const coffeeBtn = createElement("button", [
    "tab-item",
    "tab-item-active",
    "flex",
  ]);
  coffeeBtn.textContent = "Coffee";

  const coffeeImg = createElement("img", []);
  coffeeImg.src = coffeeIcon;
  coffeeImg.alt = "Coffee";
  coffeeBtn.append(coffeeImg);

  const teaBtn = createElement("button", ["tab-item", "flex"]);
  teaBtn.textContent = "Tea";

  const teaImg = createElement("img", []);
  teaImg.src = teaIcon;
  teaImg.alt = "Tea";
  teaBtn.append(teaImg);

  const dessertBtn = createElement("button", ["tab-item", "flex"]);
  dessertBtn.textContent = "Dessert";

  const dessertImg = createElement("img", []);
  dessertImg.src = dessertIcon;
  dessertImg.alt = "Dessert";
  dessertBtn.append(dessertImg);

  menuTabs.append(coffeeBtn);
  menuTabs.append(teaBtn);
  menuTabs.append(dessertBtn);

  coffeeBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "coffee");
  });
  teaBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "tea");
    refreshBtnClickHandler();
  });
  dessertBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "dessert");
  });

  return menuTabs;
}

function menuBtnClickHandler(event, productsCategory) {
  currentProductsCategory = productsCategory;
  const buttons = menuTabs.children;
  const cards = getCardsToShow(productsCategory);
  updateSectionMenu(cards);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("tab-item-active");
  }
  event.currentTarget.classList.add("tab-item-active");
}

function getCardsToShow(productsCategory) {
  let screenWidth = window.innerWidth;
  let cards = productsJSON.filter((item) => item.category === productsCategory);
  if (screenWidth <= 768) {
    return cards.slice(0, 4);
  }
  return cards;
}

function showAllCardsFromCategory() {
  let cards = productsJSON.filter(
    (item) => item.category === currentProductsCategory
  );
  updateSectionMenu(cards);
}

window.addEventListener("resize", handleWindowResizeForProductCategories);

function handleWindowResizeForProductCategories() {
  let cards = getCardsToShow(currentProductsCategory);
  updateSectionMenu(cards);
}

function updateSectionMenu(cards) {
  document.getElementById("menuComponent").remove();
  const menu = createMenuComponent(cards);
  const sectionMenu = document.getElementById("menu");
  sectionMenu.append(menu);
}

export { createTabsComponent, cardsToShow, showAllCardsFromCategory };
