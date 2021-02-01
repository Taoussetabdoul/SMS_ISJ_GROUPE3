import { Application } from 'express';
import { HelloService } from './services/hello.service';

export class Router {
    private helloService: HelloService;

    constructor(private app: Application) {
        this.helloService = new HelloService();

        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.helloService.greet);
    }
}