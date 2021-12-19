import { Router } from "express";
import noticiaCtrl from "../controllers/noticias.controllers";
const router = Router();

router
  .route("/")
  .get(noticiaCtrl.listarNoticias)
  .delete(noticiaCtrl.borrarNoticia)
  .post(noticiaCtrl.crearNoticia)
  .put(noticiaCtrl.editarNoticia);

export default router;
