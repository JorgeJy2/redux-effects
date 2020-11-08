import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/users/list/list.component';
import { UserComponent } from './components/users/user/user.component';

const routes: Routes = [
    {
      path: 'home',
      component: ListComponent
    }, {
      path: 'user/:id',
      component: UserComponent
    }, {
      path: '**',
      redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
