const { Router } = require("express");
const router_productos = require("./productos");




const router=Router();



router.use("/productos",router_productos)



module.exports = router;