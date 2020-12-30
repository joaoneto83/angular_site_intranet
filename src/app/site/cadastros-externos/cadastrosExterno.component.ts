import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoUsuario } from 'src/app/intranet/_models/tipoUsuario';
import { TipoDependente } from 'src/app/intranet/_models/tipoDependente';
import { Usuario } from 'src/app/intranet/_models/usuario';

import { LoadingService } from 'src/app/_shared/services/loading.service';
import { HeaderService } from 'src/app/intranet/header/header.service';
import { CadastrosExternoService } from './cadastrosExterno.service';


@Component({
    selector: 'app-cadastros-Externo-usuario',
    templateUrl: 'cadastrosExterno.component.html',
    styleUrls: ['cadastrosExterno.component.css']
})
export class CadastrosExternoComponent implements OnInit {

    usuario: Usuario;
    usuarios: Usuario[];
    tiposUsuario: TipoUsuario[];
    tiposDependente: TipoDependente[];
    atualizar:string;

    nome:string = "tes";

    constructor(private activatedRoute: ActivatedRoute,
        private service: CadastrosExternoService,
        private loadingService: LoadingService,
        private headerService: HeaderService) {
        // this.headerService.menuAtivo('Adm');
       
    }

    ngOnInit(): void {
       this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
        this.tiposUsuario = this.activatedRoute.snapshot.data['tiposUsuario'];
        this.tiposDependente = this.activatedRoute.snapshot.data['tiposDependente'];
      
        this.novoUsuario();
    }

    novoUsuario() {
        this.usuario = { idPerfil: "", idSetor: "", idTipoUsuario: "", dependentes: []} as Usuario;
    }

    // editar(id) {
    //     this.loadingService.show();

    //     this.service.getUsuario(id).subscribe(
    //         res => this.getUsuarioSucess(res),
    //         err => this.getUsuarioError(err)
    //     );
    // }

    getUsuarioError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    getUsuarioSucess(res: Usuario): void {
        this.usuario = res;
        this.loadingService.hide();
    }

    // atualizar() {
    //     this.loadingService.show();

    //     this.service.getUsuarios().subscribe(
    //         res => this.getUsuariosSuccess(res),
    //         err => this.getUsuariosError(err)
    //     );
    // }
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