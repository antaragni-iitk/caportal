import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {of} from 'rxjs';
@Injectable()
export class Funcs {
  constructor(private snackbar: MatSnackBar) {
  };

 handleError(error = 'check your internet Connection') {
    this.snackbar.open(error, '', {
      duration: 4000
    });
    return of(500);
  }
}
