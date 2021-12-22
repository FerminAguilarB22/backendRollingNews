import { Router } from "express";
import usuarioCtrl from "../controllers/usuarios.controllers";
const routerUsuario = Router();

routerUsuario
  .route("/usuario")
  .get(usuarioCtrl.listarUsuario)
  .post(usuarioCtrl.crearUsuario);

routerUsuario
  .route("/usuario/:id")
  .get(usuarioCtrl.obtenerUsuario)
  .delete(usuarioCtrl.borrarUsuario)
  .put(usuarioCtrl.editarUsuario);

  export default routerUsuario;