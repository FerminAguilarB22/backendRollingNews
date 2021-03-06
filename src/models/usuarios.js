import mongoose,{ Schema } from "mongoose";

const usuarioSchema = new Schema({
    email:{
        type: String,
        unique:true,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    contrasena:{
        type: String,
        required:true
    }
})

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;