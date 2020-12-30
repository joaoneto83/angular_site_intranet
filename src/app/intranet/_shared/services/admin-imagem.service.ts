import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminImagemService {
        
    constructor(private http: HttpClient) { 
    }

    SalvarBanner(formData: FormData): Observable<boolean>{

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Imagem/SalvarBanner`, formData);
  }

  SalvarBanner2(formData: FormData): Observable<boolean> {

    return this.http.post<boolean>(
      `${environment.PORTAL_API}/Imagem/SalvarBanner2`, formData);
  }

    RemoverBanner(id: string) : Observable<boolean>{

        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Imagem/RemoverBanner/${id}`);
    }

}
