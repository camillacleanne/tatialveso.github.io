document.getElementById("projectImg").addEventListener("mouseover", mouseOver);
document.getElementById("projectImg").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("projectImg").style.objectPosition = "bottom";
  document.getElementById("projectImg").style.transition = "3s";
}

function mouseOut() {
    document.getElementById("projectImg").style.objectPosition = "top";
}