export function homePage() {
  const contentDiv = document.querySelector("#content");

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");
  contentDiv.appendChild(mainContent);

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
  imgBurger.src = "../src/img/meal.png";
  mainContent.appendChild(imgBurger);
}
