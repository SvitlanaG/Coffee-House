import "@babel/polyfill";
import "./index.html";
import "./index.scss";
import "./modules/headerFooterComponents";
import "./modules/sliderComponent";
import "./modules/menuComponent";

import { createComponent } from "./modules/sliderComponent";
import { createTabsComponent } from "./modules/tabsComponent";
import { createMenuComponent } from "./modules/menuComponent";
import { createModalComponent } from "./modules/modalComponent";
import { cardsToShow } from "./modules/tabsComponent";
import { favoritesJSON } from "./favorites";
import { productsJSON } from "./products";
import {
  createBurgerMenuComponent,
  burgerBtnClickHandler,
} from "./modules/burgerMenu";

const slider = createComponent(favoritesJSON);
const sectionFavorite = document.getElementById("favcoffee");
sectionFavorite.append(slider);

const tabs = createTabsComponent();
const sectionMenu = document.getElementById("menu");
const menu = createMenuComponent(cardsToShow);
sectionMenu.append(tabs);
sectionMenu.append(menu);

const burgerMenu = createBurgerMenuComponent();
const header = document.getElementById("header");
header.append(burgerMenu);
const burgerBtn = document.getElementsByClassName("header__burger");
burgerBtn[0].addEventListener("click", burgerBtnClickHandler);
