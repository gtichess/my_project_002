import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8); //el '8' es para la aleatoreidad (randomize)... pero también puede cargar más el sistema
    return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect; //esto retorna un dato booleano: true or false

 };
export { encrypt, verified }