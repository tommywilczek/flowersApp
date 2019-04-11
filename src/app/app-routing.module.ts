import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFlowersComponent } from './show-flowers/show-flowers.component';

const routes: Routes = [
  {path: 'show-flowers', component: ShowFlowersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
