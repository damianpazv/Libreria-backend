const { Schema, model} = require("mongoose");

const ventaSchema=Schema(
    {
detalle:{ type: Array,
          required:true,
        },
total:{ type: Number,
         required:true,
       },
fecha:{ type: String,
            required:true,
          },   
               
});

module.exports=model("Venta",ventaSchema);