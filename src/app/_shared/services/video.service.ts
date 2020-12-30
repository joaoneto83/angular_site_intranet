import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Video } from '../../_models/video';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getVideos(modulo): Observable<Video[]> {
        return this.http.get<Video[]>(
            `${environment.PORTAL_API}/Video/GetVideos/${modulo}`);
    }

    getVideosIdioma(modulo, idioma): Observable<Video[]> {
        return this.http.get<Video[]>(
            `${environment.PORTAL_API}/Video/GetVideos/${modulo}?idioma=${idioma}`);
    }
}