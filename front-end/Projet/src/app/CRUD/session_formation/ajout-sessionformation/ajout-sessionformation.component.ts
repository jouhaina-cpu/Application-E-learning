import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Model/formateur';
import { Formation } from 'src/app/Model/formation';
import { Organisme } from 'src/app/Model/organisme';
import { Session } from 'src/app/Model/session';
import { FormateurService } from 'src/app/Service/Formateur/formateur.service';
import { FormationService } from 'src/app/Service/Formation/formation.service';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';
import { SessionService } from 'src/app/Service/Session/session.service';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-sessionformation.component.html',
  styleUrls: ['./ajout-sessionformation.component.scss']
})

 
export class AjoutSessionFormationComponent  implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  Informations_Generales_Form: FormGroup;

constructor(private organismeService : OrganismeService,
            private formateurService : FormateurService,
            private fomationService : FormationService,
            private router: Router,
            private sessionService: SessionService,
            public dialog: MatDialog, private fb: FormBuilder) {
  this.Informations_Generales_Form = this.fb.group({
    Pays: ['', Validators.required],
   
  });
}


domain= new Session();
Formulaire:FormGroup;

onSubmit(){
  this.domain.date_debut = this.Formulaire.value.dated;
  this.domain.date_fin = this.Formulaire.value.datef;
  this.domain.formateur = this.Formulaire.value.formateur;
  this.domain.formation=this.Formulaire.value.formation;
  this.domain.lieu=this.Formulaire.value.lieu;
  this.domain.nb_participant=this.Formulaire.value.nbr_part;
  console.log(this.domain);
  this.saveDomaine();
}

saveDomaine(){
  this.sessionService.create(this.domain,this.domain.formateur.id,this.domain.formation.id).subscribe((resultat)=>{
      console.log(resultat);
      this.goToList();

    },
    (error)=>{
      console.log(error.status)
    }
  );

}

goToList(){
this.router.navigate(['/Menu/Menu-Services/Menu-session-formation/Lister-session']);
}

org :Organisme[];
private getOrganismee(){
  this.organismeService.get().subscribe(data => {
    console.log(data);
    this.org = data;
  });
}
formateur :Formateur[];
private getFormateur(){
  this.formateurService.getAll().subscribe(data => {
    console.log(data);
    this.formateur = data;
  });
}
formation :Formation[];
private getFormation(){
  this.fomationService.getAll().subscribe(data => {
    console.log(data);
    this.formation = data;
  });
}
//  création d' Employé
openDialog() {
  const dialogRef = this.dialog.open(AjoutSessionFormation);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

MessageErreurPays() {
    if (this.Informations_Generales_Form.get('Pays').hasError('required')) {
      return 'Vous devez choisir un  Pays!';
    }
  }
  
ngOnInit(): void {
  this.getFormateur();
  this.getFormation();
  this.getOrganismee();
  this.Formulaire = new FormGroup({
    dated: new FormControl(),
    datef: new FormControl(),
    lieu: new FormControl(),
    nbr_part: new FormControl(),
    formateur: new FormControl(),
    formation: new FormControl(),

    
  })
}
 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class AjoutSessionFormation {}