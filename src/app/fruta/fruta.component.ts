import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Piña, Plátano';
    public nombre: string;

    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<string> =  ['Carpintero, Profesor, Ingeniero'];
    private hola = 'chao';
    public personas: Array<any> = ['uno', 44, 'tres'];
    comodin: any;

    /*asignar los valores en constructor*/
    constructor() {
        this.nombre = 'camila';
        this.edad = 28;
        this.mayorDeEdad = false;
        this.comodin = 'si';
    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(7);
        console.log(this.nombre + ' ' + this.edad);

        /*variables y alcance*/
        var uno = 8;
        var dos = 15;

         if (uno === 8) {
             /*let solo tendrá valor dentro de este if*/
             let uno = 3;
             var dos = 88;
             /*imprime 3*/
            console.log('dentro del if: ' + uno);
         }
        /*imprime 8*/
         console.log('fuera del if: ' + uno);

    }

    cambiarNombre() {
        this.nombre = 'Alonso';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }

}
