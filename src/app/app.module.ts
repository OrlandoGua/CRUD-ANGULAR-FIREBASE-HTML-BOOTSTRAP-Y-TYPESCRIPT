import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*AgregarFormularios*/
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*paginacion*/
import {NgxPaginationModule} from 'ngx-pagination'; 

/*animacion alertas*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'
/**firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ContactoListComponent } from './componentes/contacto-list/contacto-list.component';
import { from } from 'rxjs';
import { BuscarPipe } from './pipe/buscar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoComponent,
    ContactoListComponent,
    BuscarPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    NgxPaginationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
