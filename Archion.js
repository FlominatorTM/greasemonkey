// ==UserScript==
// @name    Archion: arrow key navigation for pages
// @version  1
// @grant    none
// @namespace   ar
// @include     https://www.archion.de/*/viewer*
// @match     	https://www.archion.de/*/viewer*
// ==/UserScript==

document.addEventListener("keyup", (e) => {
  var activeElements = document.getElementsByClassName("active");
  var activePage = activeElements[activeElements.length - 1];

  if (e.code === "ArrowRight") {
    activePage.nextSibling.click();
  } else if (e.code === "ArrowLeft") {
    activePage.previousSibling.click();
  }
});
