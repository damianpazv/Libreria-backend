//importar ibrerias 
const express = require('express');
const router = require('./routes');
const dbconection = require('./database/config');
const cors=require('cors');
const { notFoundHandler } = require('./middlewares/notFound');
const { errorHandler } = require('./middlewares/error');
require("dotenv").config();

//crear app
const app = express();

const PORT=process.env.PORT || 4040; 

//conectar base de datos
dbconection();

//middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//rutas
app.use("/api",router);

app.use(notFoundHandler);
app.use(errorHandler);

//inicializar servidor
app.listen(PORT,()=>{console.log(`server initialized in port ${PORT}`  )});






