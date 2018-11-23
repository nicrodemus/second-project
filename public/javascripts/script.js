document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);
/////------------------------ click function----------------------------/////
var button = document.getElementById("a");

button.onmouseover = function() {
  var div = document.getElementById("b");
  div.style.display = "flex";
};
button.onmouseout = function() {
  var div = document.getElementById("b");
  div.style.display = "none";
};

var button = document.getElementById("c");

button.onmouseover = function() {
  var div = document.getElementById("d");
  div.style.display = "flex";
};

button.onmouseout = function() {
  var div = document.getElementById("d");
  div.style.display = "none";
};
//   var div = document.getElementById("d");
//   if (div.style.display !== "none") {
//     div.style.display = "none";
//   } else {
//     div.style.display = "flex";
//   }
// };
var button = document.getElementById("connexion");

button.onclick = function() {
  var div = document.getElementById("login");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
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

var button = document.getElementById("sort-arrow");
button.onclick = function() {
  var div = document.getElementById("display-sort");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};

var button = document.getElementById("filter-arrow");
button.onclick = function() {
  var div = document.getElementById("display-filter");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
};

// var click = document.querySelector(".ajouter")
// click.onclick = function(){
//   if()
// }
