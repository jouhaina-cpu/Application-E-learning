import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';
import { TokenStorageService } from '../Autho-taken/token-storage.service';
const baseUrl = 'http://localhost:8090/user/';

@Injectable({
    providedIn: 'root'
})
export class UserService {
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


    getAll():Observable<User[]>{
      let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
        return this.http.get<User[]>(baseUrl,httpOptions);
      }
    
    getOneById(id:any):Observable<User>{
      let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
        return this.http.get<User>(`${baseUrl}/${id}`,httpOptions);
      }

    
    deleteUser( id:any):Observable<User>{
      let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
        return this.http.delete<User>(`${baseUrl}/${id}`,httpOptions)
      }
    
    updateUser(user:any){
      let  t =this.token.getToken();
    console.log(t);
    let httpOptions = this.geettooken();
        return this.http.put<any>(baseUrl, user ,httpOptions)
      }
}