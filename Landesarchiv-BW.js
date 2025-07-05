// ==UserScript==
// @name          Landesarchiv BW
// @description   focus on search field
// @match https://www.landesarchiv-bw.de/
// @include   https://www.landesarchiv-bw.de/
// ==/UserScript==
 
setTimeout(() => {
  document.getElementsByName("query")[0].focus();
}, 500);
