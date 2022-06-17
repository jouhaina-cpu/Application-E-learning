import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-sessionformation.component.html',
  styleUrls: ['./modifier-sessionformation.component.scss']
})

 
export class ModifierSessionFormationComponent  implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });



Informations_Generales_Form: FormGroup;


constructor(public dialog: MatDialog, private fb: FormBuilder) {

  this.Informations_Generales_Form = this.fb.group({
    Pays: ['', Validators.required],
   
  });

}

openDialog() {
  const dialogRef = this.dialog.open(ModifierSessionFormation);

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
}

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class ModifierSessionFormation {}