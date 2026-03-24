document.addEventListener("DOMContentLoaded", function() {

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    // ALWAYS stop form first
    event.preventDefault();

let inputValue = document.getElementById("inputField").value;

let pattern = /^[a-zA-Z0-9]+$/;

if (pattern.test(inputValue)) {

// Valid input
    alert("Form submitted successfully!");

} else {

// Invalid input
    alert("Error: Only letters and numbers allowed.");

}

});

});