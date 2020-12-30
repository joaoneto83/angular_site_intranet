import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-site-box-aparelho-ideal',
    templateUrl: 'site.box.aparelho.ideal.component.html',
    styleUrls: ['site.box.aparelho.ideal.component.css']
})
export class SiteBoxAparelhoIdealComponent implements OnInit{

    @Input()
    icone: string;
    
    @Input()
    titulo: string;

    constructor(){}

    ngOnInit(): void {
        
    }



}