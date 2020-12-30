import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { ProvaService } from '../prova.service';
import { Prova } from '../../../_models/prova-oficial';
import { Linha } from '../../../../_models/linha';

@Component({
    selector: 'app-prova-edit',
    templateUrl: 'prova-edit.component.html',
    styleUrls: ['prova-edit.component.css']
})
export class ProvaEditComponent implements OnInit {

    prova: Prova;
    linhas: Linha[];
    formProva: FormGroup;
    isLinha: boolean;
    isProduto: boolean;
    model;
    closeResult: string;

    constructor(private service: ProvaService,
        private loadingService: LoadingService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private router: Router) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.linhas = this.activatedRoute.snapshot.data['linhas'];
            this.prova = this.activatedRoute.snapshot.data['prova'];
            this.montaForm();
            this.verificarTipoProva();
        });

    }

    montaForm() {
        this.formProva = this.formBuilder.group({
            nome: [this.prova.nome, Validators.required],
            ativo: [this.prova.ativo, Validators.required],
            descricao: [this.prova.descricao, Validators.required],
            dataProva: [this.prova.dataProva]
        });
        if (this.prova.questoes == null)
            this.prova.questoes = [];
    }

    verificarTipoProva() {
        if (this.prova.idLinha != null && this.prova.idLinha != '00000000-0000-0000-0000-000000000000') {
            this.isLinha = true;
            this.isProduto = false;
        }
        else if (this.prova.idProduto != null && this.prova.idProduto != '00000000-0000-0000-0000-000000000000') {
            this.isLinha = false;
            this.isProduto = true;
        }
    }

    verificarCampo($event) {
        if ($event.target.id == "rbLinha" && this.isLinha == true) {
            this.isProduto = false;
            this.prova.idProduto = null;
            this.prova.nomeProduto = null;
        }
        else if ($event.target.id == "rbProduto" && this.isProduto == true) {
            this.isLinha = false;
            this.prova.idLinha = null;
        }
    }
    salvar() {
        if (this.formProva.valid && !this.formProva.pending) {

            let modelForm = this.formProva.getRawValue() as Prova;

            this.prova.nome = modelForm.nome;
            this.prova.ativo = modelForm.ativo;
            this.prova.descricao = modelForm.descricao;
            this.prova.dataProva = modelForm.dataProva;

            this.loadingService.show();

            this.service.salvar(this.prova).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formProva.controls).forEach(key => {
                this.formProva.get(key).markAsTouched();
            });


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
                'Prova salva com sucesso!',
                '',
                'success'
            );

            this.router.navigate(['/PortaldeApoio/Treinamentos/ListaProvas']);
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar a prova.',
                'error'
            );
        }
    }

    retornaProduto($event) {
        this.prova.nomeProduto = $event.nomeProduto;
        this.prova.idProduto = $event.id;

        this.modalService.dismissAll('');
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: '', windowClass: 'modalProduto' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    removerProduto() {
        this.prova.nomeProduto = null;
        this.prova.idProduto = null;
    }
}