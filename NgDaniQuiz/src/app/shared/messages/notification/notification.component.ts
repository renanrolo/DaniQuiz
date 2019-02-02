import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { NotificationService } from '../notification.service';
import { timer } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'DQ-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('notification-visibility', [
      state('hidden', style({
        opacity: 0,
        right: '-250px'
      })),
      state('visible', style({
        opacity: 1,
        right: '5px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class NotificationComponent implements OnInit {

  message: string = 'olá mundo';

  notificationVisibility: string = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.messages
      .do(message => {
        this.message = message;
        this.notificationVisibility = 'visible';
        //timer(3000).subscribe(timer => this.notificationVisibility = 'hidden');
      }).switchMap(message => timer(3000)).subscribe(timer =>
        this.notificationVisibility = 'hidden')
  }

}
