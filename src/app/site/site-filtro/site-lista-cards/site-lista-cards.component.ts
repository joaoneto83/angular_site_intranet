import { OnChanges, Input, SimpleChanges, Component } from '@angular/core';
import { Produto } from '../../../../app/_models/produto';

@Component({
    selector: 'app-site-lista-cards',
    templateUrl: './site-lista-cards.component.html',
    styleUrls: ['./site-lista-cards.component.css']
})
export class SiteListaCardsComponent implements OnChanges{

    @Input() produtos: Produto[] = [];
    rows: any[] = [];

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.produtos)
            this.rows = this.groupColumns(this.produtos);
    }

    groupColumns(produtos: Produto[]) {
    
        if(this.produtos !== undefined)
        {
            const newRows = [];
            for (let index = 0; index < produtos.length; index += 99) {
                newRows.push(produtos.slice(index, index + 99));
            }
            return newRows;
        }
    }

}