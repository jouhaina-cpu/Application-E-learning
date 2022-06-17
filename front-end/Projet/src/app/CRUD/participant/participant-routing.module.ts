import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutParticipantComponent } from './ajout-participant/ajout-participant.component';
import { ListerParticipantComponent } from './lister-participant/lister-participant.component';
import { ModifierParticipantComponent } from './modifier-participant/modifier-participant.component';
import { ParticipantComponent } from './participant.component';
import { VisualiserParticipantComponent } from './visualiser-participant/visualiser-participant.component';

const routes: Routes = [{ path: '', component: ParticipantComponent , children: [
  { path: 'Ajouter-participant', component: AjoutParticipantComponent },
  { path: 'Modifer-participant', component: ModifierParticipantComponent },
  { path: 'Lister-participant', component: ListerParticipantComponent },
  { path: 'Visualiser-participant', component: VisualiserParticipantComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
