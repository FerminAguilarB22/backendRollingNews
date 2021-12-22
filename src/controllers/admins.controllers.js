import Admin from "../models/admins"
import { campoRequerido, validarCorreo } from "../helpers";

const adminCtrl = {};

adminCtrl.crearAdmin = async (req,res)=>{
    if(campoRequerido(req.body.nombre),campoRequerido(req.body.contrasena),validarCorreo(req.body.email)){

        try{
            const adminNuevo = new Admin({
                email: req.body.email,
                nombre: req.body.nombre,
                contrasena: req.body.contrasena
                
            })
            await adminNuevo.save();
    
            res.status(201).json({
                mensaje: 'Usuario admin agregado'
            })
    
        }catch(error){
            res.status(400).json({
                mensaje:'Error al agregar el usuario admin'
            })
            }
    }else{
        res.status(400).json({
            mensaje:'error en la validacion de datos'
        })
    }
    }
adminCtrl.listarAdmin = async(req,res)=>{
    try{
        const listaAdmin = await Admin.find();
        res.status(200).json(listaAdmin);
    }catch(error){
        res.status(404).json({
            mensaje: 'Error al intentar obtener los usuarios admins'
        })
    }
    
}
adminCtrl.obtenerAdmin = async (req,res)=>{
    try{
        const admin = await Admin.findById(req.params.id);
        res.status(200).json(admin);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo encontrar el usuario admin buscado'
        });
    }
}
adminCtrl.editarAdmin = async(req,res)=>{
    try{
        await Admin.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje:'se modifico con exito el usuario admin'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo editar el usuario admin'
        });
    }
}
adminCtrl.borrarAdmin = async(req,res)=>{
    try{
        await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'se borro correctamente el usuario admin'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'no se pudo borrar el usuario admin'
        })
    }
}



export default adminCtrl;