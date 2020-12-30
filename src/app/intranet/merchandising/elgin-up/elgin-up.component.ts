import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './elgin-up.component.html',
    styleUrls: ['./elgin-up.component.css']
})
export class ElginUpComponent{
    @Input()
    tituloPagina: string = "ELGIN UP";
}