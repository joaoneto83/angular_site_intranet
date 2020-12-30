import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../header/header.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Linha } from '../../../../app/_models/linha';
import { SubLinha } from '../../../../app/_models/subLinha';
import { SecaoModeloGrupo } from '../../../../app/_models/secaoModeloGrupo';
import { SubLinhaService } from '../../../../app/_shared/services/subLinha.service';
import { SecaoModeloGrupoService } from '../../../../app/_shared/services/secaoModeloGrupo.service';
import { Produto } from '../../../../app/_models/produto';
import { Classificacao } from '../../../../app/_models/classificacao';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { ProdutoService } from '../../../../app/_shared/services/produto.service';
import { AdminProdutoService } from '../admin-produto.service';
import { SecaoModelo } from '../../../_models/secaoModelo';
import { CadastroSecaoService } from './cadastro.secao.modelo.service';


@Component({
  selector: 'app-cadastro-secao-modelo',
  templateUrl: 'cadastro.secao.modelo.component.html',
  styleUrls: ['cadastro.secao.modelo.component.css']
})

export class CadastroSecaoModeloComponent implements OnInit, AfterViewInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private subLinhaService: SubLinhaService,
    private loadingService: LoadingService,
    private produtoService: ProdutoService,
    private secaoModeloGrupoService: SecaoModeloGrupoService,
    private cadastroSecaoService: CadastroSecaoService,
    private adminProdutoService: AdminProdutoService) {
    this.headerService.menuAtivo('SecaoModelo');
  }

  subLinha: string;
  secoesProduto: SecaoModelo[];
  produto: Produto;
  grupo: SecaoModeloGrupo;
  classificacao: Classificacao[];
  categorias: Classificacao[];
  formProduto: FormGroup;
  linhas: Linha[];
  subLinhas: SubLinha[];
  secaoModeloGrupos: SecaoModeloGrupo[];
  subLinhasCombo: SubLinha[];
  produtoRel: Produto[];

  ngOnInit(): void {
    this.loadingService.show();
    this.linhas = this.activatedRoute.snapshot.data['linhas'];
    this.carregarSecaoModeloGrupos();
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
    this.loadingService.hide();
  }

  getProdutoSuccess(res: Produto) {
    this.loadingService.show();

    if (res.idLinha)
      this.carregarSubLinhasCombo(res.idLinha);

    this.produto = res;

    this.montaForm();

    this.loadingService.hide();
  }

  selecionaGrupo(id: string) {
    this.loadingService.show();

    this.secaoModeloGrupoService.get(id).subscribe(
      res => this.getGrupoSuccess(res),
      err => this.getGrupoError(err)
    );
  }

  getGrupoError(err: any): void {
    this.loadingService.hide();
  }

  getGrupoSuccess(res: SecaoModeloGrupo) {
    this.loadingService.show();
    this.grupo = res;
    this.montaForm();

    this.loadingService.hide();
  }
  montaForm() {
    this.formProduto = this.formBuilder.group({
      nomeProduto: [this.grupo.descricao, Validators.required],
      codigoProduto: [this.grupo.descricao, Validators.required],
      codigoLegado: [this.grupo.descricao],
      idSubLinha: [this.grupo.id, Validators.required],
      ativo: [this.grupo.ativo, Validators.required],
      idLinha: [this.grupo.id, Validators.required]
    });

    this.carregaSecoesModelo();
  }

  RetornaSecoesModeloGrupoProduto() {

    this.produtoRel = [];

    this.cadastroSecaoService.retornaSecoesModeloGrupoProduto(this.grupo.id).subscribe(
      res => this.getRetornaSecoesModeloGrupoProdutoSuccess(res),
      err => console.log(err)
    )
  }

  getRetornaSecoesModeloGrupoProdutoSuccess(res: Produto[]): void {
    this.produtoRel = res;
  }

  carregaSecoesModelo() {

    this.secoesProduto = [];

    this.cadastroSecaoService.getSecoesModelo(this.grupo.id).subscribe(
      res => this.getSecoesModeloSuccess(res),
      err => console.log(err)
    )
    this.RetornaSecoesModeloGrupoProduto();
  }

  getSecoesModeloSuccess(res: SecaoModelo[]): void {
    this.secoesProduto = res;
  }

  getLinhasSuccess(ret: Linha[]): void {
    this.linhas = ret;
  }

  getLinhasError(err: any): void {
    console.log('erro obtendo linhas: ' + err.message);
  }

  carregarSubLinhas(linha: string): void {
    this.subLinhaService.getSubLinhaComProdutos(linha).subscribe(
      ret => this.getSubLinhaSuccess(ret),
      err => this.getSubLinhaError(err)
    );
  }

  carregarSecaoModeloGrupos(): void {
    this.secaoModeloGrupoService.getSecaoModeloGrupo().subscribe(
      ret => this.getSecaoModeloGrupoSuccess(ret),
      err => this.getSecaoModeloGrupoError(err)
    );
  }

  getSecaoModeloGrupoSuccess(ret: SecaoModeloGrupo[]): void {

    this.secaoModeloGrupos = ret;
  }

  getSecaoModeloGrupoError(err: any): void {
    console.log(err);
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
    console.log('erro obtendo categorias: ' + err.message);
  }

  retornaProduto($event) {

    this.carregarSecaoModeloGrupos();

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
      this.produto.codigoLegado = modelForm.codigoLegado;
      this.produto.idLinha = modelForm.idLinha;
      this.produto.idSubLinha = modelForm.idSubLinha;
      this.produto.ativo = modelForm.ativo;

      this.loadingService.show();

      this.adminProdutoService.salvar(this.produto).subscribe(
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
}
