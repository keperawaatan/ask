let items = document.querySelectorAll(".galeri .blog .slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${125 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = stt;
    items[i].style.filter = "blur(2px)";
    items[i].style.opacity = stt > 3 ? 0 : 0.6;
  }
  stt = 0;
  for (var a = active - 1; a >= 0; a--) {
    stt++;
    items[a].style.transform = `translateX(${-125 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[a].style.zIndex = stt;
    items[a].style.filter = "blur(2px)";
    items[a].style.opacity = stt > 3 ? 0 : 0.6;
  }
}
loadShow();

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

// conBox

const questions = document.querySelectorAll(".question-answer");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (con) {
      if (con !== question) {
        con.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  })
});

// content scroll
let one = document.getElementById("contentOne");
let two = document.getElementById("contentTow");
let tre = document.getElementById("contentTree");


window.onscroll = function () {
  let Y = window.scrollY;
  //nav.style.display = "none";
  one.style.transform = "translateY(" + Y / 20 + "px)";
  two.style.transform = "translateY(" + Y / 19 + "px)";
  tre.style.transform = "translateY(" + Y / 20 + "px)";

};

window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
