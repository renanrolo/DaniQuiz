import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { URL_API } from "../app.api";
import { Router } from "@angular/router";
import { LogedUser } from "./loged-user.model";
import 'rxjs/add/operator/do';
import { NotificationService } from "../shared/messages/notification.service";

@Injectable()
export class LoginService {

    user: LogedUser;
    navigateTo: string;

    private userStorageKey = "daniQuizUser";

    constructor(private http: HttpClient,
        private fb: FormBuilder,
        private route: Router,
        private notificationService: NotificationService) {
        this.checkUser();
    }

    cadastrarUsuario(formulario: any): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/cadastrar`, formulario).do(user => {
            this.notificationService.notify(user.message);
            if(user.status === true){
                this.setUser(user);
            }
        });
    }

    ngOnInit() {
        this.checkUser();
    }

    isLoged(): boolean {
        return this.user !== undefined;
    }

    logOut() {
        this.setUser(undefined);
    }

    login(email: string, password: string): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/login`, { email: email, senha: password })
            .do(user => {
                if (user.status === true) {
                    this.notificationService.notify(user.message);
                    this.setUser(user);
                }
                else if (user.status === false) {
                    this.notificationService.notify(user.message);
                }
            });
    }

    handdleLogin(returnPath?: string) {
        this.navigateTo = returnPath || '';
        this.route.navigate(['/login', returnPath]);
    }

    private checkUser() {
        if (!this.user) {
            let usuarioSalvo = JSON.parse(sessionStorage.getItem(this.userStorageKey));
            if (usuarioSalvo) {
                this.user = new LogedUser;
                this.user.Email = usuarioSalvo.Email;
                this.user.Expiration = usuarioSalvo.Expiration;
                this.user.Name = usuarioSalvo.Name;
                this.user.accessToken = usuarioSalvo.accessToken;
                this.user.authenticated = usuarioSalvo.authenticated;
            }
        }
    }

    public setUser(user: LogedUser) {
        this.user = user;
        if (user) {
            sessionStorage.setItem(this.userStorageKey, JSON.stringify(user));
        }
        else {
            sessionStorage.removeItem(this.userStorageKey);
        }

    }
}