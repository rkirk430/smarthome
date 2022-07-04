const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

//Add Event Listener for a click to access the Nav Bar Menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
})