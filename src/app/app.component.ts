import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>, private spinner: NgxSpinnerService) {
    this.store.select('ui').subscribe(({ isLoading }) =>
      isLoading ? this.spinner.show() : this.spinner.hide()
    );
  }

}
