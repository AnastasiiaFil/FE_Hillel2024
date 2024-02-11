// Defining a named function for the click event handler
function toggleAccordion() {
    var content = this.nextElementSibling;

    // Toggle the 'active' class for the accordion button
    this.classList.toggle('active');

    // Toggle the display of content (panels)
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// Getting all accordion buttons
var accBtns = document.querySelectorAll('.accordion-btn');

// Attach a click event handler for each accordion button
accBtns.forEach(function (btn) {
    btn.addEventListener('click', toggleAccordion);
});