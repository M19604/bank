window.onload = function() {
    var interval = setInterval(function() {
        if (Object.keys(clientData).length !== 0) {
            clearInterval(interval);
            for (let i = 0; i < Object.keys(clientData).length; i++) {
                var span = document.createElement("div");
                span.className = "span";
                var count = i / 2;
                if (count.toString().includes(".")) {
                    span.style.backgroundColor = "#f1f1f1";
                }
                var nameElement = document.createElement("span");
                nameElement.textContent = Object.values(clientNames)[i];
                var valueElement = document.createElement("span");
                valueElement.textContent = "$" + Object.values(clientData)[i].toLocaleString();
                nameElement.className = "nameElement";
                valueElement.className = "valueElement";
                document.body.appendChild(span);
                span.appendChild(nameElement);
                span.appendChild(valueElement);
            }
        }
    }, 100)
}
