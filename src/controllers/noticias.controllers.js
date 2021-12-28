import Noticia from "../models/noticia";
import { campoRequerido, validarCorreo, validarImagen } from "../helpers";

const noticiaCtrl = {};

noticiaCtrl.crearNoticia = async (req, res) => {

  // if (
  //   (campoRequerido(req.body.autor),
  //   campoRequerido( req.body.titulo),
  //   campoRequerido(req.body.bajadanoticia),
  //   campoRequerido(req.body.leadnoticia),
  //   campoRequerido(req.body.cuerponoticia),
  //   campoRequerido(req.body.fechanoticia),
  //   campoRequerido(req.body.destacada),
  //   campoRequerido(req.body.principal),
  //   campoRequerido(req.body.categoria))) {
    try {
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
  // } else {
  //     res.status(400).json({
  //         mensaje:'error en la validacion de datos'
  //     })
  // }
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
