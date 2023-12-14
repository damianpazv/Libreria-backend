const { validationResult } = require("express-validator")

const crearProducto=(req, res)=>{
const {nombre,precio,cantidad}=req.body;

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.json({errors: errors.mapped(),});
}

    res.json({success:true, response:"producto creado correctamente"})
}

const mostrarProducto=(req, res)=>{
    res.json({success:true, response:"productos"})
}

const editarProducto=(req, res)=>{
    res.json({success:true, response:"productos"})
}

const eliminarProducto=(req, res)=>{
    res.json({success:true, response:"productos"})
}


module.exports={crearProducto,mostrarProducto,editarProducto,eliminarProducto}