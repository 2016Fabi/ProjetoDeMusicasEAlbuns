import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Musica } from './musica.model';


const API = environment.ApiUrlLastFmApi;
const RECURSO = API+'/?api_key=be807b4e6358ccbbd460df3cb9908f60&format=json';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(
    public http: HttpClient
  ) { }
  

  selectAll(): Observable<Musica[]>{
    return this.http.get<Musica[]>(RECURSO);
  }
  pesquisa(pesquisa: string){
    return this.http.get<any>(RECURSO+'&method=track.search&track='+pesquisa);
  }

}
