import { Request, Response } from "express";
import models from "../models";

export class HelloService {
    public async greet(req: Request, res: Response) {
        // Voici comment on utilise le model de mongoose
        // const user1 = new models.User({ username: 'group3' })
        // await user1.save()
        // const result = await models.User.findOne({username: 'group3'})
        // console.log(result)
        return res.status(200).send("Hello word");
    }
}