import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GrupoService } from '../../../grupo/grupo.service';
import { Grupo } from '../../../grupo/grupo';

@Component({
  selector: 'app-bloco-grupo',
  templateUrl: './bloco-grupo.component.html',
  styleUrls: ['./bloco-grupo.component.css']
})
export class BlocoGrupoComponent implements OnInit {

  itens: Grupo[] = [];
  txtBusca: string = '';
  maxHeightUl: string;
  debounce: Subject<string> = new Subject<string>();

  @Input()
  idGrupo: string;

  @Output()
  grupo = new EventEmitter<Grupo>();

  constructor(private service: GrupoService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getGrupos(this.txtBusca).subscribe(
      res => this.getGruposSuccess(res),
      err => console.log(err));

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.getGrupos(filter));
  }

  getGruposSuccess(res){
    this.itens = res;
    if(this.idGrupo != null && this.idGrupo != '00000000-0000-0000-0000-000000000000'){
      this.grupo.emit(this.itens.find(x => x.id == this.idGrupo));
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getGrupos(filter: string) {
    this.service.getGrupos(filter).subscribe(
      res => this.itens = res,
      err => console.log(err)
    )
  }

  selecionar(id){
    this.grupo.emit(this.itens.find(x => x.id == id));
  }

}