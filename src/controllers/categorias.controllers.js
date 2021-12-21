import Categoria from "../models/categorias";

const categoriaCtrl ={};

categoriaCtrl.crearCategoria = async (req,res)=>{
    try{
        const categoriaNueva = new Categoria({
            categoria: req.body.categoria
            
        })
        await categoriaNueva.save();

        res.status(201).json({
            mensaje: 'Categoria agregada'
        })

    }catch(error){
        res.status(400).json({
            mensaje:'Error al agregar la categoria'
        })
        }
    }
categoriaCtrl.listarCategoria = async(req,res)=>{
    try{
        const listaCategoria = await Categoria.find();
        res.status(200).json(listaCategoria);
    }catch(error){
        res.status(404).json({
            mensaje: 'Error al intentar obtener las categorias'
        })
    }
    
}
categoriaCtrl.obtenerCategoria = async (req,res)=>{
    try{
        const categoria = await Categoria.findById(req.params.id);
        res.status(200).json(categoria);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo encontrar la categoria buscada'
        });
    }
}
categoriaCtrl.editarCategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje:'se modifico con exito su categoria'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo editar la categoria deseada'
        });
    }
}
categoriaCtrl.borrarCategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'se borro correctamente su categoria'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'no se pudo borrar la categoria deseada'
        })
    }
}



export default categoriaCtrl;