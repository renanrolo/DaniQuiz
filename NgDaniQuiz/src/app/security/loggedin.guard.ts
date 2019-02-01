import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
import { Observable } from "rxjs";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    canLoad(route: Route): boolean {
        //route.path.includes("professor/")
        if (this.loginService.isLoged()) {
            return true;
        }

        this.loginService.handdleLogin(`/${route.path}`);
    }

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            if (this.loginService.isLoged()) {
                return true;
            }
            this.loginService.handdleLogin(`/${route.routeConfig.path}`);
    }
}