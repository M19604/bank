function sendTransfer() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxQxAtSfveHFGC9om1iAXzCAvbCttJ6ok0iZtA5gsuQ5rBQeN6BQGnD40kIoEXb5rWp/exec';
    const form = document.forms["Bank Tracking"];
    fetch(scriptURL, { method: 'POST', body: new FormData(form) });
}

function sendAccount() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyd73kwkcEO989KkyQsSba3agWKByg7UBgCbKy0KKVOVEjYDRpnpagyY-soJzzkIrfk/exec";
    const form = document.forms["Account Tracking"];
    fetch(scriptURL, { method: "POST", body : new FormData(form) });
}
