import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ServcontaService } from '../../servicios/servconta.service';

/*comportamos el modulo de alerta*/
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {

  filterBuscar = '';
contactoLista: Contacto[];
paginaActual: number = 1;

  constructor(public contactServi: ServcontaService,
             public toastr:ToastrService ) { }

  ngOnInit() {
    this.contactServi.getContactos()
    .snapshotChanges()
    .subscribe(item=>{
      this.contactoLista =[];
      item.forEach(element=>{
        let x =element.payload.toJSON();
        x["$key"]= element.key;
        this.contactoLista.push(x as Contacto );
      })
    })
  }

  onEditar(contacto:Contacto){
    this.contactServi.selectedContacto =Object.assign({},contacto);
   
  }

  onEliminar($key: string) {
  this.contactServi.deleteContacto($key);
  this.toastr.success('Operacion exitosa','Contacto eliminado')
  }

}
