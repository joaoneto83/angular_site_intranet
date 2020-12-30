import { OnInit, Component } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { ActivatedRoute } from '@angular/router';
import { AdmUsuarioService } from '../adm/adm-usuario/adm-usuario.service';
import { TokenService } from '../../../app/_core/services/token.service';
import { TipoDependente } from '../_models/tipoDependente';
import { TipoUsuario } from '../_models/tipoUsuario';

@Component({
    templateUrl: 'meus-dados.component.html'
})
export class MeusDadosComponent implements OnInit{
    
    usuario: Usuario;
    tiposUsuario: TipoUsuario[];
    tiposDependente: TipoDependente[];

    constructor(public activatedRoute: ActivatedRoute, 
                public tokenService: TokenService,
                public service: AdmUsuarioService){}
    
    ngOnInit(): void {
        this.usuario = this.activatedRoute.snapshot.data["usuario"];
        this.tiposUsuario = this.activatedRoute.snapshot.data['tiposUsuario'];
        this.tiposDependente = this.activatedRoute.snapshot.data['tiposDependente'];
    }

    atualizar(){
        this.service.getUsuario(this.tokenService.Id).subscribe(
            res => this.usuario = res
        );
    }
}