import { createElement } from "./sliderComponent";

function createComponent(favorite) {
  const slideContainer = createElement("div", [
    "slide-container",
    "flex",
    "flex-fd-column",
  ]);
  const imgElement = createElement("img", []);
  imgElement.src = favorite.img;
  imgElement.alt = favorite.name;

  const slideContent = createElement("div", [
    "slide-content",
    "flex",
    "flex-fd-column",
    "flex-ai-center",
  ]);

  const title = createElement("h3", []);
  title.textContent = favorite.name;

  const description = createElement("p", ["slide-description"]);
  description.textContent = favorite.description;

  const price = createElement("p", ["slide-price"]);
  price.textContent = favorite.price;

  slideContainer.append(imgElement);
  slideContent.append(title);
  slideContent.append(description);
  slideContent.append(price);
  slideContainer.append(slideContent);

  return slideContainer;
}

export { createComponent };
