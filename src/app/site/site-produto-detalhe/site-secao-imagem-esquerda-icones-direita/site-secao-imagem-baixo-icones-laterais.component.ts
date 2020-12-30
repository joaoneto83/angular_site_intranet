import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../_models/secaoProduto';



@Component({
    selector: 'app-site-secao-imagem-esquerda-icones-direita',
    templateUrl: './site-secao-imagem-esquerda-icones-direita.component.html',
    styleUrls: ['./site-secao-imagem-esquerda-icones-direita.component.css']
})
export class SiteSecaoImagemEsquerdaIconesDireita implements OnInit {

    @Input()
    secao: SecaoProduto;

    caminhoImagem: string = '';
    descricaoImagem: string = '';
    linqueImagem: string = '';
    ngOnInit(): void {
        if (this.secao.arquivos[0]) {
            this.caminhoImagem = this.secao.arquivos[0].caminho;
            this.descricaoImagem = this.secao.arquivos[0].nomeArquivo;
            this.linqueImagem = this.secao.arquivos[0].nomeArquivo;
        }
    }

}