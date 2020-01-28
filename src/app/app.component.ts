import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Tulsi';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  
  a = 0.234;

  salario = 1234.6;

  nombre2 = 'tUlsi devi guaNipa baRReto';
  heroe= {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle:'Primera',
      casa: 'Numero 19',
    }
  }

  fecha = new Date();

  video = "ahCn0DR8vmM";

  
  valorDePromesa = new Promise( ( resolve, reject ) =>{
    setTimeout( ()=> resolve('Llegó la promesa'), 3500 );

  })

}
