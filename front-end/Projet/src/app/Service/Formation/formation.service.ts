import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/Model/formation';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

const baseUrl = 'http://localhost:8090/formation';

@Injectable({
  providedIn: 'root'
})

export class FormationService {
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


  
  getAll(): Observable<any[]> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Formation[]>(baseUrl,httpOptions);
  }
  
  get(id: any): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get(`${baseUrl}/${id}`,httpOptions);
  }
  
  create(data: any,IdDomaine:number): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.post(`${baseUrl}/${IdDomaine}`, data,httpOptions);
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