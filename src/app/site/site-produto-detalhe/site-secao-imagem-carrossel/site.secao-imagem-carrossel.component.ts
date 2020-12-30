import { Component, OnInit, Input } from '@angular/core';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Component({
  selector: 'app-site-secao-imagem-carrossel',
  templateUrl: './site.secao-imagem-carrossel.component.html',
  styleUrls: ['./site.secao-imagem-carrossel.component.css']
})
export class SiteSecaoImagemCarrosselComponent implements OnInit {

  @Input()
  secao: SecaoProduto;

  ngOnInit(): void {
  }

}