const headers = document.getElementById("headers");
const footers = document.getElementById("footers");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

const firstClone = header.content.cloneNode(true);
headers.appendChild(firstClone);

const secondClone = footer.content.cloneNode(true);
footers.appendChild(secondClone);

