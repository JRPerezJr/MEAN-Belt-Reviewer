import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { RideComponent } from './ride/ride.component';


const routes: Routes = [
  {path: 'rides', component: MainComponent},
  {path: 'rides/new', component: AddComponent},
  {path: 'rides/:id', component: RideComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
