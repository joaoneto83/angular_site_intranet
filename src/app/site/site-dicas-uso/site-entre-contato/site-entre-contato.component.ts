import { Component, OnInit, Input } from '@angular/core';
import { Modelo } from '../../_models/modelo';
import { Linha } from '../../../_models/linha';
import { SubLinha } from '../../../_models/subLinha';
import { SubLinhaService } from '../../../_shared/services/subLinha.service';
import { AssistenciaVinculadaService } from '../../../intranet/adm/adm-assistencia-vinculada/assistencia-vinculada.service';
import { AssistenciaSapService } from '../../../_shared/services/assistencia.sap.service';
import { FiltroAssistencia } from '../../../intranet/adm/adm-assistencia-vinculada/FiltroAssistencia';
import { FiltroAssistenciaLinhaCidade } from '../../../intranet/adm/adm-assistencia-vinculada/FiltroAssistenciaLinhaCidade';
import { RetornoAssistencia } from '../../../intranet/adm/adm-assistencia-vinculada/RetornoAssistencia';
import { AssistenciaVinculada } from '../../../intranet/adm/adm-assistencia-vinculada/assistenciaVinculada';
import { EstadoSap } from '../../../_models/estadoSap';
// import { Cidade } from '../../../_models/cidadeSap';
import { LinhaService } from 'src/app/_shared/services/linha.service';
import { Cidade } from 'src/app/intranet/_models/cidade';
import { listaAssistente } from 'src/app/intranet/_models/listaAssistente';

@Component({
    selector: 'app-site-entre-contato',
    templateUrl: './site-entre-contato.component.html',
    styleUrls: ['./site-entre-contato.component.css']
})
export class SiteEntreContatoComponent implements OnInit {

    modelos: Modelo[];
    estados: EstadoSap[];
    cidades: Cidade[];
    listaAssistentes: listaAssistente [];
    assistencias: RetornoAssistencia[];
    // assistenciasVinculadas: AssistenciaVinculada[];
    sublinhas: SubLinha[] = [];
    
    idSublinha: string = "";
    uf: any = "";
    cidade: any = "";
    idLinha: string;

    @Input()
    linhas: Linha[];

    constructor(
        private sublinhaService: SubLinhaService,
        private linhaService: LinhaService,
        private assistenciaService: AssistenciaVinculadaService,
        private assistenciaSapService: AssistenciaSapService) { }

    ngOnInit(): void {
      
        this.idLinha = "";
        this.assistenciaSapService.postEstados().subscribe(
            ret => this.postEstadosSuccess(ret),
            err => this.postEstadosError(err)
        );
        this.carregarlinhas();
    }

    postEstadosSuccess(ret: any): void {
        this.estados = ret;
    }

    postEstadosError(err: any): void {
        console.log(err);
    }

    // carregarCidades(estado: number): void {
    //     this.cidade = "";
    //     this.assistenciaSapService.postCidades(estado).subscribe(
    //         ret => this.postCidadesSuccess(ret),
    //         err => this.postEstadosError(err)
    //     );
    // }

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
    carregarlinhas() {
        this.linhaService.getLinha().subscribe(
            res => this.linhas = res,
            err => console.log(err)
        )
    }


    carregarSublinhas(id: string) {
        console.log(id);
        this.sublinhaService.getSubLinha(id).subscribe(
            res => this.sublinhas = res,
            err => console.log(err)
        )
    }

    // buscaAssistencias() {
    //     console.log(this.idSublinha);
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
    // buscaAssistencias(id:string) {
        
    //     this.idLinha = id;
    //     console.log( this.idLinha);
    //     if (id) {
    //         this.assistenciaService.postBuscaAssistencias(id).subscribe(
    //             res => this.postBuscaAssistenciasSuccess(res),
    //             err => console.log(err)
    //         )
    //     }
    //     else
    //     {
    //         this.assistenciasVinculadas = [];
    //     }
    // }
    carregarLinha(id){
       
        this.idLinha = id;
        console.log(this.idLinha)
    }

    carregarEstado(id){
    
        this.uf = id;
        console.log(this.uf)
    }
    
    carregarCidade(id){
     
        this.cidade = id;
        console.log(this.cidade)
    }


    postAssistenciasSuccess(ret: listaAssistente[]): void {
     
        this.listaAssistentes = ret;
  
    }
    postBuscaAssistenciasSuccess() : void {
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

    //     this.assistenciaService.postAssistencias({ Uf: uf, CidadeCod: this.cidade, ListaNumeroDocumento: listaDocs } as FiltroAssistencia).subscribe(
    //         res => this.postAssistenciasSuccess(res),
    //         err => console.log(err)
    //     )
    // }
}