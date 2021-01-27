let num = document.getElementById("nume");
let dayname = document.getElementById("dia");

let limpiar = document.getElementById("limpiar");
let calcular = document.getElementById("calcular");
let salir = document.getElementById("salir");

const electron = require('electron');
const path = require('path');
const remote = electron.remote;
dayname.disabled = true;

salir.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
})

limpiar.addEventListener('click', () => {

    num.value = "";
    dayname.value = ""; 
 })

 calcular.addEventListener('click', () => {

    if(parseFloat(num.value) == 1) {
        dayname.value = "Lunes";
    }
    if(parseFloat(num.value) == 2) {
        dayname.value = "Martes";
    }
    if(parseFloat(num.value) == 3) {
        dayname.value = "Miercoles";
    }
    if(parseFloat(num.value) == 4) {
        dayname.value = "Jueves";
    }
    if(parseFloat(num.value) == 5) {
        dayname.value = "Viernes";
    }
    if(parseFloat(num.value) == 6) {
        dayname.value = "Sabado";
    }
    if(parseFloat(num.value) == 7) {
        dayname.value = "Domingo";
    }
 })