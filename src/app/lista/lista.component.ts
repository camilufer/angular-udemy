import { Component, OnInit, NgZone } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})



export class ListaComponent implements OnInit {

  title = '';
  miscontactos = [
      { nombre: 'Alejandro', telefono: '91871981', mail: 'asd@hotmail.com'},
      { nombre: 'Alejandra', telefono: '91871982', mail: 'asd@hotmail.com'},
      { nombre: 'Fran', telefono: '91871981', mail: 'asd@hotmail.com'},
      { nombre: 'Uju', telefono: '91871981', mail: 'asd@hotmail.com'},
      { nombre: 'Yeah', telefono: '91871981', mail: 'asd@hotmail.com'},
      { nombre: 'Uranio', telefono: '91871981', mail: 'asd@hotmail.com'},
  ];


  ngOnInit() {
    this.title = 'Contactos';
    console.log(JSON.stringify(this.miscontactos[1]));
    this.ordenarLista();
  }

  ordenarLista() {
    const groupedCollection = {};
    for ( let i = 0 ; i < this.miscontactos.length; i++) {
      const firstLetter = this.miscontactos[i].nombre.charAt(0);
      console.log('firstLetter', firstLetter);
    if (groupedCollection[firstLetter] === undefined) {
        groupedCollection[firstLetter] = [];
    }
    groupedCollection[firstLetter].push(this.miscontactos[i]);
    }
    console.log(JSON.stringify(groupedCollection));
  }

}


