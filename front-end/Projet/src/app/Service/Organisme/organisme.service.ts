import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organisme } from 'src/app/Model/organisme';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {

  private ROOT_URL = 'http://localhost:8090/organisme';

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

  get() :Observable<Organisme[]>
  {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Organisme[]>(`${this.ROOT_URL}/`,httpOptions);
  }

  deleteOrganisme(id: number): Observable<Object>{
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.delete(`${this.ROOT_URL}/${id}`,httpOptions);
  }

  getById(id:number) :Observable<Organisme[]>
  {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Organisme[]>(`${this.ROOT_URL}/${id}`,httpOptions );
  }

  updateOrganisme(id: number, organisme: Organisme[]): Observable<Object>{
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.put(`${this.ROOT_URL}/${id}`, organisme,httpOptions);
  }

  createOrganisme(organisme: Organisme): Observable<Object>{
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.post(`${this.ROOT_URL}`, organisme,httpOptions);
  }

}