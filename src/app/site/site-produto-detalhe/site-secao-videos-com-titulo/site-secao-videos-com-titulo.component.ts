import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SecaoProduto } from '../../../_models/secaoProduto';

@Component({
    selector: 'app-site-secao-videos-com-titulo',
    templateUrl: './site-secao-videos-com-titulo.component.html',
    styleUrls: ['./site-secao-videos-com-titulo.component.css']
})
export class SiteSecaoVideosComTituloComponent implements OnInit{
    
    @Input()
    secao: SecaoProduto; 
    urlVideo: SafeUrl = '';
    urlVideo2: SafeUrl = '';
    urlVideo3: SafeUrl = '';
    urlVideo4: SafeUrl = '';

    showVideo: string = '';
    showVideo2: string = '';
    showVideo3: string = '';
    showVideo4: string = '';



    constructor(private sanitizer: DomSanitizer){
      

    }

    ngOnInit(): void {
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.secao.codigoVideo);
        this.urlVideo2 = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.secao.codigoVideo2);
        this.urlVideo3 = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.secao.codigoVideo3);
        this.urlVideo4 = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.secao.codigoVideo4);
        
        this.showVideo = this.secao.codigoVideo == null ? '' : this.secao.codigoVideo;
        this.showVideo2 = this.secao.codigoVideo2 == null ? '' : this.secao.codigoVideo2;
        this.showVideo3 = this.secao.codigoVideo3 == null ? '' : this.secao.codigoVideo3;
        this.showVideo4 = this.secao.codigoVideo4 == null ? '' : this.secao.codigoVideo4;
        
        console.log("video"+this.showVideo);
        console.log("video"+this.showVideo2);
        console.log("video"+this.showVideo3);
        console.log("video"+this.showVideo4);

    }
}