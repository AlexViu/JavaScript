'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//esquema
let librosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    img: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    }
});

//modelo
let Libro = mongoose.model('libros', librosSchema);

let buscarTodos = () => {
    //busqueda con find para cargar todos los libros
    Libro.find().then(resultado => {
        representaLibros(resultado);
    }).catch(error => {
        console.log("ERROR en find");
    });
}

//cargar los libros pasados como parámetro
const representaLibros = (books => {
    let cadenaDOM = "";
    books.forEach(book => {
        cadenaDOM +=
            `<div>
                <x-box vertical>
                    <img src="./images/${book.img}" height="170" width="108">
                    <x-label><strong>${book.title}</strong></x-label>
                    <x-label>${book.author}</x-label>
                </x-box>
            </div>`;
    });
    document.getElementById("wrapper").innerHTML = cadenaDOM;
});

//escuchador del boton buscar libro por título
document.getElementById("btnBuscar").addEventListener('click', () => {
    let txtBuscar = document.getElementById("txtBuscar").value;
    if (txtBuscar == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //buscamos el libro o libros
        Libro.find({ title: { $regex: '.*' + txtBuscar + '.*' } }).then(resultado => {
            console.log(resultado);
            //creamos el DOM para esos libros
            representaLibros(resultado);
        }).catch(error => {
            console.log("ERROR al buscar por título");
        });
    }
});

//escuchador del boton buscar libro por autor
document.getElementById("btnBuscarAutor").addEventListener('click', () => {
    let txtBuscarAutor = document.getElementById("txtBuscarAutor").value;
    if (txtBuscarAutor == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //buscamos el libro o libros
        Libro.find({ author: { $regex: '.*' + txtBuscarAutor + '.*' } }).then(resultado => {
            console.log(resultado);
            //creamos el DOM para esos libros
            representaLibros(resultado);
        }).catch(error => {
            console.log("ERROR al buscar por título");
        });
    }
});

//escuchador del boton nuevo libro
document.getElementById("btnNuevoLibro").addEventListener('click', () => {
    let txtNuevoTitulo = document.getElementById("txtNuevotitulo").value;
    let txtNuevoAutor = document.getElementById("txtNuevoAutor").value;
    let txtNuevaImagen = document.getElementById("txtNuevaImagen").value;
    if (txtNuevoTitulo == "" || txtNuevoAutor == "" || txtNuevaImagen == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //Insertamos el libro
        let libro = new Libro({
            title: txtNuevoTitulo,
            author: txtNuevoAutor,
            img: txtNuevaImagen
        });
        libro.save().then(resultado => {
            let notification = document.querySelector("#notification");
            notification.innerHTML = "Libro Añadido";
            notification.opened = true;
            buscarTodos();
        }).catch(error => {
            let notification = document.querySelector("#notification");
            notification.innerHTML = "NO se ha podido añadir el libro";
            notification.opened = true;
        });
    }
});


//escuchador del boton buscar todos
document.getElementById("btnTodos").addEventListener('click', () => {
    buscarTodos();
});

//borrar libro
document.getElementById("btnBorrarLibro").addEventListener('click', () => {
    let txtBorrar = document.getElementById("txtBorrar").value;
    Libro.remove({title:txtBorrar}).then(result=>{
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Libro Borrado";
        notification.opened = true;
        }).catch(error=>{
            let notification = document.querySelector("#notification");
            notification.innerHTML = "NO se ha podido borrar el libro";
            notification.opened = true;
        });
    buscarTodos();
})

//llamo a la función buscar todos para que
//se carguen todos los libros inicialmente
buscarTodos();