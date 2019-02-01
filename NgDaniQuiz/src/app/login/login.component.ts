import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogedUser } from './loged-user.model';
import { NotificationService } from '../shared/messages/notification.service';

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
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => {
        if (user.status === true) {
          this.route.navigate([this.navigateTo]);
        }
      },
        (erro: Error) => { this.notificationService.notify(erro.message); } //Está faltando o tratamento de erro
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
