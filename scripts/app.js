let menu = document.querySelector(".menu");
let icon = document.querySelector(".menu__icon");

icon.addEventListener("click", function () {
  if (this.classList.contains("fa-bars")) {
    this.classList = "fas fa-times menu__icon";
    menu.style.left = 0;
  } else {
    this.classList = "fas fa-bars menu__icon";
    menu.style.left = "-220px";
  }
});
