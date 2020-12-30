import { Component, Input } from '@angular/core';
import { Modelo } from '../../../../app/_models/modelo';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-cadastro-modelo',
    templateUrl: './cadastro-modelo.component.html',
    styleUrls: ['./cadastro-modelo.component.css']
})
export class CadastroModeloComponent {

    @Input()
    idProduto: string;

    @Input()
    modelos: Modelo[] = [];

    adicionaModelo() {
        this.modelos.push({ idProduto: this.idProduto } as Modelo);
    }

    removeModelo(index: number) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.modelos.splice(index, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        })
    }
}