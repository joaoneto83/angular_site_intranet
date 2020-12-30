import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ElginNews } from '../../../app/_models/elginNews';

@Injectable({
    providedIn: 'root',
})
export class ElginNewsService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    get(): Observable<ElginNews[]>{
        return this.http.get<ElginNews[]>(
            `${environment.PORTAL_API}/ElginNews`);
    }

}