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


app.listen(3000);