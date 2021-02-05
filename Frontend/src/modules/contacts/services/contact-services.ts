import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact'

@Injectable()
export class ContactService{

    
    constructor(public http:HttpClient){

    }
    
    getContacts():Observable<Contact[]>{
        
        return this.http.get<Contact[]>("http://localhost:3000/contact/contactList/49")
    }

    saveContact(contact:Contact){
         return this.http.post("http://localhost:3000/contact/saveContact",contact)
    }
}