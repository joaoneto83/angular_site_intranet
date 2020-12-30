import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../header/header.service';
import { TokenService } from '../../../_core/services/token.service';
import { TreinamentoUsuario } from '../treinamentoUsuario';
import { LoadingService } from '../../../_shared/services/loading.service';

@Component({
    selector: 'app-provas-usuario',
    templateUrl: 'provas-usuario.component.html',
    styleUrls: ['provas-usuario.component.css']
})
export class ProvasUsuarioComponent implements OnInit {

    treinamentoUsuario: TreinamentoUsuario;
    minhasProvas: boolean = false;

    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private headerService: HeaderService,
        private tokenService: TokenService,
        private loadingService: LoadingService,
        private router: Router) {
        this.headerService.menuAtivo('Treinamentos');

        if (this.activatedRoute.snapshot.params.idUsuario) {
            this.headerService.submenuAtivo('Usuario');
        }
        else {
            this.headerService.submenuAtivo('MinhasProvas');
            this.minhasProvas = true;
        }

        this.treinamentoUsuario = this.activatedRoute.snapshot.data['treinamentoUsuario'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.treinamentoUsuario.provasUsuario.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id) {
        this.loadingService.show();
        this.router.navigate(['/PortaldeApoio/Treinamentos/Prova/' + id]).then(() => {
            this.loadingService.hide();
        });
    }
}