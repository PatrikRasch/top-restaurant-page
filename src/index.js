import { headerPage, home } from "./header-page.js";
import { footerPage } from "./footer-page.js";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";
import "./styles.css";

const content = document.querySelector("#content");

const homeTab = document.querySelector(".homeTab");
const menuTab = document.querySelector(".menuTab");
const contactTab = document.querySelector(".contactTab");

homeTab.classList.add("viewing");
headerPage();
homePage();
footerPage();

function clearPage() {
  content.innerHTML = "";
}

homeTab.addEventListener("click", (e) => {
  clearPage();
  headerPage();
  homePage();
  footerPage();
  homeTab.classList.add("viewing");
  menuTab.classList.remove("viewing");
  contactTab.classList.remove("viewing");
});

menuTab.addEventListener("click", (e) => {
  clearPage();
  headerPage();
  menuPage();
  footerPage();
  menuTab.classList.add("viewing");
  homeTab.classList.remove("viewing");
  contactTab.classList.remove("viewing");
});

contactTab.addEventListener("click", (e) => {
  clearPage();
  headerPage();
  contactPage();
  footerPage();
  contactTab.classList.add("viewing");
  homeTab.classList.remove("viewing");
  menuTab.classList.remove("viewing");
});
