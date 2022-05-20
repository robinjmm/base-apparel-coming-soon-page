const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const alertText = document.querySelector(".form__alert");
const alertIcon = document.querySelector(".form__icon");

function toggleAlert() {
    alertText.classList.add("visible");
    alertIcon.classList.add("visible");
}

function removeAlert() {
    alertText.classList.remove("visible");
    alertIcon.classList.remove("visible");
}

function emptyInput() {
    input.value = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "" || input.value === null) {
        toggleAlert();
    } else if (!input.value.match(pattern)) {
        toggleAlert();
        emptyInput();
    } else {
        emptyInput();
    }
})

input.addEventListener("click", function () {
    removeAlert();
})