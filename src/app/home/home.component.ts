import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public titulo = 'Página principal';
    public listado_ropa: Array<string>;
    public prenda_a_guardar: ('');
    public fecha;
    public nombre = 'camila';

    constructor(
        private _ropaService: RopaService
    ) {
        this.fecha = new Date(2018, 4, 22);

    }

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda() {
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }
}
