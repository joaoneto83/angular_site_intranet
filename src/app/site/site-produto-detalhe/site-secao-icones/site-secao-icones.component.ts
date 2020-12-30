import { Component, Input } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';

@Component({
    selector: 'app-site-secao-icones',
    templateUrl: './site-secao-icones.component.html',
    styleUrls: ['./site-secao-icones.component.css']
})
export class SiteSecaoIconesComponent{
    
    @Input()
    secao: SecaoProduto;
    linqueImagem: string = '';

    ngOnInit(): void {
        if(this.secao.arquivos[0]){
            this.linqueImagem = this.secao.arquivos[0].linque;
        }
    }
}