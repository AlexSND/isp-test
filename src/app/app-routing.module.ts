import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './components/all/all.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HiddenComponent } from './components/hidden/hidden.component';

const routes: Routes = [
  { path: 'all', component: AllComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'hidden', component: HiddenComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
