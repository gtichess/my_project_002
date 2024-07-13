import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //console.log("Hola, soy el LOG");
    const header = req.headers;
    const userAgent = header["user-agent"]
    console.log("user-agent", userAgent)
    next();
};
export { logMiddleware };