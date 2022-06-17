import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { UserComponent } from './user.component';
import { VisualiserUserComponent } from './visualiser-user/visualiser-user.component';

const routes: Routes = [{ path: '', component: UserComponent , children: [
  { path: 'Ajouter-user', component: AjoutUserComponent},
  { path: 'Modifer-user', component: ModifierUserComponent },
  { path: 'Lister-user', component: ListerUserComponent },
  { path: 'Visualiser-user', component: VisualiserUserComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
