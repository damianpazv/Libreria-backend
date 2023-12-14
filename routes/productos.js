const { Router } = require("express");

const router_productos=Router();


// endpoints de producto
router_productos.get("/", (req, res)=>{
    res.json({success:true, response:"productos"})
})

router_productos.post("/", (req, res)=>{
    const one=req.body;
    res.json({success:true, response:one})
})

router_productos.put("/", (req, res)=>{
    res.json({success:true, response:"productos"})
})

router_productos.delete("/", (req, res)=>{
    res.json({success:true, response:"productos"})
})



module.exports = router_productos;