import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-submenu-treinamento',
  templateUrl: './submenu-treinamento.component.html',
  styleUrls: ['./submenu-treinamento.component.css']
})
export class SubMenuTreinamentoComponent implements OnInit {
 
  submenuAtivo: string;

  constructor(private headerService: HeaderService) {
    this.headerService.submenuAtivo$.subscribe((data) => {
      this.submenuAtivo = data;
    });
  }
  
  ngOnInit(): void {
  }
}