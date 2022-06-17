import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Organisme } from 'src/app/Model/organisme';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';



 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-organisme.component.html',
  styleUrls: ['./ajout-organisme.component.scss']
})

 
export class AjoutOrganismeComponent  implements OnInit {

  
  organisme= new Organisme('');
  Formulaire:FormGroup;

constructor(public dialog: MatDialog, private fb: FormBuilder,
  private route: ActivatedRoute,private router: Router,public organismeeService:OrganismeService) {

}

openDialog() {
  const dialogRef = this.dialog.open(AjouterOrganisme);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

onSubmit(){
  console.log(this.organisme);
  this.organisme.libelle = this.Formulaire.value.libelle;
  this.saveOrganisme();
}

saveOrganisme(){
  this.organismeeService.createOrganisme(this.organisme).subscribe( data =>{
    console.log(data);
    this.goToList();
  },
  error => console.log(error));
}

goToList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-organisme/Lister-organisme']);
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
export class AjouterOrganisme {}