import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinhaService } from '../../../../app/_shared/services/linha.service';
import { SubLinhaService } from '../../../../app/_shared/services/subLinha.service';
import { Linha } from '../../../../app/_models/linha';
import { SubLinha } from '../../../../app/_models/subLinha';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from '../../../../app/_models/produto';
import { AdminBlogsService } from '../admin-blogs.service';
import { SecaoModeloGrupoService } from '../../../../app/_shared/services/secaoModeloGrupo.service';
import { SecaoModeloGrupo } from '../../../../app/_models/secaoModeloGrupo';

@Component({
  selector: 'app-modal-novo-modelo',
  templateUrl: './modal-novo-modelo.component.html',
  styleUrls: ['./modal-novo-modelo.component.css']
})
export class ModalNovoModeloComponent implements OnInit {

    formSecaoModeloGrupo: FormGroup;
  produto: Produto;
  grupo: SecaoModeloGrupo;
    linhas: Linha[];
    subLinhas: SubLinha[];
    closeResult: string;

    @Output()
    produtoNovo = new EventEmitter<SecaoModeloGrupo>();

    constructor(private formBuilder: FormBuilder,
        private linhaService: LinhaService,
      private subLinhaService: SubLinhaService,
      private secaoModeloGrupoService: SecaoModeloGrupoService,
        private modalService: NgbModal,
        private adminProdutoService: AdminBlogsService) { }

    ngOnInit(): void {
        this.montaForm();

        this.linhaService.getLinha().subscribe(
            ret => this.getLinhasSuccess(ret),
            err => this.getLinhasError(err)
        );
    }

    getLinhasSuccess(ret: Linha[]): void {
        this.linhas = ret;
    }

    getLinhasError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
    }

    carregarSubLinha(linha: string): void {
        this.subLinhaService.getSubLinha(linha).subscribe(
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
        this.formSecaoModeloGrupo = this.formBuilder.group({
            descricao: ["", Validators.required]
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
        this.formSecaoModeloGrupo.reset();
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

        if (this.formSecaoModeloGrupo.valid && !this.formSecaoModeloGrupo.pending) {

            const modelProduto = this.formSecaoModeloGrupo.getRawValue() as SecaoModeloGrupo;

          this.grupo = modelProduto;

          this.secaoModeloGrupoService.postNovoGrupo(modelProduto).subscribe(
                res => this.postNovoProdutoSuccess(res),
                err => this.postNovoProdutoError(err),
            );

            this.formSecaoModeloGrupo.reset();
            this.montaForm();
            this.modalService.dismissAll();
        }
        else {
            Object.keys(this.formSecaoModeloGrupo.controls).forEach(key => {
                this.formSecaoModeloGrupo.get(key).markAsTouched();
            });
        }
    }

    postNovoProdutoSuccess(res) {
      this.grupo.id = res.id;
        //this.produto.arquivos = [];
        //this.produto.modelos = [];
        //this.produto.especificacoesTecnicas = [];
        //this.produto.caracteristicas = [];
        //this.produto.classificacoes = [];
        //this.produto.secoesProduto = [];

      this.produtoNovo.emit(this.grupo);
    }

    postNovoProdutoError(err) {
        console.log('erro salvando novo grupo: ' + err.message);
    }
}
