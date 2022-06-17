import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'src/app/Model/session';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

const baseUrl = 'http://localhost:8090/session';

@Injectable({
  providedIn: 'root'
})


export class SessionService {
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

  getAll(): Observable<Session[]> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Session[]>(baseUrl,httpOptions);
  }
  
  getById(id:any):Observable<Session>{
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Session>(`${baseUrl}/${id}`,httpOptions);
  }
  create(data: any,id1:any,id2:any): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.post(`${baseUrl}/${id1}/${id2}`, data,httpOptions);
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
  
  deleteAll(): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.delete(baseUrl,httpOptions);
  }
}