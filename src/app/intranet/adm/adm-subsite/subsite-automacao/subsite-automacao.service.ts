import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { Video } from '../../../../_models/video';

@Injectable({
    providedIn: 'root',
})
export class SubsiteAutomacaoService {
    constructor(private http: HttpClient) { }


    salvar(videos: Video[]): Observable<Video[]> {

        return this.http.post<Video[]>(
            `${environment.PORTAL_API}/Video/Salvar`, videos);
    }
}