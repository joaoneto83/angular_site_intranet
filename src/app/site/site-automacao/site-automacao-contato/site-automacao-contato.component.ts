import { Component, OnInit } from '@angular/core';
import { DominioService } from '../../../_shared/services/dominio.service';
import { LinhaProduto } from '../../_models/linhaProduto';
import { Modelo } from '../../_models/modelo';
import { RetornoAssistencia } from '../../../intranet/adm/adm-assistencia-vinculada/RetornoAssistencia';
import { AssistenciaVinculada } from '../../../intranet/adm/adm-assistencia-vinculada/assistenciaVinculada';
import { SubLinha } from '../../../_models/subLinha';
import { EstadoSap } from '../../../_models/estadoSap';
import { CidadeSap } from '../../../_models/cidadeSap';
import { SubLinhaService } from '../../../_shared/services/subLinha.service';
import { AssistenciaVinculadaService } from '../../../intranet/adm/adm-assistencia-vinculada/assistencia-vinculada.service';
import { AssistenciaSapService } from '../../../_shared/services/assistencia.sap.service';
import { FiltroAssistencia } from '../../../intranet/adm/adm-assistencia-vinculada/FiltroAssistencia';
import { listaAssistente } from 'src/app/intranet/_models/listaAssistente';
import { Cidade } from 'src/app/intranet/_models/cidade';

@Component({
    selector: 'app-site-automacao-contato',
    templateUrl: './site-automacao-contato.component.html',
    styleUrls: ['./site-automacao-contato.component.css']
})
export class SiteAutomacaoContatoComponent implements OnInit{
    
    linhasProduto: LinhaProduto[];
    modelos: Modelo[];
    estados: EstadoSap[];
    // cidades: CidadeSap[];
    cidades: Cidade[];
    assistencias: RetornoAssistencia[];
    listaAssistentes: listaAssistente [];
    assistenciasVinculadas: AssistenciaVinculada[];
    sublinhas: SubLinha[] = [];
    idLinha: string;
    idSublinha: string = "";
    uf: any = "";
    cidade: any = "";

    constructor(private dominioService: DominioService,
        private sublinhaService: SubLinhaService,
        private assistenciaService: AssistenciaVinculadaService,
        private assistenciaSapService: AssistenciaSapService) { }

    ngOnInit(): void {

        this.sublinhaService.getSubLinha('FB0026C2-8025-40CE-9B83-B73C45AAF0C0').subscribe(
            res => this.sublinhas = res,
            err => console.log(err)
        )

        this.assistenciaSapService.postEstados().subscribe(
            ret => this.postEstadosSuccess(ret),
            err => this.postEstadosError(err)
        );

        //this.assistencias = this.utilService.retornaAssistenciaFake();
    }

    postEstadosSuccess(ret: EstadoSap[]): void {
        this.estados = ret;
    }

    postEstadosError(err: any): void {
        console.log(err);
    }
    carregarCidade(id){
     
        this.cidade = id;
        console.log(this.cidade)
    

    // carregarCidades(estado: number): void {
    //     this.cidade = "";
    //     this.assistenciaSapService.postCidades(estado).subscribe(
    //         ret => this.postCidadesSuccess(ret),
    //         err => this.postCidadesError(err)
    //     );
    }
    carregarCidades(uf: string): void {
        this.cidade = "";
        this.assistenciaService.postCidades(uf).subscribe(
            ret => this.postCidadesSuccess(ret),
            err => this.postEstadosError(err)
        );
    }

    postCidadesSuccess(ret: Cidade[]): void {
        this.cidades = ret;
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
        
    }
    // postCidadesSuccess(ret: CidadeSap[]): void {
    //     this.cidades = ret;
    // }

    postCidadesError(err: any): void {
        console.log(err);
    }
    carregarEstado(id){
    
        this.uf = id;
        console.log(this.uf)
    }

    // buscaAssistencias() {
    //     if (this.idSublinha) {
    //         this.assistenciaService.postBuscaAssistencias(this.idSublinha).subscribe(
    //             res => this.postBuscaAssistenciasSuccess(res),
    //             err => console.log(err)
    //         )
    //     }
    //     else
    //     {
    //         this.assistenciasVinculadas = [];
    //     }
    // }
    
    // postAssistenciasSuccess(res: RetornoAssistencia[]): void {
    //     this.assistencias = res;

    //     if (this.assistenciasVinculadas) {
    //         this.assistenciasVinculadas.forEach(elem => {
    //             elem.retornoAssistencia = this.assistencias.find(x => x.NumeroDocumento == elem.documento);
    //         })
    //     }
    // }
    postAssistenciasSuccess(ret: listaAssistente[]): void {
     
        this.listaAssistentes = ret;
  
    }
    postBuscaAssistenciasSuccess() : void {
        this.idLinha = 'fb0026c2-8025-40ce-9b83-b73c45aaf0c0';
        this.assistenciaService.postBuscaAssistenciasLinhaCidade(this.idLinha, this.uf, this.cidade).subscribe(
            ret => this.postAssistenciasSuccess(ret),
            err => console.log(err)
        )
    }

    // postBuscaAssistenciasSuccess(res: AssistenciaVinculada[]): void {
    //     this.assistenciasVinculadas = res;

    //     let listaDocs = this.assistenciasVinculadas.map(({ documento }) => documento);
    //     let uf;
    //     if(this.uf)
    //     {
    //         uf = this.estados.find(x => x.Cod == this.uf).Uf;
    //     }

    //     this.assistenciaSapService.postAssistencias({ Uf: uf, CidadeCod: this.cidade, ListaNumeroDocumento: listaDocs } as FiltroAssistencia).subscribe(
    //         res => this.postAssistenciasSuccess(res),
    //         err => console.log(err)
    //     )
    // }
}