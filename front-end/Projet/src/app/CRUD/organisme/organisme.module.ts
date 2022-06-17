import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismeComponent } from './organisme.component';
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
import { SupprimerOrganisme, ListerOrganismeComponent } from './lister-organisme/lister-organisme.component';
import { AjoutOrganismeComponent, AjouterOrganisme } from './ajout-organisme/ajout-organisme.component';
import { ModifierOrganismeComponent, ModifierDialog } from './modifier-organisme/modifier-organisme.component';
import { VisualiserOrganismeComponent } from './visualiser-organisme/visualiser-organisme.component';
import {MatTabsModule} from '@angular/material/tabs';

 
 

import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { OrganismeRoutingModule } from './organisme-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [OrganismeComponent,ModifierDialog,SupprimerOrganisme,
    ListerOrganismeComponent,AjoutOrganismeComponent,AjouterOrganisme,
    ModifierOrganismeComponent,VisualiserOrganismeComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    OrganismeRoutingModule,
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
export class OrganismeModule { }
