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
noticiaCtrl.crearNoticia = (req,res)=>{
    res.send ('crear una noticia');
}
noticiaCtrl.editarNoticia = (req,res)=>{
    res.send ('editar una noticia');
}
noticiaCtrl.obtenerNoticia = (req,res)=>{
    res.send ('obtener una noticia por id');
}


export default noticiaCtrl;