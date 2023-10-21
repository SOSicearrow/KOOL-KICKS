document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function plusSlides(n) {
    slideIndex += n;
    showSlides();
  }

  function currentSlide(n) {
    slideIndex = n;
    showSlides();
  }
//Start slideshow on slide number 1
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }

  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    plusSlides(-1);
  });

  nextButton.addEventListener("click", function () {
    plusSlides(1);
  });

  let dotButtons = document.getElementsByClassName("dot");
  for (let i = 0; i < dotButtons.length; i++) {
    dotButtons[i].addEventListener("click", function () {
      currentSlide(i);
    });
  }

});
