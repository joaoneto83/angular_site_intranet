import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-modal-visualizar-imagem',
    templateUrl: './modal-visualizar-imagem.component.html',
    styleUrls: ['./modal-visualizar-imagem.component.css']
})
export class ModalVisualizarImagemComponent implements OnInit {
  
    caminho: string;

    closeResult: string;

    @ViewChild('contentImagem')
    divContent: ElementRef<HTMLInputElement>;

    constructor(private modalService: NgbModal,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
    }


    open(caminho: string) {
        this.caminho = caminho;
        
        this.modalService.open(this.divContent, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    isImagem(caminho: string) {
        let extensao = caminho.split('.').pop();

        let imagens = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'tif', 'bmp'];

        return imagens.includes(extensao.toLowerCase());
    }

    isPDF(caminho: string) {
        let extensao = caminho.split('.').pop();

        let pdf = ['pdf'];

        return pdf.includes(extensao.toLowerCase());
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}