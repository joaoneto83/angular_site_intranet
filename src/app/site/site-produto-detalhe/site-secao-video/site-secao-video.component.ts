import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';

@Component({
    selector: 'app-site-secao-video',
    templateUrl: './site-secao-video.component.html',
    styleUrls: ['./site-secao-video.component.css']
})
export class SiteSecaoVideoComponent implements OnInit{
    
    @Input()
    secao: SecaoProduto;
    urlVideo: SafeUrl = '';

    constructor(private sanitizer: DomSanitizer){}

    ngOnInit(): void {
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.secao.codigoVideo);
    }
}