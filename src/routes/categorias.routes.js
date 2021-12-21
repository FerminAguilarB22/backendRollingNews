import { Router } from "express";
import categoriaCtrl from "../controllers/categorias.controllers";
const routerCat = Router();

routerCat
  .route("/categoria")
  .get(categoriaCtrl.listarCategoria)
  .post(categoriaCtrl.crearCategoria);

routerCat
  .route("/categoria/:id")
  .get(categoriaCtrl.obtenerCategoria)
  .delete(categoriaCtrl.borrarCategoria)
  .put(categoriaCtrl.editarCategoria);

  export default routerCat;