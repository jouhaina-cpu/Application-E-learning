import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/Model/domaine';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private ROOT_URL = 'http://localhost:8090/domaine';

  geettooken()
  {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = {
      headers: new HttpHeaders( {'Authorization': "Bearer "+ t})
      };
      return httpOptions;
  }

  constructor(private http:HttpClient,private token:TokenStorageService) {

  }

  getAll() :Observable<Domaine[]>
  { 
    let httpOptions = this.geettooken();
    return this.http.get<Domaine[]>(`${this.ROOT_URL}`,httpOptions );
  }

  deleteDomaine(id: number): Observable<Object>{
    let httpOptions = this.geettooken();
    return this.http.delete(`${this.ROOT_URL}/${id}`,httpOptions);
  }

  getById(id:number) :Observable<Domaine[]>
  {
    let httpOptions = this.geettooken();
    return this.http.get<Domaine[]>(`${this.ROOT_URL}/${id}`,httpOptions );
  }

  updateDomaine(id: number, domaine: Domaine[]): Observable<Object>{
    let httpOptions = this.geettooken();
    return this.http.put(`${this.ROOT_URL}/${id}`, domaine,httpOptions);
  }

  createDomaine(domain: Domaine): Observable<Object>{
    let httpOptions = this.geettooken();
    return this.http.post(`${this.ROOT_URL}`, domain,httpOptions);
  }


}

