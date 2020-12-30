import { Component, Input } from '@angular/core';
import { LinkGrupoElgin } from '../../_models/linkGrupoElgin';

@Component({
    selector: 'app-bloco-link',
    templateUrl: './site.bloco-link.component.html',
    styleUrls: ['./site.bloco-link.component.css']
  })
  export class SiteBlocoLinkComponent {

    @Input()
    link: LinkGrupoElgin;
}