import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { Estado } from '../../../../app/_shared/services/estado';
import { DominioService } from '../../../../app/_shared/services/dominio.service';
import { Cidade } from '../../../../app/_shared/services/cidade';
import { CalculoSolar } from './CalculoSolar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiteSolarService } from './site.solar.service';
import { ResultadoSolar } from './resultadoSolar';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { PesquisaCidadeEstado } from '../pesquisaCidadeEstado';

@Component({
    selector: 'app-site-solar-calculo',
    templateUrl: 'site.solar.calculo.html',
    styleUrls: ['site.solar.calculo.css']
})
export class SiteSolarCalculoComponent implements OnInit {

    estados: Estado[];
    cidades: Cidade[];

    calculoForm: FormGroup;

    calculo: CalculoSolar;
    resultado: ResultadoSolar;

    pesquisaCidadeEstado: PesquisaCidadeEstado;

    @Output() pesquisaCidadeEstadoEvent: EventEmitter<PesquisaCidadeEstado> = new EventEmitter();

    constructor(
        private dominioService: DominioService,
        private calculoSolarService: SiteSolarService,
        private loadingService: LoadingService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.montaForm();

        this.dominioService.getEstados().subscribe(
            ret => this.getEstadosSuccess(ret),
            err => this.getEstadosError(err)
        );
    }

    montaForm() {
        this.calculoForm = this.formBuilder.group({
            estado: ["", Validators.required],
            idCidade: ["", Validators.required],
            onde: ["C", Validators.required],
            faturaMensal: ["", Validators.required],
            mediaMensal: [""],
        });
    }

    salvar() {

        this.resultado = null;

        if (this.calculoForm.valid && !this.calculoForm.pending) {
            this.calculo = this.calculoForm.getRawValue() as CalculoSolar;

            this.loadingService.show();

            this.calculoSolarService.retornaCalculoSolar(this.calculo).subscribe(
                res => this.retornaCalculoSolarSuccess(res),
                err => this.retornaCalculoSolarError(err)
            );

        }
        else {
            Swal.fire(
                'Atenção',
                'Preencha todos os campos.',
                'warning'
            )
        }
    }

    retornaCalculoSolarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    retornaCalculoSolarSuccess(res: ResultadoSolar): void {
        this.resultado = res;
        this.loadingService.hide();
    }

    getEstadosSuccess(ret: Estado[]): void {
        this.estados = ret;
        this.loadingService.hide();
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
        this.loadingService.hide();
    }

    carregarCidades(estado): void {
        this.loadingService.show();

        this.dominioService.getCidades(estado).subscribe(
            ret => this.getCidadesSuccess(estado, ret),
            err => this.getEstadosError(err)
        );
    }

    changeCidade(idCidade){

        this.pesquisaCidadeEstado = {
            uf: this.pesquisaCidadeEstado.uf,
            cidades: this.pesquisaCidadeEstado.cidades,
            idCidade: idCidade
        } as PesquisaCidadeEstado ;

        this.pesquisaCidadeEstadoEvent.emit(
            this.pesquisaCidadeEstado
        );
    }

    getCidadesSuccess(estado:string, ret: Cidade[]): void {
        this.cidades = ret;
        this.loadingService.hide();

        this.pesquisaCidadeEstado = {
            uf: estado,
            cidades: ret,
            idCidade: 0
        } as PesquisaCidadeEstado 

        this.pesquisaCidadeEstadoEvent.emit(
            this.pesquisaCidadeEstado
        );
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
        this.loadingService.hide();
    }

    limpar()
    {
        this.calculoForm.reset();
        this.montaForm();

        this.resultado = null;
        this.cidades = null;

        this.pesquisaCidadeEstado = {
            uf: "0",
            idCidade: 0
        } as PesquisaCidadeEstado ; 
        
        this.pesquisaCidadeEstadoEvent.emit(
            this.pesquisaCidadeEstado
        );
    }
}