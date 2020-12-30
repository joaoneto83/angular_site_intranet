import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { Prova } from '../../../_models/prova-oficial';
import { AgendamentoService } from '../agendamento.service';
import { Agendamento } from '../../../_models/agendamento';
import { Grupo } from '../../grupo/grupo';

@Component({
    selector: 'app-agendamento-edit',
    templateUrl: 'agendamento-edit.component.html',
    styleUrls: ['agendamento-edit.component.css']
})
export class AgendamentoEditComponent implements OnInit {

    agendamento: Agendamento;
    provas: Prova[];
    grupos: Grupo[];
    formAgendamento: FormGroup;
    nomePessoa: string;
    nomeGrupo: string;
    isPessoa: boolean = false;
    isGrupo: boolean = false;
    qtdMaxQuestoes;

    closeResult: string;

    constructor(private service: AgendamentoService,
        private loadingService: LoadingService,
        private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.agendamento = this.activatedRoute.snapshot.data['agendamento'];

            if (!this.agendamento)
                this.agendamento = { descricao: '', ativo: true } as Agendamento;

            this.provas = this.activatedRoute.snapshot.data['provas'];
            this.montaForm();
            this.verificarGrupoPessoa();
            this.validarQtdQuestoes();
        });

        if (this.agendamento.provaStartada) {
            this.formAgendamento.get('idProva').disable();
            this.formAgendamento.get('ativo').disable();
        }
    }

    verificarGrupoPessoa() {
        if (this.agendamento.idGrupo != null) {
            this.isGrupo = true;
            this.isPessoa = false;
        }
        else if (this.agendamento.idPessoa != null) {
            this.isGrupo = false;
            this.isPessoa = true;
        }
    }

    montaForm() {
        if (this.agendamento) {
            this.formAgendamento = this.formBuilder.group({
                descricao: [this.agendamento.descricao, Validators.required],
                ativo: [this.agendamento.ativo, Validators.required],
                dataDe: [this.agendamento.dataDe, Validators.required],
                dataAte: [this.agendamento.dataAte, Validators.required],
                duracao: [this.agendamento.duracao, Validators.required],
                qtdQuestoes: [this.agendamento.qtdQuestoes, Validators.required],
                idProva: [this.agendamento.idProva, Validators.required],
            });
        }
        else {
            this.formAgendamento = this.formBuilder.group({
                descricao: ['', Validators.required],
                ativo: [true, Validators.required],
                dataDe: ['', Validators.required],
                dataAte: ['', Validators.required],
                duracao: [0, Validators.required],
                qtdQuestoes: [0, Validators.required],
                idProva: ['', Validators.required],
            });
        }

    }

    salvar() {
        if (this.formAgendamento.valid && !this.formAgendamento.pending) {

            let modelForm = this.formAgendamento.getRawValue() as Agendamento;

            this.agendamento.descricao = modelForm.descricao
            this.agendamento.ativo = modelForm.ativo
            this.agendamento.dataDe = modelForm.dataDe
            this.agendamento.dataAte = modelForm.dataAte
            this.agendamento.duracao = modelForm.duracao
            this.agendamento.qtdQuestoes = modelForm.qtdQuestoes
            this.agendamento.idProva = modelForm.idProva

            this.loadingService.show();

            this.service.salvar(this.agendamento).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formAgendamento.controls).forEach(key => {
                this.formAgendamento.get(key).markAsTouched();
            });

            Swal.fire(
                'Atenção',
                'Preencha todos os campos corretamente.',
                'warning'
            );
        }
    }

    verificarCampo($event) {
        if ($event.target.id == "rbGrupo" && this.isGrupo == true) {
            this.isPessoa = false;
            this.agendamento.idPessoa = null;
            this.agendamento.nomeUsuario = null;
        }
        else if ($event.target.id == "rbPessoa" && this.isPessoa == true) {
            this.isGrupo = false;
            this.agendamento.idGrupo = null;
            this.agendamento.nomeGrupo = null;
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
                'Agendamento salvo com sucesso!',
                '',
                'success'
            );

            this.router.navigate(['/PortaldeApoio/Treinamentos/Agendamentos']);
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Agendamento.',
                'error'
            );
        }
    }

    retornaPessoa($event) {
        this.agendamento.nomeUsuario = $event.nome;
        this.agendamento.idPessoa = $event.id;
        this.modalService.dismissAll('');
    }

    retornaGrupo($event) {
        this.agendamento.nomeGrupo = $event.nomeGrupo;
        this.agendamento.idGrupo = $event.id;
        this.modalService.dismissAll('');
    }

    validarQtdQuestoes() {
        let idProva = this.formAgendamento.controls['idProva'].value;
        if (idProva) {
            this.qtdMaxQuestoes = this.provas.find(x => x.id == idProva).qtdQuestoes;
        }
        else {
            this.qtdMaxQuestoes = 0;
        }
    }

    validarCampoQtdQuestoes($event) {
        let idProva = this.formAgendamento.controls['idProva'].value;

        if (idProva) {
            let prova = this.provas.find(x => x.id == idProva);

            if ($event.target.value > prova.qtdQuestoes) {
                this.formAgendamento.controls['qtdQuestoes'].setErrors({ 'incorrect': true });
            }
        }
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: '', windowClass: 'modalAgendamento' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    removerUsuario() {
        this.agendamento.nomeUsuario = null;
        this.agendamento.idPessoa = null;
    }

    removerGrupo() {
        this.agendamento.nomeGrupo = null;
        this.agendamento.idGrupo = null;
    }

    validarDatas() {
        let dataDe = this.formAgendamento.controls['dataDe'].value
        let dataAte = this.formAgendamento.controls['dataAte'].value

        if (dataDe && dataAte) {

            dataDe = new Date(dataDe);
            dataAte = new Date(dataAte);

            if (dataDe > dataAte) {
                this.formAgendamento.controls['dataDe'].setErrors({ 'incorrect': true });
                this.formAgendamento.controls['dataAte'].setErrors({ 'incorrect': true });
                Swal.fire(
                    'Atenção',
                    'Campo de Data De de ser menor que Data Até.',
                    'warning'
                );
            }
            else {
                this.formAgendamento.controls['dataDe'].setErrors({ 'incorrect': false });
                this.formAgendamento.controls['dataAte'].setErrors({ 'incorrect': false });
                this.formAgendamento.controls['dataDe'].updateValueAndValidity();
                this.formAgendamento.controls['dataAte'].updateValueAndValidity();
            }
        }
    }
}