function sendTransfer() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxQxAtSfveHFGC9om1iAXzCAvbCttJ6ok0iZtA5gsuQ5rBQeN6BQGnD40kIoEXb5rWp/exec';
    const form = document.forms["Bank Tracking"];
    fetch(scriptURL, { method: 'POST', body: new FormData(form) });
    // LOG TRANSFER
    const scriptURL2 = "https://script.google.com/macros/s/AKfycbyWwtOicigudMa_WXq0z7OpGu16knVtoDzYYCwcMn7pfdIwvrAeEKxlJeVHHd8LU9NU/exec";
    fetch(scriptURL2, { method:"POST", body: new FormData(form) });
    // LOG ADD
    const scriptURL1 = "https://script.google.com/macros/s/AKfycbyyMH_jQ5Z8B098nRoW2c9xc7p6XETMdOf-uXhpV4hgGohti874GtwstZR0Rbx_YYxU/exec";
    fetch(scriptURL1, { method:"POST", body: new FormData(form) });
}

function sendAccount() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyd73kwkcEO989KkyQsSba3agWKByg7UBgCbKy0KKVOVEjYDRpnpagyY-soJzzkIrfk/exec";
    const form = document.forms["Account Tracking"];
    fetch(scriptURL, { method: "POST", body : new FormData(form) });
}
