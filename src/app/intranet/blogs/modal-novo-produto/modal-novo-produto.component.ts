import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinhaService } from '../../../../app/_shared/services/linha.service';
import { SubLinhaService } from '../../../../app/_shared/services/subLinha.service';
import { Linha } from '../../../../app/_models/linha';
import { SubLinha } from '../../../../app/_models/subLinha';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from '../../../../app/_models/produto';
import { AdminBlogsService } from '../admin-blogs.service';

@Component({
    selector: 'app-modal-novo-produto',
    templateUrl: './modal-novo-produto.component.html',
    styleUrls: ['./modal-novo-produto.component.css']
})
export class ModalNovoProdutoComponent implements OnInit {

    formProduto: FormGroup;
    produto: Produto;
    linhas: string;
    subLinhas: SubLinha[];
    closeResult: string;

    @Output()
    produtoNovo = new EventEmitter<Produto>();

    constructor(private formBuilder: FormBuilder,
        private linhaService: LinhaService,
        private subLinhaService: SubLinhaService,
        private modalService: NgbModal,
        private adminProdutoService: AdminBlogsService) {
            this.linhas = "475d188f-212d-95ce-4a6b-58baef4630b2" ;

            this.carregarSubLinha();
         }

    ngOnInit(): void {
        this.montaForm();

  
    }

    getLinhasError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
    }

    carregarSubLinha(): void {
        this.subLinhaService.getSubLinha(this.linhas).subscribe(
            ret => this.getSubLinhaSuccess(ret),
            err => this.getSubLinhaError(err)
        );
    }

    getSubLinhaSuccess(ret: SubLinha[]): void {
        this.subLinhas = ret;
    }

    getSubLinhaError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
    }

    montaForm() {
        this.formProduto = this.formBuilder.group({
            nomeProduto: ["", Validators.required],
            codigoProduto: ["", Validators.required],
            
            idSubLinha: ["", Validators.required],
            idLinha: ["475d188f-212d-95ce-4a6b-58baef4630b2", Validators.required]
        });
    }

    open(content) {
        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.formProduto.reset();
        this.montaForm();
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

    salvar() {

        if (this.formProduto.valid && !this.formProduto.pending) {

            const modelProduto = this.formProduto.getRawValue() as Produto;

            this.produto = modelProduto;

            this.adminProdutoService.postNovoProduto(modelProduto).subscribe(
                res => this.postNovoProdutoSuccess(res),
                err => this.postNovoProdutoError(err),
            );

            this.formProduto.reset();
            this.montaForm();
            this.modalService.dismissAll();
        }
        else {
            Object.keys(this.formProduto.controls).forEach(key => {
                this.formProduto.get(key).markAsTouched();
            });
        }
    }

    postNovoProdutoSuccess(res) {
        this.produto.id = res.id;
        this.produto.arquivos = [];
        this.produto.modelos = [];
        this.produto.especificacoesTecnicas = [];
        this.produto.caracteristicas = [];
        this.produto.classificacoes = [];
        this.produto.secoesProduto = [];

        this.produtoNovo.emit(this.produto);
    }

    postNovoProdutoError(err) {
        console.log('erro salvando novo produto: ' + err.message);
    }
}