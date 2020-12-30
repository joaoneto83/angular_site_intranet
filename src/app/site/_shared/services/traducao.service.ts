import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'Elgin-Idioma';

@Injectable({ providedIn: 'root' })
export class TraducaoService {

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        this.getIdioma();
    }

    setIdioma(idioma: string) {
        if (isPlatformBrowser(this.platformId)) {
            window.sessionStorage.setItem(KEY, idioma);
        }
    }

    getIdioma(): string {
        if (isPlatformBrowser(this.platformId)) {
            let idioma = window.sessionStorage.getItem(KEY);
            if (!idioma)
                this.setIdioma('pt');

            return idioma;
        }
        else {
            this.setIdioma('pt');
            return 'pt';
        }
    }
}