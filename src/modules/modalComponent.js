import { createElement } from "./sliderComponent";
import { productsJSON } from "../products";

const INFO_ICON = "ⓘ";
let modalSegment = null;
let total = 0;
let calculatedSizeAddOn = 0;
let calculatedAdditivesAddOn = 0;
let endPrice = 0;
let sizeBtnArr = [];
let additivesBtnArr = [];
let price = null;

function createModalComponent(id) {
  const product = productsJSON.find((item) => item.name === id);
  total = parseFloat(product.price, 10);
  modalSegment = createElement("section", ["modal"]);
  modalSegment.setAttribute("id", "modal");
  const modalComponent = createElement("div", ["flex", "modal-container"]);
  const imgWrapper = createElement("div", ["hide-for-phones"]);
  const imgElement = createElement("img", ["modal-image"]);
  imgElement.src = product.img;
  imgElement.alt = product.name;
  const contentWrapper = createElement("div", [
    "flex",
    "flex-fd-column",
    "modal-content",
  ]);
  const title = createElement("h3", ["modal-title"]);
  title.textContent = product.name;
  const description = createElement("p", ["modal-description"]);
  description.textContent = product.description;
  const size = createElement("p", ["modal-label"]);
  size.textContent = "Size";
  const sizeWrapper = createElement("div", [
    "flex",
    "flex-fw-wrap",
    "modal-buttons-group",
  ]);
  const sizeObj = product.sizes;
  for (var objKey in sizeObj) {
    if (sizeObj.hasOwnProperty(objKey)) {
      const sizeBtn = createElement("button", ["tab-item", "flex"]);
      const addPrice = sizeObj[objKey]["add-price"];
      sizeBtn.textContent = sizeObj[objKey].size;
      sizeBtn.innerHTML += `<span class="modal-icon">${objKey.toUpperCase()}</span>`;
      sizeBtn.setAttribute("id", objKey);
      sizeWrapper.append(sizeBtn);
      if (objKey === "s") {
        sizeBtn.classList.add("tab-item-active");
      }
      sizeBtnArr.push(sizeBtn);
      sizeBtn.addEventListener("click", function () {
        calculatePriceClickHandler(event, addPrice);
      });
    }
  }
  const additives = createElement("p", ["modal-label"]);
  additives.textContent = "Additives";
  const additivesWrapper = createElement("div", [
    "flex",
    "flex-fw-wrap",
    "modal-buttons-group",
  ]);
  for (let i = 0; i < product.additives.length; i += 1) {
    const additivesBtn = createElement("button", ["tab-item", "flex"]);
    const addPrice = product.additives[i]["add-price"];
    additivesBtn.setAttribute("id", i + 1);
    additivesBtn.textContent = product.additives[i].name;
    additivesBtn.innerHTML += `<span class="modal-icon">${i + 1}</span>`;
    additivesWrapper.append(additivesBtn);
    additivesBtnArr.push(additivesBtn);
    additivesBtn.addEventListener("click", function () {
      calculatePriceClickHandler(event, addPrice);
    });
  }
  const priceWrapper = createElement("div", [
    "flex",
    "flex-jc-space-between",
    "modal-total-wrapper",
  ]);
  const priceTotal = createElement("h3", ["modal-label-total"]);
  priceTotal.textContent = "Total:";
  price = createElement("h3", ["modal-label-total"]);
  price.textContent = "$" + product.price;
  const infoTextWrapper = createElement("div", ["flex", "modal-line"]);
  const infoIcon = createElement("p", ["modal-info-icon"]);
  infoIcon.textContent = INFO_ICON;
  const infoText = createElement("p", ["modal-info-text"]);
  infoText.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";
  const closeBtn = createElement("button", ["modal-close-button"]);
  closeBtn.textContent = "Close";

  imgWrapper.append(imgElement);
  modalComponent.append(imgWrapper);
  contentWrapper.append(title);
  contentWrapper.append(description);
  contentWrapper.append(size);
  contentWrapper.append(sizeWrapper);
  contentWrapper.append(additives);
  contentWrapper.append(additivesWrapper);
  priceWrapper.append(priceTotal);
  priceWrapper.append(price);
  contentWrapper.append(priceWrapper);
  infoTextWrapper.append(infoIcon);
  infoTextWrapper.append(infoText);
  contentWrapper.append(infoTextWrapper);
  contentWrapper.append(closeBtn);
  modalComponent.append(contentWrapper);
  modalSegment.append(modalComponent);

  closeBtn.addEventListener("click", closeBtnClickHandler);
  document.querySelector("body").style.overflow = "hidden";
  modalSegment.style.display = "block";

  return modalSegment;
}

function closeBtnClickHandler() {
  modalSegment.remove();
  document.querySelector("body").style.overflow = "visible";
  calculatedSizeAddOn = 0;
  calculatedAdditivesAddOn = 0;
  endPrice = 0;
  sizeBtnArr = [];
  additivesBtnArr = [];
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalSegment) {
    closeBtnClickHandler();
  }
};

function calculatePriceClickHandler(event, addPrice) {
  const btnId = event.currentTarget.id;
  switch (btnId) {
    case "s":
    case "m":
    case "l":
      sizeBtnArr.forEach((btn) => btn.classList.remove("tab-item-active"));
      event.currentTarget.classList.add("tab-item-active");
      break;
    case "1":
    case "2":
    case "3":
      event.currentTarget.classList.toggle("tab-item-active");
      calculatedAdditivesAddOn = 0;
      break;
    default:
      console.log(`Error, there are no ${btnId} size or additives.`);
  }
  sizeBtnArr.forEach((btn) => {
    if (
      btn.classList.contains("tab-item-active") &&
      (btnId === "s" || btnId === "m" || btnId === "l")
    ) {
      calculatedSizeAddOn = parseFloat(addPrice);
    }
  });
  additivesBtnArr.forEach((btn) => {
    if (
      btn.classList.contains("tab-item-active") &&
      (btnId === "1" || btnId === "2" || btnId === "3")
    ) {
      calculatedAdditivesAddOn += parseFloat(addPrice);
    }
  });
  endPrice = total + calculatedSizeAddOn + calculatedAdditivesAddOn;
  price.textContent = "$" + endPrice.toFixed(2);
}

export { createModalComponent };
