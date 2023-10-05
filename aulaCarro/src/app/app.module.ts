import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { PessoasEditComponent } from './pessoas/pessoas-edit/pessoas-edit.component';
import { CarroListComponent } from './carros/carro-list/carro-list.component';
import { CarroEditComponent } from './carros/carro-edit/carro-edit.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosEditComponent } from './livros/livros-edit/livros-edit.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PessoasComponent,
    PessoasListComponent,
    PessoasEditComponent,
    CarroListComponent,
    CarroEditComponent,
    LivroslistComponent,
    LivrosEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
