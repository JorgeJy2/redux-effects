import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(idUser): void {
    if (!idUser) {
      console.log('ERROR');
      return;
    }
    console.log(idUser);
    this.router.navigate(['/user', idUser]);
  }
}
