import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertWarningService {

  constructor() { }

  showError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }
}
