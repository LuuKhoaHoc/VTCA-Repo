let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000);
}
function checkNum() {
  var num = document.getElementById("phone").value;
  if (isNaN(num)) {
    document.getElementById("err").innerHTML = "Chỉ nhập số điện thoại";
    setTimeout(function () {
      document.getElementById("err").innerHTML = "";
    }, 5000);
  }
  if (num == "") {
    document.getElementById("err").innerHTML = "Vui lòng không để trống";
    setTimeout(function () {
      document.getElementById("err").innerHTML = "";
    }, 5000);
  }
}
