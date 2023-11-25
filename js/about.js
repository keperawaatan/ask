const img = document.querySelector(".gambar"),
fristImg = img.querySelectorAll("img")[0];
 ArowIcons = document.querySelectorAll(".slider i");

 
 let isdarkStar = false, prevPageX, PrevScrollLeft;
 let fristImgWidth = fristImg.clientWidth + 14;
 
 ArowIcons.forEach(icon => {
     icon.addEventListener("click", () =>  {
        img.scrollLeft += icon.id == "left" ? -fristImgWidth : fristImgWidth;
     
     });
 });

const darkStart = (e) => {
  isdarkStar = true;
  prevPageX = e.pageX
  PrevScrollLeft = img.scrollLeft;
};

const dragging = e => {
  if (!isdarkStar) return;
  e.preventDefault();
  img.classList.add("dragging");
  let diff = e.pageX - prevPageX
  img.scrollLeft = PrevScrollLeft - diff;
};

const dragstop = () => {
  isdarkStar = false;
  img.classList.remove("dragging");
};

img.addEventListener("mousedown", darkStart);
img.addEventListener("mousemove", dragging);
img.addEventListener("mouseup", dragstop);
