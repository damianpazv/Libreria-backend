const { Schema, model} = require("mongoose");

const productoSchema=Schema(
    {
nombre:{ type: String,
          required:true,
        },
precio:{ type: Number,
         required:true,
       },
cantidad:{ type: Number,
            required:true,
          },   
codigo:{ type: Number,
          required:true,
          unique:true
        }                 
});

module.exports=model("Producto",productoSchema);