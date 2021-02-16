const fs = require('fs');
// we load moongose
const mongoose=require('mongoose');
// we set the default promise engine to javascript
// this is necessary because mongo supports different types of promises

let fichero = fs.readFileSync('./books.json');
let libros = JSON.parse(fichero);


mongoose.Promise=global.Promise;
// connect with the contacts DB
const url='mongodb://localhost:27017/lotr'
mongoose.connect(url, {
useNewUrlParser:true,
useCreateIndex: true,
useUnifiedTopology:true
}).then(()=>{console.log('connection succesfull')}).catch((err)=>{
    console.log('connection error')
});

//scheme
let lotrSchema=new mongoose.Schema({
    title:String,
    author:String,
    duration:String,
    img:String
    });


//esquem
lotrSchema= new mongoose.Schema({
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

let Libro = mongoose.model('libros',lotrSchema);
let p1;
libros.forEach(book => {
    let libro = new Libro();
    libro.title = book.title;
    libro.author = book.author;
    libro.duration = book.duration;
    libro.img = book.img;
    p1=libro.save().then(resultado => {
        console.log("Book is added:", resultado);
    }).catch(error=>{
        console.log("ERROR adding book:",error);
        
        });
});
    