import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'DQ-menu-top-professor',
  templateUrl: './menu-top-professor.component.html',
  styleUrls: ['./menu-top-professor.component.css']
})
export class MenuTopProfessorComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logOut()
  }
}
