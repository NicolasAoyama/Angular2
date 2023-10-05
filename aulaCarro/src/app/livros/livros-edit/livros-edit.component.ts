import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-livros-edit',
  templateUrl: './livros-edit.component.html',
  styleUrls: ['./livros-edit.component.scss']
})
export class LivrosEditComponent {
  rote = inject(ActivatedRoute);
  livros!:Livro;

  constructor(){
    let id = this.rote.snapshot.paramMap.get('id');
    console.log(id);
  }


}
