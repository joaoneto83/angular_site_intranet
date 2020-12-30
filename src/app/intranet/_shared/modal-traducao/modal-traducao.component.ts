import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../_shared/services/loading.service';
import { TraducaoService } from './modal-traducao.service';
import { Traducao } from './traducao';
import Swal from 'sweetalert2';
import { ModalHtmlEditorComponent } from '../modal-html-editor/modal-html-editor.component';

@Component({
    selector: 'app-modal-traducao',
    templateUrl: './modal-traducao.component.html',
    styleUrls: ['./modal-traducao.component.css']
})
export class ModalTraducaoComponent implements OnInit {
  
    id: string;

    closeResult: string;

    itemHtml: Traducao;
    campoHtml: string;
    traducao: Traducao[];

    @ViewChild('contentTraducao')
    divContent: ElementRef<HTMLInputElement>;

    @ViewChild(ModalHtmlEditorComponent)
    ModalHtmlEditorComponent: ModalHtmlEditorComponent;

    constructor(private modalService: NgbModal,
        private loadingService: LoadingService,
        private traducaoService: TraducaoService) { }

    ngOnInit(): void {
    }


    open(id: string, metodo: string) {
        this.loadingService.show();

        this.traducaoService.get(id, metodo).subscribe(
            res => {
                this.traducao = res;
                this.loadingService.hide();

                this.modalService.open(this.divContent, { size: "lg" }).result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
            },
            err => {
                console.log(err);
                this.loadingService.hide();
            }    
        );
    }

    salvar(){
        this.traducaoService.salvar(this.traducao).subscribe(
            res => {
                if(res)
                {
                    Swal.fire('Sucesso!', 'Salvo com sucesso.', 'success');
                    this.close();
                }
                else
                {
                    Swal.fire('Erro', 'Ocorreu um erro ao salvar.', 'error');
                }
            },
            err => {
                console.log(err);
                Swal.fire('Erro', 'Ocorreu um erro ao salvar.', 'error');
                this.loadingService.hide();
            }    
        ); 
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

    abreHtmlEditor(item: Traducao, campoHtml: string){
        this.itemHtml = item;
        this.campoHtml = campoHtml;
        if(campoHtml == 'en')
            this.ModalHtmlEditorComponent.open(item.en);
        else if(campoHtml == 'es')
            this.ModalHtmlEditorComponent.open(item.es);
    }

    getHtmlValue(value: string){
        if(this.campoHtml == 'en')
            this.itemHtml.en = value;
        else if(this.campoHtml == 'es')
            this.itemHtml.es = value;
    }

    isHtml(codigoCampo: string): boolean{

        var htmlFields: string[];
        htmlFields = ['Texto3'];

        return htmlFields.includes(codigoCampo);
    }
}