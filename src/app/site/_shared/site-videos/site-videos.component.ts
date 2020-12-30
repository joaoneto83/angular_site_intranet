import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../../_models/video';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-site-videos',
    templateUrl: './site-videos.component.html',
    styleUrls: ['./site-videos.component.css']
})
export class SiteVideosComponent implements OnInit {
    
    videoSelecionado: SafeHtml = '';
    @Input()
    videos: Video[];

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        if(this.videos.length > 0) {
            this.videoSelecionado = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videos[0].codigoVideo);
        }
    }

    selecionaVideo(codigoVideo) {
        this.videoSelecionado = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + codigoVideo);
    }
}