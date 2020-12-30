import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-descricao-caminho',
    templateUrl: './descricao-caminho.component.html',
    styleUrls: ['./descricao-caminho.component.css']
})
export class DescricaoCaminhoComponent{
    @Input()
    menu: string;

    @Input()
    pagina: string;

    @Input()
    corMenu: string = "#000000";

    @Input()
    corPagina: string = "#000000";
}