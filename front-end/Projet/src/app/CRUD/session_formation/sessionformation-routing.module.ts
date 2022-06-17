import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutSessionFormationComponent } from './ajout-sessionformation/ajout-sessionformation.component';
import { ListerSessionFormationComponent } from './lister-sessionformation/lister-sessionformation.component';
import { ModifierSessionFormationComponent } from './modifier-sessionformation/modifier-sessionformation.component';
import { SessionFormationComponent } from './sessionformation.component';
import { VisualiserSessionFormationComponent } from './visualiser-sessionformation/visualiser-sessionformation.component';

const routes: Routes = [{ path: '', component: SessionFormationComponent , children: [
  { path: 'Ajouter-session', component: AjoutSessionFormationComponent },
  { path: 'Modifer-session', component: ModifierSessionFormationComponent },
  { path: 'Lister-session', component: ListerSessionFormationComponent },
  { path: 'Visualiser-session', component: VisualiserSessionFormationComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionFormationRoutingModule { }
