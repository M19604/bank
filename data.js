const clientNames = {
    JWG90:"United States Government",
    LL5CW:"Daniel Benjamin",
    HORQD:"Devin Rogers",
    D4CST:"James Bradsher",
    J1309:"Adam Olszewski",
    O1512:"Luke Skutt",
    YHFUV:"Ava Stewart",
    JNAIF:"Ethan Dietz",
    G2260:"Gavin Trevino",
    O2130:"Logan Ridley",
    FIT5Z:"Racket 2.0 [BUS]",
    LOSER:"Foreign Nations"
}
const clientData = {

}
var serverURL1 = "";
var serverURL2 = "https://sheetdb.io/api/v1/c6fsu6g25zbol"; // usabankingserver1@gmail.com
var serverURL3 = "https://sheetdb.io/api/v1/dhfrn9eco3t9u"; // usabankingserver2@gmail.com
var serverURL4 = "";
var serverURL5 = "";
function updateData() {
fetch(serverURL1).then(response => {
console.log("Server 1 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
fetch(serverURL2).then(response => {
console.log("Server 2 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
fetch(serverURL2).then(response => {
console.log("Server 3 connected.");
return response.json();
}).then(data => {
for(let i = 0; i < Object.keys(clientNames).length; i++){
var x = Object.keys(clientNames)[i];
var y = data[0][x];
clientData[x] = y;
}
}).catch(err => {
setInterval(function() {
alert("We ran into an error! Please contact 012578@clioschools.net for support.");
})
});
});
});
}
updateData();
