import { OnInit, Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../../app/_shared/services/loading.service';
import { SubLinha } from '../../../../_models/subLinha';
import { SubLinhaService } from '../../../../_shared/services/subLinha.service';
import { Linha } from '../../../../_models/linha';
import { EspecificacaoTecnica } from '../../../../_models/especificacaoTecnica';
import { Classificacao } from '../../../../intranet/_models/classificacao';
import { Arquivo } from "../../../../_models/Arquivo";
import { Banner } from '../../../../_models/banner';
import { ActivatedRoute } from '@angular/router';
import { ModalVisualizarImagemComponent } from '../../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';
import { UploadFileComponent } from '../../../_shared/upload-file/upload.file.component';
import { ModalTraducaoComponent } from '../../../../intranet/_shared/modal-traducao/modal-traducao.component';

@Component({
    selector: 'app-adm-sublinha-edit',
    templateUrl: 'adm-sublinha-edit.component.html',
    styleUrls: ['adm-sublinha-edit.component.css']
})
export class AdmSublinhaEditComponent implements OnInit {

    sublinha: SubLinha;
    arquivo: Arquivo;

    @Input()
    linhas: Linha[];

    @Output()
    atualizar: EventEmitter<null> = new EventEmitter<null>();

    formSublinha: FormGroup;

    linhaSelecionada: string;

    @ViewChild(ModalVisualizarImagemComponent)
    modalVisualizarImagem: ModalVisualizarImagemComponent;

    @ViewChild(ModalTraducaoComponent)
    modalTraducaoComponent: ModalTraducaoComponent;

    @ViewChild('upImgSublinha')
    upImgSublinha: UploadFileComponent

    @ViewChild('upBanner')
    upBanner: UploadFileComponent;

    @ViewChild('upBanner2')
    upBanner2: UploadFileComponent;

    constructor(private service: SubLinhaService,
        private loadingService: LoadingService,
        private formBuilder: FormBuilder,
        private sublinhaService: SubLinhaService) { }

    ngOnInit(): void {
    }

    montaForm() {
        this.formSublinha = this.formBuilder.group({
            nomeSubLinha: [this.sublinha.nomeSubLinha, Validators.required],
            codigoSubLinha: [this.sublinha.codigoSubLinha, Validators.required],
            possuiFiltroPilha: [this.sublinha.possuiFiltroPilha],
            ativo: [this.sublinha.ativo, Validators.required],
            idLinha: [this.sublinha.idLinha, Validators.required],
            ordem: [this.sublinha.ordem, Validators.required]
        });
    }

    procuraSublinha(id: string) {
        this.loadingService.show();
        if (id) {
            this.sublinhaService.getSubLinhaPorId(id).subscribe(
                res => {
                    this.loadingService.hide();

                    this.sublinha = res;
                    this.linhaSelecionada = this.linhas.find(x => x.id == res.idLinha).codigoLinha;
                    this.sublinha.arquivo = { id: res.idArquivo, nomeArquivo: res.nomeArquivo, caminho: res.caminhoImagem,ordem: 0 } as Arquivo;

                    if (!this.sublinha.banner)
                        this.sublinha.banner = { ordem: 0 } as Arquivo;
                    if (!this.sublinha.banner2)
                        this.sublinha.banner2 = { ordem: 0 } as Arquivo;

                    this.montaForm();
                },
                err => {
                    console.log(err);
                    this.loadingService.hide();
                    Swal.fire(
                        'Erro',
                        'Algo inesperado aconteceu, tente novamente mais tarde.',
                        'error'
                    );
                }
            );
        }
        else {
            this.sublinha = {
                nomeSubLinha: '',
                codigoSubLinha: '',
                idLinha: '',
                possuiFiltroPilha: false,
                ativo: false,
                especificacoes: [],
                classificacoes: [],
                arquivo: { ordem: 0 } as Arquivo,
                banner: { ordem: 0 } as Arquivo,
                banner2: { ordem: 0 } as Arquivo,
            } as SubLinha;

            this.loadingService.hide();
            this.montaForm();
        }

        if (this.upImgSublinha)
            this.upImgSublinha.reloadData();
        if (this.upBanner)
            this.upBanner.reloadData();
        if (this.upBanner2)
            this.upBanner2.reloadData();
    }

    adicionarEspec() {
        this.sublinha.especificacoes.push({ nomeEspecificacao: '' } as EspecificacaoTecnica);
    }

    adicionarClassificacao() {
        this.sublinha.classificacoes.push({ filhos: [] } as Classificacao);
    }

    adicionarFilho(index) {
        this.sublinha.classificacoes[index].filhos.push({} as Classificacao);
    }

    salvar() {
        if (this.formSublinha.valid && !this.formSublinha.pending) {

            let modelForm = this.formSublinha.getRawValue() as SubLinha;

            this.sublinha.nomeSubLinha = modelForm.nomeSubLinha;
            this.sublinha.codigoSubLinha = modelForm.codigoSubLinha;
            this.sublinha.possuiFiltroPilha = modelForm.possuiFiltroPilha;
            this.sublinha.ativo = modelForm.ativo;
            this.sublinha.idLinha = modelForm.idLinha;
            this.sublinha.ordem = modelForm.ordem;

            this.loadingService.show();

            this.service.salvar(this.sublinha).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formSublinha.controls).forEach(key => {
                this.formSublinha.get(key).markAsTouched();
            });
        }
    }

    salvarError(err: any): void {
        console.log('Erro ao salvar', err);

        this.loadingService.hide();

        Swal.fire(
            'Erro',
            'Ocorreu um erro ao salvar a sublinha.',
            'error'
        )

    }

    salvarSuccess(res: SubLinha): void {
        this.loadingService.hide();

        if (res) {
            Swal.fire(
                'Sublinha salva com sucesso!',
                '',
                'success'
            );
            this.atualizar.emit();
            this.sublinha = res;
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar a sublinha.',
                'error'
            );
        }
    }

    getRespostaArquivo(event) {
        this.sublinha.caminhoImagem = event.caminho;
        this.sublinha.arquivo.nomeArquivo = event.arquivo;
        this.sublinha.arquivo.caminho = event.caminho;
        this.sublinha.arquivo.codigoTipoArquivo = 'imgSubLinha';
    }

    getRespostaBanner(event) {
        this.sublinha.banner.nomeArquivo = event.arquivo.split('_').pop();;
        this.sublinha.banner.caminho = event.caminho;
        this.sublinha.banner.codigoTipoArquivo = 'imgSublinhaAltaRes';
    }

    getRespostaBanner2(event) {
        this.sublinha.banner2.nomeArquivo = event.arquivo.split('_').pop();;
        this.sublinha.banner2.caminho = event.caminho;
        this.sublinha.banner2.codigoTipoArquivo = 'imgSublinhaBaixaRes';
    }

    tratarExibicaoUrl(campo, value) {
        if (campo == 'aparelho') {
            if (value) {
                this.sublinha.mostraLink = false;
                this.sublinha.mostraRota = false;
            }
        }
        if (campo == 'link') {
            if (value) {
                this.sublinha.mostraAparelhoIdeal = false;
                this.sublinha.mostraRota = false;
            }
        }
        if (campo == 'rota') {
            if (value) {
                this.sublinha.mostraLink = false;
                this.sublinha.mostraAparelhoIdeal = false;
            }
        }
    }

    abreVisualizarImagem(caminho) {
        this.modalVisualizarImagem.open(caminho);
    }

    removeClassificacaoFilhos(indexClassificação: number, indexFilho: number) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.sublinha.classificacoes[indexClassificação].filhos.splice(indexFilho, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        });
    }

    removeEspecificacao(index: number){
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.sublinha.especificacoes.splice(index, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        });
    }

    abreTraducao(){
        this.modalTraducaoComponent.open(this.sublinha.id, 'Sublinha');
    }

    selecionarLinha(id){
        this.linhaSelecionada = this.linhas.find(x => x.id == id).codigoLinha
    }
}