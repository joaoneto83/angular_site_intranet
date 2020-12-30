import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../app/_core/services/token.service';

@Injectable({ providedIn: 'root'})
export class RoleGuard implements CanActivate {

    constructor(
        private tokenService: TokenService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
            let roles = route.data["roles"] as Array<string>;
            
            if(!this.tokenService.haveRoles(roles)){
                this.router.navigate(
                    ['/PortaldeApoio']
                );
                return false;
            }
            return true;
    }
}