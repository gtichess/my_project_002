import { Request, Response, Router } from "express";
import { getItems, getItem, updateItem, postItem, deleteItem } from "../controllers/item";

import { logMiddleware } from "../middleware/log";

const router = Router();


/**
 * http://localhost:3002/items [GET]
 */

/* router.get("/", (req: Request, res: Response) =>
    res.send(({ data: "AQUÍ VAN LOS MODELOS" })
    )); */
router.get("/", getItems)
router.get("/:id", logMiddleware, getItem);
router.put("/:id", updateItem);
router.post("/", postItem);
router.delete("/:id", deleteItem)
export = { router };
