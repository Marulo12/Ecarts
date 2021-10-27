import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-news-car',
  templateUrl: './modal-news-car.component.html',
  styleUrls: ['./modal-news-car.component.scss'],
})
export class ModalNewsCarComponent implements OnInit {
  display: boolean;
  constructor() {
    this.display = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.display = true;
    }, 4000);
  }

  public showModal() {
    this.display = true;
  }
}
