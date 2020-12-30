import { Component, OnInit } from '@angular/core';
import { SessaoService } from '../../../../app/_core/sessao/sessao.service';
import { Sessao } from '../../../../app/_core/sessao/sessao';
import { TokenService } from '../../../../app/_core/services/token.service';

@Component({
    selector: 'app-config',
    templateUrl: 'config.component.html',
    styleUrls: ['config.component.css']
})
export class ConfigComponent implements OnInit{

    isAdmin: boolean;
    haveAdmin: boolean;

    constructor(
        private sessionService: SessaoService, 
        private tokenService: TokenService) {}

    ngOnInit(): void {

        this.haveAdmin = this.tokenService.haveAdmin();

        let sessao = {
            isAdmin: true
        } as Sessao;
        
        this.isAdmin = true;

        this.sessionService.setSession(sessao);
    }

    clicaAdmin()
    {
        let sessao = {
            isAdmin: !this.isAdmin
        } as Sessao;
        
        this.sessionService.setSession(sessao);
    }

}