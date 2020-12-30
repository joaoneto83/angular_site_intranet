import { Component, Input } from '@angular/core';
import { BlocoLinhaTempo } from './site-bloco-linha-tempo/bloco-linha-tempo';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../_shared/services/util.service';

@Component({
    selector: 'app-site-linha-tempo',
    templateUrl: './site-linha-tempo.component.html',
    styleUrls: ['./site-linha-tempo.component.css']
})
export class SiteLinhaTempoComponent{

    constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService) {
        this.blocos = utilService.retornaLinhaTempo();
    }

    @Input()
    blocos: BlocoLinhaTempo[];
}