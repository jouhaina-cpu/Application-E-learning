import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Organisme } from 'src/app/Model/organisme';
import { Participant } from 'src/app/Model/participant';
import { Pays } from 'src/app/Model/pays';
import { Profile } from 'src/app/Model/profile';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';
import { ParticipantService } from 'src/app/Service/Participant/participant.service';
import { PaysService } from 'src/app/Service/Pays/pays.service';
import { ProfileService } from 'src/app/Service/Profile/profile.service';

interface Titre {
  value: string;
  viewValue: string;
}

 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-participant.component.html',
  styleUrls: ['./ajout-participant.component.scss']
})


 
export class AjoutParticipantComponent  implements OnInit {

  
  titree: Titre[] = [
    {value: 'National', viewValue: 'National'},
    {value: 'International', viewValue: 'International'},
  ];

constructor(private router: Router,public dialog: MatDialog, private fb: FormBuilder,
  private organismeService: OrganismeService,
  private profileService : ProfileService,
  private paysService: PaysService, private participantService: ParticipantService) {

}

domain= new Participant();
Formulaire:FormGroup;

onSubmit(){
  this.domain.nom = this.Formulaire.value.nom;
  this.domain.prenom = this.Formulaire.value.prenom;
  this.domain.email = this.Formulaire.value.email;
  this.domain.telephone=this.Formulaire.value.telephone;
  this.domain.type=this.Formulaire.value.type;
  this.domain.pays = this.Formulaire.value.pays;
  this.domain.profil = this.Formulaire.value.profil;
  console.log(this.domain);
  this.saveDomaine();
}

saveDomaine(){
  this.participantService.create(this.domain,this.domain.profil.id,this.domain.pays.id).subscribe((resultat)=>{
      console.log(resultat);
      this.goToList();
    },
    (error)=>{
      console.log(error.status)
    }
  );

}

goToList(){
this.router.navigate(['/Menu/Menu-Services/Menu-participant/Lister-participant']);
}


org :Organisme[];
private getOrganismee(){
  this.organismeService.get().subscribe(data => {
    this.org = data;
  });
}
pro :Profile[];
private getprofile(){
  this.profileService.getAll().subscribe(data => {
    console.log(data);
    this.pro = data;
    
  });
}

pay :Pays[];
private getpays(){
  this.paysService.getAll().subscribe(data => {
    console.log(data);
    this.pay = data;
  });
}
//  création d' Employé
openDialog() {
  const dialogRef = this.dialog.open(AjoutParticipant);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  
ngOnInit(): void {
  this.getOrganismee();
  this.getpays();
  this.getprofile();
  this.Formulaire = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    telephone: new FormControl(),
    type: new FormControl(),
    profil: new FormControl(),
    pays: new FormControl(),

    
  })
}
 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class AjoutParticipant {}