import * as Item from "./sliderItem";

const TEXT_BUTTON_LEFT = "←";
const TEXT_BUTTON_RIGHT = "→";
const COUNT_ITEMS = 3;
let elementsWrapper = null;
let currentProgressBarItem = null;
let btnRight = null;
let items = new Array();
let visibleItem = null;
let isEnabled = true;
const intervalId = setInterval(simulateButtonPress, 6000);

function createComponent(favoritesJSON) {
  const sliderComponent = createElement("div", [
    "flex",
    "flex-fd-column",
    "carousel",
  ]);
  elementsWrapper = createElement("div", [
    "slides-wrapper",
    "flex",
    "flex-jc-space-between",
    "flex-ai-center",
  ]);
  const btnLeft = createElement("div", [
    "flex",
    "btn__arrow",
    "hide-for-phones",
  ]);
  btnLeft.textContent = TEXT_BUTTON_LEFT;
  btnRight = createElement("div", ["flex", "btn__arrow", "hide-for-phones"]);
  btnRight.textContent = TEXT_BUTTON_RIGHT;

  favoritesJSON.forEach((element) => {
    const sliderItem = Item.createComponent(element);
    items.push(sliderItem);
    elementsWrapper.append(sliderItem);
  });

  const progressBarWrapper = createElement("div", [
    "flex",
    "flex-fd-row",
    "flex-jc-center",
  ]);

  for (let i = 0; i < favoritesJSON.length; i += 1) {
    const progressBarItem = createElement("span", [
      "horizontal-line",
      "order:" + (i + 1),
    ]);
    progressBarWrapper.append(progressBarItem);
  }
  visibleItem = items[0];
  visibleItem.classList.add("active");
  currentProgressBarItem = progressBarWrapper.firstElementChild;
  currentProgressBarItem.classList.add("horizontal-line-active");
  elementsWrapper.append(btnLeft);
  for (let i = 0; i < favoritesJSON.length; i += 1) {
    elementsWrapper.append(items[i]);
  }
  elementsWrapper.append(btnRight);
  sliderComponent.append(elementsWrapper);
  sliderComponent.append(progressBarWrapper);

  btnLeft.addEventListener("click", btnLeftClickHandler);
  btnRight.addEventListener("click", btnRightClickHandler);

  return sliderComponent;
}

function btnLeftClickHandler() {
  if (isEnabled) {
    const index = items.indexOf(visibleItem);
    hideVisibleItem("animate_to-right");
    currentProgressBarItem.classList.remove("horizontal-line-active");
    visibleItem = index > 0 ? items[index - 1] : items[COUNT_ITEMS - 1];
    showItem("animate_from-left");
    currentProgressBarItem =
      index > 0
        ? document.querySelectorAll(".horizontal-line")[index - 1]
        : document.querySelectorAll(".horizontal-line")[COUNT_ITEMS - 1];
    currentProgressBarItem.classList.add("horizontal-line-active");
  }
}

function btnRightClickHandler() {
  if (isEnabled) {
    const index = items.indexOf(visibleItem);
    hideVisibleItem("animate_to-left");
    currentProgressBarItem.classList.remove("horizontal-line-active");
    visibleItem = index < COUNT_ITEMS - 1 ? items[index + 1] : items[0];
    showItem("animate_from-right");
    currentProgressBarItem =
      index < COUNT_ITEMS - 1
        ? document.querySelectorAll(".horizontal-line")[index + 1]
        : document.querySelectorAll(".horizontal-line")[0];
    currentProgressBarItem.classList.add("horizontal-line-active");
  }
}

function hideVisibleItem(direction) {
  isEnabled = false;
  visibleItem.classList.add(direction);
  visibleItem.addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  visibleItem.classList.add("next", direction);
  visibleItem.addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function simulateButtonPress() {
  const clickEvent = new Event("click");
  btnRight.dispatchEvent(clickEvent);
}

// const slideContainer = document.querySelector(".slide-container");
// slideContainer.addEventListener("mouseover", function () {
//   clearInterval(intervalId);
// });

// visibleItem.addEventListener("mouseout", function () {
//   intervalId = setInterval(simulateButtonPress, 7000);
// });

function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  for (let i = 0; i < className.length; i++) {
    elem.classList.add(className[i]);
  }
  return elem;
}

export { createComponent, createElement };
