export function menuPage() {
  const contentDiv = document.querySelector("#content");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menuHeader");
  contentDiv.appendChild(menuHeader);

  const title = document.createElement("div");
  title.classList.add("title");
  title.classList.add("menuTitle");
  title.textContent = "Menu";
  menuHeader.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("menuDescription");
  description.textContent = "We keep an optimised limited selection.";
  menuHeader.appendChild(description);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menuHeader.appendChild(menu);

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menuItem");
  menu.appendChild(menuItem1);

  const menuItem1Title = document.createElement("div");
  menuItem1Title.classList.add("menuItemTitle");
  menuItem1Title.textContent = "Salty Macaroni";
  menuItem1.appendChild(menuItem1Title);

  const menuItem1Img = document.createElement("img");
  menuItem1Img.classList.add("menuItemImg");
  menuItem1Img.src = "../src/img/ainsley.png";
  menuItem1.appendChild(menuItem1Img);

  const menuItem1Description = document.createElement("div");
  menuItem1Description.classList.add("menuItemDescription");
  menuItem1Description.textContent =
    "The saltiest and spiciest macaroni you've ever tasted, with a hint of wine";
  menuItem1.appendChild(menuItem1Description);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menuItem");
  menu.appendChild(menuItem2);

  const menuItem2Title = document.createElement("div");
  menuItem2Title.classList.add("menuItemTitle");
  menuItem2Title.textContent = "Whipped Potatoes";
  menuItem2.appendChild(menuItem2Title);

  const menuItem2Img = document.createElement("img");
  menuItem2Img.classList.add("menuItemImg");
  menuItem2Img.src = "../src/img/ainsley.png";
  menuItem2.appendChild(menuItem2Img);

  const menuItem2Description = document.createElement("div");
  menuItem2Description.classList.add("menuItemDescription");
  menuItem2Description.textContent =
    "Six potatoes whipped together in one delicious whipped potato meal";
  menuItem2.appendChild(menuItem2Description);

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menuItem");
  menu.appendChild(menuItem3);

  const menuItem3Title = document.createElement("div");
  menuItem3Title.classList.add("menuItemTitle");
  menuItem3Title.textContent = "Circle K Burger";
  menuItem3.appendChild(menuItem3Title);

  const menuItem3Img = document.createElement("img");
  menuItem3Img.classList.add("menuItemImg");
  menuItem3Img.src = "../src/img/ainsley.png";
  menuItem3.appendChild(menuItem3Img);

  const menuItem3Description = document.createElement("div");
  menuItem3Description.classList.add("menuItemDescription");
  menuItem3Description.textContent =
    "Double bacon-cheeseburger with bonus rekesalat on top *juicy*";
  menuItem3.appendChild(menuItem3Description);

  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menuItem");
  menu.appendChild(menuItem4);

  const menuItem4Title = document.createElement("div");
  menuItem4Title.classList.add("menuItemTitle");
  menuItem4Title.textContent = "Gasoline";
  menuItem4.appendChild(menuItem4Title);

  const menuItem4Img = document.createElement("img");
  menuItem4Img.classList.add("menuItemImg");
  menuItem4Img.src = "../src/img/ainsley.png";
  menuItem4.appendChild(menuItem4Img);

  const menuItem4Description = document.createElement("div");
  menuItem4Description.classList.add("menuItemDescription");
  menuItem4Description.textContent =
    "A tasty and delicious way to end it all in style at our restaurant";
  menuItem4.appendChild(menuItem4Description);
}
