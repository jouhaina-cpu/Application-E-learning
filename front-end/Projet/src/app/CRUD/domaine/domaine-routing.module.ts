import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutDomaineComponent } from './ajout-domaine/ajout-domaine.component';

import { DomaineComponent } from './domaine.component';
import { ListeDomaineComponent } from './lister-domaine/lister-domaine.component';
import { ModifierDomaineComponent } from './modifier-domaine/modifier-domaine.component';
import { VisualiserDomaineComponent } from './visualiser-domaine/visualiser-domaine.component';

const routes: Routes = [{ path: '', component: DomaineComponent , children: [
  { path: 'Ajouter-domaine', component: AjoutDomaineComponent },
  { path: 'Modifer-domaine/:id', component: ModifierDomaineComponent },
  { path: 'Lister-domaine', component: ListeDomaineComponent },
  { path: 'Visualiser-domaine/:id', component: VisualiserDomaineComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomaineRoutingModule { }
