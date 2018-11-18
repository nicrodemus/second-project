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
function myFunction() {
  var x = document.querySelectorAll(".arrow");
  x[2].style.display = "flex";
}
