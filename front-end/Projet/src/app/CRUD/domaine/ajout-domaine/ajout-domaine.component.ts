import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Domaine } from 'src/app/Model/domaine';
import { DomaineService } from 'src/app/Service/Domaine/domaine.service';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-domaine.component.html',
  styleUrls: ['./ajout-domaine.component.scss']
})

 
export class AjoutDomaineComponent  implements OnInit {


  domain= new Domaine();
  Formulaire:FormGroup;

constructor(private route: ActivatedRoute,private router: Router,public domaineService:DomaineService,public dialog: MatDialog, private fb: FormBuilder ) {

}



onSubmit(){
  console.log(this.domain);
  this.domain.libelle = this.Formulaire.value.libelle;
  this.saveDomaine();
}

saveDomaine(){
    this.domaineService.createDomaine(this.domain).subscribe((resultat)=>{
        console.log(resultat);
        this.goToList();

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }

goToList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-domaine/Lister-domaine']);
}

openDialog()
{
  const dialogRef = this.dialog.open(CreerDomaine);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


ngOnInit(): void {
  this.Formulaire = new FormGroup({
    libelle: new FormControl()
  })
}

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class CreerDomaine {}

