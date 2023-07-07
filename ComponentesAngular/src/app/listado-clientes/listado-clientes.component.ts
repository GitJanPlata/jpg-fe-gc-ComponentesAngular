import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  @Input() clientes: any[] = [];

  guardarCliente(nuevoCliente: any) {
    this.clientes.push(nuevoCliente);
    console.log(this.clientes);
  }
}