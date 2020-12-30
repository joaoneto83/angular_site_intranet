import { OnInit, Component, Input } from '@angular/core';
import { Produto } from '../../../../../app/_models/produto';
import { ComparativoService } from '../site-comparativo.service';

@Component({
    selector: 'app-site-comparativo-header',
    templateUrl: 'site-comparativo-header.component.html',
    styleUrls: ['site-comparativo-header.component.css']
})
export class SiteComparativoHeaderComponent implements OnInit {
    @Input()
    posicao: number

    @Input()
    produtos: Produto[]

    @Input()
    idSelecionado: string = "";

    @Input()
    produto: Produto = { id: "" } as Produto;

    @Input()
    mostraCombo: boolean;

    isOpened: boolean = false;

    constructor(private service: ComparativoService) { }

    ngOnInit(): void {

    }

    getImagem(): string {
        if (this.produto && this.produto.arquivos && this.produto.arquivos.length > 0)
            return this.produto.arquivos[0].caminho;

        return "";
    }

    alterarProduto() {
        if (this.idSelecionado) {
            var prod = this.produtos.find(x => x.id == this.idSelecionado);
            this.produto = prod;
        }
        else {
            this.produto = { id: "" } as Produto;
        }

        this.service.set(this.posicao, this.produto);
    }

    fecharCardProdutos(targetId) {
        if (targetId != 'btnOpenCombo_' + this.posicao)
            this.isOpened = false;
    }

    selecionarProduto(id: string) {
        this.idSelecionado = id;
        this.alterarProduto();

        this.isOpened = false;
    }

    removerProduto() {
        this.idSelecionado = '';
        this.alterarProduto();
    }

}