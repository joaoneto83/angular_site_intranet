import { Component, Input } from '@angular/core';
import { EspecificacaoTecnica } from '../../../../app/_models/especificacaoTecnica';
import { Modelo } from '../../../../app/_models/modelo';

@Component({
    selector: 'app-site-especificacoes-tecnicas',
    templateUrl: './site-especificacoes-tecnicas.component.html',
    styleUrls: ['./site-especificacoes-tecnicas.component.css']
})
export class SiteEspecificacoesTecnicasComponent{

    @Input()
    especificacoesTecnicas: EspecificacaoTecnica[];
    @Input()
    modelos: Modelo[];

}