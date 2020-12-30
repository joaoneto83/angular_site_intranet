import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { Linha } from '../../../_models/linha';
import { SubLinha } from '../../../_models/subLinha';
import Swal from 'sweetalert2';
import { AdmSublinhaEditComponent } from './adm-sublinha-edit/adm-sublinha-edit.component';
import { LinhaService } from '../../../_shared/services/linha.service';

@Component({
    selector: 'app-adm-sublinha',
    templateUrl: 'adm-sublinha.component.html',
    styleUrls: ['adm-sublinha.component.css']
})
export class AdmSublinhaComponent implements OnInit {

    linhas: Linha[];

    sublinhaSelecionada: string = '';
    sublinha: SubLinha;

    @ViewChild('sublinhaEdit')
    sublinhaEdit: AdmSublinhaEditComponent;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private linhaService: LinhaService) {
        this.headerService.menuAtivo('Sublinha');
    }

    ngOnInit(): void {
        this.linhas = this.activatedRoute.snapshot.data['linhas'];
    }

    selecionaSublinha(id) {
        this.sublinhaSelecionada = id;

        this.sublinhaEdit.procuraSublinha(id);
    }

    novaSublinha() {
        this.sublinhaEdit.procuraSublinha(null);
    }

    atualizarLinhas() {
        this.loadingService.show();
        this.linhaService.getLinhaComTodasSubLinhas().subscribe(
            res => {
                this.sublinhaSelecionada = '';
                this.linhas = res;
                this.loadingService.hide();
            },
            err => {
                this.loadingService.hide();
                console.log(err);
            }
        );
    }

};