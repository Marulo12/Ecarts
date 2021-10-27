import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-contacts',
  templateUrl: './home-contacts.component.html',
  styleUrls: ['./home-contacts.component.scss'],
})
export class HomeContactsComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  send() {
    this.messageService.add({
      severity: 'warn',
      detail: 'Disculpe, el servicio esta temporalmente inhabilitado.',
      summary: 'Notificación',
      key: 'warning',
    });
  }
}
