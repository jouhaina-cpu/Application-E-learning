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
import { SessionFormationComponent } from './sessionformation.component';
import { ModifierSessionFormation, ModifierSessionFormationComponent } from './modifier-sessionformation/modifier-sessionformation.component';
import { AjoutSessionFormation, AjoutSessionFormationComponent } from './ajout-sessionformation/ajout-sessionformation.component';
import { ListerSessionFormationComponent, SupprimerSessionFormation } from './lister-sessionformation/lister-sessionformation.component';
import { VisualiserSessionFormationComponent } from './visualiser-sessionformation/visualiser-sessionformation.component';
import { SessionFormationRoutingModule } from './sessionformation-routing.module';

@NgModule({
  declarations: [SessionFormationComponent,ModifierSessionFormationComponent,ModifierSessionFormation,
    AjoutSessionFormationComponent,AjoutSessionFormation,ListerSessionFormationComponent,SupprimerSessionFormation,
    VisualiserSessionFormationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    SessionFormationRoutingModule,
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
export class SessionFormationModule { }
