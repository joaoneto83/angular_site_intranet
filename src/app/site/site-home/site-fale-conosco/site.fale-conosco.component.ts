import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_shared/services/util.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-site-fale-conosco',
    templateUrl: './site.fale-conosco.component.html',
    styleUrls: ['./site.fale-conosco.component.css']
})
export class SiteFaleConoscoComponent implements OnInit{

    constructor(private utilService: UtilService) { }

    links: any[] = [];
    
    ngOnInit(): void {
      this.links = this.utilService.retornaLinksCanaisComunicacao();
    }

}