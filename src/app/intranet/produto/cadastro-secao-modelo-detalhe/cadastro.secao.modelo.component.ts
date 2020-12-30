import { OnInit, Component, Input } from '@angular/core';
import { CadastroSecaoService } from './cadastro.secao.modelo.service';
import { SecaoModeloGrupoService } from '../../../../app/_shared/services/secaoModeloGrupo.service';
import { Secao } from './secao';
import { SecaoModelo } from '../../../_models/secaoModelo';
import { SecaoModeloGrupo } from '../../../_models/secaoModeloGrupo';
import { SecaoModeloGrupoProduto } from '../../../_models/secaoModeloGrupo';
import { Produto } from '../../../_models/produto';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import Swal from 'sweetalert2';
import { LoadingService } from '../../../_shared/services/loading.service';
import { SecaoModeloIcone } from '../../../_models/secaoModeloIcone';
import { ImagemService } from '../../../_shared/services/imagem.service';

@Component({
  selector: 'app-cadastro-secao-modelo-detalhe',
  templateUrl: 'cadastro.secao.modelo.component.html',
  styleUrls: ['cadastro.secao.modelo.component.css']
})
export class CadastroSecaoModeloDetalheComponent implements OnInit {

  public show: boolean = false;
  public buttonName: any = 'Show';
    
  nomeModelo: string = '';
  idSecao: string = '';

  secoes: Secao[];

  toolbarGroup = [
    { name: 'document', groups: ['mode'] },
    { name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    '/',
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
    { name: 'links' },
    '/',
    { name: 'styles' },
    { name: 'colors' },
    { name: 'tools' },
    { name: 'others' },
  ];

  @Input()
  idGrupo: string;

  @Input()
  secoesProduto: SecaoModelo[] = [];
  
  @Input()
  produtoRel: Produto[] = [];

  icones: Arquivo[]
  addproduto: string;

  secaoG: SecaoModeloGrupo;
  secaoGprod: SecaoModeloGrupoProduto;
  
  constructor(
    private service: CadastroSecaoService,
    private secaoModeloGrupo: SecaoModeloGrupoService,
    private imageService: ImagemService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.carregaIcones();
    this.carregaSecoes();
    this.carregaSecoesModelo();
  }
  toggle() {
    this.show = !this.show;


    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {

      this.RetornaSecoesModeloGrupoProduto();
      this.buttonName = "Hide";
    }
    else {
      this.buttonName = "Show";
    }
  }
  RetornaSecoesModeloGrupoProduto() {

    this.produtoRel = [];

    this.service.retornaSecoesModeloGrupoProduto(this.idGrupo).subscribe(
      res => this.getRetornaSecoesModeloGrupoProdutoSuccess(res),
      err => console.log(err)
    )
  }

  getRetornaSecoesModeloGrupoProdutoSuccess(res: Produto[]): void {
    this.produtoRel = res;
  }


  carregaIcones() {
    this.imageService.GetImagensPorCodigo("icoCaracteristica").subscribe(
      res => this.GetImagensPorCodigoSuccess(res),
      err => console.log(err)
    );
  }

  GetImagensPorCodigoSuccess(res: Arquivo[]): void {
    this.icones = res;
  }

  carregaSecoes() {
    this.service.getSecoes().subscribe(
      res => this.getSecoesSuccess(res),
      err => console.log(err)
    )
  }
  replicar() {

    Swal.fire({
      title: 'Deseja realmente aplicar aos produtos?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {

        this.secaoG = <SecaoModeloGrupo>{};
                 
        this.secaoG.id = this.idGrupo;

        this.secaoG.idProdutos = [];

        for (var i = 0; i < this.produtoRel.length; i++) {

          this.secaoGprod = <SecaoModeloGrupoProduto>{};
          
          this.secaoGprod.ativo = this.produtoRel[i].ativo;
          this.secaoGprod.id = this.produtoRel[i].id;

          this.secaoG.idProdutos.push(this.secaoGprod);
        }

        this.service.salvarSecaoModeloGrupo(this.secaoG).subscribe(
          res => this.getSalvarSecaoModeloGrupoSuccess(res),
          err => console.log(err)
        )

      }
    })
        
  }
  getSalvarSecaoModeloGrupoSuccess(res: SecaoModeloGrupo): void {

    Swal.fire(
      'Sucesso',
      'Modelo aplicado aos produtos',
      'success'
    )

    this.carregaSecoesModelo();

  }

  adicionarProduto() {


    this.service.adicionarProduto(this.addproduto).subscribe(
      res => this.getAdicionarProdutoSuccess(res),
      err => console.log(err)
    )
    
  }
  getAdicionarProdutoSuccess(res: Produto): void {
    if (res != null) {
      this.addproduto = "";
      res.ativo = true;
      this.produtoRel.push(res);
    }
  }

  carregaSecoesModelo() {

    this.secoesProduto = [];

    this.service.getSecoesModelo(this.idGrupo).subscribe(
      res => this.getSecoesModeloSuccess(res),
      err => console.log(err)
    )
    
    this.RetornaSecoesModeloGrupoProduto();

  }

  getSecoesModeloSuccess(res: SecaoModelo[]): void {
    this.secoesProduto = res;
  }

  getSecoesSuccess(res: Secao[]): void {
    this.secoes = res;
  }

  adicionaSecao() {

    let model = {
      descricaoModelo: this.nomeModelo,
      idSecao: this.idSecao,
      idSecaoModeloGrupo: this.idGrupo
    }

    this.loadingService.show();

    this.service.addSecaoModelo(model as SecaoModelo).subscribe(
      res => this.addSecaoProdutoSuccess(res),
      err => {
        this.loadingService.hide();
        console.log(err)
      }
    )
  }

  removeSecao(index: string) {
    Swal.fire({
      title: 'Deseja excluir este item? SEÇÃO',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {

        this.service.delSecaoModelo(index).subscribe(
          res => this.delSecaoProdutoSuccess(res),
          err => {
            this.loadingService.hide();
            console.log(err)
          }
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

  delSecaoProdutoSuccess(res: boolean): void {

    this.carregaSecoesModelo();

    this.loadingService.hide();
  }

  addSecaoProdutoSuccess(res: SecaoModelo): void {

    this.carregaSecoesModelo();

    this.loadingService.hide();
  }

  getRespostaArquivo(fileResponse: FileResponse) {

    let model = {
      idPai: this.idGrupo,
      idSecao: fileResponse.idPai,
      codigoTipoArquivo: 'imgDetProduto',
      caminho: fileResponse.caminho,
      linque: fileResponse.linque
    } as Arquivo;

    this.service.addImagemSecaoProduto(model).subscribe(
      res => this.addImagemSecaoProdutoSuccess(res),
      err => console.log(err)
    )
  }

  addImagemSecaoProdutoSuccess(res: Arquivo): void {
    let item = this.secoesProduto.find(x => x.id == res.idSecao);
    if (item.arquivos) {
      item.arquivos.push(res)
    }
    else {
      item.arquivos = [res];
    }
  }

  removeArquivo(idSecao: string, id: string) {

    Swal.fire({
      title: 'Deseja excluir este item?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.service.delImagemSecaoProduto(id).subscribe(
          res => this.delImagemSecaoProdutoSuccess(idSecao, id),
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

  delImagemSecaoProdutoSuccess(idSecao: string, idArquivo: string): void {
    let item = this.secoesProduto.find(x => x.id == idSecao);
    let arquivo = item.arquivos.find(x => x.id == idArquivo);
    var index = item.arquivos.indexOf(arquivo);
    item.arquivos.splice(index, 1);
  }

  adicionaIcone(secaoProduto: SecaoModelo) {

    if (!secaoProduto.icones)
      secaoProduto.icones = [];

    secaoProduto.icones.push({ idSecaoProduto: secaoProduto.id } as SecaoModeloIcone);
  }

  removeIcone(secaoProduto: SecaoModelo, index: number) {
    Swal.fire({
      title: 'Deseja excluir este item?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        secaoProduto.icones.splice(index, 1);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Exclusão Cancelada',
          'Operação cancelada pelo usuário',
          'error'
        )
      }
    })
  }


  salvar(secaoModelo) {

    this.service.updateSecaoModelo(secaoModelo).subscribe(
      res => this.salvarSuccess(true),
      err => this.salvarError(err)
    );


  }


  salvarError(err: any): void {
    console.log('Erro ao salvar', err);

    this.loadingService.hide();

    Swal.fire(
      'Erro',
      'Ocorreu um erro ao salvar o modelo de seção.',
      'error'
    )

  }

  salvarSuccess(res: boolean): void {
    this.loadingService.hide();

    if (res) {
      Swal.fire(
        'Modelo de seção salvo com sucesso!',
        '',
        'success'
      )
    }
    else {
      Swal.fire(
        'Erro',
        'Ocorreu um erro ao salvar o modelo de seção.',
        'error'
      )
    }
  }

}
