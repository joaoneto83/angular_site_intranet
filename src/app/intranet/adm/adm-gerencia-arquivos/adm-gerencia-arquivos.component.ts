import { OnInit, Input, Component,Output, EventEmitter } from '@angular/core';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { Produto} from "../../../_models/Produto";
import { ArquivoService } from '../../produto/arquivo.service';
import Swal from 'sweetalert2';
import { TipoArquivo } from '../../_models/tipoArquivo';




@Component({
    selector: 'app-gerencia-adm-arquivos',
    templateUrl: 'adm-gerencia-arquivos.component.html',
    styleUrls: ['adm-gerencia-arquivos.component.css']
})
export class AdmGerenciaArquivosComponent implements OnInit {

    @Output()
    novoItem = new EventEmitter<Arquivo>();


    ordemCertificado: number = 0;
    ordemTreinamento: number = 0;
    ordemManual: number = 0;
    ordemMaterial: number = 0;
    tipoArquivoCertificado: boolean = false;
    tipoArquivoTreinamento: boolean = false;
    tipoArquivoManual: boolean = false;
    tipoArquivoMaterial: boolean = false;

    idPai: string = '';
    sublinha: string = '';
    arquivo: Arquivo;
    arquivos: Arquivo[];
    produto:  Produto[];

    closeResult: string;
    SalveArquivo: string;
    model: any;
    caminhoArquivo: string;
    mostrarBotao: boolean = false;
    multi:any;

    tipos: TipoArquivo[];

    constructor(private service: ArquivoService) { }

    ngOnInit(): void {
        this.arquivo = {}as Arquivo;

        this.getTipoArquivos();
        this.getProduto();
    }

    getTipoArquivos() {
        this.service.getTipoArquivos().subscribe(
            res => this.getTipoArquivosSuccess(res),
            err => this.getTipoArquivosError(err)
        )
    }
    getProduto() {
        this.service.getProduto().subscribe(
            res => this.getProdutoSuccess(res),
            err => this.getProdutoError(err)
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

    getProdutoError(err: any): void {
        console.log(err);
    }
    getProdutoSuccess(res: Produto[]): void {
        this.produto = res;
    }

    getTipoArquivosError(err: any) {
        console.log(err);
    }
    getTipoArquivosSuccess(res: any) {
        this.tipos = res;
    }
    getRespostaArquivo(fileResponse: FileResponse) {
        this.arquivo.caminho = fileResponse.caminho;
        this.arquivo.ativo = true;
    }
    ArquivoError(err: any): void {
        console.log(err);
    }
    ArquivoSuccess(res: Arquivo): void {
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

    adicionar() {
       

        if (this.tipoArquivoCertificado !== false)
          {  this.model = {
            id: '00000000-0000-0000-0000-000000000000',
            nomeArquivo: this.arquivo.nomeArquivo,
            ordem: this.ordemCertificado,
            codigoTipoArquivo: "certificado",
            idPai: this.arquivo.idPai,
            caminho: this.arquivo.caminho,
            ativo: true
            } as Arquivo;
                
             this.service.addArquivo(this.model as Arquivo).subscribe(
               res => this.addArquivosSuccess(res),
               err => this.addArquivosError(err)
             );
             console.log(this.model);
         }    
 
         if (this.tipoArquivoTreinamento !== false)
         {  this.model = {
           id: '00000000-0000-0000-0000-000000000000',
           nomeArquivo: this.arquivo.nomeArquivo,
           ordem: this.ordemTreinamento,
           codigoTipoArquivo: "treinamento",
           idPai: this.arquivo.idPai,
           caminho: this.arquivo.caminho,
           ativo: true
           } as Arquivo;
               
            this.service.addArquivo(this.model as Arquivo).subscribe(
              res => this.addArquivosSuccess(res),
              err => this.addArquivosError(err)
            );
            console.log(this.model);
        } 
 
        if (this.tipoArquivoManual !== false)
        {  this.model = {
          id: '00000000-0000-0000-0000-000000000000',
          nomeArquivo: this.arquivo.nomeArquivo,
          ordem: this.ordemManual,
          codigoTipoArquivo: "manual",
          idPai: this.arquivo.idPai,
          caminho: this.arquivo.caminho,
          ativo: true
          } as Arquivo;
              
           this.service.addArquivo(this.model as Arquivo).subscribe(
             res => this.addArquivosSuccess(res),
             err => this.addArquivosError(err)
           );
           console.log(this.model);
       }   
 
       if (this.tipoArquivoMaterial !== false)
       {  this.model = {
         id: '00000000-0000-0000-0000-000000000000',
         nomeArquivo: this.arquivo.nomeArquivo,
         ordem: this.ordemMaterial,
         codigoTipoArquivo: "materialApoio",
         idPai: this.arquivo.idPai,
         caminho: this.arquivo.caminho,
         ativo: true
         } as Arquivo;
             
          this.service.addArquivo(this.model as Arquivo).subscribe(
            res => this.addArquivosSuccess(res),
            err => this.addArquivosError(err)
          );
          console.log(this.model);
      }   
 
             
           }
    
      addArquivosSuccess(res: Arquivo) {
        this.novoItem.emit(res);
        Swal.fire('Sucesso!', 'Arquivo foi salvo com sucesso.', 'success');
      }
    
      addArquivosError(err) {
        Swal.fire('Erro', 'Erro ao salvar arquivo.', 'error');
        console.log(err);
      }
}


    