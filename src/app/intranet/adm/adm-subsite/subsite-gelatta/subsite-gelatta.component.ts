import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../../header/header.service';
import { Produto } from '../../../_models/produto';
import { PecaReposicao } from '../../../../_models/pecaReposicao';
import { UploadFileComponent } from '../../../_shared/upload-file/upload.file.component';
import { ModalVisualizarImagemComponent } from '../../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';
import { SubsiteGelattaService } from './subsite-gelatta.service';
import Swal from 'sweetalert2';
import { Arquivo } from '../../../../_models/Arquivo';

@Component({
    selector: 'app-subsite-gelatta',
    templateUrl: 'subsite-gelatta.component.html',
    styleUrls: ['subsite-gelatta.component.css']
})
export class SubsiteGelattaComponent implements OnInit {

    produtos: Produto[];
    idProdutoSelecionado: string = '';
    pecas: PecaReposicao[] = [];
    arquivo: Arquivo = {} as Arquivo;
    exibir: boolean;

    @ViewChild('upImgPeca')
    upImgPeca: UploadFileComponent;

    @ViewChild(ModalVisualizarImagemComponent)
    modalVisualizarImagem: ModalVisualizarImagemComponent;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private service: SubsiteGelattaService) {
        this.headerService.menuAtivo('Adm');
    }

    ngOnInit(): void {
        this.produtos = this.activatedRoute.snapshot.data['produtos'];
    }

    selecionarProduto(id) {
        this.idProdutoSelecionado = id;
    }

    carregarPecas() {
        if (this.upImgPeca)
            this.upImgPeca.reloadData();

        if (!this.idProdutoSelecionado) {
            Swal.fire(
                'Atenção',
                'Selecione um produto para filtrar.',
                'warning'
            );
            return;
        }

        this.loadingService.show();
        this.service.getPecasPorProduto(this.idProdutoSelecionado).subscribe(
            res => {
                this.pecas = res.lista;
                if (res.arquivo)
                    this.arquivo = res.arquivo as Arquivo;
                else
                    this.arquivo = {} as Arquivo;

                this.exibir = true;
                this.loadingService.hide();
            },
            err => {
                this.loadingService.hide();
                console.log(err);
            }
        );
    }

    adicionarPeca() {
        this.pecas.push({} as PecaReposicao);
    }

    getRespostaImg(event) {
        this.arquivo.nomeArquivo = event.arquivo.split('_').pop();;
        this.arquivo.caminho = event.caminho;
        this.arquivo.codigoTipoArquivo = 'imgPecaReposicao';
        this.arquivo.ativo = true;
    }

    abreVisualizarImagem(caminho) {
        this.modalVisualizarImagem.open(caminho);
    }

    salvar() {
        if (!this.pecasValidas()) {
            Swal.fire(
                'Atenção',
                'Alguma peça não possui a descrição ou código preenchido. Por favor verifique os campos.',
                'warning'
            );
            return;
        }

        this.loadingService.show();

        this.service.salvar(this.pecas, this.arquivo, this.idProdutoSelecionado).subscribe(
            res => {
                if (res) {
                    this.loadingService.hide();
                    Swal.fire(
                        'Peças de Reposição salvas com sucesso!',
                        '',
                        'success'
                    );
                }
                else {
                    Swal.fire(
                        'Erro',
                        'Ocorreu um erro ao salvar.',
                        'error'
                    );
                }
            },
            err => {
                this.loadingService.hide();
                Swal.fire(
                    'Erro',
                    'Algo inesperado aconteceu.',
                    'error'
                );
                console.log(err);
            }
        )
    }

    pecasValidas() {
        let cont = 0
        this.pecas.forEach(x => {
            if (!x.descricao || !x.codigoPecaReposicao) {
                cont++;
            }
        });

        return cont == 0;
    }
}
