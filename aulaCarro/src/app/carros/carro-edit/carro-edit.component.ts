import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.scss']
})
export class CarroEditComponent {
  rot= inject(ActivatedRoute);
  carro!:Carro;

  constructor(){
    let id = this.rot.snapshot.paramMap.get('id');
    console.log(id);
  }

}
