
const Venta = require("../model/venta");



const crearVenta= async (req, res)=>{

try {
await Venta.create(req.body); 
res.status(200).json({ok:true, mge:"venta creada correctamente"})
    
} 
catch (error) {
     res.status(500).json({errors:error,msg:"contactese con el administrador"});
}    
}

const mostrarVenta= async(req, res)=>{

    try {
        const ventas= await Venta.find();
        res.status(200).json({ok:true, ventas});    
        } 
        catch (error) {
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}

const editarVenta=async (req, res)=>{
    try {
        const ventaEdit= await Venta.findById(req.body._id);

        if(!ventaEdit)
        {
            return res.status(404).json({ok:false, mge:"no existe venta con ese id"});
        }

await Venta.findByIdAndUpdate(req.body._id, req.body)

res.status(200).json({ok:true, mge:"venta editada"})    
        } 
        catch (error) {
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}

const eliminarVenta=async(req, res)=>{

    try {
        const ventaDelete= await Venta.findById(req.params.id);

        if(!ventaDelete)
        {
            return res.status(404).json({ok:false, mge:"no existe venta con ese id"});
        }

await Venta.findByIdAndDelete(req.params.id);

res.status(200).json({ok:true, mge:"venta eliminada"})    
        } 
        catch (error) {
             res.status(500).json({errors:error,msg:"contactese con el administrador"});
        }  
}


module.exports={crearVenta,mostrarVenta,editarVenta,eliminarVenta}