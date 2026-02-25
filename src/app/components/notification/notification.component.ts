import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService, Notification } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notification => {
      this.snackBar.open(notification.message, 'Close', {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: [`snackbar-${notification.type}`]
      });
    });
  }
}
