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
            trim: true,
        }
    });

//modelo
let Lotr = mongoose.model('libros', lotrSchema);

let buscarTodos = () => {
    //busqueda con find para cargar todas las peliculas
    Lotr.find().then(resultado => {
        representaLotr(resultado);
    }).catch(error => {
        console.log("ERROR en find");
    });
}

//cargar las peliculas pasados como parámetro
const representaLotr = (lotrs => {
    let cadenaDOM = "";
    lotrs.forEach(lord => {
        cadenaDOM +=
            `<div>
                <x-box vertical>
                    <x-label><strong>${lord.title}</strong></x-label>
                    <img src="./images/${lord.img}" height="170" width="108">
                    <x-label>${lord.author}</x-label>
                    <x-label>${lord.duration}</x-label>
                </x-box>
            </div>`;
    });
    document.getElementById("wrapper").innerHTML = cadenaDOM;
    let spin = document.getElementById("spin");
    spin.style.display="none";
});

//escuchador del boton buscar pelicula por título
document.getElementById("btnBuscar").addEventListener('click', () => {
    let txtBuscar = document.getElementById("txtBuscar").value;
    if (txtBuscar == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //buscamos la pelicula o las peliculas
        Lotr.find({ title: { $regex: '.*' + txtBuscar + '.*' } }).then(resultado => {
            console.log(resultado);
            //creamos el DOM para esas peliculas
            representaLotr(resultado);
        }).catch(error => {
            console.log("ERROR al buscar por título");
        });
    }
});

//escuchador del boton buscar pelicula por autor
document.getElementById("btnBuscarAutor").addEventListener('click', () => {
    let txtBuscarAutor = document.getElementById("txtBuscarAutor").value;
    if (txtBuscarAutor == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //buscamos el libro o libros
        Lotr.find({ author: { $regex: '.*' + txtBuscarAutor + '.*' } }).then(resultado => {
            console.log(resultado);
            //creamos el DOM para esos libros
            representaLotr(resultado);
        }).catch(error => {
            console.log("ERROR al buscar por título");
        });
    }
});

//escuchador del boton buscar pelicula por duracion
document.getElementById("btnBuscarDuracion").addEventListener('click', () => {
    let txtBuscarDuracion = document.getElementById("txtBuscarDuracion").value;
    if (txtBuscarDuracion == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //buscamos el libro o libros
        Lotr.find({ duration: { $regex: '.*' + txtBuscarDuracion + '.*' } }).then(resultado => {
            console.log(resultado);
            //creamos el DOM para esos libros
            representaLotr(resultado);
        }).catch(error => {
            console.log("ERROR al buscar por título");
        });
    }
});

//escuchador del boton nueva pelicula
document.getElementById("btnNuevaPelicula").addEventListener('click', () => {
    let txtNuevoTitulo = document.getElementById("txtNuevotitulo").value;
    let txtNuevoAutor = document.getElementById("txtNuevoAutor").value;
    let txtNuevaImagen = document.getElementById("txtNuevaImagen").value;
    let txtNuevaDuration = document.getElementById("txtNuevaDuration").value;
    if (txtNuevoTitulo == "" || txtNuevoAutor == "" || txtNuevaImagen == "" || txtNuevaDuration == "") {
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Debe escribir algo";
        notification.opened = true;
    } else {
        //Insertamos la pelicula
        let pelicula = new Lotr({
            title: txtNuevoTitulo,
            author: txtNuevoAutor,
            duration: txtNuevaDuration,
            img: txtNuevaImagen
        });
        pelicula.save().then(resultado => {
            let notification = document.querySelector("#notification");
            notification.innerHTML = "Pelicula añadida";
            notification.opened = true;
            buscarTodos();
        }).catch(error => {
            let notification = document.querySelector("#notification");
            notification.innerHTML = "NO se ha podido añadir la pelicula";
            notification.opened = true;
        });
    }
});


//escuchador del boton buscar todos
document.getElementById("btnTodos").addEventListener('click', () => {
    buscarTodos();
});

//borrar pelicula
document.getElementById("btnBorrarLibro").addEventListener('click', () => {
    let txtBorrar = document.getElementById("txtBorrar").value;
    Lotr.remove({title:txtBorrar}).then(result=>{
        let notification = document.querySelector("#notification");
        notification.innerHTML = "Pelicula Borrada";
        notification.opened = true;
        }).catch(error=>{
            let notification = document.querySelector("#notification");
            notification.innerHTML = "NO se ha podido borrar la pelicula";
            notification.opened = true;
        });
    buscarTodos();
})

//llamo a la función buscar todos para que
//se carguen todos los libros inicialmente
buscarTodos();