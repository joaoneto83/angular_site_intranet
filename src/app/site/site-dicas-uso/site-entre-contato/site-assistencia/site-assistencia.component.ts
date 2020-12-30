import { Component, Input } from '@angular/core';
import { AssistenciaVinculada } from '../../../../intranet/adm/adm-assistencia-vinculada/assistenciaVinculada';
import { listaAssistente } from 'src/app/intranet/_models/listaAssistente';

@Component({
    selector: 'app-site-assistencia',
    templateUrl: './site-assistencia.component.html',
    styleUrls: ['./site-assistencia.component.css']
})
export class SiteAssistenciaComponent {

    @Input()
    assistencias: listaAssistente[];



    ngOnInit(): void {
        if(this.assistencias){
            console.log( "ok",this.assistencias);
        }
     
    }
}