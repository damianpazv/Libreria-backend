//importar ibrerias 
const express = require('express');
const router = require('./routes');
require("dotenv").config();

//crear app
const app = express();

const PORT=process.env.PORT || 4040; 

//Rutas



//middlewares


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",router);

//inicializar servidor
app.listen(PORT,()=>{console.log(`server initialized in port ${PORT}`  )});


//endpoints



