import { Component, OnInit, Injectable } from '@angular/core';
import { MenuLateralService } from './menu-lateral-service';

@Component({
  selector: 'DQ-menu-lateral-professor',
  templateUrl: './menu-lateral-professor.component.html',
  styleUrls: ['./menu-lateral-professor.component.css']
})

@Injectable()
export class MenuLateralProfessorComponent implements OnInit {

  constructor(private menuLateralService: MenuLateralService) { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.menuLateralService.toggleNavBar()
  }
}
