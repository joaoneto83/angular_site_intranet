import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { SiteComponent } from './site.component';
import { SiteHomeComponent } from './site-home/site.home.component';
import { SiteFiltroComponent } from './site-filtro/site-filtro.component';
import { SiteProdutoDetalheComponent } from './site-produto-detalhe/site.produto.detalhe.component';
import { SiteDicasUsoComponent } from './site-dicas-uso/site.dicas.uso.component';
import { SiteSolarComponent } from './site-solar/site.solar.component';
import { SiteGrupoElginComponent } from './site-grupo-elgin/site.grupo-elgin.component';
import { SiteSejaAssistenciaTecnicaComponent } from './site-seja-assistencia-tecnica/site-seja-assistencia-tecnica';
import { SiteDetalheGrupoComponent } from './site-grupo-elgin/site-detalhe-grupo/site.detalhe-grupo.component';
import { SiteDetalheDicasComponent } from './site-dicas-uso/site-detalhe-dicas/site.detalhe-dicas.component';
import { SiteHomeResolver } from './site-home/site.home.resolver';
import { SiteHomeResolver2 } from './site-home/site.home.resolver';
import { SiteDetalheElginNewsResolver } from './site-grupo-elgin/site-detalhe-grupo/site.detalhe.elgin.news.resolver';
import { SiteFiltroResolver } from './site-filtro/site-filtro.resolver';
import { SiteProdutoResolver } from './site-filtro/site-produto.resolver';
import { SiteLinhasResolver } from './site.linhas.resolver';
import { SiteProdutoDetalheResolver } from './site-produto-detalhe/site-produto-detalhe.resolver';
import { SiteBlogComponent } from './site-blog/site-blog.component';
import { SiteBlogDetalheComponent } from './site-blog/site-blog-detalhe/site-blog-detalhe.component';
import { SiteBlogHomeComponent } from './site-blog/site-blog-home/site-blog-home.component';
import { SiteSubLinhasAutomacaoResolver, SiteSubLinhasGelattaResolver, SiteSubLinhasRefrigeracaoResolver } from './site.sublinhas.resolver';
import { SiteSubLinhaResolver } from './site-filtro/site-sublinha.resolver';
import { SiteBuscaProdutoComponent } from './site-busca-produto/site-busca-produto.component';
import { LoginComponent } from '../intranet/login/login.component';
import { SiteLinhasSemMenusEspeciaisResolver } from './site.linhas.sem.automacao.resolver';
import { SiteSejaIntegradorComponent } from './site-seja-integrador/site-seja-integrador.component';
import { SiteTrabalheConoscoComponent } from './site-trabalhe-conosco/site-trabalhe-conosco';
import { SiteFiltroEspecificacaoResolver } from './site-filtro/site-filtro-especificacao.resolver';
import { SiteFiltroComparativoResolver } from './site-filtro/site-filtro-comparativo.resolver';
import { SiteGelattaComponent } from './site-gelatta/site-gelatta.component';
import { SiteGelattaResolver, SiteGelattaResolver2, SiteGelattaProdutosResolver, GelattaPerguntasFrequentesResolver } from './site-gelatta/site-gelatta.resolver';
import { SitePecasReposicaoComponent } from './site-gelatta/site-pecas-reposicao/site-pecas-reposicao.component';
import { SitePecasReposicaoResolver } from './site-gelatta/site-pecas-reposicao/site-pecas-reposicao.resolver';
import { SiteCarrinhoGelattaComponent } from './site-gelatta/site-carrinho-gelatta/site-carrinho-gelatta.component';
import { SiteCarrinhoGelattaResolver } from './site-gelatta/site-carrinho-gelatta/site-carrinho-gelatta.resolver';
import { SiteRefrigeracaoComponent } from './site-refrigeracao/site-refrigeracao.component';
import { RefrigeracaoBannerResolver, RefrigeracaoBannerResolver2, RefrigeracaoGruposDestaqueHome, VideosRefrigeracaoHomeResolver } from './site-refrigeracao/site-refrigeracao.resolver';
import { SiteRefrigeracaoContatoComponent } from './site-refrigeracao/site-refrigeracao-contato/site-refrigeracao-contato.component';
import { SiteRefrigeracaoSegmentosComponent } from './site-refrigeracao/site-refrigracao-segmentos/site-refrigeracao-segmentos.component';
import { SiteRefrigeracaoCalendarioComponent } from './site-refrigeracao/site-refrigeracao-calendario/site-refrigeracao-calendario.component';
import { SiteRefrigeracaoTreinamentoComponent } from './site-refrigeracao/site-refrigeracao-treinamento/site-refrigeracao-treinamento.component';
import { SiteRefrigeracaoQualidadeComponent } from './site-refrigeracao/site-refrigeracao-qualidade/site-refrigeracao-qualidade.component';
import { LinksTreinamentoResolver, VideosTreinamentoResolver } from './site-refrigeracao/site-refrigeracao-treinamento/site-refrigeracao-treinamento.resolver';
import { SiteAutomacaoComponent } from './site-automacao/site-automacao.component';
import { AutomacaoBannerResolver, AutomacaoBannerResolver2, VideosAutomacaoHomeResolver, SublinhaAutomacaoResolver } from './site-automacao/site-automacao.resolver';
import { SiteAutomacaoQueroComprarComponent } from './site-automacao/site-automacao-quero-comprar/site-automacao-quero-comprar.component';
import { SiteBlogCasesComponent } from './site-blog-cases/site-blog-cases.component';
import { SiteBlogHomeCasesComponent } from './site-blog-cases/site-blog-home-cases/site-blog-home-cases.component';
import { SiteBlogDetalheCasesComponent } from './site-blog-cases/site-blog-detalhe-cases/site-blog-detalhe-cases.component';

import { CadastrosComponent } from './cadastros/cadastros.component';
import { CanalDenunciaComponent } from './canal_denuncia/cadastrosExterno.component';
import { CadastrosExternoComponent } from './cadastros-externos/cadastrosExterno.component';



export const Site_ROUTES: Routes = [
    {
        path: '',
        component: SiteComponent,
        resolve: {
            linhas: SiteLinhasResolver,
            linhasSemMenusEspeciais: SiteLinhasSemMenusEspeciaisResolver,
            sublinhasAutomacao: SiteSubLinhasAutomacaoResolver,
            sublinhasGelatta: SiteSubLinhasGelattaResolver,
            produtos: SiteGelattaProdutosResolver,
            sublinhasRefrigeracao: SiteSubLinhasRefrigeracaoResolver
        },
        children: [
            {
                path: '',
                component: SiteHomeComponent,
                resolve: {
                    banner: SiteHomeResolver,
                    banner2: SiteHomeResolver2
                }
            },
            {
                path: 'Produtos/:linha/:subLinha',
                component: SiteFiltroComponent,
                resolve: {
                    filtros: SiteFiltroResolver,
                    filtrosComparativo: SiteFiltroComparativoResolver,
                    especificacoes: SiteFiltroEspecificacaoResolver,
                    produtos: SiteProdutoResolver,
                    sublinha: SiteSubLinhaResolver
                }
            },
            {
                path: 'Produtos/:linha/:subLinha/:codigoProduto',
                component: SiteProdutoDetalheComponent,
                resolve: {
                    produto: SiteProdutoDetalheResolver,
                    filtros: SiteFiltroResolver,
                    filtrosComparativo: SiteFiltroComparativoResolver,
                    especificacoes: SiteFiltroEspecificacaoResolver,
                    produtos: SiteProdutoResolver
                }
            },
            {
                path: 'SuporteTecnico',
                component: SiteDicasUsoComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'SuporteTecnico/:idProduto',
                component: SiteDicasUsoComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'SuporteTecnico/Categoria/:idCategoria',
                component: SiteDicasUsoComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'SuporteTecnico/To/:secao',
                component: SiteDicasUsoComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'politica_de_privacidade',
                component: CadastrosComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'canal_denuncia',
                component: CanalDenunciaComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'Cadastro-externo',
                component: CadastrosExternoComponent,
                resolve: {
                    linhas: SiteLinhasResolver,
                }
            },
            {
                path: 'DicasUso/:idPostagem',
                component: SiteDetalheDicasComponent
            },
            {
                path: 'Solar',
                component: SiteSolarComponent
            },
            {
                path: 'GrupoElgin',
                component: SiteGrupoElginComponent
            },
            {
                path: 'GrupoElgin/To/:secao',
                component: SiteGrupoElginComponent
            },
            {
                path: 'SejaAssistenciaTecnica',
                component: SiteSejaAssistenciaTecnicaComponent
            },
            {
                path: 'SaibaMais/:codigo',
                component: SiteDetalheGrupoComponent,
                resolve: {
                    itensElginNews: SiteDetalheElginNewsResolver
                }
            },
            {
                path: 'BuscaProduto/:termo',
                component: SiteBuscaProdutoComponent
            },
            {
                path: 'SejaIntegrador',
                component: SiteSejaIntegradorComponent
            },
            {
                path: 'TrabalheConosco',
                component: SiteTrabalheConoscoComponent
            },
            {
                path: 'Gelatta/Home',
                component: SiteGelattaComponent,
                resolve: {
                    banner: SiteGelattaResolver,
                    banner2: SiteGelattaResolver2,
                    produtos: SiteGelattaProdutosResolver,
                    perguntas: GelattaPerguntasFrequentesResolver
                }
            },
            {
                path: 'Gelatta/Home/To/:secao',
                component: SiteGelattaComponent,
                resolve: {
                    banner: SiteGelattaResolver,
                    banner2: SiteGelattaResolver2,
                    produtos: SiteGelattaProdutosResolver,
                    perguntas: GelattaPerguntasFrequentesResolver
                }
            },
            {
                path: 'Gelatta/PecasReposicao/:codigoProduto',
                component: SitePecasReposicaoComponent,
                resolve: {
                    pecasReposicao: SitePecasReposicaoResolver
                }
            },
            {
                path: 'Gelatta/Carrinho',
                component: SiteCarrinhoGelattaComponent,
                resolve: {
                    produtos: SiteGelattaProdutosResolver,
                    carrinho: SiteCarrinhoGelattaResolver
                }
            },
            {
                path: 'refrigeracao',
                component: SiteRefrigeracaoComponent,
                resolve: {
                    banner: RefrigeracaoBannerResolver,
                    banner2: RefrigeracaoBannerResolver2,
                    gruposDestaqueHome: RefrigeracaoGruposDestaqueHome,
                    videos: VideosRefrigeracaoHomeResolver,
                    sublinhas: SiteSubLinhasRefrigeracaoResolver,
                }
            },
            {
                path: 'refrigeracao/Home/To/:secao',
                component: SiteRefrigeracaoComponent,
                resolve: {
                    banner: RefrigeracaoBannerResolver,
                    banner2: RefrigeracaoBannerResolver2,
                    gruposDestaqueHome: RefrigeracaoGruposDestaqueHome,
                    videos: VideosRefrigeracaoHomeResolver,
                    sublinhas: SiteSubLinhasRefrigeracaoResolver,
                }
            },
            {
                path: 'refrigeracao/Contato',
                component: SiteRefrigeracaoContatoComponent
            },
            {
                path: 'refrigeracao/Segmento/:codigoSegmento',
                component: SiteRefrigeracaoSegmentosComponent
            },
            {
                path: 'refrigeracao/Calendario',
                component: SiteRefrigeracaoCalendarioComponent
            },
            {
                path: 'refrigeracao/Treinamentos',
                component: SiteRefrigeracaoTreinamentoComponent,
                resolve: {
                    links: LinksTreinamentoResolver,
                    videos: VideosTreinamentoResolver
                }
            },
            {
                path: 'refrigeracao/PoliticaQualidade',
                component: SiteRefrigeracaoQualidadeComponent
            },
            {
                path: 'refrigeracao/Cases',
                component: SiteBlogCasesComponent,
                children: [
                    {
                        path: '',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: ':idCategoria',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: 'Post/:idPostagem',
                        component: SiteBlogDetalheCasesComponent
                    },
                ]
            },
            {
                path: 'Refrigeracao',
                component: SiteRefrigeracaoComponent,
                resolve: {
                    banner: RefrigeracaoBannerResolver,
                    banner2: RefrigeracaoBannerResolver2,
                    gruposDestaqueHome: RefrigeracaoGruposDestaqueHome,
                    videos: VideosRefrigeracaoHomeResolver,
                    sublinhas: SiteSubLinhasRefrigeracaoResolver,
                }
            },
            {
                path: 'Refrigeracao/Home/To/:secao',
                component: SiteRefrigeracaoComponent,
                resolve: {
                    banner: RefrigeracaoBannerResolver,
                    banner2: RefrigeracaoBannerResolver2,
                    gruposDestaqueHome: RefrigeracaoGruposDestaqueHome,
                    videos: VideosRefrigeracaoHomeResolver,
                    sublinhas: SiteSubLinhasRefrigeracaoResolver,
                }
            },
            {
                path: 'Refrigeracao/Contato',
                component: SiteRefrigeracaoContatoComponent
            },
            {
                path: 'Refrigeracao/Segmento/:codigoSegmento',
                component: SiteRefrigeracaoSegmentosComponent
            },
            {
                path: 'Refrigeracao/Calendario',
                component: SiteRefrigeracaoCalendarioComponent
            },
            {
                path: 'Refrigeracao/Treinamentos',
                component: SiteRefrigeracaoTreinamentoComponent,
                resolve: {
                    links: LinksTreinamentoResolver,
                    videos: VideosTreinamentoResolver
                }
            },
            {
                path: 'Refrigeracao/PoliticaQualidade',
                component: SiteRefrigeracaoQualidadeComponent
            },
            {
                path: 'Refrigeracao/Cases',
                component: SiteBlogCasesComponent,
                children: [
                    {
                        path: '',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: ':idCategoria',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: 'Post/:idPostagem',
                        component: SiteBlogDetalheCasesComponent
                    },
                ]
            },
            {
                path: 'Automacao/Home',
                component: SiteAutomacaoComponent,
                resolve: {
                    banner: AutomacaoBannerResolver,
                    banner2: AutomacaoBannerResolver2,
                    videos: VideosAutomacaoHomeResolver,
                    sublinhas: SublinhaAutomacaoResolver
                }
            },
            {
                path: 'Automacao/Home/To/:secao',
                component: SiteAutomacaoComponent,
                resolve: {
                    banner: AutomacaoBannerResolver,
                    banner2: AutomacaoBannerResolver2,
                    videos: VideosAutomacaoHomeResolver,
                    sublinhas: SublinhaAutomacaoResolver
                }
            },
            {
                path: 'Automacao/QueroComprar',
                component: SiteAutomacaoQueroComprarComponent
            },
            {
                path: 'Automacao/Cases',
                component: SiteBlogCasesComponent,
                children: [
                    {
                        path: '',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: ':idCategoria',
                        component: SiteBlogHomeCasesComponent
                    },
                    {
                        path: 'Post/:idPostagem',
                        component: SiteBlogDetalheCasesComponent
                    },
                ]
            },
        ]
    },
    {
        path: 'Login',
        component: LoginComponent,
        resolve: {
            linhas: SiteLinhasSemMenusEspeciaisResolver
        }
    },
    {
        path: 'Blog',
        component: SiteBlogComponent,
        children: [
            {
                path: '',
                component: SiteBlogHomeComponent
            },
            {
                path: ':idCategoria',
                component: SiteBlogHomeComponent
            },
            {
                path: 'Post/:idPostagem',
                component: SiteBlogDetalheComponent
            },
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(Site_ROUTES)
    ],
    exports: [RouterModule]
})
export class SiteRouteModule { }
