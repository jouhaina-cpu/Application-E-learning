import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Domaine } from 'src/app/Model/domaine';
import { DomaineService } from 'src/app/Service/Domaine/domaine.service';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-domaine.component.html',
  styleUrls: ['./modifier-domaine.component.scss']
})

 
export class ModifierDomaineComponent  implements OnInit {

  id: number;
  domain: Domaine [];

constructor(public dialog: MatDialog,private domainService: DomaineService, private route: ActivatedRoute,private router: Router) {


}

update(id: number){
  this.id = this.route.snapshot.params['id'];

    this.domainService.getById(this.id).subscribe((data: Domaine[]) => {
      this.domain = data;
      console.log(data);
    }, error => console.log(error));
}


ngOnInit(): void {
  this.update(this.id);
}

onSubmit(){
  this.domainService.updateDomaine(this.id, this.domain).subscribe( (data: Domaine[])  =>{
    this.domain=data;
    this.goToList();
  }
  , error => console.log(error));
}

goToList(){
  this.router.navigate(['/Menu/Menu-Services/Menu-domaine/Lister-domaine']);
}

openDialog()
{
  const dialogRef = this.dialog.open(ModifierDomaine);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(result){ this.update(this.id);}
  });
}

 
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class ModifierDomaine {}