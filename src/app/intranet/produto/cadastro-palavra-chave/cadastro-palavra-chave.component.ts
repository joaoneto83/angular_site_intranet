import { Component, Input } from '@angular/core';
import { PalavraChave } from '../../../../app/_models/palavraChave';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-cadastro-palavra-chave',
    templateUrl: './cadastro-palavra-chave.component.html',
    styleUrls: ['./cadastro-palavra-chave.component.css']
})
export class CadastroPalavraChaveComponent {

    @Input()
    idProduto: string;

    @Input()
    palavrasChave: PalavraChave[] = [];

    valorPalavra: string = '';

    adicionaPalavra() {
        this.palavrasChave.push({ idProduto: this.idProduto, valor: this.valorPalavra } as PalavraChave);
        this.valorPalavra = '';
    }

    removePalavra(index: number) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.palavrasChave.splice(index, 1);
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