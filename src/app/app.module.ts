import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRouteModule } from './app.route.module';
import { SiteModule } from './site/site.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RequestInterceptor } from './_core/interceptors/request.interceptor';
import { ModalBannerModule } from './site/modal-banner/modal-banner.module';
import { NgGoogleAnalyticsModule } from "ng-google-analytics";

@NgModule({
  declarations: [ 
    AppComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'elgin-intranet-app' }),
    SiteModule,
    AppRouteModule,
    HttpClientModule,
    ModalBannerModule,
    BrowserAnimationsModule,
    // NgGoogleAnalyticsModule.forRoot({ id: "UA-177288734-1" }),
    NgxLoadingModule.forRoot({})
  ],
  bootstrap: [AppComponent],
    providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' },
      { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    ],
})
export class AppModule { }
