import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Sessao } from './sessao';
import { BehaviorSubject } from 'rxjs';
import { Pedido } from '../../site/_models/pedido';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'Elgin-adminToken';

@Injectable({ providedIn: 'root' })
export class SessaoService {

    private sessaoSubject = new BehaviorSubject<Sessao>(null);
    private isAdmin: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    setSession(sessao: Sessao) {
        window.localStorage.setItem(KEY, JSON.stringify(sessao));

        this.isAdmin = sessao.isAdmin;
        this.sessaoSubject.next(sessao);
    }

    getSession() {
        return this.sessaoSubject.asObservable();
    }

    getIsAdmin() {
        return this.isAdmin;
    }

    setCarrinho(pedido: Pedido) {
        if (isPlatformBrowser(this.platformId))
            window.localStorage.setItem('Elgin-carrinho', JSON.stringify(pedido));
    }

    getCarrinho(): Pedido {
        if (isPlatformBrowser(this.platformId))
            return JSON.parse(window.localStorage.getItem('Elgin-carrinho')) as Pedido;
    }
}