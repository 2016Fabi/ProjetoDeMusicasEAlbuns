import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-do-historico',
  templateUrl: './registro-do-historico.component.html',
  styleUrls: ['./registro-do-historico.component.scss']
})
export class RegistroDoHistoricoComponent implements OnInit {

  historico = [];

  constructor(
    private router: Router,
  ) { }


  ngOnInit() {
    this.historico = JSON.parse(window.localStorage.getItem('historico'));
    if(!this.historico){
      this.historico = [];
    }
  }

  clicouNoExcluir(ItemHistorico: string){
   let lista = this.historico.filter(item=>ItemHistorico!=item);
   this.historico = []; 
   this.historico = lista;
   window.localStorage.setItem('historico',JSON.stringify(this.historico));   
  }

  clicarPraVoltar(){
    console.log('voltar na tela'); 
    this.router.navigate(['PesquisaMusicaEAlbum']);
  }
}

