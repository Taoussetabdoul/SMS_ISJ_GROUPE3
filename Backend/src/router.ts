import { Application } from 'express';
import { HelloService } from './services/hello.service';
import MessageService from './services/message.service';

export class Router {
    private helloService: HelloService;
    private messageServive: MessageService;

    constructor(private app: Application) {
        this.helloService = new HelloService();
        this.messageServive = new MessageService();

        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.helloService.greet);

        this.app.route('/messages').get(this.messageServive.getAllUserMessage);
        this.app.route('/messages/:id').get(this.messageServive.getOneUserMessage);
        this.app.route('/messages').post(this.messageServive.sendUserMessage);
    }
}