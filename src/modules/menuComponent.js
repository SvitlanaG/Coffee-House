import * as Item from "./menuItem";
import { createElement } from "./sliderComponent";
import { showAllCardsFromCategory } from "./tabsComponent";
import { createModalComponent } from "./modalComponent";

let menuItems = new Array();
let refreshBtn = null;
const TEXT_BUTTON_REFRESH = "↻";

function createMenuComponent(productsJSON) {
  const menuComponent = createElement("div", ["menu-items_container"]);
  menuComponent.setAttribute("id", "menuComponent");
  const menuItemContainer = createElement("div", [
    "menu_card-container",
    "flex",
    "flex-fw-wrap",
    "flex-jc-center",
  ]);
  productsJSON.forEach((element) => {
    const menuItem = Item.createComponent(element);
    menuItems.push(menuItem);
    menuItemContainer.append(menuItem);
    menuItem.addEventListener("click", function () {
      menuItemClickHandler(event);
    });
  });

  refreshBtn = createElement("div", [
    "flex",
    "btn__refresh",
    "hide-for-desktop",
  ]);
  refreshBtn.textContent = TEXT_BUTTON_REFRESH;

  menuComponent.append(menuItemContainer);
  menuComponent.append(refreshBtn);

  refreshBtn.addEventListener("click", refreshBtnClickHandler);

  return menuComponent;
}

function refreshBtnClickHandler() {
  showAllCardsFromCategory();
  refreshBtn.classList.add("hide-for-mobile");
}

function menuItemClickHandler(event) {
  const modalComponent = createModalComponent(event.currentTarget.id);
  const main = document.getElementById("main");
  main.append(modalComponent);
}

export { createMenuComponent, refreshBtnClickHandler };
