var feedbackDialog = document.querySelector(".feedback-dialog");
var contactButton = document.querySelector(".contacts .button-contact");
var closeButton = document.querySelector(".close-button");
var form = document.querySelector(".feedback-form");
var username = form.querySelector("[name=username]");
var email = form.querySelector("[name=email");
var letter = form.querySelector("[name=letter]");

var isLocalStorageSupport = true;
var usernameValue = ""
var emailValue = ""

try {
    usernameValue = localStorage.getItem("username");
    emailValue = localStorage.getItem("email");
}
catch (error) {
    isLocalStorageSupport = false;
}

contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    feedbackDialog.classList.add("modal-show");
    feedbackDialog.classList.add("modal-animation");

    if (usernameValue) {
        username.value = usernameValue;
        emailValue.value = emailValue;
        letter.focus();
    } else {
        username.focus();
    }
});

closeButton.addEventListener("click", function (event) {
    feedbackDialog.classList.remove("modal-show");
    feedbackDialog.classList.remove("modal-error");
    feedbackDialog.classList.remove("modal-animation");

    username.classList.remove("red-field");
    email.classList.remove("red-field");
    letter.classList.remove("red-field");
});

form.addEventListener("submit", function (event) {
    username.classList.remove("red-field");
    email.classList.remove("red-field");
    letter.classList.remove("red-field");
    
    if(!username.value || !email.value || !letter.value) {
        event.preventDefault();
        feedbackDialog.classList.remove("modal-error");
        feedbackDialog.offsetWidth = feedbackDialog.offsetWidth
        feedbackDialog.classList.add("modal-error");
        
        if(!username.value) {
            username.classList.add("red-field");
        }
        if(!email.value) { 
            email.classList.add("red-field");
        }
        if(!letter.value) {
            letter.classList.add("red-field");
        }
    }
    else {
        if (isLocalStorageSupport) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (event) {
    var escKey = 27;
    if (event.keyCode === escKey) {
        if (feedbackDialog.classList.contains("modal-show")) {
            event.preventDefault();
            feedbackDialog.classList.remove("modal-show");
            feedbackDialog.classList.remove("modal-error");
            feedbackDialog.classList.remove("modal-animation");

            username.classList.remove("red-field");
            email.classList.remove("red-field");
            letter.classList.remove("red-field");
        }
    }
});
