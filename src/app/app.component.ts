import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { LoadingService } from './_shared/services/loading.service';

import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Elgin';
  loadingService: LoadingService;
  subscription: any;
  loading: boolean = false;

  constructor(loadingService: LoadingService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.loadingService = loadingService;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }

    this.subscription = this.loadingService.getEmittedValue()
      .subscribe(item => this.loading = item);
  }

  onActivate(event) {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
}
