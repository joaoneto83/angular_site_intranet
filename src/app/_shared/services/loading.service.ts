import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoadingService implements OnInit{
    ngOnInit(): void {
        this.hide();
    }

    @Output() fire: EventEmitter<any> = new EventEmitter();

   constructor() {
   }

   hide() {
     this.fire.emit(false);
   }

   show() {
     this.fire.emit(true);
   }

   getEmittedValue() {
     return this.fire;
   }

}