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
let controlInsertar = false;

let fichero = fs.readFileSync('./clientes.json');

let updateFile = () => {
    fs.writeFileSync('./clientes.json', JSON.stringify(clients));
}

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

btnUpdate.addEventListener('click', () => {
    clients[position].dni = document.getElementById("dni").value;
    clients[position].Name = document.getElementById("name").value;
    clients[position].telephone = document.getElementById("telephone").value;
    updateFile();
})

btnRemove.addEventListener('click', () => {
    clients.splice(position, 1);
    updateFile();
    mostrarCliente();
})

btnInsert.addEventListener('click', () => {
    let cnuevo= {}
    if (!controlInsertar) {
        document.getElementById("dni").value = "";
        document.getElementById("name").value = "";
        document.getElementById("telephone").value = "";
        controlInsertar = true;

        btnInsert.classList.remove("btn-primary");
        btnInsert.classList.add(btn.negative);
    } else {
        cnuevo: document.getElementById("dni").value,
        document.getElementById("name").value,
        document.getElementById("telephone").value
    }
    clients.push(cnuevo);
    updateFile();
    
})