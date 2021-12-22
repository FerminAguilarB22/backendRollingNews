import { Router } from "express";
import adminCtrl from "../controllers/admins.controllers";
const routerAdmin = Router();

routerAdmin
  .route("/admin")
  .get(adminCtrl.listarAdmin)
  .post(adminCtrl.crearAdmin);

routerAdmin
  .route("/admin/:id")
  .get(adminCtrl.obtenerAdmin)
  .delete(adminCtrl.borrarAdmin)
  .put(adminCtrl.editarAdmin);

  export default routerAdmin;