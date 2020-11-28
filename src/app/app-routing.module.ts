import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiverFrontComponent } from './river-front/river-front.component';

const routes: Routes = [{
  path: 'river', component: RiverFrontComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
