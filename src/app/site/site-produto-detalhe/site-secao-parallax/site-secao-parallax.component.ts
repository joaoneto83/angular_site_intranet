import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { SiteAparelhoIdealComponent } from '../../site-aparelho-ideal/site.aparelho.ideal.component';
import * as $ from 'jquery';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-site-secao-parallax',
    templateUrl: './site-secao-parallax.component.html',
    styleUrls: ['./site-secao-parallax.component.css']
})
export class SiteSecaoParallaxComponent implements OnInit, AfterViewInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    @Input()
    secao: SecaoProduto;

    @ViewChild(SiteAparelhoIdealComponent)
    aparelhoIdealComp: SiteAparelhoIdealComponent;

    sticky: boolean;
    menuPosition: any;

    @ViewChild('divFixaTopo') menuElement: ElementRef;

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.menuPosition = this.menuElement.nativeElement.offsetTop
        }, 1000);
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.menuPosition) {
                const windowScroll = window.pageYOffset;
                if (windowScroll >= this.menuPosition - 70) {
                    this.sticky = true;
                } else {
                    this.sticky = false;
                }
            }
        }
    }

    abreAparelhoIdeal() {
        this.aparelhoIdealComp.open();
    }
}