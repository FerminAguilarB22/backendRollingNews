import { Router } from "express";
import noticiaCtrl from "../controllers/noticias.controllers";
const router = Router();

router
  .route("/noticias")
  .get(noticiaCtrl.listarNoticias)
  .post(noticiaCtrl.crearNoticia);

router
  .route("/noticias/:id")
  .get(noticiaCtrl.obtenerNoticia)
  .delete(noticiaCtrl.borrarNoticia)
  .put(noticiaCtrl.editarNoticia);

export default router;
