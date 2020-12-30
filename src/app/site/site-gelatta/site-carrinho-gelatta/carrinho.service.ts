import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Pedido } from '../../_models/pedido';
import { Produto } from '../../../_models/produto';
import { ProdutoService } from '../../../_shared/services/produto.service';
import { FormularioCompra } from './site-formulario-compra/formularioCompra';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'Elgin-adminToken';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {

    carrinho: Pedido;
    produtos: Produto[];

    constructor(private produtoService: ProdutoService, private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        this.getCarrinho();
    }

    setCarrinho() {
        if (isPlatformBrowser(this.platformId)) {
            window.localStorage.setItem('Elgin-carrinho', JSON.stringify(this.carrinho));
        }
    }

    getCarrinho() {
        if (isPlatformBrowser(this.platformId)) {
            let content = window.localStorage.getItem('Elgin-carrinho');

            if (content) {
                this.carrinho = JSON.parse(content) as Pedido;
                if (!this.carrinho.produtos) {
                    this.produtoService.getProdutosPorCodigoLinha('MaquinaSorvete').subscribe(
                        res => {
                            this.produtos = res;

                            this.carrinho = { produtos: this.produtos } as Pedido;

                            this.setCarrinho();
                        },
                        err => console.log(err)
                    );
                }
            }
            else {
                this.produtoService.getProdutosPorCodigoLinha('MaquinaSorvete').subscribe(
                    res => {
                        this.produtos = res;

                        this.carrinho = { produtos: this.produtos } as Pedido;

                        this.setCarrinho();
                    },
                    err => console.log(err)
                );
            }
        }
    }

    getProdutos() {
        return this.carrinho.produtos;
    }


    getQuantidade(idProduto) {
        if (this.carrinho.produtos) {
            let quantidade = this.carrinho.produtos.find(x => x.id == idProduto).qtdProduto;
            if (!quantidade)
                return 0;
            else
                return quantidade;
        }
    }

    setQuantidade(qtdProduto, idProduto) {
        if (this.carrinho.produtos) {
            this.carrinho.produtos.find(x => x.id == idProduto).qtdProduto = qtdProduto;

            this.setValorTotal();
            this.setCarrinho();
        }
    }

    getValorTotal(): number {
        return this.carrinho.valorTotal;
    }

    setValorTotal() {
        let valorTotal = 0;
        this.carrinho.produtos.forEach(x => {
            let quantidade = this.getQuantidade(x.id);

            let totalProduto = x.preco * quantidade;

            valorTotal = valorTotal + totalProduto;
        });

        this.carrinho.valorTotal = valorTotal;
    }

    isQuantidadeVazia(idProduto) {
        if (this.carrinho.produtos) {
            return this.carrinho.produtos.find(x => x.id == idProduto).qtdProduto == 0;
        }
    }

    setFormaPagamento(codigoTipoPagamento: string) {
        this.carrinho.codigoTipoPagamento = codigoTipoPagamento;
        this.setCarrinho();
    }

    getFormaPagamento() {
        return this.carrinho.codigoTipoPagamento;
    }

    validarCarrinho(): boolean {
        if (this.carrinho.valorTotal == 0 || !this.carrinho.codigoTipoPagamento)
            return false;
        else
            return true;
    }

    setFormulario(form: FormularioCompra) {
        this.carrinho.endereco = form.endereco;
        this.carrinho.numero = form.numero;
        this.carrinho.cep = form.cep;
        this.carrinho.cidade = form.cidade;
        this.carrinho.estado = form.estado;
        this.carrinho.bairro = form.bairro;
        this.carrinho.telefone = form.telefone;
        this.carrinho.email = form.email;
        this.carrinho.isPessoaFisica = form.isPessoaFisica;
        this.carrinho.nomeCompleto = form.nomeCompleto;
        this.carrinho.cpf = form.cpf;
        this.carrinho.rg = form.rg;
        this.carrinho.razaoSocial = form.razaoSocial;
        this.carrinho.cnpj = form.cnpj;
        this.carrinho.inscricaoEstadual = form.inscricaoEstadual;

        this.setCarrinho();
    }

    getFormulario() {
        let form: FormularioCompra = {} as FormularioCompra;
        form.endereco = this.carrinho.endereco;
        form.numero = this.carrinho.numero;
        form.cep = this.carrinho.cep;
        form.cidade = this.carrinho.cidade;
        form.estado = this.carrinho.estado;
        form.bairro = this.carrinho.bairro;
        form.telefone = this.carrinho.telefone;
        form.email = this.carrinho.email;
        form.isPessoaFisica = this.carrinho.isPessoaFisica;
        form.nomeCompleto = this.carrinho.nomeCompleto;
        form.cpf = this.carrinho.cpf;
        form.rg = this.carrinho.rg;
        form.razaoSocial = this.carrinho.razaoSocial;
        form.cnpj = this.carrinho.cnpj;
        form.inscricaoEstadual = this.carrinho.inscricaoEstadual;

        return form;
    }

    salvarCarrinho(): Observable<number> {

        return this.http.post<number>(
            `${environment.PORTAL_API}/Pedido/Salvar`, this.carrinho);
    }

    clearCarrinho() {
        if (isPlatformBrowser(this.platformId)) {
            this.carrinho = {} as Pedido
            window.localStorage.removeItem('Elgin-carrinho');

            this.getCarrinho();
        }
    }
}