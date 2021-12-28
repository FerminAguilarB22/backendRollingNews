import Noticia from "../models/noticia";


const noticiaCtrl = {};

noticiaCtrl.crearNoticia = async (req, res) => {


    try {
      const noticiaNueva = new Noticia({
        autor: req.body.autor,
        titulo: req.body.titulo,
        bajadanoticia: req.body.bajadanoticia,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
        leadnoticia: req.body.leadnoticia,
        cuerponoticia: req.body.cuerponoticia,
        fechanoticia: req.body.fechanoticia,
        destacada: req.body.destacada,
        principal: req.body.principal
      });
      await noticiaNueva.save();

      res.status(201).json({
        mensaje: "Noticia agregada",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "Error al agregar la noticia",
      });
    }

};
noticiaCtrl.listarNoticias = async (req, res) => {
  try {
    const listaNoticia = await Noticia.find();
    res.status(200).json(listaNoticia);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al intentar obtener las noticias",
    });
  }
};
noticiaCtrl.obtenerNoticia = async (req, res) => {
  try {
    const noticia = await Noticia.findById(req.params.id);
    res.status(200).json(noticia);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo encontrar la noticia buscada",
    });
  }
};
noticiaCtrl.editarNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "se modifico con exito su noticia",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo editar la noticia deseada",
    });
  }
};
noticiaCtrl.borrarNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "se borro correctamente su noticia",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "no se pudo borrar la noticia deseada",
    });
  }
};

export default noticiaCtrl;
