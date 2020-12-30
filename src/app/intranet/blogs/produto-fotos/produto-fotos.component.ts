import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryImageSize } from 'ngx-gallery';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Component({
    selector: 'app-produto-fotos',
    templateUrl: './produto-fotos.component.html',
    styleUrls: ['./produto-fotos.component.css'],
})
export class ProdutoFotosComponent implements OnInit, OnChanges {

    @Input()
    imagens: Arquivo[];

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {
        this.galleryOptions = [
            {
                //fullWidth: true,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
                "imagePercent": 100, "thumbnailsPercent": 20, "thumbnailsColumns": 5, "thumbnailsMargin": 0, "thumbnailMargin": 20
            },
        ];

        this.carregarImagens();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.carregarImagens();
    }

    carregarImagens(){
        this.galleryImages = [];

        this.imagens.sort(function (a, b) {
            return a.ordem - b.ordem;
        });

        this.imagens.forEach(element => {
            this.galleryImages.push({
                small: element.caminho,
                medium: element.caminho,
                big: element.caminho,
                // description: element.nomeArquivo,
                // label: element.nomeArquivo
            });
        });

        this.galleryImages = [...this.galleryImages];
    }



}
