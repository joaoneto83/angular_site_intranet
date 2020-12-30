import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TreinamentoComponent } from './treinamento.component';
import { SubMenuModule } from '../_shared/submenu/submenu.module';
import { TituloCategoriaModule } from '../_shared/titulo-categoria/titulo-categoria.module';
import { FiltraPorClassificacao } from './filtra-por-classificacao.pipe';
import { CardProdutosModule } from '../_shared/card-produtos/card-produtos.module';
import { BoxModule } from '../_shared/box/box.module';
import { SubMenuTreinamentoComponent } from './submenu-treinamento/submenu-treinamento.component';
import { ProvaComponent } from './prova/questionario/prova.component';
import { ProvaConfirmacaoComponent } from './prova/questionario/prova-confirmacao/prova-confirmacao.component';
import { ListaProvaComponent } from './prova/lista-prova.component';
import { ProvaEditComponent } from './prova/prova-edit/prova-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material';
import { BlocoProdutoComponent } from './prova/prova-edit/bloco-produto/bloco-produto.component';
import { CadastroQuestaoComponent } from './prova/prova-edit/cadastro-questao/cadastro-questao.component';
import { CadastroAlternativaComponent } from './prova/prova-edit/cadastro-alternativa/cadastro-alternativa.component';
import { ListaAgendamentoComponent } from './agendamento/lista-agendamento.component';
import { AgendamentoEditComponent } from './agendamento/agendamento-edit/agendamento-edit.component';
import { BlocoGrupoComponent } from './agendamento/agendamento-edit/bloco-grupo/bloco-grupo.component';
import { BlocoPessoasComponent } from './agendamento/agendamento-edit/bloco-pessoas/bloco-pessoas.component';
import { ListaGrupoComponent } from './grupo/lista-grupo.component';
import { GrupoEditComponent } from './grupo/grupo-edit/grupo-edit.component';
import { BlocoUsuariosComponent } from './grupo/grupo-edit/bloco-usuarios/bloco-usuarios.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario.component';
import { ProvasUsuarioComponent } from './provas-usuario/provas-usuario.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ShowIfAdminModule } from '../../../app/_shared/directives/show-if-admin/show-if-admin.module';
import { ResultadoComponent } from './resultado/resultado.component';
import { ProvaCapaComponent } from './prova/questionario/prova-capa/prova-capa.component';
import { RangeDateModule } from '../_shared/range-date/range-date.module';
import { OrderModule } from 'ngx-order-pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { GraficoResultadoComponent } from './resultado/grafico-resultado/grafico-resultado.component';
import { ModalEditDocumentosComponent } from './modal-edit-documentos/modal-edit-documentos.component';
import { UploadFileMultipleModule } from '../_shared/upload-file-multiple/upload-file-multiple.module';
import { ModalVisualizarVideoModule } from '../_shared/modal-visualizar-video/modal-visualizar-video.module';

@NgModule({
    declarations: [
        TreinamentoComponent,
        ProvaComponent,
        ProvaConfirmacaoComponent,
        FiltraPorClassificacao,
        SubMenuTreinamentoComponent,
        ListaProvaComponent,
        ProvaEditComponent,
        BlocoProdutoComponent,
        CadastroQuestaoComponent,
        CadastroAlternativaComponent,
        ListaAgendamentoComponent,
        AgendamentoEditComponent,
        BlocoGrupoComponent,
        BlocoPessoasComponent,
        ListaGrupoComponent,
        GrupoEditComponent,
        BlocoUsuariosComponent,
        ListaUsuarioComponent,
        ProvasUsuarioComponent,
        ResultadoComponent,
        ProvaCapaComponent,
        GraficoResultadoComponent,
        ModalEditDocumentosComponent,
    ],
    exports: [TreinamentoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        SubMenuModule,
        TituloCategoriaModule,
        CardProdutosModule,
        BoxModule,
        CustomInputModule,
        ShowIfAdminModule,
        RangeDateModule,
        CustomInputModule,
        UploadFileMultipleModule,
        ModalVisualizarVideoModule,

        NgxMasonryModule,
        OrderModule,
        NgxPaginationModule,
        NgbDatepickerModule,
        MatExpansionModule,
        NgCircleProgressModule.forRoot({
            "backgroundOpacity": 1,
            "backgroundPadding": 0,
            "radius": 119,
            "space": -10,
            "toFixed": 1,
            "maxPercent": 100,
            "unitsFontWeight": "500",
            "outerStrokeWidth": 5,
            "outerStrokeGradientStopColor": "#00e2ff",
            "innerStrokeColor": "#ea0617",
            "innerStrokeWidth": 0,
            "title": "UI",
            "titleFontSize": "10",
            "titleFontWeight": "100",
            "subtitleFontSize": "58",
            "subtitleFontWeight": "200",
            "imageHeight": 127,
            "imageWidth": 132,
            "animateTitle": false,
            "animationDuration": 1000,
            "showTitle": false,
            "showUnits": false,
            "showBackground": false,
            "showInnerStroke": false,
            "clockwise": false,
            "startFromZero": false,
            "showZeroOuterStroke": false
        })
    ]
})
export class TreinamentoModule { }