import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SiteHeaderService  {

    menuAtivo$: Observable<any>;
    private menuAtivoSubject = new Subject<any>();

    constructor() {
        this.menuAtivo$ = this.menuAtivoSubject.asObservable();
    }

    menuAtivo(data) {
        this.menuAtivoSubject.next(data);
    }
    
}
