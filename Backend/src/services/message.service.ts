import { Request, Response } from "express";
import { IJSONResult, IService, IMessage } from "../constants/types.constant";

import models from '../models';


export interface IMessageService extends IService {
    // private userModel: models.User;

    getAllUserMessage: (req: Request, res: Response) => void;
    getOneUserMessage: (req: Request, res: Response) => void;
    sendUserMessage: (req: Request, res:Response) => void;
    exportUserMessage: (req:Request, res: Response) => void;
};


export default class MessageService implements IMessageService {
    result: IJSONResult|null;

    constructor() {
        this.result = {
            succeed: true,
            data: null
        }
    }
    
    getAllUserMessage = (req: Request, res: Response) => {
        models.Message.find()
            .then((messages: any) => {
                this.result = {
                    succeed: true,
                    data: messages
                }
                res.status(200).json(this.result);
            })
            .catch((error: any) => {
                this.result = {
                    succeed: false,
                    message: error,
                    data: null
                }
                res.status(400).json(this.result)
            });
    }

    getOneUserMessage = (req: Request, res: Response) => {
        models.Message.findOne({ _id: req.params._id })
            .then((messages: any) => {
                this.result = {
                    succeed: true,
                    data: messages
                }
                res.status(200).json(this.result);
            })
            .catch((error: any) => {
                this.result = {
                    succeed: false,
                    message: error,
                    data: null
                }
                res.status(400).json(this.result)
            });
    }

    sendUserMessage = (req: Request, res: Response) => {
        delete req.body._id;
        const message = new models.Message({
            ...req.body
        });
        message.save()
            .then(() => {
                this.result = {
                    succeed: true,
                    data: message
                }
                res.status(201).json(this.result)}
            )
            .catch((error: any) => {
                this.result = {
                    succeed: false,
                    message: error,
                    data: null
                }
                res.status(400).json(this.result)
            });
    }

    exportUserMessage = (req: Request, res: Response) => {
        // const messages = models.User.findUserMessages()
        return res.status(200).json(this.result);
    }
};
