export function footerPage() {
  const contentDiv = document.querySelector("#content");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  contentDiv.appendChild(footer);
}
