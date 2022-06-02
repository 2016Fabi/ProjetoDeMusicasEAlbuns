import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './album.model';


const API = environment.ApiUrlLastFmApi;
const RECURSO = API+'/?api_key=be807b4e6358ccbbd460df3cb9908f60&format=json';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    public http: HttpClient
  ) { }
  
  

  selectAll(): Observable<Album[]>{
    return this.http.get<Album[]>(RECURSO);
  }

  pesquisa(pesquisa: string){
    return this.http.get<any>(RECURSO+'&method=album.search&album='+pesquisa);
  }


}