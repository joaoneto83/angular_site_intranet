import { OnInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Produto } from 'src/app/_models/produto';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-modal-banner',
    templateUrl: './modal-banner.component.html',
    styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit { 
 
 
    closeResult: string;
    passo: number = 1;
    
  
    @Input()
    produtos: Produto;
    codigoLinha: string;
    codigoSubLinha: string;
  
    preencherCampos: boolean = false;
  
    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;
  
    constructor(
      private modalService: NgbModal,
      private activatedRoute: ActivatedRoute,
      
      ) {
    }
  
    ngOnInit(): void {
 
  
    }
  

  
    open() {
    
  
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

 