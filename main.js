const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

//Add Event Listener for a click to access the Nav Bar Menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

//Add Event Listener for a click to close the Nav Bar Menu
closeBtn.addEventListener("click", () => {
    menu.style.display = 'none';  //Hides Open Nav Items after the click to close them
    menuBtn.style.display = 'inline-block'; //Displays Nav dropdown picture link after clicking 
    closeBtn.style.display = 'none'; // Removes close button from view
})