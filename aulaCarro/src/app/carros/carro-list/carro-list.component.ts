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
    this.ListaCarros.push(new Carro("Fiesta",2012));
    this.ListaCarros.push(new Carro("Fox",2015));
    this.ListaCarros.push(new Carro("megane",2001));
    this.ListaCarros.push(new Carro("focus",2008));
    this.ListaCarros.push(new Carro("elantra",2010));
    this.ListaCarros.push(new Carro("hrv",2022));
    this.ListaCarros.push(new Carro("civic",2015));
    this.ListaCarros.push(new Carro("clio",2021));
    this.ListaCarros.push(new Carro("polo",2023));
    this.ListaCarros.push(new Carro("gol",2022));



  }



}
