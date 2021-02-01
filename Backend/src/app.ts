import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Router } from './router';

class App {
  public app: Application;
  public router: Router;

  constructor() {
    this.app = express();
    this.loadMiddlewares();
    this.router = new Router(this.app);
  }

  // Gestion des middlewares
  private loadMiddlewares() {

    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));

    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    // Enables cors   
    this.app.use(cors());
  }
}

export default new App().app;
