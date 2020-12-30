import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Classificacao } from '../../../../app/_models/classificacao';

@Component({
  selector: 'app-cadastro-classificacao',
  templateUrl: './cadastro.classificacao.component.html',
  styleUrls: ['./cadastro.classificacao.component.css']
})
export class CadastroClassificacaoComponent {
    
  @Input()
  classificacao: Classificacao[];
}