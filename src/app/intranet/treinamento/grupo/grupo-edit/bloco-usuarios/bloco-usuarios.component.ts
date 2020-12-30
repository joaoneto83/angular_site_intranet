import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Usuario } from '../../../../../../app/intranet/_models/usuario';
import { UsuarioService } from '../../../usuarios/usuario.service';

@Component({
  selector: 'app-bloco-usuarios',
  templateUrl: './bloco-usuarios.component.html',
  styleUrls: ['./bloco-usuarios.component.css']
})
export class BlocoUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  txtBusca: string = '';
  maxHeightUl: string;
  debounce: Subject<string> = new Subject<string>();

  @Input()
  usuariosGrupo: Usuario[];

  @Input()
  idUsuario: string;

  @Output()
  usuarioSelecionado = new EventEmitter<Usuario>();

  @Output()
  usuarioRemovido = new EventEmitter<Usuario>();

  constructor(private service: UsuarioService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getUsuarios(this.txtBusca).subscribe(
      res => this.getUsuariosSuccess(res),
      err => console.log(err));

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.getUsuarios(filter));
  }

  getUsuariosSuccess(res) {
    this.usuarios = res

    if (this.usuariosGrupo)
      this.usuariosGrupo.forEach(elem => {
        let usuario = this.usuarios.find(x => x.id == elem.id);
        
        if (usuario)
          usuario.selecionado = true;
      });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getUsuarios(filter: string) {
    this.service.getUsuarios(filter).subscribe(
      res => this.getUsuariosSuccess(res),
      err => console.log(err)
    )
  }


  selecionar(id) {
    let usuario = this.usuarios.find(x => x.id == id);

    if (usuario.selecionado)
      this.usuarioSelecionado.emit(usuario);
    else
      this.usuarioRemovido.emit(usuario)
  }

}