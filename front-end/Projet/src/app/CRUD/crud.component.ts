import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { TokenStorageService } from '../Service/Autho-taken/token-storage.service';

@Component({
  selector: 'app-rh',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  user: User;
  role : any;
  
  constructor(private token: TokenStorageService, ) { }

  ngOnInit(): void {
    this.user= this.token.getUser();
    this.role=this.user.roles;
    console.log(this.role[0]);
  }

}
