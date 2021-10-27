import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ModalNewsCarComponent } from './core/components';
import { NewsService } from './core/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('newsModal', { static: true }) newsModal =
    new ModalNewsCarComponent();

  constructor(
    private primengConfig: PrimeNGConfig,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.newsService.loadNewsModal();
    this.newsService.newsModalSubject.subscribe(() => {
      this.newsModal.showModal();
    });
  }
}
