import { Request, Response } from "express";
import { AbstractMiddleware } from '../constants/types.constant';


export class HeaderMiddleware extends AbstractMiddleware {
    static load  = (req: Request, res: Response, next: any) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,noauth');
        next();
    }
}

/* =======
    "csv-parser": "^3.0.0",
    "express": "^4.17.1",
    "fast-csv": "^4.3.6",
    "mongoose": "^5.11.14",
    "multer": "^1.4.2"
>>>>>>> SELATSA */