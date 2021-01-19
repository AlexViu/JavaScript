const fs = require('fs');

let btnFirstClient = document.getElementById('btnFirstClient');
let btnPrevious = document.getElementById('btnPrevious');
let btnNext = document.getElementById('btnNext');
let btnLatestClient = document.getElementById('btnLatestClient');
let btnRemove = document.getElementById('btnRemove');
let btnInsert = document.getElementById('btnInsert');
let btnUpdate = document.getElementById('btnUpdate');

let clients = new Array();
let position = 0;

let fichero = fs.readFileSync('./clientes.json');

clients = JSON.parse(fichero);

let mostrarCliente = () => {
    document.getElementById('dni').value = clients[position].dni;
    document.getElementById("name").value = clients[position].Name;
    document.getElementById("telephone").value = clients[position].telephone;
}

btnFirstClient.addEventListener('click', () => {
        position = 0;
        mostrarCliente();
})

btnPrevious.addEventListener('click', () => {
    if (position > 0) {
        position = position - 1;
        mostrarCliente();
    }
})

btnNext.addEventListener('click', () => {
    if(position < clients.length-1){
        position = position + 1;
        mostrarCliente();
    }
})

btnLatestClient.addEventListener('click', () => {
    position = clients.length - 1;
    mostrarCliente();
})
