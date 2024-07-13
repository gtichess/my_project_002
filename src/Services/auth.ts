import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken, verifyToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "already_user"
    const passHash = await encrypt(password);//todo 123456
    const registerNewUser = await UserModel.create({
        email,
        password: passHash,
        name,

    },

    );
    //todo se guardaría. incluyendo el password 123456
    return registerNewUser;

};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "ALREADY_USER";

    const passwordHash = checkIs.password; //todo el encriptado que viene de la BD
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECTO";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    }
    return data;

    /* return token; */

};
export { registerNewUser, loginUser }; 
