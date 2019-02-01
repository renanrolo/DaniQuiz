import { Component, OnInit, Injectable } from '@angular/core';
import { MenuLateralService } from '../menu-lateral-professor/menu-lateral-service';

@Component({
  selector: 'DQ-layout-professor',
  templateUrl: './layout-professor.component.html',
  styleUrls: ['./layout-professor.component.css']
})

@Injectable()
export class LayoutProfessorComponent implements OnInit {

  sidebarClass: string;

  constructor(public menuLateralService: MenuLateralService) { }

  ngOnInit() {
    this.sidebarClass = this.menuLateralService.classMenu;
  }

}
