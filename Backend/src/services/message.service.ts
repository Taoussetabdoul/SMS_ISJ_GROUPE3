import { Request, Response } from "express";
import { IJSONResult, IService, IMessage } from "../constants/types.constant";

import models from '../models';


export interface IMessageService extends IService {
    // private userModel: models.User;

    getAllUserMessage: (req: Request, resp: Response) => Response;
    getOneUserMessage: (req: Request, resp: Response) => Response;
    sendUserMessage: (req: Request, resp:Response) => Response;
    exportUserMessage: (req:Request, resp: Response) => Response;
};


export default class MessageService implements IMessageService {
    result: IJSONResult|null;

    constructor() {
        this.result = {
            succeed: true,
            data: null
        }
    }
    
    getAllUserMessage = (req: Request, resp: Response): Response => {
        /* const messages = models.User.findUserMessages()
        this.result = {
            succeed: true,
            data: messages
        } */
        return resp.status(200).json(this.result);
    }

    getOneUserMessage = (req: Request, resp: Response): Response => {
        /* const message = models.User.findUserMessage(req.params.id)
        this.result = {
            succeed: true,
            data: message
        } */
        return resp.status(200).json(this.result);
    }

    sendUserMessage = (req: Request, resp: Response): Response => {
        /* const message: IMessage = {
            to: req.body._id,
            datetime: req.body.datime,
            message: req.body.message
        }
        models.User.saveUserMessage(message) */
        return resp.status(201).json(this.result);
    }

    exportUserMessage = (req: Request, resp: Response) => {
        // const messages = models.User.findUserMessages()
        return resp.status(200).json(this.result);
    }
};
