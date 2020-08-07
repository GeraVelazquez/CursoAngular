import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Auto } from 'src/app/auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss'],
})
export class AutosComponent implements OnInit, OnChanges {
  autos: Auto[] = [
    {
      año: '2020',
      descripcion: 'Es un auto Veloz',
      id: '1',
      modelo: 'M3',
      nombre: 'BMW',
      imagen:
        'https://sites.google.com/site/imagenesdecarrosgratis/_/rsrc/1421518113552/fotos-de-carros/transportation.Ferrari-California-02192.jpg',
    },
    {
      año: '2019',
      descripcion: 'Es un auto menos Veloz',
      id: '1',
      modelo: 'M3.1',
      nombre: 'Ford',
      imagen:
        'https://static.iris.net.co/soho/upload/images/2017/4/11/47657_1.jpg',
    },
  ];
  @Input() tittle: string;
  contador = 0;
  constructor() {
    console.log('1.constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. on changes');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('3.ng on init');
  }
  addCarrosVendidos(): void{
    this.contador++;
  }
}
