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
    this.listaPessoas.push(new Pessoa("Jaozin", 80));
    this.listaPessoas.push(new Pessoa("Manuel gomes", 30));
    this.listaPessoas.push(new Pessoa("Professor Linguica", 34));
    this.listaPessoas.push(new Pessoa("Don Pedro Primeiro", 618));
    this.listaPessoas.push(new Pessoa("Xavier", 9));
    this.listaPessoas.push(new Pessoa("Selton Melo", 21));
    this.listaPessoas.push(new Pessoa("Raul Gil", 15));

  }

}
