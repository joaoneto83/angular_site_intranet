import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Component({
  selector: 'app-site-secao-imagem-direita',
  templateUrl: './site.secao-imagem-direita.component.html',
  styleUrls: ['./site.secao-imagem-direita.component.css']
})
export class SiteSecaoImagemDireitaComponent implements OnInit {

  @Input()
  secao: SecaoProduto;
  linqueImagem: string = ' ';

  ngOnInit(): void {

    if (this.secao.arquivos[0]) {
    
      this.linqueImagem = this.secao.arquivos[0].linque;
  }
  }

}