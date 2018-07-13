import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    public nombre_prenda = "pantalones vaqueros";
    public coleccion_ropa = ['Pantalones Blancos', 'Camiseta roja'];

    prueba(nombre_prenda) {
        return nombre_prenda;
    }

    addRopa(nombre_prenda: string): Array<string> {
     this.coleccion_ropa.push(nombre_prenda);
     return this.getRopa();
    }

    getRopa() {
    return this.coleccion_ropa;
    }
}
