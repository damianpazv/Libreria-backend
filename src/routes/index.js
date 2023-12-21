const { Router } = require("express");
const router_productos = require("./productos");
const router_ventas = require("./ventas");
const router_usuarios = require("./usuarios");

const router=Router();

//endpoints
router.use("/productos",router_productos);

router.use("/ventas",router_ventas);

router.use("/usuarios",router_usuarios);

module.exports = router;