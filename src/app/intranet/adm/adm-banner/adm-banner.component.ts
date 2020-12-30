import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { Banner } from '../../../_models/banner';
import { ImagemService } from '../../../_shared/services/imagem.service';
import Swal from 'sweetalert2';
import { ModalTraducaoComponent } from '../../_shared/modal-traducao/modal-traducao.component';

@Component({
    selector: 'app-adm-banner',
    templateUrl: 'adm-banner.component.html',
    styleUrls: ['adm-banner.component.css']
})
export class AdmBannerComponent implements OnInit {

    banners: Banner[];
    banners2: Banner[];

    tipoBannerSelecionado: string = "";
    traduz: boolean;

    tiposBanner: any[] = [
        { codigoBanner: "Site-Home", nomeExibido: "Banner da Home", traduzir: false },
        { codigoBanner: "Site-Gelatta", nomeExibido: "Banner Gelatta", traduzir: false },
        { codigoBanner: "Site-Refrigeracao", nomeExibido: "Banner Refrigeração", traduzir: true },
        { codigoBanner: "Site-Refrigeracao-Industrial", nomeExibido: "Banner Segmento - Refrigeração Industrial", traduzir: true },
        { codigoBanner: "Site-Refrigeracao-Aletados", nomeExibido: "Banner Segmento - Aletados", traduzir: true },
        { codigoBanner: "Site-Refrigeracao-Supermercados", nomeExibido: "Banner Segmento - Supermercados", traduzir: true },
        { codigoBanner: "Site-Refrigeracao-Comercial", nomeExibido: "Banner Segmento - Refrigeração Comercial", traduzir: true },
        { codigoBanner: "Site-Automacao", nomeExibido: "Banner Automação", traduzir: false }
    ];

    @ViewChild(ModalTraducaoComponent)
    modalTraducaoComponent: ModalTraducaoComponent;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private imagemService: ImagemService) {
        this.headerService.menuAtivo('Adm');
    }

    ngOnInit(): void {
    }

    selecionarBanner(codigo) {
        this.loadingService.show();

        this.tipoBannerSelecionado = codigo;
        this.traduz = this.tiposBanner.find(x => x.codigoBanner == this.tipoBannerSelecionado).traduzir;

        this.getBanners(codigo);
    }

    getBanners(codigo: any) {
        this.imagemService.GetBanners(codigo, '1').subscribe(
            res => {
                this.banners = res;
                this.imagemService.GetBanners(codigo, '2').subscribe(
                    res => {
                        this.banners2 = res;

                        this.loadingService.hide();
                    },
                    err => {
                        Swal.fire(
                            'Erro',
                            'Algo inesperado aconteceu.',
                            'error'
                        );
                        console.log(err);
                        this.loadingService.hide();
                    }
                )
            },
            err => {
                Swal.fire(
                    'Erro',
                    'Algo inesperado aconteceu.',
                    'error'
                );
                console.log(err);
                this.loadingService.hide();
            }
        );
    }

    getNomeExibicao(codigo) {
        return this.tiposBanner.find(x => x.codigoBanner == codigo).nomeExibido;
    }

    abreTraducao() {
        this.modalTraducaoComponent.open(this.tipoBannerSelecionado, 'Banner');
    }
}
