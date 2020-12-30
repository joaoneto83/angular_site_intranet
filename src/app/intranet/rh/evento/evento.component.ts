import { Component, Input, ViewChild } from '@angular/core';
import { Evento } from './evento';
import { EventoService } from './evento.service';
import { RHService } from '../rh.service';
import { EditEventoComponent } from './edit-evento/edit-evento.component';

@Component({
    selector: 'app-eventos',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css']
})
export class EventoComponent{
    
    constructor(private service: EventoService, 
        private rhService: RHService) {}

    @Input() eventos: Evento[];
    @Input() perfilAdmin: string;
    @ViewChild('modalEvento') modalEvento: EditEventoComponent;

    open() {
        let model = {
            titulo: '',
            descricao: '',
            ativo: true
        } as Evento;

        this.modalEvento.open(model);
    }

    editEvento(evento: Evento) {
        let model = evento;
        this.modalEvento.open(model);
    }

    atualiza(){
        this.rhService.getEventos().subscribe(
            res => this.eventos = res,
            err => console.log(err)
        )
    }
}