const { Router } = require("express");
const { crearProducto, mostrarProducto, editarProducto, eliminarProducto } = require("../controllers/productoCRUD");
const { check } = require("express-validator");


const router_productos=Router();


// endpoints de producto
router_productos.get("/", mostrarProducto)

router_productos.post("/",
[
    check("nombre","el nombre es obligatorio").not().isEmpty(),
    check("precio","el precio es obligatorio").not().isEmpty(),
    check("cantidad","la cantidad es obligatoria").not().isEmpty(),
    check("codigo","el codigo es obligatorio").not().isEmpty()
    
]

,crearProducto)

router_productos.put("/", editarProducto)

router_productos.delete("/:id",eliminarProducto)



module.exports = router_productos;