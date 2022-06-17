import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})

 
export class AjoutUserComponent  implements OnInit {



constructor(public dialog: MatDialog, private fb: FormBuilder) {

}

//  création d' Employé
openDialog() {
  const dialogRef = this.dialog.open(AjoutUser);

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
export class AjoutUser {}