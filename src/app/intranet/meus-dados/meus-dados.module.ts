import { NgModule } from "@angular/core";
import { AdmUsuarioModule } from '../adm/adm-usuario/adm-usuario.module';
import { MeusDadosComponent } from './meus-dados.component';

@NgModule({
    declarations: [
        MeusDadosComponent
    ],
    exports: [MeusDadosComponent],
    imports: [
        AdmUsuarioModule,
        
    ]
})
export class MeusDadosModule { }