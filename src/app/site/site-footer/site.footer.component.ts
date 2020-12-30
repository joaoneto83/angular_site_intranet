import { Component, Input } from '@angular/core';
import { Linha } from '../../_models/linha';

@Component({
    selector: 'app-site-footer',
    templateUrl: './site.footer.component.html',
    styleUrls: ['./site.footer.component.css']
})
export class SiteFooterComponent {

    @Input()
    linhasFooter: Linha[];

    constructor() {}

}  