window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.style.height = 90 + "px";
  } else {
    navbar.style.height = 50 + "px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0)";
  }
});

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    popup.style.opacity = 1;
    popup.style.transform = "translate(0px)";
  }
});

function closeBtn() {
  popup.style.display = "none";
}
