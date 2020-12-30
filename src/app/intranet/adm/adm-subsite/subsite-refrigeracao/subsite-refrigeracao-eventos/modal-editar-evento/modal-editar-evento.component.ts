import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoadingService } from '../../../../../../_shared/services/loading.service';
import { EventoRefrigeracaoService } from '../../../../../../_shared/services/eventoRefrigeracao.service';
import { SubsiteRefrigeracaoService } from '../../subsite-refrigeracao.service';
import { TipoEventoRefrigeracao } from '../../../../../../_models/tipoEventoRefrigeracao';
import { EventoRefrigeracao } from '../../../../../../_models/eventoRefrigeracao';
import Swal from 'sweetalert2';
import { UploadFileComponent } from '../../../../../_shared/upload-file/upload.file.component';
import { DominioService } from '../../../../../../_shared/services/dominio.service';

@Component({
    selector: 'app-modal-editar-evento',
    templateUrl: './modal-editar-evento.component.html',
    styleUrls: ['./modal-editar-evento.component.css']
})
export class ModalEditarEventoComponent implements OnInit {

    closeResult: string;
    formEvento: FormGroup;
    tipos: TipoEventoRefrigeracao[];
    caminhoImagem: string;
    isUmDia: boolean = false;
    evento: EventoRefrigeracao;

    @ViewChild('contentEditarEvento')
    divContent: ElementRef<HTMLInputElement>;

    @ViewChild('upImg')
    upImg: UploadFileComponent;

    @Output()
    atualizar = new EventEmitter();

    constructor(private modalService: NgbModal,
        private loadingService: LoadingService,
        private formBuilder: FormBuilder,
        private serviceEvento: EventoRefrigeracaoService,
        private serviceAdm: SubsiteRefrigeracaoService,
        private dominioService: DominioService,
        private datePipe: DatePipe) { }

    ngOnInit(): void {
    }

    open(idEvento) {
        this.dominioService.getTipoEventos().subscribe(
            res => this.tipos = res,
            err => console.log(err)
        );

        if (idEvento)
            this.montaFormEditar(idEvento);
        else
            this.montaFormNovo();


        this.modalService.open(this.divContent, { windowClass: 'modalEditarEvento', backdropClass: 'modelBackdrop', centered: true, backdrop: 'static' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    montaFormNovo() {
        this.caminhoImagem = '';
        this.isUmDia = false;
        this.evento = {} as EventoRefrigeracao;

        this.formEvento = this.formBuilder.group({
            titulo: ["", Validators.required],
            local: ["", Validators.required],
            dataDe: ["", Validators.required],
            dataAte: [""],
            idTipoEventoRefrigeracao: ["", Validators.required],
            link: [""]
        });
    }

    montaFormEditar(id) {
        this.loadingService.show();

        this.serviceEvento.getEventosPorId(id).subscribe(
            res => {
                this.evento = res;
                this.caminhoImagem = res.caminhoImagem;

                if (!res.dataAte)
                    this.isUmDia = true;
                else
                    this.isUmDia = false

                this.formEvento = this.formBuilder.group({
                    titulo: [res.titulo, Validators.required],
                    local: [res.local, Validators.required],
                    dataDe: [this.datePipe.transform(res.dataDe, 'yyyy-MM-dd'), Validators.required],
                    dataAte: [this.datePipe.transform(res.dataAte, 'yyyy-MM-dd')],
                    idTipoEventoRefrigeracao: [res.idTipoEventoRefrigeracao, Validators.required],
                    link: [this.evento.link]
                });

                this.loadingService.hide();
            },
            err => {
                console.log(err);
                this.loadingService.hide();
            }
        );
    }

    getRespostaArquivo(event) {
        this.caminhoImagem = event.caminho;
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

    validarDatas() {
        let dataDe = this.formEvento.controls['dataDe'].value
        let dataAte = this.formEvento.controls['dataAte'].value

        if (dataDe && dataAte) {

            dataDe = new Date(dataDe);
            dataAte = new Date(dataAte);

            if (dataDe > dataAte) {
                this.formEvento.controls['dataDe'].setErrors({ 'incorrect': true });
                this.formEvento.controls['dataAte'].setErrors({ 'incorrect': true });
                Swal.fire(
                    'Atenção',
                    'Campo de Data De de ser menor que Data Até.',
                    'warning'
                );
            }
            else {
                this.formEvento.controls['dataDe'].setErrors({ 'incorrect': false });
                this.formEvento.controls['dataAte'].setErrors({ 'incorrect': false });
                this.formEvento.controls['dataDe'].updateValueAndValidity();
                this.formEvento.controls['dataAte'].updateValueAndValidity();
            }
        }
    }

    salvar() {
        if (this.formEvento.valid && !this.formEvento.pending) {
            this.loadingService.show();

            const model = this.formEvento.getRawValue() as EventoRefrigeracao;

            this.evento.titulo = model.titulo;
            this.evento.local = model.local;
            this.evento.dataDe = model.dataDe;
            this.evento.dataAte = model.dataAte;
            this.evento.idTipoEventoRefrigeracao = model.idTipoEventoRefrigeracao;
            this.evento.link = model.link;

            this.evento.caminhoImagem = this.caminhoImagem;

            if (this.isUmDia)
                this.evento.dataAte = null;

            this.serviceAdm.salvarEvento(this.evento).subscribe(
                res => {
                    if (res) {
                        //this.upImg.reloadData();
                        this.loadingService.hide();
                        this.atualizar.emit();

                        Swal.fire(
                            'Configurações salvas com sucesso!',
                            '',
                            'success'
                        );
                    }
                    else {
                        this.loadingService.hide();
                        Swal.fire(
                            'Erro',
                            'Ocorreu um erro ao salvar.',
                            'error'
                        );
                    }
                },
                err => {
                    Swal.fire(
                        'Erro',
                        'Ocorreu um erro ao salvar.',
                        'error'
                    );
                    console.log(err);
                    this.loadingService.hide();
                },
            );

            this.formEvento.reset();
            this.modalService.dismissAll();
        }
        else {
            Object.keys(this.formEvento.controls).forEach(key => {
                this.formEvento.get(key).markAsTouched();
            });
        }
    }
}