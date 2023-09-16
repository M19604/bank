function connect(pin) {
    document.getElementById("main").style.display = "block";
    document.getElementById("balance").textContent = "$" + clientData[pin].toLocaleString();
    document.getElementById("name").textContent = clientNames[pin];
}
