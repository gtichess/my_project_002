import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,'error _GET_BLOG')
    }
};
const getItems = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,'error _GET_BLOGS')
    }
};
const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,'error _UPDATE_BLOG')
    }
};
const postItem = ({body}: Request, res: Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res,"error _POST_BLOG")
    }
};
const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,'error _DELETE_BLOG')
    }
};

export { getItem, getItems, postItem, updateItem, deleteItem };