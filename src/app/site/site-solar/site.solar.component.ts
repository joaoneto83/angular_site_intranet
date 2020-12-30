import { Component, OnInit } from '@angular/core';
import { ResultadoSolar } from './site-solar-calculo/resultadoSolar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PesquisaCidadeEstado } from './pesquisaCidadeEstado';

@Component({
    selector: '',
    styleUrls: ['./site.solar.component.css'],
    templateUrl: './site.solar.component.html'
})
export class SiteSolarComponent implements OnInit{
    
    urlVideo: SafeUrl;
    
    eventoPesquisa: PesquisaCidadeEstado;

    constructor(private sanitizer: DomSanitizer){}

    resultado: ResultadoSolar;
    
    ngOnInit(): void {
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/e_ps1awfy9c');
    }
    
    retornaResultado(res: ResultadoSolar)
    {
        this.resultado = res;
    }

    scrollTo(div)
    {
        var el = document.getElementById(div);
        el.scrollIntoView(true);

        if(div == 'video'){
            this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/e_ps1awfy9c?autoplay=1');
        }
    }
}
