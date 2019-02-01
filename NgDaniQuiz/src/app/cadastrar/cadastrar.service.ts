import { HttpClient } from "@angular/common/http";
import { URL_API } from "../app.api";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "../login/login.service";
import { NotificationService } from "../shared/messages/notification.service";
import { LogedUser } from "../login/loged-user.model";

export class CadastrarService {
    constructor(private http: HttpClient,
        private loginService: LoginService,
        private route: Router,
        private notification: NotificationService) { }

    cadastrarUsuario(formulario: any): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/cadastrar`, formulario)
            .do(user => {
                if (user.status === true) {
                    this.loginService.setUser(user);
                    this.route.navigate(['/']);
                }
                else {
                    this.notification.notify(user.message);
                }
            });
    }
}