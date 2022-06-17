import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pays } from 'src/app/Model/pays';
import { PaysService } from 'src/app/Service/Pays/pays.service';


interface pppp {
  value: string;
  viewValue: string;
}

 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-pays.component.html',
  styleUrls: ['./ajout-pays.component.scss']
})

 
export class AjoutPaysComponent  implements OnInit {


  pays : pppp [] = [
    {value: 'P-0', viewValue: 'Afghanistan'},
    {value: 'P-1', viewValue: 'Algérie'},
    {value: 'P-2', viewValue: 'Angola'},
    {value: 'P-3', viewValue: 'Allemagne'},
    {value: 'P-4', viewValue: 'Arabie saoudite'},
    {value: 'P-5', viewValue: 'Bahreïn'},
    {value: 'P-6', viewValue: 'Belgique'},
    {value: 'P-7', viewValue: 'Brésil'},
    {value: 'P-8', viewValue: 'Chine'},
    {value: 'P-9', viewValue: 'Danemark'},
    {value: 'P-10', viewValue: 'Égypte'},
    {value: 'P-11', viewValue: 'Espagne'},
    {value: 'P-13', viewValue: 'France'},
    {value: 'P-14', viewValue: 'Ghana'},
    {value: 'P-15', viewValue: 'Grèce'},
    {value: 'P-16', viewValue: 'Guatemala'},
    {value: 'P-17', viewValue: 'Guinée'},
    {value: 'P-18', viewValue: 'Inde'},
    {value: 'P-19', viewValue: 'Italie'},
    {value: 'P-20', viewValue: 'Jordanie'},
    {value: 'P-21', viewValue: 'Libye'},
    {value: 'P-22', viewValue: 'Maroc'},
    {value: 'P-23', viewValue: 'Mexique'},
    {value: 'P-24', viewValue: 'Portugal'},
    {value: 'P-25', viewValue: 'Qatar'},
    {value: 'P-26', viewValue: 'Suède'},
    {value: 'P-27', viewValue: 'Syrie'},
    {value: 'P-28', viewValue: 'Tunisie'},
    {value: 'P-29', viewValue: 'Turquie'},
    {value: 'P-30', viewValue: 'Ukraine'},
    {value: 'P-31', viewValue: 'Zimbabwe'},
  ];

  Formulaire: FormGroup;
  
constructor(private domain: PaysService,private route:Router,public dialog: MatDialog, private fb: FormBuilder) {

}
p:Pays;
onSubmit(){
  console.log(this.domain);
  this.p.libelle = this.Formulaire.value.libelle;
  this.saveDomaine();
}

saveDomaine(){
    this.domain.create(this.domain).subscribe((resultat)=>{
        console.log(resultat);
        this.goToList();

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }

goToList(){
  this.route.navigate(['/Menu/Menu-Services/Menu-pays/Lister-pays']);
}

openDialog() {
  const dialogRef = this.dialog.open(AjoutPays);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


  
ngOnInit(): void {
}
 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class AjoutPays {}