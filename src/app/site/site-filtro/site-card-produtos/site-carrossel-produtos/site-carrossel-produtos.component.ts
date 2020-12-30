import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Arquivo } from "../../../../_models/Arquivo";

@Component({
    selector: 'app-site-carrossel-produtos',
    templateUrl: './site-carrossel-produtos.component.html',
    styleUrls: ['./site-carrossel-produtos.component.css']
})
export class SiteCarrosselProdutosComponent implements AfterViewInit{

    @Input() 
    imagens: Arquivo[];

    @Input() 
    link: string;

    @ViewChild('carrosselProduto') carousel: NgbCarousel;
    ngAfterViewInit() {
        this.carousel.pause();
    }
}