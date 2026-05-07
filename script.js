function registerUser() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful");
    window.location.href = "login.html";
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
    ) {
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
}

function logoutUser() {
    window.location.href = "login.html";
}

window.onload = function () {
    let userInfo = document.getElementById("userInfo");
    if (userInfo) {
        let name = localStorage.getItem("name");
        userInfo.innerText = "Welcome, " + name;
    }
};