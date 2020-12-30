import { Component, OnInit, Input, QueryList, ElementRef, ViewChildren } from '@angular/core';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssistenciaVinculada } from '../assistenciaVinculada';
import { AssistenciaService } from '../assistencia.service';
import { FiltroAssistencia } from '../FiltroAssistencia';
import { RetornoAssistencia } from '../RetornoAssistencia';
import { CidadeSap } from '../../../_models/cidadeSap';
import { AssistenciaSapService } from '../../../../_shared/services/assistencia.sap.service';
import { LinhaService } from '../../../../_shared/services/linha.service';
import { Linha } from '../../../../_models/linha';
import { Estado } from '../../../../_shared/services/estado';
import { Cidade } from '../../../../_shared/services/cidade';
import { DominioService } from '../../../../_shared/services/dominio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assistencia } from '../assistencia';

@Component({
    selector: 'app-adm-assistencia-edit',
    templateUrl: 'adm-assistencia-edit.component.html',
    styleUrls: ['adm-assistencia-edit.component.css']
})
export class AdmAssistenciaEditComponent implements OnInit {

    assistencia: Assistencia;
    estados: Estado[];
    cidades: Cidade[] = [] as Cidade[];
    modoEdicao: boolean;
    linhas: Linha[];
    assistenciaForm: FormGroup;

    public tel8 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public tel9 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public cep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    constructor(private service: AssistenciaService,
        private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private dominioService: DominioService,
        private linhaService: LinhaService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.assistencia = this.activatedRoute.snapshot.data['assistencia'];
            this.linhas = this.activatedRoute.snapshot.data['linhas'];
            this.estados = this.activatedRoute.snapshot.data['estados'];
        });

        if (!this.assistencia) {
            this.assistencia = { idEstado: 0, idCidade: 0, idLinha: '', ativo: true } as Assistencia;
        }
        else {
            if (this.assistencia.idEstado) {
                this.carregarCidadesInit(this.assistencia.idEstado);
            }
        }

        this.montaForm();
    }

    carregarCidadesInit(idEstado: number) {
        this.loadingService.show();

        let uf = idEstado.toString();

        this.dominioService.getCidade(uf).subscribe(
            ret => {
                this.loadingService.hide();
                this.cidades = ret; 
                this.montaForm();
            },
            err => this.getCidadesError(err)
        );
    }

    montaForm() {
        this.assistenciaForm = this.formBuilder.group({
            nome: [this.assistencia.nome, Validators.required],
            rua: [this.assistencia.rua],
            numero: [this.assistencia.numero],
            bairro: [this.assistencia.bairro],
            complemento: [this.assistencia.complemento],
            cep: [this.assistencia.cep],
            telefone: [this.assistencia.telefone],
            telefone_2: [this.assistencia.telefone_2],
            telefone_3: [this.assistencia.telefone_3],
            telefone_4: [this.assistencia.telefone_4],
            email: [this.assistencia.email, Validators.email],
            idCidade: [this.assistencia.idCidade],
            idEstado: [this.assistencia.idEstado],
            idLinha: [this.assistencia.idLinha, Validators.required],
            ativo: [this.assistencia.ativo]
        });
    }

    carregarCidades(idEstado): void {
        this.loadingService.show();

        let uf = idEstado.toString();

        this.dominioService.getCidade(uf).subscribe(
            ret => this.getCidadesSuccess(ret),
            err => this.getCidadesError(err)
        );
    }

    getCidadesSuccess(ret: Cidade[]): void {
        this.cidades = ret;
        this.loadingService.hide();
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo as cidades: ' + err.message);
        this.loadingService.hide();
    }

    salvar() {
        if (this.assistenciaForm.valid && !this.assistenciaForm.pending) {
            this.loadingService.show();

            const assistencia = this.assistenciaForm.getRawValue() as Assistencia;

            assistencia.id = this.assistencia.id;

            this.service.salvar(assistencia).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.assistenciaForm.controls).forEach(key => {
                this.assistenciaForm.get(key).markAsTouched();
            });
        }
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if (res) {
            Swal.fire('Assistência salva com sucesso!', '', 'success');
            this.router.navigate(['/PortaldeApoio/Adm/Assistencia/']);
        }
        else {
            Swal.fire('Erro', 'Ocorreu um erro ao salvar a assistência.', 'error');
        }
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    mask(): any {
        return {
            mask: (value) => {
                if (value.length <= 12)
                    return this.tel8;
                else
                    return this.tel9;
            },
            modelClean: false,
            guide: false
        };
    }
}