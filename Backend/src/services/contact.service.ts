import multer from 'multer';
import { StorageEngine } from 'multer'
import csvParser from 'csv-parser';
import fs from 'fs';
import { Request, Response } from "express";

import { IJSONResult, IService } from '../constants/types.constant';
import models from '../models';

export interface IContactService extends IService {
    listContacts: (req: Request, res: Response) => void;
    saveContact: (req: Request, res: Response) => void;
    contacyUpload: (req: Request, res: Response) => void;
}

export default class ContactService implements IContactService {
    result: IJSONResult | null;
    private fileStorage: StorageEngine;

    constructor() {
        this.result = {
            succeed: true,
            data: null
        }

        this.fileStorage = multer.diskStorage({
            destination: (reg, file, cb) => cb(null, 'dataAccount.xls'),
            filename: (req, file, cb) => cb(null, 'dataAccount.xls')
        })
    }

    listContacts = (req: Request, res: Response) => {
        models.Contact.find()
            .then((contacts: any) => {
                this.result = {
                    succeed: true,
                    data: contacts
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

    saveContact = (req: Request, res: Response) => {
        delete req.body._id;
        const contact = new models.Contact({
            ...req.body
        });
        contact.save()
            .then(() => {
                this.result = {
                    succeed: true,
                    data: contact
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

    contacyUpload = (req: Request, res: Response) => {
        res.status(200).json(this.result);
    }


}