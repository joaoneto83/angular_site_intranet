import { OnInit, Component, Input } from '@angular/core';
import { Linha } from '../../../../app/_models/linha';
import { Produto } from '../../../../app/_models/produto';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { ProdutoService } from '../../../../app/_shared/services/produto.service';

@Component({
    selector: 'app-download-center',
    templateUrl: 'download-center.component.html',
    styleUrls: ['download-center.component.css']
})
export class DownloadCenterComponent implements OnInit {

    constructor(private produtoService: ProdutoService,
                private loadingService: LoadingService) { }

    @Input()
    linhas: Linha[];
    
    produtos: Produto[];
    produto: Produto;
    temArquivo: boolean;

    ngOnInit(): void {
    }

    getProdutos(idLinha){
        this.produto = null;
        
        this.loadingService.show();

        this.produtoService.getProdutosPorLinha(idLinha).subscribe(
            res => 
            {
                this.produtos = res;
                this.loadingService.hide();
            },
            err =>{
                console.log(err);
                this.loadingService.hide();
            }
        )
    }

    getProduto(idProduto){
        this.loadingService.show();

        this.produtoService.get(idProduto).subscribe(
            res => 
            {
                this.temArquivo = false;

                this.produto = res;

                if(res.arquivos){
                    res.arquivos.forEach(arq =>{
                        if(arq.codigoTipoArquivo == "manual" || arq.codigoTipoArquivo == "certificadp" )
                        {
                            this.temArquivo = true;
                        }
                    })
                }

                this.loadingService.hide();
            },
            err =>{
                console.log(err);
                this.loadingService.hide();
            }
        )
    }
}