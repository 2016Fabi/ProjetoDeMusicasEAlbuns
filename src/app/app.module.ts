import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PesquisaMusicaEAlbumComponent } from './pages/tela/pesquisa-musica-e-album/pesquisa-musica-e-album.component';
import { MusicaEAlbumComponent } from './pages/tela/pesquisa-musica-e-album/musica-e-album/musica-e-album.component';
import { ConsultarEExcluirResgistroComponent } from './pages/tela/consultar-e-excluir-resgistro/consultar-e-excluir-resgistro.component';
import { RegistroDoHistoricoComponent } from './pages/tela/consultar-e-excluir-resgistro/registro-do-historico/registro-do-historico.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaMusicaEAlbumComponent,
    MusicaEAlbumComponent,
    ConsultarEExcluirResgistroComponent,
    RegistroDoHistoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
