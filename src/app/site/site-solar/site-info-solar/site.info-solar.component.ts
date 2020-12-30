import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../../_shared/services/util.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-info-solar',
  templateUrl: './site.info-solar.component.html',
  styleUrls: ['./site.info-solar.component.css']
})
export class SiteInfoSolarComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  infos: any[];
  ultimaAba: string;

  ngOnInit(): void {
  }

  filtrarLista(tipo: string) {
    let element = document.getElementById('duvida');

    if (tipo == this.ultimaAba && element.style.display == "block") {
      element.style.display = 'none';
      return;
    }
    else {
      this.infos = this.utilService.retornaInfo().filter(x => x.tipo == tipo);
      element.style.display = 'block';
      this.ultimaAba = tipo;
      return
    }
  }

  alterarIcone(id: string){
    let element = $('#btn' + id);

    if(element[0].className.includes('fa-chevron-down')){
      element[0].classList.remove('fa-chevron-down');
      element[0].classList.add('fa-chevron-up');
    }
    else {
      element[0].classList.remove('fa-chevron-up');
      element[0].classList.add('fa-chevron-down');
    }
  }
}