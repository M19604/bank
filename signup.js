var btn = document.getElementById("signup");
btn.addEventListener("click", e => {
    document.getElementById("signupPage").style.display = "flex";
    document.getElementById("login").style.display = "none";
})
var createBTN = document.getElementById("createBTN");
var nameElement = document.getElementById("newName");
var emailElement = document.getElementById("newEmail");
var errorElement = document.getElementById("signupError");
createBTN.addEventListener("click", e => {
    if (nameElement.value === "" || emailElement.value === "") {
        errorElement.textContent = "Invalid information.";
        setTimeout(function() {
            errorElement.textContent = "";
        }, 3000)
    } else {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var interval = setInterval(function() {
            var tryPin = characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)];
            alert(tryPin);
            if (Object.values(clientData).includes(tryPin)) {

            } else {
                clearInterval(interval);
                document.getElementById("newPin").value = tryPin;
                sendAccount();
                nameElement.value = "";
                emailElement.value = "";
            }
        })
    }
})
