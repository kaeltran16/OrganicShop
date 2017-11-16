import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../shared/services/auth-services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/map';
import { UserService } from "../../shared/services/user-services/user.service";



@Injectable()
export class AdminAuthGuardService implements CanActivate {
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin)
  }

  constructor(private auth: AuthService, private userService: UserService) { }

}