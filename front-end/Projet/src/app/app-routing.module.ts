import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './Authentification/authentification.component';
import { MenuComponent } from './menu/menu.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'Connexion', pathMatch: 'full' },
    {path: 'Connexion', component: ConnexionComponent},  
    {path: 'Menu', component: MenuComponent, children: [      
      { path: 'Menu-Services', loadChildren: () => import('./CRUD/crud.module').then(m => m.CrudModule) },
      { path: 'Compte', loadChildren: () => import('./Compte/compte.module').then(m => m.CompteModule) },
     ]
  }
] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
