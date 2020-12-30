import { Component, Input } from '@angular/core';
import { BlocoLinhaTempo } from './bloco-linha-tempo';

@Component({
    selector: 'app-site-bloco-linha-tempo',
    templateUrl: './site-bloco-linha-tempo.component.html',
    styleUrls: ['./site-bloco-linha-tempo.component.css']
})
export class SiteBlocoLinhaTempoComponent{
    @Input()
    bloco: BlocoLinhaTempo;
}