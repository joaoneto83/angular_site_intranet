import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../../../../app/_models/produto';
import { ProdutosComparativo } from './produtosComparativo';

const KEY = 'comparativoToken';

@Injectable({ providedIn: 'root' })
export class ComparativoService {

    private produtosSubject =  new BehaviorSubject<ProdutosComparativo>(null);
    private produtos: ProdutosComparativo;

    private selecionados: Produto[] = [];

    constructor() {

    }

    clear()
    {
        this.produtos = {
            produto1: {id:""} as Produto,
            produto2: {id:""} as Produto,
            produto3: {id:""} as Produto
          } as ProdutosComparativo;

        this.selecionados = [];

        this.updateList();
    }

    add(produto: Produto) {

        this.selecionados.push(produto);

        this.updateList();
    }

    remove(produto: Produto) {

        let index = this.selecionados.indexOf(produto);
        this.selecionados.splice(index, 1);

        this.updateList();
    }

    updateList() {
        if (this.selecionados.length == 0)
        {
            this.set(1, {id:""}as Produto);
            this.set(2, {id:""}as Produto);
            this.set(3, {id:""}as Produto);
        }  
        else if (this.selecionados.length == 1)
        {
            this.set(1, this.selecionados[0]);
            this.set(2, {id:""}as Produto);
            this.set(3, {id:""}as Produto);
        }   
        else if (this.selecionados.length == 2)
        {
            this.set(1, this.selecionados[0]);
            this.set(2, this.selecionados[1]);
            this.set(3, {id:""}as Produto);
        }  
        else if (this.selecionados.length == 3)
        {
            this.set(1, this.selecionados[0]);
            this.set(2, this.selecionados[1]);
            this.set(3, this.selecionados[2]);
        }    

        this.produtosSubject.next(this.produtos);
    }

    set(position: number, produto: Produto) {

        if(!this.produtos)
        {
            this.produtos = {
                produto1: {id:""} as Produto,
                produto2: {id:""} as Produto,
                produto3: {id:""} as Produto
              } as ProdutosComparativo;
        }

        if (position == 1) {
            this.produtos.produto1 = produto;
        }

        else if (position == 2) {
            this.produtos.produto2 = produto;
        }

        else if (position == 3) {
            this.produtos.produto3 = produto;
        }

        this.produtosSubject.next(this.produtos);
    }

    get() {
        return this.produtosSubject.asObservable();
    }

    count(): number{
        return this.selecionados.length;
    }
}