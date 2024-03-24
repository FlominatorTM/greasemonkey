// ==UserScript==
// @name     UB Freiburg, arrow keys in address books
// @version  1
// @grant    none
// @namespace   fs
// @include     https://*.dl.ub.uni-freiburg.de/diglit/*
// @match     	https://*.dl.ub.uni-freiburg.de/diglit/*
// ==/UserScript==



document.addEventListener('keyup', (e) => {

  if (e.code === "ArrowRight") 
  {
    clickLink("Eine Seite vor");
  }
  else if (e.code === "ArrowLeft") 
  {
    clickLink("Eine Seite zurück");
  }
});

function clickLink(title)
{

  const aTags = document.getElementsByTagName("a");
  for(var i=0;i<aTags.length;i++)
  {
    if(aTags[i].title != null && aTags[i].title == title)
    {
      window.location=aTags[i].href;
      break;
    }
  }
}