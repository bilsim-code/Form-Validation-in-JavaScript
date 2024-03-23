let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById('form');
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(Name.value === "" || Name.value == null) {
        e.preventDefault();
        nameError.innerHTML = "Name is required";
    }

    if(Name.value.trim() === "") {
        e.preventDefault();
        nameError.innerHTML = "Name is required";
    }

    if(!email.value.match(emailFormat)) {
        e.preventDefault();
        emailError.innerHTML = "Invalid Format.Try again";
    }

    if(password.value.length < 8 || password.value.length > 20) {
        e.preventDefault();
        passwordError.innerHTML = "Invalid password.Try again"
    }

    
})