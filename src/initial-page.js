export function initialPage() {
  const contentDiv = document.querySelector("#content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  contentDiv.appendChild(wrapper);

  const header = document.createElement("div");
  header.classList.add("header");
  wrapper.appendChild(header);

  const imgLogo = document.createElement("img");
  imgLogo.classList.add("imgLogo");
  imgLogo.src = "../src/img/logo.png";
  header.appendChild(imgLogo);

  const options = document.createElement("div");
  options.classList.add("options");
  header.appendChild(options);

  const home = document.createElement("div");
  home.classList.add("option");
  home.textContent = "Home";
  options.appendChild(home);

  const menu = document.createElement("div");
  menu.classList.add("option");
  menu.textContent = "Menu";
  options.appendChild(menu);

  const contact = document.createElement("div");
  contact.classList.add("option");
  contact.textContent = "Contact";
  options.appendChild(contact);

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");
  wrapper.appendChild(mainContent);

  const leftSide = document.createElement("div");
  leftSide.classList.add("leftSide");
  mainContent.appendChild(leftSide);

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Piada Italian Street Food";
  leftSide.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent =
    "Piada Italian Street Food is great it might obliterate your insides. \r\n";
  description.textContent +=
    "Matter of fact, under 15% of our customers leave without spending 30 minutes at our bathroom prior to departure.";
  leftSide.appendChild(description);

  const order = document.createElement("button");
  order.classList.add("order");
  order.textContent = "Make an order";
  leftSide.appendChild(order);

  const imgBurger = document.createElement("img");
  imgBurger.classList.add("imgBurger");
  imgBurger.src = "../src/img/burger.png";
  mainContent.appendChild(imgBurger);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  wrapper.appendChild(footer);
}
