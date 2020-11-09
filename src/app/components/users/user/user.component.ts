import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { loadUser } from '../../../store/actions/user.actions';
import { filter } from 'rxjs/operators';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = null;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params);
      if (params?.id) {
        this.store.dispatch(loadUser({ id: params.id }));
      }
    });

    this.store.select('user').pipe(
      filter(({ user }) => user !== null)
    ).subscribe(({ user }) => {
      console.log(user);
      this.user = user;
    });
  }

}
