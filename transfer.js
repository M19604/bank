var transferBTN = document.getElementById("transferSubmit");
var transfer = document.getElementById("transfer");
var amount = document.getElementById("amount");
var transferErrorElement = document.getElementById("transferError");
var recipient = document.getElementById("recipient");
var recipientBalance = document.getElementById("recipientBalance");
var sender = document.getElementById("sender");
var senderBalance = document.getElementById("senderBalance");
transferBTN.addEventListener("click", e => {
    submitTransfer();
})
amount.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        submitTransfer();
    }
})
transfer.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        submitTransfer();
    }
})
function submitTransfer() {
    if (Object.values(clientNames).includes(transfer.value.trim()) && transfer.value.trim() !== document.getElementById("name").textContent.trim()) {
        if (Object.values(clientData)[Object.values(clientNames).indexOf(document.getElementById("name").textContent)] >= amount.valueAsNumber) {
            sender.value = Object.getOwnPropertyNames(clientData)[Object.values(clientNames).indexOf(document.getElementById("name").textContent)];
            senderBalance.value = Object.values(clientData)[Object.values(clientNames).indexOf(document.getElementById("name").textContent)] - parseInt(amount.value.replace("e", "").replace("-", ""));
            recipient.value = Object.getOwnPropertyNames(clientData)[Object.values(clientNames).indexOf(transfer.value.trim())];
            recipientBalance.value = Object.values(clientData)[Object.values(clientNames).indexOf(transfer.value.trim())] + parseInt(amount.value.replace("e", "").replace("-", ""));
            sendTransfer();
            setTimeout(function() {
                transferErrorElement.textContent = "";
                transfer.value = "";
                amount.value = "";
                recipient.value = "";
                recipientBalance.value = "";
                sender.value = "";
                senderBalance.value = "";
            }, 500)
            alert("Money will be transferred soon.");
        } else {
            transferError("Insufficient funds.");
        }
    } else {
        transferError("Invalid name.");
    }
}
function transferError(text) {
    setTimeout(function() {
        transferErrorElement.textContent = "";
    }, 3000)
}
