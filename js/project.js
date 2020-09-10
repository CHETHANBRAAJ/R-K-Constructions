filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}
function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}
function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}
function openModal7() {
  document.getElementById("myModal7").style.display = "block";
}
function openModal8() {
  document.getElementById("myModal8").style.display = "block";
}
function openModal9() {
  document.getElementById("myModal9").style.display = "block";
}
function openModal10() {
  document.getElementById("myModal10").style.display = "block";
}
function openModal11() {
  document.getElementById("myModal11").style.display = "block";
}
function openModal12() {
  document.getElementById("myModal12").style.display = "block";
}


function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}
function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}
function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}
function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}
function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}
function closeModal9() {
  document.getElementById("myModal9").style.display = "none";
}
function closeModal10() {
  document.getElementById("myModal10").style.display = "none";
}
function closeModal11() {
  document.getElementById("myModal11").style.display = "none";
}
function closeModal12() {
  document.getElementById("myModal12").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var slides = document.getElementsByClassName("mySlides2");
var slides = document.getElementsByClassName("mySlides3");
var slides = document.getElementsByClassName("mySlides4");
var slides = document.getElementsByClassName("mySlides5");
var slides = document.getElementsByClassName("mySlides6"); 
var slides = document.getElementsByClassName("mySlides7");
var slides = document.getElementsByClassName("mySlides8");
var slides = document.getElementsByClassName("mySlides9");
var slides = document.getElementsByClassName("mySlides10");
var slides = document.getElementsByClassName("mySlides11");
var slides = document.getElementsByClassName("mySlides12");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}