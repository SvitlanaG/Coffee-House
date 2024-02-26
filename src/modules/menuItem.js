import { createElement } from "./sliderComponent";

function createComponent(product) {
  const menuCard = createElement("div", [
    "menu_card",
    "flex",
    "flex-fd-column",
    "flex-jc-start",
  ]);
  menuCard.setAttribute("id", product.name);
  const imgWrapper = createElement("div", ["menu_card_img"]);
  const img = createElement("img", []);
  img.src = product.img;
  img.alt = product.name;

  const content = createElement("div", ["menu_card_content"]);

  const title = createElement("h3", ["menu_card_title"]);
  title.textContent = product.name;

  const description = createElement("p", ["menu_card_description"]);
  description.textContent = product.description;

  const price = createElement("p", ["menu_card_price"]);
  price.textContent = "$" + product.price;

  imgWrapper.append(img);
  menuCard.append(imgWrapper);
  menuCard.append(content);
  content.append(title);
  content.append(description);
  content.append(price);

  return menuCard;
}

export { createComponent };
