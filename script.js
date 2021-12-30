const showPassIcon = document.getElementById("showPass");
const hidePassIcon = document.getElementById("hidePass");

showPassIcon.addEventListener("click", showPassword);

function showPassword() {
    console.log("YEEEE");
    if(showPassIcon.style.visibility == "hidden") {
        console.log("show");
        showPassIcon.style.visibility = "visible";
        hidePassIcon.style.visibility = "hidden";
    }
}

hidePassIcon.addEventListener("click", hidePassword);

function hidePassword() {
    console.log("hideeee");
    if(hidePassIcon.style.visibility == "hidden") {
        hidePassIcon.style.display = "visible";
        showPassIcon.style.visibility = "hidden";
    }  
}