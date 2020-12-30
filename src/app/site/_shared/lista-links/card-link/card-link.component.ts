import { Component, Input } from '@angular/core';
import { Link } from '../../../_models/link';


@Component({
    selector: 'app-card-link',
    templateUrl: './card-link.component.html',
    styleUrls: ['./card-link.component.css']
})
export class CardLinkComponent{
    
    @Input()
    itens: Link;    
}