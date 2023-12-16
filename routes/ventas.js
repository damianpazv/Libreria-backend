const { Router } = require("express");
const { mostrarVenta, crearVenta, editarVenta, eliminarVenta } = require("../controllers/ventaCRUD");




const router_ventas=Router();


// endpoints de producto
router_ventas.get("/", mostrarVenta)

router_ventas.post("/",crearVenta)

router_ventas.put("/", editarVenta)

router_ventas.delete("/:id",eliminarVenta)

module.exports = router_ventas;
