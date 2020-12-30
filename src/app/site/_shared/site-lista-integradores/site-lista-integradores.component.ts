import { Component, Input } from '@angular/core';
import { Integrador } from '../../../_models/integrador';

@Component({
    selector: 'app-site-lista-integradores',
    templateUrl: './site-lista-integradores.component.html',
    styleUrls: ['./site-lista-integradores.component.css']
})
export class SiteListaIntegradoresComponent {
    @Input()
    temIntegradores: boolean;
    @Input()
    integradores: Integrador[];
}