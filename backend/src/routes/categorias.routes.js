import { Router } from "express"; //enrutador
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";
const router  = Router();

router.get("/", categoriaController.getCategorias) //categoriaController en nombre del metodoHttp

export default router;