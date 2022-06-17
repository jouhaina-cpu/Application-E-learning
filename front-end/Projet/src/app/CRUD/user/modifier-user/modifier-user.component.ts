import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.scss']
})

 
export class ModifierUserComponent  implements OnInit {



constructor(public dialog: MatDialog, private fb: FormBuilder) {


}

openDialog() {
  const dialogRef = this.dialog.open(ModifierUser);

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
export class ModifierUser {}