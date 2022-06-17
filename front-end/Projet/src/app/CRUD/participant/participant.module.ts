import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDialogModule } from '@angular/material/dialog';
import { ParticipantComponent } from './participant.component';
import { AjoutParticipant, AjoutParticipantComponent } from './ajout-participant/ajout-participant.component';
import { VisualiserParticipantComponent } from './visualiser-participant/visualiser-participant.component';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ModifierParticipant, ModifierParticipantComponent } from './modifier-participant/modifier-participant.component';
import { ListerParticipantComponent, SupprimerParticipant } from './lister-participant/lister-participant.component';

@NgModule({
  declarations: [ParticipantComponent,ModifierParticipantComponent,ModifierParticipant,
    AjoutParticipantComponent,AjoutParticipant,ListerParticipantComponent,SupprimerParticipant,
    VisualiserParticipantComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    ParticipantRoutingModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatTableFilterModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,MatCardModule,NgxMatFileInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSortModule
    
  ]
})
export class ParticipantModule { }
