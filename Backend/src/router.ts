import { Application } from 'express';
import ContactService from './services/contact.service';
import { HelloService } from './services/hello.service';
import MessageService from './services/message.service';

export class Router {
    private helloService: HelloService;
    private contactService: ContactService;
    private messageService: MessageService;

    constructor(private app: Application) {
        this.helloService = new HelloService();
        this.contactService = new ContactService();
        this.messageService = new MessageService();

        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.helloService.greet);

        this.app.route('/contacts').get(this.contactService.listContacts);
        this.app.route('/contacts').post(this.contactService.saveContact);
        this.app.route('/contacts/upload').post(this.contactService.contacyUpload);
        
        this.app.route('/messages').get(this.messageService.getAllUserMessage);
        this.app.route('/messages/:id').get(this.messageService.getOneUserMessage);
        this.app.route('/messages').post(this.messageService.sendUserMessage);
        this.app.route('/messages/export').get(this.messageService.exportUserMessage);
    }
}