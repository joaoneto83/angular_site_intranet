import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';



@Component({
    selector: 'app-site-secao-imagem-baixo-icones-laterais',
    templateUrl: './site-secao-imagem-baixo-icones-laterais.component.html',
    styleUrls: ['./site-secao-imagem-baixo-icones-laterais.component.css']
})
export class SiteSecaoImagemBaixoIconesLateraisComponent implements OnInit {

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