import { OnInit, Component, Input } from '@angular/core';
import { CadastroSecaoService } from './cadastro.secao.service';
import { Secao } from './secao';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { SecaoProdutoIcone } from '../../../../app/_models/secaoProdutoIcone';
import { ImagemService } from '../../../../app/_shared/services/imagem.service';

@Component({
    selector: 'app-cadastro-secao',
    templateUrl: 'cadastro.secao.component.html',
    styleUrls: ['cadastro.secao.component.css']
})
export class CadastroSecaoComponent implements OnInit{
    
    idSecao:string = '';

    secoes: Secao[];

    toolbarGroup = [
        { name: 'document',    groups: [ 'mode']},
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
        '/',
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        { name: 'others' },
    ];

    @Input()
    idProduto: string;

    @Input()
    secoesProduto: SecaoProduto[] = [];

    icones: Arquivo[]

    constructor(
        private service: CadastroSecaoService, 
        private imageService: ImagemService,
        private loadingService: LoadingService){}
    
    ngOnInit(): void {
        this.carregaIcones();
        this.carregaSecoes();
    }

    carregaIcones()
    {
        this.imageService.GetImagensPorCodigo("icoCaracteristica").subscribe(
            res => this.GetImagensPorCodigoSuccess(res),
            err => console.log(err)
        );
    }

    GetImagensPorCodigoSuccess(res: Arquivo[]): void {
        this.icones = res;
    }

    carregaSecoes()
    {
        this.service.getSecoes().subscribe(
            res => this.getSecoesSuccess(res),
            err => console.log(err)
        )
    }

    getSecoesSuccess(res: Secao[]): void {
        this.secoes = res;
    }

    adicionaSecao(){

        let model = {
            idProduto: this.idProduto,
            idSecao: this.idSecao,
        }

        this.loadingService.show();
        
        this.service.addSecaoProduto(model as SecaoProduto).subscribe(
            res => this.addSecaoProdutoSuccess(res),
            err => {
                this.loadingService.hide();
                console.log(err)
            }
        )
    }

    removeSecao(index: number)
    {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.secoesProduto.splice(index, 1); 
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        })
        
    }

    addSecaoProdutoSuccess(res: SecaoProduto): void {

        let secao = this.secoes.find(x => x.id == this.idSecao);
        res.nomeSecao = secao.nome;
        res.codigoSecao = secao.codigo;
        res.descricao = secao.descricao;
        res.qtdImagens = secao.qtdImagens;
        res.exibeTexto1 = secao.exibeTexto1;
        res.exibeTexto2 = secao.exibeTexto2;
        res.exibeTexto3 = secao.exibeTexto3;
        res.exibeAparelhoIdeal = secao.exibeAparelhoIdeal;
        res.exibeCodigoVideo = secao.exibeCodigoVideo;
        res.exibeCodigoVideo2 = secao.exibeCodigoVideo2;
        res.exibeCodigoVideo3 = secao.exibeCodigoVideo3;
        res.exibeCodigoVideo4 = secao.exibeCodigoVideo4;
        res.qtdImagens = secao.qtdImagens;
        res.qtdIcones = secao.qtdIcones;
        res.arquivos = [];
        res.icones = [];

        this.secoesProduto.push(res);

        this.loadingService.hide();
    }
    
    getRespostaArquivo(fileResponse: FileResponse){

        let model = {
            idPai: this.idProduto,            
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
        if(item.arquivos)
        {
            item.arquivos.push(res)
        }
        else{
            item.arquivos = [res];
        }
    }

    removeArquivo(idSecao: string, id: string){

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

    adicionaIcone(secaoProduto: SecaoProduto) {

        if(!secaoProduto.icones)
            secaoProduto.icones = [];

        secaoProduto.icones.push({ idSecaoProduto: secaoProduto.id } as SecaoProdutoIcone);
    }

    removeIcone(secaoProduto: SecaoProduto, index: number) {
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
}