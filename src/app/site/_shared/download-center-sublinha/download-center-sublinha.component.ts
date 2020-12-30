import { OnInit, Component, Input } from '@angular/core';
import { Produto } from '../../../../app/_models/produto';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { ProdutoService } from '../../../../app/_shared/services/produto.service';
import { SubLinha } from '../../../_models/subLinha';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { TraducaoService } from '../services/traducao.service';

@Component({
    selector: 'app-download-center-sublinha',
    templateUrl: 'download-center-sublinha.component.html',
    styleUrls: ['download-center-sublinha.component.css']
})
export class DownloadCenterSublinhaComponent implements OnInit {

    constructor(private produtoService: ProdutoService,
        private loadingService: LoadingService,
        private router: Router,
        private translate: TranslateService,
        private traducao: TraducaoService) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url.includes('Automacao'))
                    this.translate.use('pt');
            }
            else{
                let idiomaSelecionado = this.traducao.getIdioma();
                this.idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;
            }
        });
    }

    @Input()
    sublinhas: SubLinha[];

    @Input()
    tela: string;

    produtos: Produto[];
    produto: Produto;
    temArquivo: boolean;
    idioma: number;

    ngOnInit(): void {
    }

    getProdutos(idSublinha) {
        this.produto = null;
        this.produtos = [];

        if (idSublinha) {
            this.loadingService.show();

            if (this.tela == 'Refrigeracao') {

                this.produtoService.getProdutosPorSubLinhaIdioma(idSublinha, this.idioma).subscribe(
                    res => {
                        this.produtos = res;
                        this.loadingService.hide();
                    },
                    err => {
                        console.log(err);
                        this.loadingService.hide();
                    }
                );
            }
            else {
                this.produtoService.getProdutosPorSubLinha(idSublinha).subscribe(
                    res => {
                        this.produtos = res;
                        this.loadingService.hide();
                    },
                    err => {
                        console.log(err);
                        this.loadingService.hide();
                    }
                );
            }
        }
    }

    getProduto(idProduto) {
        if (idProduto) {
            this.loadingService.show();
            this.produtoService.getIdioma(idProduto, this.idioma).subscribe(
                res => {
                    this.temArquivo = false;

                    this.produto = res;

                    if (res.arquivos) {
                        res.arquivos.forEach(arq => {
                            if (arq.codigoTipoArquivo == "manual" || arq.codigoTipoArquivo == "certificado") {
                                this.temArquivo = true;
                            }
                        })
                    }

                    this.loadingService.hide();
                },
                err => {
                    console.log(err);
                    this.loadingService.hide();
                }
            );
        }
        else {
            this.produto = null;
        }
    }
}