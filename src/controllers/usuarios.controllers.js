import Usuario from "../models/usuarios";
import { campoRequerido, validarCorreo } from "../helpers";

const usuarioCtrl = {};

usuarioCtrl.crearUsuario = async (req,res)=>{
    if(campoRequerido(req.body.nombre),campoRequerido(req.body.contrasena),validarCorreo(req.body.email)){

        try{
            const usuarioNuevo = new Usuario({
                email: req.body.email,
                nombre: req.body.nombre,
                contrasena: req.body.contrasena
                
            })
            await usuarioNuevo.save();
    
            res.status(201).json({
                mensaje: 'Usuario agregado'
            })
    
        }catch(error){
            res.status(400).json({
                mensaje:'Error al agregar el usuario'
            })
            }
    }else{
        res.status(400).json({
            mensaje:'error en la validacion de datos'
        })
    }
    }
usuarioCtrl.listarUsuario = async(req,res)=>{
    try{
        const listaUsuario = await Usuario.find();
        res.status(200).json(listaUsuario);
    }catch(error){
        res.status(404).json({
            mensaje: 'Error al intentar obtener los usuarios'
        })
    }
    
}
usuarioCtrl.obtenerUsuario = async (req,res)=>{
    try{
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo encontrar el usuario buscado'
        });
    }
}
usuarioCtrl.editarUsuario = async(req,res)=>{
    try{
        await Usuario.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje:'se modifico con exito el usuario'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo editar el usuario deseado'
        });
    }
}
usuarioCtrl.borrarUsuario = async(req,res)=>{
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'se borro correctamente el usuario'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'no se pudo borrar el usuario'
        })
    }
}



export default usuarioCtrl;