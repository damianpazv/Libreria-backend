
const Venta = require("../model/venta");



const crearVenta= async (req, res,next)=>{

try {
await Venta.create(req.body); 
res.status(200).json({ok:true, mge:"venta creada correctamente"})
    
} 
catch (error) {
    next(error);
}    
}

const mostrarVentas= async(req, res,next)=>{

    try {
        const ventas= await Venta.find();
        res.status(200).json({ok:true, ventas});    
        } 
        catch (error) {
            next(error);
        }  
}

const mostrarImporteTotalVentas= async(req, res,next)=>{

    try {
        const totalVentas= await Venta.find();
        const sumaTotal = totalVentas.reduce((acumulador, objeto) => acumulador + objeto.total, 0);
        res.status(200).json({ok:true, sumaTotal});    
        } 
        catch (error) {
            next(error);
        }  
}

const editarVenta=async (req, res,next)=>{
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
            next(error);
        }  
}

const eliminarVenta=async(req, res,next)=>{

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
            next(error);
        }  
}


module.exports={crearVenta,mostrarVentas,editarVenta,eliminarVenta,mostrarImporteTotalVentas}