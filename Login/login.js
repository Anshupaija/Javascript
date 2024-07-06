function password() {

    let showPassword = document.getElementById("password");

    if (showPassword.type === "password") {
        showPassword.type = "text";
    }
    else {
        showPassword.type = "password";
    }
}

