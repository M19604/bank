window.alert = function(text) {
    document.getElementById("alert").style.display = "flex";
    document.getElementById("text").textContent = text;
}
document.getElementById("closeBTN").addEventListener("click", e => {
    document.getElementById("alert").style.display = "none";
})
