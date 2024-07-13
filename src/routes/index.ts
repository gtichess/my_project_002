import { Router } from "express";
import { readdirSync } from "fs";
const PATH_ROUTER = `${__dirname}`

const router = Router();

/* 
están entrando 2 nombres (index.ts y items.ts) 
y les voy a quitar el '.ts'
Queremos que el nombre del archivo sea el mismo del prefijo de la ruta
*/

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
}
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
            console.log(`Se está cargando la ruta...${cleanName}`);
            //router.use(`${cleanName}`, moduleRouter.router);
        });
    }
});
export { router };

