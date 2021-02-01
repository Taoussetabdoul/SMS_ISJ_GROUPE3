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


// "dev": "npm-run-all dev:*",
// "dev:watch": "nodemon --watch '*/**.ts' -e ts --exec tsc",
// "dev:run": "nodemon --watch dist/app.js --exec 'node dist/app.js'"