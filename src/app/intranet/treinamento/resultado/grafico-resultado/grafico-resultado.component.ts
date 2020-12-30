import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { HeaderService } from '../../../header/header.service';
import { Prova } from '../../../_models/prova-oficial';
import { Grupo } from '../../grupo/grupo';
import { Resultado } from './../resultado';
import { ResultadoService } from './../resultado.service';

@Component({
    selector: 'app-grafico-resultado',
    templateUrl: 'grafico-resultado.component.html',
    styleUrls: ['grafico-resultado.component.css']
})
export class GraficoResultadoComponent implements OnInit {

    config: any;
    provas: Prova[];
    grupos: Grupo[];

    @Input()
    resultado: Resultado;

    dataDe: Date;
    dataAte: Date;
    periodo: string = "Período";
    showCalendar: boolean = false;
    showGrafico: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: ResultadoService) {

        this.provas = this.activatedRoute.snapshot.data['provas'];
        this.grupos = this.activatedRoute.snapshot.data['grupos'];
    }

    ngOnInit(): void {

    }

    buscarResultado() {
        this.loadingService.show();
        if (this.dataDe && this.dataAte) {
            this.resultado.dataAte = this.dataAte;
            this.resultado.dataDe = this.dataDe;
        }
        else if (this.dataDe && !this.dataAte) {
            this.resultado.dataAte = null;
            this.resultado.dataDe = this.dataDe;
        }
        else{
            this.resultado.dataDe = null;
            this.resultado.dataAte = null;
        }

        this.service.getResultado(this.resultado).subscribe(
            res => this.getResultadoSuccess(res),
            err => this.getResultadoError(err)
        )
    }
    getResultadoError(err: any): void {
        this.loadingService.hide();
        console.log(err);

        Swal.fire('Erro', 'Algo inesparado aconteceu. Tente novamente mais tarde', 'error');
    }

    getResultadoSuccess(res: Resultado): void {
        this.resultado = res;
        this.showGrafico = true;

        if (!this.resultado.idProva)
            this.resultado.idProva = "";

        if (!this.resultado.idGrupo)
            this.resultado.idGrupo = "";

        this.loadingService.hide();
    }

    selecionado($event) {
        this.dataDe = $event[0];
        this.dataAte = $event[1];

        if (this.dataDe && this.dataAte) {
            this.periodo = this.dataDe.toLocaleDateString() + ' - ' + this.dataAte.toLocaleDateString();
        }
        else if (this.dataDe && !this.dataAte) {
            this.periodo = this.dataDe.toLocaleDateString();
        }
        else {
            this.periodo = 'Período';
        }
        
        this.showGrafico = false;
    }
}