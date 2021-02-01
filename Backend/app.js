require('./config/passportConfig');

const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const passport=require('passport');

const userRoutes=require('./routes/user');


const app=express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});


app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send("Node Server is running.")
})

app.use('/user',userRoutes);


mongoose.connect('mongodb://localhost:27017/ISJMobility', {useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log("Connected to DB");
            app.listen(3000);
        })
        .catch(err => {
            console.log(err);   
        })