import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFormationComponent } from './ajout-formation/ajout-formation.component';
import { FormationComponent } from './formation.component';
import { ListerFormationComponent } from './lister-formation/lister-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { VisualiserFormationComponent } from './visualiser-formation/visualiser-formation.component';

const routes: Routes = [{ path: '', component: FormationComponent , children: [
  { path: 'Ajouter-formation', component: AjoutFormationComponent },
  { path: 'Modifer-formation/:id', component: ModifierFormationComponent },
  { path: 'Lister-formation', component: ListerFormationComponent },
  { path: 'Visualiser-formation/id', component: VisualiserFormationComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
