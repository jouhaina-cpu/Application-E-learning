import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';

@Component({
  selector: 'app-employe',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss']
})
export class DomaineComponent implements OnInit {

  user:User;
  role : any;


  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    
    this.user= this.tokenStorage.getUser();
    this.role=this.user.roles;
    console.log(this.role[0]);
  }

}
