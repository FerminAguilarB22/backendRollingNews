import Noticia from "../models/noticia";

const noticiaCtrl = {};

noticiaCtrl.listarNoticias = async(req,res)=>{
    try{
        const listaNoticia = await Noticia.find();
        res.status(200).json(listaNoticia);
    }catch(error){
        res.status(404).json({
            mensaje: 'Error al intentar obtener las noticias'
        })
    }
    res.send ('listar noticias');
}
noticiaCtrl.borrarNoticia = (req,res)=>{
    res.send ('borrar una noticia');
}
noticiaCtrl.crearNoticia = async (req,res)=>{
    try{
        const noticiaNueva = new Noticia({
            autor: req.body.autor,
            titulo: req.body.titulo,
            bajadanoticia: req.body.bajadanoticia,
            imagen: req.body.imagen,
            leadnoticia: req.body.leadnoticia,
            cuerponoticia: req.body.cuerponoticia,
            fechanoticia: req.body.fechanoticia,
            destacada: req.body.destacada,
            principal: req.body.principal,
            categoria: req.body.categoria
            
        })
        await noticiaNueva.save();

        res.status(201).json({
            mensaje: 'Noticia agregada'
        })

    }catch(error){
        res.status(400).json({
            mensaje:'Error al agregar la noticia'
        })
        }
    }

noticiaCtrl.editarNoticia = (req,res)=>{
    res.send ('editar una noticia');
}
noticiaCtrl.obtenerNoticia = (req,res)=>{
    res.send ('obtener una noticia por id');
}


export default noticiaCtrl;