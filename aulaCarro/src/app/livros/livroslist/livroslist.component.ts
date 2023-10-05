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
    this.ListaLivros.push(new Livro("Autor_1","livro_1"));
    this.ListaLivros.push(new Livro("Autor_2","livro_2"));
    this.ListaLivros.push(new Livro("Autor_3","livro_3"));
    this.ListaLivros.push(new Livro("Autor_4","livro_4"));
    this.ListaLivros.push(new Livro("Autor_5","livro_5"));
    this.ListaLivros.push(new Livro("Autor_6","livro_6"));
    this.ListaLivros.push(new Livro("Autor_7","livro_7"));
    this.ListaLivros.push(new Livro("Autor_8","livro_8"));
    this.ListaLivros.push(new Livro("Autor_9","livro_9"));
    this.ListaLivros.push(new Livro("Autor_10","livro_10"));

  }


}
