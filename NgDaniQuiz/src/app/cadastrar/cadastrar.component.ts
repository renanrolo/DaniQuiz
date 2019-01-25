import { Component, OnInit } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/security/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dq-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit() {
    this.cadastrarForm = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email])
    });
  }

  enviarCadastro(formulario: any) {
    this.loginService.cadastrarUsuario(formulario)
                    .subscribe(() => {
                      this.route.navigate(['/']);
                    });
  }

}
