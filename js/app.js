document.querySelectorAll("#projectImg").addEventListener("mouseover", mouseOver);
document.querySelectorAll("#projectImg").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelectorAll("#projectImg").style.objectPosition = "bottom";
  document.querySelectorAll("#projectImg").style.transition = "3s";
}

function mouseOut() {
  document.querySelectorAll("#projectImg").style.objectPosition = "top";
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