import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import Swal from 'sweetalert2';
import { AgendamentoService } from '../agendamento/agendamento.service';
import { Usuario } from '../../_models/usuario';

@Component({
    selector: 'app-lista-usuario',
    templateUrl: 'lista-usuario.component.html',
    styleUrls: ['lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

    usuarios: Usuario[];
    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: AgendamentoService) {
        this.headerService.menuAtivo('Treinamentos');
        this.headerService.submenuAtivo('Usuario');
        this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.usuarios.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id) {
        this.router.navigate(['/PortaldeApoio/Treinamentos/Usuario/' + id]);
    }
}