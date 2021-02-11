import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@modules/contacts/models/contact';
import { ContactService } from '@modules/contacts/services/contact-services';
import swal from 'sweetalert2';


@Component({
    selector: 'consult-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './consultContact.component.html',
    styleUrls:['consultContact.component.scss'],
})
export class ConsultContactComponent implements  OnInit {

    contacts:Contact[]=[];
    
    constructor(private contactService:ContactService) {
        
    }
    

    ngOnInit(){
      
        this.contactService.getContacts().subscribe(
            (res) => {
              console.log(res);
              this.contacts=res;
              console.log("contact",this.contacts);
            
    },
    err => {
      console.log('CREATE USER ERROR', err.error);
      swal({
        title: err.error.message,
        type: "warning",
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info'
    }).catch(swal.noop);

    }
    
    );

    }
}