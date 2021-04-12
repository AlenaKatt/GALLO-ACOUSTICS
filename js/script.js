var slideIndex = 1;
showSlides1(slideIndex);
showSlides2(slideIndex);

function currentSlide1(n) {
    showSlides1(slideIndex = n);
}
function currentSlide2(n) {
    showSlides2(slideIndex = n);
}
function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("slide1");
    var dots1 = document.getElementsByClassName("button1");
    if (n > slides1.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" current", "");
    }
    slides1[slideIndex - 1].style.display = "block";
    dots1[slideIndex - 1].className += " current";
}
function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("slide2");
    var dots2 = document.getElementsByClassName("button2");
    if (n > slides2.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" current", "");
    }
    slides2[slideIndex - 1].style.display = "block";
    dots2[slideIndex - 1].className += " current";
}