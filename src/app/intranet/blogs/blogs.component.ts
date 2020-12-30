import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Linha } from '../../_models/linha';
import { SubLinha } from '../../_models/subLinha';
import { SubLinhaService } from '../../_shared/services/subLinha.service';
import { Produto } from '../../_models/produto';
import { Classificacao } from '../../_models/classificacao';
import Swal from 'sweetalert2';
import { LoadingService } from '../../_shared/services/loading.service';
import { ProdutoService } from '../../_shared/services/produto.service';
import { AdminBlogsService } from './admin-blogs.service';
import { ModalCopiarProdutoComponent } from './modal-copiar-produto/modal-copiar-produto.component';
import { ModalTraducaoComponent } from '../_shared/modal-traducao/modal-traducao.component';


@Component({
  selector: 'app-produto',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private subLinhaService: SubLinhaService,
    private loadingService: LoadingService,
    private produtoService: ProdutoService,
    private adminBlogsService: AdminBlogsService) {
    this.headerService.menuAtivo('Produtos');
  }

  subLinha: string;

  produto: Produto;
  classificacao: Classificacao[];
  categorias: Classificacao[];
  formProduto: FormGroup;
  linhas: Linha[];
  subLinhas: SubLinha[];
  subLinhasCombo: SubLinha[];
  linhaSelecionada: string;

  @ViewChild('modalCopiarProduto')
  modalCopiarProduto: ModalCopiarProdutoComponent;

  @ViewChild(ModalTraducaoComponent)
  modalTraducaoComponent: ModalTraducaoComponent;

  ngOnInit(): void {
    this.loadingService.show();

    this.linhas = this.activatedRoute.snapshot.data['linhas'];
  
    this.activatedRoute.params.subscribe(routeParams => {
      this.subLinha = routeParams.linha;
      this.subLinhas = this.activatedRoute.snapshot.data['subLinhas'];
      this.produto = null;
    });
  }

  ngAfterViewInit(): void {
    this.loadingService.hide();
  }

  selecionaProduto(id: string) {

    this.loadingService.show();

    this.produtoService.get(id).subscribe(
      res => this.getProdutoSuccess(res),
      err => this.getProdutoError(err)
    );
  }

  getProdutoError(err: any): void {
    console.log(err);

    this.loadingService.hide();
  }

  getProdutoSuccess(res: Produto) {
    this.loadingService.show();

    if (res.idLinha)
      this.carregarSubLinhasCombo(res.idLinha);

    this.produto = res;
   
    this.linhaSelecionada = this.linhas.find(x => x.id == res.idLinha).codigoLinha;

    this.montaForm();

    this.loadingService.hide();
  }

  montaForm() {
    this.formProduto = this.formBuilder.group({
      nomeProduto: [this.produto.nomeProduto, Validators.required],
      codigoProduto: [this.produto.codigoProduto, Validators.required],
      codigoLegado: [this.produto.codigoLegado],
      idSubLinha: [this.produto.idSubLinha, Validators.required],
      ativo: [this.produto.ativo, Validators.required],
      idLinha: "475d188f-212d-95ce-4a6b-58baef4630b2",
      preco: [this.produto.preco.toFixed(2)],
      ordem: [this.produto.ordem],
    });
  }

  getLinhasSuccess(ret: Linha[]): void {
    this.linhas = ret;
  }

  getLinhasError(err: any): void {
    console.log('erro obtendo linhas: ' + err.message);
  }

  carregarSubLinhas(linha: string): void {
    this.selecionarLinha(linha);
    
    this.subLinhaService.getSubLinhaComProdutos(linha).subscribe(
      ret => this.getSubLinhaSuccess(ret),
      err => this.getSubLinhaError(err)
    );
  }

  getSubLinhaError(err: any): void {
    console.log(err);
  }

  getSubLinhaSuccess(ret: SubLinha[]): void {

    this.subLinhas = ret;
  }

  carregarSubLinhasCombo(linha: string): void {
    this.subLinhaService.getSubLinha(linha).subscribe(
      ret => this.getSubLinhaComboSuccess(ret),
      err => this.getSubLinhaComboError(err)
    );
  }

  getSubLinhaComboSuccess(ret: SubLinha[]): void {
    this.subLinhasCombo = ret;
  }

  getSubLinhaComboError(err: any): void {
    console.log('erro obtendo categorias:' + err.message);
  }

  retornaProduto($event) {
    this.produto = $event;

    if (this.produto.idSubLinha)
      this.recarregarEspecificacoes(this.produto.idSubLinha);

    this.produtoService.get(this.produto.id).subscribe(
      res => this.getProdutoSuccess(res),
      err => this.getProdutoError(err)
    );

    this.montaForm();
  }

  recarregarEspecificacoes(idSublinha: string) {
    this.produtoService.getListaEspecificacoesTecnicas(idSublinha, this.produto.id).subscribe(
      res => this.getEspecificacoesTecnicasSuccess(res),
      err => console.log('erro ao obter especificações técnicas: ' + err.message)
    );
  }

  getEspecificacoesTecnicasSuccess(res) {
    this.produto.especificacoesTecnicas = res;
  }

  salvar() {
    if (this.formProduto.valid && !this.formProduto.pending) {

      let modelForm = this.formProduto.getRawValue() as Produto;

      this.produto.nomeProduto = modelForm.nomeProduto;
      this.produto.codigoProduto = modelForm.codigoProduto;
      
      this.produto.idLinha = modelForm.idLinha;
      this.produto.idSubLinha = modelForm.idSubLinha;
      

      this.loadingService.show();

      this.adminBlogsService.salvar(this.produto).subscribe(
        res => this.salvarSuccess(res),
        err => this.salvarError(err)
      );
    }
    else {
      Object.keys(this.formProduto.controls).forEach(key => {
        this.formProduto.get(key).markAsTouched();
      });


    }
  }

  salvarError(err: any): void {
    console.log('Erro ao salvar', err);

    this.loadingService.hide();

    Swal.fire(
      'Erro',
      'Ocorreu um erro ao salvar o produto.',
      'error'
    )

  }

  salvarSuccess(res: boolean): void {
    this.loadingService.hide();

    if (res) {
      Swal.fire(
        'Produto salvo com sucesso!',
        '',
        'success'
      )
    }
    else {
      Swal.fire(
        'Erro',
        'Ocorreu um erro ao salvar o produto.',
        'error'
      )
    }
  }

  abrirModalCopiar() {
    let value = this.formProduto.controls['idSubLinha'].value;
    if (value) {
      let codigo = this.subLinhas.find(x => x.id == value).codigoSubLinha;

      this.modalCopiarProduto.open(codigo, this.produto.id);
    }
  }

  copiarProduto(event) {
    this.loadingService.show();
    this.adminBlogsService.copiarProduto(this.produto, event).subscribe(
      res => {
        if (res) {
          this.loadingService.hide();
          this.modalCopiarProduto.close();

          Swal.fire('Sucesso!', 'Cópia de Especificações Técnicas e Classificações feita com sucesso.', 'success');
        }
        else {
          this.loadingService.hide();
          Swal.fire('Erro', 'Algo de inesperado aconteceu. Tente novamente mais tarde', 'error');
        }

      },
      err => {
        this.loadingService.hide();
        Swal.fire('Erro', 'Algo de inesperado aconteceu. Tente novamente mais tarde', 'error');
      }
    );
  }

  abreTraducao() {
    this.modalTraducaoComponent.open(this.produto.id, 'Produto');
  }

  selecionarLinha(id) {
    this.linhaSelecionada = this.linhas.find(x => x.id == id).codigoLinha
  }
}