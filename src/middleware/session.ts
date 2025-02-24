import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";



interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop() //['bearer', '11111 --> 11111]
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VÁLIDO");
        } else {
            req.user = isUser;
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VÁLIDA");

    }


};

export { checkJwt };