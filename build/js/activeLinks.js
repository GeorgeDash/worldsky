document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#main-nav a');
    const buttons = document.querySelectorAll('#steps button');

    links.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove('active-link'));

            // Add 'active' class to the clicked link
            this.classList.add('active-link');
        });
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active-btn'));
            
            // Add active class to the clicked button
            this.classList.add('active-btn');
        });
    });
});
