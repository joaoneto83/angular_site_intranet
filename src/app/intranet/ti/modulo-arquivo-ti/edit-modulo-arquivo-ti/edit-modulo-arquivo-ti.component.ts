import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { ModuloArquivoTi } from '../../modulo-arquivo-ti/moduloArquivoTi';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { TiService } from '../../ti.service';
import { FileResponse } from '../../../../_models/fileResponse';
import { Arquivo } from "../../../../_models/Arquivo";

@Component({
    selector: 'app-edit-modulo-arquivo-ti',
    templateUrl: './edit-modulo-arquivo-ti.component.html',
    styleUrls: ['./edit-modulo-arquivo-ti.component.css']
})
export class EditModuloArquivoTiComponent{
    
    model: ModuloArquivoTi;
    closeResult: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    reload = new EventEmitter<boolean>();

    constructor(private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private tiService: TiService,
        private loadingService: LoadingService) { }

    open(model: ModuloArquivoTi) {
        this.model = model;
        this.montaModal();
    }

    montaModal() {
        this.modalService.open(this.divContent, { windowClass: 'modalModulo', backdropClass: 'modelBackdrop' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    excluirArquivo(index){
        this.model.arquivos.splice(index, 1);
    }

    salvar() {
        if (!this.model.nome || (this.model.arquivos.length == 0 && this.model.ativo)) {
            Swal.fire(
                'Atenção',
                'Preencha todos os campos.',
                'warning'
            );
        }
        else
        {
            this.loadingService.show();
            
            this.tiService.postModulo(this.model).subscribe(
                res => this.postModuloSuccess(res),
                err => this.postModuloError(err),
            );
        }
    }

    getRespostaArquivo(fileResponse: FileResponse) {
        let modelArquivos = { nomeArquivo: fileResponse.arquivo.split('_').pop(), caminho: fileResponse.caminho } as Arquivo;
        this.model.arquivos.push(modelArquivos);
    }

    postModuloSuccess(res) {
        this.loadingService.hide();
        if (res)
        {
            Swal.fire('Sucesso!', 'Módulo salvo com sucesso.', 'success');
            this.modalService.dismissAll();
            this.reload.emit(res);
        }
        else
            Swal.fire('Erro', 'Erro ao salvar Módulo.', 'error');

    }

    postModuloError(err) {
        this.loadingService.hide();
        console.log('erro salvando novo: ' + err.message);
        Swal.fire('Erro', 'Erro ao salvar Módulo.', 'error');
    }
}