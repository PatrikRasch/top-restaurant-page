import logoPic from "./img/logo.png";

export function headerPage() {
  const contentDiv = document.querySelector("#content");
  const top = document.querySelector(".top");
  const tabSwitch = document.querySelector(".tabSwitch");
  const header = document.querySelector(".header");

  const headerImg = document.createElement("img");
  headerImg.src = logoPic;
  headerImg.classList.add("imgLogo");
  header.appendChild(headerImg);

  const home = document.querySelector(".homeTab");
  home.classList.add("option");
  home.textContent = "Home";
  tabSwitch.appendChild(home);

  const menu = document.querySelector(".menuTab");
  menu.classList.add("option");
  menu.textContent = "Menu";
  tabSwitch.appendChild(menu);

  const contact = document.querySelector(".contactTab");
  contact.classList.add("option");
  contact.textContent = "Contact";
  tabSwitch.appendChild(contact);
}
