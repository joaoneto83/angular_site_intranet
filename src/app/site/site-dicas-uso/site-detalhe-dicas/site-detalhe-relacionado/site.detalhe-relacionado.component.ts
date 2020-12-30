import { Component, Input } from '@angular/core';
import { Postagem } from '../../Postagem';

@Component({
  selector: 'app-site-detalhe-relacionado',
  templateUrl: './site.detalhe-relacionado.component.html',
  styleUrls: ['./site.detalhe-relacionado.component.css']
})
export class SiteDetalheRelacionadoComponent {

  constructor() { }

  @Input()
  relacionados: Postagem[];

}