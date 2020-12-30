import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from '../../_models/perfil';
import { PerfilService } from './adm-perfil.service';
import { Menu } from '../../_models/menu';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';

@Component({
    selector: 'app-adm-perfil',
    templateUrl: 'adm-perfil.component.html',
    styleUrls: ['adm-perfil.component.css']
})
export class AdmPerfilComponent implements OnInit{

    perfis: Perfil[];

    perfil: Perfil;

    constructor(private activatedRoute: ActivatedRoute,
                private loadinService: LoadingService,
                private service: PerfilService,
                private headerService: HeaderService) {
                this.headerService.menuAtivo('Adm');
            }

    ngOnInit(): void {
        this.perfis = this.activatedRoute.snapshot.data['perfis'];
    }

    novoPerfil(){
        this.loadinService.show();

        this.perfil = {} as Perfil;

        this.service.getMenusFuncionalidades("00000000-0000-0000-0000-000000000000")
                    .subscribe(
                        res => this.getMenusSuccess(res),
                        err => this.getMenusError(err)
                    );
    }

    getMenusError(err: any): void {
        console.log(err);
        this.loadinService.hide();
    }

    getMenusSuccess(res: Menu[]): void {
        this.perfil.menus = res;
        
        this.loadinService.hide();
    }

    atualizar(){

        this.loadinService.show();

        this.perfil = null;

        this.service.getPerfis().subscribe(
            res => this.getPerfisSuccess(res),
            err => this.getPerfisError(err)
        );
    }

    getPerfisError(err: any): void {
        console.log(err);
        this.loadinService.hide();
    }

    getPerfisSuccess(res: Perfil[]): void {
        this.perfis = res;
        this.loadinService.hide();
    }

    editar(id)
    {
        this.loadinService.show();

        this.service.getPerfil(id).subscribe(
            res => this.getEditarSucess(res),
            err => this.getEditarError(err)
        );
    }

    getEditarError(err: any): void {
        console.log(err);
        this.loadinService.hide();
    }

    getEditarSucess(res: Perfil): void {
        this.perfil = res;

        this.service.getMenusFuncionalidades(this.perfil.id)
                    .subscribe(
                        res => this.getMenusSuccess(res),
                        err => this.getMenusError(err)
                    );

        this.loadinService.hide();
    }
}