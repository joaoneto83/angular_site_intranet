import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteAparelhoIdealComponent } from './site.aparelho.ideal.component';
import { SiteCardResultadoAparelhoIdealComponent } from './site-card-resultado-aparelho-ideal/site.card.resultado.aparelho.ideal.component';
import { SiteBoxAparelhoIdealComponent } from './site-box-aparelho-ideal/site.box.aparelho.ideal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        SiteAparelhoIdealComponent,
        SiteCardResultadoAparelhoIdealComponent,
  

        SiteBoxAparelhoIdealComponent
    ],
    exports: [SiteAparelhoIdealComponent],
    imports: [
        CommonModule,
    
        RouterModule,
        FormsModule
    ]
})
export class SiteAparelhoIdealModule { }