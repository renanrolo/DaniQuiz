import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "../login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loginService = this.injector.get(LoginService);
        if (loginService.isLoged()) {
            const authRequest = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${loginService.user.accessToken}`
                }
            });
            return next.handle(authRequest);
        }
        return next.handle(request);
    }
}