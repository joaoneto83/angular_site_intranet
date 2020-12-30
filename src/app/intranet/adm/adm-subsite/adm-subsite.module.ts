import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmSubsiteComponent } from './adm-subsite.component';
import { SubsiteSolarModule } from './subsite-solar/subsite-solar.module';
import { SubsiteGelattaModule } from './subsite-gelatta/subsite-gelatta.module';
import { MatExpansionModule } from '@angular/material';
import { SubsiteAutomacaoModule } from './subsite-automacao/subsite-automacao.module';
import { SubsiteRefrigeracaoModule } from './subsite-refrigeracao/subsite-refrigeracao.module';

@NgModule({
    declarations: [
        AdmSubsiteComponent,
    ],
    exports: [AdmSubsiteComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatExpansionModule,
        FormsModule,
        ReactiveFormsModule,
        SubsiteSolarModule,
        SubsiteGelattaModule,
        SubsiteAutomacaoModule,
        SubsiteRefrigeracaoModule
    ]
})
export class AdmSubsiteModule { }