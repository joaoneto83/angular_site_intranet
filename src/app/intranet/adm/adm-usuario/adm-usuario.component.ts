import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../_models/usuario';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { AdmUsuarioService } from './adm-usuario.service';
import { HeaderService } from '../../header/header.service';
import { TipoUsuario } from '../../_models/tipoUsuario';
import { TipoDependente } from '../../_models/tipoDependente';

@Component({
    selector: 'app-adm-usuario',
    templateUrl: 'adm-usuario.component.html',
    styleUrls: ['adm-usuario.component.css']
})
export class AdmUsuarioComponent implements OnInit {

    usuario: Usuario;
    usuarios: Usuario[];
    tiposUsuario: TipoUsuario[];
    tiposDependente: TipoDependente[];

    constructor(private activatedRoute: ActivatedRoute,
        private service: AdmUsuarioService,
        private loadingService: LoadingService,
        private headerService: HeaderService) {
        this.headerService.menuAtivo('Adm');
       
    }

    ngOnInit(): void {
        this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
        this.tiposUsuario = this.activatedRoute.snapshot.data['tiposUsuario'];
        this.tiposDependente = this.activatedRoute.snapshot.data['tiposDependente']
    }

    novoUsuario() {
        this.usuario = { idPerfil: "", idSetor: "", idTipoUsuario: "", dependentes: [] } as Usuario;
    }

    editar(id) {
        this.loadingService.show();

        this.service.getUsuario(id).subscribe(
            res => this.getUsuarioSucess(res),
            err => this.getUsuarioError(err)
        );
    }

    getUsuarioError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    getUsuarioSucess(res: Usuario): void {
        this.usuario = res;
        this.loadingService.hide();
    }

    atualizar() {
        this.loadingService.show();

        this.service.getUsuarios().subscribe(
            res => this.getUsuariosSuccess(res),
            err => this.getUsuariosError(err)
        );
    }
    getUsuariosError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }
    getUsuariosSuccess(res: Usuario[]): void {
        this.usuario = null;
        this.usuarios = res;

        this.loadingService.hide();
    }

}