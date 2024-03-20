document.addEventListener('DOMContentLoaded', function () {
    const hamburgers = document.querySelectorAll('.burger-menu');

    hamburgers.forEach(function (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});