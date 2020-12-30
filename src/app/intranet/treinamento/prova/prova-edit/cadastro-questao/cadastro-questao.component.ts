import { Component, Input } from '@angular/core';
import { Questao } from '../../../../../../app/intranet/_models/questao';
import { ProvaService } from '../../prova.service';
import { LoadingService } from '../../../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-cadastro-questao',
    templateUrl: './cadastro-questao.component.html',
    styleUrls: ['./cadastro-questao.component.css']
})
export class CadastroQuestaoComponent {

    @Input()
    idProva: string;

    @Input()
    questoes: Questao[] = [];

    constructor(private service: ProvaService,
        private loadingService: LoadingService) { }

    adicionaQuestao() {
        this.service.addQuestao({ idProva: this.idProva } as Questao).subscribe(
            res => this.addQuestaoSuccess(res),
            err => {
                this.loadingService.hide();
                console.log(err)
            }
        )
    }
    addQuestaoSuccess(res: any) {
        this.questoes.push(res);
    }

    // removeQuestao(index: number) {
    //     Swal.fire({
    //         title: 'Deseja excluir este item?',
    //         type: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Sim',
    //         cancelButtonText: 'Não'
    //     }).then((result) => {
    //         if (result.value) {
    //             this.questoes.splice(index, 1);
    //         } else if (result.dismiss === Swal.DismissReason.cancel) {
    //             Swal.fire(
    //                 'Exclusão Cancelada',
    //                 'Operação cancelada pelo usuário',
    //                 'error'
    //             )
    //         }
    //     })
    // }
}