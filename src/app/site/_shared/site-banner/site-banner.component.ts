import { Component, Input } from '@angular/core';
import { Banner } from '../../../_models/banner';

@Component({
  selector: 'app-site-banner',
  templateUrl: './site-banner.component.html',
  styleUrls: ['./site-banner.component.css']
})
export class SiteBannerComponent {

  @Input()
  imagens: Banner[];
}