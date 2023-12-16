const { validationResult } = require("express-validator");
const Producto = require("../model/producto");

const crearProducto= async (req, res)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.mapped(),});
}

try {
await Producto.create(req.body); 
res.status(200).json({ok:true, mge:"producto creado correctamente"})
    
} 
catch (error) {
     res.status(500).json({errors:error,msg:"contactese con el administrador"});
}    
}

const mostrarProducto= async(req, res)=>{

    try {
        const productos= await Producto.find();
        res.status(200).json({ok:true, productos})    
        } 
        catch (error) {
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}

const editarProducto=async (req, res)=>{
    try {
        const productoEdit= await Producto.findById(req.body._id);

        if(!productoEdit)
        {
            return res.status(404).json({ok:false, mge:"no existe producto con ese id"});
        }

await Producto.findByIdAndUpdate(req.body._id, req.body)

res.status(200).json({ok:true, mge:"producto editado"})    
        } 
        catch (error) {
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}

const eliminarProducto=async(req, res)=>{

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
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}


module.exports={crearProducto,mostrarProducto,editarProducto,eliminarProducto}