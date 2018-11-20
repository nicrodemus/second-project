document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);
// function myFunction() {
//   document.getElementById("fa-sort-up").style.display = "block";
// }
// document.getElementById("a").onmouseover = function() {
//   document.getElementById("b").style.display = "flex";
// };

// document.getElementsByClassName("arrow-hover").onmouseover = function() {
//   document.getElementsByClassName("arrow").style.display = "flex";
// };
// var arrowHover = document.querySelectorAll(".arrow-hover");

// // function display() {
// //   document.getElementsByClassName("arrow").style.display = flex;
// // }
// function myFunction() {
//   const element = document.getElementById("b");
//   element.classList.toggle("show");
// }
var button = document.getElementById("a");

button.onclick = function() {
  var div = document.getElementById("b");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};

var button = document.getElementById("c");

button.onclick = function() {
  var div = document.getElementById("d");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};
var button = document.getElementById("connexion");

button.onclick = function() {
  var div = document.getElementById("login");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};
