import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



 @Component({
  selector: 'app-ajout-employe',
  templateUrl: './modifier-participant.component.html',
  styleUrls: ['./modifier-participant.component.scss']
})

 
export class ModifierParticipantComponent  implements OnInit {


constructor(public dialog: MatDialog, private fb: FormBuilder) {


}

openDialog() {
  const dialogRef = this.dialog.open(ModifierParticipant);

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
export class ModifierParticipant {}