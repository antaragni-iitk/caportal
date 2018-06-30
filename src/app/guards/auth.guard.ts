import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {FbloginService} from '@services/fblogin.service';

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
export class RegisteredUserGuard implements CanActivate {

  constructor(private localUserService: FbloginService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.localUserService.currentUser.pipe(
      map((result) => {
        if (result.personal.birthday === '') {
          this.router.navigate(['/register']);
          return false;
        }
        return true;
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
          this.router.navigate(['/dashboard']);
        }
        return !result;
      })
    );
  }
}

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: FbloginService) {
  }
  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }
}
