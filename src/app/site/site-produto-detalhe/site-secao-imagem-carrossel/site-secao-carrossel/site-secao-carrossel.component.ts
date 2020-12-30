import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Arquivo } from "../../../../_models/Arquivo";

@Component({
    selector: 'app-site-secao-carrossel',
    templateUrl: './site-secao-carrossel.component.html',
    styleUrls: ['./site-secao-carrossel.component.css']
})
export class SiteSecaoCarrosselComponent implements AfterViewInit{

    @Input() imagens: Arquivo[];
    
    @ViewChild('carrosselSecao') carousel: NgbCarousel;
    ngAfterViewInit() {
        this.carousel.pause();
    }

    proximaImagem(){
        this.carousel.next();
        this.carousel.pause();
    }
}