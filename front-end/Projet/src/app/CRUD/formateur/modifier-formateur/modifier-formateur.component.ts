import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.scss']
})



 
export class ModifierFormateurComponent  implements OnInit {

  typp: Type[] = [
    {value: 'Interne', viewValue: 'Interne'},
    {value: 'Externe', viewValue: 'Externe'},
  ];

  id: number;
  formateur: Formateur;

  org :Organisme[];
private getOrganismee(){
  this.organismeService.get().subscribe(data => {
    this.org = data;
  });
}

constructor(private router: Router,private route:ActivatedRoute,public formateurService:FormateurService, public dialog: MatDialog, private fb: FormBuilder,public organismeService:OrganismeService,) {



}

openDialog() {
  const dialogRef = this.dialog.open(ModifierFormateur);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

onSubmit(){
  this.formateurService.update(this.id, this.formateur).subscribe( data =>{
    this.goToEmployeeList();
  }
  , error => console.log(error));
}

goToEmployeeList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-formateur/Lister-formateur']);
}

setOrganisme(event:any){
  this.libel=event;
}

Org111:Organisme;
libel:any;
ngOnInit(): void {
  this.getOrganismee();
  this.id = this.route.snapshot.params['id'];

    this.formateur = new Formateur();
    this.formateurService.get(this.id).subscribe( data => {
      this.formateur = data;
      console.log(this.formateur
        .organisme.libelle)
        this.libel=this.formateur
        .organisme.libelle;
    });
}

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class ModifierFormateur {}