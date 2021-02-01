import { Request, Response } from "express";

export interface IMessage {
    to: string;
    datetime: Date;
    message: String;
}


export interface IJSONResult {
    succeed: boolean;
    message?: string; 
    data: any
}

export interface IService {
    result: IJSONResult|null
}

export abstract class AbstractMiddleware {
    static load: (req: Request, res: Response, next: any) => void
}
