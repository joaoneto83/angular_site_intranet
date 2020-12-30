import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderService  {

    menuAtivo$: Observable<any>;
    private menuAtivoSubject = new Subject<any>();

    submenuAtivo$: Observable<string>;
    private submenuAtivoSubject = new BehaviorSubject<string>('');

    constructor() {
        this.menuAtivo$ = this.menuAtivoSubject.asObservable();
        this.submenuAtivo$ = this.submenuAtivoSubject.asObservable();
    }

    menuAtivo(data) {
        this.menuAtivoSubject.next(data);
    }

    submenuAtivo(data) {
        this.submenuAtivoSubject.next(data);
    }   
}
