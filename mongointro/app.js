// we load moongose
const mongoose=require('mongoose');
// we set the default promise engine to javascript
// this is necessary because mongo supports different types of promises
mongoose.Promise=global.Promise;
// connect with the contacts DB
const url='mongodb+srv://root:PBVbGqYyiNI3VHjg@cluster0.uqgat.mongodb.net/Contacts?retryWrites=true&w=majority'
mongoose.connect('mongodb: // localhost: 27017 / contacts', {
useNewUrlParser:true,
useCreateIndex: true,
useUnifiedTopology:true
}).then(()=>{console.log('connection succesfull')}).catch((err)=>{
    console.log('connection error')
});
//scheme
let contactSchema=new mongoose.Schema({
    Name:String,
    telephone:String,
    age:Number
    });

    // add documents
// first we create the contact
let contact1=new Contact({
    name:"Boris",
    telephone:"946112230",
    age:49
    });

//esquem
let contactSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        telephone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /^\d{9}$/
        },
        age: {
            type: Number,
            min: 18,
            max: 120
        }
    });

    // add documents
// first we create the contact
let contact1=new Contact({
    name:"Boris",
    telephone:"946112230",
    age:49
    });
    // we will use a save promise to save it to the database
    let  p1=contact1.save().then(result=>{
    console.log("Contact added:",result);
    }).catch(error=>{
    console.log("ERROR adding contact:",error);
    
    });
    
    // we must wait for all promises to finish, since they are asynchronous
    // to close the connection to the database, Promise.all allows to query the // promises passed as a parameter to see if they have finished:
    Promise.all([p1]).then(values=>{
    mongoose.connection.close();
    });

    