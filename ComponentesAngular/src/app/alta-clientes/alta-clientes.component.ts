import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent {
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';

  @Output() clienteGuardado = new EventEmitter<any>();

  guardarCliente() {
    
    let nuevoCliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    };
    console.log(nuevoCliente);
    this.clienteGuardado.emit(nuevoCliente);

    // Reiniciar los campos del formulario
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  }
}