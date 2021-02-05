const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization,noauth');
    next();
});

app.get('/', (req, res) => {
    res.send("Node Server is running.")
})

const mongoose = require('mongoose');// database initialization

//database access configuration
mongoose.connect('mongodb+srv://groupe3:sms_1SJgr0up3@cluster0.m0abj.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.listen(3000);