import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-modal-visualizar-video',
    templateUrl: './modal-visualizar-video.component.html',
    styleUrls: ['./modal-visualizar-video.component.css']
})
export class ModalVisualizarVideoComponent implements OnInit {

    url: SafeUrl;

    closeResult: string;

    @ViewChild('contentImagem')
    divContent: ElementRef<HTMLInputElement>;

    constructor(
        private modalService: NgbModal,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
    }


    open(codigo: string) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + codigo);
        
        this.modalService.open(this.divContent, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
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