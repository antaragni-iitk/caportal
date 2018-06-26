import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {FbloginService} from '../services/fblogin.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class LocalUserGuard implements CanActivate {

  constructor(private localUserService: FbloginService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.localUserService.isAuthenticated$.pipe(
      map((result) => {
        if (!result) {
          this.router.navigate(['/landing']);
        }
        return !!result;
      })
    );
  }
}

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private localUserService: FbloginService,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.localUserService.$logged.pipe(
      map((result) => {
        if (result) {
          this.router.navigate(['dashboard']);
        }
        return !result;
      })
    );
  }
}

