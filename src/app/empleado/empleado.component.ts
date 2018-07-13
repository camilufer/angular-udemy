import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente empleados:';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;
    public color_seleccionado: string;

    constructor() {
        this.empleado = new Empleado('Diego', 45, 'Músico', true);
        this.trabajadores = [
            new Empleado('Camila', 45, 'cocinero', true),
            new Empleado('javi', 20, 'traductor', true),
            new Empleado('ivan', 105, 'enfermero', false)
        ];
        this.trabajador_externo = false;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }

    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }
  }
