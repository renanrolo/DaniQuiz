import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../security/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogedUser } from '../security/loged-user.model';

@Component({
  selector: 'DQ-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  // login() {
  //   this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
  //     .subscribe(user => { this.user = user; console.log("entrou", user) },
  //       (erro: Error) => { console.log(erro) }, //Está faltando o tratamento de erro
  //       () =>
  //         this.route.navigate([this.navigateTo])
  //     )
  // }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => {
        if (user.authenticated) {
          this.route.navigate([this.navigateTo]);
        }
      },
        (erro: Error) => { console.log(erro) } //Está faltando o tratamento de erro
      )
  }

  isValid(): boolean {
    return this.loginForm.valid;
  }

  isLoged(): boolean {
    return this.loginService.isLoged();
  }

  getUser(): LogedUser {
    return this.loginService.user;
  }

}
