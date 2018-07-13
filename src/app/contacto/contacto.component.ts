import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent {
    public titulo = 'Página de contacto';
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        });
    }

    redirigir() {
        this._router.navigate(['/contacto', 'google.cl']);
    }

    redirigirDos() {
        this._router.navigate(['/pagina-principal']);
    }
}

