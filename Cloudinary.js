// ==UserScript==
// @name          Cloudinary
// @namespace     https://cloudinary.com
// @description   automatic single-sign-on when on the SSO page
// @match https://cloudinary.com/users/sso_login
// @include   https://cloudinary.com
// ==/UserScript==

document.getElementById("user_email").value = "enter your single-sign-on email address here";
document.getElementsByTagName("form")[0].submit();
