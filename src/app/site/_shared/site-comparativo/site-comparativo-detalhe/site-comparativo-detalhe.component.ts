import { OnInit, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Produto } from '../../../../../app/_models/produto';
import { Classificacao } from '../../../../../app/_models/classificacao';
import { EspecificacaoTecnica } from '../../../../../app/_models/especificacaoTecnica';

@Component({
    selector: 'app-site-comparativo-detalhe',
    templateUrl: 'site-comparativo-detalhe.component.html',
    styleUrls: ['site-comparativo-detalhe.component.css']
})
export class SiteComparativoDetalheComponent implements OnInit {

    @Input()
    posicao: number

    @Input()
    classificacao: Classificacao

    @Input()
    especificacao: EspecificacaoTecnica

    @Input()
    produto: Produto

    @Input()
    idSelecionado: string;

    qtd: number = 0;

    constructor() { }

    ngOnInit(): void {

    }
    getValuePreco(){
      
        if (this.classificacao && this.produto && this.produto.classificacoes && this.produto.classificacoes.length > 0) {
            var clas = this.produto.classificacoes.find(x => x.preco == this.classificacao.preco);
            if (clas) return true;
        }
        return ' ';
    }

    getValue() {
          
        if (this.classificacao && this.produto && this.produto.classificacoes && this.produto.classificacoes.length > 0) {
            var clas = this.produto.classificacoes.find(x => x.id == this.classificacao.id);
            if (clas) return true;
        }

        if (this.especificacao && this.produto && this.produto.especificacoesTecnicas && this.produto.especificacoesTecnicas.length > 0) {
            var espec = this.produto.especificacoesTecnicas.find(x => x.id == this.especificacao.id);
        
            if (espec) 
                return espec.valor ? espec.valor : '-';
        }
    
        return '-';
    }

    // getClassificacoes() {
    //     if (this.produto && this.classificacao && this.produto.classificacoes) {
    //         var itens =
    //             this.produto.classificacoes.filter(x => x.idClassificacaoSuperior == this.classificacao.id);

    //         this.qtd = itens.length;

    //         return itens;
    //     }
    // }

    // getEspecificacoes() {
    //     if (this.produto && this.especificacao && this.produto.especificacoesTecnicas) {
    //         var item =
    //             this.produto.especificacoesTecnicas.find(x => x.id == this.especificacao.id);

    //         if (item)
    //             return item.valor;

    //         return "-";
    //     }
    // }

}