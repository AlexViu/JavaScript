'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/lotr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//esquema
let lotrSchema= new mongoose.Schema({
        title: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        img: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        }
    });

//modelo
let Lotr = mongoose.model('lotr', lotrSchema);

let buscarTodos = () => {
    //busqueda con find para cargar todas las peliculas
    Lotr.find().then(resultado => {
        representaLotr(resultado);
    }).catch(error => {
        console.log("ERROR en find");
    });
}

//cargar las peliculas pasados como parámetro
const representaLotr = (lords => {
    let cadenaDOM = "";
    lords.forEach(lord => {
        cadenaDOM +=
            `<div>
                <x-box vertical>
                    <img src="./images/${lord.img}" height="170" width="108">
                    <x-label><strong>${lord.title}</strong></x-label>
                    <x-label>${lord.author}</x-label>
                    <x-label>${lord.duration}</x-label>
                </x-box>
            </div>`;
    });
    document.getElementById("wrapper").innerHTML = cadenaDOM;
});
/*
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
//se carguen todos los libros inicialmente*/
buscarTodos();