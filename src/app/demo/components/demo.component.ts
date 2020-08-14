import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'GestionAutos';
  nombreAuto: string;
  listaAutos: string[];
  constructor(){
    this.nombreAuto = 'Altima';
    this.listaAutos = ['Auto1','Auto2','Auto3']; 
  }
}
