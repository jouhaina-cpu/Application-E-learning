import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFormateurComponent } from './ajout-formateur/ajout-formateur.component';

import { FormateurComponent } from './formateur.component';
import { ListerFormateurComponent } from './lister-formateur/lister-formateur.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';
import { VisualiserFormateurComponent } from './visualiser-formateur/visualiser-formateur.component';

const routes: Routes = [{ path: '', component: FormateurComponent , children: [
  { path: 'Ajouter-formateur', component: AjoutFormateurComponent },
  { path: 'Modifer-formateur/:id', component: ModifierFormateurComponent },
  { path: 'Lister-formateur', component: ListerFormateurComponent },
  { path: 'Visualiser-formateur/:id', component: VisualiserFormateurComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
