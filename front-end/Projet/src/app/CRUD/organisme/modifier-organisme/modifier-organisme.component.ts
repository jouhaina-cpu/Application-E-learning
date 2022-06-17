import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Organisme } from 'src/app/Model/organisme';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-organisme.component.html',
  styleUrls: ['./modifier-organisme.component.scss']
})

 
export class ModifierOrganismeComponent  implements OnInit {

  id: number;
  organisme: Organisme [];


constructor(public dialog: MatDialog, private fb: FormBuilder,private organismeService: OrganismeService, private route: ActivatedRoute,private router: Router ) {



}


update(id: number){
  this.id = this.route.snapshot.params['id'];

    this.organismeService.getById(this.id).subscribe((data: Organisme[]) => {
      this.organisme = data;
      console.log(data);
    }, error => console.log(error));
}

onSubmit(){
  this.organismeService.updateOrganisme(this.id, this.organisme).subscribe( (data: Organisme[])  =>{
    this.organisme=data;
    this.goToList();
  }
  , error => console.log(error));
}

goToList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-organisme/Lister-organisme']);
}

//  création d' Employé
openDialog(){
  const dialogRef = this.dialog.open(ModifierDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


ngOnInit(): void {
  this.update(this.id);
}

}



@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class ModifierDialog {}