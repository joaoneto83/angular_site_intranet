import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from '../../../_models/perfil';
import { PerfilService } from '../adm-perfil.service';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-adm-perfil-edit',
    templateUrl: 'adm-perfil-edit.component.html',
    styleUrls: ['adm-perfil-edit.component.css']
})
export class AdmPerfilEditComponent implements OnInit{

    @Input()
    perfil: Perfil;

    @Output()
    atualizar: EventEmitter<null> = new EventEmitter<null>();

    constructor(private service: PerfilService,
                private loadingService: LoadingService){}

    ngOnInit(): void {
        
    }

    salvar(){

        if(!this.perfil.nome)
        {
            Swal.fire(
                    'Atenção',
                    'Preencha o campo Nome.',
                    'warning'
                );
        }

        this.loadingService.show();

        this.service.salvar(this.perfil).subscribe(
            res => this.salvarSuccess(res),
            err => this.salvarError(err)
        );
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if(res)
        {
            this.atualizar.emit();

            Swal.fire(
                'Perfil salvo com sucesso!',
                '',
                'success'
            );
        }
        else{
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o perfil.',
                'error'
            );
        }
    }
}