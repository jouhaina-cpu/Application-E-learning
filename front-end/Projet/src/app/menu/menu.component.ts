import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CompteComponent } from '../Compte/compte.component';
import { FormateurComponent } from '../CRUD/formateur/formateur.component';
import { FormationComponent } from '../CRUD/formation/formation.component';
import { OrganismeComponent } from '../CRUD/organisme/organisme.component';
import { ParticipantComponent } from '../CRUD/participant/participant.component';
import { PaysComponent } from '../CRUD/pays/pays.component';
import { SessionFormationComponent } from '../CRUD/session_formation/sessionformation.component';
import { User } from '../Model/user';
import { TokenStorageService } from '../Service/Autho-taken/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentUser: any;
  isAdmin = false;
  user: User;
  role : any;
  constructor(private token: TokenStorageService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.isAdmin = this.token.getUser().roles.includes('ROLE_ADMIN');
    
    this.user= this.token.getUser();
    this.role=this.user.roles;
    console.log(this.role[0]);
  }

  methode() : void{
    this.token.signOut();
  }
  

}
