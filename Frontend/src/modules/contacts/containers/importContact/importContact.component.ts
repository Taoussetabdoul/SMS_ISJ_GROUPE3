import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@modules/contacts/models/contact';
import { ContactService } from '@modules/contacts/services/contact-services';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { ExportService } from '@modules/contacts/services/export-service';

@Component({
    selector: 'import-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './importContact.component.html',
    styleUrls: ['importContact.component.scss'],
})
export class ImportContactComponent implements OnInit {
    contacts:Contact[]=[];
    userId:string="";
    constructor(private contactService:ContactService,private http:HttpClient,private exportService:ExportService) {

    }


    ngOnInit():void {
        this.userId=this.contactService.getUserId();
       
        this.contactService.getContacts().subscribe(
            res=>{
                this.contacts=res;
                console.log("contact import",this.contacts)
            },
            err=>{
                console.log(err);
            }
        )
        
    }

    exportToCsv(): void {
        this.exportService.exportToCsv(this.contacts, 'contacts', ['name', 'phoneNumber']);
      }

    
/************************************************** */
private tab = [];

import=false;
importTrigger(){
  this.import=true
}

cancel(){
  this.import=false
  this.selectedFile=null
}

selectedFile:any=null;

onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
}

onUpload(){
    const fd=new FormData();
    fd.append('contact',this.selectedFile,this.selectedFile.name)
    this.http.post('http://localhost:3000/contact/upload/'+this.userId,fd)
             .subscribe(res=>{
                 console.log("in upload",res);
                 let obj:any = res
                 this.tab = obj.failure;
                 console.log(this.tab);
                 swal({
                  title: 'Importation terminée',
                  text: obj.success.length+' importation(s) réussie(s), ' + obj.failure.length +' importation(s) échoué(s)',
                  type: 'success',
                  confirmButtonClass: 'btn btn-success',
                  buttonsStyling: false
              });
             })
    this.selectedFile=null;
    this.import=false;
}

}