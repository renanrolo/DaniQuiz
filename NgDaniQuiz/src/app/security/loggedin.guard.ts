import { CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService) { }

    canLoad(route: Route): boolean {
        //route.path.includes("professor/")
        if (this.loginService.isLoged()) {
            return true;
        }

        this.loginService.handdleLogin(`/${route.path}`);
    }

}