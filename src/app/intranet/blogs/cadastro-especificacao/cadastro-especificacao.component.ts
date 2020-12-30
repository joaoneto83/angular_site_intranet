import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EspecificacaoTecnica } from '../../../../app/_models/especificacaoTecnica';

@Component({
    selector: 'app-cadastro-especificacao',
    templateUrl: './cadastro-especificacao.component.html',
    styleUrls: ['./cadastro-especificacao.component.css']
})
export class CadastroEspecificacaoComponent implements OnInit, OnChanges{

    @Input() especificacoesTecnicas: EspecificacaoTecnica[];
    rows: any[];
    
    ngOnInit(): void {
        this.rows = this.groupColumns();
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.especificacoesTecnicas = [...this.especificacoesTecnicas];
        this.rows = this.groupColumns();
    }
    
    groupColumns() {
        const newRows = [];
        for (let index = 0; index < this.especificacoesTecnicas.length; index += 3) {
            newRows.push(this.especificacoesTecnicas.slice(index, index + 3));
        }
        return newRows;
    }
}