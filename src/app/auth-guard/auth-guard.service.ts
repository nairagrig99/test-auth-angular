import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): Observable<boolean> {
    const isAuthenticatedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    if (isAuthenticatedUser.email) {
      return of(true);
    } else {
      this.router.navigate(['availability'])
      return of(false);
    }

  }


}
