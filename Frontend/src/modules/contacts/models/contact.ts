export class Contact{
    name:string;
    phoneNumber:string;
    _idUser:string;
    constructor(name:string,number:string,id:string){
        this.name=name;
        this.phoneNumber=number;
        this._idUser=id;
    }
}