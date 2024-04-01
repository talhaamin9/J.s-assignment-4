let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Shekhupura", "Kashmir"]

// clear output button 
function clearOutput() {
    document.getElementById("output").innerHTML = " "
}

// simple alert 
function simpleAlert() {
    alert("alert button is clicked")
}

// print my name 
function printName() {

    var myName = document.getElementById("inputbox").value;
    if (myName === "") {
        alert("Please Type your name in input field")
        return;
    }
    document.getElementById("output").innerHTML = myName;
}

// print all cities 
function printAllCities() {
    document.getElementById("output").innerHTML = " "

    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + "<br />"

    }
}

// add city in list 
function addCity() {

    // alert("Enter Your City Name in Input Field");
    let newCity = document.getElementById("inputbox").value;
    cities.push(newCity)

    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br />"
        document.getElementById("output").innerHTML =  cities[i]
        document.getElementById("statement").innerHTML =  cities+newCity
    }
}

var myName = document.getElementById("inputbox").value;
// generate table 
function generateTable() {

    var tableNumber = document.getElementById("inputbox").value;

    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> `
    for (let i = 1; i < 11; i++) {
        let table = tableNumber + " * " + i + " = " + tableNumber * i + "<br />"
        document.getElementById("output").innerHTML += table;
    }
}
// input btn for clear statement 
document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = " "
}
// clear input box 
document.getElementById("clear").onclick = function () {
    document.getElementById("inputbox").innerHTML = " "
}