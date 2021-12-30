const showPassIcon = document.getElementById("showPass");
const hidePassIcon = document.getElementById("hidePass");
const passInput = document.getElementById("password");

hidePassIcon.addEventListener("click", showPassword);

function showPassword() {
        showPassIcon.style.visibility = "visible";
        hidePassIcon.style.visibility = "hidden";
        passInput.type = "text";

}


showPassIcon.addEventListener("click", hidePassword);

function hidePassword() {
        hidePassIcon.style.visibility = "visible";
        showPassIcon.style.visibility = "hidden";
        passInput.type = "password";

}