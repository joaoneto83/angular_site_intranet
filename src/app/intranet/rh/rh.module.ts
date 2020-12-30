import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { RHComponent } from './rh.component';
import { BannerModule } from '../_shared/banner/banner.module';
import { CalendarioRHComponent } from './calendario-rh/calendario-rh.component';
import { BoxModule } from '../_shared/box/box.module';
import { TituloCategoriaModule } from '../_shared/titulo-categoria/titulo-categoria.module';
import { AvisoModule } from '../_shared/aviso/aviso.module';
import { ShowIfAdminModule } from '../../../app/_shared/directives/show-if-admin/show-if-admin.module';
import { NewsComponent } from './news/news.component';
import { CardNewsComponent } from './news/card-news/card-news.component';
import { ModalEditarElginNewsComponent } from './news/modal-editar-elginnews/modal-editar-elginnews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescricaoCaminhoModule } from '../_shared/descricao-caminho/descricao-caminho.module';
import { UploadFileModule } from '../_shared/upload-file/upload-file.module';
import { EventoComponent } from './evento/evento.component';
import { AniversariantesComponent } from './aniversariantes/aniversariantes.component';
import { EditEventoComponent } from './evento/edit-evento/edit-evento.component';
import { ResponsavelSetorComponent } from './responsavel-setor/responsavel-setor.component';
import { EditResponsavelSetorComponent } from './responsavel-setor/edit-responsavel-setor/edit-responsavel-setor.component';
import { ListaTelefonicaComponent } from './lista-telefonica/lista-telefonica.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { LojaFuncionarioComponent } from './loja-funcionario/loja-funcionario.component';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropositoComponent } from './proposito/proposito.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FiltrarFeriadosPorMes } from './filtrar-feriados-mes.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        RHComponent,
        CalendarioRHComponent,
        NewsComponent,
        CardNewsComponent,
        ModalEditarElginNewsComponent,
        EventoComponent,
        EditEventoComponent,
        AniversariantesComponent,
        ResponsavelSetorComponent,
        EditResponsavelSetorComponent,
        ListaTelefonicaComponent,
        SolicitacaoComponent,
        LojaFuncionarioComponent,
        PropositoComponent,
        FiltrarFeriadosPorMes
    ],
    exports: [RHComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ShowIfAdminModule,
        Ng2SearchPipeModule,
        BannerModule,
        AvisoModule,
        BoxModule,
        TituloCategoriaModule,
        DescricaoCaminhoModule,
        UploadFileModule,
        CustomInputModule,
        CKEditorModule,
    ]
})
export class RHModule { }