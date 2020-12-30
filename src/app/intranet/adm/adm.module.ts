import { NgModule } from "@angular/core";
import { AdmArquivosModule } from './adm-arquivos/adm-arquivos.module';
import { AdmPerfilModule } from './adm-perfil/adm-perfil.module';
import { AdmUsuarioModule } from './adm-usuario/adm-usuario.module';
import { CpfCnpjValidatorDirective } from '../../../app/_shared/validators/cpf-cnpj.validator/cpf-cnpj.validator.directive';
import { AdmAssistenciaVinculadaModule } from './adm-assistencia-vinculada/adm-assistencia-vinculada.module';
import { AdmBannerHomeModule } from './adm-banner/adm-banner.module';
import { AdmSublinhaModule } from './adm-sublinha/adm-sublinha.module';
// import { AdmPecaReposicaoModule } from './adm-peca-reposicao/adm-peca-reposicao.module';
import { AdmGerenciaArquivosModule } from './adm-gerencia-arquivos/adm-gerencia-arquivos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmSubsiteModule } from './adm-subsite/adm-subsite.module';
import { AdmAssistenciaModule } from './adm-assistencia/adm-assistencia.module';


@NgModule({
    declarations: [
        CpfCnpjValidatorDirective
    ],
    exports: [],
    imports: [
        AdmArquivosModule,
        AdmGerenciaArquivosModule,
        AdmPerfilModule,
        AdmUsuarioModule,
        AdmAssistenciaModule,
        AdmAssistenciaVinculadaModule,
        AdmBannerHomeModule,
        AdmSublinhaModule,
        FormsModule,
        ReactiveFormsModule,
        // AdmPecaReposicaoModule,
        AdmSubsiteModule
    ]
})
export class AdmModule { }