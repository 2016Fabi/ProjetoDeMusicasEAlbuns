import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from 'src/app/dominio/album/album.model';
import { AlbumService } from 'src/app/dominio/album/album.service';
import { Musica } from 'src/app/dominio/musica/musica.model';
import { MusicaService } from 'src/app/dominio/musica/musica.service';

@Component({
  selector: 'app-musica-e-album',
  templateUrl: './musica-e-album.component.html',
  styleUrls: ['./musica-e-album.component.scss']
})
export class MusicaEAlbumComponent implements OnInit {

  musicas: Musica[] = [];
  albuns: Album[] = [];

  public form: FormGroup;

  constructor(
    private albumService: AlbumService,
    private musicaService: MusicaService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      pesquisa: [''],     
    });
  }

  clickPesquisar(){
    console.log(this.formToModel());
  }

  clicarNoHistorico(){
    console.log('abrir a tela'); 
    this.router.navigate(['ConsultarEExcluirResgistro']); 
  }

  pesquisarForm(){
    let pesquisa = this.formToModel();
    this.salvarHistorico(pesquisa);
    this.musicaService.pesquisa(pesquisa).subscribe(
      (resultadopesquisa)=>{        
        this.musicas = resultadopesquisa.results.trackmatches.track;
      },
      (err)=>{console.error}
    )
  }

  pesquisarForm1(){
    let pesquisa = this.formToModel();
    this.salvarHistorico(pesquisa);
    this.albumService.pesquisa(pesquisa).subscribe(
      (resultadopesquisa)=>{        
        this.albuns = resultadopesquisa.results.albummatches.album;
      },
      (err)=>{console.error}
    )
  }

  salvarHistorico(pesquisa: string){
    let historico = [];
    historico = JSON.parse(window.localStorage.getItem('historico'));
    if(!historico){
      historico = [];
    }
    historico.push(pesquisa);
    window.localStorage.setItem('historico',JSON.stringify(historico));
  }



  formToModel(){
    let dadosForm = this.form.getRawValue();
    return dadosForm.pesquisa;

  }


}
