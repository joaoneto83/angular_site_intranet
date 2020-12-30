import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Notificacao } from '../../../../app/intranet/_models/notificacao';
import { Aviso } from './aviso';
import { EditAvisoComponent } from './edit-aviso/edit-aviso.component';
import { AvisoService } from './aviso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {
  
  @Input()
  icone: string;

  @Input()
  titulo: string;

  @Input()
  itens: Aviso[];

  @Input()
  fotos: string[];

  @Input()
  codigoTipoAviso: string;

  @Input()
  modulo: string;

  @Input()
  perfilAdmin: string;

  @ViewChild('modalAviso')
  modalAviso: EditAvisoComponent;

  constructor(private service: AvisoService, private router: Router) { }

  ngOnInit(): void {

  }

  open() {
    let model = {
      titulo: '',
      descricao: '',
      ativo: true,
      modulo: this.modulo,
      codigoTipoAviso: this.codigoTipoAviso
    } as Aviso;

    this.modalAviso.open(model);
  }

  editAviso(aviso: Aviso) {
    let model = aviso;

    this.modalAviso.open(model);
  }

  atualiza(){
    this.service.getAvisosPorModulo(this.modulo).subscribe(
      res => this.itens = res,
      err => console.log(err)
    )
  }

  verAviso(id: string){
    this.router.navigate(['/PortaldeApoio/Aviso/' + id]);
  }
}