import { OnInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AparelhoIdeal } from './aparelhoIdeal';
import { AparelhoIdealResultado } from './aparelhoIdealResultado';
import { AparelhoIdealService } from './aparelho.ideal.service';
import { LoadingService } from '../../_shared/services/loading.service';
import { Produto } from 'src/app/_models/produto';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-site-aparelho-ideal',
  templateUrl: 'site.aparelho.ideal.component.html',
  styleUrls: ['site.aparelho.ideal.component.css']
})
export class SiteAparelhoIdealComponent implements OnInit {

  aparelhoIdeal: AparelhoIdeal;
  closeResult: string;
  passo: number = 1;
  resultado: AparelhoIdealResultado[];

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
    private service: AparelhoIdealService,
    private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.initAparelhoIdeal();

    this.produtos = this.activatedRoute.snapshot.data['produtos'];
    this.codigoLinha = this.activatedRoute.snapshot.params['linha'];
    this.codigoSubLinha = this.activatedRoute.snapshot.params['subLinha'];  

  }

  initAparelhoIdeal() {
 
    this.passo = 1;
    this.resultado = null;

    this.aparelhoIdeal = { teto: 0, estado: 0 } as AparelhoIdeal;

    this.preencherCampos = false;
  }

  open() {
    this.initAparelhoIdeal();

    this.modalService.open(this.divContent, { size: "lg" }).result.then((result) => {
      console.log("dentro",this.divContent)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  avancarPasso() {
    this.preencherCampos = false;

    if (this.passo == 1) {
      if (this.aparelhoIdeal.comprimento < 0 ||
        this.aparelhoIdeal.largura < 0 ||
        !this.aparelhoIdeal.cortina ||
        !this.aparelhoIdeal.teto ||
        !this.aparelhoIdeal.estado) {
          this.alertCampos();
        return;
      }
    }

    if (this.passo == 2) {
      if (
        this.aparelhoIdeal.pessoas < 0 ||
        this.aparelhoIdeal.aberturas < 0 ||
        this.aparelhoIdeal.aparelhos < 0 ||
        this.aparelhoIdeal.incandescente < 0 ||
        this.aparelhoIdeal.fluorescente < 0) {
          this.alertCampos();
        return;
      }
    }

    if (this.passo == 3) {
      if (
        this.aparelhoIdeal.diaComSol < 0 ||
        this.aparelhoIdeal.diaSemSol < 0 ||
        this.aparelhoIdeal.tardeSemSol < 0 ||
        this.aparelhoIdeal.tardeComSol < 0 ||
        this.aparelhoIdeal.manhaComSol < 0 ||
        this.aparelhoIdeal.manhaSemSol < 0 ||
        this.aparelhoIdeal.semSol < 0) {
          this.alertCampos();
        return;
      }

      this.buscaAparelhoIdeal();
      return;
    }

    if (this.passo == 4)
      return;

    this.passo++;
  }

  alertCampos() {
    Swal.fire(
      'Atenção',
      'Preencha todos os campos.',
      'warning'
    )
  }

  voltarPasso() {
    this.preencherCampos = false;

    if (this.passo == 1)
      return;

    this.passo--;
  }

  buscaAparelhoIdeal() {

    this.loadingService.show();

    if(!this.aparelhoIdeal.area) this.aparelhoIdeal.area = 0; 
    if(!this.aparelhoIdeal.altura) this.aparelhoIdeal.altura = 0;
    if(!this.aparelhoIdeal.comprimento) this.aparelhoIdeal.comprimento = 0;
    if(!this.aparelhoIdeal.largura) this.aparelhoIdeal.largura = 0;
    if(!this.aparelhoIdeal.janelas) this.aparelhoIdeal.janelas = 0;
    if(!this.aparelhoIdeal.teto) this.aparelhoIdeal.teto = 0;
    if(!this.aparelhoIdeal.estado) this.aparelhoIdeal.estado = 0;
    if(!this.aparelhoIdeal.pessoas) this.aparelhoIdeal.pessoas = 0;
    if(!this.aparelhoIdeal.aberturas) this.aparelhoIdeal.aberturas = 0;
    if(!this.aparelhoIdeal.incandescente) this.aparelhoIdeal.incandescente = 0;
    if(!this.aparelhoIdeal.fluorescente) this.aparelhoIdeal.fluorescente = 0;
    if(!this.aparelhoIdeal.cortina) this.aparelhoIdeal.cortina = 0;
    if(!this.aparelhoIdeal.area) this.aparelhoIdeal.area = 0;
    if(!this.aparelhoIdeal.semSol) this.aparelhoIdeal.semSol = 0;
    if(!this.aparelhoIdeal.diaSemSol) this.aparelhoIdeal.diaSemSol = 0;
    if(!this.aparelhoIdeal.diaComSol) this.aparelhoIdeal.diaComSol = 0;
    if(!this.aparelhoIdeal.tardeSemSol) this.aparelhoIdeal.tardeSemSol = 0;
    if(!this.aparelhoIdeal.tardeComSol) this.aparelhoIdeal.tardeComSol = 0;
    if(!this.aparelhoIdeal.manhaSemSol) this.aparelhoIdeal.manhaSemSol = 0;
    if(!this.aparelhoIdeal.manhaComSol) this.aparelhoIdeal.manhaComSol = 0;

    this.service.retornaAparalhosIdeias(this.aparelhoIdeal).subscribe(
      res => this.retornaAparalhosIdeiasSuccess(res),
      err => this.retornaAparalhosIdeiasError(err)
    );
  }

  retornaAparalhosIdeiasError(err: any): void {
    console.log(err);

    this.loadingService.hide();
  }

  retornaAparalhosIdeiasSuccess(res: AparelhoIdealResultado[]): void {
    this.resultado = res;
    this.passo++;

    this.loadingService.hide();
  }

  private getDismissReason(reason: any): string {
    this.initAparelhoIdeal();

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}