import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutOrganismeComponent } from './ajout-organisme/ajout-organisme.component';

import { OrganismeComponent } from './organisme.component';
import { ListerOrganismeComponent } from './lister-organisme/lister-organisme.component';
import { ModifierOrganismeComponent } from './modifier-organisme/modifier-organisme.component';
import { VisualiserOrganismeComponent } from './visualiser-organisme/visualiser-organisme.component';

const routes: Routes = [{ path: '', component: OrganismeComponent , children: [
  { path: 'Ajouter-organisme', component: AjoutOrganismeComponent },
  { path: 'Modifer-organisme/:id', component: ModifierOrganismeComponent },
  { path: 'Lister-organisme', component: ListerOrganismeComponent },
  { path: 'Visualiser-organisme/:id', component: VisualiserOrganismeComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismeRoutingModule { }
