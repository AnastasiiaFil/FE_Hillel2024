document.addEventListener('DOMContentLoaded', function () {
    const hamburgers = document.querySelectorAll('.burger-menu');

    hamburgers.forEach(function (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            document.querySelector('html').classList.toggle('no-scroll');
        });
    });
});

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var footerPosition = document.querySelector('.footer').getBoundingClientRect().top;
    var buttons = document.querySelectorAll('.btn-wrap button');

    if (window.innerWidth < 480 && footerPosition <= window.innerHeight) {
        buttons.forEach(function (button) {
            button.classList.add('hide');
        });
    } else {
        buttons.forEach(function (button) {
            button.classList.remove('hide');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.toggle-button');
    var buttons = document.querySelectorAll('.btn-wrap button');
    var isButtonsVisible = false;

    toggleButton.addEventListener('click', function () {
        if (!isButtonsVisible) {
            buttons.forEach(function (button) {
                button.classList.remove('hide');
            });
            isButtonsVisible = true;
        } else {
            buttons.forEach(function (button) {
                button.classList.add('hide');
            });
            isButtonsVisible = false;
        }
    });
});

document.querySelector('.toggle-button').addEventListener('click', function () {
    this.classList.toggle('active');
});