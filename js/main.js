// Get the elements to work with
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add click event listener to the burger
burgerMenu.addEventListener('click', function () {
    // Toggle the class to show or hide the menu
    navMenu.classList.toggle('show');
});

