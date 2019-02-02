import { Envelope } from "src/app/shared/envelope.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URL_API } from "src/app/app.api";
import { Observable } from "rxjs";
import { NotificationService } from "src/app/shared/messages/notification.service";
import { Router } from "@angular/router";

@Injectable()
export class EnqueteService {

    constructor(private http: HttpClient,
        private notification: NotificationService,
        private route: Router) { }

    cadastrar(formulario: any): Observable<Envelope<any>> {
        var request = this.http.post<Envelope<any>>(`${URL_API}/CadastrarEnquete`, formulario);

        request.subscribe(envelope => {
            if (envelope.status !== true) {
                this.notification.notify(envelope.message);
            }
        });

        return request;
    }
}