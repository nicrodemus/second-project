document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);
/////------------------------ click function----------------------------/////
var manArrow = document.getElementById("a");

manArrow.onclick = function() {
  var man = document.getElementById("b");
  if (man.style.display !== "none") {
    man.style.display = "none";
  } else {
    man.style.display = "flex";
  }
};

var womanArrow = document.getElementById("c");

womanArrow.onclick = function() {
  var woman = document.getElementById("d");
  if (woman.style.display !== "none") {
    woman.style.display = "none";
  } else {
    woman.style.display = "flex";
  }
};
var connection = document.getElementById("connexion");

connection.onclick = function() {
  var login = document.getElementById("login");
  if (login.style.display !== "none") {
    login.style.display = "none";
  } else {
    login.style.display = "flex";
  }
};

var image = document.querySelectorAll(".three-images-section-display");
console.log("images", image);
var bigImage = document.querySelector(".image-section-display");
console.log("bigimage", bigImage);

image.forEach(oneImage => {
  oneImage.onclick = () => {
    bigImage.src = oneImage.src;
  };
});

// var arrow = document.querySelector("#sort-arrow");
// var arrowDisplay = document.querySelector("#display-sort");
// arrow.onclick = function() {
//   if (arrowDisplay.style.display !== "none") {
//     arrowDisplay.style.display = "none";
//   } else {
//     arrowDisplay.style.display = "flex";
//   }
// };

// var button1 = document.querySelector("#filter-arrow");
// button.onclick = function() {
//   var div1 = document.getElementById("#display-filter");
//   if (div1.style.display !== "none") {
//     div1.style.display = "none";
//   } else {
//     div1.style.display = "flex";
//   }
// };
