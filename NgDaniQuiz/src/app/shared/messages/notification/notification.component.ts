import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'DQ-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message: string;
  
  constructor() { }

  ngOnInit() {
  }

}
