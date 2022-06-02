import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarEExcluirResgistroComponent } from './pages/tela/consultar-e-excluir-resgistro/consultar-e-excluir-resgistro.component';
import { RegistroDoHistoricoComponent } from './pages/tela/consultar-e-excluir-resgistro/registro-do-historico/registro-do-historico.component';
import { MusicaEAlbumComponent } from './pages/tela/pesquisa-musica-e-album/musica-e-album/musica-e-album.component';
import { PesquisaMusicaEAlbumComponent } from './pages/tela/pesquisa-musica-e-album/pesquisa-musica-e-album.component';


const routes: Routes = [

  {
    path: '',
    component: PesquisaMusicaEAlbumComponent,
  },   
  {
    path: 'PesquisaMusicaEAlbum',
    component:  PesquisaMusicaEAlbumComponent,
  }, 
  {
    path: 'MusicaEAlbum',
    component:  MusicaEAlbumComponent,
  },
  {
    path: 'ConsultarEExcluirResgistro',
    component: ConsultarEExcluirResgistroComponent,
  },
  {
    path: 'RegistroDoHistorico',
    component: RegistroDoHistoricoComponent,
  },

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
