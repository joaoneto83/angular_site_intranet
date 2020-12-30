import { OnInit, Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../../../../app/_models/banner';
import Swal from 'sweetalert2';
import { AdminImagemService } from '../services/admin-imagem.service';
import { ImagemService } from '../../../../app/_shared/services/imagem.service';

@Component({
    selector: 'app-edit-banner',
    templateUrl: 'edit-banner.component.html',
    styleUrls: ['edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

    @Input()
    modulo: string;

    @Input()
    titulo: string;

    @Input()
    componente: string;

    @Input()
    banners: Banner[];

    banner: Banner;

    exibecampo: boolean;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;
    closeResult: string;

    @Output()
    atualiza = new EventEmitter<Banner[]>();

    constructor(
        private loadingService: LoadingService,
        private imagemService: ImagemService,
        private adminImagemService: AdminImagemService,
        private modalService: NgbModal,
    ) { }

    ngOnInit(): void {

        if (this.componente == "2") {
            this.exibecampo = false;
        } else {
            this.exibecampo = true;
        }

    }

    novo() {
        this.banner = {
            modulo: this.modulo,
            componente: this.componente,
            posicao: 0,
            ativo: true,
        } as Banner;
    }

    cancelar() {
        this.banner = null;

        this.recarregaBanners();
    }

    open() {
        this.modalService.open(this.divContent, { windowClass: 'modalBanner', backdropClass: 'modelBackdrop', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    carregar() {
        this.loadingService.show();

        this.imagemService.GetBanners(this.modulo, this.componente).subscribe(
            res => this.carregarSuccess(res),
            err => this.carregarError(err)
        )
    }

    carregarError(err: any): void {
        this.loadingService.hide();
        console.log(err);
    }

    carregarSuccess(res: Banner[]): void {
        this.loadingService.hide();

        this.banners = res;
    }

    close() {
        this.banner = null;

        this.modalService.dismissAll();
    }

    getRespostaArquivo(file: File) {
        this.banner.file = file;
    }

    editar(index) {
        this.banner = this.banners[index];

        this.atualiza.emit([this.banner]);
    }

    exluir(index, id) {

        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.adminImagemService.RemoverBanner(id).subscribe(
                    res => {
                        if (res) {

                            this.recarregaBanners();

                            Swal.fire(
                                'Excluído com sucesso',
                                '',
                                'success'
                            );

                            this.banners.splice(index, 1);
                        }
                        else {
                            Swal.fire(
                                'Erro',
                                'Ocorreu um erro ao tentar excluir.',
                                'error'
                            );
                        }
                    },
                    err => {
                        Swal.fire(
                            'Erro',
                            'Ocorreu um erro ao tentar excluir.',
                            'error'
                        );

                        console.log(err);
                    }
                )
            }
        })


    }

    salvar() {

        this.loadingService.show();

        const formData = new FormData();

        formData.append("model", JSON.stringify(this.banner));

        if (this.banner.file)
            formData.append(this.banner.file.name, this.banner.file);

        if (this.componente == "2") {
            this.adminImagemService.SalvarBanner2(formData).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        } else {
            this.adminImagemService.SalvarBanner(formData).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }

    }
    salvarError(err: any) {
        console.log(err);

        Swal.fire(
            'Erro',
            'Ocorreu um erro ao tentar salvar.',
            'error'
        );

        this.loadingService.hide();
    }

    onChangeColorHex8($event) {
        this.banner.cor = $event;
    }

    recarregaBanners() {
        this.imagemService.GetBanners(this.modulo, this.componente).subscribe(
            res => {
                this.banners = res;
                this.atualiza.emit(res);
            },
            err => console.log(err)
        )
    }

    salvarSuccess(res: any) {
        this.loadingService.hide();

        if (res) {
            this.recarregaBanners();

            this.close();
            setTimeout(() => {
                Swal.fire(
                    'Salvo com sucesso',
                    '',
                    'success');
            }, 500);
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao tentar salvar.',
                'error'
            );
        }
    }
}
