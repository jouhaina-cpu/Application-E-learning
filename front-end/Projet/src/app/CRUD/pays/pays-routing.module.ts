import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutPaysComponent } from './ajout-pays/ajout-pays.component';

import { PaysComponent } from './pays.component';
import { ListerPaysComponent } from './lister-pays/lister-pays.component';
import { ModifierPaysComponent } from './modifier-pays/modifier-pays.component';
import { VisualiserPaysComponent } from './visualiser-pays/visualiser-pays.component';

const routes: Routes = [{ path: '', component: PaysComponent , children: [
  { path: 'Ajouter-pays', component: AjoutPaysComponent },
  { path: 'Modifer-pays', component: ModifierPaysComponent },
  { path: 'Lister-pays', component: ListerPaysComponent },
  { path: 'Visualiser-pays', component: VisualiserPaysComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaysRoutingModule { }
