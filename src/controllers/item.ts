import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../Services/item";
import { handleHttp } from "../utils/error.handle";


const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, 'error _GET_ITEM')
    }
};
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'error _GET_ITEMS')
    }
};
const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'error _UPDATE_ITEM')
    }
};
const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "error _POST_ITEM", e)
    }
};
const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'error _DELETE_ITEM')
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };