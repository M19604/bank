var pin = document.getElementById("pin");
pin.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        login(pin.value);
    }
})
document.getElementById("loginBTN").addEventListener("click", e => {
    login(pin.value);
})

function login(code) {
    if (code in clientData) {
        connect(code);
        document.getElementById("login").style.display = "none";
    } else {
        pin.value = "";
        document.getElementById("loginError").textContent = "Invalid PIN.";
        setTimeout(function() {
            document.getElementById("loginError").textContent = "";
        }, 3000)
    }
}
