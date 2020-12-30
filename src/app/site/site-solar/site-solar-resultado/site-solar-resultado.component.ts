import { Component, Input } from '@angular/core';
import { ResultadoSolar } from '../site-solar-calculo/resultadoSolar';
import { CalculoSolar } from '../site-solar-calculo/CalculoSolar';

@Component({
  selector: 'app-solar-resultado',
  templateUrl: './site-solar-resultado.component.html',
  styleUrls: ['./site-solar-resultado.component.css']
})
export class SiteSolarResultadoComponent {
  
  constructor() { }

  @Input()
  calculo: CalculoSolar;

  @Input()
  resultado: ResultadoSolar;

}
