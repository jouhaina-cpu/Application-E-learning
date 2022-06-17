import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Model/formateur';
import { Organisme } from 'src/app/Model/organisme';
import { FormateurService } from 'src/app/Service/Formateur/formateur.service';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';

interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})




export class AjoutFormateurComponent  implements OnInit {

  typp: Type[] = [
    {value: 'Interne', viewValue: 'Interne'},
    {value: 'Externe', viewValue: 'Externe'},
  ];

constructor(private router: Router,public organismeService:OrganismeService,public formateurService:FormateurService,public dialog: MatDialog, private fb: FormBuilder) {

}

domain= new Formateur();
Formulaire:FormGroup;

onSubmit(){
  this.domain.nom = this.Formulaire.value.nom;
  this.domain.prenom = this.Formulaire.value.prenom;
  this.domain.email = this.Formulaire.value.email;
  this.domain.telephone=this.Formulaire.value.telephone;
  this.domain.type=this.Formulaire.value.type;
  console.log(this.Formulaire.value.type);
  this.domain.organisme = this.Formulaire.value.organisme;
  console.log(this.domain);
  this.saveDomaine();
}


org :Organisme[];
private getOrganismee(){
  this.organismeService.get().subscribe(data => {
    console.log(data);
    this.org = data;
  });
}
saveDomaine(){
    this.formateurService.create(this.domain,this.Formulaire.value.organisme.id).subscribe((resultat)=>{
        console.log(resultat);
        this.goToList();

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }

goToList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-formateur/Lister-formateur']);
}


openDialog() {
  const dialogRef = this.dialog.open(AjoutFormateur);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


  
ngOnInit(): void {
  this.getOrganismee();
  this.Formulaire = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    telephone: new FormControl(),
    type: new FormControl(),
    organisme: new FormControl()

    
  })
}
 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class AjoutFormateur {}