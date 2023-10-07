document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade");
    const slideElements = document.querySelectorAll(".slide");

    function checkFadeSlide() {
        fadeElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = 1;
            }
        });

        slideElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.transform = "translateY(0)";
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

checkFadeSlide();

    
    window.addEventListener("scroll", checkFadeSlide);
});

const modeToggle = document.getElementById('mode-toggle');



document.addEventListener("DOMContentLoaded", function () {
    
});
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    
    darkModeToggle.addEventListener('change', () => {
        if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
        } else {
        disableDarkMode();
        }
    });

    
    function enableDarkMode() {
        body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    }


    function disableDarkMode() {
        body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}
    


function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (username === "") {
        alert("Please enter a username.");
        return false;
    }

    if (password === "") {
        alert("Please enter a password.");
        return false;
    }

    if (email === "") {
        alert("Please enter an email address.");
        return false;
    }

    
    if (phone === "") {
        alert("Please enter a phone number.");
        return false;
    }

    return true;
}


var registrationForm = document.getElementById("registrationForm");
registrationForm.onsubmit = function (){
    return validateForm();
};
