let celsius = document.getElementById("text1");
let kelvin = document.getElementById("text2");


let convertir = document.getElementById("button1");
let limpiar = document.getElementById("button2");

convertir.addEventListener('click', () => {
    let resultado =273.15 + parseFloat(celsius.value);
    kelvin.value = resultado;
    kelvin.disabled = true;
    
});

limpiar.addEventListener('click', () => {
    celsius.value = "";
    kelvin.value = "";
    kelvin.disabled = false;
});