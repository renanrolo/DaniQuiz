import { Component, OnInit } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/security/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'DQ-login-cadastrar',
  templateUrl: './login-cadastrar.component.html',
  styleUrls: ['./login-cadastrar.component.css']
})
export class LoginCadastrarComponent implements OnInit {

  cadastrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private loginService: LoginService,
              private route: Router) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //     'Access-Control-Allow-Headers':
  //       'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  //   })
  // };

  ngOnInit() {
    this.cadastrarForm = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email])
    });
  }

  enviarCadastro(formulario: any) {

    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');

    // this.http.post<any>(`${URL_API}/api/cadastrar`,JSON.stringify(formulario), {
    //   headers: headers
    // })
    //   .subscribe(rest => {
    //     console.log(rest);
    //     alert("retornou");
    //   });

    //esse funciona
    // this.http.get(`${URL_API}/api/cadastrar`).subscribe(rest => {
    //   console.log("get", rest);
    // });
    this.loginService.cadastrarUsuario(formulario)
      .subscribe(() => {
        console.log("esse é o usuário logado", this.loginService.user);
        this.route.navigate(['/']);
      });

    // this.http.get(`${URL_API}/api/values`+"/1",{responseType: "text"}).subscribe(() => {
    //   console.log("values post")
    // });
  }

}
