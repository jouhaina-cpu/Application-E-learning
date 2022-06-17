import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './crud.component';

const routes: Routes = [{ path: '', component: CrudComponent },
{ path: 'Menu-domaine', loadChildren: () => import('./domaine/domaine.module').then(m => m.DomaineModule) },
{ path: 'Menu-organisme', loadChildren: () => import('./organisme/organisme.module').then(m => m.OrganismeModule) },
{ path: 'Menu-pays', loadChildren: () => import('./pays/pays.module').then(m => m.PaysModule) },
{ path: 'Menu-formateur', loadChildren: () => import('./formateur/formateur.module').then(m => m.FormateurModule) },
{ path: 'Menu-formation', loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule) },
{ path: 'Menu-participant', loadChildren: () => import('./participant/participant.module').then(m => m.ParticipantModule) },
{ path: 'Menu-session-formation', loadChildren: () => import('./session_formation/sessionformation.module').then(m => m.SessionFormationModule) },
{ path: 'Menu-user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
