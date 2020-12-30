import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalEditarEventoComponent } from './subsite-refrigeracao-eventos/modal-editar-evento/modal-editar-evento.component';
import { ModalSelecionarProdutoComponent } from './modal-selecionar-produto/modal-selecionar-produto.component';
import { LoadingService } from '../../../../../app/_shared/services/loading.service';
import { SubsiteRefrigeracaoService } from './subsite-refrigeracao.service';
import { EventoRefrigeracao } from '../../../../_models/eventoRefrigeracao';
import { LinksGrupoDestaque } from '../../../../_models/linksGrupoDestaque';
import { GrupoDestaque } from '../../../../_models/grupoDestaque';
import { HeaderService } from '../../../header/header.service';
import { Produto } from '../../../../_models/produto';
import { Video } from '../../../../_models/video';
import Swal from 'sweetalert2';
import { ModalTraducaoComponent } from '../../../../intranet/_shared/modal-traducao/modal-traducao.component';

@Component({
    selector: 'app-subsite-refrigeracao',
    templateUrl: 'subsite-refrigeracao.component.html',
    styleUrls: ['subsite-refrigeracao.component.css']
})
export class SubsiteRefrigeracaoComponent implements OnInit {

    gruposHome: GrupoDestaque[];
    gruposSegmento: GrupoDestaque[];
    videosHome: Video[] = [] as Video[];
    videosTreinamento: Video[] = [] as Video[];
    links: LinksGrupoDestaque = {} as LinksGrupoDestaque;
    eventos: EventoRefrigeracao[];

    @ViewChild('modalSelecionarProduto')
    modalSelecionarProduto: ModalSelecionarProdutoComponent;

    @ViewChild('modalEditarEvento')
    modalEditarEvento: ModalEditarEventoComponent;

    @ViewChild(ModalTraducaoComponent)
    modalTraducaoComponent: ModalTraducaoComponent;
    
    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private service: SubsiteRefrigeracaoService) {
        this.headerService.menuAtivo('Adm');
    }

    ngOnInit(): void {
        this.gruposHome = this.activatedRoute.snapshot.data['gruposDestaqueHome'];
        this.gruposSegmento = this.activatedRoute.snapshot.data['gruposDestaqueSegmento'];
        this.videosHome = this.activatedRoute.snapshot.data['videosHome'];
        this.videosTreinamento = this.activatedRoute.snapshot.data['videosTreinamento'];
        this.links = this.activatedRoute.snapshot.data['links'];
        this.eventos = this.activatedRoute.snapshot.data['eventos'];

        this.gruposHome.forEach(x => {
            if (!x.produtos)
                x.produtos = [] as Produto[];
        });
    }

    abrirModalSelecionarProduto(codigoGrupo, produtos, isSegmento) {
        this.modalSelecionarProduto.open(codigoGrupo, produtos.map(x => x.id), isSegmento);
    }

    selecionarProduto(event) {

        if (!event.isSegmento)
            this.gruposHome.find(x => x.codigoGrupoDestaque == event.codigoGrupo).produtos = event.produtos;
        else
            this.gruposSegmento.find(x => x.codigoGrupoDestaque == event.codigoGrupo).produtos = event.produtos;

        this.modalSelecionarProduto.close();
    }

    adicionarVideoHome() {
        this.videosHome.push({ modulo: 'Refrigeracao-Home' } as Video);
    }

    adicionarVideoTreinamento() {
        this.videosTreinamento.push({ modulo: 'Refrigeracao-Treinamento' } as Video);
    }

    removerVideoHome(i) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.videosHome.splice(i, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                );
            }
        });
    }

    removerVideoTreinamento(i) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.videosTreinamento.splice(i, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                );
            }
        });
    }

    salvar() {
        this.loadingService.show();

        let grupos = this.gruposHome.concat(this.gruposSegmento);
        let videos = this.videosHome.concat(this.videosTreinamento);

        this.service.salvar(videos, grupos, this.links).subscribe(
            res => {
                if (res) {
                    if(this.videosHome.length)
                        this.videosHome = res.filter(x => x.modulo == "Refrigeracao-Home");
                    if(this.videosTreinamento.length)
                        this.videosTreinamento = res.filter(x => x.modulo == "Refrigeracao-Treinamento");

                    this.loadingService.hide();
                    Swal.fire(
                        'Configurações salvas com sucesso!',
                        '',
                        'success'
                    );
                }
                else {
                    this.loadingService.hide();
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
        );
    }

    atualizarListaEventos(){
        this.modalEditarEvento.close();

        this.service.getEventos().subscribe(
            res => this.eventos = res,
            err => console.log(err)
        );
    }

    adicionarEvento(){
        this.modalEditarEvento.open('');
    }

    editarEvento(event){
        this.modalEditarEvento.open(event);
    }

    abreTraducao(){
        this.modalTraducaoComponent.open('1', 'Refrigeracao');
    }
}
