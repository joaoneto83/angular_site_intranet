import { Component, Input } from '@angular/core';
import { Caracteristica } from '../../../../app/_models/caracteristica';

@Component({
    selector: 'app-site-caracteristicas',
    templateUrl: './site-caracteristicas.component.html',
    styleUrls: ['./site-caracteristicas.component.css']
})
export class SiteCaracteristicasComponent{

    @Input()
    caracteristicas: Caracteristica[];

}