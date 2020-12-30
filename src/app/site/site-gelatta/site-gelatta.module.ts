import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { AnimateModule } from '../../_shared/animate-component/animate.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteGelattaComponent } from './site-gelatta.component';
import { BannerHomeModule } from '../../_shared/banner-home/banner-home.module';
import { SitePecasReposicaoComponent } from './site-pecas-reposicao/site-pecas-reposicao.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { SiteLucroSorveteComponent } from './site-lucro-sorvete/site-lucro-sorvete.component';
import { SiteCarrosselGelattaComponent } from './site-carrossel-gelatta/site-carrossel-gelatta.component';
import { SiteCarrinhoGelattaComponent } from './site-carrinho-gelatta/site-carrinho-gelatta.component';
import { SiteFormularioCompraComponent } from './site-carrinho-gelatta/site-formulario-compra/site-formulario-compra.component';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
    declarations: [
        SiteGelattaComponent,
        SitePecasReposicaoComponent,
        SiteLucroSorveteComponent,
        SiteCarrosselGelattaComponent,
        SiteCarrinhoGelattaComponent,
        SiteFormularioCompraComponent
    ],
    exports: [SiteGelattaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        AnimateModule,
        OrderModule,
        BannerHomeModule,
        MatSliderModule,
        BrowserModule,
        BrowserAnimationsModule,
        Ng5SliderModule,
        ReactiveFormsModule,
        SiteCustomInputModule,
        NgxMaskModule.forRoot(options),
        TextMaskModule
    ]
})
export class SiteGelattaModule { }