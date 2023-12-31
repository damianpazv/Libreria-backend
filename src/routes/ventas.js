const { Router } = require("express");
const { mostrarVenta, crearVenta, editarVenta, eliminarVenta, mostrarImporteTotalVentas, mostrarVentas } = require("../controllers/ventaCRUD");

const router_ventas=Router();

// endpoints de ventas

router_ventas.get("/", mostrarVentas)

router_ventas.get("/total", mostrarImporteTotalVentas)

router_ventas.post("/",crearVenta)

router_ventas.put("/", editarVenta)

router_ventas.delete("/:id",eliminarVenta)

module.exports = router_ventas;
