import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Integrador } from '../../../../../../_models/integrador';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pais } from '../../../../../../_shared/services/pais';
import { Estado } from '../../../../../../_shared/services/estado';
import { Cidade } from '../../../../../../_shared/services/cidade';
import { IntegradorService } from '../integrador.service';
import { LoadingService } from '../../../../../../_shared/services/loading.service';
import { DominioService } from '../../../../../../_shared/services/dominio.service';
import { Segmento } from '../../../../../../_shared/services/segmento';

@Component({
    selector: 'app-modal-integrador-edit',
    templateUrl: 'modal-integrador-edit.component.html',
    styleUrls: ['modal-integrador-edit.component.css']
})
export class ModalIntegradorEditComponent {

    integrador: Integrador;
    formIntegrador: FormGroup;
    paises: Pais[];
    estados: Estado[];
    cidades: Cidade[];
    segmentos: Segmento[];

    closeResult: string;

    public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];

    @ViewChild('contentEditarIntegrador')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    atualizar = new EventEmitter();

    constructor(private service: IntegradorService,
        private loadingService: LoadingService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private dominioService: DominioService,
        private modalService: NgbModal) { }


    open(id) {
        if (id) {
            this.service.getIntegradorPorId(id).subscribe(
                res => {
                    this.integrador = res;
                    this.montaForm();
                },
                err => console.log(err)
            );
        }
        else {
            this.integrador = null;
            this.montaForm();
        }


        this.dominioService.getSegmentos().subscribe(
            ret => this.getSegmentosSuccess(ret),
            err => this.getSegmentosError(err)
        );

        this.dominioService.getPaises().subscribe(
            ret => this.getPaisesSuccess(ret),
            err => this.getPaisesError(err)
        );


        this.modalService.open(this.divContent, { windowClass: 'modalEditarIntegrador', backdropClass: 'modelBackdrop', centered: true, backdrop: 'static' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    montaForm() {
        if (this.integrador) {
            this.formIntegrador = this.formBuilder.group({
                nome: [this.integrador.nome, Validators.required],
                email: [this.integrador.email, Validators.email],
                endereco: [this.integrador.endereco],
                telefoneFixo: [this.integrador.telefoneFixo],
                telefoneMovel: [this.integrador.telefoneMovel],
                site: [this.integrador.site],
                idPais: [this.integrador.idPais, Validators.required],
                uf: [this.integrador.uf, Validators.required],
                idCidade: [this.integrador.idCidade],
                ativo: [this.integrador.ativo],
                idSegmento: [this.integrador.idSegmento, Validators.required]
            });
        }
        else {
            this.integrador = {} as Integrador;

            this.formIntegrador = this.formBuilder.group({
                nome: ['', Validators.required],
                email: ['', Validators.email],
                endereco: [''],
                telefoneFixo: [''],
                telefoneMovel: [''],
                site: [''],
                idPais: ['', Validators.required],
                uf: ['', Validators.required],
                idCidade: [''],
                ativo: [true],
                idSegmento: ['', Validators.required]
            });
        }

    }

    getSegmentosSuccess(ret: Segmento[]): void {
        this.loadingService.hide();
        this.segmentos = ret;
    }

    getSegmentosError(err: any): void {
        console.log('erro obtendo os segmentos: ' + err.message);
        this.loadingService.hide();
    }

    getPaisesSuccess(ret: Pais[]): void {
        this.loadingService.hide();
        this.paises = ret;

        if (this.integrador)
            if (this.integrador.uf)
                this.carregarEstados(this.integrador.idPais);
    }

    getPaisesError(err: any): void {
        console.log('erro obtendo os países: ' + err.message);
        this.loadingService.hide();
    }

    carregarEstados(pais): void {
        this.loadingService.show();

        this.dominioService.getEstadosPorPais(pais).subscribe(
            ret => this.getEstadosSuccess(ret),
            err => this.getEstadosError(err)
        );
    }

    getEstadosSuccess(ret: Estado[]): void {
        this.loadingService.hide();
        this.estados = ret;

        if (this.integrador)
            if (this.integrador.uf)
                this.carregarCidades(this.integrador.uf);
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo os estados: ' + err.message);
        this.loadingService.hide();
    }

    carregarCidades(estado): void {
        this.loadingService.show();

        this.dominioService.getCidades(estado).subscribe(
            ret => this.getCidadesSuccess(estado, ret),
            err => this.getCidadesError(err)
        );
    }

    getCidadesSuccess(estado: string, ret: Cidade[]): void {
        this.cidades = ret;
        this.loadingService.hide();
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo as cidades: ' + err.message);
        this.loadingService.hide();
    }

    salvar() {
        if (this.formIntegrador.valid && !this.formIntegrador.pending) {

            let modelForm = this.formIntegrador.getRawValue() as Integrador;

            this.integrador.nome = modelForm.nome;
            this.integrador.email = modelForm.email;
            this.integrador.endereco = modelForm.endereco;
            this.integrador.telefoneFixo = modelForm.telefoneFixo;
            this.integrador.telefoneMovel = modelForm.telefoneMovel;
            this.integrador.site = modelForm.site;
            this.integrador.idPais = modelForm.idPais;
            this.integrador.uf = modelForm.uf;
            this.integrador.idCidade = modelForm.idCidade;
            this.integrador.ativo = modelForm.ativo;
            this.integrador.idSegmento = modelForm.idSegmento;

            this.loadingService.show();

            this.service.salvar(this.integrador).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formIntegrador.controls).forEach(key => {
                this.formIntegrador.get(key).markAsTouched();
            });

            Swal.fire(
                'Atenção',
                'Preencha todos os campos corretamente.',
                'warning'
            );
        }
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if (res) {
            Swal.fire(
                'Integrador salvo com sucesso!',
                '',
                'success'
            );

            this.atualizar.emit();
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Integrador.',
                'error'
            );
        }
    }
}