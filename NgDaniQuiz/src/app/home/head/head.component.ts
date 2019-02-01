import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'DQ-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private loginService: LoginService
    ,private route: Router) { }

  ngOnInit() {
  }

  isLoged(){
    return this.loginService.isLoged();
  }

  logOut(){
    this.loginService.logOut();
    this.route.navigate(['']);
  }
}
