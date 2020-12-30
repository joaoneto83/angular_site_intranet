import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoUsuario } from '../../../../../../app/intranet/_models/agendamentoUsuario';
import { Router } from '@angular/router';

@Component({
    selector: 'app-prova-capa',
    templateUrl: './prova-capa.component.html',
    styleUrls: ['./prova-capa.component.css']
})
export class ProvaCapaComponent implements OnInit {

    closeResult: string;

    @Input()
    agendamentoUsuario: AgendamentoUsuario;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    abrirProva = new EventEmitter();

    constructor(private modalService: NgbModal, private router: Router) { }

    ngOnInit(): void {

        setTimeout(() => {
            this.modalService.open(this.divContent, { windowClass: 'modalProva', backdropClass: 'modelBackdrop', centered: true })
            .result.then((result) => {
                if(result == 'iniciar'){
                    this.abrirProva.emit();
                }
                else{
                    this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
                }
            }, (reason) => 
            {
                if(reason == 0)
                {
                    this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
                }
            });
        });

    }

}