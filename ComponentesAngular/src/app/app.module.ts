import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClientesComponent } from './alta-clientes/alta-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClientesComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
