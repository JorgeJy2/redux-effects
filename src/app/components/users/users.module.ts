import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [ListComponent, UserComponent, SearchComponent, PageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListComponent, UserComponent, PageComponent
  ]
})
export class UsersModule { }
