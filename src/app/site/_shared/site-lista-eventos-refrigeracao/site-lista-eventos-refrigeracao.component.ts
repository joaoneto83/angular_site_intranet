import { Component, Input } from '@angular/core';
import { EventoRefrigeracao } from '../../../_models/eventoRefrigeracao';

@Component({
    selector: 'app-site-lista-eventos-refrigeracao',
    templateUrl: './site-lista-eventos-refrigeracao.component.html',
    styleUrls: ['./site-lista-eventos-refrigeracao.component.css']
})
export class SiteListaEventosRefrigeracaoComponent {
    @Input()
    temEventos: boolean;
    @Input()
    eventos: EventoRefrigeracao[];
}