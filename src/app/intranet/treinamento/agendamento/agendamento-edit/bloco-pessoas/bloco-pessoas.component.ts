import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Usuario } from '../../../../../../app/intranet/_models/usuario';
import { UsuarioService } from '../../../usuarios/usuario.service';

@Component({
  selector: 'app-bloco-pessoas',
  templateUrl: './bloco-pessoas.component.html',
  styleUrls: ['./bloco-pessoas.component.css']
})
export class BlocoPessoasComponent implements OnInit {

  itens: Usuario[] = [];
  txtBusca: string = '';
  maxHeightUl: string;
  debounce: Subject<string> = new Subject<string>();

  @Input()
  idUsuario: string;

  @Output()
  usuario = new EventEmitter<Usuario>();

  constructor(private service: UsuarioService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getUsuarios(this.txtBusca).subscribe(
      res => this.getUsuariosSuccess(res),
      err => console.log(err));

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.getUsuarios(filter));
  }

  getUsuariosSuccess(res){
    this.itens = res
    if(this.idUsuario != null && this.idUsuario != '00000000-0000-0000-0000-000000000000'){
      this.usuario.emit(this.itens.find(x => x.id == this.idUsuario));
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getUsuarios(filter: string) {
    this.service.getUsuarios(filter).subscribe(
      res => this.itens = res,
      err => console.log(err)
    )
  }

  selecionar(id){
    this.usuario.emit(this.itens.find(x => x.id == id));
  }

}