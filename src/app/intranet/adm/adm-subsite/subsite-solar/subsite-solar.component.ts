import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { HeaderService } from '../../../header/header.service';
import { SolarIntegrador } from './solarIntegrador';
import { SolarIntegradorService } from './solar-integrador.service';

@Component({
    selector: 'app-subsite-solar',
    templateUrl: 'subsite-solar.component.html',
    styleUrls: ['subsite-solar.component.css']
})
export class SubsiteSolarComponent implements OnInit {

    integradores: SolarIntegrador[];
    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: SolarIntegradorService) {
        this.headerService.menuAtivo('Adm');
        this.integradores = this.activatedRoute.snapshot.data['integradores']; 
        console.log("intergradores1",this.integradores);
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.integradores.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.router.navigate(['/PortaldeApoio/Adm/Subsite/EditarSolar/' + id]);
    }
}