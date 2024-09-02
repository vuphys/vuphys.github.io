// Simple form submission alert for demo purposes
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('body').addClass('scrolled');
    } else {
        $('body').removeClass('scrolled');
    }
});