// ==UserScript==
// @name          LEO-BW
// @description   focus on search field
// @match https://www.leo-bw.de/*
// @include   http://www.leo-bw.de/
// ==/UserScript==

const observer = new MutationObserver(function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    mutation.addedNodes.forEach((node) => {
      console.debug(
        "observed " +
          node.tagName +
          " id: " +
          node.id +
          " class:" +
          node.className
      );

      if (node.innerHTML && node.innerHTML.includes("freitext.text")) {
        setTimeout(() => {
          document.getElementsByName("freitext.text")[2].focus();
        }, 200);
        observer.disconnect();
      }
    });
  }
});

observer.observe(document.body, {
  attributes: false,
  childList: true,
  subtree: true,
});
