import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { loadUsers } from '../../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[] = [];

  error: any = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('users').subscribe(({ users, error }) => {
      this.users = users;
      this.error = error;
    });
    this.store.dispatch(loadUsers());


  }

}
