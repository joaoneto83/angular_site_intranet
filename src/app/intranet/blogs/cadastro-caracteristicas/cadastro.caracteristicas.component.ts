import { OnInit, Component, Input, Output, ViewChild } from '@angular/core';
import { Caracteristica } from '../../../../app/_models/caracteristica';
import { Arquivo } from "../../../../app/_models/Arquivo";
import { ImagemService } from '../../../../app/_shared/services/imagem.service';
import Swal from 'sweetalert2';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { ArquivoService } from '../arquivo.service';
import { ModalEnviarArquivoComponent } from '../../_shared/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { ModalVisualizarImagemComponent } from '../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';





@Component({
    selector: 'app-cadastro-caracteristicas',
    templateUrl: 'cadastro.caracteristicas.component.html',
    styleUrls: ['cadastro.caracteristicas.component.css']
})
export class CadastroCaracteristicasComponent implements OnInit {

    @Input()
    icone: string; 

    @Input()
    height: string;

    @Input()
    idProduto: string;

    @Input()
    liHeight: string;
    
    @Input()
    itens: Arquivo[];

    @Input()
    tipoArquivo: string;
 
    
    @Input()
    caracteristicas: Caracteristica[] = []

    @Input()
    titulo: string;

    @Input()
    fotos: Arquivo[];

    maxHeightUl: string;

  
  
    @ViewChild(ModalEnviarArquivoComponent)
    modalEnviarArquivoComponent: ModalEnviarArquivoComponent;
  
    @ViewChild(ModalVisualizarImagemComponent)
    modalVisualizarArquivoComponent: ModalVisualizarImagemComponent;

    icones: Arquivo[]

    mostrarBotaoCaract : boolean;

    constructor(private imageService: ImagemService, private _modalService: NgbModal) {
     }

    ngOnInit(): void {
        this.imageService.GetImagensPorCodigo("icoCaracteristica").subscribe(
            res => this.GetImagensPorCodigoSuccess(res),
            err => console.log(err)
        );
        
    }
    verificarTd(){
        console.log("tes");
    }

 
    GetImagensPorCodigoSuccess(res: Arquivo[]): void {
        this.icones = res;
    }

    adicionaCaracteristica() {
        this.caracteristicas.push({ idProduto: this.idProduto } as Caracteristica);
    }

    removeCaracteristica(index: number) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.caracteristicas.splice(index, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        })
    }
  
    retornaNovoItem($event) {
        console.log($event);
      }
      abreEnviarArquivo(id) {
        this.modalEnviarArquivoComponent.open(id);
      }
      
      abreVisualizarArquivo(caminho)
      {
        this.modalVisualizarArquivoComponent.open(caminho);
      }
    
      isImage(caminho){
        return this.modalVisualizarArquivoComponent.isImagem(caminho);
      }
    
      isPDF(caminho){
        return this.modalVisualizarArquivoComponent.isPDF(caminho);
      }
}