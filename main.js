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

//Show / Hide FAQs

const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('open');
        //Change from a + icon and once it is toggle('open') change to a - icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})

//Add background style to NavBar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})