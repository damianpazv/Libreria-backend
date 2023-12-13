//importar ibrerias 
const express = require('express')
require("dotenv").config();

//crear app
const app = express();

const PORT=process.env.PORT || 4040; 

//inicializar servidor
app.listen(PORT,()=>{console.log(`server initialized in port ${PORT}`  )});


//endpoints
app.get("/", (req, res)=>{
    res.send("peticion get recibida")
})

app.post("/", (req, res)=>{
    res.send("peticion post recibida")
})

app.put("/", (req, res)=>{
    res.send("peticion put recibida")
})

app.delete("/", (req, res)=>{
    res.json({mensage:"peticion delete recibida"})
})