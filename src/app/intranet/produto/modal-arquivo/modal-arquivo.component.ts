import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import Swal from 'sweetalert2'
import { ArquivoService } from '../arquivo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-arquivo',
  templateUrl: './modal-arquivo.component.html',
  styleUrls: ['./modal-arquivo.component.css']
})
export class ModalArquivoComponent {

  closeResult: string;
  arquivo: string;
  model: any;
  caminhoArquivo: string;
  formArquivo: FormGroup;
  mostrarBotao: boolean = false;
 
  @Input()
  mostrarBotaoCaract: boolean;

  @Input()
  tipoArquivo: string;

  @Input()
  modelArquivo: Arquivo;

  @Input()
  isEditar: boolean;

  @Input()
  idProduto: string;

  @Output()
  novoItem = new EventEmitter<Arquivo>();


  constructor(private modalService: NgbModal, private arquivoService: ArquivoService, private formBuilder: FormBuilder, ) { 
   
  }

  ngOnInit(): void {
    if (this.modelArquivo) {
      this.montaFormArquivo();
      if (this.modelArquivo.caminho)
        this.mostrarBotao = true;
    }
    else
      this.montaForm();
     
  }

  montaFormArquivo() {
    this.formArquivo = this.formBuilder.group({
      nomeArquivo: [this.modelArquivo.nomeArquivo, Validators.required],
      alt: [this.modelArquivo.alt, Validators.required],
      ordem: [this.modelArquivo.ordem, Validators.required]
    });
    
  }

  montaForm() {
    
    this.formArquivo = this.formBuilder.group({
      nomeArquivo: ['', Validators.required],
      alt: ['', Validators.required],
      ordem: ['', Validators.required]
    });

  }

  open(content) {
    this.modalService.open(content, { size: "lg" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  getRespostaArquivo(fileResponse: FileResponse) {
    this.caminhoArquivo = fileResponse.caminho;
    this.mostrarBotao = true;
  }

  adicionarCaract() {
    if ((this.formArquivo.valid && !this.formArquivo.pending)) {
      this.model = {
        id:'00000000-0000-0000-0000-000000000000',
        nomeArquivo: this.formArquivo.get('nomeArquivo').value,
        alt:this.formArquivo.get('alt').value,
        codigoTipoArquivo: "icoCaracteristica",
        ordem: 0,
        idPai: "",
        caminho: this.caminhoArquivo ? this.caminhoArquivo : this.modelArquivo.caminho,
        ativo: true
      } as Arquivo;
      this.arquivoService.addArquivo(this.model as Arquivo).subscribe(
        res => this.addArquivoSuccess(res),
        err => this.addArquivoError(err)
      );
      this.formArquivo.reset();
      this.caminhoArquivo = '';
      this.mostrarBotao = false;
      this.modalService.dismissAll();
    }
    else {
      Object.keys(this.formArquivo.controls).forEach(key => {
        this.formArquivo.get(key).markAsTouched();
      });
    }
  }

  adicionar() {
    if ((this.formArquivo.valid && !this.formArquivo.pending)) {
      this.model = {
        id: this.isEditar ? this.modelArquivo.id : '00000000-0000-0000-0000-000000000000',
        nomeArquivo: this.formArquivo.get('nomeArquivo').value,
        alt: this.formArquivo.get('alt').value,
        ordem: this.formArquivo.get('ordem').value,
        codigoTipoArquivo: this.tipoArquivo,
        idPai: this.idProduto,
        caminho: this.caminhoArquivo ? this.caminhoArquivo : this.modelArquivo.caminho,
        ativo: true
      } as Arquivo;

      this.arquivoService.addArquivo(this.model as Arquivo).subscribe(
        res => this.addArquivoSuccess(res),
        err => this.addArquivoError(err)
      );

      this.formArquivo.reset();
      this.caminhoArquivo = '';
      this.mostrarBotao = false;
      this.modalService.dismissAll();
    }
    else {
      Object.keys(this.formArquivo.controls).forEach(key => {
        this.formArquivo.get(key).markAsTouched();
      });
    }
  }

  addArquivoSuccess(res: Arquivo) {
    this.novoItem.emit(res);
    Swal.fire('Sucesso!', 'Arquivo foi salvo com sucesso.', 'success');
  }

  addArquivoError(err) {
    Swal.fire('Erro', 'Erro ao salvar arquivo.', 'error');
    console.log(err);
  }
}
