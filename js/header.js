var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
menuButton.addEventListener("click", function () {
  menu.classList.toggle("show");
});

// modal js

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal_2 = document.getElementById("myModal-mobile");

var btn22 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("closes")[0];

btn22.onclick = function () {
  modal_2.style.display = "block";
};

span2.onclick = function () {
  modal_2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
};
