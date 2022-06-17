import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/Model/participant';
import { TokenStorageService } from '../Autho-taken/token-storage.service';

const baseUrl = 'http://localhost:8090/participant';

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

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
  
  getAll(): Observable<Participant[]> {
    let httpOptions = this.geettooken();
    return this.http.get<Participant[]>(baseUrl,httpOptions);
  }

  
  create(data: any,IDProfil:number,Idpays : Number): Observable<any> {
    let httpOptions = this.geettooken();
    return this.http.post(`${baseUrl}/${IDProfil}/${Idpays}`, data,httpOptions);
  }
  
  update(id: any, data: any): Observable<any> {
    let httpOptions = this.geettooken();
    return this.http.put(`${baseUrl}/${id}`, data,httpOptions);
  }
  
  delete(id: any): Observable<any> {
    let httpOptions = this.geettooken();
    return this.http.delete(`${baseUrl}/${id}`,httpOptions);
  }
  
}