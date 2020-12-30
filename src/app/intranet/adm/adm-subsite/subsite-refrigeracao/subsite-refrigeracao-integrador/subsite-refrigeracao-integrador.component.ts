import { Component, ViewChild } from '@angular/core';
import { Integrador } from '../../../../../_models/integrador';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../../../_shared/services/loading.service';
import { HeaderService } from '../../../../header/header.service';
import { IntegradorService } from './integrador.service';
import { ModalIntegradorEditComponent } from './modal-integrador-edit/modal-integrador-edit.component';

@Component({
    selector: 'app-subsite-refrigeracao-integrador',
    templateUrl: 'subsite-refrigeracao-integrador.component.html',
    styleUrls: ['subsite-refrigeracao-integrador.component.css']
})
export class SubsiteRefrigeracaoIntegradorComponent {

    integradores: Integrador[];
    config: any;

    @ViewChild('modalEditarIntegrador')
    modalEditarIntegrador: ModalIntegradorEditComponent;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: IntegradorService) {
        this.headerService.menuAtivo('Adm');
        this.integradores = this.activatedRoute.snapshot.data['integradores'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'integradores',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.integradores.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.modalEditarIntegrador.open(id);
    }

    atualizarLista(){
        this.modalEditarIntegrador.close();

        this.service.getIntegradores().subscribe(
            res => this.integradores = res,
            err => console.log(err)
        );
    }

}