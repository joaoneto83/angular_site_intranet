import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Component({
  selector: 'app-site-secao-imagem-esquerda',
  templateUrl: './site.secao-imagem-esquerda.component.html',
  styleUrls: ['./site.secao-imagem-esquerda.component.css']
})
export class SiteSecaoImagemEsquerdaComponent implements OnInit {

  @Input()
  secao: SecaoProduto;

  linqueImagem: string = '';

  ngOnInit(): void {

    if (this.secao.arquivos[0]) {

      this.linqueImagem = this.secao.arquivos[0].linque;
  }
  }

}