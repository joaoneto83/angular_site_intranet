import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../_models/secaoProduto';



@Component({
    selector: 'app-site-secao-imagem-direita-icones-esquerda',
    templateUrl: './site-secao-imagem-direita-icones-esquerda.component.html',
    styleUrls: ['./site-secao-imagem-direita-icones-esquerda.component.css']
})
export class SiteSecaoImagemDireitaIconesEsquerda implements OnInit {

    @Input()
    secao: SecaoProduto;

    caminhoImagem: string = '';
    descricaoImagem: string = '';
    linqueImagem: string = '';

    ngOnInit(): void {
        if (this.secao.arquivos[0]) {
            this.caminhoImagem = this.secao.arquivos[0].caminho;
            this.descricaoImagem = this.secao.arquivos[0].nomeArquivo;
            this.linqueImagem = this.secao.arquivos[0].linque;
        }
    }

}