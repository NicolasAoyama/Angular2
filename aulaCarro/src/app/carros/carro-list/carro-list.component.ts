import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent {
  ListaCarros : Carro []=[];
  constructor(){
    this.ListaCarros.push(new Carro("Civic",2007));
    this.ListaCarros.push(new Carro("GTR",2021));
    this.ListaCarros.push(new Carro("GOLF",2023));
    this.ListaCarros.push(new Carro("M13",2000));



  }



}
