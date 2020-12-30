import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../_models/usuario';

@Component({
    selector: 'app-aniversariantes',
    templateUrl: './aniversariantes.component.html',
    styleUrls: ['./aniversariantes.component.css']
})
export class AniversariantesComponent implements OnInit{
    
    constructor() {}

    @Input()
    aniversariantes: Usuario[] = [];

    ngOnInit(): void {
    }
}