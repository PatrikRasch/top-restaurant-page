import staffPic from "./img/harold.png";
import managerPic from "./img/jeff-bezos.png";

export function contactPage() {
  const contentDiv = document.querySelector("#content");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menuHeader");
  contentDiv.appendChild(menuHeader);

  const title = document.createElement("div");
  title.classList.add("title");
  title.classList.add("menuTitle");
  title.textContent = "Contact us";
  menuHeader.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("menuDescription");
  description.textContent =
    "Get in touch with us through our restaurant staff or call management directly, Karen.";
  menuHeader.appendChild(description);

  const contact = document.createElement("div");
  contact.classList.add("contact");
  menuHeader.appendChild(contact);

  const staff = document.createElement("div");
  staff.classList.add("contactItemStaff");
  contact.appendChild(staff);

  const staffTitle = document.createElement("div");
  staffTitle.classList.add("contactItemTitle");
  staffTitle.textContent = "Our Staff";
  staff.appendChild(staffTitle);

  const staffImg = document.createElement("img");
  staffImg.classList.add("staffImg");
  staffImg.src = staffPic;
  staff.appendChild(staffImg);

  const staffDescription = document.createElement("div");
  staffDescription.classList.add("contactItemDescription");
  staffDescription.textContent = "+99 461 68 928 \n We're always happy to help";
  staff.appendChild(staffDescription);

  const manager = document.createElement("div");
  manager.classList.add("contactItemManager");
  contact.appendChild(manager);

  const managerTitle = document.createElement("div");
  managerTitle.classList.add("contactItemTitle");
  managerTitle.textContent = "Management";
  manager.appendChild(managerTitle);

  const managerImg = document.createElement("img");
  managerImg.classList.add("managerImg");
  managerImg.src = managerPic;
  manager.appendChild(managerImg);

  const managerDescription = document.createElement("div");
  managerDescription.classList.add("contactItemDescription");
  managerDescription.textContent =
    "We offer same-day delivery \n +11 69 JEFF-JEFF";
  manager.appendChild(managerDescription);
}
