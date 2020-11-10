document.getElementById("projectImg").addEventListener("mouseover", mouseOver);
document.getElementById("projectImg").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("projectImg").style.objectPosition = "bottom";
  document.getElementById("projectImg").style.transition = "3s";
}

function mouseOut() {
  document.getElementById("projectImg").style.objectPosition = "top";
}

$(document).ready(function () {
  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      })
    }
  }

  navbarFixed();
});