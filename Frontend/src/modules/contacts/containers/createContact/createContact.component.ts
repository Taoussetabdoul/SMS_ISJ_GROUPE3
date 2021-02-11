import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@modules/contacts/models/contact';
import { ContactService } from '@modules/contacts/services/contact-services';
import swal from 'sweetalert2';

@Component({
    selector: 'create-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './createContact.component.html',
    styleUrls: ['createContact.component.scss'],
})
export class CreateContactComponent implements OnInit {
    newContact:Contact={name:"",phoneNumber:"",_idUser:"10"};
    userId:string='';
    
    constructor(private contactService:ContactService) {

    }

    createContact(){
        console.log("contact créé");
        
        this.contactService.saveContact(this.newContact).subscribe(
            res => {
              console.log(res);
              swal({
                title: 'succès',
                text: 'Nouveau contact créé avec succès.',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
            this.newContact={name:"",phoneNumber:"",_idUser:this.userId};
    },
    err => {
      console.log('CREATE USER ERROR', err.error);
      swal({
        title: err.error.error._message,
        type: "warning",
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info'
    }).catch(swal.noop);

    }
    
    );
}
    ngOnInit() {
        this.userId=this.contactService.getUserId();
    }
}