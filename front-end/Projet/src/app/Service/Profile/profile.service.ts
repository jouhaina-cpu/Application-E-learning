import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/Model/profile';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

const baseUrl = 'http://localhost:8090/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
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

  
  getAll(): Observable<Profile[]> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.get<Profile[]>(baseUrl,httpOptions);
  }
  
  create(data: any): Observable<any> {
    let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
    return this.http.post(baseUrl, data,httpOptions);
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