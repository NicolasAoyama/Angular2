import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent {
  listaPessoas: Pessoa[] = [];

  constructor(){
    this.listaPessoas.push(new Pessoa("Gabi", 22));
    this.listaPessoas.push(new Pessoa("Alessia", 21));
    this.listaPessoas.push(new Pessoa("Luiza", 30));
    this.listaPessoas.push(new Pessoa("Ademar", 22));
    this.listaPessoas.push(new Pessoa("Cris", 19));
    this.listaPessoas.push(new Pessoa("Fernanda", 24));
    this.listaPessoas.push(new Pessoa("Eloe", 55));
    this.listaPessoas.push(new Pessoa("Eugenia", 46));
    this.listaPessoas.push(new Pessoa("Matheus", 28));
    this.listaPessoas.push(new Pessoa("Isa", 22));
    this.listaPessoas.push(new Pessoa("Ellen", 21));
    this.listaPessoas.push(new Pessoa("Danny", 23));


  }

}
