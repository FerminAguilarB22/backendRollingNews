import mongoose,{Schema} from "mongoose";

const adminSchema = new Schema ({
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

const Admin = mongoose.model("admin",adminSchema);

export default Admin;