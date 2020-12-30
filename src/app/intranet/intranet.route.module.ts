import { Routes, RouterModule } from '@angular/router'
import { TreinamentoComponent } from './treinamento/treinamento.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaPrecoComponent } from './tabela-preco/tabela-preco.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LogosComponent } from './merchandising/logos/logos.component';
import { TiComponent } from './ti/ti.component';
import { RHComponent } from './rh/rh.component';
import { SugestaoComponent } from './ti/sugestao/sugestao.component';
import { NgModule } from '@angular/core';
import { IntranetComponent } from './intranet.component';
import { ElginUpComponent } from './merchandising/elgin-up/elgin-up.component';
import { UploadFileComponent } from './_shared/upload-file/upload.file.component';
import { SubLinhasResolver } from './produto/sublinhas.resolver';
import { LinhasResolver } from './produto/linhas.resolver';
import { AdmArquivosComponent } from './adm/adm-arquivos/adm-arquivos.component';
import { AdmPerfilComponent } from './adm/adm-perfil/adm-perfil.component';
import { PerfilResolver } from './adm/adm-perfil/adm-perfil.resolver';
import { AdmUsuarioComponent } from './adm/adm-usuario/adm-usuario.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MeusDadosResolver } from './meus-dados/meus-dados.resolver';
import { TabelaPrecoResolver } from './tabela-preco/tabelaPreco.resolver';
import { AuthGuard } from './login/auth.guard';
import { MenuResolver } from './menu.resolver';
import { RoleGuard } from './role.guard';
import { CatalogoResolver } from './catalogo/catalogo.resolver';
import { TokenExpiredGuard } from './login/token-expired.guard';
import { ProvaComponent } from './treinamento/prova/questionario/prova.component';
import { ProvaConfirmacaoComponent } from './treinamento/prova/questionario/prova-confirmacao/prova-confirmacao.component';
import { ListaProvaComponent } from './treinamento/prova/lista-prova.component';
import { ListaProvaResolver } from './treinamento/prova/lista-prova.resolver';
import { ProvaEditComponent } from './treinamento/prova/prova-edit/prova-edit.component';
import { ProvaEditResolver } from './treinamento/prova/prova-edit/prova-edit.resolver';
import { ListaAgendamentoComponent } from './treinamento/agendamento/lista-agendamento.component';
import { ListaAgendamentoResolver } from './treinamento/agendamento/lista-agendamento.resolver';
import { AgendamentoEditComponent } from './treinamento/agendamento/agendamento-edit/agendamento-edit.component';
import { AgendamentoEditResolver } from './treinamento/agendamento/agendamento-edit/agendamento-edit.resolver';
import { ListaGrupoComponent } from './treinamento/grupo/lista-grupo.component';
import { ListaGrupoResolver } from './treinamento/grupo/lista-grupo.resolver';
import { GrupoEditComponent } from './treinamento/grupo/grupo-edit/grupo-edit.component';
import { GrupoEditResolver } from './treinamento/grupo/grupo-edit/grupo-edit.resolver';
import { ListaUsuarioComponent } from './treinamento/usuarios/lista-usuario.component';
import { ListaUsuarioResolver } from './treinamento/usuarios/lista-usuario.resolver';
import { ProvasUsuarioComponent } from './treinamento/provas-usuario/provas-usuario.component';
import { ProvasUsuarioResolver } from './treinamento/provas-usuario/provas-usuario.resolver';
import { AdmUsuarioResolver } from './adm/adm-usuario/adm-usuario.resolver';
import { AgendamentoUsuarioResolver } from './treinamento/prova/questionario/agendamentoUsuario.resolver';
import { ProvaConfirmacaoResolver } from './treinamento/prova/questionario/prova-confirmacao/prova-confirmacao.resolver';
import { ResultadoComponent } from './treinamento/resultado/resultado.component';
import { TreinamentoResolver } from './treinamento/treinamento.resolver';
import { MerchandisingResolver } from './merchandising/merchandising.resolver';
import { RHResolver } from './rh/rh.resolver';
import { AvisoDetalheComponent } from './_shared/aviso-detalhe/aviso-detalhe.component';
import { AvisoDetalheResolver } from './_shared/aviso-detalhe/aviso-detalhe.resolver';
import { MpdvComponent } from './merchandising/mpdv/mpdv.component';
import { MpdvResolver } from './merchandising/mpdv/mpdv.resolver';
import { ElginNewsResolver } from './rh/news/elgin.news.resolver';
import { NewsComponent } from './rh/news/news.component';
import { AdmAssistenciaVinculadaComponent } from './adm/adm-assistencia-vinculada/adm-assistencia-vinculada.component';
import { AssistenciaVinculadaResolver } from './adm/adm-assistencia-vinculada/assistencia-vinculada.resolver';
import { AdmAssistenciaVinculadaEditComponent } from './adm/adm-assistencia-vinculada/adm-assistencia-vinculada-edit/adm-assistencia-vinculada-edit.component';
import { AdmAssistenciaVinculadaEditResolver } from './adm/adm-assistencia-vinculada/adm-assistencia-vinculada-edit/adm-assistencia-vinculada-edit.resolver';
import { SolicitacaoComponent } from './rh/solicitacao/solicitacao.component';
import { PropositoComponent } from './rh/proposito/proposito.component';
import { PropositoResolver } from './rh/proposito/proposito.resolver';
import { LojaFuncionarioComponent } from './rh/loja-funcionario/loja-funcionario.component';
import { ModuloArquivoTiResolver } from './ti/modulo-arquivo-ti/modulo-arquivo-ti.resolver';
import { AdmBannerComponent } from './adm/adm-banner/adm-banner.component';
import { CadastroSecaoModeloComponent } from './produto/cadastro-secao-modelo/cadastro.secao.modelo.component';
import { AdmSublinhaComponent } from './adm/adm-sublinha/adm-sublinha.component';
import { LinhasComSublinhasResolver } from './adm/adm-sublinha/adm-sublinha.resolver';
import { TiposDependenteResolver } from './adm/adm-usuario/tipos-dependente.resolver';
import { TiposUsuarioResolver } from './adm/adm-usuario/tipos-usuario.resolver';
// import { AdmPecaReposicaoComponent } from './adm/adm-peca-reposicao/adm-peca-reposicao.component';
// import { AdmProdutoMaquinaSorveteResolver } from './adm/adm-peca-reposicao/adm-produto-maquina-sorvete.resolver';
import { AdmGerenciaArquivosComponent } from './adm/adm-gerencia-arquivos/adm-gerencia-arquivos.component';
import { LinhasGerenciaArquivoResolver } from './adm/adm-gerencia-arquivos/adm-gerecencia-aqruivo.resolver';
import { SubsiteSolarComponent } from './adm/adm-subsite/subsite-solar/subsite-solar.component';
import { SolarResolver } from './adm/adm-subsite/subsite-solar/subsite-solar.resolver';
import { SubsiteSolarEditComponent } from './adm/adm-subsite/subsite-solar/subsite-solar-edit/subsite-solar-edit.component';
import { SubsiteSolarEditResolver } from './adm/adm-subsite/subsite-solar/subsite-solar-edit/subsite-solar-edit.resolver';
import { AdmSubsiteComponent } from './adm/adm-subsite/adm-subsite.component';
import { ProdutoMaquinaSorveteResolver } from './adm/adm-subsite/subsite-gelatta/produto-maquina-sorvete.resolver';
import { SubsiteGelattaComponent } from './adm/adm-subsite/subsite-gelatta/subsite-gelatta.component';
import { SubsiteRefrigeracaoComponent } from './adm/adm-subsite/subsite-refrigeracao/subsite-refrigeracao.component';
import { VideosHomeResolver, GruposDestaqueHomeResolver, GruposDestaqueSegmentoResolver, VideosTreinamentoResolver, LinksTreinamentoResolver, EventosRefrigeracaoResolver } from './adm/adm-subsite/subsite-refrigeracao/subsite-refrigeracao.resolver';
import { VideosHomeAutomacaoResolver } from './adm/adm-subsite/subsite-automacao/subsite-automacao.resolver';
import { IntegradorResolver } from './adm/adm-subsite/subsite-refrigeracao/subsite-refrigeracao-integrador/subsite-refrigeracao-integrador.resolver';
import { SubsiteAutomacaoComponent } from './adm/adm-subsite/subsite-automacao/subsite-automacao.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsResolver } from './blogs/blogs.resolver';
import { SubBlogsResolver } from './blogs/subBlogs.resolver';
import { AdmAssistenciaComponent } from './adm/adm-assistencia/adm-assistencia.component';
import { AdmAssistenciaEditComponent } from './adm/adm-assistencia/adm-assistencia-edit/adm-assistencia-edit.component';
import { AssistenciaResolver } from './adm/adm-assistencia/assistencia.resolver';
import { AdmAssistenciaEditResolver } from './adm/adm-assistencia/adm-assistencia-edit/adm-assistencia-edit.resolver';
import { TreinamentoMerchanComponent } from './treinamento-merchan/treinamento-merchan.component';
import { TreinamentoMerchanResolver } from './treinamento-merchan/treinamentoMerchan.resolver';



export const Intranet_ROUTES: Routes = [
    {
        path: '',
        component: IntranetComponent,
        resolve: {
            menus: MenuResolver
        },
        canActivate: [AuthGuard, TokenExpiredGuard],
        children: [
            
            {
                path: 'Treinamentos',
                component: TreinamentoComponent,
                resolve: {
                    linhas: TreinamentoResolver
                }
            },
            {
                path: 'Treinamentos/Prova/:idAgendamentoUsuario',
                component: ProvaComponent,
                resolve: {
                    agendamentoUsuario: AgendamentoUsuarioResolver
                }
            },
            {
                path: 'Treinamentos/Prova-Confirmacao/:idAgendamento',
                component: ProvaConfirmacaoComponent,
                resolve: {
                    aproveitamento: ProvaConfirmacaoResolver
                }
            },
            {
                path: 'Treinamentos/ListaProvas',
                component: ListaProvaComponent,
                resolve: {
                    provas: ListaProvaResolver
                }
            },
            {
                path: 'Treinamentos/EditarProva',
                component: ProvaEditComponent,
                resolve: {
                    linhas: LinhasResolver,
                    prova: ProvaEditResolver
                }
            },
            {
                path: 'Treinamentos/EditarProva/:idProva',
                component: ProvaEditComponent,
                resolve: {
                    linhas: LinhasResolver,
                    prova: ProvaEditResolver
                }
            },
            {
                path: 'Treinamentos/Agendamentos',
                component: ListaAgendamentoComponent,
                resolve: {
                    agendamentos: ListaAgendamentoResolver
                }
            },
            {
                path: 'Treinamentos/EditarAgendamento/:idAgendamento',
                component: AgendamentoEditComponent,
                resolve: {
                    agendamento: AgendamentoEditResolver,
                    provas: ListaProvaResolver
                }
            },
            {
                path: 'Treinamentos/EditarAgendamento',
                component: AgendamentoEditComponent,
                resolve: {
                    provas: ListaProvaResolver
                }
            },
            {
                path: 'Treinamentos/Grupos',
                component: ListaGrupoComponent,
                resolve: {
                    grupos: ListaGrupoResolver
                }
            },
            {
                path: 'Treinamentos/EditarGrupo/:idGrupo',
                component: GrupoEditComponent,
                resolve: {
                    grupo: GrupoEditResolver
                }
            },
            {
                path: 'Treinamentos/EditarGrupo',
                component: GrupoEditComponent
            },
            {
                path: 'Treinamentos/Usuarios',
                component: ListaUsuarioComponent,
                resolve: {
                    usuarios: ListaUsuarioResolver
                }
            },
            {
                path: 'Treinamentos/Usuario/:idUsuario',
                component: ProvasUsuarioComponent,
                resolve: {
                    treinamentoUsuario: ProvasUsuarioResolver
                }
            },
            {
                path: 'Treinamentos/MinhasProvas',
                component: ProvasUsuarioComponent,
                resolve: {
                    treinamentoUsuario: ProvasUsuarioResolver
                }
            },
            {
                path: 'Treinamentos/Resultados',
                component: ResultadoComponent,
                resolve: {
                    provas: ListaProvaResolver,
                    grupos: ListaGrupoResolver
                }
            },
            /* Path Cadastro Seção Modelo */
            {
                path: 'SecaoModelo',
                component: CadastroSecaoModeloComponent,
                canActivate: [RoleGuard],
                data: { roles: ['MODELO_SECAO_CONSULTA', 'MODELO_SECAO_EDICAO'] },
                resolve: {
                    linhas: LinhasResolver
                }
            },
            {
                path: 'Blogs',
                component: BlogsComponent,
                canActivate: [RoleGuard],
                data: { roles: ['PRODUTO_CONSULTA', 'PRODUTO_EDICAO'] },
                resolve: {
                    linhas: BlogsResolver
                }
            },
            {
                path: 'Blogs/:linha',
                component: BlogsComponent,
                canActivate: [RoleGuard],
                data: { roles: ['PRODUTO_CONSULTA', 'PRODUTO_EDICAO'] },
                resolve: {
                    linhas: BlogsResolver,
                    subLinhas: SubBlogsResolver
                }
            },
            {
                path: 'Produtos',
                component: ProdutoComponent,
                canActivate: [RoleGuard],
                data: { roles: ['PRODUTO_CONSULTA', 'PRODUTO_EDICAO'] },
                resolve: {
                    linhas: LinhasResolver
                }
            },
            {
                path: 'Produtos/:linha',
                component: ProdutoComponent,
                canActivate: [RoleGuard],
                data: { roles: ['PRODUTO_CONSULTA', 'PRODUTO_EDICAO'] },
                resolve: {
                    linhas: LinhasResolver,
                    subLinhas: SubLinhasResolver
                }
            },
            {
                path: 'TabelaPreco',
                component: TabelaPrecoComponent,
                canActivate: [RoleGuard],
                data: { roles: ['TABPRECO_CONSULTA', 'TABPRECO_EDICAO'] },
                resolve: {
                    response: TabelaPrecoResolver
                }
            },
            {
                path: 'TabelaPreco/:id',
                component: TabelaPrecoComponent,
                canActivate: [RoleGuard],
                data: { roles: ['TABPRECO_CONSULTA', 'TABPRECO_EDICAO'] },
                resolve: {
                    response: TabelaPrecoResolver
                }
            },
            {
                path: 'Merchandising',
                component: MerchandisingComponent,
                canActivate: [RoleGuard],
                data: { roles: ['MERCHA_CONSULTA', 'MERCHAN_EDICAO'] },
                resolve: {
                    model: MerchandisingResolver
                }
            },
            {
                path: 'Aviso/:idAviso',
                component: AvisoDetalheComponent,
                resolve: {
                    aviso: AvisoDetalheResolver
                }
            },
            {
                path: 'Merchandising/LogosIcones',
                component: LogosComponent
            },
            {
                path: 'Merchandising/LogosIcones/:tipo',
                component: LogosComponent
            },
           // {
            //     path: 'Merchandising/Treinamentos',
            //     component: ElginUpComponent
            // },
            {
                path: 'Merchandising/Treinamento',
                component: TreinamentoMerchanComponent,
                canActivate: [RoleGuard],
                data: { roles: ['MERCHA_CONSULTA', 'MERCHAN_EDICAO'] },
                resolve: {
                    response: TreinamentoMerchanResolver
                }
            },
            {
                path: 'Merchandising/Treinamento/:id',
                component: TreinamentoMerchanComponent,
                canActivate: [RoleGuard],
                data: { roles: ['MERCHA_CONSULTA', 'MERCHAN_EDICAO'] },
                resolve: {
                    response: TreinamentoMerchanResolver
                }
            },
            {
                path: 'Merchandising/Mpdv',
                component: MpdvComponent,
                canActivate: [RoleGuard],
                data: { roles: ['MERCHA_CONSULTA', 'MERCHAN_EDICAO'] },
                resolve: {
                    arquivos: MpdvResolver
                }
            },
            {
                path: 'Catalogo',
                component: CatalogoComponent,
                canActivate: [RoleGuard],
                data: { roles: ['CATALOGO_EDICAO', 'CATALOGO_CONSULTA'] },
                resolve: {
                    catalogos: CatalogoResolver
                }
            },
            {
                path: 'RH',
                component: RHComponent,
                resolve: {
                    model: RHResolver
                }
            },
            {
                path: 'RH/ElginNews',
                component: NewsComponent,
                resolve: {
                    elginNews: ElginNewsResolver
                }
            },
            {
                path: 'RH/Solicitacao',
                component: SolicitacaoComponent
            },
            {
                path: 'RH/MissaoVisaoValores',
                component: PropositoComponent,
                resolve: {
                    proposito: PropositoResolver
                }
            },
            {
                path: 'RH/LojaFuncionario',
                component: LojaFuncionarioComponent
            },
            {
                path: 'Ti',
                component: TiComponent,
                resolve: {
                    modulosArquivos: ModuloArquivoTiResolver
                }
            },
            {
                path: 'Ti/Sugestao',
                component: SugestaoComponent
            },
            {
                path: 'Upload',
                component: UploadFileComponent
            },
            {
                path: 'AdmArquivos',
                redirectTo: '/Adm/Arquivos'
            },
            {
                path: 'Adm/Arquivos',
                component: AdmArquivosComponent
            },
            {
                path: 'Adm/GerenciaArquivo',
                component: AdmGerenciaArquivosComponent
            },
            {
                path: 'Adm/Perfil',
                component: AdmPerfilComponent,
                resolve: {
                    perfis: PerfilResolver
                }
            },
            {
                path: 'Adm/Usuario',
                component: AdmUsuarioComponent,
                resolve: {
                    usuarios: AdmUsuarioResolver,
                    tiposDependente: TiposDependenteResolver,
                    tiposUsuario: TiposUsuarioResolver
                }
            },
            {
                path: 'Adm/Assistencia',
                component: AdmAssistenciaComponent,
                resolve: {
                    assistencias: AssistenciaResolver
                }
            },
            {
                path: 'Adm/EditarAssistencia/:idAssistencia',
                component: AdmAssistenciaEditComponent,
                resolve: {
                    assistencia: AdmAssistenciaEditResolver,
                    linhas: LinhasResolver
                }
            },
            {
                path: 'Adm/EditarAssistencia',
                component: AdmAssistenciaEditComponent,
                resolve: {
                    linhas: LinhasResolver,
                   
                }
            },
            {
                path: 'Adm/Banner',
                component: AdmBannerComponent,
            },
            {
                path: 'Adm/Sublinha',
                component: AdmSublinhaComponent,
                resolve: {
                    linhas: LinhasComSublinhasResolver
                }
            },
            {
                path: 'MeusDados',
                component: MeusDadosComponent,
                resolve: {
                    usuario: MeusDadosResolver,
                    tiposDependente: TiposDependenteResolver,
                    tiposUsuario: TiposUsuarioResolver
                }
            },
            {
                path: 'Adm/Subsite',
                component: AdmSubsiteComponent,
                canActivate: [AuthGuard, TokenExpiredGuard, RoleGuard],
                data: { roles: ['SUBSITE_EDICAO'] },
                children: [
                    {
                        path: 'Solar',
                        component: SubsiteSolarComponent,
                        resolve: {
                            integradores: SolarResolver
                        }
                    },
                    {
                        path: 'EditarSolar/:idIntegrador',
                        component: SubsiteSolarEditComponent,
                        resolve: {
                            integrador: SubsiteSolarEditResolver
                        }
                    },
                    {
                        path: 'EditarSolar',
                        component: SubsiteSolarEditComponent
                    },
                    {
                        path: 'Gelatta',
                        component: SubsiteGelattaComponent,
                        resolve: {
                            produtos: ProdutoMaquinaSorveteResolver
                        }
                    },
                    {
                        path: 'Refrigeracao',
                        component: SubsiteRefrigeracaoComponent,
                        resolve: {
                            gruposDestaqueHome: GruposDestaqueHomeResolver,
                            gruposDestaqueSegmento: GruposDestaqueSegmentoResolver,
                            videosHome: VideosHomeResolver,
                            videosTreinamento: VideosTreinamentoResolver,
                            links: LinksTreinamentoResolver,
                            eventos: EventosRefrigeracaoResolver,
                            integradores: IntegradorResolver
                        }
                    },
                    {
                        path: 'Automacao',
                        component: SubsiteAutomacaoComponent,
                        resolve: {
                            videosHome: VideosHomeAutomacaoResolver,
                        }
                    },
                ]
            },
        ]
    },

]

@NgModule({
    imports: [
        RouterModule.forChild(Intranet_ROUTES)
    ],
    exports: [RouterModule]
})
export class IntranetRouteModule { }
