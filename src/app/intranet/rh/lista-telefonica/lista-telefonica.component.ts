import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../_models/usuario';
import { RHService } from '../rh.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-lista-telefonica',
    templateUrl: './lista-telefonica.component.html',
    styleUrls: ['./lista-telefonica.component.css']
})
export class ListaTelefonicaComponent implements OnInit {

    constructor(private service: RHService) { }

    @Input()
    contatos: Usuario[] = [];

    ultimaLetra: string = '';

    arrayCores = ['#9AC1FF', '#648CCC', '#2D9AD5', '#9ADCFF', '#648CCC', '#54DDFD'];

    ngOnInit(): void {
    }

    filtrar(event) {
        $('.letra-selecionada').removeClass('letra-selecionada');

        if (event.textContent != this.ultimaLetra) {
            this.ultimaLetra = event.textContent;
            this.service.getListaTelefonica(event.textContent).subscribe(
                res => this.getListaTelefonicaSuccess(res),
                err => console.log(err)
            );

            event.classList.add('letra-selecionada');
        }
        else {
            this.ultimaLetra = '';
            this.service.getListaTelefonica('').subscribe(
                res => this.getListaTelefonicaSuccess(res),
                err => console.log(err)
            );
        }
    }

    getListaTelefonicaSuccess(res: Usuario[]): void {
        this.contatos = res

        if (this.contatos) {
            this.contatos.forEach(elem => {
                elem.corListaTelefonica = this.arrayCores[Math.floor(Math.random() * this.arrayCores.length)];
            })
        }
    }
}