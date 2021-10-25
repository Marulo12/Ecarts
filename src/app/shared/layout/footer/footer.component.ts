import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.messageService.add({severity:'warn', detail: 'Disculpe, el servicio esta temporalmente inhabilitado.', summary:'Notificación', key:'warning'})
    return;
  }



}
