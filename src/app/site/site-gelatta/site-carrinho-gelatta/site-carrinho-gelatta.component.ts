import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { LoadingService } from '../../../_shared/services/loading.service';
import { SiteFormularioCompraComponent } from './site-formulario-compra/site-formulario-compra.component';
import { FormularioCompra } from './site-formulario-compra/formularioCompra';
import { CarrinhoService } from './carrinho.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-carrinho-gelatta',
  templateUrl: './site-carrinho-gelatta.component.html',
  styleUrls: ['./site-carrinho-gelatta.component.css']
})
export class SiteCarrinhoGelattaComponent implements OnInit {


  constructor(private loadingService: LoadingService, private carrinhoService: CarrinhoService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  passo: number = 1;
  codigoPagamento: string;
  caminhoTransferencia = '/assets/img/Site/Gelatta/icon-transferencia-2x.svg';
  caminhoCartao = '/assets/img/Site/Gelatta/icon-cartao-2x.svg';
  aceitouTermos = false;
  numeroPedido: string;

  @ViewChild('formularioCompra')
  formularioCompra: SiteFormularioCompraComponent;

  ngOnInit() {
    if (this.carrinhoService.carrinho) {
      if (this.carrinhoService.carrinho.produtos) {
        let codigo = this.carrinhoService.getFormaPagamento();
        this.mudarImagem(codigo);
        this.codigoPagamento = codigo;
      }
    }
  }

  getProduto() {
    if (this.carrinhoService.carrinho)
      if (this.carrinhoService.carrinho.produtos)
        return this.carrinhoService.carrinho.produtos;
  }

  getQtdProduto(id) {
    if (this.carrinhoService.carrinho)
      return this.carrinhoService.getQuantidade(id);
  }

  getValorMoeda(value: number) {
    if (value) {
      let currencyFormat = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
      return value.toLocaleString("pt-BR", currencyFormat);
    }
    else if (value == 0 || !value) {
      return "R$ 0,00"
    }
  }

  adicionarProduto(id) {
    let quantidadeAtual = this.carrinhoService.getQuantidade(id);

    this.carrinhoService.setQuantidade(quantidadeAtual + 1, id);
  }

  removerProduto(id) {
    let quantidadeAtual = this.carrinhoService.getQuantidade(id);

    if (quantidadeAtual > 0)
      this.carrinhoService.setQuantidade(quantidadeAtual - 1, id);
  }

  getTotal(id, precoUnidade) {
    let quantidade = this.carrinhoService.getQuantidade(id);

    let total = precoUnidade * quantidade;

    return this.getValorMoeda(total);
  }

  getValorTotal() {
    if (this.carrinhoService.carrinho)
      return this.getValorMoeda(this.carrinhoService.getValorTotal());
  }

  selecionaTipoPagamento(codigoTipoPagamento) {
    this.mudarImagem(codigoTipoPagamento);

    this.codigoPagamento = codigoTipoPagamento;
    this.carrinhoService.setFormaPagamento(codigoTipoPagamento);

  }

  mudarImagem(codigo) {
    if (codigo == 'Cartao') {
      this.caminhoCartao = '/assets/img/Site/Gelatta/icon-cartao-branco.svg';
      this.caminhoTransferencia = '/assets/img/Site/Gelatta/icon-transferencia-2x.svg';
    }
    else if (codigo == 'Transferencia') {
      this.caminhoTransferencia = '/assets/img/Site/Gelatta/icon-transferencia-branco.svg';
      this.caminhoCartao = '/assets/img/Site/Gelatta/icon-cartao-2x.svg';
    }
  }

  avancarPasso() {
    if (this.passo == 1) {
      if (this.carrinhoService.validarCarrinho()) {
        this.passo++;
        if (isPlatformBrowser(this.platformId))
          window.scroll(0, 0);
      }
      else
        Swal.fire('Atenção!', 'Para avançar é necessário selecionar pelo menos um produto e a forma de pagamento', 'warning');
    }
    if (this.passo == 2) {
      if (this.formularioCompra) {
        if (this.formularioCompra.validarFormulario()) {
          let formCompra = this.formularioCompra.form.getRawValue() as FormularioCompra;
          formCompra.isPessoaFisica = this.formularioCompra.isPessoaFisica;
          this.carrinhoService.setFormulario(formCompra);
          this.passo++;
          if (isPlatformBrowser(this.platformId))
            window.scroll(0, 0);
        }
      }
    }
  }

  voltarPasso() {
    this.passo--;
  }

  finalizar() {
    if (this.aceitouTermos == true) {
      this.loadingService.show();
      this.carrinhoService.salvarCarrinho().subscribe(
        res => {
          this.loadingService.hide();
          this.numeroPedido = res.toString().padStart(5, "0");;
          this.carrinhoService.clearCarrinho();

          if (isPlatformBrowser(this.platformId))
            window.scroll(0, 0);

          this.passo++;
        },
        err => {
          this.loadingService.hide();
          Swal.fire('Erro', 'Algo inesperado aconteceu. Tente novamente mais tarde.', 'error');
          console.log(err)
        }
      );
    }
    else {
      Swal.fire('Atenção!', 'Para finalizar a compra é preciso concordar com as informações.', 'warning');
    }
  }

  concluir() {
    this.router.navigate(['Gelatta/Home']);
  }

}
