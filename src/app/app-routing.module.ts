import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFlowersComponent } from './show-flowers/show-flowers.component';
import { CreateFlowerComponent } from './create-flower/create-flower.component';

const routes: Routes = [
  {path: 'show-flowers', component: ShowFlowersComponent},
  {path: 'create-flower', component: CreateFlowerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
