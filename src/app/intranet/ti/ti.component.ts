import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { ListaTi } from '../_models/lista-ti';
import { Aviso } from '../_shared/aviso/aviso';
import { AvisoService } from '../_shared/aviso/aviso.service';

@Component({
  selector: 'app-ti',
  templateUrl: './ti.component.html',
  styleUrls: ['./ti.component.css']
})
export class TiComponent implements OnInit {

  constructor(private headerService: HeaderService, private avisoService: AvisoService) { 
    this.headerService.menuAtivo('TI');
  }

  @Input()
  itens: any[];
  avisos: Aviso[] = [];
  lista: ListaTi[];
  
  ngOnInit(): void {
    this.avisoService.getAvisosPorModulo('Intranet-Ti').subscribe(
      res => this.avisos = res,
      err => console.log(err)
    )
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
