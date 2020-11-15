import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { loadUser } from '../../../store/actions/user.actions';
import { User } from '../../../models/user.model';
import { Subscription } from 'rxjs';
import { AlertWarningService } from 'src/app/services/alert-warning.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User = null;
  userSubscription: Subscription;
  constructor(private router: ActivatedRoute, private store: Store<AppState>, private alertWarningService: AlertWarningService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params);
      if (params?.id) {
        this.store.dispatch(loadUser({ id: params.id }));
      }
    });
    this.userSubscription = this.store.select('user').subscribe(({ user, error }) => {
      if (error) {
        this.alertWarningService.showError(error.statusText);
        this.user = null;
      }
      if (user) {
        console.log(user);
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
