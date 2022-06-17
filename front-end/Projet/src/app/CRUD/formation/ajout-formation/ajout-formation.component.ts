import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Domain } from 'domain';
import { Domaine } from 'src/app/Model/domaine';
import { Formation } from 'src/app/Model/formation';
import { DomaineService } from 'src/app/Service/Domaine/domaine.service';
import { FormationService } from 'src/app/Service/Formation/formation.service';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';

interface Type {
  value: string;
  viewValue: string;
}

interface Titre {
  value: string;
  viewValue: string;
}

 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.scss']
})

 
export class AjoutFormationComponent  implements OnInit {


  titree: Titre[] = [
    {value: 'Nationale', viewValue: 'Nationale'},
    {value: 'Internationale', viewValue: 'Internationale'},
  ];

constructor(private router: Router,private domaineService: DomaineService,private formationService:FormationService,public dialog: MatDialog, private fb: FormBuilder,public organismeeService:OrganismeService) {

}

domaine:Domaine[];
private getDomaine(){
  this.domaineService.getAll().subscribe(data => {
    console.log(data);
    this.domaine = data;
  });
}

//  création d' Employé
openDialog() {
  const dialogRef = this.dialog.open(AjoutFormation);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
domain= new Formation();
Formulaire:FormGroup;

onSubmit(){
  this.domain.budget = this.Formulaire.value.Budget;
  this.domain.domaine = this.Formulaire.value.Domaine;
  this.domain.duree = this.Formulaire.value.Duree;
  this.domain.nb_session=this.Formulaire.value.nb_session;
  this.domain.type=this.Formulaire.value.type;
  this.domain.title=this.Formulaire.value.titre;
  console.log(this.domain);
  this.saveDomaine();
}

saveDomaine(){
  this.formationService.create(this.domain,this.Formulaire.value.Domaine.id).subscribe((resultat)=>{
      console.log(resultat);
      this.goToList();

    },
    (error)=>{
      console.log(error.status)
    }
  );

}

goToList(){
this.router.navigate(['Menu/Menu-Services/Menu-formation/Lister-formation']);
}
  
ngOnInit(): void {
  this.getDomaine();
  this.Formulaire = new FormGroup({
    Annee: new FormControl(),
    Budget: new FormControl(),
    Duree: new FormControl(),
    nb_session: new FormControl(),
    titre: new FormControl(),
    type: new FormControl(),
    Domaine: new FormControl()

    
  })
}
 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class AjoutFormation {}