const menu_button = document.querySelector(".menu-button");

back_button = document.querySelector(".back-button");


menu = document.querySelector("nav");

menu_button.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
})

back_button.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
})