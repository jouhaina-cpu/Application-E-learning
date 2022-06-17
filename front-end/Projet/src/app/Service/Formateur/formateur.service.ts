import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/Model/formateur';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

const baseUrl = 'http://localhost:8090/formateur';

@Injectable({
  providedIn: 'root'
})


export class FormateurService {
  constructor(private http: HttpClient,private token:TokenStorageService) { }

  geettooken()
  {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = {
      headers: new HttpHeaders( {'Authorization': "Bearer "+ t})
      };
      return httpOptions;
  }
  
  getAll(): Observable<Formateur[]> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Formateur[]>(baseUrl,httpOptions);
  }

  get(Idorganisme:number): Observable<Formateur> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Formateur>(`${baseUrl}/${Idorganisme}`,httpOptions);
  }
  

  
  create(data: any,Idorganisme:number): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.post(`${baseUrl}/${Idorganisme}`, data,httpOptions);
  }
  
  update(id: any, data: any): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.put(`${baseUrl}/${id}`, data,httpOptions);
  }
  
  delete(id: any): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.delete(`${baseUrl}/${id}`,httpOptions);
  }

}