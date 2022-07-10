import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [{
  path: '',component:DashboardComponent,
  children:[
    {path:'',component:UserComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
