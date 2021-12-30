const showPassIcon = document.getElementById("showPass");
const hidePassIcon = document.getElementById("hidePass");

hidePassIcon.addEventListener("click", showPassword);

function showPassword() {
    console.log("show");
        showPassIcon.style.visibility = "visible";
        hidePassIcon.style.visibility = "hidden";
}

showPassIcon.addEventListener("click", hidePassword);

function hidePassword() {
    console.log("hideeee");
        hidePassIcon.style.visibility = "visible";
        showPassIcon.style.visibility = "hidden";
}