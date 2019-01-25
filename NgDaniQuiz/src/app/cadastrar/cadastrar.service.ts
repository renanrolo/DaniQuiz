import { HttpClient } from "@angular/common/http";
import { LogedUser } from "../security/loged-user.model";
import { URL_API } from "../app.api";
import { Observable } from "rxjs";
import { LoginService } from "../security/login.service";
import { Router } from "@angular/router";

export class CadastrarService {
    constructor(private http: HttpClient,
         private loginService: LoginService,
         private route: Router) {
    }

    cadastrarUsuario(formulario: any): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/cadastrar`, formulario)
            .do(user => {
                this.loginService.setUser(user);
                this.route.navigate(['/']);
            });
    }
}