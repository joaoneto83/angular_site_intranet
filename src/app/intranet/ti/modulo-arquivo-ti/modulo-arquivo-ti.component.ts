import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModuloArquivoTi } from './moduloArquivoTi';
import { ActivatedRoute } from '@angular/router';
import { EditModuloArquivoTiComponent } from './edit-modulo-arquivo-ti/edit-modulo-arquivo-ti.component';
import { TiService } from '../ti.service';

@Component({
  selector: 'app-modulo-arquivo-ti',
  templateUrl: './modulo-arquivo-ti.component.html',
  styleUrls: ['./modulo-arquivo-ti.component.css']
})
export class ModuloArquivoTiComponent implements OnInit {

  modulosArquivos: ModuloArquivoTi[] = [];
  secoesExistentes: any[] = [];
  rows: any[] = [];

  @Input() perfilAdmin: string;
  @ViewChild('modalModulo') modalModulo: EditModuloArquivoTiComponent;

  constructor(private activatedRoute: ActivatedRoute,
    private tiService: TiService) { }

  ngOnInit() {   
    
    this.modulosArquivos = this.activatedRoute.snapshot.data['modulosArquivos'];

    this.secoesExistentes = this.getSecoes(this.modulosArquivos);
    this.rows = this.groupColumns(this.modulosArquivos);
  }

  getSecoes(modulos: ModuloArquivoTi[]){
    const newSecoes = [];

    modulos.forEach(function(item){
      if(newSecoes == null)
      newSecoes.push(item.secao);

      else
        if(!newSecoes.includes(item.secao))
        newSecoes.push(item.secao);
    });

    return newSecoes;
  }

  groupColumns(lista: ModuloArquivoTi[]) {
    const newRows = [];
    var modulo = [];

    this.secoesExistentes.forEach(function(item){

      modulo = lista.filter(x => x.secao == item);
      
      for (let index = 0; index < modulo.length; index += 4) {
        newRows.push(modulo.slice(index, index + 4));
      }
    });

    return newRows;
  }

  get logado(): boolean {
    return true;
  }

  
  open(secao: string) {
    
    let model = {
        nome: '',
        secao: secao,
        arquivos: [],
        ativo: true
    } as ModuloArquivoTi;

    this.modalModulo.open(model);
  }

  atualiza(){
      this.tiService.getModulosArquivos().subscribe(
          res => this.atualizaSuccess(res),
          err => console.log(err)
      )
  }

  atualizaSuccess(res) {
    this.modulosArquivos = res;
    this.rows = this.groupColumns(this.modulosArquivos);
  }
}
