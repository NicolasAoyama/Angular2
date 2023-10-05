import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-edit',
  templateUrl: './pessoas-edit.component.html',
  styleUrls: ['./pessoas-edit.component.scss']
})
export class PessoasEditComponent {
  roteador = inject(ActivatedRoute);
  pessoa!:Pessoa;
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);

  }

}
