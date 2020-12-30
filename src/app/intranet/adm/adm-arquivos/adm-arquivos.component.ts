import { OnInit, Component } from '@angular/core';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import { ArquivoService } from '../../produto/arquivo.service';
import Swal from 'sweetalert2';
import { TipoArquivo } from '../../_models/tipoArquivo';

@Component({
    selector: 'app-adm-arquivos',
    templateUrl: 'adm-arquivos.component.html',
    styleUrls: ['adm-arquivos.component.css']
})
export class AdmArquivosComponent implements OnInit {

    idPai: string = '';
    arquivo: Arquivo;
    tipoArquivo: string;
    arquivos: Arquivo[]

    tipos: TipoArquivo[];

    constructor(private service: ArquivoService) { }

    ngOnInit(): void {
        this.arquivo = {}as Arquivo;

        this.getTipoArquivos();
        this.getArquivos();
    }

    getTipoArquivos() {
        this.service.getTipoArquivos().subscribe(
            res => this.getTipoArquivosSuccess(res),
            err => this.getTipoArquivosError(err)
        )
    }

    getArquivos() {
        this.service.get().subscribe(
            res => this.getArquivosSuccess(res),
            err => this.getArquivosError(err)
        )
    }
    getArquivosError(err: any): void {
        console.log(err);
    }
    getArquivosSuccess(res: Arquivo[]): void {
        this.arquivos = res;
    }

    getTipoArquivosError(err: any) {
        console.log(err);
    }
    getTipoArquivosSuccess(res: any) {
        this.tipos = res;
    }

    getRespostaArquivo(fileResponse: FileResponse) {
        this.arquivo.id = '00000000-0000-0000-0000-000000000000';
        this.arquivo.caminho = fileResponse.caminho;
        this.arquivo.ativo = true;

        this.service.addArquivo(this.arquivo).subscribe(
            res => this.addArquivoSuccess(res),
            err => this.addArquivoError(err)
        );

        this.getArquivos();
    }
    addArquivoError(err: any): void {
        console.log(err);
    }
    addArquivoSuccess(res: Arquivo): void {
        this.getArquivos();
    }

    removeArquivo(id: string) {

        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.service.apagarArquivo(id).subscribe(
                    res => this.delImagemSecaoProdutoSuccess(id),
                    err => console.log(err)
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        })
    }

    delImagemSecaoProdutoSuccess(idArquivo: string): void {
        let arquivo = this.arquivos.find(x => x.id == idArquivo);
        var index = this.arquivos.indexOf(arquivo);
        this.arquivos.splice(index, 1);
    }
}