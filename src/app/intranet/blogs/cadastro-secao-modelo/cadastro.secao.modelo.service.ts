import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../../_models/produto';
import { environment } from '../../../../environments/environment';
import { Secao } from './secao';
import { SecaoModelo } from '../../../_models/secaoModelo';
import { Arquivo } from "../../../_models/Arquivo";
import { SecaoModeloGrupoSave } from '../../../_models/SecaoModeloGrupoSave';

@Injectable({
    providedIn: 'root',
})
export class CadastroSecaoService {
    constructor(private http: HttpClient) { }

    getSecoes(): Observable<Secao[]>{
        return this.http.get<Secao[]>(
            `${environment.PORTAL_API}/Produto/Secoes`);
    }

  getSecoesModelo(idModelo: string): Observable<SecaoModelo[]>{
    return this.http.get<SecaoModelo[]>(
      `${environment.PORTAL_API}/Produto/SecoesModelo/${idModelo}`);
    }

  addSecaoModelo(secao: SecaoModelo): Observable<SecaoModelo>{
    return this.http.post<SecaoModelo>(
          `${environment.PORTAL_API}/Produto/AddSecaoModelo`, secao);
    }

    delSecaoProduto(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelSecoesModelo/${id}`);
    }

    addImagemSecaoProduto(arquivo: Arquivo): Observable<Arquivo>{
        return this.http.post<Arquivo>(
            `${environment.PORTAL_API}/Produto/AddImagemSecaoModelo`, arquivo);
    }

    delImagemSecaoProduto(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelImagemSecaoModelo/${id}`);
  }

  SalvarSecaoModeloGrupo(secaoModelo: SecaoModeloGrupoSave): Observable<SecaoModeloGrupoSave> {
    return this.http.post<SecaoModeloGrupoSave>(
      `${environment.PORTAL_API}/Produto/SalvarSecaoModeloGrupo`, secaoModelo);
  }
  retornaSecoesModeloGrupoProduto(id: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${environment.PORTAL_API}/Produto/RetornaSecoesModeloGrupoProduto/${id}`);
  }
}
