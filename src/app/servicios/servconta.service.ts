import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ServcontaService {

  contactList: AngularFireList<any>;
  
  selectedContacto:Contacto =new Contacto();

  constructor(public firebase:AngularFireDatabase ) { }

  getContactos(){
 return this.contactList = this.firebase.list('contacts');
  }

  insertarContacto(contact:Contacto){
    this.contactList.push({
      
      name: contact.name,      
      apellidopa: contact.apellidopa,    
      telefono: contact.telefono,
      email: contact.email
    });
  }
updateContacto(contact:Contacto){
  this.contactList.update(contact.$key,{
    name: contact.name,      
      apellidopa: contact.apellidopa,    
      telefono: contact.telefono,
      email: contact.email
  });
}

deleteContacto($key: string){
  this.contactList.remove($key);
}

}
