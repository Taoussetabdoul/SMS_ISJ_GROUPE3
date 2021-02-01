const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const route = require('./routes/contact');
const app=express();



app.use(bodyParser.json());


app.use(route);

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization,noauth');
    next();
});

app.get('/', (req, res) => {
    res.send("Node Server is running.")
})

mongoose.connect('mongodb://localhost:27017/test', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => console.log('Connexion à MongoDB réussie !')).catch(() => console.log('Connexion à MongoDB échouée !'));
    

app.listen(3000);
