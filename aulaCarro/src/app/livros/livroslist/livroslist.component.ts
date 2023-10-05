import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  ListaLivros: Livro[] = []

  constructor(){
    this.ListaLivros.push(new Livro("NAo lembro","Pequeno principe"));
    this.ListaLivros.push(new Livro("NAo sei","MEnina que roubava livros"));
    this.ListaLivros.push(new Livro("KKKKK","Codigo davinci"));
    this.ListaLivros.push(new Livro("A","O restaurante no fim do universo"));

  }


}
