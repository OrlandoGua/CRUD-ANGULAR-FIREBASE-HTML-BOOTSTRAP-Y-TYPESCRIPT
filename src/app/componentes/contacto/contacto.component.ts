import { Component, OnInit } from '@angular/core';
import { ServcontaService } from '../../servicios/servconta.service';
import { NgForm } from '@angular/forms'
import { Contacto } from '../../models/contacto';
/*comportamos el modulo de alerta*/
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

createFormGroup(){
  
}


  constructor(public contaServ: ServcontaService,
              public toastr:ToastrService) { }

  ngOnInit() {
    this.contaServ.getContactos();
    this.resetForm();
  }

  onSubmit(contactoform:NgForm){
   
    if(contactoform.value.$key == null){
      this.contaServ.insertarContacto(contactoform.value)
      this.toastr.success('Operacion exitosa','Contacto agregado')
      this.resetForm(contactoform);
    
    }
      
    else {
      this.contaServ.updateContacto(contactoform.value)
      this.toastr.success('Operacion exitosa','Contacto actualizado')
      this.resetForm(contactoform);
    }

   
  }

  resetForm(contactoform?:NgForm){
   if(contactoform !=null){
    contactoform.reset();
    this.contaServ.selectedContacto = new Contacto();
   }
  }

}
