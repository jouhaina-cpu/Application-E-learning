import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.scss']
})

 
export class ModifierFormationComponent  implements OnInit {



constructor(public dialog: MatDialog, private fb: FormBuilder) {


}

openDialog() {
  const dialogRef = this.dialog.open(ModifierFormation);

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
export class ModifierFormation {}