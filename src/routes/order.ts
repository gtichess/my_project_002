import { Router } from "express";
import { getItems } from "../controllers/orders";
import { checkJwt } from "../middleware/session";

/**
 * a esta ruta sólo puden acceder las personas que tienen sesión activa!
 * que tengan un JWT válido!
 */
const router = Router();

router.get('/', checkJwt, getItems);

export { router };