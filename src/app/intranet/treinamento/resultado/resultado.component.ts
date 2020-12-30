import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { Prova } from '../../_models/prova-oficial';
import { Grupo } from '../grupo/grupo';
import { Resultado } from './resultado';
import { ResultadoService } from './resultado.service';


@Component({
    selector: 'app-resultado',
    templateUrl: 'resultado.component.html',
    styleUrls: ['resultado.component.css'],
})
export class ResultadoComponent implements OnInit {

    config: any;
    resultado: Resultado;
    resultados: Resultado[] = [];
    provas: Prova[];
    grupos: Grupo[];

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: ResultadoService) {
        this.headerService.menuAtivo('Treinamentos');
        this.headerService.submenuAtivo('Resultados');
        this.resultados.push(
            {
                idProva: "",
                idGrupo: "",
                qtdDisponibilizados: 0,
                percentRealizados: 0,
                percentAproveitamento: 0,
                totalProvas: 0
            } as Resultado);
    }

    ngOnInit(): void {

    }

    adicionarGrafico() {
        this.resultados.push(
            {
                idProva: "",
                idGrupo: "",
                qtdDisponibilizados: 0,
                percentRealizados: 0,
                percentAproveitamento: 0,
                totalProvas: 0
            } as Resultado);
    }

    
}