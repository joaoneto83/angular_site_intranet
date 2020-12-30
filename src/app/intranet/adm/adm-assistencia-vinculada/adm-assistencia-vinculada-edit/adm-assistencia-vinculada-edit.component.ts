import { Component, OnInit, Input, QueryList, ElementRef, ViewChildren } from '@angular/core';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssistenciaVinculada } from '../assistenciaVinculada';
import { AssistenciaVinculadaService } from '../assistencia-vinculada.service';
import { FiltroAssistencia } from '../FiltroAssistencia';
import { RetornoAssistencia } from '../RetornoAssistencia';
import { EstadoSap } from '../../../../intranet/_models/estadoSap';
import { CidadeSap } from '../../../../intranet/_models/cidadeSap';
import { AssistenciaSapService } from '../../../../_shared/services/assistencia.sap.service';
import { LinhaService } from '../../../../_shared/services/linha.service';
import { Linha } from '../../../../_models/linha';

@Component({
    selector: 'app-adm-assistencia-vinculada-edit',
    templateUrl: 'adm-assistencia-vinculada-edit.component.html',
    styleUrls: ['adm-assistencia-vinculada-edit.component.css']
})
export class AdmAssistenciaVinculadaEditComponent implements OnInit{
    
    @Input()
    assistencia: AssistenciaVinculada;
    estados: EstadoSap[];
    cidades: CidadeSap[];
    assistencias: RetornoAssistencia[] = [];
    estadoSelecionado: any = "";
    cidadeSelecionada: any = "";
    assistenciaSelecionada: any = "";
    modoEdicao: boolean;
    linhas: Linha[];
    
    constructor(private service: AssistenciaVinculadaService,
        private activatedRoute: ActivatedRoute, 
        private loadingService: LoadingService,
        private serviceSap: AssistenciaSapService,
        private linhaService: LinhaService,
        private router: Router){}

    @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.assistencia = this.activatedRoute.snapshot.data['assistencia'];
            this.loadingService.show();
            if(this.assistencia)
            {
                let listaDocs : string[] = [this.assistencia.documento];
                            
                this.serviceSap.postAssistencias({ ListaNumeroDocumento: listaDocs } as FiltroAssistencia).subscribe(
                    res => this.postAssistenciasSuccess(res),
                    err => console.log(err)
                );
            }
            else
            {
                this.serviceSap.postEstados().subscribe(
                    ret => this.getEstadosSuccess(ret),
                    err => this.getEstadosError(err)
                ); 
            }
        });

        this.linhaService.getLinhaComSubLinhas(true).subscribe(
            res => this.getLinhasSuccess(res),
            () => console.log("erro ao buscar nome da linha")
        );
    }

    getLinhasSuccess(res: Linha[]) {
        this.linhas = res;
    }

    postAssistenciasSuccess(res: RetornoAssistencia[]) {
        this.modoEdicao = true;
        this.assistencia.retornoAssistencia = res[0];
        this.assistencia.retornoAssistencia.CodUf = this.assistencia.retornoAssistencia.CidadeCod.toString().substring(0,2);
        
        this.assistencias.push(this.assistencia.retornoAssistencia);
        this.assistenciaSelecionada = this.assistencia.retornoAssistencia.NumeroDocumento;

        this.serviceSap.postEstados().subscribe(
            ret => this.getEstadosSuccess(ret),
            err => this.getEstadosError(err)
        );
    }

    getEstadosSuccess(ret: EstadoSap[]): void {
        this.loadingService.hide();
        this.estados = ret;
        
        if (this.assistencia && this.assistencia.retornoAssistencia && this.assistencia.retornoAssistencia.CodUf)
        {
            this.estadoSelecionado = this.assistencia.retornoAssistencia.CodUf;
            this.carregarCidades(this.assistencia.retornoAssistencia.CodUf);
        }
        else
        {
            this.carregarAssistencias();
        }
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo os estados: ' + err.message);
        this.loadingService.hide();
    }

    carregarCidades(estado): void {
        this.loadingService.show();
        this.cidadeSelecionada = "";

        this.serviceSap.postCidades(estado).subscribe(
            ret => this.getCidadesSuccess(ret),
            err => this.getCidadesError(err)
        );
    }

    getCidadesSuccess(ret: CidadeSap[]): void {
        this.cidades = ret;
        this.loadingService.hide();

        if (this.assistencia && this.assistencia.retornoAssistencia && this.assistencia.retornoAssistencia.CidadeCod)
        {
            this.cidadeSelecionada = this.assistencia.retornoAssistencia.CidadeCod;
            this.flagarSubLinhasJaCadastradas();
        }
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo as cidades: ' + err.message);
        this.loadingService.hide();
    }

    carregarAssistencias() {
        this.loadingService.show();
        let uf;
        if(this.estadoSelecionado)
        {
            uf = this.estados.find(x => x.Cod == this.estadoSelecionado).Uf;
        }
       
        this.serviceSap.postAssistencias({ Uf: uf, CidadeCod: this.cidadeSelecionada } as FiltroAssistencia).subscribe(
            res => this.postListaAssistenciasSuccess(res),
            err => this.postListaAssistenciasError(err)
        )
    }

    postListaAssistenciasSuccess(res: RetornoAssistencia[]): void {
        this.loadingService.hide();
        this.assistencias = res;
    }

    postListaAssistenciasError(err: any): void {
        this.loadingService.hide();
        console.log(err);
    }

    flagarSubLinhasJaCadastradas() {
        this.checkboxes.forEach((element) => {
            if(this.assistencia.subLinhas.find(x => x.id == element.nativeElement.value))
                element.nativeElement.checked = true;
        });
    }

    salvar(){
        this.loadingService.show();

        let idSubLinhas: string[] = [];
        this.checkboxes.forEach((element) => {
            if(element.nativeElement.checked)
                idSubLinhas.push(element.nativeElement.value);
        });

        const formData = new FormData();

        if(this.assistencia)
            formData.append("idAssistencia", this.assistencia.id);

        formData.append("documento", this.assistenciaSelecionada);
        formData.append("idsSubLinhas", idSubLinhas.toString());
        
        this.service.salvar(formData).subscribe(
            res => this.salvarSuccess(res),
            err => this.salvarError(err)
        );
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if(res)
        {
            Swal.fire('Assistência salva com sucesso!', '', 'success');
            this.router.navigate(['/PortaldeApoio/Adm/Assistencia/']);
        }
        else 
        {
            Swal.fire('Erro', 'Ocorreu um erro ao salvar a assistência.', 'error');
        }
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    
}