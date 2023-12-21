const { validationResult } = require("express-validator");
const Producto = require("../model/producto");

const crearProducto= async (req, res,next)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.mapped(),});
}

try {
await Producto.create(req.body); 
res.status(200).json({ok:true, mge:"producto creado correctamente"})
    
} 
catch (error) {
    next(error); 
}    
}

const mostrarProductos= async(req, res,next)=>{

    try {
        const productos= await Producto.find();
        if(productos.length===0){
            return res.status(200).json({ok:true, mge:"no hay productos"})  
        }
        res.status(200).json({ok:true, productos})    
        } 
        catch (error) {
             next(error);    
        }  
}

const mostrarUnProducto=async (req, res,next)=>{
    try {
        const producto= await Producto.find({codigo:req.body.codigo});

        if(!producto)
        {
            return res.status(200).json({ok:true, mge:"no existe producto con ese codigo"});
        }

        res.status(200).json({ok:true, producto})   

  
        } 
        catch (error) {
            next(error); 
        }  
}


const editarProducto=async (req, res,next)=>{
    try {
        const productoEdit= await Producto.findById(req.body._id);

        if(!productoEdit)
        {
            return res.status(200).json({ok:true, mge:"no existe producto con ese id"});
        }

await Producto.findByIdAndUpdate(req.body._id, req.body)

res.status(200).json({ok:true, mge:"producto editado"})    
        } 
        catch (error) {
            next(error); 
        }  
}

const eliminarProducto=async(req, res,next)=>{

    try {
        const productoDelete= await Producto.findById(req.params.id);

        if(!productoDelete)
        {
            return res.status(404).json({ok:false, mge:"no existe producto con ese id"});
        }

await Producto.findByIdAndDelete(req.params.id);

res.status(200).json({ok:true, mge:"producto eliminado"})    
        } 
        catch (error) {
            next(error); 
        }  
}


module.exports={crearProducto,mostrarProductos,editarProducto,eliminarProducto,mostrarUnProducto}