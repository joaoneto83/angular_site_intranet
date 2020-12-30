import { Component, Input } from '@angular/core';
import { SecaoProduto } from '../../../_models/secaoProduto';

@Component({
    selector: 'app-site-secao-titulo-icones',
    templateUrl: './site-secao-titulo-icones.component.html',
    styleUrls: ['./site-secao-titulo-icones.component.css']
})
export class SiteSecaoTituloIconesComponent{
    
    @Input()
    secao: SecaoProduto;
    linqueImagem: string = '';

    ngOnInit(): void {
        if (this.secao.arquivos[0]) {
            this.linqueImagem = this.secao.arquivos[0].nomeArquivo;  
        }
    }

}